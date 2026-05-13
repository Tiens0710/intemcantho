"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, Search, Truck } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  bgImage: string;
  floatingImages: string[];
  categoryLabel: string;
};

export default function CategoryHero({ title, subtitle, bgImage, floatingImages, categoryLabel }: Props) {
  return (
    <section
      className="relative pt-28 pb-44 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      {/* Subtle light overlay for text readability */}
      <div className="absolute inset-0 bg-white/30 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Breadcrumb */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/60 backdrop-blur-md border border-white/80 rounded-full shadow-sm mb-10"
            >
              <span className="text-[10px] font-black text-amber-900/40 uppercase tracking-[0.3em]">Trang chủ</span>
              <ChevronRight className="w-3 h-3 text-amber-900/20" />
              <span className="text-[10px] font-black text-amber-800 uppercase tracking-[0.3em]">{categoryLabel}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif text-amber-900 mb-8 leading-none"
            >
              {title.split(' ').length > 1 ? (
                <>
                  {title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="italic font-light opacity-80">
                    {title.split(' ').slice(-1)}
                  </span>
                </>
              ) : (
                title
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-amber-900/60 font-light leading-relaxed mb-8 mx-auto max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* Feature Strip — Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-lg mx-auto bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[20px] p-3 shadow-xl shadow-amber-900/5"
            >
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: <Award className="w-3 h-3" />, title: "Chất lượng", desc: "Chuẩn màu" },
                  { icon: <Search className="w-3 h-3" />, title: "Thiết kế", desc: "Tinh tế" },
                  { icon: <Truck className="w-3 h-3" />, title: "Giao hàng", desc: "Nhanh chóng" },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center text-center px-1 ${i !== 2 ? "border-r border-amber-900/10" : ""}`}>
                    <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-amber-800 shadow-sm mb-2">
                      {item.icon}
                    </div>
                    <h4 className="text-[9px] font-black text-amber-900/80 mb-0.5 leading-none">{item.title}</h4>
                    <p className="text-[7px] text-amber-900/40 font-medium leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}