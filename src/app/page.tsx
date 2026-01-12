import type { Metadata } from "next";
import {
  HeroPremium,
  ServicesCarousel,
  AboutPremium,
  Stats,
  ProcessCarousel,
  TestimonialsPremium,
  ZonesCarousel,
  FAQ,
  CTAPremium,
} from "@/components/sections";
import { pagesMetadata } from "@/lib/seo.config";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: pagesMetadata.home.title,
  description: pagesMetadata.home.description,
  keywords: pagesMetadata.home.keywords,
  alternates: {
    canonical: pagesMetadata.home.canonical,
  },
  openGraph: {
    title: pagesMetadata.home.title,
    description: pagesMetadata.home.description,
    url: pagesMetadata.home.canonical,
  },
};

// Fonction pour récupérer les données de la page d'accueil depuis Sanity
async function getHomePageData() {
  const query = `*[_type == "homePage"][0] {
    heroTitle,
    heroHighlightedText,
    heroDescription,
    heroDescriptionMobile,
    phoneNumber,
    ctaButton1Text,
    ctaButton1TextDesktop,
    ctaButton2Text,
    backgroundImage
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fonction pour récupérer les données de la section services
async function getServicesSectionData() {
  const query = `*[_type == "servicesSection"][0] {
    sectionTitle,
    sectionHighlight,
    sectionDescription,
    ctaButtonText,
    "services": displayedServices[]-> {
      _id,
      title,
      description,
      icon,
      backgroundColor,
      buttonText,
      order
    } | order(order asc)
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fonction pour récupérer les données de la section statistiques
async function getStatsSectionData() {
  const query = `*[_type == "statsSection"][0] {
    sectionTitle,
    sectionHighlight,
    subtitle,
    stats[] {
      value,
      label,
      description,
      icon
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fonction pour récupérer les données de la section à propos
async function getAboutSectionData() {
  const query = `*[_type == "aboutSection"][0] {
    badge,
    founderImage,
    founderName,
    founderTitle,
    founderQuote,
    mainTitle,
    highlightedText,
    paragraph1,
    locationHighlight,
    paragraph2,
    values[] {
      title,
      description,
      icon,
      bgColor
    },
    ctaButtonText
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fonction pour récupérer les données de la section comment ça fonctionne
async function getHowItWorksSectionData() {
  const query = `*[_type == "howItWorksSection"][0] {
    badge,
    mainTitle,
    highlightedText,
    subtitle,
    steps[] {
      number,
      title,
      description,
      icon,
      bgColor
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

async function getTestimonialsSectionData() {
  const query = `*[_type == "testimonialsSection"][0] { badge, mainTitle, subtitle, testimonials[] { quote, name, role, rating, avatar } }`;
  return await client.fetch(query);
}

async function getZonesInterventionSectionData() {
  const query = `*[_type == "zonesInterventionSection"][0] { badge, mainTitle, subtitle, zones[]{ ville, description } }`;
  return await client.fetch(query);
}

async function getFaqSectionData() {
  const query = `*[_type == "faqSection"][0] { badge, mainTitle, highlightedText, subtitle, faqItems[]{ question, reponse }, ctaCard }`;
  return await client.fetch(query);
}

async function getCtaSectionData() {
  const query = `*[_type == "ctaSection"][0] {
    badge,
    mainTitle,
    highlightedText,
    description,
    buttons[] {
      text,
      type,
      icon
    },
    contactInfo[] {
      label,
      value,
      icon
    }
  }`;
  return await client.fetch(query);
}

export default async function HomePage() {
  const [homeData, servicesData, statsData, aboutData, howItWorksData, testimonialsData, zonesData, faqData, ctaData] = await Promise.all([
    getHomePageData(),
    getServicesSectionData(),
    getStatsSectionData(),
    getAboutSectionData(),
    getHowItWorksSectionData(),
    getTestimonialsSectionData(),
    getZonesInterventionSectionData(),
    getFaqSectionData(),
    getCtaSectionData(),
  ]);

  // Transformer les données pour HeroPremium
  const heroData = homeData ? {
    title: homeData.heroTitle,
    highlightedText: homeData.heroHighlightedText,
    description: homeData.heroDescription,
    descriptionMobile: homeData.heroDescriptionMobile,
    phoneNumber: homeData.phoneNumber,
    ctaButton1Text: homeData.ctaButton1Text,
    ctaButton1TextDesktop: homeData.ctaButton1TextDesktop,
    ctaButton2Text: homeData.ctaButton2Text,
    backgroundImage: homeData.backgroundImage ? urlFor(homeData.backgroundImage).width(1920).height(1080).url() : "/images/hero-home-interior.jpg",
  } : null;

  return (
    <>
      <HeroPremium data={heroData} />
      <ServicesCarousel data={servicesData} />
      <Stats data={statsData} />
      <AboutPremium data={aboutData} />
      <ProcessCarousel data={howItWorksData} />
      <TestimonialsPremium data={testimonialsData} />
      <ZonesCarousel data={zonesData} />
      <FAQ data={faqData} />
      <CTAPremium data={ctaData} />
    </>
  );
}

// Revalidation immédiate (développement)
export const revalidate = 0;
