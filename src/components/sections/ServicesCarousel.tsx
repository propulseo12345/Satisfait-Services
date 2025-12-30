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
  ChevronRight,
} from "lucide-react";
import { Container, Button, Carousel, CarouselSlide } from "@/components/ui";
import { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  iconColor: string;
  colSpan?: string;
}

const services: Service[] = [
  {
    id: "menage",
    title: "Ménage & Nettoyage",
    description: "Entretien régulier et ponctuel avec des produits professionnels.",
    icon: Sparkles,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    colSpan: "lg:col-span-2",
  },
  {
    id: "home-organising",
    title: "Home Organising",
    description: "Coaching rangement et organisation sur mesure.",
    icon: LayoutGrid,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: "repassage",
    title: "Repassage",
    description: "Service professionnel pour un linge impeccable.",
    icon: Shirt,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "nettoyage-specifique",
    title: "Nettoyage spécifique",
    description: "Vitres, moquettes, canapés et tapis.",
    icon: SprayCan,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "courses",
    title: "Livraison courses",
    description: "Service pratique pour votre quotidien.",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function ServicesCarousel() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary-100/50 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
          >
            <Sparkles size={14} />
            Nos expertises
          </motion.span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 md:mb-5">
            Des services pensés pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              votre bien-être
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            Une gamme complète de prestations pour un intérieur impeccable.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel showDots={true} showArrows={false}>
            {services.map((service) => (
              <CarouselSlide key={service.id} size="md">
                <ServiceCardMobile service={service} />
              </CarouselSlide>
            ))}
          </Carousel>

          {/* Lien voir tout (mobile) */}
          <div className="text-center mt-6">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm"
            >
              Voir toutes les prestations
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Desktop Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative ${service.colSpan || ""}`}
              >
                <Link href="/prestations" className="block h-full">
                  <div
                    className={`relative h-full min-h-[180px] ${service.bgColor} rounded-2xl lg:rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-1`}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                        <Icon
                          size={24}
                          className={`${service.iconColor} group-hover:text-white transition-colors duration-500`}
                        />
                      </div>

                      <h3 className="text-lg lg:text-xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-500 mb-5 flex-grow">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center gap-2 font-medium text-sm text-neutral-900 group-hover:text-white transition-colors duration-500">
                        Découvrir
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="hidden md:block text-center mt-12"
        >
          <Link href="/prestations">
            <Button size="lg" className="group">
              Voir toutes nos prestations
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

// Card de service optimisée pour mobile
function ServiceCardMobile({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link href="/prestations" className="block h-full">
      <div
        className={`h-full ${service.bgColor} rounded-xl p-4 border border-neutral-100/50
                    shadow-sm active:scale-[0.98] transition-transform duration-150`}
      >
        {/* Icône */}
        <div className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-lg mb-3">
          <Icon size={20} className={service.iconColor} />
        </div>

        {/* Contenu */}
        <h3 className="text-sm font-bold text-neutral-900 mb-1.5">
          {service.title}
        </h3>
        <p className="text-xs text-neutral-600 mb-3 line-clamp-2">
          {service.description}
        </p>

        {/* Flèche */}
        <div className="flex items-center gap-1 text-primary-600 text-xs font-medium">
          En savoir plus
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

export { ServicesCarousel };
