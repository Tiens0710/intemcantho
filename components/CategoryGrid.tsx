"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  CreditCard,
  FileText,
  Flag,
  Gift,
  Hash,
  Heart,
  IdCard,
  Layers,
  Mail,
  Newspaper,
  Shirt,
  Shield,
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
    id: "decal-giay",
    title: "Decal giấy",
    description: "Decal giấy dán nhãn sản phẩm, tem chai lọ, tem hộp đa dạng kích thước.",
    href: "/san-pham/decal-giay",
    cta: "Xem mẫu decal giấy",
    image: "/danhmuc2.png",
    imageAlt: "Decal giấy",
    icon: Tag,
    highlights: [
      { icon: Check, label: "Keo bền" },
      { icon: Zap, label: "In nhanh 24h" },
    ],
  },
  {
    id: "decal-nhua",
    title: "Decal nhựa / trong",
    description: "Decal nhựa chống nước, decal trong suốt cho chai lọ, sản phẩm.",
    href: "/san-pham/decal-nhua-trong",
    cta: "Xem decal nhựa",
    image: "/danhmuc3.png",
    imageAlt: "Decal nhựa",
    icon: Tag,
    highlights: [
      { icon: Check, label: "Chống nước" },
      { icon: Star, label: "Trong suốt" },
    ],
  },
  {
    id: "tem-be-bao-hanh",
    title: "Tem bể bảo hành",
    description: "Tem bể bảo hành điện thoại, laptop, thiết bị điện tử.",
    href: "/san-pham/tem-be-bao-hanh",
    cta: "Đặt tem bảo hành",
    image: "/danhmuc4.png",
    imageAlt: "Tem bể bảo hành",
    icon: Tag,
    highlights: [
      { icon: Shield, label: "Bảo hành" },
      { icon: Zap, label: "Giao nhanh" },
    ],
  },
  {
    id: "standee",
    title: "In standee khổ lớn",
    description: "Standee khai trương, sự kiện, quảng cáo cửa hàng và showroom.",
    href: "/dich-vu/standee",
    cta: "Xem mẫu standee",
    image: "/danhmuc5.png",
    imageAlt: "In standee khổ lớn",
    icon: Flag,
    highlights: [
      { icon: Check, label: "Màu sắc nét" },
      { icon: Zap, label: "Dựng nhanh" },
    ],
  },
  {
    id: "to-roi",
    title: "In tờ rơi",
    description: "Tờ rơi quảng cáo, khai trương, khuyến mãi, spa và bất động sản.",
    href: "/dich-vu/to-roi",
    cta: "Nhận báo giá",
    image: "/toroi/sanpham1.png",
    imageAlt: "In tờ rơi",
    icon: FileText,
    highlights: [
      { icon: Clock, label: "In nhanh" },
      { icon: Star, label: "Giá tốt" },
    ],
  },
  {
    id: "hiflex",
    title: "Bạt hiflex",
    description: "Bảng hiệu hiflex, banner, backdrop sự kiện khổ lớn ngoài trời.",
    href: "/tiep-thi/hiflex",
    cta: "Xem mẫu hiflex",
    image: "/anphamtiepthi/hiflex/sanpham1.png",
    imageAlt: "Bạt hiflex",
    icon: Layers,
    highlights: [
      { icon: Check, label: "Chống nắng" },
      { icon: Zap, label: "Khổ lớn" },
    ],
  },
  {
    id: "menu",
    title: "In menu",
    description: "Menu nhà hàng, quán café, spa, tiệc cưới đa dạng chất liệu.",
    href: "/tiep-thi/menu",
    cta: "Xem mẫu menu",
    image: "/anphamtiepthi/menu/sanpham1.webp",
    imageAlt: "In menu",
    icon: ClipboardList,
    highlights: [
      { icon: Star, label: "Cao cấp" },
      { icon: Layers, label: "Nhiều chất liệu" },
    ],
  },
  {
    id: "catalogue",
    title: "In catalogue",
    description: "Catalogue giới thiệu sản phẩm, thương hiệu, brochure bán hàng.",
    href: "/tiep-thi/catalogue",
    cta: "Xem mẫu catalogue",
    image: "/anphamtiepthi/catalogue/sanpham1.png",
    imageAlt: "In catalogue",
    icon: BookOpen,
    highlights: [
      { icon: Layers, label: "Gấp 2 / gấp 3" },
      { icon: Star, label: "Thiết kế chuyên nghiệp" },
    ],
  },
  {
    id: "voucher",
    title: "In voucher / thẻ tích điểm",
    description: "Voucher khuyến mãi, thẻ thành viên, thẻ tích điểm cho spa, shop.",
    href: "/tiep-thi/voucher",
    cta: "Xem mẫu voucher",
    image: "/anphamtiepthi/voucher/sanpham1.webp",
    imageAlt: "In voucher",
    icon: Gift,
    highlights: [
      { icon: CreditCard, label: "Thẻ cứng" },
      { icon: Sparkles, label: "Ép kim" },
    ],
  },
  {
    id: "hashtag",
    title: "In hashtag cầm tay",
    description: "Hashtag cầm tay sự kiện, khai trương, khai giảng, team building.",
    href: "/tiep-thi/hashtag-cam-tay",
    cta: "Đặt hashtag",
    image: "/anphamtiepthi/hashtag/sanpham1.png",
    imageAlt: "Hashtag cầm tay",
    icon: Hash,
    highlights: [
      { icon: Check, label: "Đa màu" },
      { icon: Zap, label: "In nhanh" },
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
  {
    id: "bao-thu-folder",
    title: "Bao thư & Bìa hồ sơ",
    description: "Bao thư logo, folder, bìa kẹp hồ sơ presentation cho doanh nghiệp.",
    href: "/van-phong/bao-thu",
    cta: "Xem mẫu bao thư",
    image: "/anphamvanphong/baothu/sanpham4.png",
    imageAlt: "Bao thư & bìa hồ sơ",
    icon: Mail,
    highlights: [
      { icon: Star, label: "Logo thương hiệu" },
      { icon: Check, label: "Chất liệu tốt" },
    ],
  },
  {
    id: "ho-so-nang-luc",
    title: "Hồ sơ năng lực",
    description: "Hồ sơ năng lực công ty, giới thiệu năng lực thi công, tư vấn.",
    href: "/tiep-thi/ho-so-nang-luc",
    cta: "Xem mẫu hồ sơ",
    image: "/anphamvanphong/hosonangluc/sanpham5.png",
    imageAlt: "Hồ sơ năng lực",
    icon: Newspaper,
    highlights: [
      { icon: BookOpen, label: "Nhiều trang" },
      { icon: Star, label: "Cao cấp" },
    ],
  },
  {
    id: "ao-thun",
    title: "Áo thun đồng phục",
    description: "Áo thun đồng phục công ty, sự kiện, team building, quán.",
    href: "/tiep-thi/ao-thun-dong-phuc",
    cta: "Đặt áo thun",
    image: "/anphamvanphong/aothun/aothun.webp",
    imageAlt: "Áo thun đồng phục",
    icon: Shirt,
    highlights: [
      { icon: Check, label: "Đa sizes" },
      { icon: Sparkles, label: "In/nhiều màu" },
    ],
  },
  {
    id: "bang-khen",
    title: "In bảng khen",
    description: "Bảng khen, giấy khen, bằng khen cho trường học, doanh nghiệp.",
    href: "/tiep-thi/bang-khen",
    cta: "Đặt bảng khen",
    image: "/anphamvanphong/bangkhen/sanpham4.png",
    imageAlt: "Bảng khen",
    icon: Star,
    highlights: [
      { icon: Award, label: "Ép kim" },
      { icon: Check, label: "Giá tốt" },
    ],
  },
  {
    id: "anh-ep-nhua",
    title: "Ảnh ép nhựa",
    description: "In ảnh ép nhựa PVC, ảnh cứng, ảnh để bàn, ảnh treo tường.",
    href: "/in-anh/anh-ep-nhua",
    cta: "Xem mẫu ảnh ép nhựa",
    image: "/inanh/epnhua/sanpham1.webp",
    imageAlt: "Ảnh ép nhựa",
    icon: Camera,
    highlights: [
      { icon: Check, label: "Chống nước" },
      { icon: Star, label: "Sắc nét" },
    ],
  },
  {
    id: "anh-ep-go",
    title: "Ảnh ép gỗ",
    description: "In ảnh ép gỗ, ảnh gỗ để bàn, treo tường, backdrop.",
    href: "/in-anh/anh-ep-go",
    cta: "Xem mẫu ảnh ép gỗ",
    image: "/inanh/anh_ep_go-sp1.png",
    imageAlt: "Ảnh ép gỗ",
    icon: Camera,
    highlights: [
      { icon: Layers, label: "Gỗ chắc" },
      { icon: Sparkles, label: "Đẹp mắt" },
    ],
  },
  {
    id: "anh-cuoi",
    title: "Ảnh cưới",
    description: "In ảnh cưới, photoalbum, album cưới cao cấp.",
    href: "/in-anh/anh-cuoi",
    cta: "Xem mẫu ảnh cưới",
    image: "/inanh/anhcuoi/sanpham1.png",
    imageAlt: "Ảnh cưới",
    icon: Camera,
    highlights: [
      { icon: Star, label: "Premium" },
      { icon: Heart, label: "Lưu giữ kỷ niệm" },
    ],
  },
  {
    id: "photobook",
    title: "Photobook",
    description: "Sách ảnh, photobook kỷ niệm, travel book, family book.",
    href: "/in-anh/photobook",
    cta: "Xem photobook",
    image: "/inanh/photobook/sanpham1.png",
    imageAlt: "Photobook",
    icon: BookOpen,
    highlights: [
      { icon: Layers, label: "Nhiều trang" },
      { icon: Star, label: "Bìa cứng" },
    ],
  },
];

const ITEMS_PER_PAGE = 6;
const AUTOPLAY_INTERVAL = 5000;

/* ─── Single Card ─── */
function ServiceCard({ service, isAnimating }: { service: Service; isAnimating: boolean }) {
  return (
    <article
      className="group relative overflow-visible rounded-xl p-4 flex flex-col justify-between h-full"
      style={{
        background: "rgba(255, 255, 255, 0.86)",
        border: "1.5px solid rgba(230, 121, 42, 0.28)",
        boxShadow:
          "0 0 0 1px rgba(230,121,42,0.18), 0 0 18px rgba(230,121,42,0.12), 0 18px 36px -24px rgba(176,108,51,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? "translateY(8px)" : "translateY(0)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <Link href={service.href} aria-label={service.title} className="absolute inset-0 z-30 rounded-xl">
        <span className="sr-only">{service.title}</span>
      </Link>
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute -right-3 top-1/2 h-32 w-32 -translate-y-1/2 translate-x-6 sm:-right-4 sm:h-60 sm:w-60 sm:translate-x-8 rounded-full bg-[#FDF2EA]" />
      </div>
      <div className="relative z-10 pr-28 sm:pr-32 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF3EA] text-[#E6792A] shadow-[inset_0_0_0_1px_rgba(230,121,42,0.18)]">
            <service.icon className="h-4 w-4" />
          </div>
          <div className="min-h-[3.25rem] flex items-center">
            <h3 className="text-lg font-semibold text-[#2C1A10] leading-snug">{service.title}</h3>
          </div>
          <p className="mt-2 text-sm text-[#6F5B4E] line-clamp-2 min-h-[2.5rem]">{service.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 min-h-[3.25rem] content-start">
            {service.highlights.map((h) => (
              <span key={h.label} className="inline-flex items-center gap-2 rounded-full bg-[#FFF7F1] px-2 py-0.5 text-xs font-semibold text-[#8B6A52]">
                <h.icon className="h-3.5 w-3.5 text-[#E6792A]" />
                {h.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E6792A] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_10px_20px_-14px_rgba(230,121,42,0.75)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#D26D23]">
            {service.cta}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="absolute -right-3 top-1/2 z-20 h-[10rem] w-[10rem] -translate-y-1/2 translate-x-2 sm:-right-4 sm:h-[14rem] sm:w-[14rem] sm:translate-x-3">
        <Image src={service.image} alt={service.imageAlt} width={200} height={200} className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_16px_rgba(150,89,38,0.22)]" />
      </div>
    </article>
  );
}

/* ─── Main Component ─── */
export default function CategoryGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalPages = Math.ceil(SERVICES.length / ITEMS_PER_PAGE);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedServices = SERVICES.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Crossfade: fade out → swap data → fade in
  const changePage = useCallback(
    (nextPageFn: (prev: number) => number) => {
      setIsAnimating(true); // fade out
      setTimeout(() => {
        setCurrentPage(nextPageFn); // swap data
        // Small delay to let React paint the new data while still invisible
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsAnimating(false); // fade in
          });
        });
      }, 300); // wait for fade-out to complete
    },
    []
  );

  const nextPage = useCallback(() => {
    changePage((prev) => (prev >= totalPages ? 1 : prev + 1));
  }, [totalPages, changePage]);

  const prevPage = useCallback(() => {
    changePage((prev) => (prev <= 1 ? totalPages : prev - 1));
  }, [totalPages, changePage]);

  // Auto-play
  useEffect(() => {
    if (isPaused || isAnimating) return;
    timerRef.current = setInterval(nextPage, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextPage, isPaused, isAnimating]);

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
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
            <h2
              className="whitespace-normal md:whitespace-nowrap"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#9A5B24",
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
              }}
            >
              DỊCH VỤ IN ẤN CỦA <span style={{ color: "#E6792A" }}>INTEM CẦN THƠ</span>
            </h2>
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-5">
            <motion.div className="h-0.5 rounded-full" style={{ background: "rgba(139,94,60,0.15)" }} initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} />
            <motion.div className="h-0.5 rounded-full" style={{ background: "#E6792A" }} initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
            <motion.div className="h-0.5 rounded-full" style={{ background: "rgba(139,94,60,0.15)" }} initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} />
          </div>

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
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative mt-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-xl">
            {/*
              KEY: Grid is ALWAYS rendered. No unmount/remount.
              Only the data inside each card slot changes.
              isAnimating triggers opacity+transform CSS transition.
              DOM structure NEVER changes = NO scroll jump.
            */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, slotIdx) => {
                const service = displayedServices[slotIdx];
                if (!service) {
                  // Render empty placeholder to keep DOM stable
                  return <div key={`slot-${slotIdx}`} className="min-h-[320px]" />;
                }
                return <ServiceCard key={`slot-${slotIdx}`} service={service} isAnimating={isAnimating} />;
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Prev arrow */}
            <button
              onClick={() => {
                prevPage();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1000);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95"
              style={{
                borderColor: "rgba(230, 121, 42, 0.25)",
                color: "#E6792A",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 8px rgba(230, 121, 42, 0.12)",
              }}
              aria-label="Trang trước"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => {
                      changePage(() => page);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 1000);
                    }}
                    className="relative cursor-pointer group"
                    aria-label={`Trang ${page}`}
                  >
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: isActive ? 28 : 8,
                        background: isActive
                          ? "linear-gradient(90deg, #E6792A, #D26D23)"
                          : "rgba(139, 94, 60, 0.2)",
                        boxShadow: isActive ? "0 2px 8px rgba(230, 121, 42, 0.4)" : "none",
                      }}
                    />
                    {isActive && !isPaused && (
                      <div
                        className="absolute inset-0 h-2 rounded-full origin-left"
                        style={{
                          background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))",
                          animation: `shrinkWidth ${AUTOPLAY_INTERVAL}ms linear`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => {
                nextPage();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 1000);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95"
              style={{
                borderColor: "rgba(230, 121, 42, 0.25)",
                color: "#E6792A",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 8px rgba(230, 121, 42, 0.12)",
              }}
              aria-label="Trang tiếp"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shrinkWidth {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
      `}</style>
    </section>
  );
}