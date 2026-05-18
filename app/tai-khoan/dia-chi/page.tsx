"use client";

import BrandCard from "@/components/ui/BrandCard";
import {
  MapPin,
  Plus,
  Edit3,
  Trash2,
  Check,
  Home,
  Building,
  Star,
  ArrowRight,
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
    <div className="space-y-5">
      <BrandCard className="bg-white/92 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              Địa chỉ
            </p>
            <h2 className="mt-1 !font-sans !text-lg !font-black !text-[#1f2937]">
              Địa chỉ giao hàng của tôi
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", phone: "", address: "", ward: "", district: "", city: "", type: "home" });
              setShowForm(true);
            }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6792A] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
          >
            <Plus className="h-3.5 w-3.5" />
            Thêm địa chỉ
          </button>
        </div>
      </BrandCard>

      {showForm && (
        <BrandCard className="bg-white/92 p-5 backdrop-blur-xl">
          <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
            {editingId ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Họ và tên
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nguyễn Văn A"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Số điện thoại
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0985 463 403"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Địa chỉ
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Số nhà, tên đường"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Phường/Xã
              </label>
              <input
                type="text"
                value={formData.ward}
                onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                placeholder="Phường An Phú"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Quận/Huyện
              </label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="Quận Ninh Kiều"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Tỉnh/Thành phố
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="TP. Cần Thơ"
                className="h-11 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#E6792A]">
                Loại địa chỉ
              </label>
              <div className="flex gap-2">
                {[
                  { key: "home" as const, label: "Nhà riêng", icon: Home },
                  { key: "office" as const, label: "Văn phòng", icon: Building },
                ].map((t) => {
                  const TIcon = t.icon;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: t.key })}
                      className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${
                        formData.type === t.key
                          ? "border-[#E6792A] bg-[#E6792A]/10 text-[#E6792A]"
                          : "border-[#dfe5ee] text-[#1f2937] hover:border-[#E6792A] hover:text-[#E6792A]"
                      }`}
                    >
                      <TIcon className="h-4 w-4" />
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 border-t border-[#E6792A]/15 pt-5">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-full bg-[#E6792A] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
            >
              {editingId ? "Cập nhật" : "Lưu địa chỉ"}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="rounded-full border border-[#E6792A]/25 px-5 py-2.5 text-xs font-bold text-[#1f2937] transition hover:border-[#E6792A] hover:text-[#E6792A]"
            >
              Hủy
            </button>
          </div>
        </BrandCard>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {addresses.map((addr) => (
          <BrandCard
            key={addr.id}
            className={`flex min-h-[224px] flex-col overflow-hidden bg-white/92 backdrop-blur-xl transition-all hover:shadow-md ${
              addr.isDefault ? "ring-2 ring-[#E6792A]/30" : ""
            }`}
          >
            <div className="flex-1 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      addr.type === "home"
                        ? "bg-[#E6792A]/10 text-[#E6792A]"
                        : "bg-sky-50 text-sky-600"
                    }`}
                  >
                    {addr.type === "home" ? (
                      <Home className="h-5 w-5" />
                    ) : (
                      <Building className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#1f2937]">{addr.name}</p>
                    <p className="mt-0.5 text-xs font-semibold text-[#1f2937]">
                      {addr.phone}
                    </p>
                  </div>
                </div>
                {addr.isDefault && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E6792A]/10 px-2.5 py-1 text-[10px] font-bold text-[#E6792A]">
                    <Star className="h-2.5 w-2.5 fill-[#E6792A] text-[#E6792A]" />
                    Mặc định
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#64748b]" />
                <p className="text-xs font-semibold leading-relaxed text-[#1f2937]">
                  {addr.address}, {addr.ward}, {addr.district}, {addr.city}
                </p>
              </div>
            </div>

            <div className="mt-auto flex min-h-[64px] items-center gap-2 border-t border-[#E6792A]/12 bg-[#fffaf6] px-4 py-3">
              <button
                type="button"
                onClick={() => handleEdit(addr)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-[#1f2937] transition hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
              >
                <Edit3 className="h-3.5 w-3.5" />
                Sửa
              </button>
              {!addr.isDefault && (
                <button
                  type="button"
                  onClick={() => handleSetDefault(addr.id)}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-[#1f2937] transition hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
                >
                  <Check className="h-3.5 w-3.5" />
                  Đặt mặc định
                </button>
              )}
              {!addr.isDefault && (
                <button
                  type="button"
                  onClick={() => handleDelete(addr.id)}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-red-500 transition hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Xóa
                </button>
              )}
            </div>
          </BrandCard>
        ))}
      </div>

      {addresses.length === 0 && (
        <BrandCard className="bg-white/92 p-12 text-center backdrop-blur-xl">
          <MapPin className="mx-auto h-10 w-10 text-[#E6792A]" />
          <p className="mt-3 text-sm font-black text-[#1f2937]">
            Chưa có địa chỉ nào
          </p>
          <p className="mt-1 text-xs font-semibold text-[#1f2937]">
            Thêm địa chỉ giao hàng để đặt hàng nhanh hơn
          </p>
        </BrandCard>
      )}
    </div>
  );
}
