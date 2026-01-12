import { Metadata } from "next";
import { pagesMetadata } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: pagesMetadata.contact.title,
  description: pagesMetadata.contact.description,
  keywords: pagesMetadata.contact.keywords,
  alternates: {
    canonical: pagesMetadata.contact.canonical,
  },
  openGraph: {
    title: pagesMetadata.contact.title,
    description: pagesMetadata.contact.description,
    url: pagesMetadata.contact.canonical,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
