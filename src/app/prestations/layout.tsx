import { Metadata } from "next";
import { pagesMetadata } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: pagesMetadata.prestations.title,
  description: pagesMetadata.prestations.description,
  keywords: pagesMetadata.prestations.keywords,
  alternates: {
    canonical: pagesMetadata.prestations.canonical,
  },
  openGraph: {
    title: pagesMetadata.prestations.title,
    description: pagesMetadata.prestations.description,
    url: pagesMetadata.prestations.canonical,
  },
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
