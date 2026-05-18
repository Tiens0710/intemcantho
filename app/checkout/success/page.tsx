"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BrandCard from "@/components/ui/BrandCard";
import { useAppStore } from "@/lib/store";
import { CheckCircle, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo } from "react";

function formatPrice(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}

export default function OrderSuccessPage() {
  const cart = useAppStore((s) => s.cart);
  const cartTotal = useAppStore((s) => s.cartTotal());
  const clearCart = useAppStore((s) => s.clearCart);

  const orderNumber = useMemo(
    () => `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    [],
  );

  // Clear cart after successful order
  useEffect(() => {
    if (cart.length > 0) {
      clearCart();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

        <div className="container relative mx-auto flex min-h-[70vh] items-center justify-center px-4 pb-16 pt-20 md:pt-24">
          <BrandCard className="w-full max-w-lg bg-white/90 p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(230,121,42,0.12)] md:p-10">
            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#E6792A] to-[#C66A27] shadow-[0_12px_32px_rgba(230,121,42,0.35)]">
              <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h1
              className="text-2xl font-bold uppercase leading-tight text-[#E6792A] md:text-3xl"
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Đặt hàng thành công!
            </h1>

            <p className="mt-3 text-sm font-semibold text-[#64748b]">
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>

            {/* Order Info */}
            <div className="mt-6 rounded-xl border border-dashed border-[#E6792A]/30 bg-[#fff8f3] p-4">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A]">
                <Package className="h-4 w-4" />
                Mã đơn hàng
              </div>
              <p className="mt-2 font-mono text-lg font-black tracking-wider text-[#1f2937]">
                {orderNumber}
              </p>
            </div>

            {/* Next Steps */}
            <div className="mt-6 space-y-3 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A]">
                Bước tiếp theo:
              </p>
              <div className="space-y-2">
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
            </div>

            {/* Actions */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#E6792A] bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#E6792A] transition-all hover:bg-[#E6792A] hover:text-white"
              >
                <Home className="h-4 w-4" />
                Trang chủ
              </Link>
              <Link
                href="/tai-khoan/don-hang"
                className="flex items-center justify-center gap-2 rounded-full bg-[#E6792A] px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_8px_24px_rgba(230,121,42,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#C66A27]"
              >
                <ShoppingBag className="h-4 w-4" />
                Đơn hàng
              </Link>
            </div>

            <p className="mt-6 text-[11px] font-semibold text-[#94a3b8]">
              Nếu có thắc mắc, vui lòng liên hệ hotline:{" "}
              <a href="tel:0985463403" className="font-bold text-[#E6792A] hover:underline">
                0985 463 403
              </a>
            </p>
          </BrandCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}