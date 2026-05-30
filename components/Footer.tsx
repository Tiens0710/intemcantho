"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BannerPage } from "./BannerPage";

/* ─── Inline SVG social icons ─── */
const FacebookIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.2 8.2h2V4.9c-.35-.05-1.55-.15-2.95-.15-2.9 0-4.9 1.8-4.9 5.1v2.85H5.1v3.7h3.25V24h3.95v-7.6h3.05l.48-3.7H12.3v-2.5c0-1.05.28-2 1.9-2Z"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="17.15" cy="6.85" r="1.25" fill="currentColor" />
  </svg>
);
const YoutubeIcon = () => (
  <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.15 7.05c-.22-.82-.86-1.46-1.67-1.68C18 5 12 5 12 5s-6 0-7.48.37c-.81.22-1.45.86-1.67 1.68C2.45 8.55 2.45 12 2.45 12s0 3.45.4 4.95c.22.82.86 1.46 1.67 1.68C6 19 12 19 12 19s6 0 7.48-.37c.81-.22 1.45-.86 1.67-1.68.4-1.5.4-4.95.4-4.95s0-3.45-.4-4.95ZM10 15.05 15.2 12 10 8.95v6.1Z"
    />
  </svg>
);
const PinterestIcon = () => (
  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.15 2.5c-5.2 0-7.85 3.62-7.85 6.65 0 1.84.7 3.48 2.2 4.1.25.1.47 0 .54-.27.05-.18.17-.66.22-.86.07-.27.04-.36-.16-.6-.43-.52-.7-1.2-.7-2.16 0-2.7 2.02-5.12 5.27-5.12 2.88 0 4.46 1.76 4.46 4.1 0 3.08-1.36 5.68-3.38 5.68-1.12 0-1.95-.92-1.68-2.05.32-1.35.95-2.8.95-3.78 0-.87-.47-1.6-1.44-1.6-1.14 0-2.06 1.18-2.06 2.76 0 1 .34 1.68.34 1.68s-1.17 4.95-1.38 5.82c-.4 1.73-.06 3.85-.03 4.06.02.12.18.15.25.06.1-.13 1.38-1.72 1.82-3.3.13-.45.72-2.8.72-2.8.36.68 1.4 1.27 2.5 1.27 3.3 0 5.55-3.02 5.55-7.05 0-3.05-2.58-5.89-6.14-5.89Z"
    />
  </svg>
);
const ShopIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default function Footer() {
  return (
    <>
      <div className="h-4 bg-white md:h-6" />
      <footer
        className="duky-footer relative overflow-hidden text-white"
        style={{ background: "url('/bg_footer.jpeg') center/cover no-repeat" }}
      >
        {/* Overlay to lighten background image */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "rgba(255, 255, 255, 0.15)" }}
        />
        {/* ── Cityscape silhouette at bottom — darker layer ── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[260px] opacity-[0.30]">
          <div className="h-full w-full bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x bg-[length:1500px_260px]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] opacity-[0.18] blur-[1px]">
          <div className="h-full w-full bg-[url('/cityscape-bg.svg')] bg-bottom bg-repeat-x bg-[length:1100px_200px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

            {/* ── Column 1: Logo + Info ── */}
            <div className="lg:col-span-4">
              <img
                src="/logo.png"
                alt="Intem Cần Thơ"
                className="mb-4 h-auto w-[150px] object-contain brightness-0 invert md:w-[180px]"
              />
              <p className="mb-6 max-w-[380px] text-[13px] leading-[1.7] text-white">
                Intemcantho.vn (In tem Cần Thơ) chuyên in tem nhãn decal,
                tem bảo hành, tem chống giả tại Cần Thơ. Với công nghệ
                in hiện đại và dịch vụ tận tâm, chúng tôi giúp sản phẩm
                của bạn nổi bật và chuyên nghiệp hơn.
              </p>

              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-white/70" />
                  <span>Lầu 1, số 122 Nguyễn Hiền, P. Tân An, TP. Cần Thơ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/70" />
                  <a href="tel:0985463403" className="transition-colors hover:text-white">0985 463 403</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-white/70" />
                  <a href="mailto:thanhngan989@gmail.com" className="transition-colors hover:text-white">thanhngan989@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* ── Column 2: Chính Sách ── */}
            <div className="lg:col-span-2 lg:pt-1">
              <h4 className="mb-6 text-[15px] font-bold uppercase tracking-[0.06em] text-white">CHÍNH SÁCH</h4>
              <ul className="space-y-3 text-[13px] text-white">
                <li>
                  <Link href="/qui-dinh-su-dung" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Qui Định Sử Dụng
                  </Link>
                </li>
                <li>
                  <Link href="/bao-mat-thong-tin" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Bảo Mật Thông Tin
                  </Link>
                </li>
                <li>
                  <Link href="/chinh-sach-van-chuyen" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Chính sách vận chuyển
                  </Link>
                </li>
                <li>
                  <Link href="/doi-tra-hoan-tien" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Đổi Trả Và Hoàn Tiền
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Column 3: Truy Cập ── */}
            <div className="lg:col-span-2 lg:pt-1">
              <h4 className="mb-6 text-[15px] font-bold uppercase tracking-[0.06em] text-white">TRUY CẬP</h4>
              <ul className="space-y-3 text-[13px] text-white">
                <li>
                  <Link href="/dich-vu/nhan-dan" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Tem nhãn Decal
                  </Link>
                </li>
                <li>
                  <Link href="/van-phong" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Ấn phẩm văn phòng
                  </Link>
                </li>
                <li>
                  <Link href="/tiep-thi" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Ấn phẩm tiếp thị
                  </Link>
                </li>
                <li>
                  <Link href="/in-anh" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    In ảnh
                  </Link>
                </li>
                <li>
                  <Link href="/kinh-nghiem" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Kinh nghiệm
                  </Link>
                </li>
                <li>
                  <Link href="/lien-he" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Column 4: BannerPage + Button + Social ── */}
            <div className="lg:col-span-4 lg:pt-1">
              <BannerPage className="mb-4" />

              <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-6 py-3 text-sm font-semibold shadow-md backdrop-blur-sm transition-all hover:from-white/30 hover:to-white/20 hover:shadow-lg" style={{ color: "#fff" }}>
                <ShopIcon />
                Tư vấn
              </button>

              <div className="flex items-center justify-start gap-3">
                <a href="https://www.facebook.com/intemcantho.duky" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/intemcantho/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/@intemduky" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <YoutubeIcon />
                </a>
                <a href="https://www.pinterest.com/intemduky/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="relative z-10 border-t border-white/20">
          <div className="container mx-auto flex items-center px-6 py-4">
            <p className="text-[13px] text-white">Website designed by <span className="font-bold text-white">Duky Agency</span></p>
          </div>
        </div>
      </footer>
    </>
  );
}
