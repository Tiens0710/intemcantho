"use client";

/**
 * PartnerCarousel — Hiển thị 6 logo/lần, tự cuộn mỗi 5s.
 * Dùng Framer Motion AnimatePresence cho hiệu ứng slide mượt.
 */

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PARTNERS = [
  { src: "/NHAT-TAM-e1761967849296.jpg", alt: "Nhất Tâm" },
  { src: "/MTC-e1761967872338.jpg",      alt: "MTC Aquatic" },
  { src: "/con-son-e1761967835576.jpg",   alt: "Con Sơn" },
  { src: "/DXMT.jpg",                     alt: "Đất Xanh Miền Tây" },
  { src: "/logo-yumi-1-e1761967884425.png", alt: "Yumi Foods" },
  { src: "/logo-gia-phast-noong-e1761967914774.png", alt: "Gia Phát Nông" },
  { src: "/VIET-ARGO-1.jpg",              alt: "Viet Argo" },
  { src: "/FPT.jpg",                      alt: "FPT Polytechnic" },
];

const PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(PARTNERS.length / PER_PAGE);

export default function PartnerCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setPage((p) => (p + 1) % TOTAL_PAGES);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Current visible logos
  const start = page * PER_PAGE;
  const visible = PARTNERS.slice(start, start + PER_PAGE);

  // Slide animation variants
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-sm md:px-10">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-8 md:grid-cols-6"
        >
          {visible.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center px-2"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-36 w-auto max-w-[260px] object-contain transition-transform duration-300 hover:scale-110 md:h-40"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Page dots */}
      {TOTAL_PAGES > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 bg-amber-700"
                  : "w-2 bg-amber-700/25 hover:bg-amber-700/50"
              }`}
              aria-label={`Trang ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
