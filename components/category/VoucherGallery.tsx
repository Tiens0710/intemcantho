"use client";

import { useState } from "react";
import Image from "next/image";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

const categories = ["Tất cả", "Voucher", "Gift voucher", "Thẻ tích điểm"];

const galleryItems = [
  { id: 1, image: "/anphamtiepthi/voucher/anh1.png", category: "Voucher", title: "Voucher giảm giá" },
  { id: 2, image: "/anphamtiepthi/voucher/anh2.png", category: "Gift voucher", title: "Phiếu quà tặng cao cấp" },
  { id: 3, image: "/anphamtiepthi/voucher/anh3.png", category: "Thẻ tích điểm", title: "Thẻ tích điểm cửa hàng" },
  { id: 4, image: "/anphamtiepthi/voucher/background.jpeg", category: "Voucher", title: "Voucher khuyến mãi" },
];

export default function VoucherGallery() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredItems =
    activeCategory === "Tất cả" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16">
      <div className="relative z-10 container mx-auto max-w-[1200px] px-4">
        <h2
          className="mb-8 text-center text-3xl font-bold uppercase tracking-tight text-gray-900 lg:text-4xl"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          THƯ VIỆN MẪU <span className="text-[#e87c22]">VOUCHER</span>
        </h2>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#e87c22] to-[#f09343] text-white shadow-lg shadow-[#e87c22]/25"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#e87c22]/30 hover:bg-[#FFF8F2] hover:text-[#e87c22]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <article key={item.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#e87c22]">{item.category}</p>
                <h3 className="mt-1 text-base font-bold text-gray-900">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <BrandOutlineButton>Xem thêm mẫu voucher</BrandOutlineButton>
        </div>
      </div>
    </section>
  );
}
