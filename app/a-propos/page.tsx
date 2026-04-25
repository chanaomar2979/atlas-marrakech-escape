import Link from 'next/link'
import { ArrowRight, Heart, Shield, Users, Star } from 'lucide-react'

export const metadata = {
  title: 'À propos | Atlas Marrakech Escape',
  description: 'Découvrez notre agence de voyages authentique au Maroc. Notre histoire, nos valeurs et notre équipe.',
}

const values = [
  {
    icon: <Heart size={28} style={{ color: '#C2472A' }} />,
    title: 'Passion du Maroc',
    desc: 'Nés et élevés au Maroc, nous partageons notre culture et nos terres avec amour et authenticité.',
  },
  {
    icon: <Shield size={28} style={{ color: '#C2472A' }} />,
    title: 'Sécurité & Confiance',
    desc: 'Tous nos guides sont certifiés, nos véhicules assurés et nos hébergements rigoureusement sélectionnés.',
  },
  {
    icon: <Users size={28} style={{ color: '#C2472A' }} />,
    title: 'Impact local positif',
    desc: "Nous travaillons avec les artisans, agriculteurs et familles berbères locaux pour un tourisme qui bénéficie à tous.",
  },
  {
    icon: <Star size={28} style={{ color: '#C2472A' }} />,
    title: 'Excellence du service',
    desc: 'Chaque détail compte. Nous soignons chaque aspect de votre voyage pour vous offrir une expérience inoubliable.',
  },
]

const teamMembers = [
  {
    name: 'Votre guide local',
    role: 'Fondateur & Guide principal',
    bio: 'Passionné par le désert et les montagnes de l\'Atlas, je vous guide depuis des années à travers les plus beaux paysages du Maroc. Ma mission : partager l\'authenticité de ma terre avec vous.',
    emoji: '🧑‍🦱',
  },
  {
    name: 'Équipe guide',
    role: 'Guides locaux certifiés',
    bio: 'Notre équipe de guides certifiés parle français, anglais, arabe et berbère. Chacun est un expert de sa région et un passionné de la culture marocaine.',
    emoji: '👥',
  },
  {
    name: 'Yasmine (IA)',
    role: 'Conseillère voyage virtuelle',
    bio: 'Notre assistante IA disponible 24h/24 pour répondre à toutes vos questions, vous conseiller sur les circuits et vous aider à préparer votre voyage parfait.',
    emoji: '🤖',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 text-white"
        style={{ background: 'linear-gradient(135deg, #1A1208 0%, #4A3728 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p style={{ color: '#D4A853', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Notre histoire
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            À propos d&apos;Atlas<br />Marrakech Escape
          </h1>
          <p className="text-xl" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
            Une agence familiale née d&apos;une simple passion : partager la beauté authentique du Maroc avec le monde.
          </p>
        </div>
      </div>

      {/* Story */}
      <section style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Notre histoire
              </p>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>
                Nés au pied de l&apos;Atlas
              </h2>
              <div className="space-y-4" style={{ color: '#4A3728', lineHeight: '1.8' }}>
                <p>
                  Atlas Marrakech Escape est né d&apos;un rêve simple : permettre à chaque voyageur de découvrir le vrai Maroc — pas celui des cartes postales, mais celui des rencontres authentiques, des couchers de soleil sur les dunes et du thé partagé avec une famille berbère.
                </p>
                <p>
                  Fondée par des passionnés du désert et des montagnes de l&apos;Atlas, notre agence propose des circuits privés soigneusement conçus pour allier aventure, confort et immersion culturelle profonde.
                </p>
                <p>
                  Notre philosophie : <strong style={{ color: '#1B3A5C' }}>le tourisme responsable</strong>. Nous travaillons exclusivement avec des guides locaux certifiés, des hébergements familiaux et des fournisseurs qui respectent l&apos;environnement et les communautés locales.
                </p>
                <p>
                  Depuis nos débuts, nous avons accompagné plus de 500 voyageurs de toute l&apos;Europe, des États-Unis et du monde entier. Chaque retour client est notre plus belle récompense.
                </p>
              </div>
            </div>
            <div
              className="h-96 rounded-2xl flex items-center justify-center text-9xl"
              style={{ background: 'linear-gradient(135deg, #C2472A, #D4A853)' }}
            >
              <span className="opacity-30">🏔️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Ce qui nous guide
            </p>
            <h2 className="section-title">Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-7 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#FBF6EE' }}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B5B45' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              L&apos;équipe
            </p>
            <h2 className="section-title">Ceux qui vous accompagnent</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m) => (
              <div key={m.name} className="card p-8 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #C2472A, #D4A853)' }}
                >
                  {m.emoji}
                </div>
                <h3 className="font-bold text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>{m.name}</h3>
                <p className="text-sm mb-4 font-medium" style={{ color: '#C2472A' }}>{m.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#6B5B45' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C2472A', padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Commençons votre aventure
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Contactez-nous pour discuter de votre voyage de rêve au Maroc.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold py-4 px-8 rounded text-base"
            style={{ background: 'white', color: '#C2472A' }}
          >
            Nous écrire <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
