"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
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
  productImage?: ProductImage;
  ctaBannerSrc?: string;
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
  contentTop = "clamp(11rem, 20vh, 13rem)",
  contentLeft = "clamp(0.5rem, 3vw, 3rem)",
  contentWidth = "min(45rem, calc(100vw - 3rem))",
  featureMarginTop = "clamp(2.25rem, 5vh, 4.25rem)",
  productImage,
  ctaBannerSrc = "/standee/cta_banner.png",
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
      className="relative w-full min-h-[460px] lg:h-screen lg:min-h-[600px] overflow-hidden lg:overflow-visible flex flex-col justify-center lg:block"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .desktop-absolute-hero {
            position: absolute !important;
            top: var(--desktop-top) !important;
            left: var(--desktop-left) !important;
            width: var(--desktop-width) !important;
          }
        }
      `}} />

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
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Light overlay on mobile for better text readability */}
      <div className="absolute inset-0 bg-white/70 lg:bg-white/10 z-[1] pointer-events-none" />

      <div
        aria-label={ariaLabel}
        className="relative z-20 w-full max-w-full overflow-hidden px-4 sm:px-6 md:px-8 pt-28 pb-16 lg:p-0 flex flex-col items-start desktop-absolute-hero"
        style={{
          color: "#9a5b24",
          pointerEvents: "none",
          textShadow: "0 2px 8px rgba(255,255,255,0.75)",
          ["--desktop-top" as any]: contentTop,
          ["--desktop-left" as any]: contentLeft,
          ["--desktop-width" as any]: contentWidth,
        }}
      >
        <h1
          style={{
            margin: 0,
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 4.5vw, 4.5rem)",
            lineHeight: 1,
            fontWeight: 700,
            display: "flex",
            flexWrap: "wrap",
            columnGap: "0.18em",
            letterSpacing: "0",
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          <span className="whitespace-normal lg:whitespace-nowrap">{title}</span>
          <span
            className="whitespace-normal lg:whitespace-nowrap"
            style={{
              color: "#d06d08",
              textShadow: "0 2px 8px rgba(255,255,255,0.65)",
            }}
          >
            {accentTitle}
          </span>
        </h1>

        <p
          style={{
            margin: "1rem 0 0",
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
            boxSizing: "border-box",
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontSize: "clamp(0.85rem, 1.5vw, 1.6rem)",
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "0",
            maxWidth: "min(30rem, calc(100vw - 3rem))",
          }}
        >
          {tagline}
        </p>

        <div className="hidden sm:block">
          <p
            style={{
              margin: "0.85rem 0 0",
              paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
              boxSizing: "border-box",
              maxWidth: "min(40rem, calc(100vw - 3rem))",
              color: "#1f1a16",
              fontSize: "clamp(0.8rem, 1.1vw, 1rem)",
              lineHeight: 1.4,
              fontWeight: 400,
              letterSpacing: "0",
              textShadow: "0 1px 5px rgba(255,255,255,0.72)",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {typeof description === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              description
            )}
          </p>
        </div>

        <div
          className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 items-center text-shadow-none pointer-events-auto w-full"
          style={{
            maxWidth: "min(43rem, calc(100vw - 3rem))",
          }}
        >
          <div
            className="w-full max-w-[20rem] sm:max-w-full"
            style={{
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
            className="hidden sm:grid"
            style={{
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
          className="mt-4 sm:mt-6 w-full flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          style={{
            paddingInline: "clamp(0.25rem, 1.2vw, 1rem)",
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
                className={`inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto
                  ${isPrimary
                    ? "text-white bg-[#E6792A] border-2 border-white/55 shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-[#D26D23] hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]"
                    : "text-[#E6792A] bg-transparent border-2 border-[#E6792A] hover:bg-[#E6792A] hover:text-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)]"
                  }
                  px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-xs md:text-sm lg:px-9 lg:py-3.5
                `}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
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
        className="absolute top-20 left-4 lg:left-[4.5rem] lg:top-[8rem] z-30"
      >
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
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

      {productImage && (
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: 200,
            top: "45%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "clamp(320px, 40vw, 560px)",
            height: "auto",
            pointerEvents: "auto",
            ...productImage.style,
          }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={productImage.src}
              alt={productImage.alt}
              width={productImage.width || 560}
              height={productImage.height || 560}
              sizes="(max-width: 768px) 320px, 560px"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      )}

      {/* CTA Banner — overlaps bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 z-15 pointer-events-none translate-y-1/2 hidden sm:block"
      >
        <Image
          src={ctaBannerSrc}
          alt=""
          aria-hidden="true"
          width={960}
          height={100}
          className="mx-auto block h-16 lg:h-20 w-[90%] lg:w-[80%] object-contain"
        />
      </div>
    </section>
  );
}
