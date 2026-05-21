"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  FileText,
  Flag,
  IdCard,
  Layers,
  Package,
  Sparkles,
  Star,
  Tag,
  Zap,
} from "lucide-react";

type ServiceHighlight = {
  icon: LucideIcon;
  label: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  highlights: ServiceHighlight[];
};

const SERVICES: Service[] = [
  {
    id: "tem-nhan",
    title: "In tem nhãn",
    description: "Tem chai lọ, tem hộp, sticker, decal giấy và decal nhựa cho sản phẩm.",
    href: "/dich-vu/nhan-dan",
    cta: "Báo giá tem nhãn",
    image: "/danhmuc1.png",
    imageAlt: "In tem nhãn",
    icon: Tag,
    highlights: [
      { icon: Sparkles, label: "In số lượng ít" },
      { icon: Star, label: "Thiết kế đẹp" },
    ],
  },
  {
    id: "standee",
    title: "In standee khổ lớn",
    description: "Standee khai trương, sự kiện, quảng cáo cửa hàng và showroom.",
    href: "/dich-vu/standee",
    cta: "Xem mẫu standee",
    image: "/danhmuc2.png",
    imageAlt: "In standee khổ lớn",
    icon: Flag,
    highlights: [
      { icon: Check, label: "Màu sắc nét" },
      { icon: Zap, label: "Dựng nhanh" },
    ],
  },
  {
    id: "brochure",
    title: "In brochure / tờ gấp",
    description: "Brochure giới thiệu công ty, sản phẩm, menu và profile bán hàng.",
    href: "/danh-muc/to-gap",
    cta: "Xem mẫu brochure",
    image: "/danhmuc3.png",
    imageAlt: "In brochure",
    icon: BookOpen,
    highlights: [
      { icon: Layers, label: "Gấp 2 / gấp 3" },
      { icon: Star, label: "Thiết kế chuyên nghiệp" },
    ],
  },
  {
    id: "to-roi",
    title: "In tờ rơi",
    description: "Tờ rơi quảng cáo, khai trương, khuyến mãi, spa và bất động sản.",
    href: "/dich-vu/to-roi",
    cta: "Nhận báo giá",
    image: "/danhmuc4.png",
    imageAlt: "In tờ rơi",
    icon: FileText,
    highlights: [
      { icon: Clock, label: "In nhanh" },
      { icon: Star, label: "Giá tốt" },
    ],
  },
  {
    id: "bao-bi",
    title: "In bao bì",
    description: "Hộp giấy, túi giấy, nhãn hộp và bao bì sản phẩm cho thương hiệu.",
    href: "/dich-vu/in-bao-bi",
    cta: "Tư vấn bao bì",
    image: "/danhmuc5.png",
    imageAlt: "In bao bì",
    icon: Package,
    highlights: [
      { icon: Check, label: "Tư vấn chất liệu" },
      { icon: Layers, label: "Đồng bộ nhận diện" },
    ],
  },
  {
    id: "danh-thiep",
    title: "In danh thiếp",
    description: "Name card cá nhân, doanh nghiệp, sales, spa, nhà hàng và showroom.",
    href: "/dich-vu/danh-thiep",
    cta: "Làm name card ngay",
    image: "/danhmuc6.png",
    imageAlt: "In danh thiếp",
    icon: IdCard,
    highlights: [
      { icon: Check, label: "Cán mờ / cán bóng" },
      { icon: Sparkles, label: "Ép kim nếu cần" },
    ],
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="absolute inset-0" style={{ backgroundImage: "none" }} />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFFEFD] opacity-0" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#FFFFFF] opacity-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Title with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#9A5B24",
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              DỊCH VỤ IN ẤN CỦA <span style={{ color: "#E6792A" }}>INTEM CẦN THƠ</span>
            </h2>
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
          </div>

          {/* Animated accent bar */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "rgba(139,94,60,0.15)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "#E6792A" }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "rgba(139,94,60,0.15)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base max-w-2xl mx-auto mb-6"
            style={{ color: "#7B6758", lineHeight: 1.7 }}
          >
            Giải pháp in ấn nhanh, đẹp và đồng bộ cho shop, doanh nghiệp và thương hiệu địa phương.
          </motion.p>

          {/* "Xem tất cả" CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/van-phong"
              className="group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-[#E6792A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF4EC]"
              style={{
                border: "1.5px solid rgba(230, 121, 42, 0.28)",
                boxShadow: "0 0 0 1px rgba(230,121,42,0.18), 0 0 16px rgba(230,121,42,0.1)",
              }}
            >
              Xem tất cả dịch vụ
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-visible rounded-xl p-4"
              style={{
                background: "rgba(255, 255, 255, 0.86)",
                border: "1.5px solid rgba(230, 121, 42, 0.28)",
                boxShadow:
                  "0 0 0 1px rgba(230,121,42,0.18), 0 0 18px rgba(230,121,42,0.12), 0 18px 36px -24px rgba(176,108,51,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="absolute inset-2 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute right-2 top-8 h-32 w-32 rounded-full bg-[#FDF2EA]" />
              </div>
              <div className="relative z-10 pr-28 sm:pr-32">
                <div>
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF3EA] text-[#E6792A] shadow-[inset_0_0_0_1px_rgba(230,121,42,0.18)]">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2C1A10]">{service.title}</h3>
                  <p className="mt-2 text-sm text-[#6F5B4E]">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight.label}
                        className="inline-flex items-center gap-2 rounded-full bg-[#FFF7F1] px-2 py-0.5 text-xs font-semibold text-[#8B6A52]"
                      >
                        <highlight.icon className="h-3.5 w-3.5 text-[#E6792A]" />
                        {highlight.label}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E6792A] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_10px_20px_-14px_rgba(230,121,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D26D23]"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute -right-3 top-1/2 z-20 h-32 w-32 -translate-y-1/2 translate-x-6 sm:-right-4 sm:h-60 sm:w-60 sm:translate-x-8">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={160}
                  height={160}
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_16px_rgba(150,89,38,0.22)]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
