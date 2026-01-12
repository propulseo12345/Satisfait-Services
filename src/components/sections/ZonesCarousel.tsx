"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container, Carousel, CarouselSlide } from "@/components/ui";

const defaultZones = [
  { ville: "Pau", description: "Centre-ville" },
  { ville: "Narcastet", description: "Siège" },
  { ville: "Jurançon", description: "Environs" },
  { ville: "Billère", description: "Régulier" },
  { ville: "Lescar", description: "Zone comm." },
  { ville: "Gan", description: "Vallée" },
  { ville: "Idron", description: "Résidentiel" },
  { ville: "Lons", description: "Environs" },
];

type Zone = { ville: string; description?: string };

const ZoneCard = ({ ville, description, compact }: Zone & { compact?: boolean }) => (
  <div className={compact ? "p-2 bg-white rounded-lg text-center shadow-sm" : "p-3 lg:p-4 bg-white rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-200"}>
    <MapPin className={compact ? "w-3.5 h-3.5 text-primary-500 mx-auto mb-1" : "w-4 h-4 lg:w-5 lg:h-5 text-primary-500 mx-auto mb-2"} />
    <p className={compact ? "font-semibold text-neutral-900 text-[10px]" : "font-semibold text-neutral-900 text-xs lg:text-sm"}>{ville}</p>
    {!compact && description && <p className="text-[10px] lg:text-xs text-neutral-500 mt-0.5">{description}</p>}
  </div>
);

function ZonesCarousel({ data }: { data?: any }) {
  const badge = data?.badge || "Zone d'intervention";
  const mainTitle = data?.mainTitle || "Nous intervenons près de chez vous";
  const subtitle = data?.subtitle || "Pau et agglomération paloise";
  const zones = data?.zones || defaultZones;
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-primary-50">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 bg-white text-primary-700 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <MapPin size={12} className="md:w-4 md:h-4" />
            {badge}
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-1.5 md:mb-2">
            {mainTitle}
          </h2>
          <p className="text-xs md:text-sm text-neutral-600">
            {subtitle}
          </p>
        </motion.div>

        {/* Mobile: Grille 4x2 compacte */}
        <div className="grid grid-cols-4 gap-2 md:hidden">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.ville}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
            >
              <ZoneCard {...zone} compact />
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4"
        >
          {zones.map((zone, index) => (
            <motion.div
              key={zone.ville}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
            >
              <ZoneCard {...zone} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export { ZonesCarousel };
