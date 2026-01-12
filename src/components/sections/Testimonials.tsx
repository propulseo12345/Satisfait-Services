"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { Container, Card, CardContent } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

function Testimonials({ data }: { data?: any }) {
  const badge = data?.badge || "Témoignages";
  const mainTitle = data?.mainTitle || "Ce que disent nos clients";
  const subtitle = data?.subtitle || "La satisfaction de nos clients est notre plus belle récompense";
  const testimonials = data?.testimonials || TESTIMONIALS.map(t => ({ quote: t.text, name: t.name, role: t.location, rating: t.rating, avatar: t.name.charAt(0) }));

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <Container>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            {badge}
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{mainTitle}</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full relative">
                <CardContent>
                  <Quote size={40} className="absolute top-4 right-4 text-primary-100" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 relative z-10 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                      {testimonial.role && <p className="text-sm text-neutral-500">{testimonial.role}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Testimonials };
