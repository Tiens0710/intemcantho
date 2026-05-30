"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, CircleCheck, ArrowRight, type LucideIcon } from "lucide-react";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

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
        .marketing-hero-badge {
          display: inline-block !important;
          background-color: #E27D2F !important;
          color: #ffffff !important;
          font-size: clamp(0.75rem, 1.2vw, 0.95rem) !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.1em !important;
          padding: 6px 20px !important;
          border-radius: 9999px !important;
          width: fit-content !important;
          font-family: inherit !important;
          box-shadow: 0 4px 12px rgba(226, 125, 47, 0.25) !important;
          margin-bottom: 8px !important;
          pointer-events: auto !important;
        }
        .marketing-hero-title1 {
          font-family: inherit !important;
          font-style: italic !important;
          font-size: clamp(2rem, 3.9vw, 3.4rem) !important;
          font-weight: 900 !important;
          color: #FFFFFF !important;
          text-transform: uppercase !important;
          line-height: 1.2 !important;
          letter-spacing: 0.01em !important;
          text-shadow: 
            -1.8px -1.8px 0 #C66218,  
             1.8px -1.8px 0 #C66218,
            -1.8px  1.8px 0 #C66218,
             1.8px  1.8px 0 #C66218,
             2.5px  2.5px 0 #C66218,
             3.5px  3.5px 0 #C66218,
             4.5px  4.5px 0 #C66218,
             5.5px  5.5px 0 #C66218 !important;
          margin: 0 !important;
          white-space: nowrap !important;
        }
        .marketing-hero-title2 {
          font-family: 'Arial Black', 'Impact', sans-serif !important;
          font-size: clamp(1.5rem, 2.9vw, 2.6rem) !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          line-height: 1.2 !important;
          letter-spacing: 0.01em !important;
          margin: 0.2rem 0 0 !important;
          white-space: nowrap !important;
        }
        .marketing-hero-title2-part1 {
          color: #E27D2F !important;
          -webkit-text-stroke: 1px #E27D2F !important;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.05) !important;
          paint-order: stroke fill !important;
        }
        .marketing-hero-title2-part2 {
          color: #1E1E1E !important;
          -webkit-text-stroke: 1px #1E1E1E !important;
          text-shadow: 2px 2px 0px rgba(255,255,255,0.2) !important;
          paint-order: stroke fill !important;
        }
        .marketing-hero-tagline {
          display: flex !important;
          align-items: center !important;
          font-family: inherit !important;
          font-size: clamp(1rem, 1.8vw, 1.35rem) !important;
          font-weight: 700 !important;
          font-style: italic !important;
          color: #1E1E1E !important;
          margin-top: 8px !important;
          margin-bottom: 12px !important;
        }
        .marketing-hero-desc {
          font-family: inherit !important;
          color: #1E1E1E !important;
          font-size: clamp(0.85rem, 1.1vw, 1rem) !important;
          line-height: 1.5 !important;
          font-weight: 500 !important;
          margin-top: 4px !important;
          max-width: 580px !important;
          text-shadow: 0 1px 4px rgba(255,255,255,0.85) !important;
        }
        .marketing-hero-card {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          background-color: #FFFFFF !important;
          padding: 14px 18px !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04) !important;
          border: 1px solid rgba(0, 0, 0, 0.02) !important;
        }
        .marketing-hero-card-icon {
          color: #E27D2F !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
        }
        .marketing-hero-card-icon svg {
          width: 26px !important;
          height: 26px !important;
        }
        .marketing-hero-card-text {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          line-height: 1.25 !important;
          font-family: inherit !important;
        }
        .marketing-hero-card-text span {
          font-size: clamp(0.72rem, 1.1vw, 0.85rem) !important;
          font-weight: 700 !important;
          color: #1E1E1E !important;
          white-space: normal !important;
          line-height: 1.25 !important;
        }
        .marketing-hero-price-label {
          font-size: 0.76rem !important;
          font-weight: 700 !important;
          color: #4A4A4A !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .marketing-hero-price-val {
          font-size: 1.25rem !important;
          font-weight: 900 !important;
          color: #B7510E !important;
          white-space: nowrap !important;
        }
        .marketing-hero-primary-btn {
          align-items: center !important;
          appearance: none !important;
          background-color: #E6792A !important;
          border-radius: 8px !important;
          border: 2px solid #E6792A !important;
          box-shadow: rgba(230, 121, 42, 0.2) 0 2px 4px, rgba(230, 121, 42, 0.15) 0 7px 13px -3px, #C66218 0 -3px 0 inset !important;
          box-sizing: border-box !important;
          color: #ffffff !important;
          cursor: pointer !important;
          display: inline-flex !important;
          font-family: inherit !important;
          height: 48px !important;
          justify-content: center !important;
          line-height: 1 !important;
          list-style: none !important;
          overflow: hidden !important;
          padding-left: 24px !important;
          padding-right: 24px !important;
          position: relative !important;
          text-align: center !important;
          text-decoration: none !important;
          transition: box-shadow 0.15s, transform 0.15s, background-color 0.15s, color 0.15s !important;
          user-select: none !important;
          -webkit-user-select: none !important;
          touch-action: manipulation !important;
          white-space: nowrap !important;
          will-change: box-shadow, transform !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .marketing-hero-primary-btn:focus {
          outline: none !important;
          box-shadow: #C66218 0 0 0 1.5px inset, rgba(230, 121, 42, 0.4) 0 2px 4px, rgba(230, 121, 42, 0.3) 0 7px 13px -3px, #C66218 0 -3px 0 inset !important;
        }
        .marketing-hero-primary-btn:hover {
          box-shadow: rgba(230, 121, 42, 0.35) 0 4px 12px, rgba(230, 121, 42, 0.2) 0 7px 13px -3px, #F0C49E 0 -3px 0 inset !important;
          transform: translateY(-2px) !important;
          background-color: #ffffff !important;
          color: #E6792A !important;
        }
        .marketing-hero-primary-btn:active {
          box-shadow: #C66218 0 3px 7px inset !important;
          transform: translateY(2px) !important;
        }
        .marketing-hero-secondary-btn {
          align-items: center !important;
          appearance: none !important;
          background-color: #ffffff !important;
          border-radius: 8px !important;
          border: 2px solid #E6792A !important;
          box-shadow: rgba(230, 121, 42, 0.2) 0 2px 4px, rgba(230, 121, 42, 0.15) 0 7px 13px -3px, #F0C49E 0 -3px 0 inset !important;
          box-sizing: border-box !important;
          color: #E6792A !important;
          cursor: pointer !important;
          display: inline-flex !important;
          font-family: inherit !important;
          height: 48px !important;
          justify-content: center !important;
          line-height: 1 !important;
          list-style: none !important;
          overflow: hidden !important;
          padding-left: 24px !important;
          padding-right: 24px !important;
          position: relative !important;
          text-align: center !important;
          text-decoration: none !important;
          transition: box-shadow 0.15s, transform 0.15s, background-color 0.15s, color 0.15s !important;
          user-select: none !important;
          -webkit-user-select: none !important;
          touch-action: manipulation !important;
          white-space: nowrap !important;
          will-change: box-shadow, transform !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .marketing-hero-secondary-btn:focus {
          outline: none !important;
          box-shadow: #F0C49E 0 0 0 1.5px inset, rgba(230, 121, 42, 0.4) 0 2px 4px, rgba(230, 121, 42, 0.3) 0 7px 13px -3px, #F0C49E 0 -3px 0 inset !important;
        }
        .marketing-hero-secondary-btn:hover {
          box-shadow: rgba(230, 121, 42, 0.35) 0 4px 12px, rgba(230, 121, 42, 0.2) 0 7px 13px -3px, #C66218 0 -3px 0 inset !important;
          transform: translateY(-2px) !important;
          background-color: #E6792A !important;
          color: #ffffff !important;
        }
        .marketing-hero-secondary-btn:active {
          box-shadow: #F0C49E 0 3px 7px inset !important;
          transform: translateY(2px) !important;
        }
        @media (max-width: 1023px) {
          .marketing-hero-title1 {
            white-space: normal !important;
          }
          .marketing-hero-title2 {
            white-space: normal !important;
          }
          .marketing-hero-tagline {
            justify-content: center !important;
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
          pointerEvents: "none",
          ["--desktop-top" as any]: contentTop,
          ["--desktop-left" as any]: contentLeft,
          ["--desktop-width" as any]: contentWidth,
        }}
      >
        {/* Badge */}
        <div className="marketing-hero-badge">
          DUKY - PRINTING
        </div>

        {/* Title */}
        <h1 className="marketing-hero-title1">
          {title} {accentTitle}
        </h1>

        {/* Tagline */}
        <div className="marketing-hero-tagline">
          <svg width="36" height="12" viewBox="0 0 36 12" fill="none" style={{ marginRight: '12px', flexShrink: 0 }}>
            <path d="M2 3H18" stroke="#E27D2F" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M2 8H26" stroke="#E27D2F" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="8" r="2.5" fill="#E27D2F" />
          </svg>
          <span>{tagline}</span>
        </div>

        {/* Description */}
        <div className="marketing-hero-desc hidden sm:block">
          {typeof description === "string" ? (
            <span dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            description
          )}
        </div>

        {/* Highlights Grid */}
        <div
          className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pointer-events-auto w-full"
          style={{
            maxWidth: "680px",
          }}
        >
          {highlights.map((item) => (
            <div key={item} className="marketing-hero-card">
              <div className="marketing-hero-card-icon">
                <CircleCheck
                  aria-hidden="true"
                  fill="#c46b0d"
                  color="#ffffff"
                  strokeWidth={3}
                  style={{
                    width: "20px",
                    height: "20px",
                    flexShrink: 0,
                    filter: "drop-shadow(0 2px 4px rgba(196,107,13,0.28))",
                  }}
                />
              </div>
              <div className="marketing-hero-card-text">
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E1E1E" }}>{item}</span>
              </div>
            </div>
          ))}
        </div>


        {/* CTA Buttons */}
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

            if (isPrimary) {
              return (
                <Link
                  key={`${action.variant}-${action.label}`}
                  href={action.href}
                  className="marketing-hero-primary-btn w-full sm:w-auto"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ArrowRight
                    style={{ width: "16px", height: "16px", marginRight: "8px", flexShrink: 0 }}
                    strokeWidth={2.5}
                  />
                  {action.label}
                </Link>
              );
            } else {
              return (
                <Link
                  key={`${action.variant}-${action.label}`}
                  href={action.href}
                  className="marketing-hero-secondary-btn w-full sm:w-auto"
                  style={{
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
            }
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
