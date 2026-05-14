"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const cart = useAppStore((s) => s.cart);
  const removeFromCart = useAppStore((s) => s.removeFromCart);
  const updateQuantity = useAppStore((s) => s.updateQuantity);
  const clearCart = useAppStore((s) => s.clearCart);
  const cartTotal = useAppStore((s) => s.cartTotal());

  const shippingFee = cartTotal > 0 ? 33000 : 0;
  const orderTotal = cartTotal + shippingFee;

  const formatPrice = (value: number) => `${value.toLocaleString("vi-VN")}đ`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,94,60,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(139,94,60,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-72 w-72 opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(198,106,39,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(155,91,36,0.14) 0%, transparent 72%)",
          }}
        />

        <div className="container relative mx-auto px-4 pb-16 pt-24 md:pt-28">
          <div className="flex flex-col items-start gap-3 -ml-4 md:-ml-6 lg:-ml-8">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-full border border-[#e5d6c4] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7b4a22] shadow-sm transition hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại
            </button>
            <nav className="flex items-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a2846d]">
              <Link href="/" className="transition hover:text-[#7b4a22]">
                Trang chủ
              </Link>
              <span className="mx-2 text-[#d1b89f]">/</span>
              <span className="text-[#7b4a22]">Giỏ hàng</span>
            </nav>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
             
              <h1
                className="mt-2 text-3xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: "#3b2312" }}
              >
                GIỎ HÀNG CỦA BẠN
              </h1>
            </div>
            <Link
              href="/"
              className="hidden rounded-full border border-[#e5d6c4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7b4a22] shadow-sm transition hover:shadow-md md:inline-flex"
            >
              Tiếp tục mua
            </Link>
          </div>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-[#E6792A]/70 bg-white/80 p-8 text-center shadow-[0_0_0_1px_rgba(230,121,42,0.25),0_14px_30px_rgba(97,58,26,0.12)] backdrop-blur-2xl">
            <p className="mb-4 text-sm text-[#7c6a5a]">Giỏ hàng hiện đang trống.</p>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-[#8b4c1f] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-[#8b4c1f]/30 transition hover:translate-y-[-1px]"
            >
              Quay về trang chủ
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="relative flex gap-4 rounded-2xl border border-[#E6792A]/70 bg-white/80 p-4 shadow-[0_0_0_1px_rgba(230,121,42,0.3),0_16px_36px_rgba(97,58,26,0.14)] backdrop-blur-2xl"
                >
                  <div className="h-20 w-20 overflow-hidden rounded-2xl bg-[#f1e5d7]">
                    <img
                      src={item.image || "/no-image.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-[#3b2312]">{item.title}</h3>
                        {item.meta?.size ? (
                          <p className="mt-1 text-xs text-[#8b7b6a]">{item.meta.size}</p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        aria-label="Xóa sản phẩm"
                        onClick={() => removeFromCart(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f1e3d3] text-[#b37a55] transition hover:bg-[#f8efe4]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 rounded-full bg-[#f6ece2] px-2 py-1">
                        <button
                          type="button"
                          aria-label="Giảm số lượng"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#7a4a20] shadow-sm transition hover:bg-[#fff7ed]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[28px] text-center text-sm font-semibold text-[#3b2312]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Tăng số lượng"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#7a4a20] shadow-sm transition hover:bg-[#fff7ed]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08a6e]">Giá</p>
                        <p className="text-sm font-semibold text-[#7a4a20]">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-[#E6792A]/70 bg-white/80 p-6 shadow-[0_0_0_1px_rgba(230,121,42,0.3),0_18px_44px_rgba(97,58,26,0.16)] backdrop-blur-2xl">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f4b2a]">
                  Tóm tắt đơn hàng
                </h2>

                <div className="mt-4 space-y-2 text-sm text-[#6f5a4a]">
                  <div className="flex items-center justify-between">
                    <span>Tạm tính</span>
                    <span className="font-semibold text-[#3b2312]">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Phí vận chuyển</span>
                    <span className="font-semibold text-[#3b2312]">{formatPrice(shippingFee)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-[#efe4d8] pt-3">
                    <span className="text-sm font-semibold text-[#3b2312]">Tổng cộng</span>
                    <span className="text-lg font-bold text-[#7a4a20]">{formatPrice(orderTotal)}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Mã giảm giá"
                    className="h-10 flex-1 rounded-full border border-[#efe0cf] bg-white px-4 text-xs text-[#6f5a4a] outline-none focus:border-[#caa37c]"
                  />
                  <button
                    type="button"
                    className="h-10 rounded-full border border-[#e2d1c0] bg-[#f6ede3] px-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#7b4a22] transition hover:bg-white"
                  >
                    Áp dụng
                  </button>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-full bg-[#8b4c1f] py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-[#8b4c1f]/30 transition hover:translate-y-[-1px]"
                >
                  Thanh toán ngay
                </button>

                <div className="mt-4 flex items-center justify-between text-[11px] text-[#9b7f68]">
                  <button
                    type="button"
                    onClick={() => clearCart()}
                    className="uppercase tracking-[0.2em] transition hover:text-[#7b4a22]"
                  >
                    Xóa tất cả
                  </button>
                  <Link href="/" className="uppercase tracking-[0.2em] transition hover:text-[#7b4a22]">
                    Tiếp tục mua
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
