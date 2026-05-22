"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import WarmButton from "@/components/WarmButton";

const fileRequirements = [
  "File dùng kích thước: A4 (21x29.7cm) hoặc theo yêu cầu",
  "Độ phân giải 300dpi, hệ màu CMYK",
  "File PDF, AI, PSD, CDR hoặc ảnh PNG/JPG chất lượng cao",
  "Nội dung rõ ràng, không lỗi chính tả, thông tin chính xác",
  "Chữ đã convert outline, hình ảnh không bị vỡ khi phóng lớn",
];

const testimonials = [
  { id: 1, content: "Catalogue in rất đẹp, giấy dày, màu sắc chuẩn. Đối tác khen nức nở!", author: "Anh Long", role: "Giám đốc kinh doanh", avatar: "https://ui-avatars.com/api/?name=Long&background=fcebdc&color=e6792a", rating: 5 },
  { id: 2, content: "Giá hợp lý, hỗ trợ thiết kế nhiệt tình. Catalogue hoàn thành đúng hẹn.", author: "Chị Hoa", role: "Chủ showroom nội thất", avatar: "https://ui-avatars.com/api/?name=Hoa&background=fcebdc&color=e6792a", rating: 5 },
  { id: 3, content: "Đã in nhiều lần, lần nào cũng hài lòng. Chất lượng ổn định, giá tốt.", author: "Anh Phát", role: "Quản lý chuỗi cửa hàng", avatar: "https://ui-avatars.com/api/?name=Phat&background=fcebdc&color=e6792a", rating: 5 },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } } };
const buttonVariants = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5, ease: "easeOut" as const } } };
const cardVariants = { hidden: { opacity: 0, y: 24, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

export default function CatalogueFileAndFeedback() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #E6792A 0%, transparent 70%)" }} />
      <div className="container mx-auto px-4 max-w-[1300px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="w-full lg:w-[40%]">
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 h-full overflow-hidden" style={{ border: "1.5px solid #fcebdc", boxShadow: "0 4px 24px rgba(230,121,42,0.06), 0 1px 4px rgba(230,121,42,0.04)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #E6792A 0%, #f5c08a 50%, #E6792A 100%)" }} />
              <div className="absolute top-4 right-4 opacity-[0.06]">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><polyline points="14 2 14 8 20 8" fill="none" stroke="#E6792A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <motion.div initial={{ opacity: 0, y: -12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-7">
                <h2 className="text-xl font-black text-center text-gray-900 uppercase tracking-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  YÊU CẦU FILE <span style={{ color: "#E6792A" }}>IN CATALOGUE</span>
                </h2>
                <div className="mx-auto mt-3 h-[3px] w-16 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #E6792A, transparent)" }} />
              </motion.div>
              <motion.ul variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-4 mb-8">
                {fileRequirements.map((req, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3 group/item">
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #E6792A 0%, #f5a84a 100%)", boxShadow: "0 2px 8px rgba(230,121,42,0.2)" }} whileHover={{ scale: 1.15, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </motion.div>
                    </div>
                    <span className="text-[14px] text-gray-800 font-bold leading-snug transition-colors duration-200 group-hover/item:text-[#E6792A]" style={{ fontFamily: "'Nunito', sans-serif" }}>{req}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={buttonVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                <WarmButton fullWidth variant="filled" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>} className="uppercase tracking-wide">
                  GỬI FILE ĐỂ KIỂM TRA MIỄN PHÍ
                </WarmButton>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} className="w-full lg:w-[60%] flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: -16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-8">
              <h2 className="text-2xl font-black text-center text-gray-900 uppercase tracking-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
                KHÁCH HÀNG <span style={{ color: "#E6792A" }}>NÓI GÌ</span> VỀ CHÚNG TÔI?
              </h2>
              <div className="mx-auto mt-3 h-[3px] w-16 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #E6792A, transparent)" }} />
            </motion.div>
            <TestimonialSwiper isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSwiper({ isInView }: { isInView: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const DOUBLED = useMemo(() => [...testimonials, ...testimonials], []);
  const totalPages = testimonials.length;
  const handleScroll = useCallback(() => { const el = scrollRef.current; if (!el) return; const cardWidth = el.scrollWidth / DOUBLED.length; setActivePage(Math.round(el.scrollLeft / cardWidth) % totalPages); }, [DOUBLED.length, totalPages]);
  useEffect(() => { const el = scrollRef.current; if (!el) return; el.addEventListener("scroll", handleScroll, { passive: true }); return () => el.removeEventListener("scroll", handleScroll); }, [handleScroll]);
  useEffect(() => { const timer = setInterval(() => { const el = scrollRef.current; if (!el) return; const cardWidth = el.scrollWidth / DOUBLED.length; const next = el.scrollLeft + cardWidth; if (next >= el.scrollWidth - el.clientWidth - 10) { el.scrollTo({ left: 0, behavior: "instant" }); } else { el.scrollTo({ left: next, behavior: "smooth" }); } }, 4000); return () => clearInterval(timer); }, [DOUBLED.length]);
  const goToPage = useCallback((idx: number) => { const el = scrollRef.current; if (!el) return; el.scrollTo({ left: (el.scrollWidth / DOUBLED.length) * idx, behavior: "smooth" }); }, [DOUBLED.length]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
        {DOUBLED.map((testi, idx) => (
          <motion.div key={`${testi.id}-${idx}`} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative flex-shrink-0 w-[calc(100%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start">
            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative bg-white rounded-2xl p-5 flex flex-col h-full overflow-hidden" style={{ border: "1.5px solid #f4f4f5", boxShadow: "0 2px 12px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)" }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-center gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => (<svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < testi.rating ? "#F5A623" : "#e5e7eb"}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>))}</div>
                <p className="text-[13px] text-gray-700 italic flex-grow text-center leading-relaxed mb-5" style={{ fontFamily: "'Nunito', sans-serif" }}>&ldquo;{testi.content}&rdquo;</p>
                <div className="w-full h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, #fcebdc, transparent)" }} />
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0"><img src={testi.avatar} alt={testi.author} className="w-10 h-10 rounded-full object-cover" style={{ border: "2px solid #fcebdc" }} loading="lazy" /><div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" /></div>
                  <div><span className="text-[14px] font-bold text-gray-900 block" style={{ fontFamily: "'Nunito', sans-serif" }}>{testi.author}</span><span className="text-[12px] text-gray-500 italic" style={{ fontFamily: "'Nunito', sans-serif" }}>{testi.role}</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2.5 mt-6">
        {testimonials.map((_, idx) => (
          <button key={idx} onClick={() => goToPage(idx)} className="relative transition-all duration-300 cursor-pointer rounded-full" style={{ width: idx === activePage ? "28px" : "10px", height: "10px", background: idx === activePage ? "#E6792A" : "#e5e7eb", boxShadow: idx === activePage ? "0 0 0 3px rgba(230,121,42,0.15), 0 2px 4px rgba(230,121,42,0.25)" : "none" }} />
        ))}
      </div>
    </motion.div>
  );
}