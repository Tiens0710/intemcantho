"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppStore } from "@/lib/store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { persona } = useAppStore();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldUseGlassHeader = !isHomePage || isScrolled;

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 40;
        setIsScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Ấn phẩm văn phòng", href: "/van-phong" },
    { label: "Ấn phẩm tiếp thị", href: "/tiep-thi" },
    { label: "Ấn phẩm bao bì", href: "/bao-bi" },
    { label: "Kinh nghiệm", href: "/kinh-nghiem" },
    { label: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        shouldUseGlassHeader
          ? "bg-white/45 shadow-[0_14px_42px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl"
          : "bg-white/0 shadow-none backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center -ml-1 transition-opacity hover:opacity-80"
              aria-label="Duky Printing"
            >
              <Image
                src={shouldUseGlassHeader ? "/logo.png" : "/logo-white.png"}
                alt="Duky Printing"
                width={180}
                height={56}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center justify-center gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-base font-bold tracking-wide transition-colors ${
                    shouldUseGlassHeader
                      ? "text-black/90 hover:text-black"
                      : "text-white/95 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex gap-3 items-center justify-self-end">
            {persona && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`px-3 py-1 rounded-sm text-xs font-light border ${
                  shouldUseGlassHeader
                    ? "bg-white/40 text-black border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md"
                    : "bg-white/10 text-white border-white/30"
                }`}
              >
                {persona}
              </motion.div>
            )}
            <Link
              href="/dang-nhap"
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all ${
                shouldUseGlassHeader
                  ? "rounded-full border border-[#e9e2d6]/55 bg-white/20 text-[#f7f2e9]/90 shadow-[0_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md hover:border-[#f7f2e9]/75 hover:bg-white/30 hover:text-[#f7f2e9]"
                  : "text-[#f7f2e9]/90 bg-white/10 border border-[#e9e2d6]/45 rounded-full shadow-[0_8px_24px_rgba(255,255,255,0.08)] hover:bg-white/15 hover:text-[#f7f2e9]"
              }`}
            >
              Đăng nhập
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-sm transition-colors ${
              shouldUseGlassHeader
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden pb-6 space-y-2 border-t pt-4 backdrop-blur-xl ${
              shouldUseGlassHeader
                ? "border-white/35 bg-white/55 shadow-[0_18px_38px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.45)]"
                : "border-white/20 bg-black/35"
            }`}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-3 text-sm font-light rounded-sm transition-all ${
                  shouldUseGlassHeader
                    ? "text-black/70 hover:text-black hover:bg-black/5"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div
              className={`border-t pt-4 mt-4 ${
                shouldUseGlassHeader ? "border-black/10" : "border-white/20"
              }`}
            >
              <Link
                href="/dang-nhap"
                className={`block px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all ${
                  shouldUseGlassHeader
                    ? "text-[#f7f2e9]/90 hover:bg-white/15 hover:text-[#f7f2e9]"
                    : "text-white bg-white/10 border border-white/30 hover:bg-white/15"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
