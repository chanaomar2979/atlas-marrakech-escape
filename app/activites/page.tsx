import { activities } from '@/lib/activities'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Activités au Maroc | Atlas Marrakech Escape',
  description: 'Chameau, quad, sandboard, montgolfière, hammam, cuisine... Découvrez toutes nos activités authentiques au Maroc.',
}

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #2a7a5c 0%, #1B3A5C 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p style={{ color: '#D4A853', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Expériences authentiques
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Activités & Aventures
          </h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Enrichissez votre séjour avec nos activités authentiques au cœur du désert, des montagnes et de la culture marocaine.
          </p>
        </div>
      </div>

      {/* Activities grid */}
      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="card p-8 flex gap-6">
                <span className="text-5xl shrink-0">{activity.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                      {activity.title}
                    </h2>
                    <span className="badge !text-xs shrink-0 ml-3">{activity.duration}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5B45' }}>
                    {activity.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {activity.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs" style={{ color: '#4A3728' }}>
                        <CheckCircle size={12} style={{ color: '#D4A853', flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1B3A5C', padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Intégrez une activité à votre circuit
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Toutes nos activités peuvent être combinées avec nos circuits. Contactez-nous pour personnaliser votre voyage.
          </p>
          <Link href="/contact" className="btn-primary !text-base !py-4 !px-8">
            Personnaliser mon voyage <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
