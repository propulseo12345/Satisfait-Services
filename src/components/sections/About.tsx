"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Users } from "lucide-react";
import { Container, Button } from "@/components/ui";

const values = [
  {
    icon: Heart,
    title: "Écoute",
    description: "Vos besoins sont notre priorité",
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "Discrétion et fiabilité",
  },
  {
    icon: Sparkles,
    title: "Qualité",
    description: "Un travail soigné",
  },
  {
    icon: Users,
    title: "Sur mesure",
    description: "Prestations personnalisées",
  },
];

function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-3xl" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-professional-cleaning.jpg"
                  alt="Tina, fondatrice de Satisfait Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-700/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-xl font-semibold text-white mb-1">Tina</p>
                  <p className="text-primary-100">Fondatrice</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-xl shadow-lg z-10">
                <p className="font-semibold">Satisfait Services</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Qui sommes-nous ?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Découvrez Tina et{" "}
              <span className="text-primary-600">Satisfait Services</span>
            </h2>

            <p className="text-neutral-600 mb-4 leading-relaxed">
              Passionnée par le bien-être à domicile et l&apos;organisation,
              Tina a créé Satisfait Services avec une conviction forte : chaque
              foyer mérite un intérieur propre, rangé et agréable à vivre.
            </p>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              Basée à Narcastet dans les Pyrénées-Atlantiques, elle intervient
              dans toute la région de Pau pour offrir des services personnalisés
              de ménage, repassage, nettoyage et home organising. Son approche
              humaine et son sens du détail font la différence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <value.icon size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{value.title}</p>
                    <p className="text-sm text-neutral-500">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/a-propos">
              <Button variant="outline">En savoir plus sur nous</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { About };
