"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  ShoppingBag,
  SprayCan,
  LayoutGrid,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { Container, Button } from "@/components/ui";

const services = [
  {
    id: "menage",
    title: "Ménage & Nettoyage",
    description: "Entretien régulier et ponctuel de votre intérieur avec des produits de qualité professionnelle.",
    icon: Sparkles,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    colSpan: "lg:col-span-2",
  },
  {
    id: "home-organising",
    title: "Home Organising",
    description: "Coaching rangement et organisation sur mesure pour un espace qui vous ressemble.",
    icon: LayoutGrid,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
    colSpan: "",
  },
  {
    id: "repassage",
    title: "Repassage",
    description: "Service professionnel à domicile pour un linge impeccable.",
    icon: Shirt,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    colSpan: "",
  },
  {
    id: "nettoyage-specifique",
    title: "Nettoyage spécifique",
    description: "Vitres, moquettes, canapés et tapis.",
    icon: SprayCan,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    colSpan: "",
  },
  {
    id: "courses",
    title: "Livraison de courses",
    description: "Service pratique pour simplifier votre quotidien.",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    colSpan: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function ServicesBento() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary-100/50 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10 px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Nos expertises
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Des services pensés pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              votre bien-être
            </span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Particuliers ou professionnels, nous vous proposons une gamme complète
            de prestations pour un intérieur impeccable et organisé.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative ${service.colSpan}`}
              >
                <Link href="/prestations" className="block h-full">
                  <div
                    className={`relative h-full min-h-[200px] ${service.bgColor} rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-1`}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110`}
                      >
                        <Icon
                          size={28}
                          className={`${service.iconColor} group-hover:text-white transition-colors duration-500`}
                        />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 group-hover:text-white/90 transition-colors duration-500 mb-6 flex-grow">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center gap-2 font-medium text-neutral-900 group-hover:text-white transition-colors duration-500">
                        Découvrir
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Link href="/prestations">
            <Button size="lg" className="group">
              Voir toutes nos prestations
              <ArrowRight
                size={20}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export { ServicesBento };
