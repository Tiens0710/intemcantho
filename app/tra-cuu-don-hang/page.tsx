"use client";

import BrandCard from "@/components/ui/BrandCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const demoOrder = {
  id: "DH-2026051401",
  status: "Đang xử lý",
  customer: "Nguyễn Văn A",
  phone: "0985 463 403",
  createdAt: "14/05/2026",
  estimatedDelivery: "18/05/2026",
  address: "123 Đường 30/4, Phường An Phú, Quận Ninh Kiều, TP. Cần Thơ",
  total: "2.450.000đ",
  items: [
    {
      name: "Danh thiếp cao cấp",
      detail: "500 hộp · Cán mờ · Bo góc",
      price: "2.450.000đ",
    },
  ],
};

const timeline = [
  {
    label: "Đã nhận đơn",
    time: "14/05/2026 · 09:12",
    done: true,
    icon: ClipboardList,
  },
  {
    label: "Đang xử lý file",
    time: "14/05/2026 · 10:30",
    done: true,
    icon: FileText,
  },
  {
    label: "Đang sản xuất",
    time: "Dự kiến hoàn tất trong ngày",
    done: false,
    icon: PackageCheck,
  },
  {
    label: "Giao hàng",
    time: "Dự kiến 18/05/2026",
    done: false,
    icon: Truck,
  },
];

export default function OrderLookupPage() {
  const [orderCode, setOrderCode] = useState("");
  const [contact, setContact] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const showResult = hasSearched && orderCode.trim().length > 0;

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
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <nav className="flex items-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#1f2937]">
                <Link href="/" className="transition hover:text-[#E6792A]">
                  Trang chủ
                </Link>
                <span className="mx-2 text-[#E6792A]/45">/</span>
                <span className="text-[#E6792A]">Tra cứu đơn hàng</span>
              </nav>
              <h1
                className="mt-3 text-3xl font-bold uppercase leading-tight text-[#E6792A] md:text-4xl"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Xem đơn hàng bằng mã
              </h1>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6792A]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
              <ShieldCheck className="h-4 w-4" />
              Tra cứu bảo mật
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
            <BrandCard className="bg-white/90 p-5 backdrop-blur-xl lg:sticky lg:top-24 lg:self-start">
              <div className="mb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
                  Nhập thông tin
                </p>
                <h2 className="mt-1 !font-sans !text-lg !font-black !text-[#1f2937]">
                  Tra cứu trạng thái đơn
                </h2>
              </div>

              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setHasSearched(true);
                }}
              >
                <label className="block">
                  <span className="mb-1 block text-xs font-bold text-[#1f2937]">
                    Mã đơn hàng
                  </span>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E6792A]" />
                    <input
                      value={orderCode}
                      onChange={(event) => setOrderCode(event.target.value)}
                      placeholder="Ví dụ: DH-2026051401"
                      className="h-12 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 pl-10 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-bold text-[#1f2937]">
                    Số điện thoại hoặc email
                  </span>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E6792A]" />
                    <input
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      placeholder="Thông tin dùng khi đặt hàng"
                      className="h-12 w-full rounded-lg border border-[#dfe5ee] bg-white/90 px-3 pl-10 text-sm font-semibold text-[#1f2937] placeholder:text-[#64748b] outline-none transition focus:border-[#E6792A] focus:ring-2 focus:ring-[#E6792A]/10"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E6792A] py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-md shadow-[#E6792A]/25 transition hover:bg-[#C66A27]"
                >
                  Tra cứu
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-4 text-xs font-semibold leading-relaxed text-[#1f2937]">
                Bạn có thể tìm mã đơn trong email xác nhận, tin nhắn Zalo hoặc trang đơn hàng trong tài khoản.
              </p>
            </BrandCard>

            <div className="space-y-5">
              {!showResult ? (
                <BrandCard className="bg-white/90 p-8 text-center backdrop-blur-xl">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#E6792A]/10 text-[#E6792A]">
                    <ClipboardList className="h-7 w-7" />
                  </div>
                  <h2 className="mt-4 !font-sans !text-lg !font-black !text-[#1f2937]">
                    Nhập mã đơn để xem tiến độ
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-relaxed text-[#1f2937]">
                    Sau khi tra cứu, thông tin sản xuất, vận chuyển và tổng tiền sẽ hiển thị tại đây.
                  </p>
                </BrandCard>
              ) : (
                <>
                  <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E6792A]">
                          {demoOrder.id}
                        </p>
                        <h2 className="mt-1 !font-sans !text-xl !font-black !text-[#1f2937]">
                          {demoOrder.status}
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-[#1f2937]">
                          Đặt ngày {demoOrder.createdAt} · Dự kiến giao {demoOrder.estimatedDelivery}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E6792A]/10 px-4 py-2 text-xs font-bold text-[#E6792A]">
                        <Clock className="h-4 w-4" />
                        Đang cập nhật
                      </span>
                    </div>
                  </BrandCard>

                  <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
                    <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
                      Tiến độ đơn hàng
                    </h3>
                    <div className="mt-5 space-y-4">
                      {timeline.map((step, index) => {
                        const Icon = step.icon;

                        return (
                          <div key={step.label} className="grid grid-cols-[36px_1fr] gap-3">
                            <div className="flex flex-col items-center">
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                  step.done
                                    ? "bg-[#E6792A] text-white"
                                    : "border border-[#E6792A]/35 bg-white text-[#E6792A]"
                                }`}
                              >
                                {step.done ? (
                                  <CheckCircle2 className="h-5 w-5" />
                                ) : (
                                  <Icon className="h-5 w-5" />
                                )}
                              </div>
                              {index < timeline.length - 1 ? (
                                <div className="h-8 w-px bg-[#E6792A]/25" />
                              ) : null}
                            </div>
                            <div className="pt-1">
                              <p className="text-sm font-black text-[#1f2937]">{step.label}</p>
                              <p className="mt-0.5 text-xs font-semibold text-[#1f2937]">{step.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </BrandCard>

                  <div className="grid gap-5 xl:grid-cols-2">
                    <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
                      <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
                        Thông tin giao hàng
                      </h3>
                      <div className="mt-4 space-y-3 text-sm font-semibold text-[#1f2937]">
                        <p>{demoOrder.customer}</p>
                        <p>{demoOrder.phone}</p>
                        <p className="flex gap-2 leading-relaxed">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E6792A]" />
                          {demoOrder.address}
                        </p>
                      </div>
                    </BrandCard>

                    <BrandCard className="bg-white/90 p-5 backdrop-blur-xl">
                      <h3 className="!font-sans !text-sm !font-black !text-[#1f2937]">
                        Sản phẩm
                      </h3>
                      <div className="mt-4 space-y-3">
                        {demoOrder.items.map((item) => (
                          <div key={item.name} className="flex items-start gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E6792A]/10 text-[#E6792A]">
                              <PackageCheck className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-black text-[#1f2937]">{item.name}</p>
                              <p className="mt-0.5 text-xs font-semibold text-[#1f2937]">{item.detail}</p>
                            </div>
                            <p className="text-sm font-black text-[#E6792A]">{item.price}</p>
                          </div>
                        ))}
                        <div className="flex items-center justify-between border-t border-[#E6792A]/15 pt-3">
                          <span className="text-sm font-black text-[#1f2937]">Tổng cộng</span>
                          <span className="text-lg font-black text-[#E6792A]">{demoOrder.total}</span>
                        </div>
                      </div>
                    </BrandCard>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
