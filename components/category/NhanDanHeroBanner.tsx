"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Upload, ChevronRight } from "lucide-react";

const SITE_URL = "https://intemcantho.vn";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": SITE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "In Tem Nhãn",
      "item": `${SITE_URL}/dich-vu/nhan-dan`
    }
  ]
};

export default function NhanDanHeroBanner() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "visible" }}>
        {/* JSON-LD Breadcrumb for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <Image
          src="/nhandan/background1.jpeg"
          alt="In Tem Nhãn - Intem Cần Thơ"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Breadcrumb — top left */}
        <nav
          aria-label="Đường dẫn trang"
          style={{
            position: "absolute",
            top: "8.5rem",
            left: "4.5rem",
            zIndex: 60,
          }}
        >
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: "14px",
              fontWeight: 500,
              color: "#E6792A",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link
                href="/"
                style={{
                  color: "#E6792A",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#c4651f"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#E6792A"; }}
              >
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true" style={{ display: "flex", alignItems: "center" }}>
              <ChevronRight style={{ width: "14px", height: "14px", color: "#E6792A", opacity: 0.7 }} strokeWidth={2} />
            </li>
            <li>
              <span style={{ color: "#E6792A", fontWeight: 700 }} aria-current="page">
                In Tem Nhãn
              </span>
            </li>
          </ol>
        </nav>

        {/* Buttons — bottom left */}
        <div style={{
          position: "absolute",
          bottom: "6rem",
          left: "4.5rem",
          zIndex: 10,
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          {/* Primary: Nhận Báo Giá Nhanh */}
          <Link
            href="/lien-he"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 36px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "#E6792A",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)",
              border: "2px solid rgba(255,255,255,0.55)",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.18)";
              e.currentTarget.style.background = "#D26D23";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)";
              e.currentTarget.style.background = "#E6792A";
            }}
          >
            <FileText style={{ width: "16px", height: "16px", marginRight: "8px", flexShrink: 0 }} strokeWidth={2.5} />
            Nhận Báo Giá Nhanh
          </Link>

          {/* Outline: Gửi File Thiết Kế */}
          <Link
            href="/lien-he"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 36px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#E6792A",
              background: "transparent",
              border: "2px solid #E6792A",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E6792A";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#E6792A";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Upload style={{ width: "16px", height: "16px", marginRight: "8px", flexShrink: 0 }} strokeWidth={2.5} />
            Gửi File Thiết Kế
          </Link>
        </div>

        {/* CTA Banner — overlaps bottom edge */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 15,
          pointerEvents: "none",
          transform: "translateY(50%)",
        }}>
          <Image
            src="/nhandan/cta_banner.png"
            alt=""
            aria-hidden="true"
            width={960}
            height={100}
            style={{ width: "80%", height: "95px", display: "block", margin: "0 auto" }}
          />
        </div>
      </section>
  );
}