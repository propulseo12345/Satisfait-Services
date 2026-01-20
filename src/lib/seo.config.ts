// lib/seo.config.ts - Configuration SEO centralisée

export const siteConfig = {
  name: "Satisfait Services",
  url: "https://satisfaitservices.fr",
  description:
    "✨ Service de ménage à domicile, nettoyage professionnel et home organising à Pau, Narcastet et Pyrénées-Atlantiques. Personnel de confiance, devis gratuit sous 24h. Contactez Tina !",
  author: "Tina",
  locale: "fr_FR",
  phone: "+33 7 69 64 07 24",
  email: "satisfaitservice@gmail.com",
  whatsapp: "33769640724",
  address: {
    street: "12 Chem. du Moulin",
    city: "Narcastet",
    postalCode: "64510",
    region: "Nouvelle-Aquitaine",
    country: "FR",
  },
  coordinates: {
    latitude: "43.2951",
    longitude: "-0.3708",
  },
  socialLinks: {
    facebook: "",
    instagram: "",
  },
};

// Métadonnées par page
export const pagesMetadata = {
  home: {
    title:
      "Satisfait Services | Ménage, Nettoyage & Home Organising à Pau (64)",
    description:
      "Satisfait Services : ménage à domicile, nettoyage professionnel et home organising à Pau, Narcastet et Pyrénées-Atlantiques. Service personnalisé, devis gratuit. Contactez Tina !",
    keywords: [
      "ménage à domicile pau",
      "femme de ménage pau",
      "nettoyage pau",
      "home organiser pau",
      "services à la personne 64",
    ],
    canonical: "https://satisfaitservices.fr",
  },

  prestations: {
    title: "Nos Prestations de Ménage et Nettoyage à Pau | Satisfait Services",
    description:
      "Découvrez nos services : ménage régulier, repassage, nettoyage de bureaux, vitres, moquettes et home organising à Pau et environs. Devis gratuit sous 24h.",
    keywords: [
      "prestations ménage pau",
      "services nettoyage pau",
      "tarifs ménage",
      "devis nettoyage",
    ],
    canonical: "https://satisfaitservices.fr/prestations",
  },

  menage: {
    title:
      "Ménage à Domicile à Pau et Narcastet | Femme de Ménage de Confiance",
    description:
      "Service de ménage à domicile à Pau, Narcastet et agglomération. Entretien régulier ou ponctuel, personnel de confiance, tarifs adaptés. Devis gratuit !",
    keywords: [
      "ménage à domicile pau",
      "femme de ménage pau",
      "aide ménagère pau",
      "ménage narcastet",
      "entretien maison pau",
    ],
    canonical: "https://satisfaitservices.fr/prestations/menage-a-domicile",
  },

  nettoyagePro: {
    title:
      "Nettoyage de Bureaux à Pau (64) | Entreprise de Nettoyage Professionnel",
    description:
      "Entreprise de nettoyage de bureaux et locaux professionnels à Pau. Intervention régulière ou ponctuelle, devis personnalisé gratuit. Satisfait Services.",
    keywords: [
      "nettoyage bureaux pau",
      "entreprise nettoyage pau",
      "nettoyage locaux professionnels",
      "entretien bureaux 64",
    ],
    canonical: "https://satisfaitservices.fr/prestations/nettoyage-professionnel",
  },

  homeOrganising: {
    title: "Home Organiser à Pau | Coach en Rangement Pyrénées-Atlantiques",
    description:
      "Home organiser professionnelle à Pau : coaching en rangement, désencombrement et organisation de votre intérieur. Retrouvez un espace de vie harmonieux !",
    keywords: [
      "home organiser pau",
      "coach rangement pau",
      "désencombrement pau",
      "organisation maison",
      "home organiser 64",
    ],
    canonical: "https://satisfaitservices.fr/prestations/home-organising",
  },

  repassage: {
    title:
      "Repassage à Domicile à Pau | Service de Qualité | Satisfait Services",
    description:
      "Service de repassage à domicile à Pau et environs. Chemises, draps, linge de maison : un repassage impeccable. Devis gratuit, intervention rapide.",
    keywords: [
      "repassage à domicile pau",
      "repassage chemises pau",
      "service repassage 64",
    ],
    canonical: "https://satisfaitservices.fr/prestations/repassage",
  },

  nettoyageSpecifique: {
    title: "Nettoyage Vitres, Moquettes et Canapés à Pau | Satisfait Services",
    description:
      "Nettoyage spécialisé à Pau : vitres, moquettes, tapis et canapés. Redonner éclat à votre intérieur avec des techniques professionnelles. Devis gratuit.",
    keywords: [
      "nettoyage vitres pau",
      "nettoyage moquette pau",
      "nettoyage canapé pau",
      "shampooing tapis pau",
    ],
    canonical: "https://satisfaitservices.fr/prestations/nettoyage-specifique",
  },

  courses: {
    title:
      "Livraison de Courses à Domicile à Pau | Services à la Personne",
    description:
      "Service de livraison de courses à domicile à Pau et environs. Idéal pour personnes âgées ou à mobilité réduite. Satisfait Services - votre aide au quotidien.",
    keywords: [
      "livraison courses pau",
      "aide courses personnes âgées pau",
      "services à la personne pau",
    ],
    canonical: "https://satisfaitservices.fr/prestations/livraison-courses",
  },

  aPropos: {
    title: "À Propos de Satisfait Services | Tina, Experte Ménage à Pau",
    description:
      "Découvrez l'histoire de Satisfait Services et de Tina, votre spécialiste du ménage et home organising à Pau. Écoute, confiance et service sur mesure.",
    keywords: [
      "satisfait services",
      "tina ménage pau",
      "entreprise ménage narcastet",
    ],
    canonical: "https://satisfaitservices.fr/a-propos",
  },

  contact: {
    title:
      "Contact | Devis Gratuit Ménage et Nettoyage Pau | Satisfait Services",
    description:
      "Contactez Satisfait Services pour un devis gratuit. Ménage, nettoyage, home organising à Pau et Narcastet. Réponse rapide garantie, WhatsApp disponible.",
    keywords: [
      "contact satisfait services",
      "devis ménage pau",
      "devis nettoyage pau",
    ],
    canonical: "https://satisfaitservices.fr/contact",
  },
};

// Services pour Schema.org et affichage
export const services = [
  {
    id: "menage",
    slug: "menage-a-domicile",
    name: "Ménage à domicile",
    shortDescription: "Entretien régulier ou ponctuel de votre intérieur",
    description:
      "Service de ménage à domicile à Pau et dans les Pyrénées-Atlantiques. Nous prenons soin de votre maison avec professionnalisme : nettoyage des sols, dépoussiérage, entretien des sanitaires et cuisine. Intervention régulière ou ponctuelle selon vos besoins.",
    keywords: ["ménage à domicile pau", "femme de ménage pau", "entretien maison"],
    icon: "Home",
  },
  {
    id: "nettoyage-pro",
    slug: "nettoyage-professionnel",
    name: "Nettoyage de bureaux",
    shortDescription: "Entretien de vos locaux professionnels",
    description:
      "Entreprise de nettoyage de bureaux et locaux professionnels à Pau. Nous intervenons en dehors de vos heures de travail pour un environnement propre et sain. Contrat régulier ou intervention ponctuelle.",
    keywords: ["nettoyage bureaux pau", "entreprise nettoyage pau", "entretien locaux"],
    icon: "Building2",
  },
  {
    id: "home-organising",
    slug: "home-organising",
    name: "Home Organising",
    shortDescription: "Coaching en rangement et organisation",
    description:
      "Home organiser professionnelle à Pau. Je vous accompagne pour désencombrer, organiser et optimiser votre intérieur. Retrouvez un espace de vie harmonieux et fonctionnel grâce à un coaching personnalisé.",
    keywords: ["home organiser pau", "coach rangement", "désencombrement"],
    icon: "LayoutGrid",
  },
  {
    id: "repassage",
    slug: "repassage",
    name: "Repassage à domicile",
    shortDescription: "Entretien et repassage de votre linge",
    description:
      "Service de repassage à domicile à Pau. Chemises, draps, linge de maison : nous rendons vos textiles impeccables. Gagnez du temps avec un service de qualité.",
    keywords: ["repassage à domicile pau", "repassage chemises", "entretien linge"],
    icon: "Shirt",
  },
  {
    id: "nettoyage-specifique",
    slug: "nettoyage-specifique",
    name: "Nettoyage spécifique",
    shortDescription: "Vitres, moquettes, canapés et tapis",
    description:
      "Nettoyage spécialisé à Pau : vitres intérieures et extérieures, shampooing de moquettes et tapis, nettoyage de canapés et fauteuils. Des techniques professionnelles pour un résultat impeccable.",
    keywords: ["nettoyage vitres pau", "nettoyage moquette", "nettoyage canapé"],
    icon: "Sparkles",
  },
  {
    id: "courses",
    slug: "livraison-courses",
    name: "Livraison de courses",
    shortDescription: "Courses et petits services du quotidien",
    description:
      "Service de livraison de courses à domicile à Pau et environs. Idéal pour les personnes âgées ou à mobilité réduite. Nous faisons vos courses et vous les livrons à domicile.",
    keywords: [
      "livraison courses pau",
      "aide courses personnes âgées",
      "services à la personne",
    ],
    icon: "ShoppingBag",
  },
];

// Zones d'intervention pour SEO local
export const zones = [
  { name: "Pau", postalCode: "64000" },
  { name: "Narcastet", postalCode: "64510" },
  { name: "Jurançon", postalCode: "64110" },
  { name: "Billère", postalCode: "64140" },
  { name: "Lescar", postalCode: "64230" },
  { name: "Gan", postalCode: "64290" },
  { name: "Idron", postalCode: "64320" },
  { name: "Lons", postalCode: "64140" },
  { name: "Bizanos", postalCode: "64320" },
  { name: "Mazères-Lezons", postalCode: "64110" },
  { name: "Gelos", postalCode: "64110" },
  { name: "Ousse", postalCode: "64320" },
];

// FAQs prédéfinies pour Schema.org
export const defaultFAQs = [
  {
    question: "Quels sont vos tarifs pour le ménage à domicile à Pau ?",
    answer:
      "Nos tarifs de ménage à domicile à Pau varient selon la surface et la fréquence d'intervention. Nous proposons des devis personnalisés gratuits. Contactez-nous pour obtenir un tarif adapté à vos besoins.",
  },
  {
    question: "Dans quelles villes intervenez-vous autour de Pau ?",
    answer:
      "Satisfait Services intervient à Pau, Narcastet, Jurançon, Billère, Lescar, Gan, Idron, Lons, Bizanos et dans toute l'agglomération paloise des Pyrénées-Atlantiques.",
  },
  {
    question: "Qu'est-ce que le home organising ?",
    answer:
      "Le home organising est un accompagnement personnalisé pour désencombrer, organiser et optimiser votre intérieur. Notre home organiser à Pau vous aide à créer un espace de vie harmonieux et fonctionnel.",
  },
  {
    question: "Proposez-vous des interventions ponctuelles ?",
    answer:
      "Oui, nous proposons des interventions régulières (hebdomadaires, bi-mensuelles) ou ponctuelles selon vos besoins : grand ménage, ménage après déménagement, nettoyage de printemps.",
  },
  {
    question: "Acceptez-vous les paiements en CESU ?",
    answer:
      "Oui, nous acceptons les paiements en CESU (Chèque Emploi Service Universel) pour les prestations de services à la personne éligibles.",
  },
  {
    question: "Comment demander un devis gratuit ?",
    answer:
      "Vous pouvez demander un devis gratuit via notre formulaire de contact, par téléphone ou par WhatsApp. Nous vous répondons sous 24h avec une proposition personnalisée.",
  },
];
