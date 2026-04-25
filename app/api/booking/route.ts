import { NextRequest, NextResponse } from 'next/server'
import { tours } from '@/lib/tours'

// ---------------------------------------------------------------------------
// Rate limiting — 5 booking requests per IP per hour
// ---------------------------------------------------------------------------
interface RateLimitEntry {
  count: number
  windowStart: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const RATE_LIMIT_MAX = 5
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
// Valid tour slugs derived from the single source of truth
// ---------------------------------------------------------------------------
const VALID_TOUR_SLUGS = new Set([
  ...tours.map((t) => t.slug),
  'sur-mesure',
])

// ---------------------------------------------------------------------------
// Sanitisation — strip HTML tags and trim
// ---------------------------------------------------------------------------
function sanitise(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Accepts +<country code><digits>, spaces/hyphens/parens allowed between groups
const PHONE_E164_RE = /^\+[1-9]\d{6,14}$/

interface ValidationResult {
  valid: boolean
  error?: string
}

function validateBookingBody(body: Record<string, unknown>): ValidationResult {
  const { name, email, phone, tour, people, message } = body

  // name: required, 2–100 chars
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return { valid: false, error: 'Le nom doit contenir entre 2 et 100 caractères.' }
  }

  // email: required, valid format
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return { valid: false, error: 'Adresse email invalide.' }
  }

  // phone: optional, but if provided must match E.164 after stripping spaces/dashes/parens
  if (phone !== undefined && phone !== null && phone !== '') {
    if (typeof phone !== 'string') {
      return { valid: false, error: 'Numéro de téléphone invalide.' }
    }
    const normalised = phone.replace(/[\s\-().]/g, '')
    if (!PHONE_E164_RE.test(normalised)) {
      return { valid: false, error: 'Numéro de téléphone invalide. Utilisez le format international (+33612345678).' }
    }
  }

  // tour: required, must be a known slug
  if (typeof tour !== 'string' || !VALID_TOUR_SLUGS.has(tour.trim())) {
    return { valid: false, error: 'Circuit sélectionné invalide.' }
  }

  // people: optional, but if provided must be 1–50
  if (people !== undefined && people !== null && people !== '') {
    const n = Number(people)
    if (!Number.isInteger(n) || n < 1 || n > 50) {
      return { valid: false, error: 'Le nombre de personnes doit être compris entre 1 et 50.' }
    }
  }

  // message: optional, max 2000 chars
  if (message !== undefined && message !== null && message !== '') {
    if (typeof message !== 'string' || message.length > 2000) {
      return { valid: false, error: 'Le message ne doit pas dépasser 2000 caractères.' }
    }
  }

  return { valid: true }
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // Resolve client IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de demandes. Veuillez réessayer dans une heure.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  // Honeypot check — bots fill hidden fields humans never see
  if (body.website !== undefined && body.website !== '') {
    // Silently accept to avoid fingerprinting the bot trap
    return NextResponse.json({
      success: true,
      message: 'Votre demande a bien été reçue. Nous vous contacterons dans les 24h.',
    })
  }

  const validation = validateBookingBody(body)
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 })
  }

  // Sanitise all text fields before any further processing
  const name = sanitise(String(body.name))
  const email = sanitise(String(body.email)).toLowerCase()
  const phone = body.phone ? sanitise(String(body.phone)) : ''
  const tour = sanitise(String(body.tour))
  const date = body.date ? sanitise(String(body.date)) : ''
  const people = body.people ? Number(body.people) : null
  const message = body.message ? sanitise(String(body.message)) : ''

  // In production: send email via Resend/SendGrid/Nodemailer
  // Avoid logging PII in production; shown here for development only
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('Nouvelle réservation:', { name, email, phone, tour, date, people, message })
  }

  return NextResponse.json({
    success: true,
    message: 'Votre demande a bien été reçue. Nous vous contacterons dans les 24h.',
  })
}
