"use client";

import { motion } from "framer-motion";
import {
  Package,
  Search,
  Filter,
  Truck,
  CheckCircle2,
  XCircle,
  Timer,
  Eye,
  Download,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

type StatusKey = "all" | "processing" | "shipping" | "completed" | "cancelled";

const statusTabs: { key: StatusKey; label: string; count: number }[] = [
  { key: "all", label: "Tất cả", count: 12 },
  { key: "processing", label: "Đang xử lý", count: 2 },
  { key: "shipping", label: "Đang giao", count: 1 },
  { key: "completed", label: "Hoàn thành", count: 8 },
  { key: "cancelled", label: "Đã hủy", count: 1 },
];

const statusConfig: Record<string, { bg: string; text: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }> = {
  processing: { bg: "bg-blue-50", text: "text-blue-700", icon: Timer },
  shipping: { bg: "bg-amber-50", text: "text-amber-700", icon: Truck },
  completed: { bg: "bg-green-50", text: "text-green-700", icon: CheckCircle2 },
  cancelled: { bg: "bg-red-50", text: "text-red-700", icon: XCircle },
};

const orders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    items: [
      { name: "Danh thiếp cao cấp - 500 hộp", qty: 500, price: "2.450.000₫" },
    ],
    total: "2.450.000₫",
    status: "processing",
    statusLabel: "Đang xử lý",
    payment: "Đã thanh toán",
    delivery: "Dự kiến 18/05",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    items: [
      { name: "Tem nhãn decal - 1000 tờ", qty: 1000, price: "1.800.000₫" },
    ],
    total: "1.800.000₫",
    status: "shipping",
    statusLabel: "Đang giao",
    payment: "Đã thanh toán",
    delivery: "Giao ngày 15/05",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    items: [
      { name: "Brochure A4 - 200 cuốn", qty: 200, price: "3.200.000₫" },
    ],
    total: "3.200.000₫",
    status: "completed",
    statusLabel: "Hoàn thành",
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026042804",
    date: "28/04/2026",
    items: [
      { name: "Hộp giấy carton - 500 hộp", qty: 500, price: "4.500.000₫" },
    ],
    total: "4.500.000₫",
    status: "completed",
    statusLabel: "Hoàn thành",
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026042005",
    date: "20/04/2026",
    items: [
      { name: "Catalogue sản phẩm A4 - 100 cuốn", qty: 100, price: "5.800.000₫" },
    ],
    total: "5.800.000₫",
    status: "completed",
    statusLabel: "Hoàn thành",
    payment: "Đã thanh toán",
    delivery: "Đã giao",
  },
  {
    id: "DH-2026041506",
    date: "15/04/2026",
    items: [
      { name: "In túi giấy kraft - 1000 túi", qty: 1000, price: "3.200.000₫" },
    ],
    total: "3.200.000₫",
    status: "cancelled",
    statusLabel: "Đã hủy",
    payment: "Hoàn tiền",
    delivery: "—",
  },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<StatusKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === "all" || order.status === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTab && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Đơn hàng của tôi</h2>
        <p className="text-sm text-gray-500">Quản lý và theo dõi đơn hàng</p>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {statusTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? "bg-amber-800 text-white shadow-lg shadow-amber-900/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-800"
            }`}
          >
            {tab.label}
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === tab.key
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm theo mã đơn hoặc tên sản phẩm..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-500">Không tìm thấy đơn hàng nào</p>
          </div>
        ) : (
          filteredOrders.map((order, index) => {
            const config = statusConfig[order.status];
            const StatusIcon = config.icon;
            const isExpanded = expandedOrder === order.id;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Order Header */}
                <div className="flex items-center gap-4 p-5">
                  <div className={`p-2.5 rounded-xl ${config.bg} ${config.text}`}>
                    <StatusIcon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {order.id}
                      </p>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${config.bg} ${config.text}`}
                      >
                        {order.statusLabel}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Đặt ngày {order.date} • {order.payment}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-gray-900">{order.total}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{order.delivery}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="px-5 pb-3">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-400">Số lượng: {item.qty}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{item.price}</p>
                    </div>
                  ))}
                </div>

                {/* Order Actions */}
                <div className="flex items-center gap-2 px-5 py-3 border-t border-gray-50 bg-gray-50/50">
                  <button
                    onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-amber-800 rounded-lg hover:bg-white transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Chi tiết
                    <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-amber-800 rounded-lg hover:bg-white transition-all">
                    <Download className="w-3.5 h-3.5" />
                    Tải hóa đơn
                  </button>
                  {order.status === "completed" && (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 hover:text-amber-900 rounded-lg hover:bg-amber-50 transition-all ml-auto">
                      Mua lại
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  {order.status === "shipping" && (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 rounded-lg hover:bg-blue-50 transition-all ml-auto">
                      Theo dõi đơn
                      <Truck className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Expanded Detail */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-100 bg-amber-50/30"
                  >
                    <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Mã đơn</p>
                        <p className="text-xs font-medium text-gray-800">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Ngày đặt</p>
                        <p className="text-xs font-medium text-gray-800">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Thanh toán</p>
                        <p className="text-xs font-medium text-gray-800">{order.payment}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Giao hàng</p>
                        <p className="text-xs font-medium text-gray-800">{order.delivery}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}