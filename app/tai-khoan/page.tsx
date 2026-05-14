"use client";

import { motion } from "framer-motion";
import {
  Package,
  MapPin,
  Heart,
  Clock,
  ArrowRight,
  ShoppingBag,
  Star,
  TrendingUp,
  Truck,
  CheckCircle2,
  XCircle,
  Timer,
} from "lucide-react";
import Link from "next/link";

const recentOrders = [
  {
    id: "DH-2026051401",
    date: "14/05/2026",
    product: "Danh thiếp cao cấp - 500 hộp",
    total: "2.450.000₫",
    status: "processing",
    statusLabel: "Đang xử lý",
  },
  {
    id: "DH-2026051002",
    date: "10/05/2026",
    product: "Tem nhãn decal - 1000 tờ",
    total: "1.800.000₫",
    status: "shipping",
    statusLabel: "Đang giao",
  },
  {
    id: "DH-2026050503",
    date: "05/05/2026",
    product: "Brochure A4 - 200 cuốn",
    total: "3.200.000₫",
    status: "completed",
    statusLabel: "Hoàn thành",
  },
  {
    id: "DH-2026042804",
    date: "28/04/2026",
    product: "Hộp giấy carton - 500 hộp",
    total: "4.500.000₫",
    status: "completed",
    statusLabel: "Hoàn thành",
  },
];

type StatusKey = "processing" | "shipping" | "completed" | "cancelled";
const statusConfig: Record<StatusKey, { bg: string; text: string; icon: React.ElementType }> = {
  processing: { bg: "bg-blue-50", text: "text-blue-700", icon: Timer },
  shipping: { bg: "bg-amber-50", text: "text-amber-700", icon: Truck },
  completed: { bg: "bg-green-50", text: "text-green-700", icon: CheckCircle2 },
  cancelled: { bg: "bg-red-50", text: "text-red-700", icon: XCircle },
};

const quickStats = [
  {
    label: "Tổng đơn hàng",
    value: "12",
    icon: Package,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    change: "+2 tháng này",
  },
  {
    label: "Đang xử lý",
    value: "2",
    icon: Clock,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    change: "Cần theo dõi",
  },
  {
    label: "Đã hoàn thành",
    value: "9",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-green-50",
    change: "Tỷ lệ 75%",
  },
  {
    label: "Yêu thích",
    value: "8",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    change: "Sản phẩm đã lưu",
  },
];

const recommendedProducts = [
  { name: "Danh thiếp Kim Cương", price: "1.200.000₫", image: "/danhmuc1.png" },
  { name: "Tem Nhãn Decal Xi Bạc", price: "850.000₫", image: "/danhmuc2.png" },
  { name: "Brochure Cao Cấp A4", price: "2.400.000₫", image: "/danhmuc3.png" },
];

export default function AccountDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color ?? ""} shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</p>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <p className="text-[10px] text-gray-400 mt-1">{stat.change}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-50">
              <ShoppingBag className="w-4 h-4 text-amber-700" strokeWidth={2} />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Đơn hàng gần đây</h3>
          </div>
          <Link
            href="/tai-khoan/don-hang"
            className="text-xs text-amber-700 hover:text-amber-900 font-medium flex items-center gap-1 transition-colors"
          >
            Xem tất cả
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="divide-y divide-gray-50">
          {recentOrders.map((order, index) => {
            const config = statusConfig[order.status as StatusKey];
            const StatusIcon = config.icon as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors cursor-pointer group"
              >
                <div className={`p-2 rounded-lg ${config.bg} ${config.text}`}>
                  <StatusIcon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {order.product}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {order.id} • {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{order.total}</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${config.bg} ${config.text}`}>
                    {order.statusLabel}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amber-600 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Grid: Quick Actions + Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Package, label: "Đặt in mới", href: "/danh-muc/in-an", color: "bg-blue-50 text-blue-600" },
              { icon: MapPin, label: "Thêm địa chỉ", href: "/tai-khoan/dia-chi", color: "bg-green-50 text-green-600" },
              { icon: Heart, label: "Sản phẩm yêu thích", href: "/tai-khoan/yeu-thich", color: "bg-rose-50 text-rose-600" },
              { icon: TrendingUp, label: "Báo giá nhanh", href: "/lien-he", color: "bg-purple-50 text-purple-600" },
            ].map((action) => {
              const ActionIcon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all group"
                >
                  <div className={`p-2 rounded-lg ${action.color} group-hover:scale-110 transition-transform`}>
                    <ActionIcon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{action.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Recommended Products */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Gợi ý cho bạn</h3>
            <Link
              href="/san-pham"
              className="text-xs text-amber-700 hover:text-amber-900 font-medium flex items-center gap-1 transition-colors"
            >
              Xem thêm
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-3">
            {recommendedProducts.map((product, index) => (
              <Link
                key={product.name}
                href="/san-pham"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-amber-400 fill-amber-400"
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1">(4.8)</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-amber-800">{product.price}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}