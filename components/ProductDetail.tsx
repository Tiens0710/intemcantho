"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronDown, HelpCircle, Tag, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";
import BrandCard from "@/components/ui/BrandCard";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SizeOption {
  label: string;
  value: string;
}

interface ComboItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
}

interface ProductDetailProps {
  product?: {
    id?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    specs?: { label: string; value: string; hasTooltip?: boolean }[];
    sizes?: SizeOption[];
    purposes?: string[];
    price?: number;
    deliveryDate?: string;
    combos?: ComboItem[];
    gallery?: string[];
  };
}

// ─── Tooltip Component ────────────────────────────────────────────────────────

function Tooltip({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <HelpCircle className="ml-1 h-3.5 w-3.5 text-gray-400 cursor-help" />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 rounded-lg bg-gray-900 text-white text-xs px-3 py-1.5 whitespace-nowrap shadow-lg"
          >
            {text}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="h-4 w-1 rounded-full bg-[#E6792A]" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#E6792A]">
        {children}
      </span>
    </div>
  );
}

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_PRODUCT = {
  title: "BĂNG RÔN HIFLEX",
  subtitle: "Bạt dày, độ bền màu cao",
  image: "/images/banner-hiflex.jpg",
  specs: [
    { label: "Màu sắc", value: "nhiều màu", hasTooltip: true },
    { label: "Số mặt in", value: "1 mặt" },
    { label: "Chất Liệu", value: "Bạt Hiflex", hasTooltip: true },
    { label: "Kỹ thuật", value: "In KTS", hasTooltip: true },
  ],
  sizes: [
    { label: "400×250 cm", value: "400x250" },
    { label: "600×300 cm", value: "600x300" },
    { label: "KHÁC", value: "custom" },
  ],
  purposes: [
    "Cắt Thành phẩm",
    "Treo Ngoài Trời",
    "Treo Trong Nhà",
    "Sự kiện - Hội nghị",
  ],
  price: 450000,
  deliveryDate: "Trong sáng 11/5",
  gallery: [
    "/sanpham001.png",
    "/sanpham002.png",
    "/2.jpg",
    "/34.jpg",
  ],
  combos: [
    {
      id: "combo-1",
      title: "BĂNG RÔN + POSTER PP",
      price: 243000,
      originalPrice: 270000,
      image: "/images/combo-banner-poster.jpg",
    },
  ],
};

// ─── Main Component ───────────────────────────────────────────────────────────

function ThumbnailImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={72}
      height={72}
      className="h-full w-full object-cover"
      onError={() => setImgSrc("https://placehold.co/72x72/f0f0f0/999?text=SP")}
    />
  );
}

function ComboImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={80}
      height={56}
      className="h-full w-full object-cover"
      onError={() => setImgSrc("https://placehold.co/80x56/fde68a/d97706?text=Combo")}
    />
  );
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const p = { ...DEFAULT_PRODUCT, ...product };

  const [selectedSize, setSelectedSize] = useState(p.sizes[1].value);
  const [customSize, setCustomSize] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [purpose, setPurpose] = useState(p.purposes[0]);
  const [designOption, setDesignOption] = useState<"has-file" | "online" | "support">("has-file");
  const [reviewOption, setReviewOption] = useState<"review" | "skip">("review");
  const [supportOption, setSupportOption] = useState<"new" | "redesign">("new");
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const router = useRouter();
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLightbox]);

  // Close lightbox on Escape & support arrow key navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLightbox(false);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    if (showLightbox) {
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }
  }, [showLightbox]);

  const gallery = p.gallery && p.gallery.length > 0 ? p.gallery : [p.image];

  const [mainImgSrc, setMainImgSrc] = useState(gallery[selectedImageIndex]);

  useEffect(() => {
    setMainImgSrc(gallery[selectedImageIndex]);
  }, [selectedImageIndex, gallery]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const designOptions = [
    { key: "has-file" as const, label: "Tôi đã có file thiết kế" },
    { key: "online" as const, label: "Tôi sẽ thiết kế trực tuyến" },
    { key: "support" as const, label: "Tôi cần hỗ trợ thiết kế" },
  ];

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + "đ";

  const handleAddToCart = (e: React.MouseEvent) => {
    // Fly-to-cart animation
    const btn = e.currentTarget as HTMLElement;
    const btnRect = btn.getBoundingClientRect();
    const cartIcon = document.getElementById("cart-icon");

    if (cartIcon) {
      const cartRect = cartIcon.getBoundingClientRect();
      const flyImg = document.createElement("img");
      flyImg.src = gallery[selectedImageIndex] || p.image;
      flyImg.alt = p.title;
      flyImg.onerror = () => {
        flyImg.src = "https://placehold.co/60x60/f0f0f0/999?text=SP";
      };
      Object.assign(flyImg.style, {
        position: "fixed",
        width: "60px",
        height: "60px",
        borderRadius: "12px",
        objectFit: "cover",
        zIndex: "9999",
        pointerEvents: "none",
        border: "2px solid #E6792A",
        boxShadow: "0 8px 25px rgba(230,121,42,0.4)",
        left: `${btnRect.left + btnRect.width / 2 - 30}px`,
        top: `${btnRect.top}px`,
        transition: "none",
      });
      document.body.appendChild(flyImg);

      requestAnimationFrame(() => {
        Object.assign(flyImg.style, {
          transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          left: `${cartRect.left + cartRect.width / 2 - 15}px`,
          top: `${cartRect.top + cartRect.height / 2 - 15}px`,
          width: "30px",
          height: "30px",
          opacity: "0.6",
          borderRadius: "50%",
        });
      });

      setTimeout(() => {
        flyImg.remove();
      }, 750);
    }

    // Add to cart store
    const qty = parseInt(quantity || "1", 10) || 1;
    const priceNumber = typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 0;
    const sizeLabel = p.sizes.find((s) => s.value === selectedSize)?.label || selectedSize;
    const designLabel = designOptions.find((o) => o.key === designOption)?.label || "";
    useAppStore.getState().addToCart({
      id: product?.id || p.title,
      title: p.title,
      price: priceNumber,
      quantity: qty,
      image: p.image,
      meta: {
        size: selectedSize === "custom" ? customSize || "Tùy chỉnh" : sizeLabel,
        purpose,
        design: designLabel,
      },
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[620px_1fr] max-w-2xl mx-auto lg:max-w-none">

          {/* ── Left: Image Column ─────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrandCard className="relative overflow-hidden bg-white">
                <div
                  ref={imageContainerRef}
                  onClick={() => setShowLightbox(true)}
                  className="aspect-square w-full overflow-hidden bg-gray-100 relative cursor-zoom-in"
                >
                  <Image
                    src={mainImgSrc}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-102"
                    onError={() => {
                      setMainImgSrc("https://placehold.co/600x400/e8f5e9/2d7a4a?text=B%C4%80NG+R%C3%94N+HIFLEX");
                    }}
                  />
                </div>
              </BrandCard>

              {/* Thumbnail Gallery */}
              {gallery.length > 1 && (
                <div className="mt-3 flex items-center gap-3 px-1 py-2">
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-all hover:border-[#E6792A] hover:text-[#E6792A] hover:shadow-md active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="flex flex-1 items-center justify-start sm:justify-center gap-3 overflow-x-auto py-2 scrollbar-none">
                    {gallery.map((img, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl transition-all duration-200 ${
                          selectedImageIndex === index
                            ? "border-2 border-[#E6792A] shadow-md"
                            : "border border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <ThumbnailImage src={img} alt={`${p.title} ${index + 1}`} />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm transition-all hover:border-[#E6792A] hover:text-[#E6792A] hover:shadow-md active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </motion.div>

            {/* ── Combo Section ─────────────────────────────────────────── */}
            {p.combos && p.combos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <BrandCard className="bg-white p-5">
                  <SectionLabel>Combo siêu tiết kiệm</SectionLabel>
                  <div className="space-y-2">
                    {p.combos.map((combo) => (
                      <motion.div
                        key={combo.id}
                        whileHover={{ x: 4 }}
                        className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all hover:border-[#E6792A] hover:bg-[#fffbeb]"
                      >
                        <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-[#fde68a]/40 overflow-hidden">
                          <ComboImage src={combo.image} alt={combo.title} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-800 uppercase truncate">{combo.title}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-sm font-bold text-[#E6792A]">
                              {formatPrice(combo.price)}
                            </span>
                            <span className="text-xs text-gray-400 line-through">
                              {formatPrice(combo.originalPrice)}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#E6792A] mt-0.5 flex items-center gap-1">
                            <ExternalLink className="h-3 w-3" />
                            Đặt và xem thêm 2 combo khác
                          </p>
                        </div>
                        <Tag className="h-5 w-5 shrink-0 text-[#E6792A]" />
                      </motion.div>
                    ))}
                  </div>
                </BrandCard>
              </motion.div>
            )}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-orange-50/40 p-[1px] shadow-[0_2px_12px_rgba(154,91,36,0.06)]"
            >
              {/* Glass panel */}
              <div className="relative rounded-2xl border border-[#c8a882]/50 bg-white/25 px-5 py-5 space-y-3.5 backdrop-blur-xl">
                {/* Subtle overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent" />

                <p className="relative text-xs font-bold uppercase tracking-widest text-[#9a5b24]/70">Bạn cũng cần?</p>
                <a href="#" className="relative flex items-center gap-2.5 text-base font-bold text-gray-900 hover:text-[#9a5b24] transition-colors">
                  <span className="text-lg text-[#9a5b24]">→</span> In Poster PP, Standee khổ lớn
                </a>
                <a href="#" className="relative flex items-center gap-2.5 text-base font-bold text-gray-900 hover:text-[#9a5b24] transition-colors">
                  <span className="text-lg text-[#9a5b24]">→</span> In Decal khổ lớn chất lượng cao
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Detail Column ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          <BrandCard className="bg-white p-6">
            {/* Product Title */}
            <div className="border-b border-gray-100 pb-4 mb-5">
              <h1 className="!font-sans text-xl font-extrabold uppercase tracking-wide !text-[#E6792A]">
                {p.title}
              </h1>
              <p className="mt-1 text-sm !text-gray-500">{p.subtitle}</p>
            </div>

            {/* ── Thông số cơ bản ── */}
            <div className="mb-5">
              <SectionLabel>Thông số cơ bản</SectionLabel>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {p.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-gray-400">-</span>
                    <span className="font-medium text-gray-700">{spec.label}:</span>
                    <span>{spec.value}</span>
                    {spec.hasTooltip && (
                      <Tooltip text={`Thông tin về ${spec.label.toLowerCase()}`} />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-5" />

            {/* ── Yêu cầu của bạn ── */}
            <div className="space-y-5">
              <SectionLabel>Yêu cầu của bạn</SectionLabel>

              {/* Mục đích sử dụng */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Mục Đích Sử Dụng
                </label>
                <div className="relative">
                  <select
                    id="product-purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 focus:border-[#9a5b24] focus:outline-none focus:ring-2 focus:ring-[#9a5b24]/20 transition-all"
                  >
                    {p.purposes.map((pur) => (
                      <option key={pur} value={pur}>{pur}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* KT Thành phẩm */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  KT Thành Phẩm{" "}
                  <span className="normal-case font-normal text-gray-400">(On)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {p.sizes.map((size) => (
                    <BrandOutlineButton
                      key={size.value}
                      id={`size-${size.value}`}
                      type="button"
                      onClick={() => setSelectedSize(size.value)}
                      active={selectedSize === size.value}
                      className="!px-4 !py-2 !rounded-lg"
                    >
                      {size.label}
                    </BrandOutlineButton>
                  ))}
                </div>
                {/* Custom size input */}
                <AnimatePresence>
                  {selectedSize === "custom" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 overflow-hidden"
                    >
                      <input
                        id="custom-size-input"
                        type="text"
                        placeholder="Nhập kích thước (vd: 200x100 cm)"
                        value={customSize}
                        onChange={(e) => setCustomSize(e.target.value)}
                        className="w-full max-w-[300px] rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#9a5b24] focus:outline-none focus:ring-2 focus:ring-[#9a5b24]/20"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Số lượng */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">
                  Số Lượng
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="product-quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ width: '100px' }}
                    className="flex-none rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-[#9a5b24] focus:outline-none focus:ring-2 focus:ring-[#9a5b24]/20"
                  />
                  <span className="text-sm text-gray-600">Tấm</span>
                </div>
              </div>

              {/* Thiết kế */}
              <div>
                <p className="mb-2.5 text-sm text-gray-700">
                  Thiết kế sẵn sàng in của bạn sẽ được cung cấp như thế nào?
                </p>
                <div className="flex flex-wrap gap-2">
                  {designOptions.map((opt) => (
                    <BrandOutlineButton
                      key={opt.key}
                      id={`design-${opt.key}`}
                      type="button"
                      onClick={() => setDesignOption(opt.key)}
                      active={designOption === opt.key}
                      className="!px-4 !py-2 !rounded-lg"
                    >
                      {opt.label}
                    </BrandOutlineButton>
                  ))}
                </div>
              </div>

              {/* Review options — Chỉ hiện khi chọn "Tôi đã có file thiết kế" */}
              {designOption === "has-file" ? (
                <div className="border-2 !border-[#E6792A] shadow-sm bg-white overflow-hidden rounded-lg">
                  <label
                    className="grid cursor-pointer grid-cols-[48px_1fr] items-center p-4 md:p-5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="review-option"
                          id="review-yes"
                          checked={reviewOption === "review"}
                          onChange={() => setReviewOption("review")}
                          className="sr-only"
                        />
                        {/* Custom Radio Outer */}
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${reviewOption === "review" ? "border-[#E6792A]" : "border-gray-300"
                          }`}>
                          {/* Custom Radio Inner Dot */}
                          {reviewOption === "review" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E6792A]" />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed text-gray-700">
                      TGIA kiểm tra chất lượng <strong>File thiết kế</strong>, mô tả chi tiết thành phẩm và gửi lại Tôi xác nhận lại.{" "}
                      <span className="text-red-500">
                        (Khuyến dùng - Miễn phí - Thời gian cộng thêm 2 - 4 giờ làm việc)
                      </span>
                    </span>
                  </label>

                  <div className="border-t border-gray-200" />

                  <label
                    className="grid cursor-pointer grid-cols-[48px_1fr] items-center p-4 md:p-5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="review-option"
                          id="review-no"
                          checked={reviewOption === "skip"}
                          onChange={() => setReviewOption("skip")}
                          className="sr-only"
                        />
                        {/* Custom Radio Outer */}
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${reviewOption === "skip" ? "border-[#E6792A]" : "border-gray-300"
                          }`}>
                          {/* Custom Radio Inner Dot */}
                          {reviewOption === "skip" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E6792A]" />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700">
                      Tôi không cần hỗ trợ kiểm tra <strong>File thiết kế</strong> và không cần xác nhận lại.
                    </span>
                  </label>
                </div>
              ) : null}

              {/* Online Design Options — Chỉ hiện khi chọn "Tôi sẽ thiết kế trực tuyến" */}
              {designOption === "online" && (
                <div className="border-2 !border-[#E6792A] shadow-sm bg-white overflow-hidden rounded-lg p-5">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Bạn sẽ sử dụng công cụ thiết kế trực tuyến miễn phí của chúng tôi để tạo thiết kế của mình.
                    </p>
                    <a
                      href="https://dukyai.com/tool/free-generation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#E6792A] hover:bg-[#cf6721] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Bắt đầu thiết kế ngay →
                    </a>
                  </div>
                </div>
              )}

              {/* Support Design Options — Chỉ hiện khi chọn "Tôi cần hỗ trợ thiết kế" */}
              {designOption === "support" && (
                <div className="border-2 !border-[#E6792A] shadow-sm bg-white overflow-hidden rounded-lg">
                  <label
                    className="grid cursor-pointer grid-cols-[48px_1fr] items-center p-4 md:p-5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="support-option"
                          id="support-new"
                          checked={supportOption === "new"}
                          onChange={() => setSupportOption("new")}
                          className="sr-only"
                        />
                        {/* Custom Radio Outer */}
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${supportOption === "new" ? "border-[#E6792A]" : "border-gray-300"}`}>
                          {/* Custom Radio Inner Dot */}
                          {supportOption === "new" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E6792A]" />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed text-gray-700">
                      Tôi cần thiết kế hoàn toàn mới độc quyền, dựa trên yêu cầu của tôi{" "}
                      <span className="text-red-600">
                        (400,000 vnd - thời gian thêm 2 ngày làm việc)
                      </span>
                    </span>
                  </label>

                  <div className="border-t border-gray-200" />

                  <label
                    className="grid cursor-pointer grid-cols-[48px_1fr] items-center p-4 md:p-5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="support-option"
                          id="support-redesign"
                          checked={supportOption === "redesign"}
                          onChange={() => setSupportOption("redesign")}
                          className="sr-only"
                        />
                        {/* Custom Radio Outer */}
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${supportOption === "redesign" ? "border-[#E6792A]" : "border-gray-300"}`}>
                          {/* Custom Radio Inner Dot */}
                          {supportOption === "redesign" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#E6792A]" />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed text-gray-700">
                      Tôi cần thiết lại dựa trên thiết kế có sẵn{" "}
                      <span className="text-red-600">
                        (300,000 vnd - thời gian thêm 4 giờ làm việc)
                      </span>
                    </span>
                  </label>
                </div>
              )}

              {/* Price & Delivery */}
              <div className="grid grid-cols-2 gap-3">
                <BrandCard className="bg-white p-3.5 flex flex-col justify-between items-center text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Thời gian dự kiến thành phẩm{" "}
                    <span className="text-[#d97706]">(*)</span>
                  </p>
                  <p className="font-bold text-green-600 text-sm">{p.deliveryDate}</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    (Từ khi xác nhận file thiết kế + Đặt cọc)
                  </p>
                </BrandCard>
                <BrandCard className="bg-white p-3.5 flex flex-col justify-between items-center text-center">
                  <p className="text-xs text-gray-500 mb-1">Thành tiền</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight !text-red-700 drop-shadow-sm break-all">
                    {formatPrice(p.price)}
                  </p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    (Giá trên chưa bao gồm 10% VAT)
                  </p>
                </BrandCard>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <motion.button
                  id="btn-order-now"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const qty = parseInt(quantity || "1", 10) || 1;
                    const priceNumber = typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 0;
                    const sizeLabel = p.sizes.find((s) => s.value === selectedSize)?.label || selectedSize;
                    const designLabel = designOptions.find((o) => o.key === designOption)?.label || "";
                    useAppStore.getState().setBuyNowItem({
                      id: product?.id || p.title,
                      title: p.title,
                      price: priceNumber,
                      quantity: qty,
                      image: p.image,
                      meta: {
                        size: selectedSize === "custom" ? customSize || "Tùy chỉnh" : sizeLabel,
                        purpose,
                        design: designLabel,
                      },
                    });
                    router.push("/checkout?mode=buy-now");
                  }}
                  className="rounded-xl bg-[#E6792A] py-3.5 text-sm font-bold uppercase tracking-wide !text-white shadow-md shadow-[#E6792A]/30 transition-colors hover:bg-[#cf6721] hover:!text-white"
                >
                  Đặt In Ngay
                </motion.button>

                <BrandOutlineButton
                  id="btn-add-to-cart"
                  type="button"
                  active
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md"
                >
                  <AnimatePresence mode="wait">
                    {addedToCart ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Đã thêm!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Thêm vào giỏ hàng
                      </motion.span>
                    )}
                  </AnimatePresence>
                </BrandOutlineButton>
              </div>

              <p className="text-[10px] text-gray-400 text-center">
                (*) Thời gian trên chưa bao gồm thời gian giao hàng
              </p>
            </div>

          </BrandCard>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Slideshow Modal */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            key="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setShowLightbox(false)}
          >
            {/* Close button in top-right */}
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute right-6 top-6 z-[10000] flex flex-col items-center gap-1 text-white/70 transition hover:text-white hover:scale-105 cursor-pointer"
            >
              <X className="h-6 w-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Đóng</span>
            </button>

            {/* Main Lightbox Content Area */}
            <div className="relative flex w-full max-w-5xl items-center justify-between px-4 animate-fade-in" onClick={(e) => e.stopPropagation()}>
              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Centered Image */}
              <div className="relative flex flex-col items-center justify-center">
                <img
                  src={gallery[selectedImageIndex]}
                  alt={p.title}
                  className="max-h-[70vh] max-w-[70vw] rounded-2xl object-contain shadow-2xl select-none"
                />
                
                {/* Caption below image */}
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Hình ảnh
                </p>
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnail Navigation at the bottom */}
            {gallery.length > 1 && (
              <div className="absolute bottom-8 flex gap-3 overflow-x-auto px-4" onClick={(e) => e.stopPropagation()}>
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-14 w-14 overflow-hidden rounded-xl transition-all duration-200 cursor-pointer ${
                      selectedImageIndex === index
                        ? "border-2 border-[#E6792A] scale-105 shadow-lg shadow-[#E6792A]/25"
                        : "border border-white/20 opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
