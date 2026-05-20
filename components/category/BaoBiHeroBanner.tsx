"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SITE_URL = "https://intemcantho.vn";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "In Bao Bì",
      item: `${SITE_URL}/dich-vu/in-bao-bi`,
    },
  ],
};

export default function BaoBiHeroBanner() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "visible",
      }}
    >
      {/* JSON-LD Breadcrumb for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Image
        src="/baobi/bg1.jpeg"
        alt="In Bao Bì - Intem Cần Thơ"
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
          top: "5.5rem",
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
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c4651f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#E6792A";
              }}
            >
              Trang chủ
            </Link>
          </li>
          <li
            aria-hidden="true"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ChevronRight
              style={{ width: "14px", height: "14px", color: "#E6792A", opacity: 0.7 }}
              strokeWidth={2}
            />
          </li>
          <li>
            <span style={{ color: "#E6792A", fontWeight: 700 }} aria-current="page">
              In Bao Bì
            </span>
          </li>
        </ol>
      </nav>

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
          src="/standee/cta_banner.png"
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
