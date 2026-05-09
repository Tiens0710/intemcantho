"use client";

import { navigationData, NavItem } from "@/lib/navigation";
import { useAppStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        shouldUseGlassHeader
          ? "bg-white/60 shadow-[0_14px_42px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl"
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

          <div className="hidden md:flex items-center justify-center gap-1">
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
                      className={`group relative inline-flex items-center gap-1 px-4 py-2 text-[15px] font-bold tracking-wide transition-colors ${
                        shouldUseGlassHeader
                          ? "text-black/90 hover:text-black"
                          : "text-white/95 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMegaMenu === item.label ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${pathname === item.href ? 'scale-x-100' : ''}`} />
                    </Link>

                    <AnimatePresence>
                      {activeMegaMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="fixed left-1/2 top-20 z-50 w-[min(1320px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[32px] border border-white/80 bg-white/95 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.4),0_0_1px_rgba(0,0,0,0.1)] backdrop-blur-[160px] backdrop-saturate-[180%]"
                        >
                          <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-amber-500/15 blur-[120px]" />
                          
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`group relative inline-flex items-center px-4 py-2 text-[15px] font-bold tracking-wide transition-colors ${
                      shouldUseGlassHeader
                        ? "text-black/90 hover:text-black"
                        : "text-white/95 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${pathname === item.href ? 'scale-x-100' : ''}`} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex gap-4 items-center justify-self-end">
            {persona && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-tighter border shadow-sm ${
                  shouldUseGlassHeader
                    ? "bg-amber-100/50 text-amber-900 border-amber-200"
                    : "bg-white/10 text-white border-white/20"
                }`}
              >
                {persona.toUpperCase()}
              </motion.div>
            )}
            <Link
              href="/dang-nhap"
              className={`px-6 py-2.5 text-sm font-bold tracking-tight transition-all rounded-full ${
                shouldUseGlassHeader
                  ? "bg-amber-800 text-white shadow-lg shadow-amber-900/20 hover:bg-amber-900 hover:scale-105"
                  : "bg-white/15 text-white backdrop-blur-md border border-white/30 hover:bg-white/25 hover:scale-105"
              }`}
            >
              Đăng nhập
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all ${
              shouldUseGlassHeader
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className={`md:hidden overflow-hidden rounded-3xl mb-4 border transition-all ${
                shouldUseGlassHeader
                  ? "border-amber-900/10 bg-white/95 shadow-2xl"
                  : "border-white/20 bg-black/80 backdrop-blur-2xl shadow-2xl"
              }`}
            >
              <div className="p-4 space-y-2">
                {navigationData.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-3 text-base font-bold rounded-2xl transition-all ${
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
                          onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                          className={`p-3 rounded-2xl transition-all ${
                            shouldUseGlassHeader ? "text-amber-800 hover:bg-amber-50" : "text-white hover:bg-white/10"
                          }`}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {item.megaMenu && expandedMobileItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-6 pr-4 py-2 space-y-4"
                      >
                        {item.megaMenu.columns.map(column => (
                          <div key={column.title} className="space-y-2">
                            <p className="px-2 text-[11px] font-black uppercase tracking-widest text-amber-700/70">
                              {column.title}
                            </p>
                            <div className="grid grid-cols-1 gap-1">
                              {column.items.map(subItem => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={`px-3 py-2 text-sm font-medium rounded-xl transition-all ${
                                    shouldUseGlassHeader ? "text-slate-600 hover:bg-amber-50 hover:text-amber-900" : "text-gray-300 hover:bg-white/5 hover:text-white"
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
                
                <div className={`pt-4 mt-4 border-t ${shouldUseGlassHeader ? 'border-amber-900/5' : 'border-white/10'}`}>
                  <Link
                    href="/dang-nhap"
                    className="flex items-center justify-center w-full px-4 py-4 text-base font-bold text-white bg-amber-800 rounded-2xl shadow-lg shadow-amber-900/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Đăng nhập tài khoản
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
