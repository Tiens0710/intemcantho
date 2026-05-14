"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Plus,
  Edit3,
  Trash2,
  Check,
  Home,
  Building,
  Star,
} from "lucide-react";
import { useState } from "react";

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  type: "home" | "office";
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    phone: "0985 463 403",
    address: "123 Đường 30/4",
    ward: "Phường An Phú",
    district: "Quận Ninh Kiều",
    city: "TP. Cần Thơ",
    type: "home",
    isDefault: true,
  },
  {
    id: "2",
    name: "Nguyễn Văn A",
    phone: "0985 463 403",
    address: "456 Đường Nguyễn Văn Cừ",
    ward: "Phường An Khánh",
    district: "Quận Ninh Kiều",
    city: "TP. Cần Thơ",
    type: "office",
    isDefault: false,
  },
];

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    ward: "",
    district: "",
    city: "",
    type: "home" as "home" | "office",
  });

  const handleEdit = (addr: Address) => {
    setEditingId(addr.id);
    setFormData({
      name: addr.name,
      phone: addr.phone,
      address: addr.address,
      ward: addr.ward,
      district: addr.district,
      city: addr.city,
      type: addr.type,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  };

  const handleSave = () => {
    if (editingId) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingId
            ? { ...a, ...formData, isDefault: a.isDefault }
            : a
        )
      );
    } else {
      const newAddr: Address = {
        id: String(Date.now()),
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses((prev) => [...prev, newAddr]);
    }
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", phone: "", address: "", ward: "", district: "", city: "", type: "home" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Địa chỉ giao hàng</h2>
          <p className="text-sm text-gray-500">Quản lý địa chỉ nhận hàng của bạn</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            setFormData({ name: "", phone: "", address: "", ward: "", district: "", city: "", type: "home" });
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-800 text-white rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors shadow-lg shadow-amber-900/20"
        >
          <Plus className="w-4 h-4" />
          Thêm địa chỉ
        </button>
      </div>

      {/* Address Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-amber-200 shadow-md p-6"
        >
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {editingId ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Họ và tên</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nguyễn Văn A"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Số điện thoại</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0985 463 403"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 mb-1.5">Địa chỉ</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Số nhà, tên đường"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Phường/Xã</label>
              <input
                type="text"
                value={formData.ward}
                onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                placeholder="Phường An Phú"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Quận/Huyện</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="Quận Ninh Kiều"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Tỉnh/Thành phố</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="TP. Cần Thơ"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Loại địa chỉ</label>
              <div className="flex gap-2">
                {[
                  { key: "home" as const, label: "Nhà riêng", icon: Home },
                  { key: "office" as const, label: "Văn phòng", icon: Building },
                ].map((t) => {
                  const TIcon = t.icon;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setFormData({ ...formData, type: t.key })}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        formData.type === t.key
                          ? "border-amber-400 bg-amber-50 text-amber-800"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <TIcon className="w-4 h-4" />
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-amber-800 text-white rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors"
            >
              {editingId ? "Cập nhật" : "Lưu địa chỉ"}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Hủy
            </button>
          </div>
        </motion.div>
      )}

      {/* Address Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr, index) => (
          <motion.div
            key={addr.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white rounded-2xl border overflow-hidden transition-all hover:shadow-md ${
              addr.isDefault
                ? "border-amber-300 shadow-sm ring-1 ring-amber-100"
                : "border-gray-100"
            }`}
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${
                    addr.type === "home" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                  }`}>
                    {addr.type === "home" ? (
                      <Home className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Building className="w-4 h-4" strokeWidth={2} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{addr.name}</p>
                    <p className="text-xs text-gray-500">{addr.phone}</p>
                  </div>
                </div>
                {addr.isDefault && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold">
                    <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    Mặc định
                  </span>
                )}
              </div>
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {addr.address}, {addr.ward}, {addr.district}, {addr.city}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 border-t border-gray-50 bg-gray-50/50">
              <button
                onClick={() => handleEdit(addr)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-amber-800 rounded-lg hover:bg-white transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Sửa
              </button>
              {!addr.isDefault && (
                <button
                  onClick={() => handleSetDefault(addr.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-amber-800 rounded-lg hover:bg-white transition-all"
                >
                  <Check className="w-3.5 h-3.5" />
                  Đặt mặc định
                </button>
              )}
              {!addr.isDefault && (
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-all ml-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Xóa
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-500">Chưa có địa chỉ nào</p>
          <p className="text-xs text-gray-400 mt-1">Thêm địa chỉ giao hàng để đặt hàng nhanh hơn</p>
        </div>
      )}
    </motion.div>
  );
}