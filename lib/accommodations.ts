export interface Accommodation {
  id: string
  type: string
  title: string
  description: string
  location: string
  amenities: string[]
  icon: string
  priceFrom?: string
}

export const accommodations: Accommodation[] = [
  {
    id: 'riad',
    type: 'Riad',
    title: 'Riads Traditionnels',
    description:
      'Plongez au cœur de la culture marocaine en séjournant dans un riad authentique. Ces maisons traditionnelles à cour intérieure offrent calme, beauté architecturale et service personnalisé.',
    location: 'Marrakech, Fès, Essaouira',
    amenities: ['Piscine privée', 'Terrasse sur les toits', 'Petit-déjeuner berbère', 'WiFi', 'Air conditionné', 'Décoration artisanale'],
    icon: '🏛️',
    priceFrom: 'À partir de 60€/nuit',
  },
  {
    id: 'camp-luxe',
    type: 'Camp du désert',
    title: 'Camps de Luxe dans le Sahara',
    description:
      'Dormez sous les étoiles du Sahara dans notre camp de luxe exclusif. Des tentes berbères équipées avec salles de bain privées, lits confortables et service de qualité au cœur des dunes.',
    location: 'Erg Chebbi, Merzouga',
    amenities: ['Tente privée avec salle de bain', 'Dîner berbère gastronomique', 'Musique live autour du feu', 'Astronomie nocturne', 'Petit-déjeuner traditionnel', 'Chameau pour l\'arrivée et le départ'],
    icon: '⛺',
    priceFrom: 'À partir de 80€/nuit',
  },
  {
    id: 'kasbah',
    type: 'Kasbah',
    title: 'Kasbahs Historiques',
    description:
      'Séjournez dans d\'authentiques kasbahs restaurées, ces forteresses berbères qui gardent les secrets de l\'histoire du Maroc. Une architecture époustouflante et une atmosphère hors du temps.',
    location: 'Ouarzazate, Vallée du Dadès, Nkob',
    amenities: ['Piscine avec vue', 'Restaurant panoramique', 'Décoration berbère', 'WiFi', 'Spa', 'Jardin privé'],
    icon: '🏯',
    priceFrom: 'À partir de 70€/nuit',
  },
  {
    id: 'hotel',
    type: 'Hôtel',
    title: 'Hôtels & Resorts',
    description:
      'Profitez du confort et du service haut de gamme de nos hôtels partenaires soigneusement sélectionnés dans les villes et régions clés du Maroc.',
    location: 'Marrakech, Ouarzazate, Agadir, Fès',
    amenities: ['Piscine', 'Spa & bien-être', 'Restaurant gastronomique', 'WiFi haut débit', 'Salle de sport', 'Conciergerie'],
    icon: '🏨',
    priceFrom: 'À partir de 50€/nuit',
  },
  {
    id: 'appartement',
    type: 'Appartement',
    title: 'Appartements & Maisons',
    description:
      'Pour les familles ou les longs séjours, nous proposons des appartements et maisons entièrement équipés dans les quartiers les plus authentiques.',
    location: 'Marrakech, Casablanca',
    amenities: ['Cuisine équipée', 'Salon spacieux', 'WiFi', 'Linge de maison fourni', 'Ménage inclus', 'Quartiers authentiques'],
    icon: '🏠',
    priceFrom: 'À partir de 45€/nuit',
  },
]
