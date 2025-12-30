"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { Users, Star, MapPin, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    value: 100,
    suffix: "%",
    label: "Clients satisfaits",
    description: "Notre priorité",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    value: 50,
    suffix: "+",
    label: "Clients réguliers",
    description: "Nous font confiance",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    value: 24,
    suffix: "h",
    label: "Délai de réponse",
    description: "Pour votre devis",
    icon: Clock,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    value: 30,
    suffix: "km",
    label: "Zone couverte",
    description: "Autour de Pau",
    icon: MapPin,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
  });

  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stats-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-4">
            Satisfait Services en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              quelques chiffres
            </span>
          </h2>
          <p className="text-sm md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Des résultats qui témoignent de notre engagement
          </p>
        </motion.div>

        {/* Mobile: Grille 2x2 compacte */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="bg-neutral-50 rounded-2xl p-4 text-center h-full">
                  {/* Icon - plus petit sur mobile */}
                  <div
                    className={`inline-flex w-10 h-10 ${stat.bgColor} rounded-xl items-center justify-center mb-3`}
                  >
                    <Icon size={20} className={stat.color} />
                  </div>

                  {/* Number - taille réduite */}
                  <div className="text-2xl font-bold text-neutral-900 mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-xs font-semibold text-neutral-800 mb-0.5">
                    {stat.label}
                  </h3>
                  <p className="text-[10px] text-neutral-500">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Grille 4 colonnes */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="relative bg-neutral-50 rounded-3xl p-8 text-center h-full transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 border border-transparent hover:border-neutral-100 hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-14 h-14 ${stat.bgColor} rounded-2xl items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon
                      size={28}
                      className={`${stat.color} transition-transform duration-300`}
                    />
                  </div>

                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-neutral-500">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Stats };
