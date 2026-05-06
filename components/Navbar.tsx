"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppStore } from "@/lib/store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { persona } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/75 shadow-lg shadow-black/10"
          : "bg-white/0 shadow-none"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-6">
          {/* Logo */}
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
                src={isScrolled ? "/logo.png" : "/logo-white.png"}
                alt="Duky Printing"
                width={180}
                height={56}
                priority
                className="h-14 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
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
                    isScrolled
                      ? "text-black/90 hover:text-black"
                      : "text-white/95 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons & Persona */}
          <div className="hidden md:flex gap-3 items-center justify-self-end">
            {persona && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`px-3 py-1 rounded-sm text-xs font-light border ${
                  isScrolled
                    ? "bg-black/5 text-black border-black/10"
                    : "bg-white/10 text-white border-white/30"
                }`}
              >
                {persona}
              </motion.div>
            )}
            <Link
              href="/dang-nhap"
              className={`px-4 py-2 text-sm font-light transition-colors ${
                isScrolled
                  ? "text-black/70 hover:text-black"
                  : "text-white/95 hover:text-white"
              }`}
            >
              Đăng nhập
            </Link>
            <Link
              href="/dang-ky"
              className="px-4 py-2 text-sm font-light text-white bg-amber-800 hover:bg-amber-900 rounded-sm transition-colors"
            >
              Đăng ký
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-sm transition-colors ${
              isScrolled
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden pb-6 space-y-2 border-t pt-4 backdrop-blur-md ${
              isScrolled
                ? "border-black/10 bg-white/90"
                : "border-white/20 bg-black/35"
            }`}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-3 text-sm font-light rounded-sm transition-all ${
                  isScrolled
                    ? "text-black/70 hover:text-black hover:bg-black/5"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div
              className={`border-t pt-4 mt-4 space-y-2 ${
                isScrolled ? "border-black/10" : "border-white/20"
              }`}
            >
              <Link
                href="/dang-nhap"
                className={`block px-4 py-2 text-sm font-light rounded-sm transition-all ${
                  isScrolled
                    ? "text-black/70 hover:text-black hover:bg-black/5"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
              <Link
                href="/dang-ky"
                className="block px-4 py-2 text-sm font-light text-white bg-amber-800 hover:bg-amber-900 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
