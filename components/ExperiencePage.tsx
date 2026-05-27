"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts, categoryColors, type BlogPost } from "@/lib/data/blog-posts";
import BrandCard from "@/components/ui/BrandCard";
import WarmButton from "@/components/WarmButton";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Share2, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import FeaturedProducts from "@/components/FeaturedProducts";

const allCategories = [
  { id: "tem-nhan", label: "Tem nhãn" },
  { id: "bao-bi", label: "Bao bì" },
  { id: "an-pham", label: "Ấn phẩm văn phòng" },
  { id: "thiet-ke", label: "Thiết kế" },
  { id: "mua-in", label: "Mua in ấn" },
];

function parseDate(dateStr: string): { day: string; month: string } {
  const match = dateStr.match(/(\d+)\s*Tháng\s*(\d+)/i);
  if (match) {
    return { day: match[1], month: `TH${match[2]}` };
  }
  return { day: "01", month: "TH01" };
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
  const postsPerPage = 10;

  useEffect(() => {
    if (catParam && allowedCategories.includes(catParam)) {
      setActiveCategory(catParam);
      setCurrentPage(1);
    } else {
      setActiveCategory("all");
      setCurrentPage(1);
    }
  }, [catParam, allowedCategories]);

  // Filter posts by allowed categories
  const pagePosts = blogPosts.filter((post) => allowedCategories.includes(post.category));

  // Filter posts by tab
  const filteredPosts =
    activeCategory === "all"
      ? pagePosts
      : pagePosts.filter((post) => post.category === activeCategory);

  const listPosts = activeCategory === "all" ? filteredPosts.slice(2) : filteredPosts;
  const totalPages = Math.ceil(listPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const displayedPosts = listPosts.slice(startIdx, startIdx + postsPerPage);

  const featuredPost1 = pagePosts[0];
  const featuredPost2 = pagePosts[1];
  const allPostsForCarousel = pagePosts.slice(2);
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

  const categoriesList = [
    { id: "all", label: pageTitle.toLowerCase().includes("tin") ? "Tất cả tin tức" : "Tất cả" },
    ...allCategories.filter((cat) => allowedCategories.includes(cat.id)),
  ];

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
            <div className="flex-1 min-w-0 space-y-6 lg:border-r lg:border-gray-200 lg:pr-8">
              {pagePosts.length > 0 && activeCategory === "all" && currentPage === 1 && (
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
