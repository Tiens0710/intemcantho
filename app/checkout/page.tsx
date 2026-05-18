"use client";

import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BrandCard from "@/components/ui/BrandCard";
import { useAppStore } from "@/lib/store";
import {
  ArrowLeft,
  Banknote,
  Building2,
  CheckCircle,
  ChevronDown,
  Home,
  Lock,
  MapPin,
  Package,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Truck,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ShippingMethod = "standard" | "express";
type PaymentMethod = "cod" | "bank";
type SavedAddress = {
  id: string;
  label: string;
  name: string;
  phone: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  type: "home" | "office";
  isDefault?: boolean;
};
type AddressOption = {
  code: number;
  name: string;
};
type WardOption = AddressOption;
type DistrictOption = AddressOption & {
  wards?: WardOption[];
};
type ProvinceOption = AddressOption & {
  districts?: DistrictOption[];
};

const shippingOptions = {
  standard: {
    label: "Giao hàng tiêu chuẩn",
    description: "2 - 4 ngày làm việc",
    price: 33000,
    icon: Truck,
  },
  express: {
    label: "Giao hàng nhanh",
    description: "Giao trong 24h",
    price: 60000,
    icon: Zap,
  },
} satisfies Record<ShippingMethod, {
  label: string;
  description: string;
  price: number;
  icon: React.ComponentType<{ className?: string }>;
}>;

const paymentOptions = {
  cod: {
    label: "Thanh toán khi nhận hàng (COD)",
    description: "Thanh toán bằng tiền mặt",
    icon: Banknote,
  },
  bank: {
    label: "Chuyển khoản ngân hàng",
    description: "Chuyển khoản qua ngân hàng",
    icon: Building2,
  },
} satisfies Record<PaymentMethod, {
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}>;

const savedAddresses: SavedAddress[] = [
  {
    id: "addr-1",
    label: "Nhà riêng",
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
    id: "addr-2",
    label: "Văn phòng",
    name: "Nguyễn Văn A",
    phone: "0985 463 403",
    address: "456 Đường Nguyễn Văn Cừ",
    ward: "Phường An Khánh",
    district: "Quận Ninh Kiều",
    city: "TP. Cần Thơ",
    type: "office",
  },
];

function formatPrice(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

function CheckoutSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <BrandCard className="relative z-10 bg-white/82 p-4 shadow-[0_18px_45px_rgba(97,58,26,0.08)] backdrop-blur-xl md:p-5">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#E6792A] text-xs font-bold text-white shadow-md shadow-[#E6792A]/20">
          {number}
        </span>
        <h2 className="!font-sans !text-[11px] !font-bold uppercase !tracking-[0.16em] !text-[#E6792A]">
          {title}
        </h2>
      </div>
      {children}
    </BrandCard>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold text-[#1f2937]">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function TextInput({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-10 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
    />
  );
}

function SelectInput({
  placeholder,
  options,
  value,
  disabled,
  onChange,
}: {
  placeholder: string;
  options: AddressOption[];
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const selectedOption = options.find((option) => String(option.code) === value);
  const [query, setQuery] = useState("");
  const inputValue = query || selectedOption?.name || "";
  const [isOpen, setIsOpen] = useState(false);
  const normalizeSearch = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filteredOptions = options
    .filter((option) => normalizeSearch(option.name).includes(normalizeSearch(inputValue)))
    .slice(0, 80);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => !disabled && setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 120)}
        onChange={(event) => {
          const nextQuery = event.target.value;
          setQuery(nextQuery);
          setIsOpen(true);
          if (value && nextQuery !== selectedOption?.name) {
            onChange("");
          }
        }}
        className="!h-12 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 pr-9 !text-sm font-semibold !leading-normal text-[#1f2937] placeholder:text-[#64748b] outline-none transition disabled:cursor-not-allowed disabled:bg-[#f8fafc] disabled:text-[#94a3b8] focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
      />
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8a97a8]" />
      {isOpen && !disabled ? (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-[100] max-h-56 overflow-y-auto rounded-lg border border-[#dfe5ee] bg-white py-1 shadow-lg shadow-slate-900/10">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onChange(String(option.code));
                  setQuery("");
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm font-semibold text-[#1f2937] transition hover:bg-[#E6792A]/10 hover:text-[#E6792A]"
              >
                {option.name}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm font-semibold text-[#64748b]">
              Không tìm thấy kết quả
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

function ChoiceRow({
  active,
  icon: Icon,
  label,
  description,
  price,
  onClick,
}: {
  active: boolean;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  price?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left transition ${
        active
          ? "border-[#E6792A] bg-[#fff7ef] shadow-[0_6px_16px_rgba(230,121,42,0.08)]"
          : "border-[#e2e8f0] bg-white hover:border-[#e8cdb6] hover:bg-[#fffaf5]"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
          active ? "border-[#E6792A]" : "border-[#d5dde8]"
        }`}
      >
        {active ? <span className="h-2 w-2 rounded-full bg-[#E6792A]" /> : null}
      </span>
      <Icon className={`h-5 w-5 ${active ? "text-[#E6792A]" : "text-[#1f2937]"}`} />
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold text-[#1f2937]">{label}</span>
        <span className="mt-0.5 block text-[11px] font-semibold text-[#1f2937]">{description}</span>
      </span>
      {typeof price === "number" ? (
        <span className="text-xs font-bold text-[#E6792A]">{formatPrice(price)}</span>
      ) : null}
    </button>
  );
}

export default function CheckoutPage() {
  const buyNowItem = useAppStore((s) => s.buyNowItem);
  const setBuyNowItem = useAppStore((s) => s.setBuyNowItem);
  const storeCart = useAppStore((s) => s.cart);
  const storeCartTotal = useAppStore((s) => s.cartTotal());
  // If buyNowItem is set, show only that item; otherwise show full cart
  const cart = buyNowItem ? [buyNowItem] : storeCart;
  const cartTotal = buyNowItem ? buyNowItem.price * buyNowItem.quantity : storeCartTotal;
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [selectedAddressId, setSelectedAddressId] = useState(savedAddresses[0]?.id ?? "new");
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [provinces, setProvinces] = useState<ProvinceOption[]>([]);
  const [addressLoading, setAddressLoading] = useState(true);
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [selectedWardCode, setSelectedWardCode] = useState("");
  const shippingFee = cart.length > 0 ? shippingOptions[shippingMethod].price : 0;
  const clearBuyNow = () => {
    setBuyNowItem(null);
  };
  const orderTotal = cartTotal + shippingFee;

  useEffect(() => {
    let cancelled = false;

    async function loadAddressOptions() {
      try {
        const response = await fetch("https://provinces.open-api.vn/api/v1/?depth=3");
        if (!response.ok) throw new Error("Failed to load address options");
        const data = (await response.json()) as ProvinceOption[];
        if (!cancelled) setProvinces(data);
      } catch {
        if (!cancelled) setProvinces([]);
      } finally {
        if (!cancelled) setAddressLoading(false);
      }
    }

    loadAddressOptions();

    return () => {
      cancelled = true;
    };
  }, []);

  const itemCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );
  const selectedProvince = provinces.find((province) => String(province.code) === selectedProvinceCode);
  const districts = selectedProvince?.districts ?? [];
  const selectedDistrict = districts.find((district) => String(district.code) === selectedDistrictCode);
  const wards = selectedDistrict?.wards ?? [];
  const selectedSavedAddress = savedAddresses.find((address) => address.id === selectedAddressId);
  const isUsingNewAddress = selectedAddressId === "new";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,94,60,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.11) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container relative mx-auto px-4 pb-16 pt-20 md:pt-24">
          {/* Compact Header */}
          <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2">
              <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#a2846d]">
                <Link href="/" className="transition hover:text-[#E6792A]">Trang chủ</Link>
                <span className="mx-1.5 text-[#d1b89f]">/</span>
                <Link href="/cart" className="transition hover:text-[#E6792A]">Giỏ hàng</Link>
                <span className="mx-1.5 text-[#d1b89f]">/</span>
                <span className="text-[#E6792A]">Checkout</span>
              </nav>
              <Link
                href="/cart"
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e5d6c4] bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6792A] shadow-sm transition hover:shadow-md"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Quay lại giỏ hàng
              </Link>
              <h1
                className="text-2xl font-bold uppercase leading-tight text-[#E6792A] md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Thanh toán đơn hàng
              </h1>
            </div>
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f2e5da] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              <Lock className="h-3.5 w-3.5" />
              Bảo mật tuyệt đối
            </div>
          </div>

          {cart.length === 0 ? (
            <BrandCard className="bg-white/85 p-8 text-center">
              <p className="text-sm font-semibold text-[#1f2937]">Giỏ hàng đang trống, chưa có đơn hàng để thanh toán.</p>
              <Link
                href="/"
                className="mt-4 inline-flex rounded-full bg-[#E6792A] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[#C66A27]"
              >
                Tiếp tục mua
              </Link>
            </BrandCard>
          ) : (
            <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                {/* Section 1: Shipping Info */}
                <div className="relative z-30">
                <CheckoutSection number={1} title="Thông tin giao hàng">
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1f2937]">
                      Chọn địa chỉ đã lưu
                    </p>
                    <div className="grid gap-2 lg:grid-cols-3">
                      {savedAddresses.map((address) => {
                        const Icon = address.type === "home" ? Home : Building2;
                        const isSelected = selectedAddressId === address.id;

                        return (
                          <button
                            key={address.id}
                            type="button"
                            onClick={() => setSelectedAddressId(address.id)}
                            className={`rounded-lg border px-3 py-2.5 text-left transition ${
                              isSelected
                                ? "border-[#E6792A] bg-[#fff7ef] shadow-[0_6px_16px_rgba(230,121,42,0.08)]"
                                : "border-[#e2e8f0] bg-white hover:border-[#E6792A]/40"
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                  isSelected
                                    ? "bg-[#E6792A] text-white"
                                    : "bg-[#E6792A]/10 text-[#E6792A]"
                                }`}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <p className="text-xs font-black text-[#1f2937]">
                                    {address.label}
                                  </p>
                                  {address.isDefault ? (
                                    <span className="rounded-full bg-[#E6792A]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#E6792A]">
                                      Mặc định
                                    </span>
                                  ) : null}
                                </div>
                                <p className="mt-0.5 text-[11px] font-semibold text-[#1f2937]">
                                  {address.name} · {address.phone}
                                </p>
                                <p className="mt-0.5 line-clamp-1 text-[11px] font-semibold leading-relaxed text-[#1f2937]">
                                  {address.address}, {address.ward}, {address.district}, {address.city}
                                </p>
                              </div>
                              {isSelected ? (
                                <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[#E6792A]" />
                              ) : null}
                            </div>
                          </button>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => setSelectedAddressId("new")}
                        className={`rounded-lg border px-3 py-2.5 text-left transition ${
                          isUsingNewAddress
                            ? "border-[#E6792A] bg-[#fff7ef] shadow-[0_6px_16px_rgba(230,121,42,0.08)]"
                            : "border-[#e2e8f0] bg-white hover:border-[#E6792A]/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                              isUsingNewAddress
                                ? "bg-[#E6792A] text-white"
                                : "bg-[#E6792A]/10 text-[#E6792A]"
                            }`}
                          >
                            <MapPin className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-[#1f2937]">
                              Nhập địa chỉ mới
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-[11px] font-semibold text-[#1f2937]">
                              Dùng địa chỉ khác cho đơn hàng này
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {selectedSavedAddress && !isUsingNewAddress ? (
                    <div className="mt-2 rounded-lg border border-[#E6792A]/20 bg-[#fffaf6] px-3 py-2">
                      <div className="flex gap-2 text-[11px] font-semibold leading-relaxed text-[#1f2937]">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E6792A]" />
                        <span>
                          Sẽ giao đến: {selectedSavedAddress.address}, {selectedSavedAddress.ward}, {selectedSavedAddress.district}, {selectedSavedAddress.city}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {isUsingNewAddress ? (
                  <>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <Field label="Họ và tên" required>
                      <TextInput placeholder="Nhập họ và tên" />
                    </Field>
                    <Field label="Số điện thoại" required>
                      <TextInput type="tel" placeholder="Nhập số điện thoại" />
                    </Field>
                    <Field label="Email (tùy chọn)">
                      <TextInput type="email" placeholder="Nhập email" />
                    </Field>
                  </div>

                  <div className="mt-3">
                    <Field label="Địa chỉ" required>
                      <TextInput placeholder="Số nhà, tên đường..." />
                    </Field>
                  </div>

                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    <Field label="Tỉnh / Thành phố" required>
                      <SelectInput
                        placeholder={addressLoading ? "Đang tải tỉnh / thành phố..." : "Chọn tỉnh / thành phố"}
                        options={provinces}
                        value={selectedProvinceCode}
                        disabled={addressLoading || provinces.length === 0}
                        onChange={(value) => {
                          setSelectedProvinceCode(value);
                          setSelectedDistrictCode("");
                          setSelectedWardCode("");
                        }}
                      />
                    </Field>
                    <Field label="Quận / Huyện" required>
                      <SelectInput
                        key={`district-${selectedProvinceCode}`}
                        placeholder={selectedProvinceCode ? "Chọn quận / huyện" : "Chọn tỉnh / thành phố trước"}
                        options={districts}
                        value={selectedDistrictCode}
                        disabled={!selectedProvinceCode}
                        onChange={(value) => {
                          setSelectedDistrictCode(value);
                          setSelectedWardCode("");
                        }}
                      />
                    </Field>
                    <Field label="Phường / Xã" required>
                      <SelectInput
                        key={`ward-${selectedDistrictCode}`}
                        placeholder={selectedDistrictCode ? "Chọn phường / xã" : "Chọn quận / huyện trước"}
                        options={wards}
                        value={selectedWardCode}
                        disabled={!selectedDistrictCode}
                        onChange={setSelectedWardCode}
                      />
                    </Field>
                  </div>

                  </>
                  ) : null}

                </CheckoutSection>
                </div>

                {/* Section 2 & 3: Shipping + Payment side by side on desktop */}
                <div className="relative z-10 grid gap-4 md:grid-cols-2">
                  <CheckoutSection number={2} title="Vận chuyển">
                    <div className="space-y-2">
                      {(Object.entries(shippingOptions) as Array<[ShippingMethod, typeof shippingOptions[ShippingMethod]]>).map(
                        ([key, option]) => (
                          <ChoiceRow
                            key={key}
                            active={shippingMethod === key}
                            icon={option.icon}
                            label={option.label}
                            description={option.description}
                            price={option.price}
                            onClick={() => setShippingMethod(key)}
                          />
                        ),
                      )}
                    </div>
                  </CheckoutSection>

                  <CheckoutSection number={3} title="Thanh toán">
                    <div className="space-y-2">
                      {(Object.entries(paymentOptions) as Array<[PaymentMethod, typeof paymentOptions[PaymentMethod]]>).map(
                        ([key, option]) => (
                          <ChoiceRow
                            key={key}
                            active={paymentMethod === key}
                            icon={option.icon}
                            label={option.label}
                            description={option.description}
                            onClick={() => setPaymentMethod(key)}
                          />
                        ),
                      )}
                    </div>
                  </CheckoutSection>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-20 lg:self-start">
                <BrandCard className="bg-white/88 p-5 shadow-[0_20px_55px_rgba(97,58,26,0.12)] backdrop-blur-xl">
                  <h2 className="!font-sans !text-[11px] !font-bold uppercase !tracking-[0.16em] !text-[#E6792A]">
                    Tóm tắt đơn hàng
                  </h2>

                  <div className="mt-4 space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="grid grid-cols-[56px_1fr_auto] items-center gap-3">
                        <div className="h-12 w-14 overflow-hidden rounded-lg bg-[#f1e5d7]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image || "/no-image.svg"}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-[#1f2937]">{item.title}</p>
                          <p className="mt-0.5 text-[11px] font-semibold text-[#1f2937]">x{item.quantity}</p>
                        </div>
                        <p className="text-right text-xs font-bold text-[#1f2937]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="my-4 h-px bg-[#e7edf4]" />

                  <div className="space-y-2 text-xs font-semibold text-[#1f2937]">
                    <div className="flex items-center justify-between">
                      <span>Tạm tính ({itemCount} sản phẩm)</span>
                      <span className="font-bold text-[#1f2937]">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Phí vận chuyển</span>
                      <span className="font-bold text-[#1f2937]">{formatPrice(shippingFee)}</span>
                    </div>
                    <div className="border-t border-[#e7edf4] pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1f2937]">Tổng cộng</span>
                        <span className="text-xl font-black text-[#E6792A]">
                          {formatPrice(orderTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-[#d7c5b6] bg-white px-3 py-2">
                    <Tag className="h-4 w-4 shrink-0 text-[#E6792A]" />
                    <input
                      type="text"
                      placeholder="Mã giảm giá"
                      className="min-w-0 flex-1 bg-transparent text-xs font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none"
                    />
                    <button
                      type="button"
                      className="rounded-full bg-[#f1e3d6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E6792A] transition hover:bg-[#E6792A] hover:text-white"
                    >
                      Áp dụng
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const ord = `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
                      setOrderNumber(ord);
                      setShowSuccess(true);
                      // Clear buyNowItem after successful order
                      clearBuyNow();
                    }}
                    className="mt-4 flex w-full items-center justify-center rounded-full bg-[#E6792A] py-3 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(230,121,42,0.28)] transition hover:-translate-y-0.5 hover:bg-[#C66A27]"
                  >
                    Đặt hàng
                  </button>

                  <p className="mt-3 flex items-start gap-1.5 text-[11px] font-semibold leading-relaxed text-[#1f2937]">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E6792A]" />
                    Thông tin của bạn được bảo mật và chỉ sử dụng để xử lý đơn hàng.
                  </p>
                </BrandCard>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a2846d]">
                  <WalletCards className="h-3.5 w-3.5" />
                  Xem lại đơn hàng trước khi đặt
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg rounded-2xl border border-[#E6792A]/30 bg-white p-8 text-center shadow-[0_20px_60px_rgba(230,121,42,0.2)] md:p-10"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Success Icon */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E6792A] to-[#C66A27] shadow-[0_8px_24px_rgba(230,121,42,0.35)]">
                <CheckCircle className="h-7 w-7 text-white" strokeWidth={2.5} />
              </div>

              <h1
                className="text-lg font-bold uppercase leading-tight text-[#E6792A] md:text-xl"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Đặt hàng thành công!
              </h1>

              <p className="mt-3 text-sm font-semibold text-[#64748b]">
                Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>

              {/* Order Info */}
              <div className="mt-5 rounded-xl border border-dashed border-[#E6792A]/30 bg-[#fff8f3] p-4">
                <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A]">
                  <Package className="h-4 w-4" />
                  Mã đơn hàng
                </div>
                <p className="mt-2 font-mono text-lg font-black tracking-wider text-[#1f2937]">
                  {orderNumber}
                </p>
              </div>

              {/* Next Steps */}
              <div className="mt-5 space-y-2 text-left">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A]">
                  Bước tiếp theo:
                </p>
                {[
                  { step: "1", text: "Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 30 phút." },
                  { step: "2", text: "Xác nhận file thiết kế và tiến hành in ấn." },
                  { step: "3", text: "Giao hàng theo phương thức vận chuyển bạn đã chọn." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E6792A] text-[10px] font-bold text-white">
                      {item.step}
                    </span>
                    <p className="text-xs font-semibold leading-relaxed text-[#1f2937]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  href="/"
                  onClick={() => setShowSuccess(false)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#E6792A] bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A] transition-all hover:bg-[#E6792A] hover:text-white"
                >
                  <Home className="h-4 w-4" />
                  Trang chủ
                </Link>
                <Link
                  href="/tai-khoan/don-hang"
                  onClick={() => setShowSuccess(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#E6792A] px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_8px_24px_rgba(230,121,42,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#C66A27]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Đơn hàng
                </Link>
              </div>

              <p className="mt-5 text-[11px] font-semibold text-[#94a3b8]">
                Hotline:{" "}
                <a href="tel:0985463403" className="font-bold text-[#E6792A] hover:underline">
                  0985 463 403
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
