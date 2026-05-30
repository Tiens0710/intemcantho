"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { categoryColors, type BlogPost } from "@/lib/data/blog-posts";
import { fetchBlogPosts, type BlogPostFromAPI } from "@/lib/blogApi";
import BrandCard from "@/components/ui/BrandCard";
import WarmButton from "@/components/WarmButton";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MessageCircle, Share2, User, Bell, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

import { useSearchParams } from "next/navigation";
import FeaturedProducts from "@/components/FeaturedProducts";

const PLACEHOLDER_IMG = "/no-image.svg";

const allCategories = [
  { id: "tem-nhan", label: "Tem nhãn" },
  { id: "bao-bi", label: "Bao bì" },
  { id: "an-pham", label: "Ấn phẩm văn phòng" },
  { id: "thiet-ke", label: "Thiết kế" },
  { id: "mua-in", label: "Mua in ấn" },
];

function parseDate(dateStr: string | null): { day: string; month: string } {
  if (!dateStr) return { day: "01", month: "TH01" };
  
  // Try ISO date format first (from API)
  const isoDate = new Date(dateStr);
  if (!isNaN(isoDate.getTime())) {
    return {
      day: String(isoDate.getDate()).padStart(2, "0"),
      month: `TH${String(isoDate.getMonth() + 1).padStart(2, "0")}`,
    };
  }
  
  // Fallback: Vietnamese format "29 Tháng 4, 2024"
  const match = dateStr.match(/(\d+)\s*Tháng\s*(\d+)/i);
  if (match) {
    return { day: match[1], month: `TH${match[2]}` };
  }
  return { day: "01", month: "TH01" };
}

/**
 * Map backend blog post to frontend BlogPost format
 */
function mapApiPostToBlogPost(post: BlogPostFromAPI, index: number): BlogPost {
  const categoryName = post.categories?.[0]?.name || "";
  const categorySlug = post.categories?.[0]?.slug || "";
  
  // Map backend category slug to frontend category id
  const categoryMap: Record<string, { id: string; label: string }> = {
    "tem-nhan": { id: "tem-nhan", label: "Tem nhãn" },
    "bao-bi": { id: "bao-bi", label: "Bao bì" },
    "an-pham": { id: "an-pham", label: "Ấn phẩm văn phòng" },
    "thiet-ke": { id: "thiet-ke", label: "Thiết kế" },
    "mua-in": { id: "mua-in", label: "Mua in ấn" },
  };
  
  const mapped = categoryMap[categorySlug] || { id: categorySlug || "other", label: categoryName || "Khác" };
  
  const imageUrl = post.coverMedia?.url || post.coverMedia?.secureUrl || "/no-image.svg";
  
  return {
    id: index + 1,
    slug: post.slug,
    title: post.title,
    date: post.publishedAt || post.createdAt,
    readTime: "5 phút đọc",
    category: mapped.id,
    categoryLabel: mapped.label,
    featured: index < 2,
    image: imageUrl,
    excerpt: post.excerpt || "",
    content: post.content || "",
  };
}

interface ExperiencePageProps {
  allowedCategories: string[];
  pageTitle: string;
  pageSubtitle: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function ExperiencePage({
  allowedCategories,
  pageTitle,
  pageSubtitle,
  breadcrumbs,
}: ExperiencePageProps) {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat");

  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const postsPerPage = 10;
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from API
  useEffect(() => {
    let cancelled = false;
    
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchBlogPosts({ limit: 100 });
        if (cancelled) return;
        
        // Map all posts from API to frontend format
        // If backend categories don't match allowedCategories, show all posts
        const allMapped = response.data.map((post, idx) => mapApiPostToBlogPost(post, idx));
        
        const matchedPosts = allMapped.filter((post) => 
          allowedCategories.includes(post.category)
        );
        
        // If matched posts exist, use them; otherwise show all posts as fallback
        setBlogPosts(matchedPosts.length > 0 ? matchedPosts : allMapped);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to fetch blog posts:", err);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    
    loadPosts();
    return () => { cancelled = true; };
  }, [allowedCategories]);

  useEffect(() => {
    if (catParam && allowedCategories.includes(catParam)) {
      setActiveCategory(catParam);
      setCurrentPage(1);
    } else {
      setActiveCategory("all");
      setCurrentPage(1);
    }
  }, [catParam, allowedCategories]);

  // blogPosts already contains the right set (all posts as fallback if no category match)
  const pagePosts = blogPosts;

  // Filter posts by tab
  const filteredPosts =
    activeCategory === "all"
      ? pagePosts
      : pagePosts.filter((post) => post.category === activeCategory);

  const listPosts = activeCategory === "all" ? filteredPosts.slice(3) : filteredPosts;
  const totalPages = Math.ceil(listPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const displayedPosts = listPosts.slice(startIdx, startIdx + postsPerPage);

  const featuredPost1 = pagePosts[0];
  const featuredPost2 = pagePosts[1];
  const featuredPost3 = pagePosts[2];
  const allPostsForCarousel = pagePosts.slice(3);
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
      pages.push(1, 2, 3);
      pages.push("...");
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    return pages;
  };

  const categoriesList = [
    { id: "all", label: pageTitle.toLowerCase().includes("tin") ? "Tất cả tin tức" : "Tất cả" },
    ...allCategories.filter((cat) => allowedCategories.includes(cat.id)),
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E6792A]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error && blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-gray-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-full bg-[#E6792A] text-white font-medium text-sm"
          >
            Thử lại
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Banner */}
      <section
        className="relative py-12 md:py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/kinhnghiem/background.png')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4 text-sm">
              {breadcrumbs.map((bc, idx) => (
                <div key={bc.href} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight className="w-4 h-4 text-white/60" />}
                  {idx < breadcrumbs.length - 1 ? (
                    <Link href={bc.href} className="text-white hover:text-amber-200">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{bc.label}</span>
                  )}
                </div>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-3">{pageTitle}</h1>
            <p className="text-base text-white/80 font-light">{pageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      {categoriesList.length > 1 && (
        <section className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {categoriesList.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setCurrentPage(1);
                    }}
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
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="flex-1 min-w-0 space-y-6">
              {pagePosts.length > 0 && activeCategory === "all" && currentPage === 1 && (
                <div className="mb-2">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Bài viết mới nhất</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredPost1 && (
                      <Link
                        href={`/kinh-nghiem/${featuredPost1.slug}`}
                        className={`${featuredPost2 ? "md:col-span-2" : "md:col-span-3"} self-stretch`}
                      >
                        <BrandCard className="overflow-hidden group cursor-pointer h-full flex flex-col">
                          <div className="overflow-hidden bg-gray-100 flex-1">
                            <img
                              src={featuredPost1.image}
                              alt={featuredPost1.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
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
                      <div className="md:col-span-1 flex flex-col gap-4">
                        <Link href={`/kinh-nghiem/${featuredPost2.slug}`} className="block">
                          <BrandCard className="overflow-hidden group cursor-pointer h-full flex flex-col">
                            <div className="overflow-hidden bg-gray-100 aspect-square">
                              <img
                                src={featuredPost2.image}
                                alt={featuredPost2.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#E6792A] transition-colors line-clamp-2 leading-snug">
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
                        {featuredPost3 && (
                          <Link href={`/kinh-nghiem/${featuredPost3.slug}`} className="block">
                            <BrandCard className="overflow-hidden group cursor-pointer h-full flex flex-col">
                              <div className="overflow-hidden bg-gray-100 aspect-square">
                                <img
                                  src={featuredPost3.image}
                                  alt={featuredPost3.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#E6792A] transition-colors line-clamp-2 leading-snug">
                                  {featuredPost3.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                  <span>{featuredPost3.date}</span>
                                  <span>&bull;</span>
                                  <span>{featuredPost3.readTime}</span>
                                </div>
                              </div>
                            </BrandCard>
                          </Link>
                        )}
                      </div>
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
                                      <div className="overflow-hidden bg-gray-100 aspect-square">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
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

              {/* Blog List */}
              {displayedPosts.map((post, index) => {
                const { day, month } = parseDate(post.date);
                const globalIndex = startIdx + index;
                const adAfter = (globalIndex + 1) % 4 === 0 && globalIndex < filteredPosts.length - 1;
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
                              onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
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
                                  background: `${categoryColors[post.category] || "#E6792A"}15`,
                                  color: categoryColors[post.category] || "#E6792A",
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
                  <p className="text-lg">Không có bài viết nào trong danh mục này.</p>
                </div>
              )}

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

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img src="/banner_doc.webp" alt="In tem nhãn tại Cần Thơ" className="w-full h-auto object-cover" />
              </div>

              {/* Premium Price Alert Box */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white to-amber-50/20 border border-amber-200/60 shadow-xl shadow-amber-900/5 rounded-[32px] p-6 md:p-8">
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
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (emailInput.trim() && emailInput.includes("@")) {
                            setEmailSubscribed(true);
                            setEmailInput("");
                          }
                        }}
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

              {/* Industry Alerts Timeline */}
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
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-amber-700 ring-4 ring-amber-50" />
                      <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded">
                        {item.date}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-4 pb-3 border-b border-gray-100"
                  style={{ color: "#E6792A" }}
                >
                  Giới thiệu
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  In tem Cần Thơ là đơn vị chuyên cung cấp dịch vụ in tem nhãn, in ấn bao bì và ấn phẩm văn phòng
                  hàng đầu tại Cần Thơ.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến sản phẩm chất lượng với giá cả cạnh tranh
                  nhất.
                </p>
                <WarmButton href="/lien-he" fullWidth size="md">
                  Liên hệ tư vấn
                </WarmButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FeaturedProducts
        title="Sản Phẩm Nổi Bật"
        subtitle="Khám phá thêm các sản phẩm in ấn chất lượng cao phù hợp với nhu cầu của bạn"
        viewAllHref="/"
        viewAllText="Xem tất cả sản phẩm"
        columns={4}
        showBackground={false}
      />

      <Footer />
    </div>
  );
}
