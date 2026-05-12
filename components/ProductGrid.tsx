"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { useAppStore } from "@/lib/store";
import Link from "next/link";

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

type HomepageResponse = {
  status: "success" | "error";
  data?: {
    recommendedProducts?: Product[];
  };
  message?: string;
};

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
      const response = await fetch(`/api/v1/homepage${query}`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const payload = (await response.json()) as HomepageResponse;
      if (payload.status !== "success") {
        throw new Error(payload.message || "API returned an error");
      }
      setProducts(payload.data?.recommendedProducts ?? []);
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
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-20 md:w-32 bg-amber-800/70" />
            <h2 className="text-3xl md:text-4xl font-bold mb-0 whitespace-nowrap !text-amber-800">
              SẢN PHẨM NỔI BẬT
            </h2>
            <span className="h-px w-20 md:w-32 bg-amber-800/70" />
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
                  className="group flex h-full flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(222, 210, 194, 0.6)",
                    boxShadow: "0 2px 16px rgba(92, 61, 30, 0.06)",
                  }}
                >
                  {/* Image Area */}
                  <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FBF8F4 0%, #F5F0E8 100%)" }}>
                    <button
                      type="button"
                      aria-label="Yêu thích sản phẩm"
                      className="absolute right-3 top-3 z-10 flex items-center justify-center rounded-full w-9 h-9 text-gray-400 transition-all duration-300 hover:text-rose-500 hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Heart className="h-4 w-4" strokeWidth={1.5} />
                    </button>

                    <div className="flex h-[220px] items-center justify-center px-6 py-5">
                      <img
                        src={product.image || '/no-image.svg'}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          try {
                            (e.currentTarget as HTMLImageElement).src = '/no-image.svg';
                          } catch {
                            /* noop */
                          }
                        }}
                      />
                    </div>
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
                    <p
                      className="mb-4 line-clamp-2"
                      style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#7A6A58",
                        lineHeight: 1.6,
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Amber accent line */}
                    <div
                      className="mb-4 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-12"
                      style={{ background: "rgba(139,94,60,0.25)" }}
                    />

                    <div className="mt-auto flex items-center justify-between">
                      <span style={{ fontSize: "14px", fontWeight: 800, color: "#5C3D1E" }}>
                        {product.price.includes("$") ? product.price : `${parseInt(product.price).toLocaleString("vi-VN")}đ`}
                      </span>
                      <Link
                        href={`/san-pham/${product.id}`}
                        className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          border: "1.5px solid #8B5E3C",
                          color: "#8B5E3C",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#8B5E3C"; e.currentTarget.style.color = "#FFFFFF"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8B5E3C"; }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                      {/* removed cart icon as requested */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/van-phong"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-800 text-amber-800 font-semibold rounded-full transition-all duration-300 hover:bg-amber-800 hover:text-white"
              >
                Xem tất cả sản phẩm
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
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