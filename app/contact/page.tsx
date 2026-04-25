'use client'

import { useState } from 'react'
import { tours } from '@/lib/tours'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Loader2 } from 'lucide-react'

const tourOptions = [
  { value: '', label: 'Sélectionnez un circuit…' },
  ...tours.map((t) => ({ value: t.slug, label: t.title })),
  { value: 'sur-mesure', label: 'Circuit sur mesure' },
]

// ---------------------------------------------------------------------------
// Client-side validation — mirrors server rules for fast feedback
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_E164_RE = /^\+[1-9]\d{6,14}$/

interface FormState {
  name: string
  email: string
  phone: string
  tour: string
  date: string
  people: string
  message: string
  /** Honeypot — must remain empty; invisible to real users */
  website: string
}

function validateForm(form: FormState): string | null {
  if (form.name.trim().length < 2 || form.name.trim().length > 100) {
    return 'Le nom doit contenir entre 2 et 100 caractères.'
  }
  if (!EMAIL_RE.test(form.email.trim())) {
    return 'Adresse email invalide.'
  }
  if (form.phone.trim()) {
    const normalised = form.phone.replace(/[\s\-().]/g, '')
    if (!PHONE_E164_RE.test(normalised)) {
      return 'Numéro de téléphone invalide. Utilisez le format international (+33612345678).'
    }
  }
  if (!form.tour) {
    return 'Veuillez sélectionner un circuit.'
  }
  if (form.people.trim()) {
    const n = Number(form.people)
    if (!Number.isInteger(n) || n < 1 || n > 50) {
      return 'Le nombre de personnes doit être compris entre 1 et 50.'
    }
  }
  if (form.message.length > 2000) {
    return 'Le message ne doit pas dépasser 2000 caractères.'
  }
  return null
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    people: '',
    message: '',
    website: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const validationError = validateForm(form)
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
      } else {
        setError(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setError('Impossible d\'envoyer votre demande. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full rounded-lg px-4 py-3 text-sm outline-none border transition-colors focus:border-[#C2472A]"
  const inputStyle = { background: '#FBF6EE', border: '1.5px solid #E8D9C0', color: '#1A1208' }

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #C2472A 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p style={{ color: '#F5E6C8', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Parlons de votre voyage
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contactez-nous
          </h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Réponse garantie sous 24h · Devis gratuit et sans engagement
          </p>
        </div>
      </div>

      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                  Nos coordonnées
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FBF6EE' }}>
                      <MapPin size={18} style={{ color: '#C2472A' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>Adresse</p>
                      <p className="text-sm mt-0.5" style={{ color: '#6B5B45' }}>Marrakech, Maroc</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FBF6EE' }}>
                      <Phone size={18} style={{ color: '#C2472A' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>WhatsApp & Téléphone</p>
                      <a href="https://wa.me/212615569692" className="text-sm mt-0.5 block hover:underline" style={{ color: '#C2472A' }}>
                        +212 6 15 56 96 92
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FBF6EE' }}>
                      <Mail size={18} style={{ color: '#C2472A' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>Email</p>
                      <a href="mailto:atlasmarrakechescape@gmail.com" className="text-sm mt-0.5 block hover:underline" style={{ color: '#C2472A' }}>
                        atlasmarrakechescape@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FBF6EE' }}>
                      <Clock size={18} style={{ color: '#C2472A' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>Disponibilité</p>
                      <p className="text-sm mt-0.5" style={{ color: '#6B5B45' }}>7j/7 · 8h – 22h (heure du Maroc)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #1B3A5C, #2a5280)', color: 'white' }}>
                <p className="font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>💬 Réponse rapide</p>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Pour une réponse immédiate, écrivez-nous sur WhatsApp. Nous répondons généralement en moins d&apos;une heure.
                </p>
                <a
                  href="https://wa.me/212615569692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full !justify-center"
                >
                  Écrire sur WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="font-semibold text-sm mb-3" style={{ color: '#1B3A5C' }}>✦ Notre engagement</p>
                <ul className="space-y-2">
                  {[
                    'Réponse sous 24h garantie',
                    'Devis gratuit et sans engagement',
                    'Conseils personnalisés',
                    'Accompagnement jusqu\'au retour',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#4A3728' }}>
                      <CheckCircle size={13} style={{ color: '#D4A853' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                {success ? (
                  <div className="text-center py-12" role="status" aria-live="polite">
                    <div className="text-6xl mb-4" aria-hidden="true">✅</div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                      Demande envoyée !
                    </h3>
                    <p style={{ color: '#6B5B45' }}>
                      Merci pour votre message. Nous vous contacterons dans les 24h pour discuter de votre voyage.
                    </p>
                    <p className="mt-4 text-sm" style={{ color: '#6B5B45' }}>
                      Pour une réponse immédiate :{' '}
                      <a href="https://wa.me/212615569692" className="underline" style={{ color: '#C2472A' }}>
                        WhatsApp
                      </a>
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-7" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                      Demande de devis gratuit
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-describedby="form-help">
                      <p id="form-help" className="sr-only">
                        Les champs marqués d&apos;un astérisque sont obligatoires.
                      </p>
                      {/*
                        Honeypot field — hidden from real users via CSS positioning.
                        Bots that auto-fill all fields will populate this, signalling spam.
                        We use off-screen positioning rather than display:none so that
                        smarter bots skipping invisible elements are less likely to detect it.
                      */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: '-9999px',
                          top: '-9999px',
                          opacity: 0,
                          pointerEvents: 'none',
                        }}
                      >
                        <label htmlFor="website">Ne pas remplir</label>
                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={form.website}
                          onChange={handleChange}
                          autoComplete="off"
                          tabIndex={-1}
                        />
                      </div>

                      <fieldset className="space-y-5 border-0 p-0 m-0">
                        <legend className="text-sm font-semibold mb-3" style={{ color: '#1B3A5C' }}>
                          Vos coordonnées
                        </legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                              Nom complet <span aria-hidden="true">*</span>
                              <span className="sr-only"> (champ obligatoire)</span>
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              required
                              aria-required="true"
                              aria-describedby={error ? 'form-error' : undefined}
                              autoComplete="name"
                              minLength={2}
                              maxLength={100}
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Jean Dupont"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                              Email <span aria-hidden="true">*</span>
                              <span className="sr-only"> (champ obligatoire)</span>
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              required
                              aria-required="true"
                              aria-describedby={error ? 'form-error' : undefined}
                              autoComplete="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="jean@email.com"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                              WhatsApp / Téléphone
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              name="phone"
                              autoComplete="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+33612345678"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-people" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                              Nombre de personnes
                            </label>
                            <input
                              id="contact-people"
                              type="number"
                              name="people"
                              min="1"
                              max="50"
                              inputMode="numeric"
                              value={form.people}
                              onChange={handleChange}
                              placeholder="2"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="space-y-5 border-0 p-0 m-0">
                        <legend className="text-sm font-semibold mb-3" style={{ color: '#1B3A5C' }}>
                          Votre projet de voyage
                        </legend>

                        <div>
                          <label htmlFor="contact-tour" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                            Circuit souhaité <span aria-hidden="true">*</span>
                            <span className="sr-only"> (champ obligatoire)</span>
                          </label>
                          <select
                            id="contact-tour"
                            name="tour"
                            required
                            aria-required="true"
                            aria-describedby={error ? 'form-error' : undefined}
                            value={form.tour}
                            onChange={handleChange}
                            className={inputClass}
                            style={inputStyle}
                          >
                            {tourOptions.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="contact-date" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                            Date de départ souhaitée
                          </label>
                          <input
                            id="contact-date"
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5" style={{ color: '#1B3A5C' }}>
                            Message / Demandes particulières
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            maxLength={2000}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Dites-nous en plus sur votre projet de voyage, vos préférences, budget approximatif…"
                            className={inputClass}
                            style={{ ...inputStyle, resize: 'vertical' }}
                          />
                        </div>
                      </fieldset>

                      {/* WCAG 3.3.1 Error Identification & 4.1.3 Status Messages */}
                      {error && (
                        <p
                          id="form-error"
                          role="alert"
                          aria-live="assertive"
                          className="text-sm p-3 rounded-lg"
                          style={{ background: '#FEE2E2', color: '#B91C1C' }}
                        >
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full !justify-center !text-base !py-4"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                            <span>Envoi en cours…</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} aria-hidden="true" />
                            <span>Envoyer ma demande</span>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center" style={{ color: '#6B5B45' }}>
                        En soumettant ce formulaire, vous acceptez que nous vous contactions pour votre demande de voyage.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
