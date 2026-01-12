"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  SprayCan,
  LayoutGrid,
  Building2,
  Home,
  Store,
  Factory,
  Brush,
  Droplets,
  UtensilsCrossed,
  Clock,
  Package,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Container, Card, Button, InterventionMap } from "@/components/ui";
import { CTAPremium } from "@/components/sections";

// Icon mapping - supports both French and English names
const iconMap: Record<string, any> = {
  // Maison / Domicile
  maison: Home,
  home: Home,

  // Immeuble / Bureaux
  immeuble: Building2,
  buildings: Building2,
  building: Building2,
  building2: Building2,

  // Magasin / Commerce
  magasin: Store,
  store: Store,
  commerce: Store,

  // Usine / Industrie
  usine: Factory,
  factory: Factory,
  industrie: Factory,

  // Balai / Nettoyage
  balai: Brush,
  brush: Brush,
  broom: Brush,
  nettoyage: Brush,

  // Spray / Produits
  spray: SprayCan,
  spraycan: SprayCan,
  produits: SprayCan,

  // Étoiles / Brillance
  etoiles: Sparkles,
  sparkles: Sparkles,
  brillant: Sparkles,
  brillance: Sparkles,

  // T-Shirt / Repassage
  tshirt: Shirt,
  "t-shirt": Shirt,
  shirt: Shirt,
  chemise: Shirt,
  repassage: Shirt,

  // Panier / Linge
  panier: ShoppingCart,
  basket: ShoppingCart,
  linge: ShoppingCart,
  chariot: ShoppingCart,
  cart: ShoppingCart,

  // Fenêtre / Vitres
  fenetre: Package,
  window: Package,
  vitres: Package,
  vitre: Package,

  // Douche / Sanitaires
  douche: Droplets,
  shower: Droplets,
  droplets: Droplets,
  sanitaires: Droplets,

  // Vaisselle / Cuisine
  vaisselle: UtensilsCrossed,
  utensils: UtensilsCrossed,
  cuisine: UtensilsCrossed,

  // Carton / Déménagement
  carton: ShoppingBag,
  box: ShoppingBag,
  shoppingbag: ShoppingBag,
  demenagement: ShoppingBag,

  // Grille / Organisation
  grille: LayoutGrid,
  grid: LayoutGrid,
  layout: LayoutGrid,
  layoutgrid: LayoutGrid,
  organisation: LayoutGrid,

  // Horloge / Régulier
  horloge: Clock,
  clock: Clock,
  regulier: Clock,
  temps: Clock,
};

interface ServiceCategory {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  services: string[];
  buttonText: string;
}

interface PrestationsContentProps {
  serviceCategories: ServiceCategory[];
  ctaData?: any;
}

export function PrestationsContent({ serviceCategories, ctaData }: PrestationsContentProps) {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 via-primary-50/50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Nos prestations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
            >
              Des services adaptés à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                vos besoins
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed"
            >
              Particuliers ou professionnels, découvrez notre gamme complète de
              services pour un intérieur impeccable et organisé.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="xl" className="px-2 sm:px-4 lg:px-6">
          <div className="space-y-24 md:space-y-32">
            {serviceCategories.map((category, index) => {
              const Icon = iconMap[category.icon?.toLowerCase()] || Home;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Texte (titre, description, liste) */}
                  <div className={`order-1 ${!isEven ? "lg:order-2" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center shadow-sm">
                        <Icon size={32} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-600 font-medium tracking-wide uppercase">
                          {category.subtitle}
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
                          {category.title}
                        </h2>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-lg text-neutral-600 mb-8 leading-relaxed"
                    >
                      {category.description}
                    </motion.p>

                    <ul className="space-y-4 lg:mb-10">
                      {category.services.map((service, serviceIndex) => (
                        <motion.li
                          key={service}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + serviceIndex * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-accent-success/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent-success/20 transition-colors">
                            <CheckCircle
                              size={16}
                              className="text-accent-success"
                            />
                          </div>
                          <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                            {service}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA desktop uniquement */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="hidden lg:block"
                    >
                      <Link href="/contact">
                        <Button className="group shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300">
                          {category.buttonText}
                          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    className={`order-2 ${!isEven ? "lg:order-1" : ""}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="group relative">
                      <Card
                        variant="elevated"
                        padding="none"
                        className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-700/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform transition-transform duration-500 group-hover:translate-y-0">
                            <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                              <Icon
                                size={32}
                                className="text-white drop-shadow-lg"
                              />
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                              {category.title}
                            </p>
                          </div>
                        </div>
                      </Card>
                      {/* Decorative element */}
                      <div className={`absolute -z-10 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-full h-full border-2 border-primary-200 rounded-3xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`} />
                    </div>
                  </motion.div>

                  {/* CTA mobile uniquement - après l'image */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="order-3 lg:hidden"
                  >
                    <Link href="/contact">
                      <Button className="w-full group shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300">
                        {category.buttonText}
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
              <MapPin size={16} />
              Nous intervenons près de chez vous
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Zone d&apos;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                intervention
              </span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Satisfait Services intervient à Jurançon, Pau et dans un rayon de
              30 km autour de Pau. N&apos;hésitez pas à nous contacter pour
              vérifier si nous intervenons dans votre secteur.
            </p>
          </motion.div>

          {/* Carte interactive */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <InterventionMap />
            </div>
          </motion.div>

          {/* Liste des villes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-neutral-500 mb-6 font-medium uppercase tracking-wide">
              Communes desservies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Jurançon",
                "Pau",
                "Billère",
                "Lons",
                "Lescar",
                "Bizanos",
                "Idron",
                "Gan",
                "Morlaàs",
              ].map((city, index) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className={`px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-default ${
                    city === "Jurançon" || city === "Pau"
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
                      : "bg-white text-neutral-700 hover:bg-neutral-50 hover:shadow-md hover:-translate-y-0.5 border border-neutral-100"
                  }`}
                >
                  {city}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <CTAPremium data={ctaData} />
    </>
  );
}
