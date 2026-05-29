"use client";

import { navigationData } from "@/lib/navigation";
import { useAppStore } from "@/lib/store";
import WarmButton from "@/components/WarmButton";
import LoginModal from "@/components/LoginModal";
import ProductSearch from "@/components/ProductSearch";
import RegisterModal from "@/components/RegisterModal";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Package, Phone, Search, Settings, ShoppingBag, User, X, LogOut, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Customer } from "@/lib/api/services/authService";
import { authService } from "@/lib/api/services/authService";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const closeMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hasLoggedInBefore, setHasLoggedInBefore] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProductSearch, setShowProductSearch] = useState(false);
  const { persona, customer, logout, isLoggedIn } = useAppStore();
  const cartItemCount = useAppStore((s) => s.cart.length);
  const cartBadgeLabel = cartItemCount > 99 ? "99+" : String(cartItemCount);
  const router = useRouter();
  const pathname = usePathname();
  const userName = customer?.fullName || "Tài khoản";
  const isNavItemActive = (item: (typeof navigationData)[number]) => {
    const activePaths = item.activePaths ?? [item.href];
    return activePaths.some((path) => {
      if (path === "/") return pathname === "/";
      // Exact match, or prefix match only if the sub-segment is NOT claimed by another nav item
      if (pathname === path) return true;
      if (pathname.startsWith(`${path}/`)) {
        // Check if any other nav item has this deeper path in its activePaths
        const claimed = navigationData.some(
          (other) => other.label !== item.label && other.activePaths?.some((ap) => pathname === ap || pathname.startsWith(`${ap}/`)),
        );
        return !claimed;
      }
      return false;
    });
  };

  // Check auth status
  useEffect(() => {
    setMounted(true);
  }, []);

  const openUserMenu = () => {
    if (userMenuTimerRef.current) clearTimeout(userMenuTimerRef.current);
    setShowUserMenu(true);
  };

  const closeUserMenu = () => {
    if (userMenuTimerRef.current) clearTimeout(userMenuTimerRef.current);
    userMenuTimerRef.current = setTimeout(() => setShowUserMenu(false), 200);
  };

  const handleLogout = async () => {
    if (customer && useAppStore.getState().refreshToken) {
       try {
         await authService.logout(useAppStore.getState().refreshToken || "");
       } catch (error) {
         console.error("Logout failed", error);
       }
    }
    logout();
    setShowUserMenu(false);
    router.push("/");
  };

  const cancelCloseTimer = () => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  };

  const openMegaMenu = (label: string) => {
    cancelCloseTimer();
    setActiveMegaMenu(label);
  };

  const closeMegaMenu = () => {
    cancelCloseTimer();
    closeMenuTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      cancelCloseTimer();
    };
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1520px] hidden md:block transition-all duration-500 floating-navbar"
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
              aria-label="In tem Cần Thơ"
            >
              <Image
                src="/logo.png"
                alt="In tem Cần Thơ"
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
                  <>
                    {/* Trigger area — only the link + padding */}
                    <div
                      onMouseEnter={() => openMegaMenu(item.label)}
                      onMouseLeave={closeMegaMenu}
                      className="py-6"
                    >
                      <Link
                        href={item.href}
                        className="group relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors text-slate-700 hover:text-amber-800"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMegaMenu === item.label ? "rotate-180" : ""
                            }`}
                        />
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${isNavItemActive(item) ? "scale-x-100" : ""
                            }`}
                        />
                      </Link>
                    </div>

                    {/* Mega Menu Panel — fixed positioned, has its own hover handlers */}
                    <AnimatePresence>
                      {activeMegaMenu === item.label && (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.97, pointerEvents: "none" as any }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="fixed left-1/2 w-[min(1100px,calc(100vw-3rem))] -translate-x-1/2"
                          style={{ top: "64px", zIndex: 60, transformOrigin: "top center" }}
                          onMouseEnter={cancelCloseTimer}
                          onMouseLeave={closeMegaMenu}
                        >
                          {/* Outer glow */}
                          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-orange-100/30 blur-sm" />

                          {/* Main panel */}
                          <div className="relative overflow-hidden rounded-[20px] bg-white border border-amber-100/70 shadow-[0_25px_80px_-15px_rgba(150,100,40,0.25),0_0_0_1px_rgba(0,0,0,0.03)]">
                            {/* Top accent line */}
                            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-300 via-amber-500 to-orange-400" />

                            <div className="grid grid-cols-12 gap-0">
                              {/* Banner side */}
                              <div className="col-span-4 p-6 pr-5">
                                <Link
                                  href={item.href}
                                  className="group block overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-lg hover:shadow-gray-200/60"
                                >
                                  <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                      src={item.megaMenu.banner.src}
                                      alt={item.megaMenu.banner.alt}
                                      fill
                                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                  </div>

                                  <div className="px-4 py-4">
                                    <p className="text-[0.95rem] font-bold tracking-tight text-slate-800 transition-colors group-hover:text-amber-900">
                                      {item.megaMenu.banner.title}
                                    </p>
                                    <div className="mt-1.5 flex items-center gap-1.5">
                                      <span className="h-[2px] w-4 rounded-full bg-amber-400" />
                                      <p className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.18em]">
                                        {item.megaMenu.banner.subtitle}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>

                              {/* Divider */}
                              <div className="col-span-1 flex items-center justify-center">
                                <div className="h-32 w-px bg-gradient-to-b from-transparent via-amber-200/80 to-transparent" />
                              </div>

                              {/* Links side */}
                              <div className="col-span-7 p-6 pl-4">
                                <div className="grid grid-cols-3 gap-7">
                                  {item.megaMenu.columns.map((group, gi) => (
                                    <div key={group.title} className="space-y-3">
                                      {group.href ? (
                                        <Link href={group.href}>
                                          <h4 className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-amber-800 transition-colors hover:text-amber-600">
                                            <span className="inline-block h-[3px] w-3 rounded-full bg-amber-500/60" />
                                            {group.title}
                                          </h4>
                                        </Link>
                                      ) : (
                                        <h4 className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-amber-800/70">
                                          <span className="inline-block h-[3px] w-3 rounded-full bg-amber-300/50" />
                                          {group.title}
                                        </h4>
                                      )}
                                      <ul className="space-y-0.5">
                                        {group.items.map((entry) => (
                                          <li key={entry.label}>
                                            <Link
                                              href={entry.href}
                                              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50/60"
                                            >
                                              <span className="flex-shrink-0 h-[5px] w-[5px] rounded-full bg-amber-300 transition-all duration-200 group-hover:h-[5px] group-hover:w-[18px] group-hover:rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-400" />
                                              <span className="text-[14px] font-medium text-slate-600 transition-colors duration-200 group-hover:text-amber-900">
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
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : item.dropdownItems ? (
                  <>
                    {/* Floating Dropdown for standard submenu */}
                    <div
                      onMouseEnter={() => openMegaMenu(item.label)}
                      onMouseLeave={closeMegaMenu}
                      className="py-6"
                    >
                      <Link
                        href={item.href}
                        className="group relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors text-slate-700 hover:text-amber-800"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${activeMegaMenu === item.label ? "rotate-180" : ""
                            }`}
                        />
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${isNavItemActive(item) ? "scale-x-100" : ""
                            }`}
                        />
                      </Link>
                    </div>

                    <AnimatePresence>
                      {activeMegaMenu === item.label && (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, pointerEvents: "none" as any }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute left-1/2 -translate-x-1/2 top-full -mt-2 w-56 overflow-hidden rounded-2xl bg-white border border-gray-100 p-1.5 shadow-xl"
                          style={{ zIndex: 60 }}
                          onMouseEnter={cancelCloseTimer}
                          onMouseLeave={closeMegaMenu}
                        >
                          <ul className="space-y-0.5">
                            {item.dropdownItems.map((entry) => (
                              <li key={entry.label}>
                                <Link
                                  href={entry.href}
                                  className="group flex items-center rounded-xl px-3 py-2.5 transition-all hover:bg-amber-500/10"
                                  onClick={closeMegaMenu}
                                >
                                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-amber-700/20 transition-all group-hover:w-3 group-hover:bg-amber-700" />
                                  <span className="text-[14px] font-semibold text-slate-600 transition-colors group-hover:text-amber-900">
                                    {entry.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors text-slate-700 hover:text-amber-800"
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 bg-amber-700 transition-transform duration-300 group-hover:scale-x-100 ${isNavItemActive(item) ? "scale-x-100" : ""
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
              type="button"
              onClick={() => setShowProductSearch(true)}
              className="p-2 rounded-full transition-colors text-slate-600 hover:text-amber-800 hover:bg-amber-50"
              aria-label="Tìm kiếm sản phẩm"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={2} />
            </motion.button>

            {!customer ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(true)}
                  className="p-2 rounded-full transition-colors inline-flex items-center justify-center text-slate-600 hover:text-amber-800 hover:bg-amber-50"
                  aria-label="Đăng nhập"
                >
                  <User className="w-[18px] h-[18px]" strokeWidth={2} />
                </button>
              </motion.div>
            ) : (
              <>
                {/* User Icon / Account */}
                  <div
                    className="relative"
                    onMouseEnter={openUserMenu}
                    onMouseLeave={closeUserMenu}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-full transition-colors text-slate-700 hover:bg-amber-50"
                      aria-label="Tài khoản"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[11px] font-bold text-white shadow-md">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {showUserMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                          style={{ zIndex: 70 }}
                          onMouseEnter={openUserMenu}
                          onMouseLeave={closeUserMenu}
                        >
                          {/* User Info */}
                          <div className="px-4 py-3 border-b border-gray-50 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
                            <p className="text-sm font-semibold text-gray-900 truncate">{userName}</p>
                            <p className="text-[11px] text-gray-500">Thành viên</p>
                          </div>

                          {/* Menu Items */}
                          <div className="py-1.5">
                            <Link
                              href="/tai-khoan"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                              onClick={() => setShowUserMenu(false)}
                            >
                              <User className="w-4 h-4 text-gray-400" strokeWidth={2} />
                              Tài khoản của tôi
                            </Link>
                            <Link
                              href="/tai-khoan/don-hang"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                              onClick={() => setShowUserMenu(false)}
                            >
                              <Package className="w-4 h-4 text-gray-400" strokeWidth={2} />
                              Đơn hàng
                            </Link>
                            <Link
                              href="/tai-khoan/dia-chi"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                              onClick={() => setShowUserMenu(false)}
                            >
                              <MapPin className="w-4 h-4 text-gray-400" strokeWidth={2} />
                              Địa chỉ
                            </Link>
                            <Link
                              href="/tai-khoan/cai-dat"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                              onClick={() => setShowUserMenu(false)}
                            >
                              <Settings className="w-4 h-4 text-gray-400" strokeWidth={2} />
                              Cài đặt
                            </Link>
                          </div>

                          {/* Logout */}
                          <div className="border-t border-gray-50 py-1.5">
                            <button
                              onClick={handleLogout}
                              className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <LogOut className="w-4 h-4" strokeWidth={2} />
                              Đăng xuất
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                {/* Cart Icon (navigates to /cart) */}
                <Link href="/cart" aria-label="Giỏ hàng" className="inline-block" id="cart-icon">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-2 rounded-full transition-colors text-[#E6792A] hover:text-[#C66A27] hover:bg-amber-50"
                  >
                    <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={2} />
                    {mounted && cartItemCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E6792A] px-1 text-[10px] font-bold leading-none text-white shadow-sm ring-2 ring-white">
                        {cartBadgeLabel}
                      </span>
                    )}
                  </motion.div>
                </Link>
              </>
            )}

            {/* Divider */}
            <div
              className="mx-2 h-6 w-px bg-slate-300/60"
            />

            {/* Quick Quote */}
            <WarmButton href="https://www.facebook.com/intemcantho.duky" target="_blank" rel="noopener noreferrer" size="sm" variant="filled">
              Liên Hệ Ngay
            </WarmButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full md:hidden transition-[background-color,box-shadow,backdrop-filter] duration-300 floating-navbar !rounded-none"
      >
        <div className="relative z-10 flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="In tem Cần Thơ"
          >
            <Image
              src="/logo.png"
              alt="In tem Cần Thơ"
              width={120}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-1">
            {!customer && !hasLoggedInBefore ? (
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors border-amber-200 bg-white/80 text-amber-800"
              >
                Đăng nhập
              </button>
            ) : (
              <Link
                href="/cart"
                className="relative p-2 rounded-full transition-colors text-slate-600 hover:bg-amber-50"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                {mounted && cartItemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E6792A] px-1 text-[10px] font-bold leading-none text-white shadow-sm ring-2 ring-white">
                    {cartBadgeLabel}
                  </span>
                )}
              </Link>
            )}

            <button
              type="button"
              onClick={() => setShowProductSearch(true)}
              className="p-2 rounded-full transition-colors text-slate-600 hover:bg-amber-50"
              aria-label="Tìm kiếm sản phẩm"
            >
              <Search className="w-5 h-5" strokeWidth={2} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-all text-slate-700 hover:bg-amber-50"
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
              className="overflow-hidden border-t transition-all border-amber-900/5 bg-white/95 backdrop-blur-2xl"
            >
              <div className="p-4 space-y-2">
                {navigationData.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="flex-1 px-4 py-3 text-sm font-bold rounded-2xl transition-all text-slate-800 hover:bg-amber-50"
                        onClick={() => !(item.megaMenu || item.dropdownItems) && setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {(item.megaMenu || item.dropdownItems) && (
                        <button
                          onClick={() =>
                            setExpandedMobileItem(
                              expandedMobileItem === item.label ? null : item.label
                            )
                          }
                          className="text-amber-800 hover:bg-amber-50 p-3 rounded-2xl transition-all"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${expandedMobileItem === item.label ? "rotate-180" : ""
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
                            {column.href ? (
                              <Link
                                href={column.href}
                                className="inline-block px-2 text-[10px] font-black uppercase tracking-widest text-amber-700 hover:text-amber-900 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {column.title}
                              </Link>
                            ) : (
                              <p
                                className="px-2 text-[10px] font-black uppercase tracking-widest text-amber-700/70"
                              >
                                {column.title}
                              </p>
                            )}
                            <div className="grid grid-cols-1 gap-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="px-3 py-2 text-sm font-medium rounded-xl transition-all text-slate-600 hover:bg-amber-50 hover:text-amber-900"
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

                    {item.dropdownItems && expandedMobileItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-6 pr-4 py-1 space-y-1"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="px-3 py-2 text-sm font-medium rounded-xl transition-all text-slate-600 hover:bg-amber-50/50 hover:text-amber-900 hover:translate-x-1 transform duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile Hotline */}
                <div
                  className="pt-4 mt-4 border-t border-amber-900/5"
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
      {/* Login Modal (with auto-register) */}
      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={(user) => {
          localStorage.setItem("duky_has_logged_in", "true");
          setHasLoggedInBefore(true);
        }}
      />
      <ProductSearch
        open={showProductSearch}
        onClose={() => setShowProductSearch(false)}
      />
    </>
  );
}
