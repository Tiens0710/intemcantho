"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
} from "lucide-react";
import WarmButton from "@/components/WarmButton";

export default function StoreLocationSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
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
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
            <h2
              className="whitespace-normal md:whitespace-nowrap"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#E6792A",
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                margin: 0,
              }}
            >
              ĐỊA CHỈ
            </h2>
            <span className="h-px w-20 md:w-32" style={{ background: "#C8A882" }} />
          </div>
          <p
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "#1C1007",
              fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
            }}
          >
            Ghé Intem Cần Thơ Ngay
          </p>
        </motion.div>

        {/* Content Grid — equal height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          {/* Left — Store Info */}
          <div className="lg:col-span-2 flex">
            <div
              className="rounded-2xl p-5 md:p-6 flex flex-col w-full"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(222, 210, 194, 0.6)",
                boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
              }}
            >
              {/* Subtitle */}
              <div
                className="mb-2"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.25em",
                  color: "#A08060",
                }}
              >
                STORE LOCATION
              </div>

              <h3
                className="mb-0"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: "#9a5b24",
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                }}
              >
                Ghé intem Cần Thơ để
                <br />
                được tư vấn trực tiếp
              </h3>

              {/* Amber accent line */}
              <div
                className="mt-3 mb-4 w-8 h-0.5 rounded-full"
                style={{ background: "rgba(139,94,60,0.3)" }}
              />

              <ul className="space-y-3 text-sm flex-1">
                {[
                  {
                    icon: MapPin,
                    label: "Địa chỉ",
                    value: "Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ",
                  },
                  {
                    icon: Clock,
                    label: "Giờ mở cửa",
                    value: "09:00 - 21:00",
                  },
                  {
                    icon: Phone,
                    label: "Hotline",
                    value: "0985 463 403",
                    href: "tel:0985463403",
                  },
                  {
                    icon: MessageCircle,
                    label: "Zalo",
                    value: "0985 463 403",
                  },
                  // {
                  //   icon: Navigation,
                  //   label: "Google Maps",
                  //   value: "Mở bản đồ",
                  //   href: "https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16",
                  //   external: true,
                  // },
                  {
                    icon: ShieldCheck,
                    label: "Chính sách",
                    value: "Miễn phí đổi trả trong 3 ngày.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        background: "rgba(139,94,60,0.08)",
                        color: "#8B5E3C",
                      }}
                    >
                      <item.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p
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
                          target={"_blank"}
                          rel={"noreferrer"}
                          className="font-semibold text-sm transition-colors hover:opacity-80"
                          style={{ color: "#5C3D1E" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: "#5C3D1E" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <WarmButton
                  href="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16"
                  size="sm"
                  icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
                >
                  Chỉ đường đến cửa hàng
                </WarmButton>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="lg:col-span-3 flex">
            <div
              className="h-full w-full overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(222, 210, 194, 0.6)",
                boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
              }}
            >
              <iframe
                title="Bản đồ Duky Store"
                src="https://www.google.com/maps?q=122%20Nguyen%20Hien%2C%20Tan%20An%2C%20Can%20Tho&z=16&output=embed"
                className="h-[280px] w-full md:h-[360px] lg:h-full lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
