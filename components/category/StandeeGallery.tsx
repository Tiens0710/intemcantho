"use client";

import { useState } from "react";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

const categories = [
  "Tất cả",
  "Khai trương",
  "Spa - Thẩm mỹ",
  "Nhà hàng - F&B",
  "Bất động sản",
  "Giáo dục",
  "Sự kiện",
  "Khác",
];

const galleryItems = [
  {
    id: 1,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151029.jpeg",
    category: "Khai trương",
    title: "Grand Opening - Giảm 50%",
  },
  {
    id: 2,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151029.jpeg",
    category: "Nhà hàng - F&B",
    title: "Combo F&B - Khuyến mãi",
  },
  {
    id: 3,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151018.jpeg",
    category: "Spa - Thẩm mỹ",
    title: "Spa & Beauty - Ưu đãi",
  },
  {
    id: 4,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151029.jpeg",
    category: "Nhà hàng - F&B",
    title: "Nhà hàng BBQ - Menu",
  },
  {
    id: 5,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151031.jpeg",
    category: "Khai trương",
    title: "Grand Opening - Sự kiện",
  },
  {
    id: 6,
    image: "/standee/bạn_hãy_giúp_tôi_xóa_202605151015.jpeg",
    category: "Sự kiện",
    title: "Sự kiện - Chương trình",
  },
  {
    id: 7,
    image: "/standee/bạn_hãy_giúp_tôi_đổi_202605150949.jpeg",
    category: "Bất động sản",
    title: "Bất động sản - Dự án",
  },
  {
    id: 8,
    image: "/standee/bạn_hãy_giúp_tôi_làm_202605151029.jpeg",
    category: "Giáo dục",
    title: "Giáo dục - Tuyển sinh",
  },
];

export default function StandeeGallery() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredItems =
    activeCategory === "Tất cả"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-16 bg-[#FAFAFA] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large floating circle - top right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#e87c22]/8 to-[#f5a623]/5 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#e87c22]/6 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        {/* Small floating dot - top left */}
        <div className="absolute top-16 left-[15%] w-3 h-3 rounded-full bg-[#e87c22]/20 animate-bounce" style={{ animationDuration: '3s' }} />

        {/* Small floating dot - mid right */}
        <div className="absolute top-1/3 right-[10%] w-2.5 h-2.5 rounded-full bg-[#f5a623]/25 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

        {/* Small floating dot - bottom center */}
        <div className="absolute bottom-24 left-1/2 w-2 h-2 rounded-full bg-[#e87c22]/15 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />

        {/* Decorative cross / plus - top center-left */}
        <div className="absolute top-24 left-[25%] opacity-[0.07] animate-spin" style={{ animationDuration: '20s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <line x1="20" y1="0" x2="20" y2="40" stroke="#e87c22" strokeWidth="2" />
            <line x1="0" y1="20" x2="40" y2="20" stroke="#e87c22" strokeWidth="2" />
          </svg>
        </div>

        {/* Decorative diamond - bottom right */}
        <div className="absolute bottom-32 right-[20%] opacity-[0.06] animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="16" y="0" width="22.6" height="22.6" transform="rotate(45 16 0)" stroke="#e87c22" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Thin horizontal line accent */}
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e87c22]/10 to-transparent" />

        {/* Gradient orb - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#e87c22]/4 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-[1400px]">
        {/* Title */}
        <h2
          className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900 uppercase tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          THƯ VIỆN MẪU{" "}
          <span className="text-[#e87c22]">STANDEE</span>
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
          <BrandOutlineButton>Xem thêm mẫu Standee →</BrandOutlineButton>
        </div>
      </div>
    </section>
  );
}