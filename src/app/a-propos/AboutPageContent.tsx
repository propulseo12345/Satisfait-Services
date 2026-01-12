"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Shield, Award, Sparkles, Target, Eye, User, Quote, Calendar, ArrowRight, Phone, MessageCircle, Mail, MapPin, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui";
import { urlFor } from "@/sanity/lib/image";

interface AboutPageData {
  badge: { icon: string; text: string };
  founderImage?: { asset: { _ref: string } };
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  mainTitle: string;
  highlightedName: string;
  paragraphs: Array<{ text: string; highlight?: string }>;
  missionVision: Array<{ title: string; description: string; icon: string }>;
}

interface ValuesSectionData {
  badge: string;
  mainTitle: string;
  highlightedText: string;
  subtitle: string;
  values: Array<{ title: string; description: string; icon: string; bgColor: string }>;
}

interface TimelineSectionData {
  badge: string;
  mainTitle: string;
  highlightedText: string;
  subtitle: string;
  milestones: Array<{ year: string; shortYear: string; title: string; description: string; position: string }>;
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  target: Target,
  eye: Eye,
  shield: Shield,
  award: Award,
  arrowRight: ArrowRight,
  phone: Phone,
  messageCircle: MessageCircle,
  mail: Mail,
  mapPin: MapPin,
};

const colorMap: Record<string, { color: string; bgColor: string; iconColor: string }> = {
  pink: {
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  blue: {
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  yellow: {
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  purple: {
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
};

export function AboutPageContent({ data, valuesData, timelineData }: { data: AboutPageData | null; valuesData: ValuesSectionData | null; timelineData: TimelineSectionData | null }) {
  const BadgeIcon = iconMap[data?.badge?.icon || "sparkles"] || Sparkles;
  const badgeText = data?.badge?.text || "Notre histoire";
  const founderName = data?.founderName || "Tina";
  const founderTitle = data?.founderTitle || "Fondatrice";
  const founderQuote = data?.founderQuote || "Votre satisfaction, notre priorité";
  const mainTitle = data?.mainTitle || "L'histoire de";
  const highlightedName = data?.highlightedName || "Tina";
  const paragraphs = data?.paragraphs || [];
  const missionVision = data?.missionVision || [];

  const valuesBadge = valuesData?.badge || "Ce qui nous anime";
  const valuesMainTitle = valuesData?.mainTitle || "Nos";
  const valuesHighlightedText = valuesData?.highlightedText || "valeurs";
  const valuesSubtitle = valuesData?.subtitle || "Des principes forts qui guident nos interventions";

  const values = valuesData?.values?.map((v) => ({
    ...v,
    icon: iconMap[v.icon] || Heart,
    ...colorMap[v.bgColor] || colorMap.pink,
  })) || [];

  const timelineBadge = timelineData?.badge || "Notre évolution";
  const timelineMainTitle = timelineData?.mainTitle || "Notre";
  const timelineHighlightedText = timelineData?.highlightedText || "parcours";
  const timelineSubtitle = timelineData?.subtitle || "Les étapes clés de notre développement";
  const milestones = timelineData?.milestones || [];

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
                  {data?.founderImage ? (
                    <>
                      <Image
                        src={urlFor(data.founderImage).width(800).height(1000).quality(90).auto('format').url()}
                        alt={founderName}
                        fill
                        quality={90}
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 560px, 800px"
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
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg max-w-[200px] hidden md:block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <Quote size={18} className="text-primary-300 mb-2" />
                  <p className="text-neutral-700 text-xs italic leading-relaxed">
                    &ldquo;{founderQuote}&rdquo;
                  </p>
                  <p className="text-primary-600 font-medium text-xs mt-2">— {founderName}</p>
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
                  <BadgeIcon size={14} />
                  {badgeText}
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight">
                  {mainTitle}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    {highlightedName}
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed">
                {paragraphs.map((p: any, i: number) => (
                  <p key={i} className={i === 1 ? "hidden md:block" : ""}>
                    {p.highlight ? (
                      <>
                        {p.text.split(p.highlight).map((part: string, idx: number, arr: string[]) =>
                          idx < arr.length - 1 ? (
                            <span key={idx}>
                              {part}
                              <strong className="text-neutral-900">{p.highlight}</strong>
                            </span>
                          ) : part
                        )}
                      </>
                    ) : (
                      p.text
                    )}
                  </p>
                ))}
              </div>

              {/* Mission & Vision - Grille 2 colonnes */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {missionVision.map((item: any) => {
                  const Icon = iconMap[item.icon] || Target;
                  return (
                    <div key={item.title} className="bg-neutral-50 rounded-xl p-3 md:p-4">
                      <div className="flex items-start gap-2.5 md:gap-3">
                        <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                          <Icon size={18} className="md:w-5 md:h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 text-xs md:text-sm mb-0.5">{item.title}</p>
                          <p className="text-[10px] md:text-xs text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
              {valuesBadge}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-4">
              {valuesMainTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                {valuesHighlightedText}
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
              {valuesSubtitle}
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
                        {value.description}
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
              {timelineBadge}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2 md:mb-4">
              {timelineMainTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                {timelineHighlightedText}
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              {timelineSubtitle}
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
                      {milestone.shortYear}
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
                const isLeft = milestone.position === "left";
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className={`relative pb-10 last:pb-0 ${
                      isLeft ? "pr-[50%] text-right" : "pl-[50%]"
                    }`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 ring-4 ring-white">
                        <span className="text-white text-xs font-bold">
                          {milestone.shortYear}
                        </span>
                      </div>
                    </div>

                    <div className={isLeft ? "mr-10" : "ml-10"}>
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
    </>
  );
}
