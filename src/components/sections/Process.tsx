"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de contact",
    description:
      "Appelez-nous ou remplissez le formulaire en ligne. Nous discutons ensemble de vos besoins.",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    number: "02",
    icon: FileText,
    title: "Devis personnalisé",
    description:
      "Nous établissons un devis détaillé et transparent, adapté à vos attentes et votre budget.",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Planification",
    description:
      "Nous convenons ensemble des dates et horaires qui vous conviennent le mieux.",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Intervention",
    description:
      "Notre équipe intervient avec professionnalisme pour un résultat impeccable.",
    color: "from-orange-500 to-amber-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            <ArrowRight size={16} />
            Simple et efficace
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Comment ça{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              fonctionne ?
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Un processus simple en 4 étapes pour un service de qualité
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 70, scale: 0.9, rotateX: 15 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.18,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 hover:border-transparent">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8">
                      <span
                        className={`inline-block px-3 py-1 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-full`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 mt-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon size={32} className={step.iconColor} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Arrow (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-3 z-10">
                      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                        <ArrowRight
                          size={14}
                          className="text-primary-500"
                        />
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

export { Process };
