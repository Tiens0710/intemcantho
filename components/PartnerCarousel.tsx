"use client";

/**
 * PartnerCarousel — Premium infinite marquee with refined glassmorphism cards,
 * gradient borders, subtle shine effects, and elegant hover animations.
 */

import { motion } from "framer-motion";

const PARTNERS = [
  { src: "/NHAT-TAM-e1761967849296.jpg", alt: "Nhất Tâm" },
  { src: "/MTC-e1761967872338.jpg", alt: "MTC Aquatic" },
  { src: "/con-son-e1761967835576.jpg", alt: "Con Sơn" },
  { src: "/DXMT.jpg", alt: "Đất Xanh Miền Tây" },
  { src: "/logo-yumi-1-e1761967884425.png", alt: "Yumi Foods" },
  { src: "/logo-gia-phast-noong-e1761967914774.png", alt: "Gia Phát Nông" },
  { src: "/VIET-ARGO-1.jpg", alt: "Viet Argo" },
  { src: "/FPT.jpg", alt: "FPT Polytechnic" },
];

// Double the array for seamless infinite loop
const DOUBLED = [...PARTNERS, ...PARTNERS];

export default function PartnerCarousel() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* ── Decorative ambient glows ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[80%] rounded-full opacity-30 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(196,168,130,0.2) 0%, transparent 70%)" }}
      />

      {/* ── Edge fades ── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32" style={{ background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.6) 40%, transparent 100%)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32" style={{ background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.6) 40%, transparent 100%)" }} />

      {/* ── Scrolling strip ── */}
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
        {DOUBLED.map((partner, i) => (
          <motion.div
            key={`${partner.alt}-${i}`}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex-shrink-0"
          >
            {/* ── Card with gradient border effect ── */}
            <div
              className="relative flex h-40 w-56 items-center justify-center overflow-hidden rounded-2xl md:h-48 md:w-64"
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

              {/* ── Logo ── */}
              <img
                src={partner.src}
                alt={partner.alt}
                className="relative z-10 h-24 w-auto max-w-[200px] object-contain transition-all duration-500 group-hover:scale-105 md:h-28 md:max-w-[220px]"
                loading="lazy"
              />

              {/* ── Brand name label ── */}
              <div
                className="absolute bottom-2.5 left-0 right-0 z-10 text-center opacity-0 transition-all duration-500 group-hover:opacity-100"
              >
                <span
                  className="inline-block rounded-full px-3 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em]"
                  style={{
                    color: "#8B5E3C",
                    background: "rgba(245,240,232,0.9)",
                    border: "1px solid rgba(196,168,130,0.2)",
                  }}
                >
                  {partner.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}