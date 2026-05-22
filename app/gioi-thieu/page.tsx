"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderProcess from "@/components/OrderProcess";
import PartnerCarousel from "@/components/PartnerCarousel";
import StatsSection from "@/components/StatsSection";
import WarmButton from "@/components/WarmButton";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";
import { motion } from "framer-motion";
import { Award, Compass, Cpu, ShieldCheck, Users, Target, CheckCircle2, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const teamMembers = [
    {
      role: "Bộ phận Tư vấn",
      title: "Chuyên viên tư vấn chất liệu",
      desc: "Lắng nghe nhu cầu, gợi ý loại decal (giấy, nhựa, kraft, UV) phù hợp nhất với ngân sách và bề mặt dán của sản phẩm.",
      icon: Users,
    },
    {
      role: "Bộ phận Thiết kế",
      title: "Thiết kế & Kiểm File chuyên nghiệp",
      desc: "Hỗ trợ kiểm tra kỹ thuật file in (hệ màu CMYK, độ phân giải, lề cắt) giúp thành phẩm ra lò sắc nét, không bị lỗi mất góc.",
      icon: Compass,
    },
    {
      role: "Bộ phận Kỹ thuật",
      title: "Vận hành máy in & Gia công",
      desc: "Làm chủ các thiết bị in hiện đại, giám sát chặt chẽ độ sai lệch màu sắc và chất lượng bế demi tiện lợi khi lột dán.",
      icon: Cpu,
    },
  ];

  const machinery = [
    {
      name: "Máy in Offset đa màu",
      desc: "Đáp ứng các đơn hàng số lượng lớn với độ sắc nét tuyệt đối, màu sắc đồng đều và tối ưu chi phí tối đa.",
      image: "/machinery/offset_printing_machine.png",
    },
    {
      name: "Máy bế Decal kỹ thuật số",
      desc: "Công nghệ cắt chính xác mọi hình dạng phức tạp từ hình tròn, bo góc đến các nét cắt bế demi uốn lượn.",
      image: "/machinery/decal_cutting_machine.png",
    },
    {
      name: "Hệ thống phủ UV & Cán màng",
      desc: "Cán bóng/mờ tăng độ bền màu, chống nước, chống trầy xước và phủ UV định hình tạo hiệu ứng nổi sang trọng.",
      image: "/machinery/uv_coating_lamination_machine.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white text-gray-900"
    >
      <Navbar />

      <main>
        {/* Section 1: Hero Section */}
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
            className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#FFD8A8]/20 to-[#FFA94D]/10 blur-[90px] pointer-events-none"
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
            className="absolute bottom-0 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFE3E3]/15 to-[#FFD8A8]/15 blur-[110px] pointer-events-none"
          />

          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.06) 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Decorative printing layout grid lines */}
          <svg className="absolute inset-0 w-full h-full stroke-orange-500/5 pointer-events-none" aria-hidden="true">
            <defs>
              <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

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
                  <span>Giới thiệu In tem Cần Thơ</span>
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
                    In tem nhãn{" "}
                    <span className="relative inline-block text-[#E6792A]">
                      uy tín
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
                    Đồng hành cùng bạn
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
                    <strong className="font-bold text-gray-800">Thiết kế & in ấn tem nhãn decal</strong> chuyên nghiệp hàng đầu miền Tây. Chúng tôi mang tới <span className="bg-orange-50/70 px-1 py-0.5 rounded text-[#9A5B24] font-medium">giải pháp bao bì tối ưu</span> giúp định vị và nâng tầm thương hiệu Việt.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-10 space-y-6 w-full"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <WarmButton href="/lien-he" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                      Nhận tư vấn thiết kế
                    </WarmButton>

                    <Link href="/#best-seller">
                      <BrandOutlineButton
                        active
                        className="!text-sm !font-bold"
                      >
                        Xem sản phẩm mẫu
                      </BrandOutlineButton>
                    </Link>
                  </div>

                  {/* Social Proof Sub-bar */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      Miễn phí thiết kế bản mẫu
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 hidden sm:inline-block" />
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      Giao hàng nhanh toàn quốc
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
                  
                  {/* Decorative Spinning Orbit */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-[#E6792A]/15 z-0"
                  />
                  
                  {/* Decorative Offset Solid Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EE] to-[#FFF0E5] rounded-[3rem] border border-[#E6792A]/5 translate-x-4 translate-y-4 -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]" />

                  {/* Floating Badge 1: Top-Left */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-6 top-8 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-xl backdrop-blur-xl transition-all hover:scale-105"
                    style={{ boxShadow: "0 20px 40px rgba(139,94,60,0.08)" }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#E6792A] shrink-0 border border-orange-100/50">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Cam kết</p>
                      <p className="text-xs font-extrabold text-gray-800 leading-none">100% Chất lượng</p>
                    </div>
                  </motion.div>

                  {/* Floating Badge 2: Bottom-Right */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-4 bottom-8 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-xl backdrop-blur-xl transition-all hover:scale-105"
                    style={{ boxShadow: "0 20px 40px rgba(139,94,60,0.08)" }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100/50">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Hỗ trợ</p>
                      <p className="text-xs font-extrabold text-gray-800 leading-none">Tư vấn miễn phí</p>
                    </div>
                  </motion.div>

                  {/* Floating Badge 3: Middle-Left (Social Proof Card) */}
                  <motion.div
                    animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                    className="absolute -left-10 bottom-20 z-30 flex flex-col gap-2 rounded-2xl border border-white/80 bg-white/70 p-3.5 shadow-xl backdrop-blur-xl transition-all hover:scale-105"
                    style={{ boxShadow: "0 20px 45px rgba(139,94,60,0.09)" }}
                  >
                    <div className="flex items-center gap-2">
                      {/* Overlapping Initials Avatars */}
                      <div className="flex -space-x-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-[10px] font-bold text-white border-2 border-white">T</div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-[10px] font-bold text-white border-2 border-white">H</div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-[10px] font-bold text-white border-2 border-white">M</div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-[10px] font-bold text-white border-2 border-white">+</div>
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold text-gray-800 leading-none">2,000+ Khách hàng</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none mt-1">Đã tin dùng</p>
                      </div>
                    </div>
                    
                    {/* Star rating component */}
                    <div className="flex items-center gap-1 border-t border-gray-100/60 pt-1.5 mt-0.5">
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-[#E6792A]">5.0/5.0</span>
                    </div>
                  </motion.div>

                  {/* Image Container with 3D Tilt Effect on Hover */}
                  <motion.div
                    whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 180, damping: 12 }}
                    className="relative w-[95%] aspect-square z-10 cursor-pointer overflow-visible flex items-center justify-center"
                  >
                    {/* Background Circle Image */}
                    <motion.img
                      src="/herobanner/slide3/background_nhanvat.png"
                      alt="Background Circle"
                      className="absolute w-[90%] h-[90%] object-contain z-0 pointer-events-none select-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Character Image overlay */}
                    <img
                      src="/herobanner/slide3/nhanvat.png"
                      alt="In tem Cần Thơ"
                      className="relative z-10 w-full h-[105%] object-contain select-none pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] bottom-[2.5%]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Về chúng tôi (About Us story + Stats) */}
        <section id="our-story" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-[#FFF9F2]/45 to-white">
          {/* Ambient Glowing Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#FFD8A8]/10 to-[#FFA94D]/5 blur-[70px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#FFE3E3]/10 to-[#FFD8A8]/10 blur-[80px] pointer-events-none"
          />

          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.05) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content: Journey */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-[#C8A882]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A5B24]">Về chúng tôi</span>
                </div>
                <h2 className="home-section-title mb-6" style={{ color: "#9A5B24" }}>
                  Giải pháp thiết kế & in ấn tem nhãn chuyên nghiệp
                </h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                  
                  {/* Vertical Timeline Track */}
                  <div className="relative border-l-2 border-orange-500/10 ml-4 pl-8 py-2 space-y-8">
                    {[
                      {
                        title: "Dịch vụ trọn gói từ xưởng trực tiếp",
                        desc: "Chúng tôi thiết kế và sản xuất trực tiếp không qua trung gian các sản phẩm tem nhãn decal (giấy, nhựa trong/sữa, xi bạc, kraft), hộp giấy, túi giấy, catalogue, danh thiếp..."
                      },
                      {
                        title: "Hệ thống sản xuất hiện đại",
                        desc: "Ứng dụng công nghệ in kỹ thuật số sắc nét, in offset công nghiệp công suất lớn và máy bế cắt decal laser tự động, đảm bảo mọi chi tiết thiết kế đều chuẩn xác."
                      },
                      {
                        title: "Chính sách đồng hành thiết thực",
                        desc: "Thiết kế bản mẫu miễn phí đến khi khách hàng ưng ý, hỗ trợ in test mẫu, nhận in cả số lượng ít hỗ trợ shop khởi nghiệp, và cam kết in lại miễn phí nếu phát sinh lỗi kỹ thuật."
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Glassmorphic Bubble */}
                        <div className="absolute -left-[53px] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 shadow-md backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-orange-300 group-hover:bg-white group-hover:shadow-[0_8px_20px_rgba(230,121,42,0.15)]">
                          <span className="text-xs font-extrabold text-[#E6792A] transition-transform duration-300 group-hover:scale-105">
                            {`0${idx + 1}`}
                          </span>
                        </div>
                        {/* Content */}
                        <div className="transition-all duration-300 group-hover:translate-x-1.5">
                          <h4 className="text-[15px] font-bold text-gray-800 mb-1.5 group-hover:text-[#E6792A] transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-[13.5px] text-gray-600 font-light leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
 
              {/* Right Content: Vision - Mission - Values */}
              <div className="relative">
                {/* Background decorative shapes and patterns underneath the glass cards */}
                <div className="absolute -inset-4 pointer-events-none overflow-visible -z-10">
                  {/* Glowing Blob 1 */}
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 -right-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#E6792A]/15 to-[#FFA94D]/10 blur-2xl"
                  />
                  {/* Glowing Blob 2 */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute bottom-12 -left-8 w-48 h-48 rounded-full bg-gradient-to-tr from-[#FFE3E3]/20 to-[#FFD8A8]/10 blur-3xl"
                  />

                  {/* Decorative Spinning Orbit */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] left-[10%] w-[260px] h-[260px] rounded-full border border-dashed border-[#E6792A]/15"
                  />

                  {/* Additional Dotted Print Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.15) 1.2px, transparent 1.2px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>

                <div className="grid gap-6 relative z-10">
                  {[
                    {
                      icon: Target,
                      title: "Sứ mệnh của chúng tôi",
                      desc: "Cung cấp giải pháp in ấn chuyên nghiệp, chất lượng cao, giao hàng nhanh và chi phí hợp lý để hỗ trợ mọi thương hiệu phát triển bền vững.",
                    },
                    {
                      icon: Compass,
                      title: "Tầm nhìn định hướng",
                      desc: "Trở thành biểu tượng uy tín hàng đầu tại miền Tây về thiết kế đồ họa & giải pháp in ấn tem nhãn bao bì thông minh, sáng tạo.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Giá trị cốt lõi",
                      desc: "Tận tâm phục vụ - Chất lượng cam kết - Minh bạch giá cả - Đồng hành dài lâu để xây dựng mối quan hệ đối tác bền chặt.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="flex gap-4 p-6 rounded-2xl border border-white/80 bg-white/70 shadow-xl backdrop-blur-xl transition-all duration-300"
                      style={{ boxShadow: "0 20px 40px rgba(139,94,60,0.06)" }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 border border-orange-100/50 text-[#E6792A] transition-transform duration-300 hover:rotate-6">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-[#1C1007] mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Stats section integration */}
            <StatsSection />
          </div>
        </section>

        {/* Section 3: Đội ngũ kinh nghiệm */}
        <section id="our-team" className="relative py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F2]/40 to-white overflow-hidden">
          {/* Ambient Glowing Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FFD8A8]/10 to-[#FFA94D]/5 blur-[90px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#FFE3E3]/15 to-[#FFD8A8]/10 blur-[100px] pointer-events-none"
          />

          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(230,121,42,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          
          <div className="container relative z-10 mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#E6D2BF]" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-white/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B5E3C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E6792A]" />
                  Đội ngũ chuyên nghiệp
                </span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#E6D2BF]" />
              </div>
              <h2 className="home-section-title">
                Chuyên môn vững vàng – Tận tâm vì khách hàng
              </h2>
            </motion.div>

            {/* Grid Container with Background Alignment Graphics */}
            <div className="relative max-w-5xl mx-auto">
              {/* Background alignment dashed grid line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[#E6792A]/10 -z-10 pointer-events-none hidden md:block" />
              
              {/* Background orbit behind the middle card */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-[#E6792A]/5 -z-10 pointer-events-none"
              />

              {/* Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative overflow-hidden flex flex-col rounded-3xl border border-white/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-orange-200 hover:shadow-[0_25px_60px_rgba(139,94,60,0.12)]"
                    style={{ boxShadow: "0 20px 45px rgba(139,94,60,0.06)" }}
                  >
                    {/* Inner Hover Glow Accent */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF5EE]/0 to-[#FFF0E5]/0 group-hover:from-[#FFF5EE]/50 group-hover:to-[#FFF0E5]/30 transition-all duration-500 rounded-3xl" />

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FFF5EE] to-[#FFF0E5] border border-orange-100/50 text-[#E6792A] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <member.icon className="h-5 w-5" />
                      </div>
                      
                      <span className="inline-flex items-center rounded-full border border-orange-500/10 bg-orange-50/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#A08060]">
                        {member.role}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-black text-[#1C1007] mb-3 group-hover:text-[#E6792A] transition-colors duration-300 leading-snug">
                      {member.title}
                    </h3>
                    
                    <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                      {member.desc}
                    </p>

                    {/* Bottom visual indicator line */}
                    <div className="mt-6 w-8 h-1 rounded-full bg-gradient-to-r from-orange-400 to-[#E6792A] opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Máy móc thiết bị */}
        <section id="our-machinery" className="relative py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#E6D2BF]" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E6792A]/25 bg-[#FFFDF9] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B5E3C]">
                  Cơ sở vật chất
                </span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#E6D2BF]" />
              </div>
              <h2 className="home-section-title">
                Hệ thống nhà xưởng & Công nghệ in hiện đại
              </h2>
            </motion.div>

            {/* Machinery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {machinery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-[380px] overflow-hidden rounded-3xl border border-white/80 bg-white/70 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-orange-200 hover:shadow-[0_25px_60px_rgba(139,94,60,0.15)]"
                >
                  {/* Full image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette for depth, keeping the image bright */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 pointer-events-none" />
                  
                  {/* Floating glass text panel at the bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 z-10 rounded-2xl border border-white/60 bg-white/85 backdrop-blur-md shadow-lg group-hover:bg-white/95 transition-all duration-500">
                    <h3 className="text-sm font-bold text-[#1C1007] mb-1 leading-snug group-hover:text-[#E6792A] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Cam kết chất lượng */}
        <section id="our-guarantee" className="relative py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-bl-[100px] pointer-events-none" />
              
              <div className="text-center max-w-2xl mx-auto">
                <Award className="mx-auto h-12 w-12 text-[#E6792A] mb-4" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#9a5b24] mb-4">
                  Cam kết chất lượng từ In tem Cần Thơ
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                  Để đảm bảo sự hài lòng tuyệt đối, chúng tôi cung cấp những cam kết vững chắc cho tất cả khách hàng:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "In test mẫu trước khi in số lượng lớn",
                  "Chuẩn màu thiết kế, độ sắc nét cao",
                  "Giao hàng đúng tiến độ, bảo hành bám dính",
                  "Hỗ trợ chỉnh sửa file in hoàn toàn miễn phí",
                  "Đóng gói cẩn thận, giao hàng tận nơi",
                  "Chính sách hoàn tiền/in lại nếu xảy ra lỗi sản xuất",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Quy trình làm việc */}
        <OrderProcess />

        {/* Section 7: Đối tác liên kết */}
        <PartnerCarousel />
      </main>

      <Footer />
    </motion.div>
  );
}
