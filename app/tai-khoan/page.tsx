"use client";

import BrandCard from "@/components/ui/BrandCard";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Tổng đơn hàng", value: "12", note: "+2 trong tháng này", icon: Package },
  { label: "Đang xử lý", value: "2", note: "Cần theo dõi", icon: Clock },
  { label: "Đang giao", value: "1", note: "Dự kiến hôm nay", icon: Truck },
  { label: "Hoàn thành", value: "9", note: "Tỷ lệ 75%", icon: CheckCircle2 },
];

const recentOrders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    product: "Danh thiếp cao cấp - 500 hộp",
    total: "2.450.000đ",
    status: "Đang xử lý",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    product: "Tem nhãn decal - 1000 tờ",
    total: "1.800.000đ",
    status: "Đang giao",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    product: "Brochure A4 - 200 cuốn",
    total: "3.200.000đ",
    status: "Hoàn thành",
  },
];

const quickActions = [
  { label: "Đặt in mới", href: "/", icon: ShoppingBag },
  { label: "Xem đơn hàng", href: "/tai-khoan/don-hang", icon: Package },
  { label: "Quản lý địa chỉ", href: "/tai-khoan/dia-chi", icon: MapPin },
];

export default function AccountDashboard() {
  return (
    <div className="space-y-5">
      <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              Tổng quan
            </p>
            <h2 className="mt-1 !font-sans !text-lg !font-black !text-[#1f2937]">
              Hoạt động tài khoản của bạn
            </h2>
          </div>
          <Link
            href="/tai-khoan/don-hang"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6792A] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
          >
            Xem đơn hàng
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </BrandCard>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <BrandCard key={stat.label} className="bg-white/90 p-4 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E6792A]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#1f2937]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-[#1f2937]">{stat.note}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6792A]/10 text-[#E6792A]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </BrandCard>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        <BrandCard className="overflow-hidden bg-white/90 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-[#E6792A]/15 px-5 py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-[#E6792A]" />
              <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
                Đơn hàng gần đây
              </h3>
            </div>
            <Link
              href="/tai-khoan/don-hang"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#E6792A] transition hover:text-[#C66A27]"
            >
              Xem tất cả
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-[#E6792A]/10">
            {recentOrders.map((order) => (
              <div key={order.id} className="grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto]">
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-[#1f2937]">{order.product}</p>
                  <p className="mt-1 text-xs font-semibold text-[#1f2937]">
                    {order.id} · {order.date}
                  </p>
                </div>
                <div className="flex items-center gap-3 md:justify-end">
                  <span className="rounded-full bg-[#E6792A]/10 px-3 py-1 text-[11px] font-bold text-[#E6792A]">
                    {order.status}
                  </span>
                  <span className="text-sm font-black text-[#1f2937]">{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        </BrandCard>

        <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
          <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
            Thao tác nhanh
          </h3>
          <div className="mt-4 space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 rounded-xl border border-[#E6792A]/20 bg-white px-3 py-3 text-sm font-bold text-[#1f2937] transition hover:border-[#E6792A] hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1">{action.label}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              );
            })}
          </div>
        </BrandCard>
      </div>
    </div>
  );
}
