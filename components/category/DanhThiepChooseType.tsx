"use client";

import BrandCard from "@/components/ui/BrandCard";

const cardTypes = [
  {
    name: "Minimal",
    image: "/danhthiep/2.jpg",
    items: ["Sales", "Freelancer", "Cá nhân"],
  },
  {
    name: "Luxury",
    image: "/danhthiep/180-1.jpg",
    items: ["Spa", "CEO", "Showroom"],
  },
  {
    name: "Creative",
    image: "/danhthiep/225.jpg",
    items: ["Designer", "Agency", "Studio"],
  },
];

export default function DanhThiepChooseType() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2
          className="text-2xl lg:text-3xl font-bold text-center mb-10 text-gray-900 uppercase tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: "#8B5E3C" }}
        >
          Nên chọn loại name card nào?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardTypes.map((card) => (
            <BrandCard
              key={card.name}
              className="group relative overflow-hidden bg-[#FAFAFA] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.name}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#E6792A" }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={`Name Card ${card.name}`}
                  className="w-40 h-auto flex-shrink-0 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
}