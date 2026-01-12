"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, FileText, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink } from "@/lib/utils";

interface HeroPremiumProps {
  data?: {
    title?: string;
    highlightedText?: string;
    description?: string;
    descriptionMobile?: string;
    phoneNumber?: string;
    ctaButton1Text?: string;
    ctaButton1TextDesktop?: string;
    ctaButton2Text?: string;
    backgroundImage?: string;
  } | null;
}

function HeroPremium({ data }: HeroPremiumProps) {
  // Valeurs par défaut si pas de données Sanity
  const title = data?.title || "Services de qualité pour";
  const highlightedText = data?.highlightedText || "votre intérieur";
  const description = data?.description || "Chez Satisfait Services, nous apportons des années d'expertise dans les services à la personne, offrant des solutions durables, efficaces et abordables pour votre domicile.";
  const descriptionMobile = data?.descriptionMobile || "Expertise et solutions durables pour votre domicile. Ménage, nettoyage, home organising à Pau.";
  const phoneNumber = data?.phoneNumber || SITE_CONFIG.contact.phone;
  const ctaButton1Text = data?.ctaButton1Text || "Appeler maintenant";
  const ctaButton1TextDesktop = data?.ctaButton1TextDesktop || phoneNumber;
  const ctaButton2Text = data?.ctaButton2Text || "Demander un devis";
  const backgroundImage = data?.backgroundImage || "/images/hero-home-interior.jpg";

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Intérieur moderne et propre"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay - Plus fort sur mobile pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/30 md:from-neutral-900/70 md:via-neutral-900/50 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-0 md:pl-20 lg:pl-32 xl:pl-40">
        <div className="max-w-xl md:max-w-2xl">
          {/* Main Heading - Taille réduite sur mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6"
          >
            {title}{" "}
            <span className="text-primary-400">{highlightedText}</span>
          </motion.h1>

          {/* Description - Plus courte sur mobile */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm md:text-lg text-neutral-200 leading-relaxed mb-6 md:mb-8 max-w-md md:max-w-xl"
          >
            <span className="hidden md:inline">
              {description}
            </span>
            <span className="md:hidden">
              {descriptionMobile}
            </span>
          </motion.p>

          {/* CTA Buttons - Stack vertical sur mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Primary Button - Phone */}
            <a
              href={getPhoneLink(phoneNumber)}
              className="group inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-5 py-3 md:px-6 md:py-4 rounded-xl transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              <Phone size={18} className="md:w-5 md:h-5" />
              <span className="md:hidden">{ctaButton1Text}</span>
              <span className="hidden md:inline">{ctaButton1TextDesktop}</span>
            </a>

            {/* Secondary Button - Quote */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-neutral-900 font-semibold px-5 py-3 md:px-6 md:py-4 rounded-xl transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              <FileText size={18} className="md:w-5 md:h-5" />
              {ctaButton2Text}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium tracking-wide">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export { HeroPremium };
