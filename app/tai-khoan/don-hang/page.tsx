"use client";

import BrandCard from "@/components/ui/BrandCard";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  Package,
  Search,
  Timer,
  Truck,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

type StatusKey = "all" | "processing" | "shipping" | "completed" | "cancelled";

const statusTabs: { key: StatusKey; label: string; count: number }[] = [
  { key: "all", label: "Tất cả", count: 12 },
  { key: "processing", label: "Đang xử lý", count: 2 },
  { key: "shipping", label: "Đang giao", count: 1 },
  { key: "completed", label: "Hoàn thành", count: 8 },
  { key: "cancelled", label: "Đã hủy", count: 1 },
];

const statusConfig = {
  processing: {
    label: "Đang xử lý",
    icon: Timer,
    color: "#E6792A",
    bg: "#FFF4EC",
  },
  shipping: {
    label: "Đang giao",
    icon: Truck,
    color: "#0284c7",
    bg: "#F0F9FF",
  },
  completed: {
    label: "Hoàn thành",
    icon: CheckCircle2,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  cancelled: {
    label: "Đã hủy",
    icon: XCircle,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
};

const orders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    items: [
      {
        name: "Danh thiếp cao cấp - 500 hộp",
        qty: 500,
        price: "2.450.000đ",
        image: "/danhmuc6.png",
      },
    ],
    total: "2.450.000đ",
    status: "processing" as const,
    payment: "Đã thanh toán",
    delivery: "Dự kiến 18/05",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    items: [
      {
        name: "Tem nhãn decal - 1000 tờ",
        qty: 1000,
        price: "1.800.000đ",
        image: "/danhmuc1.png",
      },
    ],
    total: "1.800.000đ",
    status: "shipping" as const,
    payment: "Đã thanh toán",
    delivery: "Giao ngày 15/05",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    items: [
      {
        name: "Brochure A4 - 200 cuốn",
        qty: 200,
        price: "3.200.000đ",
        image: "/danhmuc3.png",
      },
    ],
    total: "3.200.000đ",
    status: "completed" as const,
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026042804",
    date: "28/04/2026",
    items: [
      {
        name: "Hộp giấy carton - 500 hộp",
        qty: 500,
        price: "4.500.000đ",
        image: "/danhmuc5.png",
      },
    ],
    total: "4.500.000đ",
    status: "completed" as const,
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026041506",
    date: "15/04/2026",
    items: [
      {
        name: "In túi giấy kraft - 1000 túi",
        qty: 1000,
        price: "3.200.000đ",
        image: "/danhmuc5.png",
      },
    ],
    total: "3.200.000đ",
    status: "cancelled" as const,
    payment: "Hoàn tiền",
    delivery: "-",
  },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<StatusKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filteredOrders = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesTab = activeTab === "all" || order.status === activeTab;
      const matchesSearch =
        query.length === 0 ||
        order.id.toLowerCase().includes(query) ||
        order.items.some((item) => item.name.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-5">
      {/* Header */}
      <BrandCard className="bg-white p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              Đơn hàng
            </p>
            <h2
              className="mt-1 font-black text-gray-900"
              style={{ fontSize: "15px", lineHeight: 1.3 }}
            >
              Theo dõi đơn hàng của tôi
            </h2>
          </div>

          <div className="relative w-full xl:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Tìm mã đơn hoặc tên sản phẩm"
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-4 text-sm font-medium text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#E6792A] focus:bg-white focus:ring-2 focus:ring-[#E6792A]/10"
              style={{ paddingLeft: "2.75rem" }}
            />
          </div>
        </div>

        {/* Status Tabs */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {statusTabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#E6792A] text-white shadow-lg shadow-[#E6792A]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive ? "bg-white/25 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </BrandCard>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <BrandCard className="bg-white p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Package className="h-8 w-8 text-gray-400" />
            </div>
            <p className="mt-4 text-base font-bold text-gray-800">
              Không tìm thấy đơn hàng nào
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
          </BrandCard>
        ) : (
          filteredOrders.map((order) => {
            const config = statusConfig[order.status];
            const StatusIcon = config.icon;
            const isExpanded = expandedOrder === order.id;

            return (
              <BrandCard
                key={order.id}
                className="overflow-hidden bg-white"
              >
                {/* Order Header */}
                <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-800">
                        {order.id}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          backgroundColor: config.bg,
                          color: config.color,
                        }}
                      >
                        <StatusIcon className="h-3.5 w-3.5" />
                        {config.label}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Đặt ngày {order.date}
                    </span>
                  </div>
                </div>

                {/* Product Items */}
                <div className="divide-y divide-gray-100">
                  {order.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 px-6 py-4"
                    >
                      {/* Product Image */}
                      <div
                        className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white"
                        style={{
                          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 object-contain"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.style.display = "none";
                            const fallback = img.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className="hidden h-12 w-12 items-center justify-center text-gray-300"
                          style={{ display: "none" }}
                        >
                          <Package className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Số lượng: {item.qty.toLocaleString("vi-VN")}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p
                          className="font-black"
                          style={{ fontSize: "18px", color: "#DC2626", lineHeight: 1.2 }}
                        >
                          {item.price}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {order.payment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedOrder(isExpanded ? null : order.id)
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:border-[#E6792A] hover:text-[#E6792A]"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Chi tiết
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:border-[#E6792A] hover:text-[#E6792A]"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Tải hóa đơn
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Total */}
                      <div className="text-right mr-2">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          Tổng cộng
                        </p>
                        <p
                          className="font-black"
                          style={{ fontSize: "20px", color: "#DC2626", lineHeight: 1.2 }}
                        >
                          {order.total}
                        </p>
                      </div>

                      {/* Action Button */}
                      {order.status === "completed" && (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#E6792A] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
                        >
                          Mua lại
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {order.status === "shipping" && (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-600/25 transition hover:bg-sky-700"
                        >
                          Theo dõi đơn
                          <Truck className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {order.status === "processing" && (
                        <span className="text-xs font-semibold text-gray-500">
                          {order.delivery}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-white px-6 py-4">
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {[
                        ["Mã đơn", order.id],
                        ["Ngày đặt", order.date],
                        ["Thanh toán", order.payment],
                        ["Giao hàng", order.delivery],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            {label}
                          </p>
                          <p className="mt-1 text-sm font-bold text-gray-800">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </BrandCard>
            );
          })
        )}
      </div>
    </div>
  );
}