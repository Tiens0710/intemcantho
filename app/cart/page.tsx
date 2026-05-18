"use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandCard from "@/components/ui/BrandCard";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import FeaturedProducts from "@/components/FeaturedProducts";

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
          <div className="flex flex-col items-start gap-2 -ml-4 md:-ml-6 lg:-ml-8">
            <nav className="flex items-center text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a2846d]">
              <Link href="/" className="transition hover:text-[#E6792A]">
                Trang chủ
              </Link>
              <span className="mx-2 text-[#d1b89f]">/</span>
              <span className="text-[#E6792A]">Giỏ hàng</span>
            </nav>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-full border border-[#e5d6c4] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E6792A] shadow-sm transition hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
             
              <h1
                className="mt-2 text-3xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: "#E6792A" }}
              >
                GIỎ HÀNG CỦA BẠN
              </h1>
            </div>
            <Link
              href="/"
              className="hidden rounded-full border border-[#e5d6c4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E6792A] shadow-sm transition hover:shadow-md md:inline-flex"
            >
              Tiếp tục mua
            </Link>
          </div>

        {cart.length === 0 ? (
          <BrandCard className="mt-10 bg-white/80 p-8 text-center backdrop-blur-2xl">
            <p className="mb-4 text-sm text-[#7c6a5a]">Giỏ hàng hiện đang trống.</p>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-[#E6792A] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-[#E6792A]/30 transition hover:translate-y-[-1px]"
            >
              Quay về trang chủ
            </Link>
          </BrandCard>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-5">
              {cart.map((item) => (
                <BrandCard
                  key={item.id}
                  className="relative flex gap-4 bg-white/80 p-4 backdrop-blur-2xl"
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
                        <h3 className="!font-sans text-base font-semibold text-[#3b2312]">{item.title}</h3>
                        {item.meta && Object.keys(item.meta).length > 0 && (
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {Object.entries(item.meta).map(([key, val]) => (
                              <span
                                key={key}
                                className="inline-block rounded-full bg-[#f6ece2] px-2.5 py-0.5 text-[11px] font-medium text-[#8b7b6a]"
                              >
                                {typeof val === "string" ? val : `${key}: ${val}`}
                              </span>
                            ))}
                          </div>
                        )}
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
                </BrandCard>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <BrandCard className="bg-white/80 p-6 backdrop-blur-2xl">
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
                    <span className="text-lg font-bold text-[#E6792A]">{formatPrice(orderTotal)}</span>
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

                <Link
                  href="/checkout"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#E6792A] py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-[#E6792A]/30 transition hover:translate-y-[-1px]"
                >
                  Mua hàng
                </Link>

                <div className="mt-4 flex items-center justify-between text-[11px] text-[#9b7f68]">
                  <button
                    type="button"
                    onClick={() => clearCart()}
                    className="uppercase tracking-[0.2em] transition hover:text-[#E6792A]"
                  >
                    Xóa tất cả
                  </button>
                  <Link href="/" className="uppercase tracking-[0.2em] transition hover:text-[#E6792A]">
                    Tiếp tục mua
                  </Link>
                </div>
              </BrandCard>
            </div>
          </div>
        )}
        </div>

        <FeaturedProducts
          title="Bạn Có Thể Thích"
          subtitle="Những sản phẩm in ấn được yêu thích nhất"
          showBackground={false}
          viewAllHref="/"
          viewAllText="Xem thêm sản phẩm"
        />
      </main>
      <Footer />
    </div>
  );
}
