"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronDown, HelpCircle, Info, Tag, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useAppStore } from "@/lib/store";

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
      <span className="h-4 w-1 rounded-full bg-[#9a5b24]" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#9a5b24]">
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

  const designOptions = [
    { key: "has-file" as const, label: "Tôi đã có file thiết kế" },
    { key: "online" as const, label: "Tôi sẽ thiết kế trực tuyến" },
    { key: "support" as const, label: "Tôi cần hỗ trợ thiết kế" },
  ];

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + "đ";

  const handleAddToCart = () => {
    // Use global store addToCart
    const qty = parseInt(quantity || "1", 10) || 1;
    const priceNumber = typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 0;
    useAppStore.getState().addToCart({
      id: product?.id || p.title,
      title: p.title,
      price: priceNumber,
      quantity: qty,
      image: p.image,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[620px_1fr]">

          {/* ── Left: Image Column ─────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {/* Main Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://placehold.co/600x400/e8f5e9/2d7a4a?text=BĂNG+RÔN+HIFLEX";
                  }}
                />
              </div>
            </motion.div>

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
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* Product Title */}
            <div className="border-b border-gray-100 pb-4 mb-5">
              <h1 className="!font-sans text-xl font-extrabold uppercase tracking-wide !text-[#9a5b24]">
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
                    <button
                      key={size.value}
                      id={`size-${size.value}`}
                      type="button"
                      onClick={() => setSelectedSize(size.value)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 ${selectedSize === size.value
                          ? "border-[#9a5b24] bg-white !text-[#9a5b24] shadow-sm ring-2 ring-[#9a5b24]/60"
                          : "border-gray-300 bg-white text-gray-600 hover:border-[#9a5b24] hover:text-[#9a5b24]"
                        }`}
                    >
                      {size.label}
                    </button>
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
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#9a5b24] focus:outline-none focus:ring-2 focus:ring-[#9a5b24]/20"
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
                    <button
                      key={opt.key}
                      id={`design-${opt.key}`}
                      type="button"
                      onClick={() => setDesignOption(opt.key)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 ${designOption === opt.key
                          ? "border-[#9a5b24] bg-white !text-[#9a5b24] shadow-sm ring-2 ring-[#9a5b24]/60"
                          : "border-gray-300 bg-white text-gray-600 hover:border-[#9a5b24] hover:text-[#9a5b24]"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Review options — Chỉ hiện khi chọn "Tôi đã có file thiết kế" */}
              {designOption === "has-file" && (
                <div className="border-2 !border-[#9a5b24] shadow-sm bg-white overflow-hidden rounded-lg">
                  <label
                    className="grid cursor-pointer grid-cols-[100px_1fr] items-center p-5 hover:bg-gray-50 transition-colors group"
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
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${reviewOption === "review" ? "border-[#9a5b24]" : "border-gray-300"
                          }`}>
                          {/* Custom Radio Inner Dot */}
                          {reviewOption === "review" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#9a5b24]" />
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
                    className="grid cursor-pointer grid-cols-[100px_1fr] items-center p-5 hover:bg-gray-50 transition-colors group"
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
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${reviewOption === "skip" ? "border-[#9a5b24]" : "border-gray-300"
                          }`}>
                          {/* Custom Radio Inner Dot */}
                          {reviewOption === "skip" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#9a5b24]" />
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-700">
                      Tôi không cần hỗ trợ kiểm tra <strong>File thiết kế</strong> và không cần xác nhận lại.
                    </span>
                  </label>
                </div>
              )}

              {/* Online Design Options — Chỉ hiện khi chọn "Tôi sẽ thiết kế trực tuyến" */}
              {designOption === "online" && (
                <div className="border-2 !border-[#9a5b24] shadow-sm bg-white overflow-hidden rounded-lg p-5">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Bạn sẽ sử dụng công cụ thiết kế trực tuyến miễn phí của chúng tôi để tạo thiết kế của mình.
                    </p>
                    <a
                      href="https://dukyai.com/tool/free-generation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#9a5b24] hover:bg-[#7a4819] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Bắt đầu thiết kế ngay →
                    </a>
                  </div>
                </div>
              )}

              {/* Support Design Options — Chỉ hiện khi chọn "Tôi cần hỗ trợ thiết kế" */}
              {designOption === "support" && (
                <div className="border-2 !border-[#9a5b24] shadow-sm bg-white overflow-hidden rounded-lg">
                  <label
                    className="grid cursor-pointer grid-cols-[100px_1fr] items-center p-5 hover:bg-gray-50 transition-colors group"
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
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${supportOption === "new" ? "border-[#9a5b24]" : "border-gray-300"}`}>
                          {/* Custom Radio Inner Dot */}
                          {supportOption === "new" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#9a5b24]" />
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
                    className="grid cursor-pointer grid-cols-[100px_1fr] items-center p-5 hover:bg-gray-50 transition-colors group"
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
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${supportOption === "redesign" ? "border-[#9a5b24]" : "border-gray-300"}`}>
                          {/* Custom Radio Inner Dot */}
                          {supportOption === "redesign" && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#9a5b24]" />
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
                <div className="rounded-xl border border-gray-200 bg-white p-3.5 text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Thời gian dự kiến thành phẩm{" "}
                    <span className="text-[#d97706]">(*)</span>
                  </p>
                  <p className="font-bold text-green-600 text-sm">{p.deliveryDate}</p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    (Từ khi xác nhận file thiết kế + Đặt cọc)
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3.5 text-center">
                  <p className="text-xs text-gray-500 mb-1">Thành tiền</p>
                  <p className="font-extrabold !text-red-600 text-2xl">
                    {formatPrice(p.price)}
                  </p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    (Giá trên chưa bao gồm 10% VAT)
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <motion.button
                  id="btn-order-now"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-green-600 py-3.5 text-sm font-bold uppercase tracking-wide !text-white shadow-md shadow-green-600/30 transition-colors hover:!text-[#9a5b24]"
                >
                  Đặt In Ngay
                </motion.button>

                <motion.button
                  id="btn-add-to-cart"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 border-yellow-400 bg-yellow-400 py-3.5 text-sm font-bold uppercase tracking-wide !text-white shadow-md shadow-yellow-400/30 transition-colors hover:!text-[#9a5b24] ${addedToCart ? "bg-yellow-400 border-yellow-400" : ""
                    }`}
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
                </motion.button>
              </div>

              <p className="text-[10px] text-gray-400 text-center">
                (*) Thời gian trên chưa bao gồm thời gian giao hàng
              </p>
            </div>

            {/* ── Combo Section ─────────────────────────────────────────── */}
            {p.combos && p.combos.length > 0 && (
              <div className="mt-6 border-t border-gray-100 pt-5">
                <SectionLabel>Combo siêu tiết kiệm</SectionLabel>
                <div className="space-y-2">
                  {p.combos.map((combo) => (
                    <motion.div
                      key={combo.id}
                      whileHover={{ x: 4 }}
                      className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all hover:border-[#9a5b24] hover:bg-[#fffbeb]"
                    >
                      {/* Combo image */}
                      <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-[#fde68a]/40 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={combo.image}
                          alt={combo.title}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "https://placehold.co/80x56/fde68a/d97706?text=Combo";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-800 uppercase truncate">{combo.title}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm font-bold text-[#9a5b24]">
                            {formatPrice(combo.price)}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            {formatPrice(combo.originalPrice)}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#9a5b24] mt-0.5 flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          Đặt và xem thêm 2 combo khác
                        </p>
                      </div>
                      <Tag className="h-5 w-5 shrink-0 text-[#9a5b24]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
