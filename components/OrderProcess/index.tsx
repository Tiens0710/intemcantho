"use client";

import { motion } from "framer-motion";
import WarmButton from "@/components/WarmButton";
import BrandCard from "@/components/ui/BrandCard";

const steps = [
  {
    num: "01",
    icon: "/icon4buoc1.webp",
    title: "Gửi yêu cầu",
    desc: "Gửi yêu cầu in ấn qua form, Zalo hoặc gọi điện trực tiếp cho chúng tôi.",
  },
  {
    num: "02",
    icon: "/icon4buoc2.webp",
    title: "Tư vấn & báo giá",
    desc: "Đội ngũ tư vấn liên hệ, gợi ý chất liệu và gửi báo giá chi tiết.",
  },
  {
    num: "03",
    icon: "/icon4buoc3.webp",
    title: "Duyệt thiết kế",
    desc: "Nhận file demo, chỉnh sửa miễn phí đến khi bạn hoàn toàn ưng ý.",
  },
  {
    num: "04",
    icon: "/icon4buoc4.webp",
    title: "In ấn & giao hàng",
    desc: "Sản xuất nhanh, kiểm tra kỹ trước khi giao đúng hẹn tận nơi.",
  },
];

export default function OrderProcess() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "#D17515" }}>

      {/* ── Large Gradient Orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(209,117,21,0.6) 0%, rgba(209,117,21,0) 70%)", filter: "blur(2px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(255,200,120,0.25) 0%, transparent 70%)" }}
      />

      {/* ── Wave SVG Bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ opacity: 0.08 }}>
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
        </svg>
      </div>

      {/* ── Wave SVG Top ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 rotate-180">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ opacity: 0.06 }}>
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
        </svg>
      </div>

      {/* ── Animated Ripple Waves ── */}
      <motion.div
        animate={{ x: [-100, 100, -100], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-0 w-[200%] h-[300px] pointer-events-none z-0"
        style={{
          background: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.05) 80px, rgba(255,255,255,0.05) 82px)",
          filter: "blur(1px)",
        }}
      />
      <motion.div
        animate={{ x: [80, -80, 80], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[50%] left-0 w-[200%] h-[250px] pointer-events-none z-0"
        style={{
          background: "repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(255,255,255,0.04) 120px, rgba(255,255,255,0.04) 122px)",
          filter: "blur(1px)",
        }}
      />

      {/* ── Floating Animated Dots ── */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[25%] w-2.5 h-2.5 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.2)" }}
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 right-[18%] w-3.5 h-3.5 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.15)" }}
      />
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.18)" }}
      />
      <motion.div
        animate={{ y: [3, -8, 3], x: [-3, 3, -3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.22)" }}
      />
      <motion.div
        animate={{ y: [-5, 5, -5], x: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[60%] left-[60%] w-2 h-2 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto relative" style={{ maxWidth: "1200px" }}>

          {/* Golden gradient border ring */}
          <div
            className="absolute -inset-[3px] rounded-[19px] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,220,150,0.95), rgba(230,121,42,0.85) 30%, rgba(255,200,100,0.9) 60%, rgba(230,121,42,0.8) 100%)",
            }}
          />

          {/* White Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-5 md:p-10"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              boxShadow:
                "0 0 20px rgba(255,200,100,0.5), 0 0 50px rgba(230,121,42,0.3), 0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Heading */}
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
                  QUY TRÌNH <span style={{ color: "#E6792A" }}>4 BƯỚC ĐƠN GIẢN</span>
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

            {/* Desktop: Steps + CTA in a row */}
            <div className="hidden lg:grid max-w-6xl mx-auto" style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr auto 200px", alignItems: "stretch" }}>
              {steps.map((step, i) => (
                <div key={step.num} className="contents">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col h-full"
              >
                <BrandCard className="flex flex-col h-full" borderOpacity={0.3} shadowOpacity={0.08}>
                <div style={{ padding: "28px 24px", background: "#FAFAF8", borderRadius: "16px" }}>
                    <div className="relative flex justify-center mb-2">
                      <span style={{ fontSize: "22px", fontWeight: 700, color: "#5C3D1E" }} className="absolute top-0 left-0">
                        {step.num}
                      </span>
                      <img
                        src={step.icon}
                        alt={step.title}
                        width={72}
                        height={72}
                        className="w-[100px] h-[100px] object-contain"
                      />
                    </div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#8B5E3C", marginBottom: "8px" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "13px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                </div>
                </BrandCard>
              </motion.div>

                  {/* Arrow */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center self-center">
                      <span style={{ color: "#C8A882", fontSize: "20px" }}>→</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Arrow before CTA */}
              <div className="flex items-center self-center">
                <span style={{ color: "#C8A882", fontSize: "20px" }}>→</span>
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-6 text-center h-full"
                style={{
                  background: "#F5F0E8",
                  borderRadius: "16px",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1C1007", marginBottom: "8px" }}>
                  Sẵn sàng đặt in?
                </h3>
                <p style={{ fontSize: "13px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.5, marginBottom: "16px" }}>
                  Hơn 1000+ khách hàng<br />đã tin tưởng và hài lòng
                </p>
                <WarmButton href="/lien-he" size="sm" icon={<span style={{ fontSize: "14px" }}>→</span>}>
                  Gửi yêu cầu
                </WarmButton>
              </motion.div>
            </div>

            {/* Mobile / Tablet */}
            <div className="lg:hidden space-y-4 max-w-md mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <BrandCard className="flex gap-4 p-5" borderOpacity={0.3} shadowOpacity={0.08}>
                    <div style={{ background: "#FAFAF8", borderRadius: "16px", width: "100%" }} className="flex gap-4">
                  <div className="flex-shrink-0 relative">
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#5C3D1E" }} className="absolute -top-1 -left-1">
                      {step.num}
                    </span>
                    <img src={step.icon} alt={step.title} width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#8B5E3C", marginBottom: "4px" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "12px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.5 }}>
                      {step.desc}
                    </p>
                  </div>
                  </div>
                  </BrandCard>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-6 text-center"
                style={{
                  background: "#F5F0E8",
                  borderRadius: "16px",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1C1007", marginBottom: "6px" }}>
                  Sẵn sàng đặt in?
                </h3>
                <p style={{ fontSize: "12px", fontWeight: 400, color: "#7A6A58", lineHeight: 1.5, marginBottom: "14px" }}>
                  Hơn 1000+ khách hàng đã tin tưởng và hài lòng
                </p>
                <WarmButton href="/lien-he" size="sm" icon={<span style={{ fontSize: "14px" }}>→</span>}>
                  Gửi yêu cầu
                </WarmButton>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}