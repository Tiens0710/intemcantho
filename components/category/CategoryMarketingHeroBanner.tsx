"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CircleCheck, type LucideIcon } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href: string;
  schemaItem?: string;
};

type HeroAction = {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: "primary" | "outline";
};

type PriceCard = {
  label: string;
  amount: string;
  currency: string;
};

type CategoryMarketingHeroBannerProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  breadcrumbs: BreadcrumbItem[];
  title: string;
  accentTitle: string;
  tagline: string;
  description: ReactNode;
  price: PriceCard;
  highlights: string[];
  actions: HeroAction[];
  ariaLabel: string;
  contentTop?: string;
  contentLeft?: string;
  contentWidth?: string;
  featureMarginTop?: string;
};

export default function CategoryMarketingHeroBanner({
  backgroundSrc,
  backgroundAlt,
  breadcrumbs,
  title,
  accentTitle,
  tagline,
  description,
  price,
  highlights,
  actions,
  ariaLabel,
  contentTop = "clamp(8rem, 16vh, 11rem)",
  contentLeft = "clamp(0.5rem, 3vw, 3rem)",
  contentWidth = "min(45rem, calc(100vw - 3rem))",
  featureMarginTop = "clamp(2.25rem, 5vh, 4.25rem)",
}: CategoryMarketingHeroBannerProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.schemaItem ?? item.href,
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        preload
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div
        aria-label={ariaLabel}
        style={{
          position: "absolute",
          top: contentTop,
          left: contentLeft,
          zIndex: 20,
          width: contentWidth,
          color: "#9a5b24",
          pointerEvents: "none",
          textShadow: "0 2px 8px rgba(255,255,255,0.75)",
        }}
      >
        <h1
          style={{
            margin: 0,
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(2.35rem, 4.8vw, 5.1rem)",
            lineHeight: 1,
            fontWeight: 700,
            display: "flex",
            flexWrap: "wrap",
            columnGap: "0.18em",
            letterSpacing: "0",
            textTransform: "uppercase",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>{title}</span>
          <span
            style={{
              color: "#d06d08",
              whiteSpace: "nowrap",
              textShadow: "0 2px 8px rgba(255,255,255,0.65)",
            }}
          >
            {accentTitle}
          </span>
        </h1>

        <p
          style={{
            margin: "1.35rem 0 0",
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(0.9rem, 1.8vw, 1.8rem)",
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "0",
            maxWidth: "min(30rem, calc(100vw - 3rem))",
          }}
        >
          {tagline}
        </p>

        <p
          style={{
            margin: "0.95rem 0 0",
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            maxWidth: "min(40rem, calc(100vw - 3rem))",
            color: "#1f1a16",
            fontSize: "clamp(1rem, 1.45vw, 1.35rem)",
            lineHeight: 1.32,
            fontWeight: 400,
            letterSpacing: "0",
            textShadow: "0 1px 5px rgba(255,255,255,0.72)",
          }}
        >
          {description}
        </p>

        <div
          style={{
            marginTop: featureMarginTop,
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            width: "min(43rem, calc(100vw - 3rem))",
            display: "grid",
            gridTemplateColumns: "minmax(15.5rem, 18.5rem) minmax(13rem, 1fr)",
            alignItems: "center",
            gap: "clamp(1rem, 2.4vw, 1.55rem)",
            textShadow: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "5.7rem",
              padding: "1rem clamp(1.05rem, 2.2vw, 1.45rem)",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.56))",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.95), 0 14px 34px rgba(72,49,25,0.13), 0 3px 10px rgba(72,49,25,0.08)",
              backdropFilter: "blur(18px) saturate(1.08)",
              WebkitBackdropFilter: "blur(18px) saturate(1.08)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(0.88rem, 1.15vw, 1.05rem)",
                lineHeight: 1.15,
                fontWeight: 500,
                color: "#2f2218",
              }}
            >
              {price.label}
            </div>
            <div
              style={{
                marginTop: "0.35rem",
                display: "flex",
                alignItems: "baseline",
                gap: "0.4rem",
                color: "#a94600",
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.95,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "clamp(2rem, 3.55vw, 3.35rem)" }}>{price.amount}</span>
              <span style={{ fontSize: "clamp(0.85rem, 1.35vw, 1.25rem)" }}>{price.currency}</span>
            </div>
          </div>

          <ul
            style={{
              display: "grid",
              gap: "0.42rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              color: "#211a14",
              fontSize: "clamp(0.9rem, 1.2vw, 1.08rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              minWidth: 0,
            }}
          >
            {highlights.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CircleCheck
                  aria-hidden="true"
                  fill="#c46b0d"
                  color="#ffffff"
                  strokeWidth={3}
                  style={{
                    width: "1em",
                    height: "1em",
                    flexShrink: 0,
                    filter: "drop-shadow(0 2px 4px rgba(196,107,13,0.28))",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "clamp(1rem, 2.4vh, 1.65rem)",
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
            pointerEvents: "auto",
            textShadow: "none",
          }}
        >
          {actions.map((action) => {
            const Icon = action.icon;
            const isPrimary = action.variant === "primary";

            return (
              <Link
                key={`${action.variant}-${action.label}`}
                href={action.href}
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
                  color: isPrimary ? "#ffffff" : "#E6792A",
                  background: isPrimary ? "#E6792A" : "transparent",
                  boxShadow: isPrimary
                    ? "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)"
                    : "none",
                  border: isPrimary ? "2px solid rgba(255,255,255,0.55)" : "2px solid #E6792A",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-2px)";

                  if (isPrimary) {
                    event.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(0,0,0,0.3), 0 3px 8px rgba(0,0,0,0.18)";
                    event.currentTarget.style.background = "#D26D23";
                  } else {
                    event.currentTarget.style.background = "#E6792A";
                    event.currentTarget.style.color = "#ffffff";
                    event.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)";
                  }
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";

                  if (isPrimary) {
                    event.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)";
                    event.currentTarget.style.background = "#E6792A";
                  } else {
                    event.currentTarget.style.background = "transparent";
                    event.currentTarget.style.color = "#E6792A";
                    event.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                <Icon
                  style={{ width: "16px", height: "16px", marginRight: "8px", flexShrink: 0 }}
                  strokeWidth={2.5}
                />
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>

      <nav
        aria-label="Đường dẫn trang"
        style={{
          position: "absolute",
          top: "6.5rem",
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
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={item.href} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {index > 0 && (
                  <ChevronRight
                    aria-hidden="true"
                    style={{ width: "14px", height: "14px", color: "#E6792A", opacity: 0.7 }}
                    strokeWidth={2}
                  />
                )}
                {isLast ? (
                  <span style={{ color: "#E6792A", fontWeight: 700 }} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: "#E6792A",
                      textDecoration: "none",
                      transition: "color 200ms",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = "#c4651f";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = "#E6792A";
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}
