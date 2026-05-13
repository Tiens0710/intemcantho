import React from "react";
import Image from "next/image";
import Link from "next/link";
interface BannerPageProps {
  className?: string;
}

export const BannerPage = ({ className }: BannerPageProps) => {
  return (
    <div
      className={`fanpage-card w-full max-w-[400px] rounded-[10px] p-[3px] flex flex-col overflow-hidden ${
        className || ""
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.12))",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {/* Inner content container */}
      <div className="bg-white/90 rounded-[8px] p-3 flex flex-col backdrop-blur-sm">
      {/* 1. Banner Image */}
      <div className="relative h-[160px] w-full bg-gray-100 rounded-[8px] overflow-hidden">
        <Image
          src="/fb_bg.jpg"
          alt="Duky Collection"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>

      {/* 2. Fanpage Content Bottom */}
      <div className="pt-2 pb-1 flex items-center justify-between gap-3 px-1">
        {/* Left: Info */}
        <div className="flex items-center gap-3 flex-1 overflow-hidden">
          {/* Avatar overlapping banner */}
          <div className="w-14 h-14 bg-white rounded-full border-[3px] shadow-md overflow-hidden relative shrink-0" style={{ borderColor: "#1877F2" }}>
            <Image
              src="/fb_avt.jpg"
              alt="Duky Store Avatar"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <div className="flex-1 overflow-hidden">
            <h5
              className="font-bold text-[14px] leading-tight line-clamp-2 hover:underline cursor-pointer"
              style={{ color: "#1a1a1a" }}
            >
              <Link
                href="https://www.facebook.com/intemcantho.duky"
                style={{ color: "#1a1a1a" }}
              >
                In Tem Cần Thơ - Duky Printing
              </Link>
            </h5>
            <p className="text-[12px] mt-0.5" style={{ color: "#6b7280" }}>
              4K người theo dõi • 2 đang theo dõi
            </p>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col gap-2 shrink-0">
          <Link
            href="#"
            className="fanpage-btn-message w-[90px] h-[32px] rounded-[8px] flex items-center justify-center gap-1.5 text-[12px] font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{
              backgroundColor: "#C4854A",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(196,133,74,0.4)",
            }}
          >
            {/* Messenger icon (Facebook style) */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.836 1.466 5.37 3.74 6.993V22l3.472-1.907C10.154 20.384 11.057 20.5 12 20.5c5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm1.003 12.115l-2.553-2.724-4.97 2.724 5.46-5.798 2.608 2.724 4.915-2.724-5.46 5.798z"/>
            </svg>
            Nhắn tin
          </Link>
          <Link
            href="#"
            className="fanpage-btn-follow w-[90px] h-[32px] rounded-[8px] flex items-center justify-center gap-1.5 text-[12px] font-semibold transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{
              color: "#1a1a1a",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Follow person+ icon with dark outline */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1a1a">
              <circle cx="12" cy="8" r="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="20" y1="8" x2="20" y2="14" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="17" y1="11" x2="23" y2="11" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Theo dõi
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};