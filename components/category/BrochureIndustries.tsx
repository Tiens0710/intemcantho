"use client";

import { Building2, Sparkles, UtensilsCrossed, Home, GraduationCap, ShoppingBag } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

const industries = [
  {
    title: "DOANH NGHIỆP",
    desc: "Giới thiệu công ty, năng lực, dịch vụ.",
    icon: Building2,
  },
  {
    title: "SPA / CLINIC",
    desc: "Brochure dịch vụ, liệu trình, bảng giá.",
    icon: Sparkles,
  },
  {
    title: "NHÀ HÀNG /\nF&B",
    desc: "Menu gấp, combo, chương trình KM.",
    icon: UtensilsCrossed,
  },
  {
    title: "BẤT ĐỘNG SẢN",
    desc: "Brochure dự án, mặt bằng, chính sách.",
    icon: Home,
  },
  {
    title: "TRƯỜNG HỌC /\nTRUNG TÂM",
    desc: "Brochure tuyển sinh, khóa học, chương trình.",
    icon: GraduationCap,
  },
  {
    title: "SẢN PHẨM\nTIÊU DÙNG",
    desc: "Tờ gấp giới thiệu sản phẩm, hướng dẫn.",
    icon: ShoppingBag,
  },
];

export default function BrochureIndustries() {
  return (
    <section className="relative pt-28 pb-16 bg-white">
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E6792A]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#E6792A]/50 to-transparent blur-[1px]" />

      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Section Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight">
          BROCHURE <span className="text-[#E6792A]">PHÙ HỢP</span> VỚI NHỮNG AI?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {industries.map((item, idx) => (
            <BrandCard 
              key={idx}
              className="flex flex-col items-center justify-center text-center p-3 lg:py-4 lg:px-2 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer h-full"
              borderOpacity={0.2}
              shadowOpacity={0.05}
            >
              {/* Icon Box */}
              <div className="mb-2 w-10 h-10 flex items-center justify-center rounded-[0.8rem] border border-[#E6792A]/30 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 shrink-0">
                <item.icon className="w-5 h-5 text-[#8B4A1E] transition-colors duration-300 group-hover:text-[#E6792A]" strokeWidth={1.8} />
              </div>
              
              {/* Title */}
              <h3 
                className="mb-1 uppercase tracking-widest leading-tight whitespace-pre-line"
                style={{ 
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  color: "#7A3E14",
                  fontSize: "13px",
                  fontWeight: 900
                }}
              >
                {item.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-gray-600 leading-snug tracking-wide font-medium"
                style={{ fontSize: "11px" }}
              >
                {item.desc}
              </p>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
}
