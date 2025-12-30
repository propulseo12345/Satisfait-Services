"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

const testimonials = [
  {
    id: 1,
    name: "Claude B.",
    role: "Particulier",
    rating: 5,
    text: "Tina est une excellente personne, très sérieuse et autonome. Elle voit le travail toute seule. Je recommande fortement !",
    avatar: "C",
  },
  {
    id: 2,
    name: "Martin M.",
    role: "Particulier",
    rating: 5,
    text: "Prestation au top. Je recommande les yeux fermés.",
    avatar: "M",
  },
  {
    id: 3,
    name: "Rivosa R.",
    role: "Déménagement",
    rating: 5,
    text: "Réactivité, ponctualité, qualité du travail, professionnalisme et prix correct. Je recommande vivement !",
    avatar: "R",
  },
];

function TestimonialsPremium() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <Quote className="absolute top-10 left-[10%] text-white/5 w-20 h-20 md:w-32 md:h-32 rotate-12" />
        <Quote className="absolute bottom-10 right-[10%] text-white/5 w-16 h-16 md:w-24 md:h-24 -rotate-12" />
      </div>

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Star size={14} className="text-yellow-400" />
            Témoignages
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-sm md:text-base text-primary-100 max-w-lg mx-auto">
            Leur satisfaction est notre priorité
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-xl min-h-[200px] md:min-h-[260px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl font-bold shadow-lg">
                        {testimonials[currentIndex].avatar}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center md:text-left">
                      {/* Stars */}
                      <div className="flex gap-0.5 justify-center md:justify-start mb-3">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      {/* Quote */}
                      <p className="text-sm md:text-base lg:text-lg text-neutral-700 leading-relaxed mb-4 italic">
                        &ldquo;{testimonials[currentIndex].text}&rdquo;
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-bold text-neutral-900 text-sm md:text-base">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-xs md:text-sm text-neutral-500">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Left Arrow */}
              <button
                onClick={() => paginate(-1)}
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={18} className="text-white" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/30 hover:bg-white/50 w-2"
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => paginate(1)}
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { TestimonialsPremium };
