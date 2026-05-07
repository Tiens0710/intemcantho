"use client";

import ChatSearch from "@/components/ChatSearch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OnboardingModal from "@/components/OnboardingModal";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProductGrid from "@/components/ProductGrid";
import StatsSection from "@/components/StatsSection";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ClipboardCheck, HandCoins, Headset, Lightbulb, Mail, Phone, Printer, Send, ThumbsUp } from "lucide-react";
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

      {/* Highlights Strip */}
      <section id="highlights" className="py-2 md:py-3 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4 text-xs uppercase tracking-[0.35em] text-amber-800"
          >
            <span className="h-px w-10 bg-amber-800/40" />
            Dịch vụ
            <span className="h-px w-10 bg-amber-800/40" />
          </motion.div>
        </div>
      </section>

      {/* Services Section - Luxury Grid */}
      <section id="services" className="pt-4 pb-24 md:pt-6 md:pb-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-14"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              DỊCH VỤ CỦA DUKY
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Mang lại sự bảo đảm cho từng sản phẩm
            </p>
            <div className="w-16 h-1 bg-amber-800 mx-auto mt-6"></div>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {[
              {
                title: "IN STANDEE KHỔ LỚN",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
                layout: "md:col-span-2 lg:col-span-6 min-h-[260px] md:min-h-[320px]",
              },
              {
                title: "IN BAO BÌ",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
                layout: "md:col-span-1 lg:col-span-3 min-h-[240px] md:min-h-[260px]",
              },
              {
                title: "In tem nhãn",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
                layout: "md:col-span-1 lg:col-span-3 min-h-[240px] md:min-h-[260px]",
              },
              {
                title: "IN TỜ RƠI",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
                layout: "md:col-span-1 lg:col-span-4 min-h-[240px] md:min-h-[260px]",
              },
              {
                title: "BROCHURE TỜ GẤP",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
                layout: "md:col-span-1 lg:col-span-4 min-h-[240px] md:min-h-[260px]",
              },
              {
                title: "IN DANH THIỆP",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
                layout: "md:col-span-1 lg:col-span-4 min-h-[240px] md:min-h-[260px]",
              },
            ].map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative overflow-hidden rounded-sm border border-gray-200 bg-white ${service.layout}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
                <div className="relative h-full p-6 flex flex-col justify-end text-left">
                  <h3 className="text-3xl md:text-[2rem] font-light mb-1 leading-none">
                    {service.title}
                  </h3>

                  <span className="mt-5 inline-flex w-fit cursor-pointer items-center justify-center border border-white/60 bg-black/5 backdrop-blur-md px-6 py-2.5 text-sm font-medium text-amber-900 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-500 hover:bg-amber-800 hover:!text-white hover:border-amber-800 rounded-lg">
                    Xem thêm
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section id="best-seller" className="pt-6 pb-12 md:pt-8 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured Products */}
          <ProductGrid />
        </div>
      </section>

      {/* Why Choose Us - Luxury Style */}
      <section id="why-us" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-60 bg-amber-800/70" />
              <h2 className="text-5xl md:text-6xl font-light mb-0 whitespace-nowrap">
                TẠI SAO NÊN CHỌN CHÚNG TÔI
              </h2>
              <span className="h-px w-60 bg-amber-800/70" />
            </div>
            <div className="w-60 h-1 bg-amber-800 mx-auto"></div>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div className="text-center">
              <h3 className="mb-6 font-semibold leading-none">
                <span
                  className="block"
                  style={{ color: "#9a5b24", fontSize: "clamp(3.2rem, 4vw, 4.8rem)", lineHeight: 0.95 }}
                >
                  THIẾT KẾ &amp; IN ẤN
                </span>
                <span
                  className="block"
                  style={{ color: "#9a5b24", fontSize: "clamp(3.2rem, 4vw, 4.8rem)", lineHeight: 0.95 }}
                >
                  TEM NHÃN
                </span>
              </h3>
              <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-600">
                Chúng tôi cung cấp giải pháp thiết kế và in ấn tem nhãn chất lượng cao.
                Đa dạng chất liệu, in ấn sắc nét, bám dính bền bỉ – giúp doanh nghiệp nổi bật
                và nâng tầm giá trị sản phẩm trên thị trường.
              </p>

              <div className="mt-10 flex justify-center">
                <button
                  className="group inline-flex items-center justify-center rounded-full border-2 bg-white px-6 py-2.5 text-sm font-medium text-[#B56A29] transition-all hover:bg-amber-600 hover:border-amber-600"
                  style={{ borderColor: "#B56A29" }}
                >
                  <span className="text-[#B56A29] transition-colors group-hover:text-white">Tư Vấn Ngay</span>
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] overflow-visible">
                <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-amber-700/45 blur-[1px]" />
                <div className="absolute right-16 top-24 h-3 w-3 rounded-full border border-amber-800/25" />
                <div className="absolute left-8 top-20 h-8 w-8 rounded-full bg-amber-700/70" />
                <div className="absolute bottom-10 right-12 h-6 w-6 rounded-full bg-amber-800/70" />
                <img
                  src="/best-saler.webp"
                  alt="Thiết kế và in ấn tem nhãn"
                  className="relative z-10 w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {[
              {
                icon: Headset,
                title: "TƯ VẤN\nĐÚNG NHU CẦU",
                desc: "Đồng hành từ ý tưởng, chất liệu đến giải pháp in phù hợp với mục tiêu sử dụng.",
              },
              {
                icon: HandCoins,
                title: "GIÁ CẢ\nMINH BẠCH",
                desc: "Báo giá rõ ràng ngay từ đầu, hạn chế phát sinh và giữ đúng chất lượng cam kết.",
              },
              {
                icon: Lightbulb,
                title: "THIẾT KẾ\nDỄ IN ẤN",
                desc: "Thiết kế đẹp, đúng kỹ thuật và tối ưu khi đưa vào sản xuất thực tế.",
              },
              {
                icon: Printer,
                title: "CÔNG NGHỆ\nHIỆN ĐẠI",
                desc: "Hệ thống in, cắt và phủ đồng bộ, đáp ứng nhiều chất liệu và số lượng.",
              },
              {
                icon: ThumbsUp,
                title: "ĐÚNG\nTIẾN ĐỘ",
                desc: "Lịch sản xuất rõ ràng, chủ động cập nhật để không làm trễ kế hoạch của bạn.",
              },
              {
                icon: ClipboardCheck,
                title: "KIỂM SOÁT\nCHẤT LƯỢNG",
                desc: "Kiểm tra kỹ trước khi giao, đảm bảo đúng màu, đúng kích thước và thành phẩm.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
                className="group rounded-2xl border border-amber-900/10 bg-gradient-to-b from-white to-amber-50/5 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-700/30 hover:shadow-lg"
              >
                <feature.icon className="mx-auto mb-6 h-14 w-14 text-amber-700" strokeWidth={1.75} />
                <h3 className="mb-4 text-3xl font-semibold uppercase tracking-[0.06em] text-amber-700">
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section — premium dark counter strip */}
          <StatsSection />
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="relative py-24 md:py-32 bg-white"
        style={{
          backgroundImage: "url('/bg_quytrinhlamviec.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* White glass overlay */}
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              "/Artboard-3-copy-3-e1761969287672.png",
              "/Artboard-3-e1761969267865.png",
              "/Artboard-3-copy-e1761969278712.png",
              "/Artboard-3-copy-2-e1761969298816.png",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Quy trình bước ${i + 1}`}
                  className="h-auto w-full max-w-[280px] object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="group bg-[#f7f7f7] py-6 shadow-[inset_0_10px_22px_rgba(0,0,0,0.08)] md:py-7"
      >
        <div className="mx-auto max-w-[1120px] px-14">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-center"
          >
            <h2 className="mb-3 font-sans text-[30px] font-extrabold uppercase leading-tight tracking-normal !text-[#b86c2b] md:text-[42px]">
              ĐÁNH GIÁ CỦA KHÁCH HÀNG
            </h2>
            <div className="mx-auto h-[2px] w-[38px] bg-gray-300"></div>
          </motion.div>
          {/* Testimonials Grid */}
          <div className="relative">
            <motion.button
              type="button"
              aria-label="Previous testimonials"
              onClick={showPreviousTestimonials}
              whileHover={{ x: -6, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
              className="pointer-events-none absolute left-0 top-1/2 z-20 hidden -translate-x-10 -translate-y-1/2 items-center justify-center bg-transparent p-0 text-gray-400 opacity-0 transition-colors duration-300 hover:text-[#b86c2b] group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:flex"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </motion.button>

            <motion.button
              type="button"
              aria-label="Next testimonials"
              onClick={showNextTestimonials}
              whileHover={{ x: 6, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
              className="pointer-events-none absolute right-0 top-1/2 z-20 hidden translate-x-10 -translate-y-1/2 items-center justify-center bg-transparent p-0 text-gray-800 opacity-0 transition-colors duration-300 hover:text-[#b86c2b] group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:flex"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </motion.button>

            <div className="grid grid-cols-1 gap-7 overflow-hidden py-1 md:grid-cols-3">
              <AnimatePresence initial={false} mode="popLayout" custom={testimonialDirection}>
                {visibleTestimonials.map((testimonial) => (
                  <motion.article
                    layout
                    key={testimonial.id}
                    custom={testimonialDirection}
                    initial={{ opacity: 0, x: testimonialDirection * 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: testimonialDirection * -28 }}
                    whileHover={{ y: -2 }}
                    transition={{
                      layout: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.22, ease: "easeOut" },
                      x: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      y: { duration: 0.2, ease: "easeOut" },
                    }}
                    className="flex aspect-square min-h-[0] transform-gpu flex-col items-center justify-center rounded-[10px] border border-gray-200 bg-white px-6 py-6 text-center shadow-[0_2px_14px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(0,0,0,0.1)]"
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="mb-5 h-[76px] w-[76px] rounded-full object-cover shadow-[0_8px_18px_rgba(0,0,0,0.1)]"
                      loading="lazy"
                      decoding="async"
                    />

                    <p className="mx-auto mb-4 max-w-[285px] font-sans text-[14px] font-semibold leading-[1.5] tracking-normal text-[#666]">
                      {testimonial.content}
                    </p>

                    <p className="font-sans text-[14px] font-semibold tracking-normal text-[#222]">
                      {testimonial.author}
                      <span className="font-normal text-[#888]"> - {testimonial.role}</span>
                    </p>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-14 md:py-18 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">

          {/* Title — bold amber with side lines */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex items-center justify-center gap-4"
          >
            <span className="h-px w-40 bg-amber-800/70 md:w-60" />
            <h2 className="whitespace-nowrap text-center text-2xl font-extrabold uppercase tracking-[0.12em] text-amber-700 md:text-3xl">
              Đối Tác Của Chúng Tôi
            </h2>
            <span className="h-px w-40 bg-amber-800/70 md:w-60" />
          </motion.div>

          {/* Logo carousel — 6 per page, auto-scroll every 5s */}
          <PartnerCarousel />

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

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="mt-4 inline-flex w-fit cursor-pointer items-center justify-center border border-amber-800 bg-amber-800 backdrop-blur-md px-6 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-500 hover:bg-amber-900 hover:border-amber-900 rounded-lg"
                >
                  Gửi Ngay
                </motion.button>
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
      <div className="h-10 bg-white md:h-14" />
      <footer className="duky-footer relative overflow-hidden bg-[#b86c2b] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_12%_10%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0.2)_6%,transparent_7%),radial-gradient(circle_at_90%_8%,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2.6%,transparent_2.7%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[190px] bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x bg-[length:1300px_190px] opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x bg-[length:950px_150px] opacity-20 blur-[0.5px]" />
        <div className="pointer-events-none absolute -right-16 -top-10 z-0 h-44 w-44 rounded-full bg-amber-200/12 blur-2xl" />

        <div className="container relative z-10 mx-auto px-4 py-8 md:py-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <img
                src="/logo-white.png"
                alt="Intem Cần Thơ"
                className="mb-3 h-auto w-[180px] object-contain md:w-[210px]"
              />
              <p className="mb-5 max-w-[460px] text-sm font-medium leading-relaxed text-white md:text-base">
                Intemcantho.vn (Duky Printing) chuyên in tem nhãn decal, tem bảo hành, tem chống giả tại Cần Thơ. Với
                công nghệ in hiện đại và dịch vụ tận tâm, chúng tôi giúp sản phẩm của bạn nổi bật và chuyên nghiệp hơn.
              </p>

              <ul className="space-y-2 text-xs font-medium text-white md:text-sm">
                <li className="flex items-start gap-3">
                  <Send className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:0985463403" className="transition-colors hover:text-amber-100">0985 463 403</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:thanhngan989@gmail.com" className="transition-colors hover:text-amber-100">thanhngan989@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 lg:pt-5">
              <h4 className="mb-3 !text-lg font-semibold uppercase tracking-[0.03em] text-white md:!text-xl">CHÍNH SÁCH</h4>
              <ul className="space-y-2 text-xs font-medium text-white md:text-sm">
                <li><a href="#" className="transition-colors hover:text-amber-100">Qui Định Sử Dụng</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Bảo Mật Thông Tin</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Chính sách vận chuyển</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Đổi Trả Và Hoàn Tiền</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 lg:pt-5">
              <h4 className="mb-3 !text-lg font-semibold uppercase tracking-[0.03em] text-white md:!text-xl">TRUY CẬP</h4>
              <ul className="space-y-2 text-xs font-medium text-white md:text-sm">
                <li><a href="#" className="transition-colors hover:text-amber-100">Ấn phẩm văn phòng</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Ấn phẩm tiếp thị</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Ấn Phẩm bao bì</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Kinh nghiệm</a></li>
                <li><a href="#" className="transition-colors hover:text-amber-100">Liên hệ</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 lg:pt-1">
              <div className="mb-4 overflow-hidden rounded-sm border border-white/40 bg-white/90 shadow-xl">
                <iframe
                  title="Bản đồ Duky Printing"
                  src="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16&output=embed"
                  className="h-[210px] w-full md:h-[240px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded bg-gradient-to-b from-amber-200 to-amber-500 px-6 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 md:text-sm">
                  Tư vấn
                </button>
                <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315C9E] text-base font-bold text-white">f</a>
                <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0f80] text-base font-bold text-white">i</a>
                <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d31616] text-base font-bold text-white">▶</a>
                <a href="#" aria-label="Pinterest" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c70820] text-base font-bold text-white">p</a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/30">
          <div className="container mx-auto flex items-center px-4 py-3">
            <p className="text-xs font-medium text-white md:text-sm">Website designed by Duky Agency</p>
          </div>
        </div>
      </footer>

      {/* Onboarding Modal */}
      <OnboardingModal />

      {/* Chat Search */}
      <ChatSearch />
    </motion.div>
  );
}



