import { getTourBySlug, tours } from '@/lib/tours'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, Users, CheckCircle, XCircle, ArrowRight, ArrowLeft, Phone, MapPin } from 'lucide-react'

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} | Atlas Marrakech Escape`,
    description: tour.description,
  }
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white"
        style={{
          background:
            tour.category === 'honeymoon'
              ? 'linear-gradient(135deg, #8B2252 0%, #C2472A 100%)'
              : tour.category === 'adventure'
              ? 'linear-gradient(135deg, #1B3A5C 0%, #2a7a5c 100%)'
              : 'linear-gradient(135deg, #C2472A 0%, #D4A853 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/tours" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} aria-hidden="true" /> Retour aux circuits
          </Link>
          {tour.badge && <span className="badge block w-fit mb-4">{tour.badge}</span>}
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', maxWidth: '800px' }}>
            {tour.title}
          </h1>
          <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>{tour.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full" style={{ background: 'rgba(0,0,0,0.25)' }}>
              <Clock size={15} /> {tour.duration}
            </span>
            <span className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full" style={{ background: 'rgba(0,0,0,0.25)' }}>
              <Users size={15} /> {tour.groupType}
            </span>
            <span className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full" style={{ background: 'rgba(0,0,0,0.25)' }}>
              <MapPin size={15} /> Depuis Marrakech
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                  À propos de ce circuit
                </h2>
                <p className="leading-relaxed" style={{ color: '#4A3728', lineHeight: '1.8' }}>{tour.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                  Points forts
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm" style={{ color: '#4A3728' }}>
                      <CheckCircle size={16} style={{ color: '#D4A853', marginTop: '2px', flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-7" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                  Programme jour par jour
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={day.day} className="flex gap-5">
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                          style={{ background: '#C2472A' }}
                        >
                          {day.day}
                        </div>
                        {index < tour.itinerary.length - 1 && (
                          <div className="w-px flex-1 mt-2" style={{ background: '#F5E6C8', minHeight: '2rem' }} />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-bold text-base mb-2" style={{ color: '#1B3A5C', fontFamily: 'Playfair Display, serif' }}>
                          {day.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B5B45' }}>{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-7 shadow-sm">
                  <h3 className="font-bold text-lg mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                    Inclus dans le prix
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#4A3728' }}>
                        <CheckCircle size={15} style={{ color: '#22c55e', marginTop: '1px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-7 shadow-sm">
                  <h3 className="font-bold text-lg mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                    Non inclus
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#6B5B45' }}>
                        <XCircle size={15} style={{ color: '#ef4444', marginTop: '1px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6" aria-label="Réservation et informations pratiques du circuit">
              {/* Booking card */}
              <div className="bg-white rounded-xl p-7 shadow-sm sticky top-24">
                <div className="text-center mb-5">
                  <p className="text-sm" style={{ color: '#6B5B45' }}>Prix personnalisé selon votre groupe</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: '#1B3A5C', fontFamily: 'Playfair Display, serif' }}>
                    Devis gratuit
                  </p>
                </div>

                <div className="space-y-3 mb-6 pb-6" style={{ borderBottom: '1px solid #F5E6C8' }}>
                  {[
                    { label: 'Durée', value: tour.duration },
                    { label: 'Type', value: tour.groupType },
                    { label: 'Départ', value: 'Marrakech' },
                    { label: 'Acompte', value: '10% à la réservation' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span style={{ color: '#6B5B45' }}>{row.label}</span>
                      <span style={{ color: '#1A1208', fontWeight: 500 }}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/contact?tour=${tour.slug}`} className="btn-primary w-full !justify-center mb-3">
                  Réserver ce circuit <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full !justify-center"
                >
                  <Phone size={16} /> WhatsApp
                </a>

                <p className="text-xs text-center mt-4" style={{ color: '#6B5B45' }}>
                  Réponse garantie sous 24h · Paiement sécurisé
                </p>
              </div>

              {/* Info box */}
              <div className="rounded-xl p-5 text-sm" style={{ background: '#F5E6C8' }}>
                <p className="font-semibold mb-2" style={{ color: '#1B3A5C' }}><span aria-hidden="true">💡</span> Meilleure période</p>
                <p style={{ color: '#4A3728' }}>Octobre à Avril — températures agréables de 15 à 25°C dans le désert.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other tours */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
            Autres circuits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours.filter((t) => t.slug !== tour.slug).slice(0, 3).map((t) => (
              <Link href={`/tours/${t.slug}`} key={t.slug} className="card block p-5">
                <span className="text-2xl mb-2 block">{t.category === 'honeymoon' ? '💑' : t.category === 'adventure' ? '📸' : '🏜️'}</span>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>{t.title}</h3>
                <p className="text-xs" style={{ color: '#6B5B45' }}>{t.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
