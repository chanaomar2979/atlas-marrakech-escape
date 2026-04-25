'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Circuits', href: '/tours' },
  { label: 'Activités', href: '/activites' },
  { label: 'Hébergement', href: '/hebergement' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // WCAG 2.1.2 No Keyboard Trap & 2.1.1 Keyboard — focus trap + Escape to close
  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return

      const menu = mobileMenuRef.current
      if (!menu) return
      const focusable = menu.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  // WCAG 4.1.2 Name/Role/Value — aria-current page detection
  function isCurrent(href: string): boolean {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`navbar-gold-border fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3 scrolled' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none" aria-label="Atlas Marrakech Escape — Accueil">
          <span
            className={`font-serif font-bold text-xl transition-colors ${
              scrolled ? 'text-[#1B3A5C]' : 'text-white'
            }`}
          >
            Atlas Marrakech
          </span>
          <span
            className={`text-xs tracking-widest uppercase transition-colors flex items-center gap-1 ${
              scrolled ? 'text-[#C2472A]' : 'text-[#D4A853]'
            }`}
          >
            <span aria-hidden="true">✦</span> Escape
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isCurrent(l.href) ? 'page' : undefined}
              className={`nav-link text-sm font-medium hover:text-[#C2472A] transition-colors ${
                scrolled ? 'text-[#1A1208]' : 'text-white'
              } ${isCurrent(l.href) ? 'underline underline-offset-4 decoration-2 decoration-[#C2472A]' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous contacter sur WhatsApp (nouvelle fenêtre)"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? 'text-[#1B3A5C]' : 'text-white'
            } hover:text-[#C2472A]`}
          >
            <Phone size={15} aria-hidden="true" />
            WhatsApp
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
            Réserver
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          ref={burgerRef}
          type="button"
          className={`md:hidden transition-colors p-2 -m-2 ${scrolled ? 'text-[#1A1208]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          role="navigation"
          aria-label="Navigation principale mobile"
          className="md:hidden bg-white border-t border-stone-100 px-4 py-6 flex flex-col gap-4 shadow-xl animate-slide-down"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isCurrent(l.href) ? 'page' : undefined}
              className="text-base font-medium text-[#1A1208] hover:text-[#C2472A] py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-stone-100">
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nous contacter sur WhatsApp (nouvelle fenêtre)"
              className="btn-secondary !justify-center"
            >
              <Phone size={16} aria-hidden="true" />
              WhatsApp
            </a>
            <Link href="/contact" className="btn-primary !justify-center" onClick={() => setOpen(false)}>
              Réserver maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
