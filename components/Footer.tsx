"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BannerPage } from "./BannerPage";
  
/* ─── Inline SVG social icons ─── */
const FacebookIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.08 1.38.17v3.325c-.267-.028-.716-.04-1.275-.04-1.81 0-2.528.685-2.528 2.623v1.856h3.82l-.66 3.667h-3.16v8.232C18.838 23.07 20 21.2 20 19.134v-4.443A9.286 9.286 0 0020 12.543a9.44 9.44 0 00-.899-4.036A9.23 9.23 0 009.101 23.691z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.738.87.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.088 4.088 0 013.593 3.25a4.088 4.088 0 011.47-.957c.46-.163 1.26-.35 2.43-.403C8.759 1.832 9.14 1.82 12 1.82v.343zm0 1.802c-3.15 0-3.504.013-4.744.07-1.147.052-1.77.244-2.183.405-.547.214-.936.47-1.342.876-.406.406-.662.795-.876 1.342-.161.413-.353 1.036-.405 2.183-.057 1.24-.07 1.594-.07 4.744s.013 3.504.07 4.744c.052 1.147.244 1.77.405 2.183.214.547.47.936.876 1.342.406.406.795.662 1.342.876.413.161 1.036.353 2.183.405 1.24.057 1.594.07 4.744.07s3.504-.013 4.744-.07c1.147-.052 1.77-.244 2.183-.405.547-.214.936-.47 1.342-.876.406-.406.662-.795.876-1.342.161-.413.353-1.036.405-2.183.057-1.24.07-1.594.07-4.744s-.013-3.504-.07-4.744c-.052-1.147-.244-1.77-.405-2.183-.214-.547-.47-.936-.876-1.342a3.627 3.627 0 00-1.342-.876c-.413-.161-1.036-.353-2.183-.405-1.24-.057-1.594-.07-4.744-.07zm0 3.07a4.965 4.965 0 110 9.93 4.965 4.965 0 010-9.93zm0 1.247a3.718 3.718 0 100 7.436 3.718 3.718 0 000-7.436zm5.186-2.078a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const PinterestIcon = () => (
  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
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
                Intemcantho.vn (Duky Printing) chuyên in tem nhãn decal,
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
                  <Link href="/bao-bi" className="flex items-center gap-2.5 transition-colors hover:text-white group">
                    <span className="text-[11px] text-white/60 group-hover:text-white">›</span>
                    Ấn Phẩm bao bì
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
                <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
                  <YoutubeIcon />
                </a>
                <a href="#" aria-label="Pinterest" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white/10 hover:text-white">
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
