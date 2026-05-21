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
  { label: "Tổng đơn hàng", value: "12", note: "+2 trong tháng này", icon: Package, color: "#E6792A", bg: "#FFF4EC" },
  { label: "Đang xử lý", value: "2", note: "Cần theo dõi", icon: Clock, color: "#E6792A", bg: "#FFF4EC" },
  { label: "Đang giao", value: "1", note: "Dự kiến hôm nay", icon: Truck, color: "#0284c7", bg: "#F0F9FF" },
  { label: "Hoàn thành", value: "9", note: "Tỷ lệ 75%", icon: CheckCircle2, color: "#16A34A", bg: "#F0FDF4" },
];

const recentOrders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    product: "Danh thiếp cao cấp - 500 hộp",
    total: "2.450.000đ",
    status: "Đang xử lý",
    image: "/danhmuc6.png",
    statusColor: "#E6792A",
    statusBg: "#FFF4EC",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    product: "Tem nhãn decal - 1000 tờ",
    total: "1.800.000đ",
    status: "Đang giao",
    image: "/danhmuc1.png",
    statusColor: "#0284c7",
    statusBg: "#F0F9FF",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    product: "Brochure A4 - 200 cuốn",
    total: "3.200.000đ",
    status: "Hoàn thành",
    image: "/danhmuc3.png",
    statusColor: "#16A34A",
    statusBg: "#F0FDF4",
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
      {/* Header */}
      <BrandCard className="bg-white p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              Tổng quan
            </p>
            <h2
              className="mt-1 font-black text-gray-900"
              style={{ fontSize: "15px", lineHeight: 1.3 }}
            >
              Hoạt động tài khoản của bạn
            </h2>
          </div>
          <Link
            href="/tai-khoan/don-hang"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#E6792A] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#E6792A]/30 transition hover:bg-[#C66A27]"
          >
            Xem đơn hàng
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </BrandCard>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <BrandCard key={stat.label} className="bg-white p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-4xl font-black text-gray-900">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-500">{stat.note}</p>
                </div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: stat.bg, color: stat.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </BrandCard>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        {/* Recent Orders */}
        <BrandCard className="overflow-hidden bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4EC]">
                <ShoppingBag className="h-4 w-4 text-[#E6792A]" />
              </div>
              <h3 className="text-sm font-black text-gray-900">
                Đơn hàng gần đây
              </h3>
            </div>
            <Link
              href="/tai-khoan/don-hang"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E6792A] transition hover:text-[#C66A27]"
            >
              Xem tất cả
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center gap-4 px-6 py-4 transition hover:bg-gray-50/50"
              >
                {/* Product Image */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={order.image}
                    alt={order.product}
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="hidden h-10 w-10 items-center justify-center text-gray-300"
                    style={{ display: "none" }}
                  >
                    <Package className="h-5 w-5" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {order.product}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {order.id}
                  </p>
                </div>

                {/* Status & Price */}
                <div className="flex items-center gap-3">
                  <span
                    className="hidden sm:inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold"
                    style={{
                      backgroundColor: order.statusBg,
                      color: order.statusColor,
                    }}
                  >
                    {order.status}
                  </span>
                  <span className="text-sm font-black text-gray-900">
                    {order.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BrandCard>

        {/* Quick Actions */}
        <BrandCard className="bg-white p-5">
          <h3 className="text-sm font-black text-gray-900">
            Thao tác nhanh
          </h3>
          <div className="mt-4 space-y-2.5">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#E6792A] hover:bg-[#FFF4EC] hover:text-[#E6792A]"
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