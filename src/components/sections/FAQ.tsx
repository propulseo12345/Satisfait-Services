"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui";

const defaultFaqs = [
  {
    question: "Quelles zones couvrez-vous ?",
    answer:
      "Nous intervenons à Narcastet, Pau et environ 30 km autour : Billère, Lons, Lescar, Jurançon, Bizanos, Idron, Gan et Morlaàs. Contactez-nous pour vérifier votre secteur.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Par téléphone, formulaire en ligne ou WhatsApp. Réponse sous 24h avec un devis personnalisé et détaillé, sans engagement.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Produits professionnels de qualité, respectueux de votre intérieur. Nous adaptons nos produits selon vos préférences ou allergies.",
  },
  {
    question: "Interventions ponctuelles ou régulières ?",
    answer:
      "Les deux ! Intervention unique (ménage de printemps, déménagement...) ou régulière (hebdo, bi-mensuel, mensuel...).",
  },
  {
    question: "C'est quoi le home organising ?",
    answer:
      "Un accompagnement pour réorganiser votre espace : désencombrement, optimisation des rangements, création d'un intérieur fonctionnel.",
  },
  {
    question: "Êtes-vous assurée ?",
    answer:
      "Oui, Satisfait Services dispose d'une assurance responsabilité civile professionnelle pour toutes nos interventions.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 md:py-5 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-neutral-900 pr-3 md:pr-8 group-hover:text-primary-600 transition-colors leading-snug">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary-500 text-white"
              : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-100 group-hover:text-primary-600"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 md:pb-5 text-xs md:text-sm text-neutral-600 leading-relaxed pr-8 md:pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ({ data }: { data?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Extract data with fallbacks
  const badge = data?.badge || "FAQ";
  const mainTitle = data?.mainTitle || "Questions";
  const highlightedText = data?.highlightedText || "fréquentes";
  const subtitle = data?.subtitle || "Vous avez des questions ? Nous avons les réponses.";

  // Transform Sanity faqItems to component format
  const faqs = data?.faqItems
    ? data.faqItems.map((item: any) => ({
        question: item.question,
        answer: item.reponse, // Note: Sanity uses "reponse" instead of "answer"
      }))
    : defaultFaqs;

  const ctaCard = data?.ctaCard || {
    title: "Autre question ?",
    subtitle: "Notre équipe est là pour vous",
    buttonText: "Nous contacter",
    buttonLink: "/contact",
  };

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                <HelpCircle size={14} />
                {badge}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 md:mb-6">
                {mainTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  {highlightedText}
                </span>
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6 md:mb-8">
                {subtitle}
              </p>

              {/* CTA Card - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block p-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white">
                <p className="font-medium mb-1.5 text-sm">
                  {ctaCard.title}
                </p>
                <p className="text-primary-100 text-xs mb-3">
                  {ctaCard.subtitle}
                </p>
                <a
                  href={ctaCard.buttonLink}
                  className="inline-flex items-center gap-2 text-xs font-medium bg-white text-primary-600 px-3 py-1.5 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {ctaCard.buttonText}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-neutral-50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </motion.div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-6 p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white text-center">
              <p className="font-medium mb-1 text-sm">{ctaCard.title}</p>
              <a
                href={ctaCard.buttonLink}
                className="inline-flex items-center gap-2 text-xs font-medium bg-white text-primary-600 px-4 py-2 rounded-lg mt-2"
              >
                {ctaCard.buttonText}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { FAQ };
