"use client";

import { motion } from "framer-motion";
import { FileText, Clock, Heart, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { ADVANTAGES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Clock,
  Heart,
  CheckCircle,
};

function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Pourquoi choisir{" "}
            <span className="text-primary-600">Satisfait Services</span> ?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Des valeurs fortes et un engagement qualité pour votre entière
            satisfaction
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] || CheckCircle;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-neutral-600">{advantage.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Advantages };
