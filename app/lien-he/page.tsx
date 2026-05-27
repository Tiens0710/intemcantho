"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WarmButton from "@/components/WarmButton";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0985 463 403",
    note: "Tư vấn nhanh trong giờ làm việc",
    href: "tel:0985463403",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thanhngan989@gmail.com",
    note: "Gửi file, yêu cầu báo giá hoặc thông tin dự án",
    href: "mailto:thanhngan989@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0985 463 403",
    note: "Phù hợp khi cần gửi hình ảnh, kích thước, mẫu in",
    href: "https://zalo.me/0985463403",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ",
    note: "Có thể ghé trực tiếp để tư vấn chất liệu và mẫu in",
    href: "https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16",
  },
];

const SERVICE_POINTS = [
  "Tư vấn chất liệu phù hợp với nhu cầu sử dụng",
  "Kiểm tra file trước khi in để hạn chế lỗi kỹ thuật",
  "Báo giá rõ ràng theo số lượng, kích thước và hoàn thiện",
];

const FAQS = [
  {
    question: "Tôi chưa có file thiết kế thì có được hỗ trợ không?",
    answer:
      "Có. Bạn có thể gửi ý tưởng, logo, nội dung cần in hoặc hình mẫu tham khảo. Đội ngũ Intem Cần Thơ sẽ tư vấn hướng thiết kế và chuẩn bị file phù hợp để in.",
  },
  {
    question: "Tem in có chống nước, chống trầy không?",
    answer:
      "Có. Tùy nhu cầu sử dụng, chúng tôi sẽ gợi ý decal giấy, decal nhựa, decal trong, cán bóng hoặc cán mờ để tăng độ bền cho sản phẩm.",
  },
  {
    question: "Thời gian hoàn thành đơn hàng là bao lâu?",
    answer:
      "Thông thường từ 2 đến 5 ngày làm việc, tùy số lượng và độ phức tạp. Với đơn cần gấp, bạn nên gọi hotline để được kiểm tra lịch sản xuất nhanh nhất.",
  },
  {
    question: "Có nhận in số lượng ít không?",
    answer:
      "Có. Chúng tôi hỗ trợ cả đơn nhỏ cho shop, startup, cá nhân và đơn số lượng lớn cho doanh nghiệp.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8A882]" />
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5E3C] shadow-sm backdrop-blur-md">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8A882]" />
        </div>
      ) : null}
      <h2 className="home-section-title">
        {title}
        {accent ? <span className="home-section-title-accent"> {accent}</span> : null}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-0.5 w-10 rounded-full bg-[#E8DED4]" />
        <span className="h-0.5 w-16 rounded-full bg-[#E6792A]" />
        <span className="h-0.5 w-10 rounded-full bg-[#E8DED4]" />
      </div>
      {description ? (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B5A48] font-light">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function FAQAccordion({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-md transition-all duration-300"
      style={{
        borderColor: isOpen ? "rgba(230,121,42,0.45)" : "rgba(222,210,194,0.4)",
        boxShadow: isOpen
          ? "0 14px 32px rgba(154,91,36,0.08)"
          : "0 6px 20px rgba(92,61,30,0.03)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left transition-colors hover:bg-[#FFF8F3]/50"
      >
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-black"
            style={{
              background: isOpen ? "#E6792A" : "#FFF3EA",
              color: isOpen ? "#FFFFFF" : "#E6792A",
            }}
          >
            {index + 1}
          </span>
          <span className="text-sm font-bold leading-6 text-[#3D2E1E]">
            {faq.question}
          </span>
        </div>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
          <ChevronDown className="h-5 w-5 text-[#9A5B24]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 pb-6 pl-16 text-sm leading-7 text-[#6B5A48] font-light border-t border-orange-500/5 pt-4">
              {faq.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    window.setTimeout(() => setIsSubmitted(false), 3500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white text-gray-900 overflow-hidden"
    >
      <Navbar />

      <main>
        {/* Section 1: Hero & Form */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F2] to-white pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Ambient Glowing Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FFD8A8]/20 to-[#FFA94D]/10 blur-[90px] pointer-events-none -z-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFE3E3]/15 to-[#FFD8A8]/15 blur-[110px] pointer-events-none -z-10"
          />

          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60 -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.06) 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative printing layout grid lines */}
          <svg className="absolute inset-0 w-full h-full stroke-orange-500/5 pointer-events-none -z-10" aria-hidden="true">
            <defs>
              <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Cityscape bottom background decoration */}
          <div
            className="absolute inset-x-0 bottom-0 h-[180px] bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x opacity-[0.05] pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div className="flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B5E3C] shadow-sm backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#E6792A] animate-pulse" />
                  <span>Liên hệ In tem Cần Thơ</span>
                  <span className="relative flex h-2 w-2 ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </motion.div>

                <h1 className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-extrabold leading-[1.12] tracking-tight text-[#2D1E12]">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="block"
                  >
                    Bắt đầu dự án in ấn{" "}
                    <span className="relative inline-block text-[#E6792A]">
                      của bạn
                      <svg className="absolute left-0 bottom-[-4px] w-full h-[8px] text-[#E6792A]/20" viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor">
                        <path d="M0,5 Q50,10 100,5" stroke="#E6792A" strokeWidth="3" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E6792A] via-[#F19349] to-[#9A5B24] leading-tight"
                  >
                    ngay hôm nay
                  </motion.span>
                </h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 relative border-l-4 pl-6"
                  style={{ borderImage: "linear-gradient(to bottom, #E6792A, #F5B075) 1 100%" }}
                >
                  <p className="text-[16px] leading-[1.8] text-gray-600 font-normal">
                    Gửi yêu cầu, file mẫu hoặc ý tưởng thiết kế của bạn. Chúng tôi sẽ tư vấn chất liệu, quy cách bế bóc decal và gửi báo giá chi tiết, tối ưu ngân sách tốt nhất.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-10 space-y-6 w-full"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <WarmButton href="tel:0985463403" size="md" icon={<Phone className="h-4 w-4" />}>
                      Gọi 0985 463 403
                    </WarmButton>

                    <WarmButton href="#catalog-download" size="md" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
                      Xem Catalogue & Mẫu
                    </WarmButton>
                  </div>

                  {/* Social Proof Checkpoints */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      Tư vấn chất liệu kỹ càng
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 hidden sm:inline-block" />
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      Kiểm tra file in miễn phí
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 hidden sm:inline-block" />
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      Báo giá chiết khấu tốt
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right Side Form (Glassmorphic Card) */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:p-8"
                style={{ boxShadow: "0 20px 50px rgba(139,94,60,0.08)" }}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E6792A]">
                      Yêu cầu tư vấn
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-[#2D1E12]">
                      Nhận phản hồi nhanh
                    </h2>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FFF5EE] to-[#FFF0E5] border border-orange-100/50 text-[#E6792A] sm:flex shadow-inner">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="w-full">
                    <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                      Họ và tên <span className="text-[#E6792A]">*</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập họ và tên"
                      className="w-full h-12 rounded-lg border-[#DED2C2] bg-white/50 px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10 shadow-sm border"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                        Số điện thoại <span className="text-[#E6792A]">*</span>
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        type="tel"
                        placeholder="0985 463 403"
                        className="w-full h-12 rounded-lg border-[#DED2C2] bg-white/50 px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10 shadow-sm border"
                      />
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                        Email
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="name@example.com"
                        className="w-full h-12 rounded-lg border-[#DED2C2] bg-white/50 px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10 shadow-sm border"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                      Nhu cầu in ấn
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Ví dụ: in tem nhãn decal nhựa, 1.000 tem, kích thước 40x60mm..."
                      className="w-full resize-none rounded-lg border-[#DED2C2] bg-white/50 px-4 py-3 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10 shadow-sm border"
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 w-full"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                        Đã gửi yêu cầu thành công. Chúng tôi sẽ liên hệ lại sớm!
                      </motion.div>
                    ) : (
                      <motion.div key="submit" layout className="w-full">
                        <WarmButton
                          type="submit"
                          size="md"
                          fullWidth
                          disabled={isSubmitting}
                          icon={<ArrowRight className="h-4 w-4" />}
                        >
                          {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                        </WarmButton>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Channels Grid */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFF5EE] via-[#FFF3EA] to-[#FFE8D6] border-y border-orange-500/20">
          {/* Ambient Glowing Blobs */}
          <div className="absolute -inset-4 pointer-events-none overflow-visible -z-10">
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#E6792A]/20 to-[#FFA94D]/10 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 -right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FFE8D6]/40 to-[#FFD8A8]/20 blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {CONTACT_CHANNELS.map((channel, index) => (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden flex flex-col rounded-3xl border-[1.5px] border-solid border-[#E6792A]/40 bg-gradient-to-br from-white/90 to-white/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-[#E6792A] hover:shadow-[0_25px_60px_rgba(230,121,42,0.15)]"
                  style={{ boxShadow: "0 15px 35px rgba(230, 121, 42, 0.06)" }}
                >
                  {/* Subtle Inner Glow Accent */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF5EE]/0 to-[#FFF0E5]/0 group-hover:from-[#FFF5EE]/50 group-hover:to-[#FFF0E5]/30 transition-all duration-500 rounded-3xl" />

                  {/* Faint Background Logo */}
                  <channel.icon className="absolute right-4 bottom-4 h-24 w-24 text-[#E6792A] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:rotate-12" />

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF8F2] to-white border border-orange-100/70 text-[#E6792A] shadow-[0_8px_16px_rgba(230,121,42,0.06)] group-hover:shadow-[0_12px_24px_rgba(230,121,42,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-gradient-to-br group-hover:from-[#E6792A] group-hover:to-[#F19349] group-hover:text-white mb-6">
                    <channel.icon className="h-6 w-6 transition-colors duration-500" />
                  </div>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/10 bg-orange-50/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9A5B24]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E6792A]" />
                      {channel.label}
                    </span>
                  </div>

                  <p className="text-lg font-black leading-snug text-[#2D1E12] mb-3 group-hover:text-[#E6792A] transition-colors duration-300 tracking-tight">
                    {channel.value}
                  </p>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-light mt-auto">
                    {channel.note}
                  </p>

                  {/* Bottom visual indicator line */}
                  <div className="mt-6 w-8 h-1 rounded-full bg-gradient-to-r from-orange-400 to-[#E6792A] opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all duration-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Catalog Banner Section (New) */}
        <section id="catalog-download" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-[#FFF8F2]/25 to-white overflow-hidden">
          {/* Ambient Glowing Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FFD8A8]/10 to-[#FFA94D]/5 blur-[90px] pointer-events-none -z-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#FFE3E3]/12 to-[#FFD8A8]/10 blur-[100px] pointer-events-none -z-10"
          />

          {/* Dot Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/85 bg-white/70 p-8 md:p-14 shadow-2xl backdrop-blur-xl" style={{ boxShadow: "0 30px 70px rgba(139,94,60,0.08)" }}>
              <div className="grid items-center gap-12 lg:grid-cols-12">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5E3C] shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-[#E6792A] animate-pulse" />
                    <span>Ấn phẩm tiếp thị</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D1E12] leading-tight">
                    Tải Catalogue Báo Giá &{" "}
                    <span className="text-[#E6792A] relative inline-block">
                      Mẫu Thiết Kế
                      <svg className="absolute left-0 bottom-[-4px] w-full h-[6px] text-[#E6792A]/20" viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor">
                        <path d="M0,5 Q50,10 100,5" stroke="#E6792A" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h2>

                  <p className="mt-6 text-sm md:text-base leading-[1.8] text-[#5C4A3A] font-light">
                    Cuốn <strong className="font-semibold text-gray-800">Catalogue giới thiệu năng lực in ấn</strong> của In tem Cần Thơ chứa đầy đủ bảng giá chi tiết, các loại chất liệu decal phổ biến (nhựa trong/sữa, giấy thường, xi bạc, kraft), các công nghệ cán màng gia công, phủ UV cùng hàng trăm mẫu thiết kế đã thực hiện thực tế.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 w-full">
                    <a
                      href="/bannercatalog/anphamtiepthi.jpeg"
                      download="InTemCanTho-Catalogue-BaoGia.jpeg"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E6792A] to-[#F19349] px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:from-[#d56d22] hover:to-[#e48338] hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
                    >
                      <Send className="h-4 w-4 rotate-45" />
                      Tải Catalogue (Ảnh)
                    </a>

                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          message: "Tôi muốn đăng ký nhận tư vấn và gửi mẫu catalogue in thử thực tế.",
                        }));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-orange-500/20 bg-white/70 px-6 text-sm font-bold text-[#E6792A] hover:bg-[#FFF8F2] hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shrink-0 shadow-sm"
                    >
                      Đăng ký nhận mẫu in thử
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-4 text-[11px] text-[#A08060] font-medium italic">
                    * Hỗ trợ in test mẫu thiết kế miễn phí trước khi quyết định in số lượng lớn.
                  </p>
                </div>

                {/* Right Mockup (3D Tilt effect) */}
                <div className="lg:col-span-5 flex justify-center relative">
                  <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
                    {/* Orbit lines decoration */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-[#E6792A]/15 z-0"
                    />

                    <motion.div
                      whileHover={{ rotateY: -8, rotateX: 6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 150, damping: 10 }}
                      className="relative w-full aspect-square z-10 cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-white/80 bg-white/30 backdrop-blur-md flex items-center justify-center p-2"
                    >
                      <img
                        src="/anphamtiepthi/catalogue/sanpham1.png"
                        alt="Catalogue in ấn thực tế"
                        className="w-full h-full object-contain rounded-xl select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                      />

                      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-md tracking-wider">
                        Mẫu Mới 2026
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Map Section */}
        <section className="bg-[#FFFDF9] py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Bản đồ"
              title="Ghé trực tiếp tại"
              accent="Intem Cần Thơ"
              description="Bạn có thể đến văn phòng để xem mẫu các chất liệu decal và cán phủ màng trực tiếp."
            />

            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 shadow-2xl backdrop-blur-xl lg:grid-cols-[1fr_360px]" style={{ boxShadow: "0 25px 60px rgba(139,94,60,0.08)" }}>
              <iframe
                title="Bản đồ Intem Cần Thơ"
                src="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16&output=embed"
                className="h-[320px] w-full lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col justify-between border-t border-[#E8DED4] p-8 lg:border-l lg:border-t-0 bg-white/50">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E6792A]">
                    Địa chỉ
                  </p>
                  <h3 className="mt-3 text-lg font-black leading-7 text-[#2D1E12]">
                    Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-[#E6792A] shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#3D2E1E]">
                          Thứ 2 đến Thứ 7
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">09:00 - 21:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 text-[#E6792A] shrink-0" />
                      <p className="text-xs leading-6 text-gray-500 font-light">
                        Nên liên hệ hẹn lịch trước nếu bạn cần kiểm tra file in thiết kế trực tiếp hoặc xem test mẫu chi tiết.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <WarmButton
                    href="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16"
                    size="sm"
                    variant="outline"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Mở chỉ đường
                  </WarmButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="FAQ"
              title="Câu hỏi"
              accent="thường gặp"
              description="Một vài thông tin phản hồi nhanh giúp bạn chuẩn bị tốt nhất trước khi đặt hàng thiết kế hoặc in."
            />
            <div className="mx-auto max-w-3xl space-y-4">
              {FAQS.map((faq, index) => (
                <FAQAccordion
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={expandedFaq === index}
                  onToggle={() => setExpandedFaq(expandedFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Bottom Call to Action */}
        <section className="relative overflow-hidden bg-[#FFF3EA] py-16 md:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6792A]/30 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E6792A]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#9A5B24]/10 blur-3xl" />
          <div className="container mx-auto px-4">
            <div className="relative grid items-center gap-8 rounded-3xl border border-white/80 bg-white/80 p-8 shadow-2xl backdrop-blur md:grid-cols-[1fr_auto] md:p-12" style={{ boxShadow: "0 20px 50px rgba(139,94,60,0.06)" }}>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E6792A]">
                  Sẵn sàng bắt đầu
                  <span className="relative flex h-2 w-2 ml-2 inline-block">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6792A]/60 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6792A]"></span>
                  </span>
                </p>
                <h2 className="mt-3 max-w-2xl text-2xl font-black leading-snug text-[#9A5B24] md:text-3xl">
                  Gửi file hoặc mô tả nhu cầu đặt in, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 font-light">
                  Nếu cần in gấp số lượng lớn lấy ngay, hãy bấm gọi hotline trực tiếp để trao đổi nhanh với bộ phận kỹ thuật xưởng in.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end shrink-0">
                <WarmButton
                  href="tel:0985463403"
                  size="md"
                  icon={<Phone className="h-4 w-4" />}
                >
                  Gọi ngay
                </WarmButton>
                <a
                  href="https://www.facebook.com/intemcantho.duky"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-white text-[#E6792A] transition hover:bg-[#FFF8F2] hover:border-orange-500/40 shadow-sm duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src="/facebook-f-logo.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
