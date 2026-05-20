"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const SITE_URL = "https://intemcantho.vn";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tờ Rơi", item: `${SITE_URL}/dich-vu/to-roi` },
  ],
};

export default function ToRoiHeroBanner() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "visible" }}>
      {/* JSON-LD Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Image
        src="/toroi/background1.png"
        alt="In Tờ Rơi Cần Thơ"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Đường dẫn trang" style={{ position: "absolute", top: "6.5rem", left: "4.5rem", zIndex: 60 }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "0.5rem", listStyle: "none", margin: 0, padding: 0, fontSize: "14px", fontWeight: 500, color: "#E6792A" }}>
          <li>
            <Link href="/" style={{ color: "#E6792A", textDecoration: "none", transition: "color 200ms" }}>Trang chủ</Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight style={{ width: "14px", height: "14px", color: "#E6792A", opacity: 0.7 }} strokeWidth={2} />
          </li>
          <li>
            <span style={{ color: "#E6792A", fontWeight: 700 }} aria-current="page">Tờ Rơi</span>
          </li>
        </ol>
      </nav>

      {/* CTA Banner */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15, pointerEvents: "none", transform: "translateY(50%)" }}>
        <Image src="/standee/cta_banner.png" alt="" aria-hidden="true" width={960} height={100} style={{ width: "80%", height: "95px", display: "block", margin: "0 auto" }} />
      </div>
    </section>
  );
}