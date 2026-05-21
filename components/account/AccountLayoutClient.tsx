"use client";

import BrandCard from "@/components/ui/BrandCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ChevronRight,
  Headphones,
  LogOut,
  MapPin,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const sidebarItems = [
  { label: "Tổng quan", href: "/tai-khoan", icon: User },
  { label: "Đơn hàng", href: "/tai-khoan/don-hang", icon: Package },
  { label: "Địa chỉ", href: "/tai-khoan/dia-chi", icon: MapPin },
  { label: "Cài đặt", href: "/tai-khoan/cai-dat", icon: Settings },
];

function getSavedUser() {
  if (typeof window === "undefined") {
    return {
      name: "Khách hàng",
      email: "customer@email.com",
    };
  }

  try {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      return {
        name: "Khách hàng",
        email: "customer@email.com",
      };
    }

    const user = JSON.parse(savedUser) as { name?: string; email?: string };
    return {
      name: user.name || "Khách hàng",
      email: user.email || "customer@email.com",
    };
  } catch {
    return {
      name: "Khách hàng",
      email: "customer@email.com",
    };
  }
}

export default function AccountLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const user = getSavedUser();
  const initial = user.name.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230,121,42,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(230,121,42,0.10) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container relative mx-auto max-w-6xl px-4 pb-16 pt-24 md:pt-28">
          <BrandCard className="mb-5 bg-white/88 px-5 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#1f2937]">
                <Link href="/" className="transition hover:text-[#E6792A]">
                  Trang chủ
                </Link>
                <span className="mx-2 text-[#E6792A]/45">/</span>
                <span className="text-[#E6792A]">Tài khoản</span>
              </nav>
              <h1
                className="mt-2 !font-sans !text-xl !font-black uppercase !tracking-[0.12em] !text-[#E6792A] md:!text-2xl"
              >
                Thông tin khách hàng
              </h1>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6792A]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              <ShoppingBag className="h-4 w-4" />
              Trung tâm tài khoản
            </div>
          </div>
          </BrandCard>

          <div className="grid gap-5 lg:grid-cols-[262px_1fr]">
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <BrandCard className="bg-white/92 p-3 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-[#E6792A]/15 pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6792A] text-lg font-black text-white shadow-md shadow-[#E6792A]/25">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[#1f2937]">
                      Xin chào, {user.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs font-semibold text-[#1f2937]">
                      {user.email}
                    </p>
                  </div>
                </div>

                <nav className="mt-3 space-y-1.5">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/tai-khoan" && pathname.startsWith(item.href));

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                          isActive
                            ? "!bg-[#E6792A] !text-white shadow-md shadow-[#E6792A]/25"
                            : "!text-[#1f2937] hover:bg-[#E6792A]/10 hover:!text-[#E6792A]"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isActive ? "!text-white" : "text-[#64748b] group-hover:!text-[#E6792A]"}`} />
                        <span className="flex-1">{item.label}</span>
                        <ChevronRight className={`h-3.5 w-3.5 ${isActive ? "!text-white" : "text-[#64748b] group-hover:!text-[#E6792A]"}`} />
                      </Link>
                    );
                  })}
                </nav>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Đăng xuất
                </button>
              </BrandCard>

              <BrandCard className="bg-white/92 p-4 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6792A]/10 text-[#E6792A]">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#1f2937]">Cần hỗ trợ?</p>
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-[#1f2937]">
                      Gọi hotline để được hỗ trợ đơn hàng và thông tin tài khoản.
                    </p>
                    <a
                      href="tel:0985463403"
                      className="mt-3 inline-flex rounded-full bg-[#E6792A] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
                    >
                      0985 463 403
                    </a>
                  </div>
                </div>
              </BrandCard>
            </aside>

            <section className="min-w-0">{children}</section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
