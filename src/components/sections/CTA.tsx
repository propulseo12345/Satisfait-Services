"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";

function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cta-grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
          </svg>
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-100 rounded-full text-sm font-medium mb-6"
          >
            Prêt à commencer ?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Prêt à profiter d&apos;un intérieur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-white">
              impeccable
            </span>{" "}
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-100 mb-10 leading-relaxed"
          >
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
            Nous intervenons à Narcastet, Pau et dans tout le département des
            Pyrénées-Atlantiques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <Link href="/contact">
              <Button
                variant="white"
                size="lg"
                className="w-full sm:w-auto group shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Demander un devis gratuit
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href={getPhoneLink(SITE_CONFIG.contact.phone)}>
              <Button
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto group hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone size={20} className="mr-2 transition-transform group-hover:scale-110" />
                {SITE_CONFIG.contact.phone}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-primary-500/30"
          >
            <a
              href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary-100 hover:text-white transition-all duration-300"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <MessageCircle size={20} />
              </div>
              <span className="font-medium">Ou contactez-nous sur WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { CTA };
