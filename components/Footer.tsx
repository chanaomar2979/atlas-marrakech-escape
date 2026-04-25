import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, Globe, Send } from 'lucide-react'

const tours = [
  { label: 'Circuit 2 Jours', href: '/tours/2-jours-marrakech-desert' },
  { label: 'Circuit 3 Jours', href: '/tours/3-jours-marrakech-desert-sahara' },
  { label: 'Circuit 4 Jours', href: '/tours/4-jours-marrakech-sahara-chameau' },
  { label: 'Circuit 5 Jours', href: '/tours/5-jours-marrakech-sahara' },
  { label: 'Lune de Miel', href: '/tours/3-jours-lune-de-miel' },
]

const links = [
  { label: 'Activités', href: '/activites' },
  { label: 'Hébergement', href: '/hebergement' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer-pattern bg-[#1A1208] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="font-serif font-bold text-2xl">Atlas Marrakech</p>
            <p className="text-[#D4A853] text-sm tracking-widest uppercase">Escape</p>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed mb-5">
            Votre agence de voyages authentique au Maroc. Circuits privés, expériences inoubliables et service personnalisé depuis Marrakech jusqu\'au Sahara.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C2472A] transition-colors"
              aria-label="Instagram"
            >
              <Share2 size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C2472A] transition-colors"
              aria-label="Facebook"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>

        {/* Circuits */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-5 text-[#D4A853]">Nos Circuits</h4>
          <ul className="space-y-2.5">
            {tours.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="text-stone-400 text-sm hover:text-white transition-colors"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-5 text-[#D4A853]">Liens utiles</h4>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-stone-400 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-5 text-[#D4A853]">Contactez-nous</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-stone-400">
              <MapPin size={15} className="mt-0.5 text-[#C2472A] shrink-0" />
              Marrakech, Maroc
            </li>
            <li>
              <a
                href="mailto:atlasmarrakechescape@gmail.com"
                className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#C2472A]" />
                atlasmarrakechescape@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/212615569692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#C2472A]" />
                +212 6 15 56 96 92
              </a>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-stone-400 mb-2">Réponse rapide par WhatsApp</p>
            <a
              href="https://wa.me/212615569692"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 !text-sm w-full !justify-center"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif font-bold text-lg text-white mb-1">
                Inspirations &amp; offres exclusives
              </p>
              <p className="text-stone-400 text-sm">
                Recevez nos meilleures offres et conseils voyage directement dans votre boîte mail.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto min-w-0"
              aria-label="Inscription à la newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Votre adresse e-mail"
                className="newsletter-input"
                autoComplete="email"
              />
              <button
                type="submit"
                aria-label="S'inscrire à la newsletter"
                className="flex items-center gap-1.5 px-4 py-2.5 font-semibold text-sm rounded-r-sm shrink-0 transition-colors"
                style={{ background: '#C2472A', color: 'white', borderRadius: '0 4px 4px 0' }}
              >
                <Send size={14} aria-hidden="true" />
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Atlas Marrakech Escape. Tous droits réservés.</p>
          <p>Voyages authentiques au Maroc · Agence agréée</p>
        </div>
      </div>
    </footer>
  )
}
