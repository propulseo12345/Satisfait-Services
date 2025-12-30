"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink } from "@/lib/utils";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-200/40 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              Services à la personne à Narcastet & Pau
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Votre satisfaction,{" "}
              <span className="text-primary-600">notre priorité</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              Satisfait Services vous accompagne dans l&apos;entretien
              <br />
              de votre intérieur avec des prestations de qualité : ménage, repassage,
              nettoyage spécialisé et home organising.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Demander un devis gratuit
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <a href={getPhoneLink(SITE_CONFIG.contact.phone)}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone size={20} className="mr-2" />
                  Être rappelé
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-neutral-500">Satisfaction client</p>
              </div>
              <div className="w-px h-12 bg-neutral-200" />
              <div>
                <p className="text-3xl font-bold text-primary-600">64</p>
                <p className="text-sm text-neutral-500">Pyrénées-Atlantiques</p>
              </div>
              <div className="w-px h-12 bg-neutral-200" />
              <div>
                <p className="text-3xl font-bold text-primary-600">5</p>
                <p className="text-sm text-neutral-500">Services proposés</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl transform -rotate-3 overflow-hidden">
                <Image
                  src="/images/hero-home-interior.jpg"
                  alt="Intérieur moderne et propre"
                  fill
                  className="object-cover opacity-90"
                  priority
                  sizes="(max-width: 1024px) 0vw, 512px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-700/40 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <div className="text-center text-white px-8">
                    <p className="text-2xl font-semibold mb-2">Un intérieur impeccable</p>
                    <p className="text-primary-100">en toute sérénité</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
