"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  { id: 1, label: "Bìa Đựng Hồ Sơ", slug: "bia-dung-ho-so", image: "/2.jpg" },
  { id: 2, label: "Danh Thiếp", slug: "danh-thiep", image: "/34.jpg" },
  { id: 3, label: "Vé", slug: "ve", image: "/214-1.jpg" },
  { id: 4, label: "Tờ Gấp", slug: "to-gap", image: "/2.jpg" },
  { id: 5, label: "Poster", slug: "poster", image: "/219.jpg" },
  { id: 6, label: "Hộp Giấy", slug: "hop-giay", image: "/34.jpg" },
  { id: 7, label: "Túi Giấy", slug: "tui-giay", image: "/214-1.jpg" },
  { id: 8, label: "Biểu Mẫu", slug: "bieu-mau", image: "/2.jpg" },
  { id: 9, label: "Thẻ Nhựa", slug: "the-nhua", image: "/180-1.jpg" },
  { id: 10, label: "Thực Đơn", slug: "thuc-don", image: "/247.jpg" },
  { id: 11, label: "Giấy Tiêu Đề", slug: "giay-tieu-de", image: "/34.jpg" },
  { id: 12, label: "Bao Thư", slug: "bao-thu", image: "/2.jpg" },
  { id: 13, label: "Tờ Rơi", slug: "to-roi", image: "/214-1.jpg" },
  { id: 14, label: "Catalogue", slug: "catalogue", image: "/219.jpg" },
  { id: 15, label: "Phiếu Quà Tặng", slug: "phieu-qua-tang", image: "/180-1.jpg" },
  { id: 16, label: "Nhãn Dán", slug: "nhan-dan", image: "/34.jpg" },
  { id: 17, label: "Mác Sản Phẩm", slug: "mac-san-pham", image: "/247.jpg" },
  { id: 18, label: "Giấy Ghi Chú", slug: "giay-ghi-chu", image: "/2.jpg" },
  { id: 19, label: "Phiếu Bảo Hành", slug: "phieu-bao-hanh", image: "/214-1.jpg" },
  { id: 20, label: "Thiệp Mời", slug: "thiep-moi", image: "/180-1.jpg" },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="relative pt-10 pb-24 md:pt-14 md:pb-32 bg-white overflow-hidden">
      {/* Rotating ring — top right */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -top-16 -right-16 w-60 h-60 rounded-full pointer-events-none" style={{ border: "1px solid rgba(139,94,60,0.06)" }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full pointer-events-none" style={{ border: "1px dashed rgba(139,94,60,0.05)" }} />

      {/* Floating diamond shape */}
      <motion.div animate={{ y: [-8, 8, -8], rotate: [0, 45, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[8%] w-5 h-5 pointer-events-none" style={{ background: "rgba(139,94,60,0.04)", transform: "rotate(45deg)" }} />
      <motion.div animate={{ y: [6, -6, 6], rotate: [45, 0, 45] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[25%] right-[6%] w-4 h-4 pointer-events-none" style={{ background: "rgba(139,94,60,0.05)", transform: "rotate(45deg)" }} />

      {/* Animated plus signs */}
      <motion.div animate={{ opacity: [0.03, 0.08, 0.03], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[35%] right-[12%] pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#8B5E3C" strokeWidth="1"><line x1="10" y1="2" x2="10" y2="18" /><line x1="2" y1="10" x2="18" y2="10" /></svg>
      </motion.div>
      <motion.div animate={{ opacity: [0.04, 0.1, 0.04], rotate: [45, 135, 45] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-[30%] left-[10%] pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#8B5E3C" strokeWidth="1"><line x1="10" y1="2" x2="10" y2="18" /><line x1="2" y1="10" x2="18" y2="10" /></svg>
      </motion.div>

      {/* Horizontal scanning line */}
      <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }} className="absolute top-[60%] left-0 w-32 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(139,94,60,0.08), transparent)" }} />

      {/* Gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5E3C]/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-20 md:w-32 bg-amber-800/70" />
            <h2 className="text-3xl md:text-4xl font-bold mb-0 whitespace-nowrap !text-amber-800">DANH MỤC SẢN PHẨM</h2>
            <span className="h-px w-20 md:w-32 bg-amber-800/70" />
          </div>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto">Khám phá đa dạng danh mục sản phẩm in ấn — Từ danh thiếp đến bao bì, đáp ứng mọi nhu cầu</p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-10">
          {CATEGORIES.map((cat, index) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.02, duration: 0.3 }}>
              <Link
                href={`/danh-muc/${cat.slug}`}
                className="group flex flex-col items-center justify-center transition-all duration-300 hover:bg-amber-50/40"
                style={{ padding: "20px 8px", borderRight: "1px solid #E8E8E8", borderBottom: index < 10 ? "1px solid #E8E8E8" : "none" }}
              >
                <div className="mb-3 overflow-hidden transition-transform duration-400 group-hover:scale-110" style={{ width: "90px", height: "90px", borderRadius: "14px", boxShadow: "0 2px 10px rgba(92,61,30,0.08)" }}>
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#3D2E1E", textAlign: "center", lineHeight: 1.3 }}>{cat.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center mt-12">
          <Link href="/van-phong" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-800 text-amber-800 font-semibold rounded-full transition-all duration-300 hover:bg-amber-800 hover:text-white">
            Xem tất cả danh mục
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}