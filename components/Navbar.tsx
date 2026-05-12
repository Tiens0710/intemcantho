"use client";

import { navigationData } from "@/lib/navigation";
import { useAppStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const closeMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { persona } = useAppStore();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const shouldUseGlassHeader = !isHomePage || isScrolled;

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
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

  const openMegaMenu = (label: string) => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
    setActiveMegaMenu(label);
  };

  const closeMegaMenu = () => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
    }
    closeMenuTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeMenuTimerRef.current) {
        clearTimeout(closeMenuTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1520px] hidden md:block transition-all duration-500 ${
          shouldUseGlassHeader
            ? "floating-navbar"
            : "floating-navbar-transparent"
        }`}
        style={{ borderRadius: "20px", width: "calc(98% - 30px)" }}
      >
        <div className="relative z-10 flex items-center justify-between h-[68px] px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 pl-6"
          >
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-80"
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

          {/* Center Menu */}
          <div className="flex items-center gap-0.5">
            {navigationData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="relative"
              >
                {item.megaMenu ? (
                  <div
                    onMouseEnter={() => openMegaMenu(item.label)}
                    onMouseLeave={closeMegaMenu}
                    className="py-6"
                  >
                    <Link
                      href={item.href}
                      className={`group relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                        shouldUseGlassHeader
                          ? "text-slate-700 hover:text-amber-800"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          activeMegaMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${
                          pathname === item.href ? "scale-x-100" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {activeMegaMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 30, scale: 0.94, rotateX: -8 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, y: 20, scale: 0.94, rotateX: -8 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="fixed left-1/2 w-[min(1400px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden bg-white p-0.5"
                          style={{ top: "60px", zIndex: 60, borderRadius: "24px", boxShadow: "0 50px 140px -30px rgba(15,23,42,0.6), 0 0 1px rgba(0,0,0,0.2)", perspective: "1500px", transformOrigin: "top center" }}
                        >
                          <div className="absolute inset-0 rounded-[42px] bg-gradient-to-b from-white via-white/20 to-white/5 opacity-100" />

                          <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-white/98 p-10 backdrop-blur-[160px] backdrop-saturate-[180%] shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)]">
                            <div className="relative grid grid-cols-12 gap-8">
                              <div className="col-span-4">
                                <Link
                                  href={item.href}
                                  className="group block overflow-hidden rounded-[24px] border border-white/80 bg-white/70 p-3 shadow-[0_12px_40px_rgba(15,23,42,0.15)] transition-all hover:shadow-[0_20px_50px_rgba(15,23,42,0.2)]"
                                >
                                  <div className="relative h-[260px] overflow-hidden rounded-2xl">
                                    <Image
                                      src={item.megaMenu.banner.src}
                                      alt={item.megaMenu.banner.alt}
                                      fill
                                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                  </div>

                                  <div className="px-1 py-4 text-center">
                                    <p className="text-[1.15rem] font-bold tracking-tight text-slate-800">
                                      {item.megaMenu.banner.title}
                                    </p>
                                    <p className="text-sm font-medium text-amber-700 uppercase tracking-widest mt-1">
                                      {item.megaMenu.banner.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </div>

                              <div className="col-span-8 grid grid-cols-3 gap-6">
                                {item.megaMenu.columns.map((group) => (
                                  <div key={group.title} className="space-y-4">
                                    <h4 className="px-2 text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-amber-800/80 border-l-2 border-amber-700/30">
                                      {group.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {group.items.map((entry) => (
                                        <li key={entry.label}>
                                          <Link
                                            href={entry.href}
                                            className="group flex items-center rounded-xl px-3 py-2.5 transition-all hover:bg-amber-500/10"
                                          >
                                            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-amber-700/20 transition-all group-hover:w-3 group-hover:bg-amber-700" />
                                            <span className="text-[15px] font-medium text-slate-600 transition-colors group-hover:text-amber-900">
                                              {entry.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`group relative inline-flex items-center px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                      shouldUseGlassHeader
                        ? "text-slate-700 hover:text-amber-800"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${
                        pathname === item.href ? "scale-x-100" : ""
                      }`}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Icons + Divider + Hotline */}
          <div className="flex items-center gap-1">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                shouldUseGlassHeader
                  ? "text-slate-600 hover:text-amber-800 hover:bg-amber-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Tìm kiếm"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={2} />
            </motion.button>

            {/* User Icon */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/dang-nhap"
                className={`p-2 rounded-full transition-colors inline-flex items-center justify-center ${
                  shouldUseGlassHeader
                    ? "text-slate-600 hover:text-amber-800 hover:bg-amber-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Tài khoản"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
            </motion.div>

            {/* Cart Icon (navigates to /cart) */}
            <Link href="/cart" aria-label="Giỏ hàng" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full transition-colors ${
                  shouldUseGlassHeader
                    ? "text-slate-600 hover:text-amber-800 hover:bg-amber-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={2} />
              </motion.div>
            </Link>

            {/* Divider */}
            <div
              className={`mx-2 h-6 w-px ${
                shouldUseGlassHeader ? "bg-slate-300/60" : "bg-white/30"
              }`}
            />

            {/* Quick Quote */}
            <Link
              href="/lien-he"
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-bold tracking-tight transition-all ${
                shouldUseGlassHeader
                  ? "bg-amber-800 text-white shadow-md shadow-amber-900/20 hover:bg-amber-900 hover:shadow-lg"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:bg-white/30"
              }`}
            >
              <span>Báo Giá Nhanh</span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full md:hidden transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          shouldUseGlassHeader
            ? "floating-navbar !rounded-none"
            : "floating-navbar-transparent !rounded-none"
        }`}
      >
        <div className="relative z-10 flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="Duky Printing"
          >
            <Image
              src={shouldUseGlassHeader ? "/logo.png" : "/logo-white.png"}
              alt="Duky Printing"
              width={120}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-1">
            <button
              className={`p-2 rounded-full transition-colors ${
                shouldUseGlassHeader
                  ? "text-slate-600 hover:bg-amber-50"
                  : "text-white/80 hover:bg-white/10"
              }`}
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5" strokeWidth={2} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all ${
                shouldUseGlassHeader
                  ? "text-slate-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className={`overflow-hidden border-t transition-all ${
                shouldUseGlassHeader
                  ? "border-amber-900/5 bg-white/95 backdrop-blur-2xl"
                  : "border-white/10 bg-black/80 backdrop-blur-2xl"
              }`}
            >
              <div className="p-4 space-y-2">
                {navigationData.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-3 text-sm font-bold rounded-2xl transition-all ${
                          shouldUseGlassHeader
                            ? "text-slate-800 hover:bg-amber-50"
                            : "text-white hover:bg-white/10"
                        }`}
                        onClick={() => !item.megaMenu && setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <button
                          onClick={() =>
                            setExpandedMobileItem(
                              expandedMobileItem === item.label ? null : item.label
                            )
                          }
                          className={`p-3 rounded-2xl transition-all ${
                            shouldUseGlassHeader
                              ? "text-amber-800 hover:bg-amber-50"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              expandedMobileItem === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.megaMenu && expandedMobileItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-6 pr-4 py-2 space-y-4"
                      >
                        {item.megaMenu.columns.map((column) => (
                          <div key={column.title} className="space-y-2">
                            <p
                              className={`px-2 text-[10px] font-black uppercase tracking-widest ${
                                shouldUseGlassHeader
                                  ? "text-amber-700/70"
                                  : "text-amber-400/70"
                              }`}
                            >
                              {column.title}
                            </p>
                            <div className="grid grid-cols-1 gap-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={`px-3 py-2 text-sm font-medium rounded-xl transition-all ${
                                    shouldUseGlassHeader
                                      ? "text-slate-600 hover:bg-amber-50 hover:text-amber-900"
                                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile Hotline */}
                <div
                  className={`pt-4 mt-4 border-t ${
                    shouldUseGlassHeader ? "border-amber-900/5" : "border-white/10"
                  }`}
                >
                  <a
                    href="tel:0985463403"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-white bg-amber-800 rounded-2xl shadow-lg shadow-amber-900/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    Gọi ngay: 0985 463 403
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}