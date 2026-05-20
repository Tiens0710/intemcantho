"use client";

import { useState } from "react";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

const categories = [
  "Tất cả",
  "Doanh nghiệp",
  "Cá nhân",
  "Ép kim",
  "Giấy mỹ thuật",
  "Trong suốt",
  "Bo góc",
];

const galleryItems = [
  {
    id: 1,
    image: "/danhmuc6.png",
    category: "Doanh nghiệp",
    title: "Name Card Corporate",
  },
  {
    id: 2,
    image: "/danhmuc6.png",
    category: "Ép kim",
    title: "Name Card Ép Kim Vàng",
  },
  {
    id: 3,
    image: "/danhmuc6.png",
    category: "Giấy mỹ thuật",
    title: "Name Card Conqueror",
  },
  {
    id: 4,
    image: "/danhmuc6.png",
    category: "Trong suốt",
    title: "Name Card Nhựa PVC",
  },
  {
    id: 5,
    image: "/danhmuc6.png",
    category: "Cá nhân",
    title: "Name Card Freelancer",
  },
  {
    id: 6,
    image: "/danhmuc6.png",
    category: "Bo góc",
    title: "Name Card Bo Góc Cao Cấp",
  },
  {
    id: 7,
    image: "/danhmuc6.png",
    category: "Doanh nghiệp",
    title: "Name Card Executive",
  },
  {
    id: 8,
    image: "/danhmuc6.png",
    category: "Ép kim",
    title: "Name Card Ép Kim Bạc",
  },
];

export default function DanhThiepGallery() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredItems =
    activeCategory === "Tất cả"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-16 bg-[#FAFAFA] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#e87c22]/8 to-[#f5a623]/5 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#e87c22]/6 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-16 left-[15%] w-3 h-3 rounded-full bg-[#e87c22]/20 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-[10%] w-2.5 h-2.5 rounded-full bg-[#f5a623]/25 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-24 left-1/2 w-2 h-2 rounded-full bg-[#e87c22]/15 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e87c22]/10 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-[1400px]">
        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900 uppercase tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          THƯ VIỆN MẪU{" "}
          <span className="text-[#e87c22]">DANH THIẾP</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ease-out cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#e87c22] to-[#f09343] text-white shadow-lg shadow-[#e87c22]/25"
                    : "bg-white text-gray-600 hover:text-[#e87c22] hover:bg-[#FFF8F2] border border-gray-200 hover:border-[#e87c22]/30"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.04] hover:-translate-y-2"
            >
              {/* Glow ring behind card */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#e87c22] via-[#f5a623] to-[#e87c22] rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 z-0" />

              {/* Card inner */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg shadow-black/15 ring-1 ring-black/5 group-hover:ring-[#e87c22]/40 transition-all duration-500">
                {/* Image Container */}
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-3 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p
                      className="text-xs font-bold leading-snug mb-1.5 drop-shadow-md"
                      style={{ color: "#ffffff" }}
                    >
                      {item.title}
                    </p>
                    <span
                      className="inline-block text-[10px] font-bold backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-sm"
                      style={{ color: "#ffffff", backgroundColor: "rgba(232, 124, 34, 0.8)" }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-center mt-10">
          <BrandOutlineButton>Xem thêm mẫu Danh Thiếp →</BrandOutlineButton>
        </div>
      </div>
    </section>
  );
}