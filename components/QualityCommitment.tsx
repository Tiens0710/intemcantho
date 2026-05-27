  "use client";

  import { ClipboardCheck, HandCoins, Headset, Lightbulb, Printer, ThumbsUp } from "lucide-react";
  import { motion } from "framer-motion";

  const features = [
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
  ];

  export default function QualityCommitment() {
    return (
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
              <h2
                className="home-section-title whitespace-normal md:whitespace-nowrap uppercase"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "#9A5B24",
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                  letterSpacing: "0",
                }}
              >
                CAM KẾT CHẤT LƯỢNG — <span style={{ color: "#E6792A" }}>DỊCH VỤ TẬN TÂM</span>
              </h2>
              <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
            </div>
            <div className="flex items-center justify-center gap-2 mb-5">
              <motion.div
                className="h-0.5 rounded-full"
                style={{ background: "rgba(139,94,60,0.15)" }}
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="h-0.5 rounded-full"
                style={{ background: "#E6792A" }}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div
                className="h-0.5 rounded-full"
                style={{ background: "rgba(139,94,60,0.15)" }}
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Features Grid — 6 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {features.map((feature, index) => (
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
                  className="mb-3 !text-white whitespace-normal"
                  style={{
                    fontSize: "16px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    lineHeight: 1.35,
                    textShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }}
                >
                  {feature.title.replace(/\s*\n\s*/g, " ")}
                </h3>
                {/* Amber accent line */}
                <div className="mb-3 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12" style={{ background: "rgba(255,255,255,0.35)" }} />
                <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    );
}