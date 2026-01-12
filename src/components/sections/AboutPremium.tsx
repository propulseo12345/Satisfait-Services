"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Heart, Shield, Award, Target, Quote, ArrowRight, User } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface AboutSectionData {
  badge?: { value: string; label: string };
  founderImage?: any;
  founderName?: string;
  founderTitle?: string;
  founderQuote?: string;
  mainTitle?: string;
  highlightedText?: string;
  paragraph1?: string;
  locationHighlight?: string;
  paragraph2?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: string;
    bgColor: string;
  }>;
  ctaButtonText?: string;
}

interface AboutPremiumProps {
  data?: AboutSectionData | null;
}

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  shield: Shield,
  award: Award,
  target: Target,
};

const colorMap: Record<string, string> = {
  pink: "bg-rose-100 text-rose-600",
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-amber-100 text-amber-600",
  purple: "bg-violet-100 text-violet-600",
};

function AboutPremium({ data }: AboutPremiumProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const badge = data?.badge || { value: "5+", label: "Ans d'expérience" };
  const founderName = data?.founderName || "Tina";
  const founderTitle = data?.founderTitle || "Fondatrice";
  const founderQuote = data?.founderQuote || "Chaque foyer mérite un intérieur propre et serein.";
  const mainTitle = data?.mainTitle || "Une passion pour le";
  const highlightedText = data?.highlightedText || "bien-être à domicile";
  const paragraph1 = data?.paragraph1 || "Passionnée par l'organisation et le bien-être intérieur, Tina a fondé Satisfait Services avec une conviction : chaque foyer mérite un espace propre et serein.";
  const locationHighlight = data?.locationHighlight || "Narcastet";
  const paragraph2 = data?.paragraph2 || "Basée à Narcastet, elle intervient dans toute la région paloise avec une approche humaine et un sens aigu du détail.";
  const ctaButtonText = data?.ctaButtonText || "En savoir plus";

  const values = data?.values?.map((v) => ({
    ...v,
    icon: iconMap[v.icon] || Heart,
    color: colorMap[v.bgColor] || "bg-rose-100 text-rose-600",
  })) || [];

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          <motion.div
            className="hidden md:block lg:col-span-5 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative aspect-[4/5] max-w-[280px] md:max-w-none mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                {data?.founderImage ? (
                  <>
                    <Image
                      src={urlFor(data.founderImage).width(800).height(1000).quality(90).auto('format').url()}
                      alt={founderName}
                      fill
                      quality={90}
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 560px, 800px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 text-center text-white p-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">{founderName}</h3>
                      <p className="text-white/90 text-sm md:text-lg">{founderTitle}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="relative w-24 h-24 md:w-36 md:h-36 mx-auto mb-4 md:mb-6">
                          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center">
                            <User size={40} className="md:w-14 md:h-14 text-white/90" strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-1">{founderName}</h3>
                        <p className="text-primary-100 text-sm md:text-lg">{founderTitle}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Experience Badge - Desktop only */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 md:p-5 shadow-lg hidden md:block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <p className="text-2xl md:text-4xl font-bold text-primary-600">{badge.value}</p>
                  <p className="text-[10px] md:text-sm text-neutral-600 font-medium">
                    {badge.label}
                  </p>
                </div>
              </motion.div>

              {/* Quote Card - Desktop only */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg max-w-[200px] hidden md:block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Quote size={18} className="text-primary-300 mb-2" />
                <p className="text-neutral-700 text-xs italic leading-relaxed">
                  &ldquo;{founderQuote}&rdquo;
                </p>
                <p className="text-primary-600 font-medium text-xs mt-2">— {founderName}</p>
              </motion.div>

              {/* Decorative Lines - Desktop only */}
              <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl md:rounded-3xl hidden md:block" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white text-primary-700 rounded-full text-xs md:text-sm font-medium shadow-sm mb-4 md:mb-6">
                <Heart size={14} className="text-primary-500" />
                Notre histoire
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
                {mainTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  {highlightedText}
                </span>
              </h2>

              <div className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed">
                <p>{paragraph1}</p>
                <p className="hidden md:block">
                  {paragraph2.split(locationHighlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong className="text-neutral-900">{locationHighlight}</strong>
                      </span>
                    ) : part
                  )}
                </p>
              </div>
            </div>

            {/* Values Grid - 2x2 on mobile */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 pt-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group bg-white rounded-xl p-3 md:p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-2.5 md:gap-3">
                      <div
                        className={`flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl ${value.color} flex items-center justify-center`}
                      >
                        <Icon size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-neutral-900 text-xs md:text-sm mb-0.5">
                          {value.title}
                        </h4>
                        <p className="text-[10px] md:text-xs text-neutral-600 leading-snug">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-2"
            >
              <Link href="/a-propos">
                <Button variant="outline" size="lg" className="group text-sm md:text-base">
                  {ctaButtonText}
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { AboutPremium };
