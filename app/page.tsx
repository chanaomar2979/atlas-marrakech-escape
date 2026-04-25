import Link from 'next/link'
import { tours } from '@/lib/tours'
import { activities } from '@/lib/activities'
import { Star, MapPin, Clock, Users, ArrowRight, CheckCircle, Phone, MessageCircle, ChevronUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Circuits Désert Maroc | Marrakech Sahara Privé',
  description:
    'Atlas Marrakech Escape : circuits désert maroc privés depuis Marrakech. Voyage maroc privé, excursion sahara, lune de miel maroc. Devis gratuit, réponse sous 24h.',
  alternates: {
    canonical: 'https://atlasmarrakechescape.com',
  },
}

const travelAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': 'https://atlasmarrakechescape.com/#travelagency',
  name: 'Atlas Marrakech Escape',
  url: 'https://atlasmarrakechescape.com',
  description:
    'Agence de voyage spécialisée dans les circuits privés au Maroc. Désert du Sahara, Haut Atlas, kasbahs et expériences authentiques depuis Marrakech.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Médina de Marrakech',
    addressLocality: 'Marrakech',
    addressRegion: 'Marrakech-Safi',
    postalCode: '40000',
    addressCountry: 'MA',
  },
  priceRange: '€€€',
  telephone: '+212600000000',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
}


const stats = [
  { value: '500+', label: 'Voyageurs satisfaits' },
  { value: '6', label: 'Circuits uniques' },
  { value: '8+', label: 'Activités proposées' },
  { value: '4.9/5', label: 'Note moyenne' },
]

const testimonials = [
  {
    name: 'Marie & Pierre',
    country: 'France 🇫🇷',
    text: 'Une expérience absolument magique ! Le camp de luxe sous les étoiles du Sahara restera gravé dans nos mémoires pour toujours. Organisation parfaite, guide exceptionnel.',
    tour: 'Circuit 3 Jours',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    country: 'UK 🇬🇧',
    text: 'I booked the 4-day circuit and it exceeded all my expectations. The kasbahs, the desert, the camel ride at sunset — absolutely stunning. Highly recommend!',
    tour: 'Circuit 4 Jours',
    rating: 5,
  },
  {
    name: 'Ahmed & Leila',
    country: 'Belgique 🇧🇪',
    text: "Pour notre lune de miel, nous avons choisi Atlas Marrakech Escape. Le dîner aux chandelles dans le désert et le massage en couple étaient inoubliables. Merci infiniment !",
    tour: 'Lune de Miel',
    rating: 5,
  },
]

const whyUs = [
  { icon: '🏆', title: 'Circuits privés exclusifs', desc: 'Chaque voyage est personnalisé selon vos désirs, votre rythme et votre budget.' },
  { icon: '🌟', title: 'Guides locaux passionnés', desc: 'Nos guides berbères partagent leur culture avec authenticité et passion.' },
  { icon: '🏕️', title: 'Camps de luxe dans le désert', desc: 'Dormez sous les étoiles dans nos tentes luxueuses avec tout le confort.' },
  { icon: '💎', title: 'Service tout inclus', desc: 'Transport, hébergement, repas, activités : nous gérons tout pour vous.' },
  { icon: '🌍', title: 'Tourisme responsable', desc: "Nous soutenons les communautés locales et respectons l'environnement." },
  { icon: '📞', title: 'Disponible 7j/7', desc: 'Notre équipe est joignable à tout moment avant et pendant votre voyage.' },
]

export default function Home() {
  const featuredTours = tours.slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />

      {/* HERO */}
      <section
        className="hero-grain relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ padding: 0 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80')`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
            <MapPin size={14} className="text-[#D4A853]" aria-hidden="true" />
            Marrakech · Atlas · Sahara
          </div>
          <h1
            className="animate-fade-in-up-delay-1 text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)', fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Vivez le Maroc
            <br />
            <span style={{ color: '#D4A853' }}>Autrement</span>
          </h1>
          <p className="animate-fade-in-up-delay-2 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Circuits privés authentiques depuis Marrakech jusqu&apos;au cœur du Sahara.
            Des expériences inoubliables, une hospitalité sans égale.
          </p>
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary !text-base !py-4 !px-8">
              Découvrir nos circuits
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: '2px solid white', color: 'white' }}
              className="btn-secondary !text-base !py-4 !px-8 hover:!bg-white hover:!text-[#1B3A5C]"
            >
              <Phone size={18} aria-hidden="true" />
              Nous contacter
            </a>
          </div>

          <div className="animate-fade-in-up-delay-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold" style={{ color: '#D4A853', fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span>Découvrir</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" style={{ animation: 'pulse 2s infinite' }} />
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <hr className="gold-divider" aria-hidden="true" />

      {/* WHY US */}
      <section aria-label="Pourquoi choisir Atlas Marrakech Escape" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Pourquoi nous choisir</p>
            <h2 className="section-title">L&apos;expérience Atlas Marrakech Escape</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-6 rounded-xl hover:bg-[#FBF6EE] transition-colors">
                <span className="text-3xl shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B5B45' }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <hr className="gold-divider" aria-hidden="true" />

      {/* FEATURED TOURS */}
      <section aria-label="Nos circuits désert maroc en vedette" style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Nos circuits</p>
              <h2 className="section-title">Voyages signature</h2>
            </div>
            <Link href="/tours" className="btn-secondary !py-2.5 shrink-0">
              Voir tous les circuits <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Link href={`/tours/${tour.slug}`} key={tour.slug} className="card group block">
                <div className="relative h-56 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C2472A, #D4A853)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20">🏜️</span>
                  </div>
                  {tour.badge && (
                    <span className="absolute top-4 left-4 badge">{tour.badge}</span>
                  )}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(0,0,0,0.4)' }}>
                      <Clock size={11} /> {tour.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C', transition: 'color 0.2s' }}>
                    {tour.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: '#6B5B45' }}>{tour.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {tour.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: '#4A3728' }}>
                        <CheckCircle size={14} style={{ color: '#D4A853', marginTop: '2px', flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xs flex items-center gap-1" style={{ color: '#6B5B45' }}>
                      <Users size={12} /> {tour.groupType}
                    </span>
                    <span className="font-semibold text-sm flex items-center gap-1" style={{ color: '#C2472A' }}>
                      Voir le circuit <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <hr className="gold-divider" aria-hidden="true" />

      {/* ACTIVITIES */}
      <section aria-label="Activités et excursions maroc" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Activités</p>
            <h2 className="section-title">Des expériences uniques</h2>
            <p className="mt-3 text-center max-w-xl mx-auto" style={{ fontSize: '1.1rem', color: '#6B5B45' }}>
              Enrichissez votre voyage avec nos activités authentiques
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {activities.slice(0, 8).map((a) => (
              <div
                key={a.id}
                className="rounded-xl p-5 text-center bg-[#FBF6EE] hover:bg-[#F5E6C8] transition-colors cursor-default"
              >
                <span className="text-4xl block mb-3">{a.icon}</span>
                <h3 className="font-bold text-sm leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A5C' }}>{a.title}</h3>
                <p className="text-xs mt-1" style={{ color: '#6B5B45' }}>{a.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/activites" className="btn-primary">
              Explorer toutes les activités <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* INFLUENCER BANNER */}
      <section aria-label="Offre spéciale créateurs de contenu" className="relative py-24 text-white" style={{ padding: '6rem 0' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80')` }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(27,58,92,0.82)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p style={{ color: '#D4A853', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Offre spéciale</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Créateurs de contenu & Influenceurs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Profitez jusqu&apos;à <strong style={{ color: '#D4A853' }}>30% de réduction</strong> sur tous nos circuits.
            Partagez votre aventure marocaine avec votre communauté !
          </p>
          <Link href="/contact" className="btn-primary !text-base !py-4 !px-8">
            Obtenir votre réduction <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-label="Avis clients – voyage maroc privé" style={{ background: '#FBF6EE' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p style={{ color: '#C2472A', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Avis clients</p>
            <h2 className="section-title">Ils ont voyagé avec nous</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#D4A853', color: '#D4A853' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: '#4A3728' }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#1B3A5C' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#6B5B45' }}>{t.country}</p>
                  </div>
                  <span className="badge text-xs" style={{ background: '#F5E6C8', color: '#6B5B45' }}>{t.tour}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-label="Réserver votre circuit désert maroc" style={{ background: '#C2472A', padding: '5rem 0' }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Prêt pour l&apos;aventure ?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Réservez votre circuit ou discutez avec notre conseillère IA en bas à droite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold py-4 px-8 rounded text-base"
              style={{ background: 'white', color: '#C2472A', transition: 'background 0.2s' }}
            >
              Demander un devis <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold py-4 px-8 rounded text-base"
              style={{ border: '2px solid white', color: 'white', transition: 'all 0.2s' }}
            >
              <Phone size={18} aria-hidden="true" /> WhatsApp direct
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON — bottom left */}
      <a
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="whatsapp-pulse fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        style={{ background: '#25D366', color: 'white' }}
      >
        {/* WhatsApp icon via SVG — lucide-react has no WhatsApp icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.537 4.067 1.479 5.782L.057 23.215a.75.75 0 0 0 .928.928l5.433-1.422A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.945 9.945 0 0 1-5.065-1.38l-.363-.215-3.765.987.987-3.765-.215-.363A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      {/* SCROLL TO TOP — pure CSS, visible only when content is tall (no JS needed) */}
      <a
        href="#"
        aria-label="Retour en haut de la page"
        className="fixed bottom-24 left-6 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 opacity-80 hover:opacity-100"
        style={{ background: '#1B3A5C', color: '#D4A853' }}
      >
        <ChevronUp size={20} aria-hidden="true" />
      </a>
    </>
  )
}
