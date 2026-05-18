"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductCard, { type ProductCardProps } from "@/components/ui/ProductCard";

type Props = {
  products?: ProductCardProps[];
  title?: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  columns?: 2 | 3 | 4;
  showHeader?: boolean;
  showBackground?: boolean;
  className?: string;
};

const DEFAULT_PRODUCTS: ProductCardProps[] = [
  { id: 1, title: "Danh Thiếp In Nhanh", price: "Liên hệ", image: "/215-1.jpg", href: "#", badge: "Bán chạy", rating: 5 },
  { id: 2, title: "Đồng Phục Cổ Tròn", price: "Liên hệ", image: "/217.jpg", href: "#", badge: "Mới", rating: 4 },
  { id: 3, title: "Folder Tài Liệu", price: "12.000đ", priceNumber: 12000, image: "/110-1.jpg", href: "#" },
  { id: 4, title: "In Ấn Danh Thiếp MP", price: "Liên hệ", image: "/2.jpg", href: "#" },
];

export default function FeaturedProducts({
  products,
  title = "Sản Phẩm Liên Quan",
  subtitle = "Khám phá thêm các sản phẩm in ấn chất lượng cao phù hợp với nhu cầu của bạn",
  viewAllHref = "/",
  viewAllText = "Xem tất cả sản phẩm",
  columns = 4,
  showHeader = true,
  showBackground = true,
  className = "",
}: Props) {
  const items: ProductCardProps[] =
    products && products.length ? products : DEFAULT_PRODUCTS;

  const colClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-4";

  return (
    <section className={`relative w-full overflow-hidden py-16 ${className}`}>
      {/* Background gradient + decorative elements */}
      {showBackground && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E6792A]/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#E6792A]/3 blur-3xl" />
          </div>
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        {showHeader && (
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#E6792A]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E6792A]">
              Có thể bạn quan tâm
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#E6792A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="!font-sans text-3xl font-extrabold uppercase tracking-wide text-[#9a5b24] md:text-4xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 max-w-md text-sm leading-relaxed text-gray-500"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        )}

        {/* Product Grid */}
        <div className={`grid grid-cols-2 gap-4 sm:gap-5 ${colClass} md:gap-6`}>
          {items.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {viewAllHref && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href={viewAllHref}
              className="group/btn inline-flex items-center gap-2 rounded-full border-2 border-[#E6792A] bg-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E6792A] shadow-sm transition-all duration-300 hover:bg-[#E6792A] hover:text-white hover:shadow-[0_8px_24px_rgba(230,121,42,0.3)]"
            >
              {viewAllText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}