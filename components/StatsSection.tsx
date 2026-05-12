"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 1000, suffix: "+", label: "Khách hàng tin tưởng" },
  { value: 500,  suffix: "+", label: "Mẫu in đẹp & chuẩn màu" },
  { value: 15,   suffix: "+", label: "Năm kinh nghiệm in ấn" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let t0: number | null = null;
    const run = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / 2000, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-16"
    >
      {/* Top rule */}
      <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-3 py-2 text-center ${
              i < STATS.length - 1 ? "md:border-r md:border-amber-900/10" : ""
            }`}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="font-['Cormorant_Garamond',serif] font-light leading-none text-amber-900"
              style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-400"
            >
              {stat.label}
            </motion.p>
          </div>
        ))}
      </div>

    </motion.div>
  );
}
