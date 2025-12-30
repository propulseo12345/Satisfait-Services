import type { Metadata } from "next";
import Link from "next/link";
import { Shirt, CheckCircle, Phone, Clock, Heart, Award } from "lucide-react";
import { pagesMetadata, siteConfig, services, zones } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.repassage.title,
  description: pagesMetadata.repassage.description,
  keywords: pagesMetadata.repassage.keywords,
  alternates: {
    canonical: pagesMetadata.repassage.canonical,
  },
  openGraph: {
    title: pagesMetadata.repassage.title,
    description: pagesMetadata.repassage.description,
    url: pagesMetadata.repassage.canonical,
  },
};

export default function RepassagePage() {
  const service = services.find((s) => s.id === "repassage")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Repassage", url: `${siteConfig.url}/prestations/repassage` },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Libérez-vous de cette corvée chronophage",
    },
    {
      icon: Award,
      title: "Qualité professionnelle",
      description: "Un repassage soigné et impeccable",
    },
    {
      icon: Heart,
      title: "Service à domicile",
      description: "Intervention directement chez vous",
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
                Repassage
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
              <Shirt className="w-4 h-4" />
              Service pour particuliers
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Service de Repassage à Domicile à Pau
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              <strong>Repassage professionnel à domicile à Pau</strong> : confiez-nous votre
              linge pour un repassage soigné et impeccable. Gagnez du temps précieux au quotidien.
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
                Notre service de repassage
              </h2>
              <p className="text-neutral-600 mb-6">
                Le <strong>repassage à domicile à Pau</strong> vous fait gagner un temps
                précieux. Nous prenons soin de chaque pièce avec attention et
                professionnalisme.
              </p>

              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Types de linge pris en charge
              </h3>
              <ul className="space-y-3">
                {[
                  "Chemises et chemisiers",
                  "Pantalons et jupes",
                  "Draps et housses de couette",
                  "Nappes et serviettes de table",
                  "Linge de maison",
                  "Vêtements du quotidien",
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
                Pourquoi choisir notre service ?
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

      {/* Formules */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Nos formules de repassage
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins, que ce soit pour un repassage ponctuel
              ou régulier.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Repassage ponctuel</h3>
              <p className="text-neutral-600 mb-4">
                Idéal pour les occasions spéciales ou les périodes chargées.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Sans engagement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Sur demande
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Intervention rapide
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-200">
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Recommandé
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Repassage régulier</h3>
              <p className="text-neutral-600 mb-4">
                Un service récurrent pour ne plus jamais vous soucier du repassage.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Tarif préférentiel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Créneau réservé
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Même intervenante
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Zones d&apos;intervention
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Notre service de <strong>repassage à domicile</strong> est disponible à Pau
              et dans les communes environnantes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {zones.slice(0, 8).map((zone) => (
              <span
                key={zone.name}
                className="bg-cream-100 text-neutral-700 px-4 py-2 rounded-full text-sm"
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
              Libérez-vous du repassage !
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Demandez votre <strong className="text-white">devis gratuit</strong> et profitez
              d&apos;un linge parfaitement repassé sans effort.
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
