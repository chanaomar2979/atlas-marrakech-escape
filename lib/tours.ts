export interface Tour {
  slug: string
  title: string
  subtitle: string
  duration: string
  nights: number
  groupType: string
  highlights: string[]
  description: string
  itinerary: { day: number; title: string; description: string }[]
  included: string[]
  excluded: string[]
  badge?: string
  category: 'desert' | 'honeymoon' | 'cultural' | 'adventure'
  image: string
  startingFrom?: string
}

export const tours: Tour[] = [
  {
    slug: '2-jours-marrakech-desert',
    title: 'Circuit 2 Jours Marrakech – Désert du Sahara',
    subtitle: 'L\'essentiel du désert en un weekend',
    duration: '2 jours / 1 nuit',
    nights: 1,
    groupType: 'Privé ou partagé',
    badge: 'Idéal weekend',
    category: 'desert',
    image: '/images/desert-2j.jpg',
    highlights: [
      'Traversée du col de Tizi n\'Tichka (2 260 m)',
      'Visite du ksar d\'Aït Ben Haddou (UNESCO)',
      'Balade à dos de chameau au coucher du soleil',
      'Nuit en camp de luxe sous les étoiles',
      'Sandboard sur les dunes d\'Erg Chebbi',
    ],
    description:
      'Un voyage express mais inoubliable qui vous emmène de Marrakech au cœur du Sahara. Traversez les montagnes de l\'Atlas, découvrez les kasbahs millénaires et vivez la magie du désert en une seule nuit sous un ciel étoilé.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Aït Ben Haddou → Ouarzazate → Merzouga',
        description:
          'Départ le matin de votre hôtel, traversée du col de Tizi n\'Tichka à travers le Haut Atlas. Arrêt au célèbre ksar d\'Aït Ben Haddou, classé UNESCO. Visite d\'Ouarzazate et de ses studios de cinéma. Route à travers la vallée des roses et les gorges du Dadès et du Todra. Arrivée à Merzouga en fin d\'après-midi pour une balade à dos de chameau au coucher du soleil sur les dunes d\'Erg Chebbi. Dîner et nuit en camp de luxe avec musique berbère et observation des étoiles.',
      },
      {
        day: 2,
        title: 'Merzouga → Rissani → Nkob → Marrakech',
        description:
          'Réveil au lever du soleil sur les dunes d\'Erg Chebbi. Petit-déjeuner au camp, retour à chameau ou en 4x4. Visite des souks de Rissani et du mausolée Moulay Ali Cherif. Traversée du village de Nkob et de la vallée du Drâa. Retour à Marrakech en fin d\'après-midi avec un cadeau surprise.',
      },
    ],
    included: [
      '4x4 ou minibus privé climatisé',
      'Guide/chauffeur professionnel multilingue',
      '1 nuit en camp de luxe (dîner + petit-déjeuner)',
      'Balade à dos de chameau au coucher du soleil',
      'Sandboard sur les dunes',
      'Prise en charge à l\'hôtel ou à l\'aéroport',
      'Cadeau surprise au retour',
    ],
    excluded: [
      'Déjeuners et boissons',
      'Droits d\'entrée aux monuments',
      'Pourboires pour guides et chauffeurs',
    ],
  },
  {
    slug: '3-jours-marrakech-desert-sahara',
    title: 'Circuit 3 Jours Marrakech – Sahara',
    subtitle: 'Le circuit le plus populaire',
    duration: '3 jours / 2 nuits',
    nights: 2,
    groupType: 'Privé ou partagé',
    badge: 'Le plus populaire',
    category: 'desert',
    image: '/images/desert-3j.jpg',
    highlights: [
      'Col de Tizi n\'Tichka et villages berbères',
      'Aït Ben Haddou classé UNESCO',
      'Gorges du Dadès et du Todra',
      'Lever du soleil sur les dunes d\'Erg Chebbi',
      'Massage traditionnel marocain offert',
      'Cadeau surprise au retour',
    ],
    description:
      'Le parfait équilibre entre aventure, culture et paysages à couper le souffle. Ce circuit de 3 jours vous fait traverser les montagnes de l\'Atlas, découvrir des sites du patrimoine mondial et vivre l\'expérience inoubliable du désert du Sahara.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Aït Ben Haddou → Gorges du Dadès',
        description:
          'Départ à 7h30 de votre hôtel. Traversée du col de Tizi n\'Tichka à travers le Haut Atlas. Visite du ksar d\'Aït Ben Haddou, inscrit au patrimoine mondial de l\'UNESCO. Arrêt à Ouarzazate et dans la Vallée des Roses. Exploration des gorges du Dadès. Nuit dans les gorges.',
      },
      {
        day: 2,
        title: 'Dadès → Gorges du Todra → Merzouga',
        description:
          'Petit-déjeuner avec vue sur les gorges. Visite des gorges du Todra aux falaises impressionnantes. Traversée de la vallée du Ziz. Balade à dos de chameau au coucher du soleil dans les dunes d\'Erg Chebbi. Nuit en camp de luxe avec salle de bain privée.',
      },
      {
        day: 3,
        title: 'Merzouga → Nakoub → Marrakech',
        description:
          'Lever du soleil sur Erg Chebbi. Petit-déjeuner berbère avec crêpes traditionnelles et thé à la menthe. Visite du village de Nakoub avec déjeuner chez une famille locale. Retour via le Haut Atlas. Massage traditionnel marocain offert et cadeau surprise.',
      },
    ],
    included: [
      '4x4 ou minibus climatisé',
      'Guide professionnel anglophone',
      '2 nuits d\'hébergement avec repas',
      'Balade à dos de chameau au coucher du soleil',
      'Prise en charge à l\'hôtel à Marrakech',
      'Massage traditionnel marocain offert',
      'Cadeau surprise',
    ],
    excluded: [
      'Déjeuners et boissons',
      'Droits d\'entrée aux monuments',
      'Pourboires',
    ],
  },
  {
    slug: '4-jours-marrakech-sahara-chameau',
    title: 'Circuit 4 Jours Marrakech – Sahara',
    subtitle: 'Immersion complète dans le désert',
    duration: '4 jours / 3 nuits',
    nights: 3,
    groupType: 'Privé',
    badge: 'Coup de cœur',
    category: 'desert',
    image: '/images/desert-4j.jpg',
    highlights: [
      'Traversée du Haut Atlas à 2 260 m',
      'Site Game of Thrones & Gladiator à Aït Ben Haddou',
      'Balade à chameau au coucher du soleil à Erg Chebbi',
      'Formation rocheuse "Doigts de singe"',
      'Souks historiques de Rissani',
      'Expériences authentiques avec des familles berbères',
    ],
    description:
      'Un voyage complet alliant paysages époustouflants, riche culture et expériences authentiques. Traversez le Haut Atlas, explorez des kasbahs millénaires, profitez du chameau dans le Sahara et plongez dans les traditions berbères.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Aït Ben Haddou → Gorges du Dadès',
        description:
          'Départ à 8h40 de Marrakech. Traversée du col de Tizi n\'Tichka. Villages berbères en route. Ksar d\'Aït Ben Haddou (UNESCO), site de tournage de Game of Thrones et Gladiator. Ouarzazate avec la Kasbah Taourirt et les studios de cinéma. Skoura et Kalaat M\'gouna (optionnel). Nuit dans les gorges du Dadès.',
      },
      {
        day: 2,
        title: 'Dadès → Gorges du Todra → Camp du désert',
        description:
          'Petit-déjeuner avec vue sur les gorges. Exploration des gorges du Todra (falaises de 350 m). Villages berbères de Tinjdad et Melaab avec tatouage au henné optionnel. Erfoud, capitale des dattes. Balade à chameau au coucher du soleil. Nuit en camp de luxe dans le désert.',
      },
      {
        day: 3,
        title: 'Merzouga → Rissani → Drâa → Ouarzazate',
        description:
          'Lever du soleil sur les dunes. Retour à chameau. Sites historiques de Rissani et souks traditionnels. Kasbah de Nkob. Vallée du Drâa (1 100 km, plus longue du Maroc). Nuit à Ouarzazate.',
      },
      {
        day: 4,
        title: 'Ouarzazate → Haut Atlas → Marrakech',
        description:
          'Visite optionnelle de la Kasbah Taourirt. Retour via le Haut Atlas avec arrêts panoramiques. Arrivée à Marrakech. Massage traditionnel marocain offert et cadeau surprise.',
      },
    ],
    included: [
      '4x4 privé ou minibus climatisé',
      'Guide/chauffeur anglophone professionnel',
      '3 nuits d\'hébergement (2 hôtels/kasbahs + 1 camp de luxe)',
      'Balade à chameau au coucher du soleil',
      'Transport aller-retour depuis Marrakech',
      'Massage traditionnel marocain offert',
      'Cadeau surprise',
    ],
    excluded: [
      'Déjeuners et boissons',
      'Droits d\'entrée aux sites',
      'Pourboires',
    ],
  },
  {
    slug: '5-jours-marrakech-sahara',
    title: 'Circuit 5 Jours Marrakech – Sahara',
    subtitle: 'L\'aventure ultime dans le désert',
    duration: '5 jours / 4 nuits',
    nights: 4,
    groupType: 'Privé',
    category: 'adventure',
    image: '/images/desert-5j.jpg',
    highlights: [
      'Sites UNESCO : Aït Ben Haddou',
      'Formation "Doigts de singe"',
      'Lever et coucher du soleil sur les dunes',
      'Rencontre avec des familles nomades',
      'Musiciens de Khamlia',
      'Coopératives d\'huile d\'argan',
    ],
    description:
      'L\'exploration la plus complète du Maroc des kasbahs et du désert. Cinq jours pour tout découvrir : les montagnes de l\'Atlas, les gorges spectaculaires, le Sahara et l\'authentique vie berbère.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Aït Ben Haddou → Gorges du Dadès',
        description:
          'Prise en charge à Marrakech. Col de Tizi n\'Tichka. Aït Ben Haddou (UNESCO). Ouarzazate. Nuit dans les gorges du Dadès.',
      },
      {
        day: 2,
        title: 'Dadès → Todra → Erfoud → Merzouga',
        description:
          'Gorges du Todra. Erfoud. Balade à chameau au coucher du soleil à Erg Chebbi. Camp de luxe dans le désert.',
      },
      {
        day: 3,
        title: 'Merzouga → Mefis → Khamlia → Camp',
        description:
          'Lever du soleil sur Erg Chebbi. Visite de familles nomades. Exploration du désert de Mefis. Musiciens de Khamlia. 2e nuit au camp.',
      },
      {
        day: 4,
        title: 'Rissani → Nkob → Kasbah',
        description:
          'Mausolée Moulay Ali Cherif et souks de Rissani. Région des kasbahs de Nkob. Nuit en kasbah.',
      },
      {
        day: 5,
        title: 'Nkob → Ouarzazate → Marrakech',
        description:
          'Vues sur la vallée de Nkob. Ouarzazate. Retour via le Haut Atlas. Marrakech avec massage traditionnel et cadeau surprise.',
      },
    ],
    included: [
      '4x4 privé ou minibus climatisé',
      'Guide anglophone professionnel',
      '4 nuits d\'hébergement (3 hôtels/kasbahs + 1 camp de luxe)',
      'Balade à chameau à Erg Chebbi',
      'Transferts depuis Marrakech',
      'Massage traditionnel marocain offert',
      'Cadeau surprise',
    ],
    excluded: [
      'Déjeuners et boissons',
      'Droits d\'entrée',
      'Pourboires',
    ],
  },
  {
    slug: '3-jours-lune-de-miel',
    title: 'Circuit 3 Jours Lune de Miel',
    subtitle: 'L\'escapade romantique par excellence',
    duration: '3 jours / 2 nuits',
    nights: 2,
    groupType: 'Privé exclusif',
    badge: 'Romantique',
    category: 'honeymoon',
    image: '/images/honeymoon.jpg',
    highlights: [
      '4x4 privé avec vues panoramiques sur l\'Atlas',
      'Dîner aux chandelles sous un ciel étoilé au Sahara',
      'Balade privée à chameau au lever du soleil',
      'Hammam et spa traditionnel en couple',
      'Toast au champagne au coucher du soleil sur les dunes',
      'Spectacle musical privé autour du feu',
    ],
    description:
      'Une escapade romantique exclusive pour les couples, mêlant le luxe des paysages marocains et des moments inoubliables. Des montagnes de l\'Atlas aux dunes dorées du Sahara, vivez une lune de miel de rêve.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Aït Ben Haddou → Vallée du Dadès',
        description:
          'Prise en charge en 4x4 de luxe à 8h00. Site UNESCO d\'Aït Ben Haddou. Déjeuner romantique dans un ksar historique. Cocktails au coucher du soleil et dîner dans un riad de luxe avec vue sur la vallée.',
      },
      {
        day: 2,
        title: 'Vallée du Dadès → Gorges du Todra → Merzouga',
        description:
          'Promenade matinale optionnelle dans l\'oasis. Route panoramique à travers les gorges du Todra. Balade à chameau privée jusqu\'au camp au coucher du soleil. Dîner aux chandelles sous les étoiles avec musique berbère.',
      },
      {
        day: 3,
        title: 'Lever du soleil → Désert → Marrakech',
        description:
          'Excursion au lever du soleil sur les dunes les plus hautes. Petit-déjeuner au désert. Sandboard en duo (optionnel). Retour à Marrakech avec massage en couple offert.',
      },
    ],
    included: [
      'Transport privé en 4x4 tout au long',
      '2 nuits en hébergements de luxe (riad + camp de luxe)',
      'Tous les repas avec expériences romantiques',
      'Guide et chauffeur privé',
      'Décoration romantique des chambres',
      'Vin marocain offert',
      'Séance photo privée dans le désert',
      'Cérémonie de mariage berbère traditionnelle (optionnel)',
      'Massage en couple offert au retour',
      'Cadeau souvenir personnalisé',
    ],
    excluded: [
      'Droits d\'entrée aux sites',
      'Pourboires',
    ],
  },
  {
    slug: '3-jours-astrophotographie',
    title: 'Circuit 3 Jours Astrophotographie',
    subtitle: 'Le Sahara sous les étoiles',
    duration: '3 jours / 2 nuits',
    nights: 2,
    groupType: 'Privé ou partagé',
    badge: 'Unique',
    category: 'adventure',
    image: '/images/astro.jpg',
    highlights: [
      'Ciel étoilé parmi les plus beaux du monde',
      'Session d\'astrophotographie guidée',
      'Dunes d\'Erg Chebbi sans pollution lumineuse',
      'Équipement telescope disponible',
      'Guide spécialisé astronomie',
    ],
    description:
      'Une expérience unique pour les passionnés de photographie et d\'astronomie. Les dunes d\'Erg Chebbi offrent un ciel nocturne d\'une clarté exceptionnelle, loin de toute pollution lumineuse.',
    itinerary: [
      {
        day: 1,
        title: 'Marrakech → Gorges → Merzouga',
        description:
          'Départ de Marrakech. Traversée des montagnes et des gorges. Arrivée à Merzouga. Initiation à la photographie de nuit au camp.',
      },
      {
        day: 2,
        title: 'Journée libre + Session photo nocturne',
        description:
          'Exploration des dunes le matin. Repos l\'après-midi. Session d\'astrophotographie guidée toute la nuit sur les dunes.',
      },
      {
        day: 3,
        title: 'Lever du soleil → Marrakech',
        description:
          'Dernier lever de soleil sur les dunes. Retour à Marrakech via les gorges et l\'Atlas.',
      },
    ],
    included: [
      '4x4 ou minibus climatisé',
      'Guide spécialisé astronomie/photo',
      '2 nuits au camp de luxe',
      'Balade à chameau',
      'Transferts Marrakech',
      'Cadeau surprise',
    ],
    excluded: [
      'Déjeuners et boissons',
      'Droits d\'entrée',
      'Matériel photographique personnel',
      'Pourboires',
    ],
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getToursByCategory(category: Tour['category']): Tour[] {
  return tours.filter((t) => t.category === category)
}
