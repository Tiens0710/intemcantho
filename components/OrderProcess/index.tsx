"use client";

import { motion } from "framer-motion";
import WarmButton from "@/components/WarmButton";

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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-16 md:w-20" style={{ background: "#C8A882" }} />
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#8B5E3C",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              Quy trình
            </h2>
            <span className="h-px w-16 md:w-20" style={{ background: "#C8A882" }} />
          </div>
          <p
            className="home-section-title"
            style={{
              color: "#1C1007",
            }}
          >
            Đặt hàng dễ dàng chỉ 4 bước đơn giản
          </p>
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
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  padding: "28px 24px",
                }}
              >
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
              className="flex gap-4 p-5"
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
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

      </div>
    </section>
  );
}
