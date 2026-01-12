"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Server,
  Shield,
  AlertCircle,
  Link2,
  Scale,
} from "lucide-react";
import { Container } from "@/components/ui";

const sections = [
  {
    icon: Building2,
    title: "Édition du site",
    content: (
      <>
        <p className="mb-4">Le présent site est édité par :</p>
        <div className="bg-neutral-50 rounded-xl p-5 space-y-3">
          <p>
            <strong className="text-neutral-900">Satisfait Services</strong>
            <br />
            Représentée par : Tina SAHONDRA
          </p>
          <p>
            <strong className="text-neutral-900">Adresse :</strong>
            <br />
            24 avenue Gaston Cambot
            <br />
            64110 Jurançon – France
          </p>
          <p>
            <strong className="text-neutral-900">SIRET :</strong> 878 964 477
            00029
          </p>
        </div>
        <p className="text-sm text-neutral-500 italic mt-3">
          (ci-après désignée « l&apos;Éditeur »)
        </p>
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Contact",
    content: (
      <div className="bg-neutral-50 rounded-xl p-5">
        <p>
          <strong className="text-neutral-900">Adresse :</strong> 24 avenue
          Gaston Cambot, 64110 Jurançon
        </p>
      </div>
    ),
  },
  {
    icon: Server,
    title: "Hébergement du site",
    content: (
      <>
        <p className="mb-4">Le site est hébergé par :</p>
        <div className="bg-neutral-50 rounded-xl p-5 space-y-3">
          <p>
            <strong className="text-neutral-900">Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            États-Unis
          </p>
          <p>
            <strong className="text-neutral-900">Site web :</strong>{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              vercel.com
            </a>
          </p>
          <p>
            <strong className="text-neutral-900">Contact :</strong>{" "}
            <a
              href="https://vercel.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline"
            >
              vercel.com/contact
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    content: (
      <>
        <p className="mb-4">
          L&apos;ensemble des contenus présents sur le site, notamment :
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {["Textes", "Images", "Logos", "Graphismes", "Éléments visuels", "Structure du site"].map(
            (item) => (
              <span
                key={item}
                className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg text-sm text-center"
              >
                {item}
              </span>
            )
          )}
        </div>
        <p className="mb-4">
          sont protégés par le droit de la propriété intellectuelle et sont la
          propriété exclusive de Satisfait Services, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification, diffusion ou
          exploitation, totale ou partielle, de ces éléments, sans autorisation
          écrite préalable, est strictement interdite et constitue une
          contrefaçon au sens du Code de la propriété intellectuelle.
        </p>
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: "Responsabilité",
    content: (
      <>
        <p className="mb-4">
          L&apos;Éditeur s&apos;efforce de fournir sur le site des informations
          aussi précises que possible. Toutefois, il ne saurait garantir
          l&apos;exactitude, la complétude ou l&apos;actualité des informations
          diffusées.
        </p>
        <p>
          L&apos;utilisation du site se fait sous la seule responsabilité de
          l&apos;utilisateur. L&apos;Éditeur ne pourra être tenu responsable des
          dommages directs ou indirects résultant de l&apos;utilisation du site.
        </p>
      </>
    ),
  },
  {
    icon: Link2,
    title: "Liens hypertextes",
    content: (
      <p>
        Le site peut contenir des liens vers d&apos;autres sites internet.
        L&apos;Éditeur n&apos;exerce aucun contrôle sur ces sites et décline
        toute responsabilité quant à leur contenu ou à leurs pratiques.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Droit applicable",
    content: (
      <>
        <p className="mb-4">
          Les présentes mentions légales sont régies par le droit français.
        </p>
        <p>
          En cas de litige, et à défaut de résolution amiable, les tribunaux
          compétents seront ceux du ressort territorial de l&apos;Éditeur.
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-neutral-50 to-white">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <Scale size={16} />
              Informations légales
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Mentions légales
            </h1>
            <p className="text-xl text-primary-600 font-medium">
              Satisfait Services
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="md">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-neutral-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="text-neutral-600 leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center text-sm text-neutral-500"
          >
            Dernière mise à jour : Janvier 2026
          </motion.p>
        </Container>
      </section>
    </>
  );
}
