"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  ShoppingBag,
  SprayCan,
  LayoutGrid,
  Home,
  Briefcase,
  Star,
  Heart,
  Target,
  Recycle,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Container, Button, Carousel, CarouselSlide } from "@/components/ui";
import { LucideIcon } from "lucide-react";

interface ServiceCardData {
  _id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  buttonText: string;
}

interface ServicesSectionData {
  sectionTitle: string;
  sectionHighlight: string;
  sectionDescription: string;
  ctaButtonText: string;
  services: ServiceCardData[];
}

interface ServicesCarouselProps {
  data?: ServicesSectionData | null;
}

// Mapping des icônes
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Shirt,
  ShoppingBag,
  SprayCan,
  LayoutGrid,
  Home,
  Briefcase,
  Star,
  Heart,
  Target,
  Recycle,
};

// Mapping des couleurs de fond
const bgColorMap: Record<string, { bg: string; gradient: string; icon: string }> = {
  lightBlue: {
    bg: 'bg-blue-50',
    gradient: 'from-blue-500 to-blue-600',
    icon: 'text-blue-600',
  },
  lightGreen: {
    bg: 'bg-emerald-50',
    gradient: 'from-emerald-500 to-teal-600',
    icon: 'text-emerald-600',
  },
  lightViolet: {
    bg: 'bg-violet-50',
    gradient: 'from-violet-500 to-purple-600',
    icon: 'text-violet-600',
  },
  lightOrange: {
    bg: 'bg-orange-50',
    gradient: 'from-orange-500 to-amber-600',
    icon: 'text-orange-600',
  },
  lightPink: {
    bg: 'bg-pink-50',
    gradient: 'from-pink-500 to-rose-600',
    icon: 'text-pink-600',
  },
  lightYellow: {
    bg: 'bg-yellow-50',
    gradient: 'from-yellow-500 to-amber-600',
    icon: 'text-yellow-600',
  },
  lightRed: {
    bg: 'bg-red-50',
    gradient: 'from-red-500 to-rose-600',
    icon: 'text-red-600',
  },
  beige: {
    bg: 'bg-amber-50',
    gradient: 'from-amber-500 to-orange-600',
    icon: 'text-amber-600',
  },
};

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

function ServicesCarousel({ data }: ServicesCarouselProps) {
  // Valeurs par défaut
  const sectionTitle = data?.sectionTitle || "Des services pensés pour";
  const sectionHighlight = data?.sectionHighlight || "votre bien-être";
  const sectionDescription = data?.sectionDescription || "Une gamme complète de prestations pour un intérieur impeccable.";
  const ctaButtonText = data?.ctaButtonText || "Voir toutes nos prestations";
  const services = data?.services || [];

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
            {sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              {sectionHighlight}
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            {sectionDescription}
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel showDots={true} showArrows={false}>
            {services.map((service) => (
              <CarouselSlide key={service._id} size="md">
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
              {ctaButtonText}
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
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const colors = bgColorMap[service.backgroundColor] || bgColorMap.lightBlue;
            const colSpan = index === 0 ? "lg:col-span-2" : "";

            return (
              <motion.div
                key={service._id}
                variants={itemVariants}
                className={`group relative ${colSpan}`}
              >
                <Link href="/prestations" className="block h-full">
                  <div
                    className={`relative h-full min-h-[180px] ${colors.bg} rounded-2xl lg:rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-1`}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                        <Icon
                          size={24}
                          className={`${colors.icon} group-hover:text-white transition-colors duration-500`}
                        />
                      </div>

                      <h3 className="text-lg lg:text-xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-500 mb-5 flex-grow">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center gap-2 font-medium text-sm text-neutral-900 group-hover:text-white transition-colors duration-500">
                        {service.buttonText}
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
              {ctaButtonText}
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
function ServiceCardMobile({ service }: { service: ServiceCardData }) {
  const Icon = iconMap[service.icon] || Sparkles;
  const colors = bgColorMap[service.backgroundColor] || bgColorMap.lightBlue;

  return (
    <Link href="/prestations" className="block h-full">
      <div
        className={`h-full ${colors.bg} rounded-xl p-4 border border-neutral-100/50
                    shadow-sm active:scale-[0.98] transition-transform duration-150`}
      >
        {/* Icône */}
        <div className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-lg mb-3">
          <Icon size={20} className={colors.icon} />
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
          {service.buttonText}
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

export { ServicesCarousel };
