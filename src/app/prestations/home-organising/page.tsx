import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, CheckCircle, Phone, Lightbulb, Heart, Sparkles } from "lucide-react";
import { pagesMetadata, siteConfig, services } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.homeOrganising.title,
  description: pagesMetadata.homeOrganising.description,
  keywords: pagesMetadata.homeOrganising.keywords,
  alternates: {
    canonical: pagesMetadata.homeOrganising.canonical,
  },
  openGraph: {
    title: pagesMetadata.homeOrganising.title,
    description: pagesMetadata.homeOrganising.description,
    url: pagesMetadata.homeOrganising.canonical,
  },
};

export default function HomeOrganisingPage() {
  const service = services.find((s) => s.id === "home-organising")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Home Organising", url: `${siteConfig.url}/prestations/home-organising` },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnostic",
      description: "Analyse de votre espace et de vos habitudes de vie",
    },
    {
      number: "02",
      title: "Désencombrement",
      description: "Tri et libération des objets inutiles",
    },
    {
      number: "03",
      title: "Organisation",
      description: "Mise en place de systèmes de rangement adaptés",
    },
    {
      number: "04",
      title: "Suivi",
      description: "Conseils pour maintenir l'organisation au quotidien",
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
                Home Organising
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
              <LayoutGrid className="w-4 h-4" />
              Coaching en rangement
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Home Organiser à Pau : Coach en Rangement et Organisation
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              <strong>Home organiser professionnelle à Pau</strong>, je vous accompagne pour
              désencombrer, organiser et optimiser votre intérieur. Retrouvez un
              <strong> espace de vie harmonieux</strong> et fonctionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Prendre rendez-vous</Link>
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

      {/* Qu'est-ce que le Home Organising */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Qu&apos;est-ce que le Home Organising ?
            </h2>
            <p className="text-neutral-600 text-lg">
              Le <strong>home organising</strong> (ou coaching en rangement) est un
              accompagnement personnalisé pour transformer votre intérieur. Plus qu&apos;un
              simple rangement, c&apos;est une méthode qui vous aide à créer un espace de vie
              qui vous ressemble et simplifie votre quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Clarté mentale",
                description: "Un intérieur rangé libère l'esprit et réduit le stress",
              },
              {
                icon: Heart,
                title: "Bien-être",
                description: "Vivez dans un espace qui vous ressemble et vous apaise",
              },
              {
                icon: Sparkles,
                title: "Efficacité",
                description: "Gagnez du temps au quotidien grâce à une organisation optimale",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-cream-50 rounded-2xl">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Mon accompagnement en 4 étapes
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Un processus personnalisé pour transformer durablement votre intérieur.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary-200 mb-4">{step.number}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services détaillés */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Mes prestations de home organising
              </h2>
              <ul className="space-y-4">
                {[
                  "Diagnostic et analyse de vos espaces",
                  "Désencombrement et tri avec accompagnement",
                  "Organisation de placards et dressings",
                  "Aménagement de cuisines et salles de bain",
                  "Organisation de bureaux et espaces de travail",
                  "Conseils en achats de rangement adaptés",
                  "Suivi et coaching pour maintenir l'organisation",
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
                Pour qui ?
              </h2>
              <p className="text-neutral-600 mb-6">
                Le <strong>coaching en rangement à Pau</strong> s&apos;adresse à tous ceux qui souhaitent :
              </p>
              <ul className="space-y-4">
                {[
                  "Reprendre le contrôle de leur intérieur",
                  "Simplifier leur quotidien",
                  "Préparer un déménagement ou une nouvelle étape de vie",
                  "Organiser leur maison après un événement (naissance, séparation...)",
                  "Apprendre à ranger efficacement",
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

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt(e) à transformer votre intérieur ?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour un premier échange gratuit et sans engagement. Ensemble,
              créons l&apos;espace de vie qui vous ressemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-100">
                <Link href="/contact">Prendre rendez-vous</Link>
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
