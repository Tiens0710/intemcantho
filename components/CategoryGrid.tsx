"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tag,
  FileText,
  Flag,
  Layers,
  ClipboardList,
  BookOpen,
  IdCard,
  Mail,
  Shirt,
  Camera,
  Gift,
  Hash,
  Shield,
  Newspaper,
  LayoutGrid,
  MoreHorizontal,
  MessageCircle,
} from "lucide-react";

/* ─── Types ─── */
type Service = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  badge: "Bán chạy" | "Phổ biến";
  category: string;
};

type CategoryTab = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

/* ─── Categories ─── */
const CATEGORIES: CategoryTab[] = [
  { id: "all", label: "Tất cả", icon: LayoutGrid },
  { id: "tem-nhan", label: "Tem nhãn", icon: Tag },
  { id: "quang-cao", label: "Quảng cáo", icon: Flag },
  { id: "doanh-nghiep", label: "Doanh nghiệp", icon: ClipboardList },
  { id: "anh-qua-tang", label: "Ảnh & quà tặng", icon: Camera },
];

/* ─── Services Data ─── */
const SERVICES: Service[] = [
  {
    id: "tem-nhan",
    title: "In tem nhãn",
    href: "/dich-vu/nhan-dan",
    image: "/danhmuc1.png",
    imageAlt: "In tem nhãn",
    badge: "Bán chạy",
    category: "tem-nhan",
  },
  {
    id: "decal-giay",
    title: "Decal giấy",
    href: "/san-pham/decal-giay",
    image: "/danhmuc2.png",
    imageAlt: "Decal giấy",
    badge: "Phổ biến",
    category: "tem-nhan",
  },
  {
    id: "decal-nhua",
    title: "Decal nhựa / trong",
    href: "/san-pham/decal-nhua-trong",
    image: "/danhmuc3.png",
    imageAlt: "Decal nhựa",
    badge: "Bán chạy",
    category: "tem-nhan",
  },
  {
    id: "tem-be-bao-hanh",
    title: "Tem bế bảo hành",
    href: "/san-pham/tem-be-bao-hanh",
    image: "/danhmuc4.png",
    imageAlt: "Tem bể bảo hành",
    badge: "Phổ biến",
    category: "tem-nhan",
  },
  {
    id: "to-roi",
    title: "In tờ rơi",
    href: "/dich-vu/to-roi",
    image: "/toroi/sanpham1.png",
    imageAlt: "In tờ rơi",
    badge: "Bán chạy",
    category: "quang-cao",
  },
  {
    id: "hiflex",
    title: "Bạt hiflex",
    href: "/tiep-thi/hiflex",
    image: "/anphamtiepthi/hiflex/sanpham1.png",
    imageAlt: "Bạt hiflex",
    badge: "Phổ biến",
    category: "quang-cao",
  },
  {
    id: "menu",
    title: "In menu",
    href: "/tiep-thi/menu",
    image: "/anphamtiepthi/menu/sanpham1.webp",
    imageAlt: "In menu",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
  {
    id: "catalogue",
    title: "In catalogue",
    href: "/tiep-thi/catalogue",
    image: "/anphamtiepthi/catalogue/sanpham1.png",
    imageAlt: "In catalogue",
    badge: "Bán chạy",
    category: "doanh-nghiep",
  },
  {
    id: "danh-thiep",
    title: "Danh thiếp",
    href: "/dich-vu/danh-thiep",
    image: "/danhmuc6.png",
    imageAlt: "In danh thiếp",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
  {
    id: "bao-thu-folder",
    title: "Bao thư & Folder",
    href: "/van-phong/bao-thu",
    image: "/anphamvanphong/baothu/sanpham4.png",
    imageAlt: "Bao thư & bìa hồ sơ",
    badge: "Bán chạy",
    category: "doanh-nghiep",
  },
  {
    id: "ao-thun",
    title: "Áo thun đồng phục",
    href: "/tiep-thi/ao-thun-dong-phuc",
    image: "/anphamvanphong/aothun/aothun.webp",
    imageAlt: "Áo thun đồng phục",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
  {
    id: "photobook",
    title: "Photobook",
    href: "/in-anh/photobook",
    image: "/inanh/photobook/sanpham1.png",
    imageAlt: "Photobook",
    badge: "Phổ biến",
    category: "anh-qua-tang",
  },
  {
    id: "standee",
    title: "In standee khổ lớn",
    href: "/dich-vu/standee",
    image: "/danhmuc5.png",
    imageAlt: "In standee khổ lớn",
    badge: "Bán chạy",
    category: "quang-cao",
  },
  {
    id: "voucher",
    title: "In voucher",
    href: "/tiep-thi/voucher",
    image: "/anphamtiepthi/voucher/sanpham1.webp",
    imageAlt: "In voucher",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
  {
    id: "hashtag",
    title: "In hashtag cầm tay",
    href: "/tiep-thi/hashtag-cam-tay",
    image: "/anphamtiepthi/hashtag/sanpham1.png",
    imageAlt: "Hashtag cầm tay",
    badge: "Bán chạy",
    category: "quang-cao",
  },
  {
    id: "ho-so-nang-luc",
    title: "Hồ sơ năng lực",
    href: "/tiep-thi/ho-so-nang-luc",
    image: "/anphamvanphong/hosonangluc/sanpham5.png",
    imageAlt: "Hồ sơ năng lực",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
  {
    id: "anh-ep-nhua",
    title: "Ảnh ép nhựa",
    href: "/in-anh/anh-ep-nhua",
    image: "/inanh/epnhua/sanpham1.webp",
    imageAlt: "Ảnh ép nhựa",
    badge: "Bán chạy",
    category: "anh-qua-tang",
  },
  {
    id: "anh-ep-go",
    title: "Ảnh ép gỗ",
    href: "/in-anh/anh-ep-go",
    image: "/inanh/anh_ep_go-sp1.png",
    imageAlt: "Ảnh ép gỗ",
    badge: "Phổ biến",
    category: "anh-qua-tang",
  },
  {
    id: "anh-cuoi",
    title: "Ảnh cưới",
    href: "/in-anh/anh-cuoi",
    image: "/inanh/anhcuoi/sanpham1.png",
    imageAlt: "Ảnh cưới",
    badge: "Bán chạy",
    category: "anh-qua-tang",
  },
  {
    id: "bang-khen",
    title: "In bảng khen",
    href: "/tiep-thi/bang-khen",
    image: "/anphamvanphong/bangkhen/sanpham4.png",
    imageAlt: "Bảng khen",
    badge: "Phổ biến",
    category: "doanh-nghiep",
  },
];

/* ─── Single Card ─── */
function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white cursor-pointer aspect-[4/5] w-full"
      style={{
        border: "1px solid #E6792A",
        boxShadow: "0 4px 14px rgba(230, 121, 42, 0.08)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(230, 121, 42, 0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(230, 121, 42, 0.08)";
      }}
    >
      <Link href={service.href} aria-label={service.title} className="absolute inset-0 z-30 rounded-2xl">
        <span className="sr-only">{service.title}</span>
      </Link>

      {/* 1. Background Frame Image */}
      <Image
        src="/frame danh muc 4.5.jpg"
        alt="Frame Background"
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        priority
        className="object-fill rounded-2xl pointer-events-none z-10"
      />

      {/* 2. Product Image Layer (Top 78%) - Larger size and less padding */}
      <div className="absolute top-0 left-0 right-0 h-[78%] flex items-center justify-center p-2.5 sm:p-3.5 z-20">
        <div className="relative w-[92%] h-[92%] flex items-center justify-center">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 15vw"
            className="object-contain drop-shadow-[0_6px_12px_rgba(150,89,38,0.12)] transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* 3. Text Title Layer (Bottom 22%) - Adjusted text size and alignment */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] flex items-center justify-center px-2 sm:px-3 pb-1 sm:pb-1.5 z-20 text-center">
        <span 
          className="text-[10px] sm:text-[11px] md:text-[12px] font-bold uppercase tracking-normal line-clamp-2 leading-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#ffffff" }}
        >
          {service.title}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const paginatedServices = useMemo(() => {
    const startIndex = (currentPage - 1) * 12;
    return filteredServices.slice(startIndex, startIndex + 12);
  }, [filteredServices, currentPage]);

  const totalPages = Math.ceil(filteredServices.length / 12);

  return (
    <section id="categories" className="relative overflow-hidden bg-white py-12 md:py-16">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#FFF8F3] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFF8F3] rounded-full translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
            <h2
              className="home-section-title whitespace-normal md:whitespace-nowrap uppercase mb-0"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#9A5B24",
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                letterSpacing: "0",
              }}
            >
              DANH MỤC <span style={{ color: "#E6792A" }}>NỔI BẬT</span>
            </h2>
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
          </div>
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
          <p className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto">
            Dịch vụ in ấn chất lượng cao của INTEM Cần Thơ
          </p>
        </motion.div>

        {/* ─── Filter Tabs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-8 flex-wrap"
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;

            // On mobile, hide categories beyond the first 2 unless expanded
            const hiddenOnMobile = idx >= 2 && !showAllCategories;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentPage(1);
                }}
                className={`
                  inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold 
                  transition-all duration-300 cursor-pointer whitespace-nowrap
                  ${hiddenOnMobile ? "hidden sm:inline-flex" : ""}
                  ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-gray-600 bg-white hover:bg-[#FFF8F3] hover:text-[#E6792A]"
                  }
                `}
                style={{
                  ...(isActive
                    ? {
                        background: "linear-gradient(135deg, #E6792A 0%, #D26D23 100%)",
                        boxShadow: "0 4px 14px rgba(230, 121, 42, 0.35)",
                      }
                    : {
                        border: "1.5px solid #e5e7eb",
                      }),
                }}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}

          {/* "More" button on mobile */}
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-500 cursor-pointer hover:bg-[#FFF8F3] hover:text-[#E6792A] transition-all duration-300"
            aria-label="Xem thêm danh mục"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </motion.div>

        {/* ─── Service Grid ─── */}
        <div className="relative overflow-hidden min-h-[380px] sm:min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 w-full"
            >
              {paginatedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Pagination Control ─── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-30 cursor-not-allowed text-gray-400 bg-gray-50 border border-gray-200"
                  : "cursor-pointer text-gray-700 bg-white border border-gray-200 hover:bg-[#FFF8F3] hover:text-[#E6792A] hover:border-[#E6792A] shadow-sm hover:shadow"
              }`}
              aria-label="Trang trước"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === page
                      ? "w-7 bg-[#E6792A]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Đi tới trang ${page}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed text-gray-400 bg-gray-50 border border-gray-200"
                  : "cursor-pointer text-gray-700 bg-white border border-gray-200 hover:bg-[#FFF8F3] hover:text-[#E6792A] hover:border-[#E6792A] shadow-sm hover:shadow"
              }`}
              aria-label="Trang sau"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* ─── Bottom CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-2xl overflow-hidden relative w-full aspect-[340/130] md:aspect-[1200/190]"
        >
          {/* Background banner image */}
          <Image
            src="/cta_chitietsanpham.png"
            alt="CTA Banner"
            fill
            className="object-fill pointer-events-none"
          />

          <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 lg:px-14 py-4 md:py-0">
            {/* Placeholder to push buttons to the right on desktop and below on mobile */}
            <div className="flex-grow md:max-w-[40%] lg:max-w-[42%] h-8 md:h-0" />

            {/* Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0 z-20 md:pr-4 lg:pr-8">
              <Link
                href="https://zalo.me/0932757270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 md:gap-2 rounded-full px-3.5 py-2 md:px-7 md:py-3.5 text-xs md:text-base font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #E6792A 0%, #D26D23 100%)",
                  boxShadow: "0 4px 14px rgba(230, 121, 42, 0.3)",
                  color: "#ffffff",
                }}
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" style={{ stroke: "#ffffff" }} />
                Nhắn Zalo ngay
              </Link>
              <Link
                href="/bang-gia"
                className="inline-flex items-center gap-1.5 md:gap-2 rounded-full px-3.5 py-2 md:px-7 md:py-3.5 text-xs md:text-base font-bold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                style={{
                  border: "1.5px solid #E6792A",
                  backgroundColor: "#ffffff",
                  color: "#E6792A",
                }}
              >
                Xem bảng giá
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}