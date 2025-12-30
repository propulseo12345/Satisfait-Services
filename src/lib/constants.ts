export const SITE_CONFIG = {
  name: "Satisfait Services",
  slogan: "Votre satisfaction, notre priorité",
  description:
    "Satisfait Services : votre spécialiste du ménage, repassage, nettoyage professionnel et home organising à Narcastet, Pau et dans les Pyrénées-Atlantiques.",
  url: "https://satisfait-services.fr",
  owner: "Tina",
  address: {
    street: "12 Chemin du Moulin",
    city: "Narcastet",
    postalCode: "64510",
    region: "Pyrénées-Atlantiques",
    country: "France",
  },
  contact: {
    phone: "+33 7 69 64 07 24",
    email: "satisfaitservice@gmail.com",
    whatsapp: "33769640724",
  },
  hours: {
    weekdays: "8h00 - 18h00",
    saturday: "9h00 - 12h00",
    sunday: "Fermé",
  },
  social: {
    facebook: "",
    instagram: "",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/prestations", label: "Prestations" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "menage",
    title: "Ménage et nettoyage professionnel",
    shortDescription:
      "Entretien courant de vos intérieurs avec des produits de qualité pour un résultat impeccable.",
    description:
      "Notre équipe assure l'entretien régulier de votre domicile : dépoussiérage, nettoyage des sols, entretien des surfaces. Nous utilisons des produits respectueux de votre environnement pour un intérieur sain et accueillant.",
    icon: "Sparkles",
    category: "particuliers",
  },
  {
    id: "repassage",
    title: "Repassage et entretien du linge",
    shortDescription:
      "Service de repassage professionnel à domicile pour un linge parfaitement entretenu.",
    description:
      "Confiez-nous votre linge pour un repassage soigné et professionnel. Nous prenons soin de chaque pièce avec attention pour vous faire gagner un temps précieux au quotidien.",
    icon: "Shirt",
    category: "particuliers",
  },
  {
    id: "courses",
    title: "Livraison de courses à domicile",
    shortDescription:
      "Nous faisons vos courses et vous les livrons directement chez vous.",
    description:
      "Plus besoin de vous déplacer ! Nous récupérons votre liste de courses et nous occupons de tout. Un service pratique pour les personnes à mobilité réduite ou au emploi du temps chargé.",
    icon: "ShoppingBag",
    category: "services",
  },
  {
    id: "nettoyage-specifique",
    title: "Nettoyage spécifique",
    shortDescription:
      "Nettoyage de vitres, moquettes, canapés et tapis avec des techniques professionnelles.",
    description:
      "Pour les travaux de nettoyage plus spécialisés, nous intervenons sur vos vitres, moquettes, canapés et tapis. Des équipements professionnels pour un résultat optimal.",
    icon: "SprayCan",
    category: "specifique",
  },
  {
    id: "home-organising",
    title: "Home Organising & Coaching rangement",
    shortDescription:
      "Accompagnement personnalisé pour désencombrer et organiser votre intérieur de façon fonctionnelle.",
    description:
      "Le home organising va au-delà du simple rangement. C'est un accompagnement sur mesure pour repenser l'organisation de votre espace de vie, désencombrer et créer un intérieur qui vous ressemble et facilite votre quotidien.",
    icon: "LayoutGrid",
    category: "organising",
  },
];

export const ADVANTAGES = [
  {
    title: "Devis gratuit",
    description: "Estimation personnalisée sans engagement de votre part",
    icon: "FileText",
  },
  {
    title: "Intervention rapide",
    description: "Disponibilité et réactivité pour répondre à vos besoins",
    icon: "Clock",
  },
  {
    title: "Service personnalisé",
    description: "Des prestations adaptées à vos attentes et votre budget",
    icon: "Heart",
  },
  {
    title: "Satisfaction garantie",
    description: "Votre satisfaction est notre priorité absolue",
    icon: "CheckCircle",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Claude B.",
    location: "",
    rating: 5,
    text: "Tina est une excellente personne, très sérieuse et autonome. Elle voit le travail toute seule et s'organise d'elle-même. Je la recommande fortement, elle travaille chez nous depuis plusieurs mois, vous pouvez lui faire une entière confiance.",
  },
  {
    id: 2,
    name: "Martin M.",
    location: "",
    rating: 5,
    text: "Prestation au top. Je recommande les yeux fermés.",
  },
  {
    id: 3,
    name: "Rivosa R.",
    location: "",
    rating: 5,
    text: "J'ai fait appel à Satisfait Services pour un nettoyage lié à mon déménagement. Réactivité, ponctualité, qualité du travail, professionnalisme et prix très correct. Je recommande vivement !",
    service: "Nettoyage lié à un déménagement",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "particuliers",
    title: "Entretien courant",
    subtitle: "Pour les particuliers",
    services: ["Ménage régulier", "Repassage et entretien du linge", "Dépoussiérage et entretien des sols"],
  },
  {
    id: "professionnels",
    title: "Services Professionnels",
    subtitle: "Pour les entreprises",
    services: ["Nettoyage de bureaux", "Entretien de locaux professionnels"],
  },
  {
    id: "services",
    title: "Services à la personne",
    subtitle: "Faciliter votre quotidien",
    services: ["Livraison de courses à domicile", "Petits services du quotidien"],
  },
  {
    id: "specifique",
    title: "Nettoyage spécifique",
    subtitle: "Interventions ciblées",
    services: ["Vitres", "Moquettes", "Canapés et tapis"],
  },
  {
    id: "organising",
    title: "Home Organising & Coaching",
    subtitle: "Réorganisez votre espace",
    services: ["Accompagnement personnalisé", "Désencombrement", "Organisation fonctionnelle"],
  },
];

export const VALUES = [
  {
    title: "Écoute",
    description: "Nous prenons le temps de comprendre vos besoins pour vous proposer des solutions adaptées.",
    icon: "Ear",
  },
  {
    title: "Confiance",
    description: "Discrétion et fiabilité sont au cœur de notre relation avec chaque client.",
    icon: "Shield",
  },
  {
    title: "Professionnalisme",
    description: "Un travail soigné et méticuleux pour un résultat à la hauteur de vos attentes.",
    icon: "Award",
  },
  {
    title: "Sur mesure",
    description: "Chaque prestation est personnalisée selon vos besoins spécifiques.",
    icon: "Sparkles",
  },
];
