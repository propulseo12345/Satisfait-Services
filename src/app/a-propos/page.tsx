import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "À Propos | Satisfait Services - L'histoire de Tina",
  description:
    "Découvrez l'histoire de Tina, fondatrice de Satisfait Services à Narcastet. Une passion pour le bien-être à domicile et un service personnalisé en Pyrénées-Atlantiques.",
};

interface AboutPageData {
  badge: { icon: string; text: string };
  founderImage?: { asset: { _ref: string } };
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  mainTitle: string;
  highlightedName: string;
  paragraphs: Array<{ text: string; highlight?: string }>;
  missionVision: Array<{ title: string; description: string; icon: string }>;
}

interface ValuesSectionData {
  badge: string;
  mainTitle: string;
  highlightedText: string;
  subtitle: string;
  values: Array<{ title: string; description: string; icon: string; bgColor: string }>;
}

interface TimelineSectionData {
  badge: string;
  mainTitle: string;
  highlightedText: string;
  subtitle: string;
  milestones: Array<{ year: string; shortYear: string; title: string; description: string; position: string }>;
}

async function getAboutPageData(): Promise<AboutPageData | null> {
  const query = `*[_type == "aboutPage"][0] {
    badge,
    founderImage,
    founderName,
    founderTitle,
    founderQuote,
    mainTitle,
    highlightedName,
    paragraphs[] {
      text,
      highlight
    },
    missionVision[] {
      title,
      description,
      icon
    }
  }`;
  return await client.fetch(query);
}

async function getValuesSectionData(): Promise<ValuesSectionData | null> {
  const query = `*[_type == "valuesSection"][0] {
    badge,
    mainTitle,
    highlightedText,
    subtitle,
    values[] {
      title,
      description,
      icon,
      bgColor
    }
  }`;
  return await client.fetch(query);
}

async function getTimelineSectionData(): Promise<TimelineSectionData | null> {
  const query = `*[_type == "timelineSection"][0] {
    badge,
    mainTitle,
    highlightedText,
    subtitle,
    milestones[] {
      year,
      shortYear,
      title,
      description,
      position
    }
  }`;
  return await client.fetch(query);
}

export default async function AProposPage() {
  const [aboutData, valuesData, timelineData] = await Promise.all([
    getAboutPageData(),
    getValuesSectionData(),
    getTimelineSectionData(),
  ]);

  return <AboutPageContent data={aboutData} valuesData={valuesData} timelineData={timelineData} />;
}

export const revalidate = 0;
