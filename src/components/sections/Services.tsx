"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  ShoppingBag,
  SprayCan,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { Container, SectionTitle, Card, CardContent, Button } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Shirt,
  ShoppingBag,
  SprayCan,
  LayoutGrid,
};

function Services() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Nos services"
            subtitle="Des prestations adaptées à vos besoins pour un intérieur impeccable et organisé"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  className="h-full group hover:border-primary-200 border border-transparent transition-all duration-300"
                >
                  <CardContent>
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon
                        size={28}
                        className="text-primary-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-neutral-600 mb-5 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <Link
                      href="/prestations"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group/link"
                    >
                      En savoir plus
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/prestations">
            <Button size="lg">
              Découvrir toutes nos prestations
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export { Services };
