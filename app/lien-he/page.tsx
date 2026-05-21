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
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-[#C8A882] md:block" />
          <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#9A5B24]">
            {eyebrow}
          </span>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-[#C8A882] md:block" />
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
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B5A48]">
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
      className="overflow-hidden rounded-lg border bg-white"
      style={{
        borderColor: isOpen ? "rgba(230,121,42,0.45)" : "rgba(222,210,194,0.75)",
        boxShadow: isOpen
          ? "0 14px 32px rgba(154,91,36,0.10)"
          : "0 6px 22px rgba(92,61,30,0.05)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#FFF8F3]"
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
            <p className="px-5 pb-5 pl-16 text-sm leading-7 text-[#6B5A48]">
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
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#FFFDF9] pt-24 md:pt-32">
          <div
            className="absolute inset-x-0 bottom-0 h-[180px] bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x opacity-[0.08]"
            aria-hidden="true"
          />
          <div className="container relative mx-auto px-4 pb-16 md:pb-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#9A5B24] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                  Liên hệ Intem Cần Thơ
                </div>
                <h1 className="max-w-3xl text-[clamp(2.3rem,5.2vw,4.6rem)] font-black leading-[1.04] tracking-[-0.01em] text-[#9A5B24]">
                  Bắt đầu dự án in ấn của bạn
                  <span className="block text-[#E6792A]">ngay hôm nay</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#5C4A3A]">
                  Gửi yêu cầu, file mẫu hoặc ý tưởng của bạn. Chúng tôi sẽ tư vấn
                  chất liệu, quy cách in và báo giá rõ ràng trước khi sản xuất.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <WarmButton
                    href="tel:0985463403"
                    size="md"
                    icon={<Phone className="h-4 w-4" />}
                  >
                    Gọi 0985 463 403
                  </WarmButton>
                  <WarmButton
                    href="mailto:thanhngan989@gmail.com"
                    size="md"
                    variant="outline"
                    icon={<Mail className="h-4 w-4" />}
                  >
                    Gửi email
                  </WarmButton>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {SERVICE_POINTS.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-lg bg-white/80 p-3 shadow-sm ring-1 ring-[#E8DED4]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E6792A]" />
                      <p className="text-xs font-semibold leading-5 text-[#5C4A3A]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-lg border border-[#E8DED4] bg-white p-5 shadow-[0_24px_70px_rgba(92,61,30,0.12)] md:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E6792A]">
                      Yêu cầu tư vấn
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-[#3D2E1E]">
                      Nhận phản hồi nhanh
                    </h2>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-lg bg-[#FFF3EA] text-[#E6792A] sm:flex">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                      Họ và tên <span className="text-[#E6792A]">*</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nhập họ và tên"
                      className="h-12 rounded-lg border-[#DED2C2] bg-[#FFFDF9] px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
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
                        className="h-12 rounded-lg border-[#DED2C2] bg-[#FFFDF9] px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                        Email
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="name@example.com"
                        className="h-12 rounded-lg border-[#DED2C2] bg-[#FFFDF9] px-4 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#5C3D1E]">
                      Nhu cầu in ấn
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Ví dụ: in tem nhãn decal nhựa, 1.000 tem, kích thước 40x60mm..."
                      className="resize-none rounded-lg border-[#DED2C2] bg-[#FFFDF9] px-4 py-3 text-sm font-semibold text-[#3D2E1E] outline-none transition focus:border-[#E6792A] focus:ring-4 focus:ring-[#E6792A]/10"
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        Đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm.
                      </motion.div>
                    ) : (
                      <motion.div key="submit" layout>
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

        <section className="border-y border-[#F0E6DC] bg-white py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  className="group rounded-lg border border-[#E8DED4] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#E6792A]/45 hover:shadow-[0_18px_38px_rgba(92,61,30,0.10)]"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF3EA] text-[#E6792A] transition-colors group-hover:bg-[#E6792A] group-hover:text-white">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#A08060]">
                    {channel.label}
                  </p>
                  <p className="mt-2 text-sm font-black leading-6 text-[#3D2E1E]">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-[#7A6A58]">
                    {channel.note}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFDF9] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Bản đồ"
              title="Ghé trực tiếp tại"
              accent="Intem Cần Thơ"
              description="Bạn có thể đến cửa hàng để xem mẫu chất liệu, trao đổi file in hoặc nhận tư vấn trực tiếp."
            />

            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-[#E8DED4] bg-white shadow-[0_20px_55px_rgba(92,61,30,0.10)] lg:grid-cols-[1fr_360px]">
              <iframe
                title="Bản đồ Intem Cần Thơ"
                src="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16&output=embed"
                className="h-[320px] w-full lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col justify-between border-t border-[#E8DED4] p-6 lg:border-l lg:border-t-0">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E6792A]">
                    Địa chỉ
                  </p>
                  <h3 className="mt-3 text-xl font-black leading-7 text-[#3D2E1E]">
                    Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ
                  </h3>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-[#E6792A]" />
                      <div>
                        <p className="text-sm font-black text-[#3D2E1E]">
                          Thứ 2 đến Thứ 7
                        </p>
                        <p className="text-sm text-[#7A6A58]">09:00 - 21:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 text-[#E6792A]" />
                      <p className="text-sm leading-6 text-[#7A6A58]">
                        Nên hẹn trước nếu bạn cần kiểm file hoặc tư vấn chất liệu chi tiết.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-7">
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

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="FAQ"
              title="Câu hỏi"
              accent="thường gặp"
              description="Một vài thông tin nhanh trước khi bạn gửi yêu cầu tư vấn hoặc báo giá."
            />
            <div className="mx-auto max-w-3xl space-y-3">
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

        <section className="relative overflow-hidden bg-[#FFF3EA] py-14 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E6792A]/30 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E6792A]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#9A5B24]/10 blur-3xl" />
          <div className="container mx-auto px-4">
            <div className="relative grid items-center gap-8 rounded-lg border border-[#E8DED4] bg-white/85 p-6 shadow-[0_18px_48px_rgba(92,61,30,0.10)] backdrop-blur md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E6792A]">
                  Sẵn sàng bắt đầu
                </p>
                <h2 className="mt-3 max-w-2xl text-2xl font-black leading-tight text-[#9A5B24] md:text-4xl">
                  Gửi file hoặc mô tả nhu cầu, chúng tôi sẽ phản hồi phương án phù hợp.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B5A48]">
                  Hotline luôn là cách nhanh nhất nếu bạn cần kiểm tra file hoặc báo giá gấp.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <WarmButton
                  href="tel:0985463403"
                  size="md"
                  icon={<Phone className="h-4 w-4" />}
                >
                  Gọi ngay
                </WarmButton>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E6792A]/25 bg-white text-[#E6792A] transition hover:bg-[#FFF3EA]"
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
    </div>
  );
}
