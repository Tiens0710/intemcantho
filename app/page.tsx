"use client";

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
import StoreLocationSection from "@/components/StoreLocationSection";
import WarmButton from "@/components/WarmButton";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardCheck, HandCoins, Headset, Lightbulb, Printer, ThumbsUp } from "lucide-react";
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

  const blogPosts = [
    { id: 1, title: "In tem nhãn chống nước ở Cần Thơ", date: "29 Th4", image: "/nhap.webp", excerpt: "Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm." },
    { id: 2, title: "Thiết kế in ấn danh thiếp ở Cần Thơ", date: "26 Th4", image: "/Bia-15.webp", excerpt: "Thiết kế in ấn danh thiếp vẫn là một trong những \"vũ khí nhỏ nhưng có võ\" trong kinh doanh hiện đại." },
    { id: 3, title: "Dịch vụ in ấn ấn phẩm văn phòng", date: "23 Th4", image: "/Bia-12.webp", excerpt: "In ấn ấn phẩm văn phòng là một phần quan trọng trong cách doanh nghiệp thể hiện sự chuyên nghiệp." },
    { id: 4, title: "In ấn ép nhựa giá rẻ theo yêu cầu", date: "20 Th4", image: "/Bia-14.webp", excerpt: "In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp." },
  ];

  const [blogStart, setBlogStart] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBlogStart((prev) => (prev + 2) % blogPosts.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [blogPosts.length]);

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
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
              <h2
                className="mb-0 whitespace-nowrap uppercase"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                  color: "#9A5B24",
                  letterSpacing: "0",
                }}
              >
                TẠI SAO NÊN CHỌN <span style={{ color: "#E6792A" }}>CHÚNG TÔI</span>
              </h2>
              <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-12 rounded-full" style={{ background: "#E8DED4" }} />
              <span className="h-0.5 w-20 rounded-full" style={{ background: "#E6792A" }} />
              <span className="h-0.5 w-12 rounded-full" style={{ background: "#E8DED4" }} />
            </div>
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

      {/* Why Choose Us — Cam kết chất lượng */}
      <section id="why-us" className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-white overflow-hidden">

        {/* ── Background: Dot Grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.06) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Background: Diagonal Lines ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(230,121,42,0.03) 50px, rgba(230,121,42,0.03) 51px)",
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
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 left-[10%] w-3 h-3 rounded-full pointer-events-none" style={{ background: "rgba(230,121,42,0.1)" }} />
        <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-24 right-[15%] w-2 h-2 rounded-full pointer-events-none" style={{ background: "rgba(230,121,42,0.15)" }} />
        <motion.div animate={{ y: [-7, 7, -7] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 left-[20%] w-4 h-4 rounded-full pointer-events-none" style={{ background: "rgba(230,121,42,0.08)" }} />
        <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-12 right-[8%] w-3 h-3 rounded-full pointer-events-none" style={{ background: "rgba(230,121,42,0.12)" }} />
        <div className="absolute top-1/2 left-[5%] w-5 h-5 rounded-full pointer-events-none" style={{ border: "2px solid rgba(230,121,42,0.1)" }} />
        <div className="absolute top-1/4 right-[5%] w-4 h-4 rounded-full pointer-events-none" style={{ border: "2px solid rgba(230,121,42,0.08)" }} />

        {/* ── Gradient Lines ── */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6792A]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6792A]/20 to-transparent" />

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
              <span className="h-px w-8 md:w-16" style={{ background: "linear-gradient(90deg, transparent, #E6D2BF)" }} />
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]"
                style={{ boxShadow: "0 8px 18px -16px rgba(198,106,39,0.6)" }}
              >
                <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                Vì sao chọn Intem Cần Thơ?
              </span>
              <span className="h-px w-8 md:w-16" style={{ background: "linear-gradient(270deg, transparent, #E6D2BF)" }} />
            </div>
            <h2
              className="home-section-title"
              style={{
                "--heading-gradient": "linear-gradient(135deg, #B08060 0%, #C08040 50%, #F0A050 100%)",
              } as React.CSSProperties}
            >
              Cam kết chất lượng – Dịch vụ tận tâm
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)" }} />
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
                  background: "linear-gradient(145deg, #E6792A 0%, #D26D23 100%)",
                  border: "none",
                  padding: "28px 20px 24px",
                  boxShadow: "0 8px 24px rgba(237, 129, 52, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {/* Icon with circle background */}
                <div
                  className="mb-5 flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                  style={{
                    width: "64px",
                    height: "64px",
                  background: "rgba(255,255,255,0.2)",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <feature.icon
style={{ width: "28px", height: "28px", color: "#FFFFFF" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="mb-3 !text-white"
                  style={{
                    fontSize: "16px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    lineHeight: 1.35,
                    textShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }}
                >
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                {/* Amber accent line */}
<div className="mb-3 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12" style={{ background: "rgba(255,255,255,0.35)" }} />
                <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <StatsSection />
        </div>
      </section>

      {/* Order Process Section */}
      <OrderProcess />

      {/* Testimonials Section — Premium Infinite Carousel */}
      <section id="testimonials" className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Background decorations */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient warm glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[70%] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(196,168,130,0.3) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 container mx-auto px-4"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 md:w-16" style={{ background: "linear-gradient(90deg, transparent, #E6D2BF)" }} />
              <span
                className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]"
                style={{ boxShadow: "0 8px 18px -16px rgba(198,106,39,0.6)" }}
              >
                <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                Đánh giá
              </span>
              <span className="h-px w-8 md:w-16" style={{ background: "linear-gradient(270deg, transparent, #E6D2BF)" }} />
            </div>
            <h2
              className="heading-gradient"
              style={{
                fontSize: "clamp(4rem, 3.2vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                "--heading-gradient": "linear-gradient(135deg, #B08060 0%, #C08040 60%, #F0A050 100%)",
              } as React.CSSProperties}
            >
              Khách hàng nói gì về chúng tôi
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)" }} />
            <p
              className="mt-4 mx-auto max-w-lg"
              style={{ fontSize: "14px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.75 }}
            >
              Hơn 2.000 khách hàng đã tin tưởng và hài lòng với dịch vụ in ấn của DuKy Printing
            </p>
          </motion.div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 md:w-44" style={{ background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.7) 30%, transparent 100%)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 md:w-44" style={{ background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.7) 30%, transparent 100%)" }} />

          {/* Single Row — Infinite Scroll */}
          <div className="testimonials-scroll-container">
            <div className="testimonials-scroll-track">
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div key={`row1-${testimonial.id}-${i}`} className="testimonial-card">
                  {/* Top accent gradient bar */}
                  <div className="testimonial-card-accent" />

                  <div className="testimonial-card-body">
                    <div className="testimonial-quote-icon">&ldquo;</div>

                    {/* Star Rating + Verified Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="testimonial-stars" style={{ marginBottom: 0 }}>
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} className="testimonial-star" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="testimonial-verified">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Đã xác minh
                      </span>
                    </div>

                    {/* Content */}
                    <p className="mb-5" style={{ fontSize: "14px", fontWeight: 400, color: "#5C4A3A", lineHeight: 1.75, fontStyle: "italic" }}>
                      {testimonial.content}
                    </p>

                    {/* Amber accent line */}
                    <div className="mb-5 w-10 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, rgba(139,94,60,0.4), rgba(139,94,60,0.1))" }} />

                    {/* Author */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                          style={{
                            boxShadow: "0 4px 14px rgba(92,61,30,0.15)",
                            border: "2.5px solid rgba(196,168,130,0.3)",
                          }}
                          loading="lazy"
                        />
                        {/* Online indicator */}
                        <div
                          className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full"
                          style={{
                            background: "#22C55E",
                            border: "2px solid #ffffff",
                            boxShadow: "0 2px 6px rgba(34,197,94,0.3)",
                          }}
                        />
                      </div>
                      <div>
                        <p style={{ fontSize: "14px", fontWeight: 700, color: "#1C1007" }}>
                          {testimonial.author}
                        </p>
                        <p style={{ fontSize: "12px", fontWeight: 400, color: "#A08060" }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section id="latest-posts" className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left — Title */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #E6D2BF)" }} />
    
              </div>
              <h2
                className="heading-gradient"
                style={{
                  fontSize: "clamp(4.5rem, 5vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                  "--heading-gradient": "linear-gradient(135deg, #B08060 0%, #C08040 40%, #F0A050 100%)",
                  filter: "drop-shadow(0 2px 6px rgba(154, 91, 36, 0.2))",
                } as React.CSSProperties}
              >
                Bài viết mới nhất
              </h2>
              <div className="mt-5 mb-5 w-24 h-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)" }} />
              <p style={{ fontSize: "15px", fontWeight: 400, color: "#6B5A48", lineHeight: 1.75 }}>Chia sẻ kiến thức và kinh nghiệm về thiết kế, in ấn tem nhãn chuyên nghiệp</p>
              <Link href="/kinh-nghiem" className="group/link inline-flex items-center gap-2.5 mt-8 text-sm font-bold transition-all duration-300 hover:gap-3.5 hover:text-amber-700" style={{ color: "#8B5E3C" }}>
                Xem tất cả bài viết
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </motion.div>
            {/* Right — 2 Cards with overlay style */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={blogStart} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {blogPosts.slice(blogStart, blogStart + 2).map((post) => (
                    <article key={post.id} className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" style={{ height: "280px", boxShadow: "0 4px 20px rgba(92, 61, 30, 0.12)" }}>
                      {/* Background Image */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Gradient Overlay — softer for text readability */}
                      <div className="absolute inset-0 transition-all duration-500" style={{ background: "linear-gradient(to top, rgba(28, 16, 7, 0.75) 0%, rgba(28, 16, 7, 0.4) 40%, rgba(28, 16, 7, 0.08) 70%, transparent 100%)" }} />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(230, 121, 42, 0.3) 0%, rgba(230, 121, 42, 0.1) 40%, transparent 60%)" }} />
                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: "rgba(139, 94, 60, 0.85)", backdropFilter: "blur(4px)" }}>{post.date}</div>
                      {/* Content Overlay — Title only */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <h3 className="mb-4 line-clamp-2 blog-card-title transition-colors duration-300" style={{ fontSize: "19px", fontWeight: 800, lineHeight: 1.3, fontFamily: "'Nunito', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" }}>{post.title}</h3>
                        <Link href="/kinh-nghiem" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-300 hover:gap-3" style={{ background: "rgba(230, 121, 42, 0.9)", color: "#ffffff", backdropFilter: "blur(4px)" }}>
                          Đọc tiếp
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {Array.from({ length: Math.ceil(blogPosts.length / 2) }).map((_, idx) => {
                  const pageStart = idx * 2;
                  const isActive = blogStart === pageStart;
                  return (
                    <button
                      key={idx}
                      onClick={() => setBlogStart(pageStart)}
                      className="relative transition-all duration-300"
                      style={{
                        width: isActive ? "32px" : "10px",
                        height: "10px",
                        borderRadius: "9999px",
                        background: isActive
                          ? "linear-gradient(90deg, #E6792A, #C66A27)"
                          : "rgba(139, 94, 60, 0.2)",
                        boxShadow: isActive ? "0 2px 8px rgba(198, 106, 39, 0.4)" : "none",
                      }}
                      aria-label={`Chuyển sang trang ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section — Infinite Logo Ticker */}
      <PartnerCarousel />

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
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #E6D2BF)" }} />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B5E3C]" style={{ boxShadow: "0 8px 18px -16px rgba(198,106,39,0.6)" }}>
                  <span className="h-2 w-2 rounded-full bg-[#E6792A]" />
                  Liên hệ
                </span>
              </div>
              <h2
                className="heading-gradient"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                  "--heading-gradient": "linear-gradient(135deg, #B08060 0%, #C08040 60%, #F0A050 100%)",
                } as React.CSSProperties}
              >
                Liên Hệ Với Chúng Tôi
              </h2>
              <div className="mt-4 mb-8 w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)" }} />

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
              {/* Overlay FAQ image placed above the existing character image */}
              <img
                src="/faq.png"
                alt="FAQ overlay"
                aria-hidden="true"
                className="absolute z-20 left-3 bottom-20 md:left-26 h-[400px] md:h-[600px] w-auto object-contain pointer-events-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

          </div>
        </div>
      </section>


      <StoreLocationSection />

      {/* Footer */}
      <Footer />

      {/* Onboarding Modal */}
      <OnboardingModal />

    </motion.div>
  );
}



