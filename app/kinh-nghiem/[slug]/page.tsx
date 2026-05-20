"use client";

import BrandCard from "@/components/ui/BrandCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts, categoryColors, getPostBySlug } from "@/lib/data/blog-posts";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ChevronRight, MessageCircle, User } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const sidebarProducts = [
  { id: 1, name: "Decal Trong Chống Nước", price: "180.000đ", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp" },
  { id: 2, name: "Menu Formex chống nước", price: "60.000đ - 120.000đ", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp" },
  { id: 3, name: "In Ấn Bìa Thư Nhỏ", price: "50.000đ", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp" },
  { id: 4, name: "Decal Sticker", price: "40.000đ", image: "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp" },
];

function parseDate(dateStr: string): { day: string; month: string } {
  const match = dateStr.match(/(\d+)\s*Tháng\s*(\d+)/i);
  if (match) {
    return { day: match[1], month: `TH${match[2]}` };
  }
  return { day: "01", month: "TH01" };
}

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Bài viết không tồn tại</h1>
          <p className="text-gray-500 mb-6">Bài viết bạn tìm kiếm không có sẵn.</p>
          <Link href="/kinh-nghiem">
            <span className="inline-block px-6 py-2.5 rounded-full border border-[#E6792A] text-[#E6792A] font-medium text-sm hover:bg-[#E6792A] hover:text-white transition-colors cursor-pointer">
              Quay lại
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { day, month } = parseDate(post.date);

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 4);

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{line.replace("## ", "")}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.replace("### ", "")}</h3>;
      if (line.match(/^\d+\.\s/)) return <li key={i} className="text-gray-600 ml-5 mb-2 list-decimal">{line.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>;
      if (line.startsWith("- ")) return <li key={i} className="text-gray-600 ml-5 mb-2 list-disc">{line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>;
      if (line.trim() === "") return <br key={i} />;
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>');
      return <p key={i} className="text-gray-600 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section
        className="relative py-14 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/kinhnghiem/background.png')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link href="/" className="text-white hover:text-amber-200">Trang chủ</Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <Link href="/kinh-nghiem" className="text-white hover:text-amber-200">Kinh nghiệm</Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span className="text-white/80 line-clamp-1">{post.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-3">Kinh nghiệm</h1>
            <p className="text-base text-white/80 font-light">Chia sẻ kinh nghiệm và kiến thức về in ấn tem nhãn</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{
                    background: `${categoryColors[post.category]}15`,
                    color: categoryColors[post.category],
                  }}
                >
                  {post.categoryLabel}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug">{post.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5"><User className="w-4 h-4" /><span>intemct</span></div>
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /><span>{post.date}</span></div>
                  <div className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /><span>0</span></div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-8 bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
                <div
                  className="absolute top-4 left-4 text-white rounded-lg px-3 py-2 text-center leading-tight shadow-lg"
                  style={{ background: "#E6792A" }}
                >
                  <div className="text-2xl font-bold leading-none">{day}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">{month}</div>
                </div>
              </div>

              <BrandCard className="p-6 md:p-8">
                {renderContent(post.content)}
              </BrandCard>

              <BrandCard className="mt-8 p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(230, 121, 42, 0.1)" }}>
                  <User className="w-7 h-7" style={{ color: "#E6792A" }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Đăng bởi</p>
                  <p className="text-sm font-semibold text-gray-900">intemct</p>
                </div>
              </BrandCard>

              <div className="mt-8">
                <Link href="/kinh-nghiem">
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E6792A] text-[#E6792A] font-medium text-sm hover:bg-[#E6792A] hover:text-white transition-colors cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Quay lại trang kinh nghiệm
                  </span>
                </Link>
              </div>

              {/* Hỏi & Đáp */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span style={{ color: "#E6792A" }}>❓</span> HỎI & ĐÁP
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "Làm thế nào để đặt hàng in tem nhãn?", a: "Bạn có thể liên hệ qua hotline, email hoặc nhắn tin trực tiếp trên fanpage. Đội ngũ tư vấn sẽ hỗ trợ bạn từ khâu thiết kế đến hoàn thiện sản phẩm." },
                    { q: "Thời gian hoàn thành đơn hàng là bao lâu?", a: "Tùy vào số lượng và loại sản phẩm, thời gian hoàn thành từ 2-5 ngày làm việc. Đối với đơn hàng gấp, chúng tôi hỗ trợ in lấy liền trong ngày." },
                    { q: "Có hỗ trợ thiết kế miễn phí không?", a: "Có, chúng tôi hỗ trợ thiết kế miễn phí cho tất cả đơn hàng. Bạn chỉ cần cung cấp thông tin và ý tưởng, đội ngũ thiết kế sẽ tạo mẫu cho bạn." },
                  ].map((item, i) => (
                    <BrandCard key={i} className="p-5">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center mt-0.5" style={{ background: "#E6792A" }}>
                          {i + 1}
                        </span>
                        {item.q}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed ml-7">{item.a}</p>
                    </BrandCard>
                  ))}
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
              <BrandCard className="p-5">
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-4 pb-3 border-b border-gray-100"
                  style={{ color: "#E6792A" }}
                >
                  Có thể bạn sẽ thích
                </h3>
                <div className="space-y-3">
                  {sidebarProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
                      <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h4>
                        <p className="text-sm font-medium" style={{ color: "#E6792A" }}>{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BrandCard>

              {relatedPosts.length > 0 && (
                <BrandCard className="p-5">
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-4 pb-3 border-b border-gray-100"
                    style={{ color: "#E6792A" }}
                  >
                    Bài viết liên quan
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.id} href={`/kinh-nghiem/${rp.slug}`} className="flex items-start gap-3 group cursor-pointer">
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                          <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#E6792A] transition-colors line-clamp-2 leading-snug mb-1">
                            {rp.title}
                          </h4>
                          <p className="text-xs text-gray-400">{rp.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </BrandCard>
              )}
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}