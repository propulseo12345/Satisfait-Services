import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle, Phone } from "lucide-react";
import { pagesMetadata, siteConfig, services } from "@/lib/seo.config";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: pagesMetadata.nettoyageSpecifique.title,
  description: pagesMetadata.nettoyageSpecifique.description,
  keywords: pagesMetadata.nettoyageSpecifique.keywords,
  alternates: {
    canonical: pagesMetadata.nettoyageSpecifique.canonical,
  },
  openGraph: {
    title: pagesMetadata.nettoyageSpecifique.title,
    description: pagesMetadata.nettoyageSpecifique.description,
    url: pagesMetadata.nettoyageSpecifique.canonical,
  },
};

export default function NettoyageSpecifiquePage() {
  const service = services.find((s) => s.id === "nettoyage-specifique")!;

  const breadcrumbs = [
    { name: "Accueil", url: siteConfig.url },
    { name: "Prestations", url: `${siteConfig.url}/prestations` },
    { name: "Nettoyage spécifique", url: `${siteConfig.url}/prestations/nettoyage-specifique` },
  ];

  const serviceTypes = [
    {
      title: "Nettoyage de vitres",
      description:
        "Nettoyage professionnel de vos vitres intérieures et extérieures pour une transparence parfaite.",
      items: [
        "Vitres intérieures et extérieures",
        "Baies vitrées et vérandas",
        "Miroirs et surfaces vitrées",
        "Encadrements et rebords",
      ],
    },
    {
      title: "Nettoyage de moquettes",
      description:
        "Shampooing et nettoyage en profondeur de vos moquettes pour retrouver leur éclat.",
      items: [
        "Aspiration en profondeur",
        "Shampooing adapté",
        "Traitement des taches",
        "Désodorisation",
      ],
    },
    {
      title: "Nettoyage de canapés",
      description:
        "Redonner vie à vos canapés et fauteuils avec un nettoyage professionnel adapté au tissu.",
      items: [
        "Canapés en tissu",
        "Fauteuils et poufs",
        "Chaises rembourrées",
        "Têtes de lit",
      ],
    },
    {
      title: "Nettoyage de tapis",
      description:
        "Nettoyage et entretien de vos tapis pour préserver leur beauté et leur durabilité.",
      items: [
        "Tapis d'orient et modernes",
        "Carpettes et descentes de lit",
        "Paillassons",
        "Tapis de couloir",
      ],
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
                Nettoyage spécifique
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
              <Sparkles className="w-4 h-4" />
              Nettoyage spécialisé
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Nettoyage de Vitres, Moquettes et Canapés à Pau
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              <strong>Nettoyage spécialisé à Pau</strong> : vitres étincelantes, moquettes
              rafraîchies, canapés comme neufs. Des techniques professionnelles pour un
              résultat impeccable.
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

      {/* Services détaillés */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Nos prestations de nettoyage spécifique
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Des interventions ciblées avec des techniques et produits adaptés à chaque surface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((serviceType, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {serviceType.title}
                </h3>
                <p className="text-neutral-600 mb-6">{serviceType.description}</p>
                <ul className="space-y-2">
                  {serviceType.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Avantages */}
      <section className="bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Pourquoi faire appel à un professionnel ?
              </h2>
              <p className="text-neutral-600 mb-6">
                Le nettoyage de surfaces spécifiques comme les vitres, moquettes ou canapés
                nécessite un savoir-faire et des produits adaptés pour garantir un résultat
                optimal sans abîmer vos biens.
              </p>
              <ul className="space-y-4">
                {[
                  "Équipements professionnels adaptés",
                  "Produits de qualité respectueux des matériaux",
                  "Techniques maîtrisées pour chaque type de surface",
                  "Résultat garanti et durable",
                  "Gain de temps considérable",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Demandez votre devis personnalisé
              </h3>
              <p className="text-neutral-600 mb-6">
                Chaque intervention est unique. Contactez-nous pour obtenir un devis adapté
                à vos besoins spécifiques.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Devis gratuit et sans engagement
                </li>
                <li className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Réponse sous 24h
                </li>
                <li className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-primary-500" />
                  Intervention rapide
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Redonnez de l&apos;éclat à votre intérieur
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Vitres, moquettes, canapés : faites confiance à Satisfait Services pour un
              nettoyage professionnel et un résultat impeccable.
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
