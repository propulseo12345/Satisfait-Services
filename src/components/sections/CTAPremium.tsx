"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";

function CTAPremium() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary-600/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-6 md:p-10 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="text-center lg:text-left">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary-500/20 text-primary-300 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
                  >
                    Prêt à commencer ?
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight"
                  >
                    Offrez-vous un intérieur{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                      impeccable
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-sm md:text-base text-neutral-400 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
                  >
                    Devis gratuit et personnalisé. Intervention à Narcastet, Pau et
                    dans les Pyrénées-Atlantiques.
                  </motion.p>

                  {/* CTA buttons - visible only on desktop here */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="hidden lg:flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                  >
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/30 text-sm md:text-base"
                      >
                        Demander un devis
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                    <a href={getPhoneLink(SITE_CONFIG.contact.phone)}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-neutral-600 text-white hover:bg-neutral-700 text-sm md:text-base"
                      >
                        <Phone size={16} className="mr-2" />
                        Nous appeler
                      </Button>
                    </a>
                  </motion.div>
                </div>

                {/* Contact Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-3"
                >
                  {/* Phone Card */}
                  <a
                    href={getPhoneLink(SITE_CONFIG.contact.phone)}
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-11 md:h-11 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <Phone size={18} className="md:w-5 md:h-5 text-primary-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-neutral-400">Téléphone</p>
                        <p className="text-sm md:text-base font-semibold text-white truncate">
                          {SITE_CONFIG.contact.phone}
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-11 md:h-11 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <MessageCircle
                          size={18}
                          className="md:w-5 md:h-5 text-green-400"
                          fill="currentColor"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-neutral-400">WhatsApp</p>
                        <p className="text-sm md:text-base font-semibold text-white">
                          Discutons en direct
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Email + Location - 2 colonnes */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4 hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                        <Mail size={14} className="md:w-4 md:h-4 text-blue-400" />
                      </div>
                      <p className="text-[10px] text-neutral-400">Email</p>
                      <p className="text-[10px] md:text-xs font-semibold text-white truncate">
                        {SITE_CONFIG.contact.email}
                      </p>
                    </a>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                        <MapPin size={14} className="md:w-4 md:h-4 text-purple-400" />
                      </div>
                      <p className="text-[10px] text-neutral-400">Zone d&apos;intervention</p>
                      <p className="text-[10px] md:text-xs font-semibold text-white">
                        Pau & environs (30km)
                      </p>
                    </div>
                  </div>

                  {/* CTA buttons - visible only on mobile after contact cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="lg:hidden flex flex-col sm:flex-row gap-3 pt-4"
                  >
                    <Link href="/contact" className="flex-1">
                      <Button
                        size="lg"
                        className="w-full bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/30 text-sm"
                      >
                        Demander un devis
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                    <a href={getPhoneLink(SITE_CONFIG.contact.phone)} className="flex-1">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-neutral-600 text-white hover:bg-neutral-700 text-sm"
                      >
                        <Phone size={16} className="mr-2" />
                        Nous appeler
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { CTAPremium };
