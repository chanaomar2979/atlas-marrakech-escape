import { accommodations } from '@/lib/accommodations'
import Link from 'next/link'
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Hébergements au Maroc | Atlas Marrakech Escape',
  description: 'Riads, camps de luxe dans le Sahara, kasbahs et hôtels. Découvrez nos hébergements authentiques au Maroc.',
}

export default function HebergementPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #8B2252 0%, #C2472A 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p style={{ color: '#F5E6C8', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Où dormir
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hébergements authentiques
          </h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Des riads traditionnels aux camps de luxe sous les étoiles du Sahara, chaque nuit est une expérience unique.
          </p>
        </div>
      </div>

      {/* Accommodations */}
      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {accommodations.map((acc, index) => (
            <div
              key={acc.id}
              className="card p-0 overflow-hidden"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Visual */}
                <div
                  className="md:w-2/5 h-64 md:h-auto flex items-center justify-center text-8xl"
                  style={{
                    background:
                      acc.id === 'riad' ? 'linear-gradient(135deg, #8B2252, #C2472A)' :
                      acc.id === 'camp-luxe' ? 'linear-gradient(135deg, #1A1208, #4A3728)' :
                      acc.id === 'kasbah' ? 'linear-gradient(135deg, #C2472A, #D4A853)' :
                      acc.id === 'hotel' ? 'linear-gradient(135deg, #1B3A5C, #2a5280)' :
                      'linear-gradient(135deg, #2a7a5c, #1B3A5C)',
                    minHeight: '260px',
                  }}
                >
                  <span className="opacity-30">{acc.icon}</span>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <span className="badge w-fit mb-3">{acc.type}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                    {acc.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B5B45' }}>{acc.description}</p>

                  <div className="flex items-center gap-1.5 mb-5 text-sm" style={{ color: '#C2472A' }}>
                    <MapPin size={14} />
                    <span style={{ color: '#4A3728' }}>{acc.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {acc.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-1.5 text-sm" style={{ color: '#4A3728' }}>
                        <CheckCircle size={13} style={{ color: '#D4A853', flexShrink: 0 }} />
                        {a}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    {acc.priceFrom && (
                      <span className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>{acc.priceFrom}</span>
                    )}
                    <Link href="/contact" className="btn-primary !py-2.5 !px-5">
                      Demander un devis <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="mb-6" style={{ color: '#6B5B45' }}>
            Notre équipe vous conseillera l&apos;hébergement le plus adapté à votre budget et vos attentes.
          </p>
          <Link href="/contact" className="btn-primary !text-base !py-4 !px-8">
            Nous contacter <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
