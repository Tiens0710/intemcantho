"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useAppStore } from "@/lib/store";
import { apiGet } from "@/lib/apiClient";
import Link from "next/link";
import Image from "next/image";
import BrandCard from "@/components/ui/BrandCard";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";

type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
  personas: Array<"cafe-owner" | "office-worker" | "fashion-lover">;
  featured: boolean;
};

type HomepageData = {
  recommendedProducts: Product[];
  featuredProducts: Product[];
  testimonials: unknown[];
  processSteps: unknown[];
};

function ProductCardImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || "/no-image.svg");

  useEffect(() => {
    setImgSrc(src || "/no-image.svg");
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={400}
      height={300}
      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      onError={() => setImgSrc("/no-image.svg")}
    />
  );
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { persona } = useAppStore();

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const query = persona ? `?persona=${encodeURIComponent(persona)}` : "";
      const data = await apiGet<HomepageData>(`/api/v1/homepage${query}`, { skipAuth: true });
      setProducts(data?.recommendedProducts ?? []);
    } catch (err) {
      console.error("Failed to load products:", err);
      setError("Không thể tải sản phẩm. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  }, [persona]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = {
    type: "spring" as const,
    damping: 25,
    stiffness: 300,
  };

  return (
    <section id="featured-products" className="py-0 md:py-0">
      <div className="container mx-auto px-4">
        {/* Section Header — same style as "Dịch vụ nổi bật" */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to right, transparent, #C8A882)" }} />
            <h2
              className="home-section-title whitespace-normal md:whitespace-nowrap uppercase"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#9A5B24",
                fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                letterSpacing: "0",
              }}
            >
              SẢN PHẨM <span style={{ color: "#E6792A" }}>NỔI BẬT</span>
            </h2>
            <span className="hidden md:block h-px w-20 lg:w-32" style={{ background: "linear-gradient(to left, transparent, #C8A882)" }} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-5">
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "rgba(139,94,60,0.15)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "#E6792A" }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="h-0.5 rounded-full"
              style={{ background: "rgba(139,94,60,0.15)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto">
            Các sản phẩm được khách hàng yêu thích và đặt in nhiều nhất
          </p>
        </motion.div>
    
        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-4 border-amber-200 border-t-amber-700"
            />
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && products.length > 0 && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              {products.slice(0, 8).map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  transition={itemTransition}
                  className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <BrandCard borderOpacity={0.28} shadowOpacity={0.08} className="flex flex-col h-full overflow-hidden">
                    <Link href={`/san-pham/${product.id}`} className="flex flex-col h-full">
                      {/* Image Area */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: "linear-gradient(180deg, #FBF8F4 0%, #F5F0E8 100%)" }}>
                        <ProductCardImage src={product.image} alt={product.title} />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex flex-col p-5">
                        <p
                          className="mb-1.5"
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "#A08060",
                          }}
                        >
                          {product.category === "office-products" ? "Văn phòng" : product.category}
                        </p>
                        <h3
                          className="mb-2 line-clamp-2"
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#1C1007",
                            lineHeight: 1.4,
                          }}
                        >
                          {product.title}
                        </h3>
                        {/* Amber accent line */}
                        <div
                          className="mb-4 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                          style={{ background: "rgba(139,94,60,0.25)" }}
                        />

                        <div className="mt-auto flex items-center justify-between">
                          <span style={{ fontSize: "14px", fontWeight: 800, color: "#5C3D1E" }}>
                            {product.price.includes("$") ? product.price : `${parseInt(product.price).toLocaleString("vi-VN")}đ`}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </BrandCard>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <Link href="/van-phong">
                <BrandOutlineButton
                  active
                  className="!px-8 !py-3 !text-sm !font-semibold !uppercase !tracking-wider"
                >
                  Xem tất cả sản phẩm
                </BrandOutlineButton>
              </Link>
            </div>
          </>
        )}

        {/* Error State */}
        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg text-red-500 mb-4">{error}</p>
            <button
              onClick={() => loadProducts()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-800 text-white rounded-full"
            >
              Thử lại
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && !error && products.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg text-gray-500">Không có sản phẩm nào được đề xuất.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
