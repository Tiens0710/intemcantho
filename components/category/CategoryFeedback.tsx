"use client";

/**
 * CategoryFeedback — Infinite marquee of testimonial cards,
 * inspired by PartnerCarousel with framer-motion smooth scroll.
 */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { TestimonialData } from "@/lib/category-data";

type Props = {
  testimonials: TestimonialData[];
};

export default function CategoryFeedback({ testimonials }: Props) {
  // Double the array for seamless infinite loop (same as PartnerCarousel)
  const DOUBLED = [...testimonials, ...testimonials];

  return (
    <section className="py-20 relative z-10 overflow-hidden">
      {/* ── Decorative ambient glows ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[80%] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(196,168,130,0.25) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-900/5 mb-5"
          >
            <Quote className="w-6 h-6 text-amber-800" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-amber-900/50 font-light max-w-xl mx-auto">
            Đánh giá thực tế từ khách hàng đã sử dụng dịch vụ
          </p>
        </motion.div>
      </div>

      {/* ── Edge fades (same as PartnerCarousel) ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32"
        style={{ background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.6) 40%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32"
        style={{ background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.6) 40%, transparent 100%)" }}
      />

      {/* ── Scrolling strip (exact same pattern as PartnerCarousel) ── */}
      <motion.div
        className="flex gap-6 md:gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
      >
        {DOUBLED.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────── Testimonial Card ─────────── */

function TestimonialCard({ testimonial: t }: { testimonial: TestimonialData }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex-shrink-0"
    >
      {/* ── Card with gradient border effect ── */}
      <div
        className="relative flex h-48 w-72 flex-col overflow-hidden rounded-2xl p-6 md:h-56 md:w-80"
        style={{
          background: "#ffffff",
          boxShadow: "0 4px 20px rgba(92,61,30,0.06), 0 1px 4px rgba(92,61,30,0.04)",
        }}
      >
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-2xl p-[1.5px]"
          style={{
            background: "linear-gradient(135deg, rgba(196,168,130,0.4) 0%, rgba(232,224,214,0.6) 50%, rgba(196,168,130,0.3) 100%)",
          }}
        >
          <div className="h-full w-full rounded-[14px] bg-white" />
        </div>

        {/* Shine sweep on hover */}
        <div
          className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />

        {/* Subtle warm glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse at center, rgba(196,168,130,0.08) 0%, transparent 70%)",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Stars */}
          <div className="mb-3 flex gap-0.5">
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

          {/* Quote icon */}
          <Quote
            className="w-7 h-7 text-amber-800/10 mb-3 group-hover:text-amber-800/20 transition-colors duration-500"
            strokeWidth={1}
          />

          {/* Content text */}
          <p className="flex-1 mb-5 text-xs text-amber-900/50 font-medium leading-relaxed">
            {t.content}
          </p>

          {/* Divider */}
          <div className="mb-4 w-full h-px" style={{ background: "linear-gradient(90deg, rgba(196,168,130,0.05), rgba(196,168,130,0.15), rgba(196,168,130,0.05))" }} />

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-10 h-10 rounded-full object-cover border-2 border-amber-900/10 group-hover:border-amber-800/30 transition-colors duration-300"
                loading="lazy"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-xs font-black text-amber-900">{t.author}</p>
              <p className="text-[10px] text-amber-900/40 font-medium">{t.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
