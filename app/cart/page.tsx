"use client";

import Link from "next/link";
import { useAppStore } from "@/lib/store";

export default function Page() {
  const cart = useAppStore((s) => s.cart);
  const removeFromCart = useAppStore((s) => s.removeFromCart);
  const updateQuantity = useAppStore((s) => s.updateQuantity);
  const clearCart = useAppStore((s) => s.clearCart);
  const cartTotal = useAppStore((s) => s.cartTotal());

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>

      {cart.length === 0 ? (
        <>
          <p className="mb-6 text-gray-600">Giỏ hàng hiện đang trống.</p>
          <Link href="/" className="inline-flex items-center px-4 py-2 bg-amber-800 text-white rounded">
            Quay về trang chủ
          </Link>
        </>
      ) : (
        <div>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 border p-4 rounded-md">
                <img src={item.image || '/no-image.svg'} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <button className="text-sm text-red-500" onClick={() => removeFromCart(item.id)}>Xóa</button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Giá: {item.price.toLocaleString('vi-VN')}đ</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <div>
              <button className="px-4 py-2 mr-2 border rounded" onClick={() => clearCart()}>Xóa tất cả</button>
              <Link href="/" className="px-4 py-2 bg-gray-100 rounded">Tiếp tục mua</Link>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Tổng cộng</div>
              <div className="text-2xl font-bold">{cartTotal.toLocaleString('vi-VN')}đ</div>
              <button className="mt-3 inline-flex items-center px-4 py-2 bg-amber-800 text-white rounded">Thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
