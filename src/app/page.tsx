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

export default function HomePage() {
  return (
    <>
      <HeroPremium />
      <ServicesCarousel />
      <Stats />
      <AboutPremium />
      <ProcessCarousel />
      <TestimonialsPremium />
      <ZonesCarousel />
      <FAQ />
      <CTAPremium />
    </>
  );
}
