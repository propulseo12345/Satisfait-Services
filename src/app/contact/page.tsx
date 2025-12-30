"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles } from "lucide-react";
import { Container, Card, CardContent, InterventionMap } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getEmailLink, getWhatsAppLink } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    value: SITE_CONFIG.contact.phone,
    href: getPhoneLink(SITE_CONFIG.contact.phone),
    description: "Du lundi au samedi",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-500",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE_CONFIG.contact.email,
    href: getEmailLink(SITE_CONFIG.contact.email),
    description: "Réponse sous 24h",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconBg: "bg-violet-500",
    iconColor: "text-violet-600",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.postalCode}`,
    href: null,
    description: SITE_CONFIG.address.region,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconBg: "bg-rose-500",
    iconColor: "text-rose-600",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: SITE_CONFIG.hours.weekdays,
    href: null,
    description: `Sam: ${SITE_CONFIG.hours.saturday}`,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-500",
    iconColor: "text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 via-primary-50/50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
              <Send size={16} />
              Contactez-nous
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
            >
              Parlons de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                votre projet
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed"
            >
              Une question ? Un devis ? N&apos;hésitez pas à nous contacter,
              nous vous répondrons dans les plus brefs délais.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <Send size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-neutral-500">Réponse garantie sous 24h</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4"
                >
                  <Sparkles size={16} />
                  Nos coordonnées
                </motion.span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  Restons en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    contact
                  </span>
                </h2>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <Icon size={24} className={info.iconColor} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">{info.title}</p>
                      <p className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {info.value}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="group block p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg hover:border-primary-100 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* WhatsApp Card */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle
                    size={24}
                    className="text-white"
                    fill="white"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">WhatsApp</p>
                  <p className="text-sm text-white/80">
                    Discutons en direct !
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl" />
        </div>

        <Container size="xl" className="px-2 sm:px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            >
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
              Nous intervenons à Narcastet, Pau et dans un rayon de 30 km autour de Pau
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <InterventionMap />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
