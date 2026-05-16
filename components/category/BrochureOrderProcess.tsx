"use client";

import {
  MessageSquare,
  Calculator,
  FileCheck,
  CheckCircle,
  Truck,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Tiếp nhận yêu cầu",
    desc: "Mẫu, chất liệu, số lượng.",
  },
  {
    num: "02",
    icon: Calculator,
    title: "Tư vấn & báo giá",
    desc: "Chất liệu, quy cách & giá tối ưu.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Kiểm tra file",
    desc: "Tạo mới hoặc kiểm tra file sẵn.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Duyệt mẫu",
    desc: "In thử & duyệt trước khi in loạt.",
  },
  {
    num: "05",
    icon: Truck,
    title: "In ấn & giao hàng",
    desc: "Hoàn thiện & giao tận nơi.",
  },
];

export default function BrochureOrderProcess() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* ── Section Title (standalone) ── */}
        <h2
          className="text-2xl lg:text-4xl font-black text-gray-900 uppercase tracking-tight mb-8 text-center"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          QUY TRÌNH ĐẶT IN <span style={{ color: "#E6792A" }}>BROCHURE</span>
        </h2>

        {/* ── Row: Steps + Image ── */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Steps card — stretches to match image height */}
          <div
            className="flex-1 self-stretch rounded-2xl p-5 lg:p-6 flex flex-col justify-center"
            style={{
              border: "1.5px solid rgba(230,121,42,0.25)",
              boxShadow: "0 4px 20px rgba(230,121,42,0.06)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-0">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center flex-1 relative px-1">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden sm:block absolute"
                      style={{
                        top: "32px",
                        left: "calc(50% + 18px)",
                        width: "calc(100% - 36px)",
                        height: "1px",
                        background: "linear-gradient(to right, rgba(230,121,42,0.5), rgba(230,121,42,0.15))",
                      }}
                    />
                  )}

                  {/* Step number */}
                  <span className="block font-bold mb-1" style={{ color: "#E6792A", fontSize: "10px" }}>
                    {step.num}
                  </span>

                  {/* Circle icon */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mx-auto shadow-sm mb-2 z-10 relative"
                    style={{ background: "#E6792A" }}
                  >
                    <step.icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold mb-0.5 leading-tight" style={{ fontSize: "12px", color: "#E6792A" }}>
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 leading-snug" style={{ fontSize: "10px" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image — drives the row height naturally */}
          <div className="relative w-full lg:w-[520px] shrink-0 rounded-2xl overflow-hidden">
            <img
              src="/brochure/cta_section.jpeg"
              alt="In Brochure cho thương hiệu - Intem Cần Thơ"
              className="w-full h-auto block rounded-2xl"
            />
            
            {/* Overlay Buttons */}
            <div className="absolute bottom-[12%] left-[6%] flex flex-col sm:flex-row gap-3">
              <Link
                href="https://zalo.me/0793949998"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-bold text-[11px] lg:text-xs uppercase tracking-wide transition-all hover:scale-105"
                style={{ background: "#ffffff", color: "#0068FF" }}
              >
                <img src="/Icon_of_Zalo.svg.png" alt="Zalo" className="w-5 h-5 object-contain" />
                LIÊN HỆ
              </Link>
              <Link
                href="tel:0793949998"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-bold text-[11px] lg:text-xs uppercase tracking-wide transition-all hover:scale-105"
                style={{ border: "1.5px solid #ffffff", color: "#ffffff", background: "transparent" }}
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                GỌI NGAY: 079 394 9998
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}