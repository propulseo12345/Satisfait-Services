import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PrestationsContent } from "@/components/sections/PrestationsContent";

// Fonction pour récupérer les prestations depuis Sanity
async function getPrestations() {
  const query = `*[_type == "prestation"] | order(order asc) {
    _id,
    category,
    icon,
    title,
    description,
    features,
    image,
    buttonText,
    order
  }`;

  const prestations = await client.fetch(query);
  return prestations;
}

// Fonction pour récupérer la page Prestations (avec CTA)
async function getPrestationsPage() {
  const query = `*[_type == "prestationsPage"][0] {
    cta {
      badge,
      mainTitle,
      highlightedText,
      description,
      buttons[] {
        text,
        type,
        icon
      },
      contactInfo[] {
        label,
        value,
        icon
      }
    }
  }`;

  const page = await client.fetch(query);
  return page;
}

export default async function PrestationsPage() {
  const [prestations, pageData] = await Promise.all([
    getPrestations(),
    getPrestationsPage(),
  ]);

  // Transformer les données de Sanity pour correspondre au format attendu
  const serviceCategories = prestations.map((prestation: any) => ({
    id: prestation._id,
    icon: prestation.icon || "home",
    title: prestation.title,
    subtitle: prestation.category,
    image: prestation.image ? urlFor(prestation.image).width(800).height(600).url() : "/images/placeholder.jpg",
    description: prestation.description,
    services: prestation.features || [],
    buttonText: prestation.buttonText || "Demander un devis",
  }));

  return <PrestationsContent serviceCategories={serviceCategories} ctaData={pageData?.cta} />;
}

// Revalidation toutes les 60 secondes
export const revalidate = 60;
