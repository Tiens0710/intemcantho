"use client";

import { motion } from "framer-motion";

/**
 * PartnerCarousel — Infinite logo ticker on a clean white background.
 * All critical layout via inline styles; animation via embedded <style> tag
 * to avoid any Tailwind CSS conflicts.
 */

const PARTNERS = [
  { src: "/NHAT-TAM-e1761967849296.jpg", alt: "Nhất Tâm" },
  { src: "/MTC-e1761967872338.jpg", alt: "MTC Aquatic" },
  { src: "/con-son-e1761967835576.jpg", alt: "Con Sơn" },
  { src: "/DXMT.jpg", alt: "Đất Xanh Miền Tây" },
  { src: "/logo-yumi-1-e1761967884425.png", alt: "Yumi Foods" },
  { src: "/logo-gia-phast-noong-e1761967914774.png", alt: "Gia Phát Nông" },
  { src: "/VIET-ARGO-1.jpg", alt: "Việt Argo" },
  { src: "/FPT.jpg", alt: "FPT Polytechnic" },
];

const DOUBLED = [...PARTNERS, ...PARTNERS];

export default function PartnerCarousel() {
  return (
    <section
      id="partners"
      style={{
        position: "relative",
        padding: "4rem 0",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* ── Keyframe animation (inline to avoid Tailwind purge) ── */}
      <style>{`
        @keyframes pticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pticker-wrap:hover .pticker-track {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
          <h2
            className="home-section-title"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#9A5B24",
              fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
              letterSpacing: "0",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            ĐƯỢC TIN DÙNG BỞI <span style={{ color: "#E6792A" }}>500+ DOANH NGHIỆP</span>
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
      </div>

      {/* ── Logo Ticker ── */}
      <div className="pticker-wrap" style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="pticker-track"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "max-content",
            gap: "60px",
            animation: "pticker 35s linear infinite",
          }}
        >
          {DOUBLED.map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
              }}
            >
              {/* Square logo image */}
              <img
                src={partner.src}
                alt={partner.alt}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  flexShrink: 0,
                  display: "block",
                }}
                loading="lazy"
              />

              {/* Company name */}
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#8B5E3C",
                  fontFamily: "'Nunito', sans-serif",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                {partner.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
