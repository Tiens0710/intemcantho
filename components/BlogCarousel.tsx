"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const blogPosts = [
  { id: 1, title: "In tem nhãn chống nước ở Cần Thơ", date: "29 Th4", image: "/nhap.webp", excerpt: "Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm." },
  { id: 2, title: "Thiết kế in ấn danh thiếp ở Cần Thơ", date: "26 Th4", image: "/Bia-15.webp", excerpt: "Thiết kế in ấn danh thiếp vẫn là một trong những \"vũ khí nhỏ nhưng có võ\" trong kinh doanh hiện đại." },
  { id: 3, title: "Dịch vụ in ấn ấn phẩm văn phòng", date: "23 Th4", image: "/Bia-12.webp", excerpt: "In ấn ấn phẩm văn phòng là một phần quan trọng trong cách doanh nghiệp thể hiện sự chuyên nghiệp." },
  { id: 4, title: "In ấn ép nhựa giá rẻ theo yêu cầu", date: "20 Th4", image: "/Bia-14.webp", excerpt: "In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp." },
];

export default function BlogCarousel() {
  const [blogStart, setBlogStart] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBlogStart((prev) => (prev + 2) % blogPosts.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [blogPosts.length]);

  return (
    <section id="latest-posts" className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(139,94,60,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left — Title */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #E6D2BF)" }} />
            </div>
            <h2
              className="heading-gradient"
              style={{
                fontSize: "clamp(4.5rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                "--heading-gradient": "linear-gradient(135deg, #B08060 0%, #C08040 40%, #F0A050 100%)",
                filter: "drop-shadow(0 2px 6px rgba(154, 91, 36, 0.2))",
              } as React.CSSProperties}
            >
              Bài viết mới nhất
            </h2>
            <div className="mt-5 mb-5 w-24 h-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #E6792A, #C66A27, #E6D2BF)" }} />
            <p style={{ fontSize: "15px", fontWeight: 400, color: "#6B5A48", lineHeight: 1.75 }}>Chia sẻ kiến thức và kinh nghiệm về thiết kế, in ấn tem nhãn chuyên nghiệp</p>
            <Link href="/kinh-nghiem" className="group/link inline-flex items-center gap-2.5 mt-8 text-sm font-bold transition-all duration-300 hover:gap-3.5 hover:text-amber-700" style={{ color: "#8B5E3C" }}>
              Xem tất cả bài viết
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
          {/* Right — 2 Cards with overlay style */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={blogStart} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogPosts.slice(blogStart, blogStart + 2).map((post) => (
                  <article key={post.id} className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" style={{ height: "280px", boxShadow: "0 4px 20px rgba(92, 61, 30, 0.12)" }}>
                    {/* Background Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 transition-all duration-500" style={{ background: "linear-gradient(to top, rgba(28, 16, 7, 0.75) 0%, rgba(28, 16, 7, 0.4) 40%, rgba(28, 16, 7, 0.08) 70%, transparent 100%)" }} />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(230, 121, 42, 0.3) 0%, rgba(230, 121, 42, 0.1) 40%, transparent 60%)" }} />
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: "rgba(139, 94, 60, 0.85)", backdropFilter: "blur(4px)" }}>{post.date}</div>
                    {/* Content Overlay — Title only */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="mb-4 line-clamp-2 blog-card-title transition-colors duration-300" style={{ fontSize: "19px", fontWeight: 800, lineHeight: 1.3, fontFamily: "'Nunito', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" }}>{post.title}</h3>
                      <Link href="/kinh-nghiem" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-300 hover:gap-3" style={{ background: "rgba(230, 121, 42, 0.9)", color: "#ffffff", backdropFilter: "blur(4px)" }}>
                        Đọc tiếp
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {Array.from({ length: Math.ceil(blogPosts.length / 2) }).map((_, idx) => {
                const pageStart = idx * 2;
                const isActive = blogStart === pageStart;
                return (
                  <button
                    key={idx}
                    onClick={() => setBlogStart(pageStart)}
                    className="relative transition-all duration-300"
                    style={{
                      width: isActive ? "32px" : "10px",
                      height: "10px",
                      borderRadius: "9999px",
                      background: isActive
                        ? "linear-gradient(90deg, #E6792A, #C66A27)"
                        : "rgba(139, 94, 60, 0.2)",
                      boxShadow: isActive ? "0 2px 8px rgba(198, 106, 39, 0.4)" : "none",
                    }}
                    aria-label={`Chuyển sang trang ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}