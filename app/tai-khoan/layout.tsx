"use client";

import { motion } from "framer-motion";
import {
  User,
  Package,
  MapPin,
  Heart,
  Settings,
  LogOut,
  ShoppingBag,
  CreditCard,
  Bell,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sidebarItems = [
  {
    label: "Tổng quan",
    href: "/tai-khoan",
    icon: User,
  },
  {
    label: "Đơn hàng",
    href: "/tai-khoan/don-hang",
    icon: Package,
  },
  {
    label: "Địa chỉ",
    href: "/tai-khoan/dia-chi",
    icon: MapPin,
  },
  {
    label: "Yêu thích",
    href: "/tai-khoan/yeu-thich",
    icon: Heart,
  },
  {
    label: "Thanh toán",
    href: "/tai-khoan/thanh-toan",
    icon: CreditCard,
  },
  {
    label: "Thông báo",
    href: "/tai-khoan/thong-bao",
    icon: Bell,
  },
  {
    label: "Cài đặt",
    href: "/tai-khoan/cai-dat",
    icon: Settings,
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [userName, setUserName] = useState("Nguyễn Văn A");
  const [userEmail, setUserEmail] = useState("nguyenvana@email.com");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Mock data - trong thực tế sẽ fetch từ API
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserName(user.name || "Nguyễn Văn A");
      setUserEmail(user.email || "nguyenvana@email.com");
      setUserAvatar(user.avatar || null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/dang-nhap";
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20">
      <Navbar />
      
      {/* Account Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 pt-24 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="container relative mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              {/* Online Status */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg" />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Xin chào, {userName}!
              </h1>
              <p className="text-amber-200/80 text-sm md:text-base font-light">
                {userEmail} • Thành viên từ 2024
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  12 đơn hàng
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/30 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  <Heart className="w-3.5 h-3.5" />
                  8 yêu thích
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Sidebar Navigation */}
                <nav className="p-2">
                  {sidebarItems.map((item) => {
                    const isActive = pathname === item.href || 
                      (item.href !== "/tai-khoan" && pathname.startsWith(item.href));
                    const Icon = item.icon;
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 shadow-sm"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <div className={`p-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-500 group-hover:bg-amber-50 group-hover:text-amber-600"
                        }`}>
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className="flex-1 text-sm font-medium">
                          {item.label}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive ? "text-amber-500" : "text-gray-400 opacity-0 group-hover:opacity-100"
                        }`} />
                      </Link>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="mx-4 border-t border-gray-100" />

                {/* Logout */}
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-red-100 text-red-500">
                      <LogOut className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium">Đăng xuất</span>
                  </button>
                </div>
              </div>

              {/* Help Card */}
              <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Cần hỗ trợ?</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Liên hệ hotline hoặc gửi email cho chúng tôi
                </p>
                <a
                  href="tel:0985463403"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800 text-white rounded-xl text-xs font-medium hover:bg-amber-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0985 463 403
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {children}
          </motion.main>
        </div>
      </div>

      <Footer />
    </div>
  );
}