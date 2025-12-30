"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container, Carousel, CarouselSlide } from "@/components/ui";

const zones = [
  { name: "Pau", description: "Centre-ville" },
  { name: "Narcastet", description: "Siège" },
  { name: "Jurançon", description: "Environs" },
  { name: "Billère", description: "Régulier" },
  { name: "Lescar", description: "Zone comm." },
  { name: "Gan", description: "Vallée" },
  { name: "Idron", description: "Résidentiel" },
  { name: "Lons", description: "Environs" },
];

function ZonesCarousel() {
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
            Zone d'intervention
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-1.5 md:mb-2">
            Nous intervenons près de chez vous
          </h2>
          <p className="text-xs md:text-sm text-neutral-600">
            Pau et agglomération paloise
          </p>
        </motion.div>

        {/* Mobile: Grille 4x2 compacte */}
        <div className="grid grid-cols-4 gap-2 md:hidden">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease: "easeOut",
              }}
            >
              <div className="p-2 bg-white rounded-lg text-center shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-primary-500 mx-auto mb-1" />
                <p className="font-semibold text-neutral-900 text-[10px]">
                  {zone.name}
                </p>
              </div>
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
              key={zone.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.05,
                ease: "easeOut",
              }}
            >
              <div className="p-3 lg:p-4 bg-white rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-500 mx-auto mb-2" />
                <p className="font-semibold text-neutral-900 text-xs lg:text-sm">
                  {zone.name}
                </p>
                <p className="text-[10px] lg:text-xs text-neutral-500 mt-0.5">
                  {zone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export { ZonesCarousel };
