"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Shield, Award, Sparkles, Target, Eye, User, Quote, Calendar } from "lucide-react";
import { Container } from "@/components/ui";
import { CTAPremium } from "@/components/sections";

const values = [
  {
    icon: Heart,
    title: "Écoute",
    description: "Solutions sur mesure",
    fullDescription:
      "Nous prenons le temps de comprendre vos besoins spécifiques pour vous proposer des solutions sur mesure.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Shield,
    title: "Confiance",
    description: "Discrétion et fiabilité",
    fullDescription:
      "Discrétion et fiabilité sont au cœur de notre relation avec chaque client.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Travail soigné",
    fullDescription:
      "Un travail soigné et méticuleux pour un résultat à la hauteur de vos attentes.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Sparkles,
    title: "Sur mesure",
    description: "Prestations adaptées",
    fullDescription:
      "Chaque prestation est personnalisée selon vos besoins et votre budget.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Naissance du projet",
    description: "Création de Satisfait Services avec une vision claire.",
  },
  {
    year: "2021",
    title: "Développement local",
    description: "Extension à tout le bassin de Pau et ses alentours.",
  },
  {
    year: "2023",
    title: "Home Organising",
    description: "Ajout du coaching rangement à notre offre.",
  },
  {
    year: "2024",
    title: "Croissance continue",
    description: "Renforcement de nos services pour mieux vous servir.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-primary-50 via-primary-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
            >
              <Heart size={14} />
              À propos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 md:mb-6"
            >
              Découvrez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Satisfait Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm md:text-lg text-neutral-600 leading-relaxed"
            >
              Une entreprise à taille humaine, animée par la passion du service.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <Container size="xl" className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image - Hidden on mobile, shown simplified */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block order-2 lg:order-1"
            >
              <div className="relative max-w-[280px] md:max-w-none mx-auto">
                {/* Main Card */}
                <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto mb-4 md:mb-8">
                        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                        <div className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                          <User size={40} className="md:w-16 md:h-16 text-white/90" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">Tina</h3>
                      <p className="text-primary-100 text-sm md:text-lg">Fondatrice</p>
                    </div>
                  </div>
                </div>

                {/* Experience Badge - Desktop only */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-3 md:p-5 shadow-lg hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="text-center">
                    <p className="text-2xl md:text-4xl font-bold text-primary-600">5+</p>
                    <p className="text-[10px] md:text-sm text-neutral-600 font-medium">
                      Ans d&apos;expérience
                    </p>
                  </div>
                </motion.div>

                {/* Quote Card - Desktop only */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg max-w-[220px] hidden md:block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <Quote size={18} className="text-primary-300 mb-2" />
                  <p className="text-neutral-700 italic text-sm leading-relaxed">
                    &ldquo;Votre satisfaction, notre priorité&rdquo;
                  </p>
                  <p className="text-primary-600 font-medium text-xs mt-2">— Tina</p>
                </motion.div>

                <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl md:rounded-3xl hidden md:block" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Sparkles size={14} />
                  Notre histoire
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
                  L&apos;histoire de{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    Tina
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed">
                <p>
                  Passionnée par le bien-être à domicile,
                  <strong className="text-neutral-900"> Tina</strong> a créé Satisfait Services avec une conviction : chaque foyer mérite un intérieur propre et agréable.
                </p>
                <p className="hidden md:block">
                  Après plusieurs années d&apos;expérience dans les services à la personne, elle a souhaité créer une entreprise à son image : humaine et professionnelle.
                </p>
                <p>
                  Basée à <strong className="text-neutral-900">Narcastet</strong>, elle intervient dans toute la région paloise avec bienveillance et sens du détail.
                </p>
              </div>

              {/* Mission & Vision - Grille 2 colonnes */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-neutral-50 rounded-xl p-3 md:p-4">
                  <div className="flex items-start gap-2.5 md:gap-3">
                    <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Target size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-xs md:text-sm mb-0.5">Mission</p>
                      <p className="text-[10px] md:text-xs text-neutral-600">
                        Simplifier votre quotidien
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-3 md:p-4">
                  <div className="flex items-start gap-2.5 md:gap-3">
                    <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Eye size={18} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-xs md:text-sm mb-0.5">Vision</p>
                      <p className="text-[10px] md:text-xs text-neutral-600">
                        Un intérieur pour tous
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Valeurs Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Award size={14} />
              Ce qui nous anime
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-4">
              Nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                valeurs
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
              Des principes forts qui guident nos interventions
            </p>
          </motion.div>

          {/* Mobile: Grille 2x2 compacte comme Stats */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className={`${value.bgColor} rounded-2xl p-4 text-center h-full`}>
                    <div
                      className={`inline-flex w-10 h-10 bg-white/80 rounded-xl items-center justify-center mb-3`}
                    >
                      <Icon size={20} className={value.iconColor} />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[10px] text-neutral-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Grid 4 colonnes avec hover effects */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`relative h-full ${value.bgColor} rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div className="w-14 h-14 mx-auto bg-white/80 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
                        <Icon size={28} className={`${value.iconColor} group-hover:text-white transition-colors duration-500`} />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-white transition-colors duration-500 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                        {value.fullDescription}
                      </p>
                    </div>
                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <Container size="xl" className="px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Calendar size={14} />
              Notre évolution
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-4">
              Notre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                parcours
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Les étapes clés de notre développement
            </p>
          </motion.div>

          {/* Mobile: Timeline verticale compacte */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-500" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pb-6 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                    <span className="text-white text-[8px] font-bold">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                    <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-600 rounded-full text-[10px] font-semibold mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-sm font-bold text-neutral-900 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-neutral-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Timeline alternée */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-500" />

              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className={`relative pb-10 last:pb-0 ${
                      isEven ? "pr-[50%] text-right" : "pl-[50%]"
                    }`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 ring-4 ring-white">
                        <span className="text-white text-xs font-bold">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                    </div>

                    <div className={isEven ? "mr-10" : "ml-10"}>
                      <div className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-neutral-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTAPremium />
    </>
  );
}
