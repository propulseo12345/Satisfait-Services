"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles, LucideIcon } from "lucide-react";
import { Container, InterventionMap } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { getWhatsAppLink } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { phone: Phone, mail: Mail, mapPin: MapPin, clock: Clock, messageCircle: MessageCircle };

export function ContactPageContent({ data }: { data: any }) {
  const hero = data?.hero || { badge: "Contactez-nous", mainTitle: "Une question ?", highlightedText: "Nous sommes là", subtitle: "" };
  const form = data?.form || { title: "Envoyez-nous un message", subtitle: "" };
  const contactCards = data?.contactCards || [];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 via-primary-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Send size={16} />
              {hero.badge}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {hero.mainTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                {hero.highlightedText}
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              {hero.subtitle}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <Send size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{form.title}</h2>
                    <p className="text-neutral-500">{form.subtitle}</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="mb-8">
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
                  <Sparkles size={16} />
                  Nos coordonnées
                </motion.span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  Restons en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">contact</span>
                </h2>
              </div>

              {contactCards.map((card: any, index: number) => {
                const Icon = iconMap[card.icon?.toLowerCase()] || Phone;
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="group p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 font-medium">{card.label}</p>
                        <p className="font-semibold text-neutral-900">{card.value}</p>
                        {card.subtitle && <p className="text-sm text-neutral-500">{card.subtitle}</p>}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.a initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp)} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle size={24} className="text-white" fill="white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">WhatsApp</p>
                  <p className="text-sm text-white/80">Discutons en direct !</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <MapPin size={16} />
              Nous intervenons près de chez vous
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Zone d&apos;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                intervention
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Nous intervenons à Jurançon, Pau et dans un rayon de 30 km autour de Pau
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <InterventionMap />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
