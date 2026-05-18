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
    className: "bg-[#E6792A]/10 text-[#E6792A]",
  },
  shipping: {
    label: "Đang giao",
    icon: Truck,
    className: "bg-sky-50 text-sky-700",
  },
  completed: {
    label: "Hoàn thành",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700",
  },
  cancelled: {
    label: "Đã hủy",
    icon: XCircle,
    className: "bg-red-50 text-red-700",
  },
};

const orders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    items: [{ name: "Danh thiếp cao cấp - 500 hộp", qty: 500, price: "2.450.000đ" }],
    total: "2.450.000đ",
    status: "processing" as const,
    payment: "Đã thanh toán",
    delivery: "Dự kiến 18/05",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    items: [{ name: "Tem nhãn decal - 1000 tờ", qty: 1000, price: "1.800.000đ" }],
    total: "1.800.000đ",
    status: "shipping" as const,
    payment: "Đã thanh toán",
    delivery: "Giao ngày 15/05",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    items: [{ name: "Brochure A4 - 200 cuốn", qty: 200, price: "3.200.000đ" }],
    total: "3.200.000đ",
    status: "completed" as const,
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026042804",
    date: "28/04/2026",
    items: [{ name: "Hộp giấy carton - 500 hộp", qty: 500, price: "4.500.000đ" }],
    total: "4.500.000đ",
    status: "completed" as const,
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026041506",
    date: "15/04/2026",
    items: [{ name: "In túi giấy kraft - 1000 túi", qty: 1000, price: "3.200.000đ" }],
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
      <BrandCard className="bg-white/92 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              Đơn hàng
            </p>
            <h2 className="mt-1 !font-sans !text-lg !font-black !text-[#1f2937]">
              Theo dõi đơn hàng của tôi
            </h2>
          </div>

          <div className="relative w-full xl:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E6792A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Tìm mã đơn hoặc tên sản phẩm"
              style={{ paddingLeft: "3rem" }}
              className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 pl-12 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
            />
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {statusTabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition ${
                  isActive
                    ? "border-[#E6792A] bg-[#E6792A] text-white shadow-md shadow-[#E6792A]/25"
                    : "border-[#E6792A]/25 bg-white text-[#1f2937] hover:border-[#E6792A] hover:text-[#E6792A]"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-[#E6792A]/10 text-[#E6792A]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </BrandCard>

      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <BrandCard className="bg-white/92 p-10 text-center backdrop-blur-xl">
            <Package className="mx-auto h-10 w-10 text-[#E6792A]" />
            <p className="mt-3 text-sm font-black text-[#1f2937]">
              Không tìm thấy đơn hàng nào
            </p>
          </BrandCard>
        ) : (
          filteredOrders.map((order) => {
            const config = statusConfig[order.status];
            const StatusIcon = config.icon;
            const isExpanded = expandedOrder === order.id;

            return (
              <BrandCard key={order.id} className="overflow-hidden bg-white/92 backdrop-blur-xl">
                <div className="grid gap-4 p-5 xl:grid-cols-[1fr_auto] xl:items-start">
                  <div className="flex min-w-0 gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.className}`}>
                      <StatusIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-black text-[#1f2937]">{order.id}</p>
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${config.className}`}>
                          {config.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-[#1f2937]">
                        Đặt ngày {order.date} · {order.payment}
                      </p>
                    </div>
                  </div>

                  <div className="xl:text-right">
                    <p className="text-lg font-black text-[#1f2937]">{order.total}</p>
                    <p className="mt-1 text-xs font-semibold text-[#1f2937]">{order.delivery}</p>
                  </div>
                </div>

                <div className="border-y border-[#E6792A]/12 bg-[#fffaf6] px-5 py-3">
                  {order.items.map((item) => (
                    <div key={item.name} className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#E6792A] shadow-sm">
                          <Package className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-[#1f2937]">{item.name}</p>
                          <p className="mt-0.5 text-xs font-semibold text-[#1f2937]">
                            Số lượng: {item.qty}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-black text-[#1f2937]">{item.price}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 px-5 py-3">
                  <button
                    type="button"
                    onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-[#1f2937] transition hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Chi tiết
                    <ChevronDown className={`h-3 w-3 transition ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-[#1f2937] transition hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Tải hóa đơn
                  </button>
                  {order.status === "completed" ? (
                    <button
                      type="button"
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#E6792A] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
                    >
                      Mua lại
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                  {order.status === "shipping" ? (
                    <button
                      type="button"
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-sky-700"
                    >
                      Theo dõi đơn
                      <Truck className="h-3.5 w-3.5" />
                    </button>
                  ) : null}
                </div>

                {isExpanded ? (
                  <div className="grid gap-3 border-t border-[#E6792A]/12 bg-white px-5 py-4 sm:grid-cols-2 xl:grid-cols-4">
                    {[
                      ["Mã đơn", order.id],
                      ["Ngày đặt", order.date],
                      ["Thanh toán", order.payment],
                      ["Giao hàng", order.delivery],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-bold text-[#1f2937]">{value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </BrandCard>
            );
          })
        )}
      </div>
    </div>
  );
}
