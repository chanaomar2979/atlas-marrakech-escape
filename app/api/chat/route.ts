import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ---------------------------------------------------------------------------
// Rate limiting — simple in-memory store, resets each hour per IP
// ---------------------------------------------------------------------------
interface RateLimitEntry {
  count: number
  windowStart: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const RATE_LIMIT_MAX = 20
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count += 1
  return true
}

// ---------------------------------------------------------------------------
// Input sanitisation — strip all HTML / script tags
// ---------------------------------------------------------------------------
function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------
const MAX_MESSAGES = 50
const MAX_MESSAGE_CHARS = 2000

interface RawMessage {
  role: unknown
  content: unknown
}

function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { valid: false, error: 'Messages array is required and must not be empty.' }
  }

  if (messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Conversation exceeds maximum length of ${MAX_MESSAGES} messages.` }
  }

  for (const msg of messages as RawMessage[]) {
    if (msg.role !== 'user' && msg.role !== 'assistant') {
      return { valid: false, error: 'Invalid message role.' }
    }
    if (typeof msg.content !== 'string') {
      return { valid: false, error: 'Message content must be a string.' }
    }
    if (msg.content.length > MAX_MESSAGE_CHARS) {
      return { valid: false, error: `Message content must not exceed ${MAX_MESSAGE_CHARS} characters.` }
    }
  }

  return { valid: true }
}

// ---------------------------------------------------------------------------
// Security headers applied to every response from this route
// ---------------------------------------------------------------------------
const SECURITY_HEADERS: Record<string, string> = {
  'Content-Security-Policy':
    "default-src 'none'; frame-ancestors 'none'",
  'X-Content-Type-Options': 'nosniff',
}

function applyHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value)
  }
  return response
}

// ---------------------------------------------------------------------------
// SYSTEM_PROMPT
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `Tu es Yasmine, une conseillère voyage passionnée et professionnelle chez Atlas Marrakech Escape, une agence de voyages authentique au Maroc basée à Marrakech.

Ton rôle est d'accompagner les clients du premier message jusqu'à la réservation. Tu parles en français par défaut, mais tu peux répondre en anglais si le client écrit en anglais.

## Nos circuits principaux :
- **Circuit 2 jours** (1 nuit) : Marrakech → Désert Sahara. Idéal pour un weekend. Inclut: Aït Ben Haddou (UNESCO), chameau, camp de luxe.
- **Circuit 3 jours** (2 nuits) : Le plus populaire ! Marrakech → Dadès → Sahara. Gorges du Dadès, Todra, chameau, camp étoilé, massage offert.
- **Circuit 4 jours** (3 nuits) : Immersion complète. Aït Ben Haddou, Dadès, Todra, Sahara, Rissani, Drâa. Massage + cadeau surprise.
- **Circuit 5 jours** (4 nuits) : L'aventure ultime. Familles nomades, Khamlia, coopératives d'argan.
- **Lune de Miel 3 jours** : Romantique et exclusif. Dîner aux chandelles sous les étoiles, champagne sur les dunes, massage couple.
- **Circuit Astrophotographie 3 jours** : Pour les passionnés de photo/astronomie. Ciel nocturne exceptionnel.

## Activités proposées :
- Balade à dos de chameau (1h30-2h)
- Quad dans les dunes
- Sandboard
- Vol en montgolfière
- Hammam & spa traditionnel
- Cours de cuisine marocaine
- Safari 4x4 dans le désert
- Randonnée à cheval

## Hébergements :
- Riads traditionnels (Marrakech, Fès, Essaouira)
- Camps de luxe dans le Sahara (Erg Chebbi)
- Kasbahs historiques (Ouarzazate, Dadès, Nkob)
- Hôtels & resorts

## Ce qui est INCLUS dans tous nos circuits :
✓ 4x4 privé ou minibus climatisé
✓ Guide/chauffeur professionnel
✓ Hébergements + petits-déjeuners + dîners
✓ Balade à chameau
✓ Transferts depuis Marrakech
✓ Massage offert au retour (circuits 3j+)
✓ Cadeau surprise

## Ce qui est EXCLU :
✗ Déjeuners et boissons
✗ Droits d'entrée aux monuments (~1-3€ par site)
✗ Pourboires (recommandés : 50-100 DH/jour)

## Infos pratiques :
- Meilleure saison : Octobre à Avril (15-25°C le jour)
- Été (Juin-Août) : très chaud dans le désert (40°C+), non recommandé
- Groupes acceptés : solo, couples, familles, groupes corporate
- Circuits disponibles depuis : Marrakech, Fès, Casablanca, Agadir, Ouarzazate
- Réduction créateurs de contenu : jusqu'à 30%
- Dépôt requis : 10% à la réservation, solde à l'arrivée

## Ton comportement :
1. Sois chaleureuse, enthousiaste et professionnelle
2. Pose des questions pour comprendre les besoins (dates, durée, groupe, budget, intérêts)
3. Recommande le circuit le plus adapté
4. Mentionne les activités complémentaires pertinentes
5. Pour finaliser une réservation, collecte : nom, dates, nombre de personnes, circuit choisi, activités souhaitées, email/WhatsApp
6. Si quelqu'un veut réserver, propose-leur de remplir le formulaire sur la page Contact ou de nous écrire sur WhatsApp au +212 6 15 56 96 92 (atlasmarrakechescape@gmail.com)
7. Ne donne jamais de prix fixes dans le chat (ils varient selon groupe/saison) — invite à nous contacter pour un devis personnalisé
8. Sois concise : 2-4 phrases par réponse maximum, sauf si une liste est plus claire
9. Utilise des emojis avec modération pour être accessible et chaleureuse`

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // Resolve client IP from standard proxy headers or fallback
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    const response = NextResponse.json(
      { reply: 'Trop de messages envoyés. Veuillez réessayer dans une heure.' },
      { status: 429 }
    )
    return applyHeaders(response)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    const response = NextResponse.json(
      { reply: 'Requête invalide.' },
      { status: 400 }
    )
    return applyHeaders(response)
  }

  const rawMessages = (body as Record<string, unknown>)?.messages
  const validation = validateMessages(rawMessages)

  if (!validation.valid) {
    const response = NextResponse.json(
      { reply: 'Requête invalide.' },
      { status: 400 }
    )
    return applyHeaders(response)
  }

  // Sanitise user messages — strip HTML/script tags before forwarding to AI
  const sanitisedMessages = (rawMessages as RawMessage[]).map((m) => ({
    role: m.role as 'user' | 'assistant',
    content: m.role === 'user' ? stripHtml(m.content as string) : (m.content as string),
  }))

  try {
    const aiResponse = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: sanitisedMessages,
    })

    const reply =
      aiResponse.content[0].type === 'text' ? aiResponse.content[0].text : ''

    const response = NextResponse.json({ reply })
    return applyHeaders(response)
  } catch {
    // Do NOT forward internal error details to the client
    const response = NextResponse.json(
      { reply: 'Désolée, je rencontre un problème technique. Contactez-nous sur WhatsApp ou par email.' },
      { status: 500 }
    )
    return applyHeaders(response)
  }
}
