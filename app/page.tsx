"use client";

import ChatSearch from "@/components/ChatSearch";
import CategoryGrid from "@/components/CategoryGrid";
import QuickQuote from "@/components/QuickQuote";
import OrderProcess from "@/components/OrderProcess";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OnboardingModal from "@/components/OnboardingModal";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProductGrid from "@/components/ProductGrid";
import StatsSection from "@/components/StatsSection";
import WarmButton from "@/components/WarmButton";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ClipboardCheck, HandCoins, Headset, Lightbulb, Printer, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const testimonials = [
    {
      id: "thu",
      avatar: "/mau-2-150x150.png",
      content:
        "“In tem nhãn ở nhiều chỗ rồi, nhưng DuKy là nơi đầu tiên làm đúng màu và không làm mình chờ quá lâu. Rất ổn!”",
      author: "Chị Thu",
      role: "Chủ thương hiệu mỹ phẩm handmade",
    },
    {
      id: "trang",
      avatar: "/mau-3png-150x150.png",
      content:
        "“Đã gửi nhiều file in cho khách, DuKy hỗ trợ kiểm tra trước khi in cực kỳ kỹ. Khỏi lo bị lỗi linh tinh. Đúng gu dân thiết kế!”",
      author: "Trang",
      role: "Freelancer thiết kế",
    },
    {
      id: "lan",
      avatar: "/mau-4-150x150.png",
      content:
        "“Hình ảnh rõ nét, màu không bị lệch khi in. Giấy cầm chắc tay, không bị mỏng quá. Chất lượng đúng như đã cam kết.”",
      author: "Lan",
      role: "Giáo viên, in tài liệu workshop",
    },
    {
      id: "minh",
      avatar: "/mau-150x150.png",
      content:
        "“Mình cần in gấp cho sự kiện, DuKy phản hồi nhanh và giao đúng hẹn. Thành phẩm sạch, màu lên rất ổn.”",
      author: "Minh",
      role: "Chủ shop quà tặng",
    },
  ];
  const testimonialCount = testimonials.length;
  const [testimonialStart, setTestimonialStart] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);
  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, offset) => testimonials[(testimonialStart + offset) % testimonialCount]
  );
  const showPreviousTestimonials = () => {
    setTestimonialDirection(-1);
    setTestimonialStart((current) => (current - 1 + testimonialCount) % testimonialCount);
  };
  const showNextTestimonials = () => {
    setTestimonialDirection(1);
    setTestimonialStart((current) => (current + 1) % testimonialCount);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTestimonialDirection(1);
      setTestimonialStart((current) => (current + 1) % testimonialCount);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [testimonialCount]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white text-gray-900"
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Category Grid Section */}
      <CategoryGrid />

      {/* Quick Quote Section */}
      <QuickQuote />

      {/* Best Seller Section */}
      <section id="best-seller" className="pt-6 pb-12 md:pt-8 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured Products */}
          <ProductGrid />
        </div>
      </section>

      {/* Why Choose Us — Cam kết chất lượng */}
      <section id="why-us" className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-white overflow-hidden">

        {/* ── Background: Dot Grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.06) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Background: Diagonal Lines ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(139,94,60,0.03) 50px, rgba(139,94,60,0.03) 51px)",
          }}
        />

        {/* ── Floating Circles (animated) ── */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(196,168,130,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-12 -left-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(184,149,106,0.1) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,184,150,0.08) 0%, transparent 70%)" }}
        />

        {/* ── Decorative Dots (animated) ── */}
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 left-[10%] w-3 h-3 rounded-full pointer-events-none" style={{ background: "rgba(139,94,60,0.1)" }} />
        <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-24 right-[15%] w-2 h-2 rounded-full pointer-events-none" style={{ background: "rgba(139,94,60,0.15)" }} />
        <motion.div animate={{ y: [-7, 7, -7] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-[20%] w-4 h-4 rounded-full pointer-events-none" style={{ background: "rgba(139,94,60,0.08)" }} />
        <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-12 right-[8%] w-3 h-3 rounded-full pointer-events-none" style={{ background: "rgba(139,94,60,0.12)" }} />
        <div className="absolute top-1/2 left-[5%] w-5 h-5 rounded-full pointer-events-none" style={{ border: "2px solid rgba(139,94,60,0.1)" }} />
        <div className="absolute top-1/4 right-[5%] w-4 h-4 rounded-full pointer-events-none" style={{ border: "2px solid rgba(139,94,60,0.08)" }} />

        {/* ── Gradient Lines ── */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className="mb-3"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#A08060",
              }}
            >
              Vì sao chọn Intem Cần Thơ?
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1C1007",
              }}
            >
              Cam kết chất lượng – Dịch vụ tận tâm
            </h2>
          </motion.div>

          {/* Features Grid — 6 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              {
                icon: Headset,
                title: "Tư vấn\nđúng nhu cầu",
                desc: "Đồng hành từ ý tưởng, chất liệu đến giải pháp in phù hợp với mục tiêu sử dụng.",
              },
              {
                icon: HandCoins,
                title: "Giá cả\nminh bạch",
                desc: "Báo giá rõ ràng ngay từ đầu, hạn chế phát sinh và giữ đúng chất lượng cam kết.",
              },
              {
                icon: Lightbulb,
                title: "Thiết kế\ndễ in ấn",
                desc: "Thiết kế đẹp, đúng kỹ thuật và tối ưu khi đưa vào sản xuất thực tế.",
              },
              {
                icon: Printer,
                title: "Công nghệ\nhiện đại",
                desc: "Hệ thống in, cắt và phủ đồng bộ, đáp ứng nhiều chất liệu và số lượng.",
              },
              {
                icon: ThumbsUp,
                title: "Đúng\ntiến độ",
                desc: "Lịch sản xuất rõ ràng, chủ động cập nhật để không làm trễ kế hoạch của bạn.",
              },
              {
                icon: ClipboardCheck,
                title: "Kiểm soát\nchất lượng",
                desc: "Kiểm tra kỹ trước khi giao, đảm bảo đúng màu, đúng kích thước và thành phẩm.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                className="group flex flex-col items-center text-center rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(222, 210, 194, 0.6)",
                  padding: "28px 20px 24px",
                  boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                }}
              >
                {/* Icon with circle background */}
                <div
                  className="mb-5 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, rgba(139,94,60,0.08) 0%, rgba(139,94,60,0.15) 100%)",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 12px rgba(139,94,60,0.1)",
                  }}
                >
                  <feature.icon
                    style={{ width: "28px", height: "28px", color: "#8B5E3C" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#5C3D1E",
                    lineHeight: 1.35,
                  }}
                >
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                {/* Amber accent line */}
                <div className="mb-3 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12" style={{ background: "rgba(139,94,60,0.3)" }} />
                <p style={{ fontSize: "12px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <StatsSection />
        </div>
      </section>

      {/* Why Choose Us - Luxury Style (Thiết kế & In ấn) */}
      <section id="why-us-2" className="bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-60 bg-amber-800/70" />
              <h2 className="text-4xl md:text-5xl font-light mb-0 whitespace-nowrap !text-amber-800">
                TẠI SAO NÊN CHỌN CHÚNG TÔI
              </h2>
              <span className="h-px w-60 bg-amber-800/70" />
            </div>
            <div className="w-40 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div className="text-center lg:text-left">
              <h3 className="mb-6 font-semibold leading-none">
                <span
                  className="block"
                  style={{ color: "#9a5b24", fontSize: "clamp(2.8rem, 4vw, 4.2rem)", lineHeight: 0.95 }}
                >
                  THIẾT KẾ & IN ẤN
                </span>
                <span
                  className="block"
                  style={{ color: "#9a5b24", fontSize: "clamp(2.8rem, 4vw, 4.2rem)", lineHeight: 0.95 }}
                >
                  TEM NHÃN
                </span>
              </h3>
              <p className="mx-auto lg:mx-0 max-w-2xl text-lg font-light leading-relaxed text-gray-600">
                Chúng tôi cung cấp giải pháp thiết kế và in ấn tem nhãn chất lượng cao.
                Đa dạng chất liệu, in ấn sắc nét, bám dính bền bỉ – giúp doanh nghiệp nổi bật
                và nâng tầm giá trị sản phẩm trên thị trường.
              </p>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Link
                  href="/lien-he"
                  className="group inline-flex items-center justify-center rounded-full border-2 bg-white px-6 py-2.5 text-sm font-medium text-[#B56A29] transition-all hover:bg-amber-600 hover:border-amber-600"
                  style={{ borderColor: "#B56A29" }}
                >
                  <span className="text-[#B56A29] transition-colors group-hover:text-white">Tư Vấn Ngay</span>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] overflow-visible">
                <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-amber-700/45 blur-[1px]" />
                <div className="absolute right-16 top-24 h-3 w-3 rounded-full border border-amber-800/25" />
                <div className="absolute left-8 top-20 h-8 w-8 rounded-full bg-amber-700/70" />
                <div className="absolute bottom-10 right-12 h-6 w-6 rounded-full bg-amber-800/70" />
                <div className="relative">
                  <motion.img
                    src="/bg001.png"
                    alt="Thiết kế và in ấn tem nhãn"
                    className="relative z-10 w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.img
                    src="/sanpham002.png"
                    alt="Sản phẩm mẫu"
                    className="pointer-events-none absolute left-[40%] top-[40%] z-20 w-[120%] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 object-contain"
                    animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.img
                    src="/sanpham001.png"
                    alt="Sản phẩm mẫu"
                    className="pointer-events-none absolute left-[61%] top-[63%] z-20 w-[120%] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 object-contain"
                    animate={{ y: [8, -8, 8], rotate: [1, -1, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Process Section */}
      <OrderProcess />

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
              <h2 style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.25em", color: "#8B5E3C", margin: 0, whiteSpace: "nowrap" }}>
                Đánh giá
              </h2>
              <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
            </div>
            <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, lineHeight: 1.3, color: "#1C1007" }}>
              Khách hàng nói gì về chúng tôi
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Nav arrows */}
            <motion.button
              type="button"
              aria-label="Previous"
              onClick={showPreviousTestimonials}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(222,210,194,0.6)", boxShadow: "0 2px 8px rgba(92,61,30,0.08)", color: "#8B5E3C" }}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>

            <motion.button
              type="button"
              aria-label="Next"
              onClick={showNextTestimonials}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(222,210,194,0.6)", boxShadow: "0 2px 8px rgba(92,61,30,0.08)", color: "#8B5E3C" }}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.button>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout" custom={testimonialDirection}>
                {visibleTestimonials.map((testimonial, i) => (
                  <motion.article
                    layout
                    key={testimonial.id}
                    custom={testimonialDirection}
                    initial={{ opacity: 0, x: testimonialDirection * 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: testimonialDirection * -28 }}
                    transition={{
                      layout: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.22 },
                      x: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="group flex flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(222, 210, 194, 0.6)",
                      boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                    }}
                  >
                    {/* Quote icon */}
                    <div className="mb-4" style={{ color: "rgba(139,94,60,0.15)" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <p className="flex-1 mb-5" style={{ fontSize: "13px", fontWeight: 400, color: "#6B5744", lineHeight: 1.7 }}>
                      {testimonial.content}
                    </p>

                    {/* Amber accent line */}
                    <div className="mb-5 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12" style={{ background: "rgba(139,94,60,0.25)" }} />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-11 h-11 rounded-full object-cover"
                        style={{ boxShadow: "0 4px 12px rgba(92,61,30,0.12)" }}
                        loading="lazy"
                      />
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1C1007" }}>
                          {testimonial.author}
                        </p>
                        <p style={{ fontSize: "11px", fontWeight: 400, color: "#A08060" }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-16 md:py-20 bg-white overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 container mx-auto px-4"
          >
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
              <h2 style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.25em", color: "#8B5E3C", margin: 0, whiteSpace: "nowrap" }}>
                Đối tác
              </h2>
              <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
            </div>
            <p style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, lineHeight: 1.3, color: "#1C1007" }}>
              Niềm tin từ các thương hiệu lớn
            </p>
          </motion.div>

          {/* Logo carousel — full width for marquee */}
          <div className="px-4 md:px-8">
            <PartnerCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-20 md:py-28" style={{ background: "#FFFDF9" }}>

        {/* ── Animated background decorations ── */}

        {/* Pulsing amber glow — top right */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full bg-amber-300/20 blur-[90px]"
        />

        {/* Pulsing amber glow — bottom left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute -bottom-16 -left-16 h-[350px] w-[350px] rounded-full bg-amber-400/14 blur-[80px]"
        />

        {/* Floating small dots */}
        {[
          { left: "10%", top: "15%", size: 6, dur: 7, delay: 0 },
          { left: "25%", top: "75%", size: 4, dur: 9, delay: 1 },
          { left: "70%", top: "20%", size: 5, dur: 8, delay: 0.5 },
          { left: "85%", top: "65%", size: 7, dur: 6, delay: 2 },
          { left: "50%", top: "85%", size: 3, dur: 10, delay: 1.5 },
          { left: "15%", top: "50%", size: 5, dur: 7.5, delay: 3 },
        ].map((dot, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{ y: [-12, 12, -12], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            className="pointer-events-none absolute rounded-full bg-amber-600/20"
            style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          />
        ))}

        {/* Animated ring — slow rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-28 top-1/4 h-64 w-64 rounded-full border border-amber-700/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -left-16 bottom-1/4 h-48 w-48 rounded-full border border-dashed border-amber-600/8"
        />

        {/* Cityscape silhouette — bottom of section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[300px]"
          style={{
            backgroundImage: "url('/cityscape-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — Title + Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title */}
              <h2
                className="mb-10 text-3xl font-extrabold uppercase italic tracking-wide text-amber-800 md:text-4xl"
              >
                Liên Hệ Với Chúng Tôi
              </h2>

              {/* Form */}
              <form className="space-y-6">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Họ và tên <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-amber-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email của bạn <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-amber-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Số điện thoại <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+84xxxxxxxxx"
                    className="w-full border-0 border-b-2 border-gray-300 bg-transparent px-1 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-amber-700"
                  />
                </div>

                <WarmButton type="submit" size="md">
                  Gửi Ngay
                </WarmButton>
              </form>
            </motion.div>

            {/* Right — Character + decorative elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden items-center justify-center lg:flex"
            >
              {/* Large amber circle behind character */}
              <div className="absolute right-4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-amber-700 shadow-[0_0_80px_rgba(180,83,9,0.3)]" />

              {/* Decorative question marks */}
              <span className="absolute right-0 top-4 text-7xl font-bold text-amber-700/60">?</span>
              <span className="absolute bottom-16 right-2 text-5xl font-bold text-amber-600/40">?</span>
              <span className="absolute left-16 bottom-24 text-3xl font-bold text-amber-500/30">?</span>

              {/* Lightbulb icon top center */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                  <line x1="12" y1="2" x2="12" y2="0" stroke="#b45309" strokeWidth="2" />
                  <line x1="4.22" y1="4.22" x2="3" y2="3" stroke="#b45309" strokeWidth="2" />
                  <line x1="19.78" y1="4.22" x2="21" y2="3" stroke="#b45309" strokeWidth="2" />
                </svg>
              </div>

              {/* Character image */}
              <img
                src="/cau-hoi-700x827.png"
                alt="Nhân viên tư vấn DuKy"
                className="relative z-10 h-[620px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />

      {/* Onboarding Modal */}
      <OnboardingModal />

      {/* Chat Search */}
      <ChatSearch />
    </motion.div>
  );
}



