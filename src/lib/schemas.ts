// lib/schemas.ts - Schemas JSON-LD pour le SEO

import { siteConfig, services } from "./seo.config";

// Type pour les services
type Service = (typeof services)[number];

// Schema LocalBusiness (toutes les pages)
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Satisfait Services Pau",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo.png`,
    logo: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Espèces, Carte bancaire, Chèque, CESU",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Pau",
      },
      {
        "@type": "City",
        name: "Narcastet",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pyrénées-Atlantiques",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [siteConfig.socialLinks.facebook, siteConfig.socialLinks.instagram].filter(
      Boolean
    ),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de ménage et home organising",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
  };
}

// Schema Service (pages services)
export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}/prestations/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Pau",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/contact`,
      servicePhone: siteConfig.phone,
    },
  };
}

// Schema BreadcrumbList
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Schema WebSite (page accueil)
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// Schema FAQ (si FAQ sur le site)
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Schema WebPage générique
export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "fr-FR",
  };
}

// Schema ContactPage
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact - Satisfait Services",
    description:
      "Contactez Satisfait Services pour un devis gratuit. Ménage, nettoyage, home organising à Pau et Narcastet.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// Schema AboutPage
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À Propos - Satisfait Services",
    description:
      "Découvrez l'histoire de Satisfait Services et de Tina, votre spécialiste du ménage et home organising à Pau.",
    url: `${siteConfig.url}/a-propos`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
