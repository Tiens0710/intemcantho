"use client";

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
        {/* Label with lines */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
          <span style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(90deg, transparent, #a0845c)" }} />
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", color: "#a0845c", fontFamily: "'Nunito', sans-serif" }}>
            • ĐỐI TÁC •
          </span>
          <span style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(270deg, transparent, #a0845c)" }} />
        </div>

        {/* Heading */}
        <h2 className="home-section-title" style={{ color: "#9a5b24" }}>
          Được tin dùng bởi{" "}
          <span className="home-section-title-accent">500+</span> doanh nghiệp và{" "}
          <span className="home-section-title-accent">2.000+</span> người dùng
        </h2>

        {/* Accent line */}
        <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "#a0845c", margin: "20px auto 0" }} />
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
