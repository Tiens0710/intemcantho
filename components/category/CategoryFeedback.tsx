"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { TestimonialData } from "@/lib/category-data";

type Props = {
  testimonials: TestimonialData[];
};

export default function CategoryFeedback({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const visibleItems = Array.from(
    { length: Math.min(visibleCount, count) },
    (_, offset) => testimonials[(current + offset) % count]
  );

  const goNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % count);
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + count) % count);
  };

  useEffect(() => {
    if (count <= visibleCount) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [count, visibleCount]);

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-amber-900/50 font-light max-w-xl mx-auto">
            Đánh giá thực tế từ khách hàng đã sử dụng dịch vụ
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative max-w-5xl mx-auto">
          {/* Nav arrows */}
          {count > visibleCount && (
            <>
              <motion.button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-2xl border border-white/80 shadow-lg shadow-amber-900/5 text-amber-900/60 transition-all duration-300 hover:text-amber-900"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
              <motion.button
                type="button"
                aria-label="Next"
                onClick={goNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-2xl border border-white/80 shadow-lg shadow-amber-900/5 text-amber-900/60 transition-all duration-300 hover:text-amber-900"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
            </>
          )}

          <div
            className="grid gap-6 overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${Math.min(visibleCount, count)}, 1fr)`,
            }}
          >
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              {visibleItems.map((t) => (
                <motion.article
                  layout
                  key={t.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -28 }}
                  transition={{
                    layout: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.22 },
                    x: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="group flex flex-col bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5"
                        fill={i < t.rating ? "#92400e" : "transparent"}
                        stroke={i < t.rating ? "#92400e" : "#d6c4b0"}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="flex-1 mb-5 text-xs text-amber-900/50 font-medium leading-relaxed">
                    {t.content}
                  </p>

                  {/* Divider */}
                  <div className="mb-5 w-full h-px bg-amber-900/5" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-900/10"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xs font-black text-amber-900">{t.author}</p>
                      <p className="text-[10px] text-amber-900/40 font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          {count > visibleCount && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    background: i === current ? "#78350f" : "rgba(120,53,15,0.1)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}