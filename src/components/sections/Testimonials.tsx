"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container, Card, CardContent } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ce que disent <span className="text-primary-600">nos clients</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full relative">
                <CardContent>
                  <Quote
                    size={40}
                    className="absolute top-4 right-4 text-primary-100"
                  />

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-neutral-700 mb-6 relative z-10 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </p>
                      {testimonial.location && (
                        <p className="text-sm text-neutral-500">
                          {testimonial.location}
                        </p>
                      )}
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
