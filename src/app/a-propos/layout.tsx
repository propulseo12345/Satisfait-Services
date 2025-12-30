import { Metadata } from "next";
import { pagesMetadata } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: pagesMetadata.aPropos.title,
  description: pagesMetadata.aPropos.description,
  keywords: pagesMetadata.aPropos.keywords,
  alternates: {
    canonical: pagesMetadata.aPropos.canonical,
  },
  openGraph: {
    title: pagesMetadata.aPropos.title,
    description: pagesMetadata.aPropos.description,
    url: pagesMetadata.aPropos.canonical,
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
