import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle, Phone, Clock, Shield } from "lucide-react";
import { pagesMetadata, siteConfig, services } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.nettoyagePro.title,
  description: pagesMetadata.nettoyagePro.description,
  keywords: pagesMetadata.nettoyagePro.keywords,
  alternates: {
    canonical: pagesMetadata.nettoyagePro.canonical,
  },
  openGraph: {
    title: pagesMetadata.nettoyagePro.title,
    description: pagesMetadata.nettoyagePro.description,
    url: pagesMetadata.nettoyagePro.canonical,
  },
};

export default function NettoyageProfessionnelPage() {
  const service = services.find((s) => s.id === "nettoyage-pro")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Nettoyage professionnel", url: `${siteConfig.url}/prestations/nettoyage-professionnel` },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Intervention en dehors de vos heures de travail",
    },
    {
      icon: Shield,
      title: "Personnel qualifié",
      description: "Équipe formée et de confiance",
    },
    {
      icon: CheckCircle,
      title: "Contrat sur mesure",
      description: "Fréquence et prestations adaptées",
    },
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
                Nettoyage professionnel
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
              <Building2 className="w-4 h-4" />
              Service pour entreprises
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Nettoyage de Bureaux et Locaux Professionnels à Pau
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              <strong>Entreprise de nettoyage professionnel à Pau</strong> : nous assurons
              l&apos;entretien régulier de vos bureaux et locaux commerciaux pour un
              environnement de travail propre et sain.
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
                Nos prestations de nettoyage pour entreprises
              </h2>
              <p className="text-neutral-600 mb-6">
                Satisfait Services propose des solutions de <strong>nettoyage de bureaux à Pau</strong>{" "}
                adaptées à tous types de locaux professionnels : bureaux, commerces, cabinets médicaux,
                espaces de coworking.
              </p>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Entretien de vos locaux professionnels
              </h3>
              <ul className="space-y-3">
                {[
                  "Nettoyage des sols et surfaces de travail",
                  "Entretien des sanitaires et espaces communs",
                  "Vidage des poubelles et gestion des déchets",
                  "Dépoussiérage du mobilier de bureau",
                  "Nettoyage des vitres et cloisons vitrées",
                  "Entretien des espaces de pause et cuisines",
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
                Pourquoi nous choisir ?
              </h2>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-cream-50 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Types de locaux */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Types de locaux que nous entretenons
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Notre <strong>entreprise de nettoyage à Pau</strong> intervient dans tout type
              de locaux professionnels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Bureaux et open spaces",
              "Cabinets médicaux",
              "Commerces et boutiques",
              "Espaces de coworking",
              "Restaurants et cafés",
              "Salles de réunion",
            ].map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm text-center"
              >
                <Building2 className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <span className="text-neutral-700 font-medium">{type}</span>
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
              Obtenez votre devis personnalisé
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Demandez un <strong className="text-white">devis gratuit pour le nettoyage de vos locaux</strong>.
              Nous vous proposons une offre sur mesure adaptée à vos besoins.
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
