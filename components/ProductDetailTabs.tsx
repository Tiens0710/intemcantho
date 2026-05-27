"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ThumbsUp, Download, Play,
  ShoppingBasket, Upload, UserCheck, CheckSquare, Printer, Package,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabKey = "intro" | "notes" | "price" | "reviews";

interface Review {
  id: string;
  author: string;
  initials: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

// ─── Static data ─────────────────────────────────────────────────────────────

const TABS: { key: TabKey; label: string }[] = [
  { key: "intro",   label: "Giới Thiệu Sản Phẩm" },
  { key: "notes",   label: "Lưu Ý Khi Đặt Hàng" },
  { key: "price",   label: "Bảng Giá" },
  { key: "reviews", label: "Khách Hàng Nhận Xét" },
];

const ORDER_STEPS = [
  { icon: ShoppingBasket, label: "Đặt in Online" },
  { icon: Upload,         label: "Gửi file in + Đặt cọc" },
  { icon: UserCheck,      label: "TGIA xử lý đơn" },
  { icon: CheckSquare,    label: "Xác nhận đơn + file" },
  { icon: Printer,        label: "TGIA thành phẩm" },
  { icon: Package,        label: "Nhận hàng" },
];

const FILE_NOTES = [
  { color: "text-gray-700", text: "TGIA khuyến khích anh chị sử dụng hệ màu CMYK để thiết kế." },
  { color: "text-gray-700", text: "Thành phẩm sẽ có dung sai \u00B11 mm nên TGIA khuyến khích anh chị thiết kế viền lớn hơn 3mm và khi thành phẩm sẽ có sự chênh lệch giữa các cạnh \u00B11 mm." },
  { color: "text-gray-700", text: "TGIA chấp nhận file thiết kế xuất từ các phần mềm Adobe Illustrator (Ai), Photoshop (Psd), Indesign (Indd) và Corel (Cdr)." },
  { color: "text-gray-700", text: "Các định dạng file có đuôi: psd, tiff, jpg, png... phải đặt độ phân giải 300dpi đối với hình ảnh và 400dpi đối với text." },
  { color: "text-gray-700", text: "Đối với in offset, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 20 Y: 0 K: 100." },
  { color: "text-gray-700", text: "Đối với in kỹ thuật số, nếu file của anh chị có nền in màu đen, hãy chỉnh màu C: 20 M: 0 Y: 0 K: 100." },
  { color: "text-red-600",  text: "Khuyến khích file in của anh chị có độ phân giải như sau: File từ 1m thì độ phân giải: 100\u2192200dpi, File từ 2m thì độ phân giải: 70dpi, File từ 20m thì độ phân giải: 50dpi." },
  { color: "text-red-600",  text: "Khuyến khích anh chị đưa những hình ảnh đạt độ phân giải 300dpi vào file thiết kế để thành phẩm in ấn được sắc nét." },
  { color: "text-red-600",  text: "Kích thước tối đa có thể in ấn 1 chiều của tấm Hiflex là 310cm." },
];

const PRICE_FILES = [
  { label: "BẢNG GIÁ", sub: "File Excel",      bg: "bg-[#dff1e7]", icon: "xlsx" },
  { label: "FILE CHUẨN", sub: "Illustrator",   bg: "bg-[#efe2d7]", icon: "ai" },
  { label: "FILE CHUẨN", sub: "Vector EPS",    bg: "bg-[#f3dfc3]", icon: "eps" },
  { label: "FILE CHUẨN", sub: "pdf",           bg: "bg-[#f7dedd]", icon: "pdf" },
];

const SAMPLE_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Thanh Tâm",
    initials: "TT",
    date: "2019-08-30 02:42:05",
    rating: 4,
    title: "Hơi hài lòng",
    content: "Thời gian in nhanh, chất lượng thành phẩm khá.",
  },
  {
    id: "r2",
    author: "Thanh Tâm",
    initials: "TT",
    date: "2019-08-30 02:46:47",
    rating: 4,
    title: "Hơi hài lòng",
    content: "Sản phẩm tốt, tuy nhiên vì phải gấp gọn backdrop lại nên lúc căng ra có nhiều nếp gấp.",
  },
];

// ─── Star Rating display ──────────────────────────────────────────────────────

function Stars({ rating, max = 5, size = "h-4 w-4" }: { rating: number; max?: number; size?: string }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${i < rating ? "fill-[#E6792A] text-[#E6792A]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </span>
  );
}

// ─── Tab title decorator ──────────────────────────────────────────────────────

function TabTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-[#E6792A]" />
      <h2 className="!font-sans text-xl font-bold !text-[#E6792A]">{children}</h2>
      <span className="h-px w-16 bg-[#E6792A]" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface ProductDetailTabsProps {
  productName?: string;
}

export default function ProductDetailTabs({ productName }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("intro");
  const [replyTexts, setReplyTexts] = useState<Record<string, string>>({});
  const [writeReview, setWriteReview] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState("");

  // Rating breakdown for sample data: 2 reviews both at 4 stars
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: SAMPLE_REVIEWS.filter((r) => r.rating === star).length,
    pct: Math.round((SAMPLE_REVIEWS.filter((r) => r.rating === star).length / SAMPLE_REVIEWS.length) * 100),
  }));
  const avgRating = (SAMPLE_REVIEWS.reduce((s, r) => s + r.rating, 0) / SAMPLE_REVIEWS.length).toFixed(1);

  return (
    <section className="w-full lg:w-[87%] mx-auto px-4 pb-16">
      {/* Divider above tabs */}
      <div className="flex justify-center mb-4">
        <span className="h-0.5 w-80 bg-[#E6792A] rounded-md" />
      </div>

      {/* ── Tab Navigation ─────────────────────────────────────────────── */}
      <div className="border border-gray-200 bg-white">
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 scrollbar-none" role="tablist" aria-label="Product detail tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              id={`tab-${tab.key}`}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-current={activeTab === tab.key ? "true" : undefined}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`relative py-5 text-sm md:text-base uppercase tracking-wide font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6792A]/40 shrink-0 px-6 md:px-0 whitespace-nowrap flex-none text-center ${
                activeTab === tab.key
                  ? "text-[#E6792A] font-bold"
                  : "text-gray-500 hover:text-[#E6792A]"
              }`}
            >
              {tab.label}

              {/* animated underline indicator */}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 rounded-md bg-[#E6792A] w-[80%] transition-all duration-200 origin-center ${
                  activeTab === tab.key ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ─────────────────────────────────────────────────── */}
      <div className="border border-t-0 border-gray-200 bg-white p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >

            {/* ══ TAB 1: GIỚI THIỆU ══════════════════════════════════════ */}
            {activeTab === "intro" && (
              <div className="space-y-10">
                {/* Title */}
                <TabTitle>{productName ?? "Băng Rôn Hiflex"}</TabTitle>
                {/* Description */}
                <p className="text-sm leading-relaxed !text-gray-600">
                  Băng rôn · Banner · Backdrop chung 1 nghĩa giống nhau đều là biểu ngữ để quảng cáo hay làm phông
                  nền quảng bá cho một sự kiện gì đó. Băng rôn thường được làm bằng chất liệu Hiflex.
                </p>

                <div className="space-y-4 text-sm leading-relaxed !text-gray-600">
                  <p>
                    Danh thiếp là ấn phẩm marketing không thể thiếu đối với cá nhân, doanh nghiệp và cửa hàng kinh doanh trong thời đại hiện nay. Một mẫu danh thiếp đẹp, chuyên nghiệp không chỉ cung cấp thông tin liên hệ mà còn thể hiện rõ hình ảnh thương hiệu, phong cách và mức độ uy tín của người sử dụng. Vì vậy, việc thiết kế và in ấn danh thiếp chất lượng cao luôn được nhiều khách hàng quan tâm.
                  </p>

                  <p>
                    Danh thiếp thường bao gồm các thông tin quan trọng như: tên cá nhân hoặc doanh nghiệp, chức vụ, số điện thoại, email, địa chỉ, website và logo thương hiệu. Tùy theo nhu cầu, khách hàng có thể lựa chọn nhiều kiểu dáng khác nhau như bo góc, ép kim, cán mờ/cán bóng hay danh thiếp giấy mỹ thuật cao cấp. Mỗi loại đều mang đến ấn tượng riêng, giúp người nhận dễ dàng ghi nhớ và nhận diện thương hiệu.
                  </p>

                  <p>
                    Chất liệu in phổ biến hiện nay là giấy Couche, Bristol, Ivory hoặc giấy mỹ thuật với độ dày từ 300gsm – 350gsm, đảm bảo độ cứng cáp, bền đẹp và sang trọng, góp phần nâng cao hình ảnh chuyên nghiệp cho doanh nghiệp.
                  </p>
                </div>

                {/* YouTube Embed */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="relative aspect-video bg-gray-900">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Băng rôn Hiflex – ứng dụng thực tế"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="h-px w-16 bg-[#E6792A]" />
                    <h3 className="!font-sans text-lg font-bold !text-gray-800">Đặc Điểm Của Chất Liệu Hiflex</h3>
                    <span className="h-px w-16 bg-[#E6792A]" />
                  </div>
                  <ul className="space-y-3">
                    {[
                      { color: "text-[#E6792A]", text: "Chống nước và chịu nhiệt tốt. Dù nắng gắt hay mưa giông, băng rôn vẫn đảm bảo độ sắc nét và bền màu thiết kế cũng như truyền tải thông điệp lâu dài." },
                      { color: "text-[#E6792A]", text: "Dễ dàng nhìn từ xa: Công nghệ in hiện đại giúp màu sắc rõ nét và thu hút sự chú ý hơn ở khoảng cách xa, rất phù hợp cho quảng cáo ngoài trời." },
                      { color: "text-[#E6792A]", text: "Ít chi phí nhưng hiệu quả tối đa: So với billboard hay màn hình LED, băng rôn có giá rẻ hơn nhiều nhưng vẫn tiếp cận được lượng lớn khách hàng." },
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ChevronRight className={`mt-0.5 h-4 w-4 shrink-0 ${f.color}`} />
                        <span className="!text-gray-600">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/banner-hiflex-feature.jpg"
                  alt="Băng rôn bạt Hiflex"
                  className="w-full rounded-xl object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://placehold.co/1200x400/fde68a/78350f?text=B%C4%82NG+R%C3%94N+B%E1%BA%A0T+HIFLEX";
                  }}
                />
              </div>
            )}

            {/* ══ TAB 2: LƯU Ý KHI ĐẶT HÀNG ════════════════════════════ */}
            {activeTab === "notes" && (
              <div className="space-y-10">

                {/* 1. Quy trình đặt hàng */}
                <div>
                  <p className="mb-4 text-sm font-semibold text-[#E6792A]">1. Quy trình đặt hàng</p>
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-4 md:gap-2">
                      {ORDER_STEPS.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex flex-col items-center gap-2">
                            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${i < 3 ? "bg-[#E6792A]" : "bg-gray-400"} shadow-md`}>
                              <step.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-center text-[11px] font-medium text-gray-600 max-w-[70px]">{step.label}</span>
                          </div>
                          {i < ORDER_STEPS.length - 1 && (
                            <ChevronRight className="mb-5 h-5 w-5 shrink-0 text-gray-400 hidden md:block" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Lưu ý file in */}
                <div>
                  <p className="mb-1 text-sm font-semibold text-[#E6792A]">2. Lưu ý về file in & sản phẩm</p>
                  <p className="mb-4 text-xs text-gray-600">1. TGIA khuyến khích anh chị sử dụng hệ màu CMYK để thiết kế</p>

                  {/* Color diagram */}
                  <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
                    <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
                      {[
                        { title: "HỆ MÀU RGB", sub: "R: Red  G: Green  B: Blue", src: "/images/rgb-diagram.png", placeholder: "E53E3E/ffffff?text=RGB" },
                        { title: "HỆ MÀU CMYK", sub: "C: Cyan  M: Magenta  Y: Yellow  K: Black", src: "/images/cmyk-diagram.png", placeholder: "2B6CB0/ffffff?text=CMYK" },
                      ].map((d) => (
                        <div key={d.title} className="flex flex-col items-center bg-gray-50 py-6">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={d.src}
                            alt={d.title}
                            className="mb-3 h-40 w-auto object-contain"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = `https://placehold.co/200x160/${d.placeholder}`;
                            }}
                          />
                          <p className="text-xs font-bold text-gray-700">{d.title}</p>
                          <p className="mt-1 text-[11px] text-[#E6792A]">{d.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Numbered notes */}
                  <ol className="space-y-2.5">
                    {FILE_NOTES.map((note, i) => (
                      <li key={i} className={`flex gap-2 text-xs leading-relaxed ${note.color}`}>
                        <span className="shrink-0 font-bold">{i + 2}.</span>
                        <span>{note.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* 3. Thanh toán & in ấn */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#E6792A]">3. Thanh toán & in ấn</p>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-xs leading-relaxed text-gray-600 space-y-2">
                    <p>· Đặt cọc <strong className="text-gray-800">50%</strong> giá trị đơn hàng khi xác nhận thiết kế.</p>
                    <p>· Thanh toán phần còn lại khi nhận hàng hoặc trước khi giao hàng.</p>
                    <p>· Hỗ trợ chuyển khoản ngân hàng, tiền mặt tại xưởng.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ══ TAB 3: BẢNG GIÁ ════════════════════════════════════════ */}
            {activeTab === "price" && (
              <div className="space-y-6">
                <TabTitle>Tải Bảng Giá & File Chuẩn</TabTitle>
                <div className="grid grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-4 gap-3">
                  {PRICE_FILES.map((f, i) => (
                    <motion.button
                      key={i}
                      id={`price-file-${i}`}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center gap-3 rounded-xl ${f.bg} p-3.5 sm:px-5 sm:py-4 shadow-md transition-colors hover:opacity-90 text-gray-800`}
                    >
                      <Download className="h-5 w-5 shrink-0 text-[#E6792A]" />
                      <div className="text-left">
                        <p className="text-xs font-bold text-gray-800">{f.label}</p>
                        <p className="text-[11px] text-gray-700">{f.sub}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  * Tải file về máy và mở bằng phần mềm tương ứng để xem bảng giá và template thiết kế chuẩn.
                </p>
              </div>
            )}

            {/* ══ TAB 4: KHÁCH HÀNG NHẬN XÉT ════════════════════════════ */}
            {activeTab === "reviews" && (
              <div className="space-y-8">

                {/* Rating overview */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  {/* Average */}
                  <div className="shrink-0 text-center">
                    <p className="text-xs text-gray-500 mb-1">Đánh Giá Trung Bình</p>
                    <p className="text-5xl font-extrabold text-gray-800">{avgRating}<span className="text-2xl text-gray-400">/5</span></p>
                    <Stars rating={Math.round(Number(avgRating))} size="h-5 w-5" />
                    <p className="mt-1 text-xs text-gray-400">({SAMPLE_REVIEWS.length} nhận xét)</p>
                  </div>

                  {/* Breakdown bars */}
                  <div className="flex-1 space-y-2">
                    {ratingBreakdown.map(({ star, pct }) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="w-3 text-right text-xs text-gray-500">{star}</span>
                        <Star className="h-3.5 w-3.5 fill-[#E6792A] text-[#E6792A]" />
                        <div className="flex-1 overflow-hidden rounded-full bg-gray-100 h-2">
                          <div
                            className="h-2 rounded-full bg-[#E6792A] transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-8 text-xs text-gray-400">{pct}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Write review */}
                  <div className="shrink-0">
                    <p className="mb-2 text-xs text-gray-500">Chia sẻ nhận xét về sản phẩm</p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setWriteReview(!writeReview)}
                      className="rounded-lg bg-[#E6792A] px-5 py-2.5 text-sm font-semibold !text-white shadow-md transition-colors"
                      style={{ color: "#ffffff" }}
                    >
                      Viết nhận xét của bạn
                    </motion.button>

                    <AnimatePresence>
                      {writeReview && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 overflow-hidden space-y-2"
                        >
                          {/* Star picker */}
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <button
                                key={s}
                                type="button"
                                onMouseEnter={() => setHoverRating(s)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setNewRating(s)}
                              >
                                <Star
                                  className={`h-5 w-5 transition-colors ${s <= (hoverRating || newRating) ? "fill-[#E6792A] text-[#E6792A]" : "fill-gray-200 text-gray-200"}`}
                                />
                              </button>
                            ))}
                          </div>
                          <textarea
                            rows={3}
                            placeholder="Nhập nhận xét của bạn..."
                            value={newReviewText}
                            onChange={(e) => setNewReviewText(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 p-2 text-xs focus:border-[#E6792A] focus:outline-none resize-none"
                          />
                          <button
                            type="button"
                            className="rounded-lg bg-[#E6792A] px-4 py-2 text-xs font-semibold text-white hover:text-[#E6792A] hover:bg-white transition-colors"
                          >
                            Gửi nhận xét
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                {/* Review list */}
                <div className="space-y-6">
                  {SAMPLE_REVIEWS.map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
                          {review.initials}
                        </div>
                        {/* Body */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Stars rating={review.rating} />
                            <span className="text-xs font-semibold text-gray-700">{review.title}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{review.content}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-[11px] text-gray-400">{review.date}</span>
                            <button type="button" className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#E6792A] transition-colors">
                              <ThumbsUp className="h-3 w-3" /> Thích
                            </button>
                            <button
                              type="button"
                              className="text-[11px] text-gray-400 hover:text-[#E6792A] transition-colors"
                              onClick={() => setReplyTexts((prev) => ({ ...prev, [review.id]: prev[review.id] ?? "" }))}
                            >
                              Trả lời
                            </button>
                          </div>

                          {/* Reply box */}
                          {review.id in replyTexts && (
                            <div className="mt-3 space-y-2">
                              <textarea
                                rows={2}
                                placeholder="Nhập phản hồi của bạn..."
                                value={replyTexts[review.id]}
                                onChange={(e) => setReplyTexts((prev) => ({ ...prev, [review.id]: e.target.value }))}
                                className="w-full rounded-lg border border-gray-200 p-2 text-xs focus:border-[#E6792A] focus:outline-none resize-none"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border-t border-gray-100" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}