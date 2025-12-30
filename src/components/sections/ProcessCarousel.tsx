"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Container, Carousel, CarouselSlide } from "@/components/ui";
import { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  iconColor: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de contact",
    description: "Appelez-nous ou remplissez le formulaire. Nous discutons de vos besoins.",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    icon: FileText,
    title: "Devis personnalisé",
    description: "Devis détaillé et transparent, adapté à votre budget.",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Planification",
    description: "Nous convenons des dates et horaires qui vous conviennent.",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Intervention",
    description: "Intervention professionnelle pour un résultat impeccable.",
    color: "from-orange-500 to-amber-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

function ProcessCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50/30 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <ArrowRight size={14} />
            Simple et efficace
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 md:mb-6">
            Comment ça{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              fonctionne ?
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600">
            4 étapes simples pour un service de qualité
          </p>
        </motion.div>

        {/* Mobile: Grille 2x2 compacte (pas de carousel pour éviter les bugs) */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="relative bg-white rounded-2xl p-4 h-full shadow-sm border border-neutral-100">
                  {/* Step Number Badge */}
                  <span
                    className={`absolute -top-2 left-3 inline-block px-2 py-0.5 bg-gradient-to-r ${step.color} text-white text-[10px] font-bold rounded-full`}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-9 h-9 ${step.iconBg} rounded-lg flex items-center justify-center mb-3 mt-1`}
                  >
                    <Icon size={18} className={step.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-bold text-neutral-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-6 lg:p-7 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-transparent">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-6">
                      <span
                        className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-xs font-bold rounded-full`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center mb-5 mt-3 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon size={28} className={step.iconColor} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-2.5 z-10">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center">
                        <ArrowRight size={12} className="text-primary-500" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ProcessCarousel };
