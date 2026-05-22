"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CatalogueBannerCTA() {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full rounded-3xl overflow-hidden shadow-xl">
          <img src="/standee/standee_cta.png" alt="Catalogue CTA" className="w-full h-auto object-cover block" />
          <a href="https://zalo.me/0985463403" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Liên hệ Zalo">
            <span className="sr-only">Chat Zalo nhận báo giá</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}