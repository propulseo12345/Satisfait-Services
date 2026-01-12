import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, CheckCircle, Phone, Heart, Clock, Shield } from "lucide-react";
import { pagesMetadata, siteConfig, services, zones } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.courses.title,
  description: pagesMetadata.courses.description,
  keywords: pagesMetadata.courses.keywords,
  alternates: {
    canonical: pagesMetadata.courses.canonical,
  },
  openGraph: {
    title: pagesMetadata.courses.title,
    description: pagesMetadata.courses.description,
    url: pagesMetadata.courses.canonical,
  },
};

export default function LivraisonCoursesPage() {
  const service = services.find((s) => s.id === "courses")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Livraison de courses", url: `${siteConfig.url}/prestations/livraison-courses` },
  ];

  const forWhom = [
    {
      icon: Heart,
      title: "Personnes âgées",
      description: "Maintenir votre autonomie sans les contraintes des déplacements",
    },
    {
      icon: Shield,
      title: "Personnes à mobilité réduite",
      description: "Un service adapté à vos besoins spécifiques",
    },
    {
      icon: Clock,
      title: "Personnes très occupées",
      description: "Gagnez du temps précieux sur votre quotidien",
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
                Livraison de courses
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
              <ShoppingBag className="w-4 h-4" />
              Services à la personne
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Livraison de Courses à Domicile à Pau
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              <strong>Service de livraison de courses à Pau</strong> : nous faisons vos
              courses et vous les livrons directement à domicile. Un service pratique pour
              simplifier votre quotidien.
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

      {/* Comment ça marche */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Comment fonctionne notre service ?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Un processus simple pour vous faciliter la vie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Vous préparez votre liste",
                description:
                  "Envoyez-nous votre liste de courses par téléphone, SMS ou WhatsApp.",
              },
              {
                step: "2",
                title: "Nous faisons vos courses",
                description:
                  "Nous nous rendons dans les commerces de votre choix pour acheter vos produits.",
              },
              {
                step: "3",
                title: "Livraison à domicile",
                description:
                  "Nous vous livrons vos courses directement chez vous, à l'heure convenue.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pour qui */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Ce service est fait pour vous si...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {forWhom.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Détails du service */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Ce que comprend notre service
              </h2>
              <ul className="space-y-4">
                {[
                  "Prise en compte de votre liste de courses",
                  "Achats dans les commerces de votre choix (supermarchés, marchés, commerces de proximité)",
                  "Respect de vos préférences et habitudes alimentaires",
                  "Livraison à domicile à l'heure convenue",
                  "Rangement des courses si souhaité",
                  "Remise des tickets de caisse",
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
                Autres petits services du quotidien
              </h2>
              <p className="text-neutral-600 mb-6">
                En plus de la livraison de courses, nous pouvons vous aider avec :
              </p>
              <ul className="space-y-4">
                {[
                  "Dépôt ou retrait de linge au pressing",
                  "Envoi de courrier et colis",
                  "Accompagnement pour des rendez-vous",
                  "Petites courses urgentes",
                  "Autres demandes selon vos besoins",
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

      {/* Zones */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Zones de livraison
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nous livrons vos courses à Pau et dans les communes environnantes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {zones.map((zone) => (
              <span
                key={zone.name}
                className="bg-white text-neutral-700 px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {zone.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Simplifiez-vous la vie !
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Plus besoin de vous déplacer. Contactez-nous pour organiser votre première
              livraison de courses à domicile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-100">
                <Link href="/contact">Nous contacter</Link>
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
