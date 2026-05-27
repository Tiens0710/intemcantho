"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Download, 
  Bell, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Clock, 
  FileText,
  AlertCircle,
  User,
  Share2,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandCard from "@/components/ui/BrandCard";
import { blogPosts, categoryColors } from "@/lib/data/blog-posts";

function parseDate(dateStr: string): { day: string; month: string } {
  const match = dateStr.match(/(\d+)\s*Tháng\s*(\d+)/i);
  if (match) {
    return { day: match[1], month: `TH${match[2]}` };
  }
  return { day: "01", month: "TH01" };
}

// Mock Market Pricing Data with sparkline coordinates
const initialPrices = [
  {
    id: 1,
    name: "Giấy Couche 300gsm (Nhập khẩu)",
    unit: "Ream (500 tờ A4)",
    price: "135.000đ",
    change: "+2.1%",
    trend: "up",
    status: "Tăng nhẹ",
    sparkData: [132, 133, 132, 134, 134, 135, 135]
  },
  {
    id: 2,
    name: "Giấy Ivory 350gsm (Cao cấp)",
    unit: "Ream (500 tờ A4)",
    price: "192.000đ",
    change: "0.0%",
    trend: "stable",
    status: "Ổn định",
    sparkData: [192, 192, 192, 192, 192, 192, 192]
  },
  {
    id: 3,
    name: "Decal Giấy Fasson (Đế vàng)",
    unit: "Xấp (100 tờ A3)",
    price: "220.000đ",
    change: "-1.5%",
    trend: "down",
    status: "Giảm nhẹ",
    sparkData: [224, 223, 222, 222, 221, 220, 220]
  },
  {
    id: 4,
    name: "Decal Nhựa PVC Chống Nước",
    unit: "Xấp (100 tờ A3)",
    price: "450.000đ",
    change: "0.0%",
    trend: "stable",
    status: "Ổn định",
    sparkData: [450, 450, 450, 450, 450, 450, 450]
  },
  {
    id: 5,
    name: "Màng bóng / màng mờ cán nguội",
    unit: "Cuộn (200m)",
    price: "310.000đ",
    change: "+4.2%",
    trend: "up",
    status: "Tăng",
    sparkData: [295, 298, 300, 302, 305, 310, 310]
  }
];

// Custom Sparkline Component using SVG polyline
function Sparkline({ trend, data }: { trend: string; data: number[] }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min === 0 ? 1 : max - min;
  
  const points = data.map((val, index) => {
    const x = (index / (data.length - 1)) * 60;
    const y = 20 - ((val - min) / range) * 16 - 2;
    return `${x},${y}`;
  }).join(" ");

  const color = trend === "up" 
    ? "#10b981" // emerald-500
    : trend === "down" 
      ? "#f43f5e" // rose-500
      : "#d97706"; // amber-600

  return (
    <svg className="w-16 h-6 overflow-visible" viewBox="0 0 60 20">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function TinTucContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") || "all";

  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const postsPerPage = 10;

  const allowedCategories = ["mua-in"];
  const newsPosts = blogPosts.filter((post) => allowedCategories.includes(post.category));

  useEffect(() => {
    if (catParam && allowedCategories.includes(catParam)) {
      setActiveCategory(catParam);
      setCurrentPage(1);
    } else {
      setActiveCategory("all");
      setCurrentPage(1);
    }
  }, [catParam]);

  const filteredPosts = activeCategory === "all" 
    ? newsPosts 
    : newsPosts.filter((post) => post.category === activeCategory);

  const listPosts = activeCategory === "all" ? filteredPosts.slice(2) : filteredPosts;
  const totalPages = Math.ceil(listPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const displayedPosts = listPosts.slice(startIdx, startIdx + postsPerPage);

  // Featured posts & carousel (same layout as ExperiencePage)
  const featuredPost1 = filteredPosts[0];
  const featuredPost2 = filteredPosts[1];
  const allPostsForCarousel = filteredPosts.slice(2);
  const postsPerSlide = 3;
  const totalSmallSlides = Math.ceil(allPostsForCarousel.length / postsPerSlide);
  const [currentSmallSlide, setCurrentSmallSlide] = useState(0);

  const nextSmallSlide = useCallback(() => {
    if (totalSmallSlides > 0) {
      setCurrentSmallSlide((prev) => (prev + 1) % totalSmallSlides);
    }
  }, [totalSmallSlides]);

  useEffect(() => {
    if (totalSmallSlides <= 1) return;
    const timer = setInterval(nextSmallSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSmallSlide, totalSmallSlides]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes("@")) {
      setEmailSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center text-white border-b border-amber-950/20" style={{ backgroundImage: "url('/kinhnghiem/background.png')" }}>
        {/* Ambient Lights */}
        <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-orange-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        
        {/* Delicate grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,white_80%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Details */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400"
              >
                <Link href="/" className="hover:text-amber-300 transition-colors">Trang chủ</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" strokeWidth={3} />
                <Link href="/kinh-nghiem" className="hover:text-amber-300 transition-colors">Kinh nghiệm</Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" strokeWidth={3} />
                <span className="text-slate-300">Tin tức & Thị trường</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent leading-[1.1]"
              >
                Tin Tức Thị Trường <br />
                <span className="text-amber-500 font-light">& Biến Động Giá Cần Thơ</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-slate-300 font-normal max-w-2xl leading-relaxed"
              >
                Cập nhật nhanh chóng, chính xác biến động giá nguyên vật liệu in ấn, giá giấy Couche, Ivory, decal các loại và các xu hướng thị trường in ấn mới nhất tại Cần Thơ.
              </motion.p>
            </div>

            {/* Statistics Widgets */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Cập nhật lúc</p>
                    <p className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Hôm Nay
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Chỉ số theo dõi</p>
                    <p className="text-sm font-bold text-white">05+ Nguyên liệu</p>
                  </div>
                  <div className="space-y-1 col-span-2 pt-3 border-t border-white/5">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dự báo xu hướng</p>
                    <p className="text-xs font-medium text-amber-300">Biến động nhẹ cuối tháng 5</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content (Dashboard & News Feed) - 8 cols */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Market Price Index Dashboard - Chart View */}
              <div id="pricing-dashboard" className="bg-gradient-to-br from-white via-white to-amber-50/30 rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/50 p-6 md:p-8 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-orange-100/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-100/10 to-teal-100/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40"></span>
                          <span className="relative block w-3 h-3 rounded-full bg-emerald-500"></span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                          Giá Hôm Nay
                        </h2>
                      </div>
                      <p className="text-sm text-slate-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        Dữ liệu thị trường Cần Thơ &bull; Cập nhật liên tục
                      </p>
                    </div>
                    
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-200 hover:border-amber-500 text-amber-700 hover:text-amber-800 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer">
                      <Download className="w-4 h-4" />
                      Tải bảng giá (PDF)
                    </button>
                  </div>

                  {/* Bar Chart */}
                  {(() => {
                    const numericPrices = initialPrices.map((item) => ({
                      ...item,
                      numericPrice: parseInt(item.price.replace(/\./g, "").replace("đ", ""), 10),
                    }));
                    const maxPrice = Math.max(...numericPrices.map((item) => item.numericPrice));
                    const barBgColors = ["#f59e0b", "#f97316", "#f43f5e", "#10b981", "#14b8a6"];
                    const allV = numericPrices.map((p) => p.numericPrice);
                    const gMin = Math.min(...allV);
                    const gMax = Math.max(...allV);

                    return (
                      <div className="mb-6">
                        {/* Y-axis + Chart */}
                        <div className="flex gap-0" style={{ minWidth: "100%" }}>
                          {/* Y-axis labels */}
                          <div className="flex flex-col justify-between pr-2 pt-0 pb-7" style={{ height: 300, minWidth: 52 }}>
                            {[0, 1, 2, 3, 4].map((i) => (
                              <span key={i} className="text-[9px] font-bold text-slate-400 text-right leading-none">{Math.round(gMax - (i / 4) * (gMax - gMin)).toLocaleString("vi-VN")}</span>
                            ))}
                          </div>

                          {/* Chart area */}
                          <div className="flex-1 relative border-l border-slate-200" style={{ height: 300 }}>
                            {/* Grid lines */}
                            {[0, 1, 2, 3, 4].map((i) => (
                              <div key={i} className="absolute left-0 right-0 border-t border-dashed border-slate-200" style={{ top: `${(i / 4) * 100}%` }} />
                            ))}

                            {/* Bars */}
                            <div className="flex items-end justify-around h-full px-2 pb-6 gap-1">
                              {numericPrices.map((item, idx) => {
                                const barH = (item.numericPrice / maxPrice) * 240;
                                return (
                                  <div key={item.id} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                                    {/* Tooltip */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 mb-2">
                                      <div className="bg-slate-800 text-white rounded-xl px-4 py-3 shadow-xl text-center whitespace-nowrap">
                                        <p className="text-[10px] font-bold mb-1">{item.name}</p>
                                        <p className="text-base font-extrabold text-amber-300">{item.price}</p>
                                        <div className="flex items-center justify-center gap-1 mt-1">
                                          {item.trend === "up" && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                                          {item.trend === "down" && <TrendingDown className="w-3 h-3 text-rose-400" />}
                                          {item.trend === "stable" && <Minus className="w-3 h-3 text-amber-400" />}
                                          <span className={`text-[10px] font-bold ${item.trend === "up" ? "text-emerald-400" : item.trend === "down" ? "text-rose-400" : "text-slate-300"}`}>{item.change}</span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Bar */}
                                    <div
                                      className="w-full max-w-16 rounded-t-xl relative overflow-hidden hover:brightness-110 hover:shadow-lg cursor-pointer border border-white/30"
                                      style={{ height: barH, background: `linear-gradient(180deg, ${barBgColors[idx]}dd 0%, ${barBgColors[idx]} 100%)` }}
                                    >
                                      <div className="absolute bottom-2 left-0 right-0 text-center">
                                        <span className="text-white font-extrabold text-[10px] md:text-xs drop-shadow-md leading-tight">{item.price}</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Labels below chart */}
                        <div className="flex mt-3">
                          {numericPrices.map((item) => (
                            <div key={item.id} className="flex-1 text-center px-1">
                              <p className="text-[10px] md:text-xs font-bold text-slate-600 leading-tight line-clamp-2">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-4 text-[10px] text-slate-400 font-medium">
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              Tăng
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-rose-500" />
                              Giảm
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-slate-400" />
                              Ổn định
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">Đơn vị: VNĐ</p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Mini stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: "Giá cao nhất", value: "450.000đ", sub: "Decal PVC", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
                      { label: "Giá thấp nhất", value: "135.000đ", sub: "Giấy Couche", icon: TrendingDown, color: "text-rose-600 bg-rose-50" },
                      { label: "Tăng giá", value: "2/5", sub: "Nguyên liệu", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
                      { label: "Ổn định", value: "2/5", sub: "Nguyên liệu", icon: Minus, color: "text-amber-600 bg-amber-50" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${stat.color}`}>
                            <stat.icon className="w-3.5 h-3.5" />
                          </span>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                        <p className="text-lg font-extrabold text-slate-800">{stat.value}</p>
                        <p className="text-[10px] text-slate-400">{stat.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Notice */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-800 mb-1">Lưu ý quan trọng</p>
                      <p className="text-xs text-amber-700/80 leading-relaxed">
                        Đơn giá trên mang tính chất tham khảo tại thị trường Cần Thơ, có thể thay đổi tùy thuộc vào số lượng đặt in, quy cách sản xuất và thời điểm ký hợp đồng. Để có báo giá chính xác nhất kèm chiết khấu đại lý, vui lòng liên hệ hotline bộ phận kinh doanh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Feed Section - ExperiencePage layout */}
              <div className="space-y-6">
                {/* Category Tabs */}
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                  {[
                    { id: "all", label: "Tất cả tin tức" },
                    ...(["mua-in"].map((c) => {
                      const labels: Record<string, string> = { "mua-in": "Mua in ấn" };
                      return { id: c, label: labels[c] || c };
                    }))
                  ].map((tab) => {
                    const isActive = activeCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => { setActiveCategory(tab.id); setCurrentPage(1); }}
                        className="flex items-center gap-2 cursor-pointer px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200"
                        style={
                          isActive
                            ? {
                                border: "2px solid rgba(230, 121, 42, 0.65)",
                                color: "#E6792A",
                                background: "#fff",
                                boxShadow: "0 0 0 2px rgba(230, 121, 42, 0.18)",
                              }
                            : { border: "1px solid #d1d5db", color: "#4b5563", background: "#fff" }
                        }
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = "#E6792A";
                            e.currentTarget.style.color = "#E6792A";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = "#d1d5db";
                            e.currentTarget.style.color = "#4b5563";
                          }
                        }}
                      >
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="border-t-2 border-[#E6792A]/50 pt-2" />

                {/* Featured Posts + Carousel - ExperiencePage style */}
                {activeCategory === "all" && filteredPosts.length > 0 && currentPage === 1 && (
                  <div className="mb-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Bài viết mới nhất</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {featuredPost1 && (
                        <Link
                          href={`/kinh-nghiem/${featuredPost1.slug}`}
                          className={`${featuredPost2 ? "md:col-span-2" : "md:col-span-3"} self-start`}
                        >
                          <BrandCard className="overflow-hidden group cursor-pointer h-full">
                            <div className="overflow-hidden bg-gray-100 aspect-[16/9]">
                              <img
                                src={featuredPost1.image}
                                alt={featuredPost1.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-5">
                              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#E6792A] transition-colors line-clamp-2 leading-snug">
                                {featuredPost1.title}
                              </h3>
                              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-2">
                                {featuredPost1.excerpt}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>{featuredPost1.date}</span>
                                <span>&bull;</span>
                                <span>{featuredPost1.readTime}</span>
                              </div>
                            </div>
                          </BrandCard>
                        </Link>
                      )}
                      {featuredPost2 && (
                        <Link href={`/kinh-nghiem/${featuredPost2.slug}`} className="mt-12">
                          <BrandCard className="overflow-hidden group cursor-pointer h-full">
                            <div className="overflow-hidden bg-gray-100 aspect-[16/13]">
                              <img
                                src={featuredPost2.image}
                                alt={featuredPost2.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#E6792A] transition-colors line-clamp-2 leading-snug">
                                {featuredPost2.title}
                              </h3>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>{featuredPost2.date}</span>
                                <span>&bull;</span>
                                <span>{featuredPost2.readTime}</span>
                              </div>
                            </div>
                          </BrandCard>
                        </Link>
                      )}
                    </div>

                    {/* Carousel */}
                    {allPostsForCarousel.length > 0 && (
                      <div className="mt-4 overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${currentSmallSlide * 100}%)` }}
                        >
                          {Array.from({ length: totalSmallSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {allPostsForCarousel
                                  .slice(slideIndex * postsPerSlide, slideIndex * postsPerSlide + postsPerSlide)
                                  .map((post) => (
                                    <Link key={post.id} href={`/kinh-nghiem/${post.slug}`}>
                                      <BrandCard className="overflow-hidden group cursor-pointer h-full">
                                        <div className="overflow-hidden bg-gray-100 aspect-[16/7]">
                                          <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                          />
                                        </div>
                                        <div className="p-2">
                                          <h3
                                            style={{ fontSize: "13px", lineHeight: "1.4" }}
                                            className="font-medium text-gray-700 group-hover:text-[#E6792A] transition-colors whitespace-normal break-words"
                                          >
                                            {post.title}
                                          </h3>
                                        </div>
                                      </BrandCard>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        {totalSmallSlides > 1 && (
                          <div className="flex justify-center gap-2 mt-3">
                            {Array.from({ length: totalSmallSlides }).map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentSmallSlide(i)}
                                className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                                style={{
                                  background: currentSmallSlide === i ? "#E6792A" : "#d1d5db",
                                  transform: currentSmallSlide === i ? "scale(1.2)" : "scale(1)",
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Divider */}
                    <div className="mt-6 border-t-2 border-[#E6792A]/50" />
                  </div>
                )}

                {/* Results Index */}
                {listPosts.length > 0 && (
                  <div className="flex items-center justify-between pt-2 pb-1">
                    <p className="text-xs text-gray-500 font-medium">
                      Hiển thị <span className="font-bold text-gray-700">{startIdx + 1}–{Math.min(startIdx + postsPerPage, listPosts.length)}</span> trong <span className="font-bold text-gray-700">{listPosts.length}</span> bài viết
                    </p>
                  </div>
                )}

                {/* Blog List */}
                {displayedPosts.map((post, index) => {
                  const { day, month } = parseDate(post.date);
                  const globalIndex = startIdx + index;
                  const adAfter = (globalIndex + 1) % 4 === 0 && globalIndex < listPosts.length - 1;
                  return (
                    <div key={post.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Link href={`/kinh-nghiem/${post.slug}`}>
                          <BrandCard className="overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 cursor-pointer group">
                            <div className="relative w-full sm:w-48 md:w-56 flex-shrink-0 overflow-hidden bg-gray-100">
                              <div className="aspect-[4/3] sm:aspect-auto sm:h-full">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div
                                className="absolute top-3 left-3 text-white rounded-lg px-2.5 py-1.5 text-center leading-tight shadow-lg"
                                style={{ background: "#E6792A" }}
                              >
                                <div className="text-xl font-bold leading-none">{day}</div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider">{month}</div>
                              </div>
                            </div>
                            <div className="flex-1 p-4 flex flex-col justify-center">
                              <div className="mb-2">
                                <span
                                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                                  style={{
                                    background: `${categoryColors[post.category]}15`,
                                    color: categoryColors[post.category],
                                  }}
                                >
                                  {post.categoryLabel}
                                </span>
                              </div>
                              <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-[#E6792A] transition-colors leading-snug">
                                {post.title}
                              </h2>
                              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                                <span className="flex items-center gap-1.5">
                                  <User className="w-3.5 h-3.5" />
                                  <span>intemct</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Share2 className="w-3.5 h-3.5" />
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span>0</span>
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <span
                                className="inline-flex items-center gap-2 text-xs font-semibold transition-colors"
                                style={{ color: "#E6792A" }}
                              >
                                Đọc bài viết →
                              </span>
                            </div>
                          </BrandCard>
                        </Link>
                      </motion.div>
                      {adAfter && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="mt-6 rounded-2xl overflow-hidden"
                        >
                          <Link href="/lien-he">
                            <img
                              src="/standee/standee_cta.png"
                              alt="Quảng cáo in standee"
                              className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
                            />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  );
                })}

                {displayedPosts.length === 0 && (
                  <div className="text-center py-16 text-gray-400">
                    <p className="text-lg">Không có tin tức nào trong danh mục này.</p>
                  </div>
                )}

                {/* Pagination with ellipsis */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 pt-4">
                    {getPageNumbers().map((page, i) =>
                      typeof page === "string" ? (
                        <span key={`ellipsis-${i}`} className="px-2 text-xs text-gray-400">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="px-3.5 py-1.5 rounded-full font-medium text-xs transition-all duration-200 cursor-pointer"
                          style={
                            currentPage === page
                              ? {
                                  border: "1.5px solid rgba(230, 121, 42, 0.65)",
                                  color: "#E6792A",
                                  background: "#fff",
                                  boxShadow: "0 0 0 1.5px rgba(230, 121, 42, 0.18)",
                                }
                              : { border: "1px solid #d1d5db", color: "#4b5563", background: "#fff" }
                          }
                          onMouseEnter={(e) => {
                            if (currentPage !== page) {
                              e.currentTarget.style.borderColor = "#E6792A";
                              e.currentTarget.style.color = "#E6792A";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentPage !== page) {
                              e.currentTarget.style.borderColor = "#d1d5db";
                              e.currentTarget.style.color = "#4b5563";
                            }
                          }}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - 4 cols */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Premium Price Alert Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-amber-50/20 border border-amber-200/60 shadow-xl shadow-amber-900/5 rounded-[32px] p-6 md:p-8">
                {/* Floating ambient glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 text-center space-y-5">
                  <div className="inline-flex p-3.5 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 rounded-2xl text-amber-800 shadow-inner">
                    <Bell className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-800 tracking-tight">Nhận Báo Giá Ngay</h3>
                    <p className="text-xs text-slate-500 leading-relaxed px-1">
                      Đăng ký nhận báo giá và cập nhật biến động giá nguyên liệu hằng tuần để tối ưu chi phí in ấn.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {!emailSubscribed ? (
                      <motion.form 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubscribe} 
                        className="space-y-3 pt-2"
                      >
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="Nhập email của bạn..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 bg-white shadow-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 focus:outline-none transition-all"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-amber-700/20 active:scale-[0.98] cursor-pointer"
                        >
                          Đăng ký ngay
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-5 bg-emerald-50 border border-emerald-200/80 rounded-2xl flex flex-col items-center gap-3 pt-4 shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-emerald-800 text-center">Đăng ký thành công!</p>
                          <p className="text-[10px] text-emerald-600/90 text-center leading-relaxed">
                            Bạn sẽ nhận được tin tức biến động giá mới nhất hàng tuần qua hòm thư.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Consultation Hotline Card */}
              <div className="bg-white rounded-[32px] text-slate-900 p-8 shadow-lg relative overflow-hidden border border-slate-200/70">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200/40 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Đại lý & In ấn
                    </span>
                    <h3 className="text-lg font-extrabold tracking-tight">Tư Vấn Giá & Ưu Đãi</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bạn là doanh nghiệp, đại lý quảng cáo cần in ấn bao bì, decal tem nhãn định kỳ với số lượng lớn? Hãy liên hệ ngay với phòng kinh doanh để nhận chính sách chiết khấu tốt nhất.
                    </p>
                  </div>
                  
                  <div className="pt-2 space-y-3">
                    <a
                      href="tel:0985463403"
                      className="flex items-center justify-center gap-3 w-full py-3.5 bg-amber-700 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all duration-300 shadow-lg shadow-amber-700/30 active:scale-[0.98]"
                    >
                      <Phone className="w-4 h-4" />
                      Hotline: 0985 463 403
                    </a>
                    <a
                      href="https://zalo.me/0985463403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-white hover:bg-amber-50 border border-amber-200 text-amber-700 rounded-xl text-xs font-bold transition-all duration-300 active:scale-[0.98]"
                    >
                      <span>Nhắn tin Zalo hỗ trợ giá</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Recent Industry Alerts Timeline */}
              <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-6 md:p-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-amber-700 rounded-full" />
                  Tin vắn ngành in
                </h3>
                
                <div className="relative pl-4 border-l border-slate-150 space-y-6">
                  {[
                    {
                      date: "21/05",
                      title: "Cảng Hải Phòng tăng phụ phí xếp dỡ, dự kiến ảnh hưởng nhẹ đến giá bột giấy nhập khẩu cuối tháng 5.",
                    },
                    {
                      date: "18/05",
                      title: "Fasson giới thiệu dòng decal giấy tự hủy thân thiện môi trường mới với lớp keo acrylic dễ tẩy rửa.",
                    },
                    {
                      date: "15/05",
                      title: "Cầu đường Cần Thơ hoàn thiện quy trình giao vận nội tỉnh mới giúp giảm thời gian giao hàng in ấn xuống 20%.",
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative space-y-1">
                      {/* Timeline dot */}
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-amber-700 ring-4 ring-amber-50" />
                      
                      <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded">
                        {item.date}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function TinTucPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    }>
      <TinTucContent />
    </Suspense>
  );
}
