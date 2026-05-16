"use client";

import { useState } from "react";
import { Phone, Send } from "lucide-react";
import BrandCard from "@/components/ui/BrandCard";

const tabs = ["Gấp đôi", "Gấp ba", "Nhiều trang", "Thiết kế + In"] as const;
type Tab = (typeof tabs)[number];

const pricingData: Record<
  Tab,
  {
    headers: { size: string; paper: string }[];
    rows: { qty: string; prices: string[] }[];
  }
> = {
  "Gấp đôi": {
    headers: [
      { size: "A4 (21x29.7cm)", paper: "Couche 150gsm" },
      { size: "A4 (21x29.7cm)", paper: "Couche 200gsm" },
      { size: "A5 (14.8x21cm)", paper: "Couche 150gsm" },
      { size: "A5 (14.8x21cm)", paper: "Couche 200gsm" },
    ],
    rows: [
      { qty: "100 tờ", prices: ["450.000đ", "550.000đ", "320.000đ", "420.000đ"] },
      { qty: "300 tờ", prices: ["750.000đ", "950.000đ", "550.000đ", "750.000đ"] },
      { qty: "500 tờ", prices: ["1.150.000đ", "1.450.000đ", "850.000đ", "1.150.000đ"] },
      { qty: "1.000 tờ", prices: ["1.950.000đ", "2.450.000đ", "1.450.000đ", "1.950.000đ"] },
      { qty: "2.000 tờ trở lên", prices: ["Liên hệ", "Liên hệ", "Liên hệ", "Liên hệ"] },
    ],
  },
  "Gấp ba": {
    headers: [
      { size: "A4 (21x29.7cm)", paper: "Couche 150gsm" },
      { size: "A4 (21x29.7cm)", paper: "Couche 200gsm" },
      { size: "DL (10x21cm)", paper: "Couche 150gsm" },
      { size: "DL (10x21cm)", paper: "Couche 200gsm" },
    ],
    rows: [
      { qty: "100 tờ", prices: ["520.000đ", "650.000đ", "380.000đ", "480.000đ"] },
      { qty: "300 tờ", prices: ["850.000đ", "1.050.000đ", "620.000đ", "820.000đ"] },
      { qty: "500 tờ", prices: ["1.300.000đ", "1.600.000đ", "950.000đ", "1.200.000đ"] },
      { qty: "1.000 tờ", prices: ["2.200.000đ", "2.750.000đ", "1.600.000đ", "2.100.000đ"] },
      { qty: "2.000 tờ trở lên", prices: ["Liên hệ", "Liên hệ", "Liên hệ", "Liên hệ"] },
    ],
  },
  "Nhiều trang": {
    headers: [
      { size: "A4 – 8 trang", paper: "Couche 150gsm" },
      { size: "A4 – 12 trang", paper: "Couche 150gsm" },
      { size: "A4 – 16 trang", paper: "Couche 200gsm" },
      { size: "A5 – 8 trang", paper: "Couche 150gsm" },
    ],
    rows: [
      { qty: "100 cuốn", prices: ["1.200.000đ", "1.600.000đ", "2.100.000đ", "850.000đ"] },
      { qty: "300 cuốn", prices: ["2.100.000đ", "2.800.000đ", "3.600.000đ", "1.500.000đ"] },
      { qty: "500 cuốn", prices: ["3.200.000đ", "4.200.000đ", "5.500.000đ", "2.200.000đ"] },
      { qty: "1.000 cuốn", prices: ["5.500.000đ", "7.000.000đ", "9.200.000đ", "3.800.000đ"] },
      { qty: "2.000 cuốn +", prices: ["Liên hệ", "Liên hệ", "Liên hệ", "Liên hệ"] },
    ],
  },
  "Thiết kế + In": {
    headers: [
      { size: "Gấp đôi A4", paper: "Thiết kế + In 2 mặt" },
      { size: "Gấp ba A4", paper: "Thiết kế + In 2 mặt" },
      { size: "Profile 8 trang", paper: "Bìa 250gsm + ruột 150gsm" },
      { size: "Menu A4", paper: "Ép plastic, bìa cứng" },
    ],
    rows: [
      { qty: "100 bộ", prices: ["1.200.000đ", "1.400.000đ", "2.500.000đ", "Liên hệ"] },
      { qty: "300 bộ", prices: ["1.900.000đ", "2.200.000đ", "4.200.000đ", "Liên hệ"] },
      { qty: "500 bộ", prices: ["2.800.000đ", "3.200.000đ", "6.500.000đ", "Liên hệ"] },
      { qty: "1.000 bộ", prices: ["4.500.000đ", "5.200.000đ", "Liên hệ", "Liên hệ"] },
      { qty: "2.000 bộ +", prices: ["Liên hệ", "Liên hệ", "Liên hệ", "Liên hệ"] },
    ],
  },
};

export default function BrochurePricingTable() {
  const [activeTab, setActiveTab] = useState<Tab>("Gấp đôi");
  const data = pricingData[activeTab];

  return (
    <section className="py-16 bg-[#FAF7F4]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* ── Left: Pricing Table ── */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              BÁO GIÁ IN{" "}
              <span className="text-[#E6792A]">BROCHURE / TỜ GẤP</span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: activeTab === tab ? "#E6792A" : "transparent",
                    color: activeTab === tab ? "#ffffff" : "#666",
                    border: `1.5px solid ${activeTab === tab ? "#E6792A" : "#ddd"}`,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table */}
            <BrandCard className="overflow-hidden bg-white">
              <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 font-bold" style={{ color: "#E6792A", width: "120px" }}>
                      Số lượng
                    </th>
                    {data.headers.map((h, i) => (
                      <th key={i} className="text-center py-3 px-4 font-medium">
                        <div style={{ color: "#E6792A", fontWeight: 600, fontSize: "13px" }}>{h.size}</div>
                        <div className="text-gray-400 font-normal" style={{ fontSize: "11px" }}>{h.paper}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 transition-colors hover:bg-orange-50/30">
                      <td className="py-3 px-4 text-gray-700 font-medium" style={{ fontSize: "13px" }}>
                        {row.qty}
                      </td>
                      {row.prices.map((price, j) => (
                        <td key={j} className="py-3 px-4 text-center text-gray-700" style={{ fontSize: "13px" }}>
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </BrandCard>

            <p className="text-gray-400 mt-3" style={{ fontSize: "11px" }}>
              * Giá trên chưa bao gồm VAT và chi phí thiết kế (nếu đủ). Giá có thể thay đổi tùy theo yêu cầu gia công.
            </p>
          </div>

          {/* ── Right: Quick Quote Card ── */}
          <div className="w-full lg:w-[280px] shrink-0 lg:mt-[88px]">
            <BrandCard className="overflow-hidden bg-white">
              {/* Header */}
              <div className="px-5 pt-5 pb-3 text-center">
                <h3 className="text-lg uppercase tracking-wide mb-0.5" style={{ color: "#E6792A", fontWeight: 800 }}>
                  NHẬN BÁO GIÁ NHANH
                </h3>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Chúng tôi sẽ liên hệ tư vấn trong 15 phút
                </p>
              </div>

              {/* Form */}
              <div className="px-5 pb-5">
                <div className="flex flex-col gap-2.5">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#E6792A]/20"
                    style={{ background: "#F9F7F5", color: "#333", border: "1px solid #eee" }}
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#E6792A]/20"
                    style={{ background: "#F9F7F5", color: "#333", border: "1px solid #eee" }}
                  />
                  <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-[13px] uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#E6792A", color: "#ffffff", boxShadow: "0 4px 12px rgba(230,121,42,0.25)" }}
                  >
                    <Send className="w-4 h-4" />
                    GỬI YÊU CẦU →
                  </button>
                </div>

                {/* Phone */}
                <div className="mt-3 pt-3 text-center" style={{ borderTop: "1px solid #eee" }}>
                  <a
                    href="tel:0793949998"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline underline-offset-2"
                    style={{ color: "#E6792A" }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    079 394 9998
                  </a>
                </div>
              </div>
            </BrandCard>
          </div>
        </div>
      </div>
    </section>
  );
}