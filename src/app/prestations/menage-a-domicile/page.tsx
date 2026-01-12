import type { Metadata } from "next";
import Link from "next/link";
import { Home, CheckCircle, MapPin, Phone } from "lucide-react";
import { pagesMetadata, siteConfig, services, zones } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.menage.title,
  description: pagesMetadata.menage.description,
  keywords: pagesMetadata.menage.keywords,
  alternates: {
    canonical: pagesMetadata.menage.canonical,
  },
  openGraph: {
    title: pagesMetadata.menage.title,
    description: pagesMetadata.menage.description,
    url: pagesMetadata.menage.canonical,
  },
};

export default function MenagePage() {
  const service = services.find((s) => s.id === "menage")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Ménage à domicile", url: `${siteConfig.url}/prestations/menage-a-domicile` },
  ];

  return (
    <>
      <JsonLd data={[getServiceSchema(service), getBreadcrumbSchema(breadcrumbs)]} />

      {/* Breadcrumb */}
      <div className="bg-cream-100 pt-24 md:pt-28 pb-4">
        <Container>
          <nav aria-label="Fil d'Ariane">
            <ol className="flex items-center space-x-2 text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-primary-600">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/prestations" className="hover:text-primary-600">
                  Prestations
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary-600 font-medium" aria-current="page">
                Ménage à domicile
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-cream-100 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Service pour particuliers
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Service de Ménage à Domicile à Pau et Pyrénées-Atlantiques
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Vous recherchez une <strong>femme de ménage de confiance à Pau</strong> ?
              Satisfait Services vous propose un <strong>service de ménage à domicile</strong>{" "}
              personnalisé à Pau, Narcastet et dans toute l&apos;agglomération paloise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Nos prestations de ménage régulier
              </h2>
              <p className="text-neutral-600 mb-6">
                Notre <strong>aide ménagère à Pau</strong> intervient selon vos besoins :
                chaque semaine, toutes les deux semaines ou ponctuellement. Nous nous
                adaptons à votre rythme de vie.
              </p>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Entretien complet de votre intérieur
              </h3>
              <ul className="space-y-3">
                {[
                  "Nettoyage et entretien des sols (aspiration, lavage)",
                  "Dépoussiérage des meubles et surfaces",
                  "Nettoyage des sanitaires et salle de bain",
                  "Entretien de la cuisine (plan de travail, électroménager)",
                  "Nettoyage des vitres intérieures",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Ménage ponctuel et grand nettoyage à Pau
              </h2>
              <p className="text-neutral-600 mb-6">
                Besoin d&apos;un <strong>grand ménage à Pau</strong> ? Nous intervenons pour :
              </p>
              <ul className="space-y-3">
                {[
                  "Ménage de printemps",
                  "Ménage après déménagement",
                  "Nettoyage avant ou après événement",
                  "Remise en état de logement",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Zones d'intervention */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Nos zones d&apos;intervention pour le ménage
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Basée à Narcastet, notre <strong>entreprise de ménage</strong> intervient dans
              toute l&apos;agglomération paloise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-neutral-700 font-medium">{zone.name}</span>
                <span className="text-neutral-400 text-sm">({zone.postalCode})</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Demandez votre devis ménage gratuit
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Obtenez un <strong className="text-white">devis gratuit pour votre ménage à Pau</strong>{" "}
              en moins de 24h. Contactez Tina par téléphone, WhatsApp ou via notre formulaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-100">
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
