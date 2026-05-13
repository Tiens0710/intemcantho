"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ChevronRight, Star } from "lucide-react";
import type { PricingPackage } from "@/lib/category-data";

type Props = {
  title: string;
  subtitle: string;
  packages: PricingPackage[];
};

export default function CategoryPricing({ title, subtitle, packages }: Props) {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            {title}
          </h2>
          <p className="text-amber-900/50 font-light max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2"
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full px-4 py-1 text-[9px] font-black text-white uppercase tracking-[0.2em] shadow-lg bg-gradient-to-r from-amber-800 to-amber-900">
                    <Star className="h-2.5 w-2.5" fill="currentColor" />
                    Phổ biến
                  </span>
                </div>
              )}

              {/* Package name */}
              <h3 className="text-base font-black text-amber-900 mb-2 text-center">
                {pkg.name}
              </h3>

              {/* Quantity */}
              <p className="text-center text-[10px] font-bold text-amber-900/40 uppercase tracking-[0.15em] mb-6">
                {pkg.quantity}
              </p>

              {/* Divider */}
              <div className="w-full h-px mb-6 bg-amber-900/5" />

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-3xl font-black text-amber-900">
                  {pkg.price}
                </span>
              </div>

              {/* Note */}
              {pkg.note && (
                <div className="flex items-start gap-2 mb-8">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-amber-800" strokeWidth={2.5} />
                  <span className="text-xs text-amber-900/50 font-medium">{pkg.note}</span>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/lien-he"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-[0_8px_16px_-4px_rgba(120,53,15,0.4)]"
              >
                Đặt In Ngay
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}