export interface Activity {
  id: string
  title: string
  description: string
  duration: string
  icon: string
  highlights: string[]
}

export const activities: Activity[] = [
  {
    id: 'chameau',
    title: 'Balade à dos de chameau',
    description:
      'Vivez l\'expérience emblématique du désert à dos de chameau au coucher du soleil sur les dunes d\'Erg Chebbi. Un moment magique et inoubliable.',
    duration: '1h30 – 2h',
    icon: '🐪',
    highlights: ['Coucher du soleil panoramique', 'Guide berbère local', 'Photo souvenir', 'Thé à la menthe à l\'arrivée'],
  },
  {
    id: 'quad',
    title: 'Quad dans les dunes',
    description:
      'Sensations fortes garanties ! Pilotez votre quad à travers les immenses dunes de sable doré d\'Erg Chebbi pour une aventure inoubliable.',
    duration: '1h – 3h',
    icon: '🏍️',
    highlights: ['Tous niveaux', 'Équipement fourni', 'Guide accompagnateur', 'Circuit personnalisable'],
  },
  {
    id: 'sandboard',
    title: 'Sandboard',
    description:
      'Glissez sur les dunes comme sur la neige ! Le sandboard est une activité fun et accessible à tous pour une montée d\'adrénaline dans le Sahara.',
    duration: '1h – 2h',
    icon: '🏂',
    highlights: ['Équipement inclus', 'Pour tous les âges', 'Vues spectaculaires', 'Instructeur disponible'],
  },
  {
    id: 'montgolfiere',
    title: 'Vol en montgolfière',
    description:
      'Survolez le Haut Atlas ou le désert du Sahara au lever du soleil en montgolfière pour une vue époustouflante et une expérience hors du commun.',
    duration: '1h de vol + transferts',
    icon: '🎈',
    highlights: ['Lever de soleil unique', 'Vues à 360°', 'Champagne à l\'atterrissage', 'Certificat de vol'],
  },
  {
    id: 'hammam',
    title: 'Hammam & Spa traditionnel',
    description:
      'Ressourcez-vous dans un hammam traditionnel marocain. Gommage au savon beldi, enveloppement à l\'argile rhassoul et massage à l\'huile d\'argan.',
    duration: '1h30 – 3h',
    icon: '♨️',
    highlights: ['Produits 100% naturels', 'Massage aromatique', 'Rituel traditionnel', 'Disponible en couple'],
  },
  {
    id: 'cuisine',
    title: 'Cours de cuisine marocaine',
    description:
      'Apprenez à préparer les plats emblématiques du Maroc : tajine, couscous, pastilla et desserts. Un voyage culinaire authentique avec une famille locale.',
    duration: '3h – 4h',
    icon: '🍲',
    highlights: ['Visite du souk incluse', 'Recettes emportées', 'Repas partagé', 'Famille locale accueillante'],
  },
  {
    id: '4x4',
    title: 'Safari 4x4 dans le désert',
    description:
      'Explorez les recoins cachés du Sahara en 4x4 : villages nomades, oasis secrètes, formations rocheuses extraordinaires et corridors de dunes.',
    duration: 'Demi-journée ou journée complète',
    icon: '🚙',
    highlights: ['Guide local expert', 'Zones inaccessibles autrement', 'Rencontres nomades', 'Pique-nique berbère optionnel'],
  },
  {
    id: 'equitation',
    title: 'Randonnée à cheval',
    description:
      'Partez à la découverte des paysages de l\'Atlas et du désert à cheval, accompagné de guides passionnés et de chevaux bien dressés.',
    duration: '1h – journée complète',
    icon: '🐎',
    highlights: ['Chevaux bien dressés', 'Tous niveaux', 'Paysages grandioses', 'Guide équestre professionnel'],
  },
]
