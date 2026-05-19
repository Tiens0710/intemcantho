"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WarmButton from "@/components/WarmButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Điện thoại",
    value: "0985 463 403",
    href: "tel:0985463403",
  },
  {
    icon: Mail,
    label: "Email",
    value: "thanhngan989@gmail.com",
    href: "mailto:thanhngan989@gmail.com",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7: 09:00 – 21:00",
    href: undefined,
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0985 463 403",
    href: undefined,
  },
  {
    icon: ShieldCheck,
    label: "Chính sách",
    value: "Miễn phí đổi trả trong 3 ngày",
    href: undefined,
  },
];

const FAQS = [
  {
    question: "Tôi chưa có file thiết kế thì có hỗ trợ thiết kế không?",
    answer:
      "Có. Chúng tôi cung cấp dịch vụ thiết kế chuyên nghiệp, miễn phí hoặc tính phí tùy gói dịch vụ. Đội ngũ thiết kế sẽ hỗ trợ bạn từ khâu ý tưởng đến file in ấn hoàn chỉnh.",
  },
  {
    question: "Tem in có chống nước, chống trầy không?",
    answer:
      "Có. Chúng tôi cung cấp các loại tem chống nước, chống trầy, chống dầu tùy theo yêu cầu của khách hàng. Chất liệu decal nhựa và decal xi bạc phù hợp sử dụng ngoài trời.",
  },
  {
    question: "Thời gian in tem là bao lâu?",
    answer:
      "Thời gian in tem tùy thuộc vào số lượng và độ phức tạp của thiết kế. Thường từ 2–5 ngày làm việc. Đối với đơn hàng gấp, vui lòng liên hệ để được ưu tiên.",
  },
  {
    question: "Duky Printing có nhận hoàn trả tem nhãn đã in không?",
    answer:
      "Chúng tôi chỉ nhận hoàn trả nếu sản phẩm có lỗi do nhà in gây ra (sai màu, sai kích thước, lỗi in ấn). Vui lòng liên hệ trong vòng 3 ngày kể từ ngày nhận hàng.",
  },
  {
    question: "Giá in tem được tính như thế nào?",
    answer:
      "Giá in tem được tính dựa trên số lượng, kích thước, loại tem, và độ phức tạp của thiết kế. Vui lòng liên hệ hotline hoặc gửi yêu cầu qua form để nhận báo giá chi tiết.",
  },
  {
    question: "Có nhận in số lượng ít không?",
    answer:
      "Có. Chúng tôi hỗ trợ in từ số lượng nhỏ đến lớn. Đặc biệt phù hợp cho shop nhỏ, startup và doanh nghiệp muốn thử mẫu trước khi in số lượng lớn.",
  },
];

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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: isOpen
          ? "1.5px solid rgba(230, 121, 42, 0.5)"
          : "1.5px solid rgba(222, 210, 194, 0.6)",
        boxShadow: isOpen
          ? "0 4px 20px rgba(154,91,36,0.12)"
          : "0 2px 16px rgba(92, 61, 30, 0.06)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 transition-colors hover:bg-[#FFF8F3]"
      >
        <div className="flex items-center gap-4 text-left">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
            style={{
              background: isOpen
                ? "linear-gradient(135deg, #E6792A, #C66A27)"
                : "rgba(139,94,60,0.08)",
              color: isOpen ? "#fff" : "#8B5E3C",
              transition: "all 0.3s ease",
            }}
          >
            {index + 1}
          </span>
          <h3
            className="text-[15px] font-semibold"
            style={{
              color: isOpen ? "#E6792A" : "#1C1007",
              transition: "color 0.3s ease",
            }}
          >
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown
            className="w-5 h-5"
            style={{ color: isOpen ? "#E6792A" : "#8B5E3C" }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-[4.5rem]">
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#5C4A3A" }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        style={{ background: "linear-gradient(180deg, #FFFDF9 0%, #FFFFFF 100%)" }}
      >
        {/* Background decorations */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        {/* Animated circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(196,168,130,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-12 -left-20 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(184,149,106,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ── Left: Title + Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Label badge */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-px w-8"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #E6D2BF)",
                  }}
                />
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]"
                  style={{
                    boxShadow:
                      "0 8px 18px -16px rgba(198,106,39,0.6)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                  Liên hệ
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', serif",
                  background:
                    "linear-gradient(135deg, #8B5E3C 0%, #9A5B24 50%, #E6792A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Liên hệ với
                <br />
                Intem Cần Thơ
              </h1>

              {/* Accent line */}
              <div
                className="mt-4 mb-6 w-20 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)",
                }}
              />

              <p
                className="max-w-md mb-8"
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#6B5A48",
                  lineHeight: 1.75,
                }}
              >
                Hãy liên hệ ngay với chúng tôi để được tư vấn chi tiết. Đội ngũ
                chuyên gia sẵn sàng hỗ trợ bạn từ ý tưởng đến thành phẩm.
              </p>

              {/* Contact info list */}
              <div className="space-y-4">
                {CONTACT_INFO.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    style={{
                      border: "1px solid rgba(222, 210, 194, 0.6)",
                      boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                      background: "#FFFFFF",
                    }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(139,94,60,0.08) 0%, rgba(139,94,60,0.15) 100%)",
                      }}
                    >
                      <item.icon
                        className="h-4.5 w-4.5"
                        style={{ color: "#8B5E3C" }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p
                        className="mb-0.5"
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          color: "#A08060",
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-sm transition-colors hover:text-[#E6792A]"
                          style={{ color: "#1C1007" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#1C1007" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-8">
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#A08060",
                  }}
                >
                  Theo dõi
                </span>
                <div className="flex gap-3">
                  {[
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Youtube, href: "#", label: "YouTube" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        border: "1.5px solid rgba(230, 121, 42, 0.3)",
                        color: "#8B5E3C",
                        background: "transparent",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form + Business Hours ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Business Hours Card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(222, 210, 194, 0.6)",
                  boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(139,94,60,0.08)",
                      color: "#8B5E3C",
                    }}
                  >
                    <Clock className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "#1C1007",
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', serif",
                    }}
                  >
                    Thời gian làm việc
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      days: "Thứ 2 – Thứ 6",
                      hours: "09:00 – 18:00",
                      active: true,
                    },
                    {
                      days: "Thứ 7",
                      hours: "09:00 – 12:00",
                      active: true,
                    },
                    { days: "Chủ nhật", hours: "Nghỉ", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: item.active
                          ? "rgba(139,94,60,0.04)"
                          : "rgba(139,94,60,0.02)",
                        border: item.active
                          ? "1px solid rgba(230, 121, 42, 0.15)"
                          : "1px solid rgba(222, 210, 194, 0.4)",
                      }}
                    >
                      <p
                        className="mb-2"
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "#A08060",
                        }}
                      >
                        {item.days}
                      </p>
                      <p
                        className="font-bold"
                        style={{
                          fontSize: "15px",
                          color: item.active ? "#E6792A" : "#A08060",
                        }}
                      >
                        {item.hours}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(222, 210, 194, 0.6)",
                  boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                }}
              >
                <div className="mb-6">
                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', serif",
                      color: "#1C1007",
                    }}
                  >
                    Gửi yêu cầu tư vấn
                  </h3>
                  <div
                    className="mt-2 mb-0 w-12 h-0.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #E6792A, #C66A27)",
                    }}
                  />
                  <p
                    className="mt-3"
                    style={{
                      fontSize: "13px",
                      color: "#7A6A58",
                      lineHeight: 1.6,
                    }}
                  >
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 30 phút.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#5C3D1E" }}
                    >
                      Họ và tên <span style={{ color: "#E6792A" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên của bạn"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                      style={{
                        border: "1.5px solid rgba(222, 210, 194, 0.6)",
                        background: "#FFFFFF",
                        color: "#1C1007",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#5C3D1E" }}
                      >
                        Email <span style={{ color: "#E6792A" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                        style={{
                          border: "1.5px solid rgba(222, 210, 194, 0.6)",
                          background: "#FFFFFF",
                          color: "#1C1007",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#5C3D1E" }}
                      >
                        Số điện thoại <span style={{ color: "#E6792A" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+84xxxxxxxxx"
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                        style={{
                          border: "1.5px solid rgba(222, 210, 194, 0.6)",
                          background: "#FFFFFF",
                          color: "#1C1007",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#5C3D1E" }}
                    >
                      Nội dung
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mô tả nhu cầu in ấn của bạn (loại tem, số lượng, kích thước...)"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none"
                      style={{
                        border: "1.5px solid rgba(222, 210, 194, 0.6)",
                        background: "#FFFFFF",
                        color: "#1C1007",
                      }}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{
                          background: "rgba(34, 197, 94, 0.08)",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                        }}
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full"
                          style={{ background: "#22C55E", color: "#fff" }}
                        >
                          ✓
                        </div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "#16A34A" }}
                        >
                          Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div key="button" layout>
                        <WarmButton
                          type="submit"
                          size="md"
                          fullWidth
                          disabled={isSubmitting}
                          icon={
                            isSubmitting ? undefined : (
                              <ArrowRight className="h-4 w-4" />
                            )
                          }
                        >
                          {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                        </WarmButton>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MAP SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ background: "#FFFDF9" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="h-px w-8 md:w-16"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #E6D2BF)",
                }}
              />
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]"
                style={{
                  boxShadow:
                    "0 8px 18px -16px rgba(198,106,39,0.6)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                Bản đồ
              </span>
              <span
                className="h-px w-8 md:w-16"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, #E6D2BF)",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",
                background:
                  "linear-gradient(135deg, #8B5E3C 0%, #9A5B24 50%, #E6792A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vị trí cửa hàng
            </h2>
            <div
              className="mt-3 mx-auto w-20 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)",
              }}
            />
            <p
              className="mt-4 mx-auto max-w-md"
              style={{
                fontSize: "14px",
                color: "#7A6A58",
                lineHeight: 1.7,
              }}
            >
              Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ
            </p>
          </motion.div>

          {/* Map + Directions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(222, 210, 194, 0.6)",
                boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
              }}
            >
              <iframe
                title="Bản đồ Intem Cần Thơ"
                src="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16&output=embed"
                className="w-full h-[320px] md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex justify-center mt-6">
              <WarmButton
                href="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16"
                size="sm"
                variant="outline"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Chỉ đường đến cửa hàng
              </WarmButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="h-px w-8 md:w-16"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #E6D2BF)",
                }}
              />
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]"
                style={{
                  boxShadow:
                    "0 8px 18px -16px rgba(198,106,39,0.6)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                FAQ
              </span>
              <span
                className="h-px w-8 md:w-16"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, #E6D2BF)",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",
                background:
                  "linear-gradient(135deg, #8B5E3C 0%, #9A5B24 50%, #E6792A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Câu hỏi thường gặp
            </h2>
            <div
              className="mt-3 mx-auto w-20 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)",
              }}
            />
            <p
              className="mt-4 mx-auto max-w-lg"
              style={{
                fontSize: "14px",
                color: "#7A6A58",
                lineHeight: 1.75,
              }}
            >
              Những giải đáp nhanh cho các thắc mắc phổ biến nhất của khách hàng
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, index) => (
              <FAQAccordion
                key={index}
                faq={faq}
                index={index}
                isOpen={expandedFaq === index}
                onToggle={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1C1007 0%, #5C3D1E 50%, #8B5E3C 100%)",
          }}
        />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",
                color: "#FFFFFF",
              }}
            >
              Sẵn sàng bắt đầu dự án in ấn?
            </h2>
            <p
              className="mx-auto max-w-md mb-8"
              style={{
                fontSize: "15px",
                color: "rgba(233,226,214,0.7)",
                lineHeight: 1.7,
              }}
            >
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất cho
              dự án của bạn.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <WarmButton
                href="tel:0985463403"
                size="md"
                icon={<Phone className="h-4 w-4" />}
              >
                Gọi ngay: 0985 463 403
              </WarmButton>
              <WarmButton
                href="mailto:thanhngan989@gmail.com"
                size="md"
                variant="white"
                icon={<Mail className="h-4 w-4" />}
              >
                Gửi email
              </WarmButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}