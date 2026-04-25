import Link from 'next/link'
import { tours } from '@/lib/tours'
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Circuits Désert Maroc & Excursions | Tous nos Voyages',
  description:
    'Découvrez tous nos circuits désert maroc : 2, 3, 4 ou 5 jours depuis Marrakech. Voyage maroc privé, excursion Sahara, lune de miel maroc. Devis gratuit.',
  alternates: {
    canonical: 'https://atlasmarrakechescape.com/tours',
  },
  openGraph: {
    title: 'Circuits Désert Maroc & Excursions | Tous nos Voyages',
    description: 'Circuits privés 2 à 5 jours depuis Marrakech. Sahara, Atlas, Kasbahs. Devis gratuit sous 24h.',
    url: 'https://atlasmarrakechescape.com/tours',
    type: 'website',
  },
}


const categories = [
  { id: 'all', label: 'Tous les circuits' },
  { id: 'desert', label: 'Désert' },
  { id: 'honeymoon', label: 'Lune de miel' },
  { id: 'adventure', label: 'Aventure' },
]

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white"
        style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #2a5280 50%, #1B3A5C 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80")', backgroundSize: 'cover' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p style={{ color: '#D4A853', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Nos circuits</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Circuits Désert Maroc
          </h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            De 2 à 5 jours, en circuit privé ou partagé. Chaque voyage est une expérience unique au cœur du Maroc authentique.
          </p>
        </div>
      </div>

      {/* Included in all tours */}
      <div style={{ background: '#F5E6C8', padding: '2rem 0' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '✓ Transport 4x4 privé climatisé',
              '✓ Guide professionnel',
              '✓ Hébergements inclus',
              '✓ Chameau offert',
              '✓ Massage offert (3j+)',
            ].map((item) => (
              <span key={item} className="text-sm font-medium" style={{ color: '#4A3728' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tours grid */}
      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.slug} className="card flex flex-col">
                {/* Card image/color header */}
                <div
                  className="card-img-wrap relative h-52 flex items-center justify-center"
                  style={{
                    background: tour.category === 'honeymoon'
                      ? 'linear-gradient(135deg, #6B1A3A 0%, #8B2252 40%, #C2472A 100%)'
                      : tour.category === 'adventure'
                      ? 'linear-gradient(135deg, #0D2438 0%, #1B3A5C 50%, #1e6b52 100%)'
                      : 'linear-gradient(135deg, #8B2500 0%, #C2472A 45%, #D4A853 100%)',
                  }}
                >
                  {/* Decorative texture lines */}
                  <div
                    className="card-img absolute inset-0"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)',
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-7xl" style={{ opacity: 0.18 }}>
                    {tour.category === 'honeymoon' ? '💑' : tour.category === 'adventure' ? '📸' : '🏜️'}
                  </span>
                  {tour.badge && (
                    <span className="absolute top-4 left-4 badge">{tour.badge}</span>
                  )}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(0,0,0,0.4)' }}>
                      <Clock size={11} /> {tour.duration}
                    </span>
                    <span className="text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(0,0,0,0.4)' }}>
                      <Users size={11} /> {tour.groupType}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                    {tour.title}
                  </h2>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: '#6B5B45' }}>{tour.description}</p>

                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#C2472A' }}>Points forts</p>
                    <ul className="space-y-1.5">
                      {tour.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm" style={{ color: '#4A3728' }}>
                          <CheckCircle size={13} style={{ color: '#D4A853', marginTop: '2px', flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link href={`/tours/${tour.slug}`} className="btn-primary flex-1 !justify-center">
                      Détails <ArrowRight size={15} />
                    </Link>
                    <Link href="/contact" className="btn-secondary !py-2 !px-4 shrink-0">
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
            Un circuit sur mesure ?
          </h2>
          <p className="mb-6" style={{ color: '#6B5B45' }}>
            Vous avez des besoins spécifiques ? Durée personnalisée, dates particulières, groupe important ?
            Contactez-nous et nous créerons le circuit parfait pour vous.
          </p>
          <Link href="/contact" className="btn-primary !text-base !py-4 !px-8">
            Demander un circuit personnalisé <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
