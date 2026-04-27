import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AIChat from '@/components/AIChat'

const BASE_URL = 'https://magicmarrakech.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C2472A',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Atlas Marrakech Escape | Circuits Désert Maroc',
    template: '%s | Atlas Marrakech Escape',
  },
  description:
    'Agence de voyage privée à Marrakech. Circuits désert Sahara, voyage maroc privé, excursion atlas marrakech et lune de miel maroc. Devis gratuit sous 24h.',
  keywords: [
    'circuit désert maroc',
    'marrakech sahara',
    'voyage maroc privé',
    'atlas marrakech',
    'excursion maroc',
    'lune de miel maroc',
    'circuit privé maroc',
    'désert sahara maroc',
    'voyage marrakech',
  ],
  authors: [{ name: 'Atlas Marrakech Escape', url: BASE_URL }],
  creator: 'Atlas Marrakech Escape',
  publisher: 'Atlas Marrakech Escape',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'fr-FR': BASE_URL,
      'en-GB': BASE_URL + '/en',
    },
  },
  openGraph: {
    title: 'Atlas Marrakech Escape | Circuits Désert Maroc',
    description:
      'Agence de voyage privée à Marrakech. Circuits désert Sahara, voyage maroc privé, excursion atlas marrakech et lune de miel maroc.',
    url: BASE_URL,
    siteName: 'Atlas Marrakech Escape',
    locale: 'fr_FR',
    alternateLocale: ['en_GB'],
    type: 'website',
    images: [
      {
        url: BASE_URL + '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Marrakech Escape – Circuits privés au Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Marrakech Escape | Circuits Désert Maroc',
    description:
      'Circuits privés au Maroc : désert Sahara, atlas marrakech, lune de miel. Devis gratuit.',
    images: [BASE_URL + '/og-image.jpg'],
    creator: '@atlasmarrakechescape',
    site: '@atlasmarrakechescape',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  category: 'travel',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': BASE_URL + '/#organization',
  name: 'Atlas Marrakech Escape',
  url: BASE_URL,
  logo: BASE_URL + '/og-image.jpg',
  image: BASE_URL + '/og-image.jpg',
  description:
    'Agence de voyage spécialisée dans les circuits privés au Maroc. Désert du Sahara, Haut Atlas, kasbahs et expériences authentiques depuis Marrakech.',
  priceRange: '€€€',
  telephone: '+212615569692',
  email: 'atlasmarrakechescape@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Médina de Marrakech',
    addressLocality: 'Marrakech',
    addressRegion: 'Marrakech-Safi',
    postalCode: '40000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/atlasmarrakechescape',
    'https://www.instagram.com/atlasmarrakechescape',
    'https://www.tripadvisor.com/atlasmarrakechescape',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Maroc',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* WCAG 2.4.1 Bypass Blocks — Skip to content link (first focusable element) */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <AIChat />
        <Footer />
      </body>
    </html>
  )
}
