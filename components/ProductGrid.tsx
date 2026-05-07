"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { getRecommendations, Product } from "@/lib/wordpress";
import { useAppStore } from "@/lib/store";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { persona } = useAppStore();

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const recs = await getRecommendations(persona);
        setProducts(recs);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [persona]);

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
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex max-w-[28rem] flex-col items-center justify-center px-6 py-2 text-center"
        >
          <div className="mb-2 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.42em] text-amber-700/80">
            <span className="h-px w-10 bg-amber-700/35" />
            BEST SELLER
            <span className="h-px w-10 bg-amber-700/35" />
          </div>
          <h2 className="font-sans text-4xl font-semibold uppercase tracking-wide md:text-5xl">
            BEST SELLER
          </h2>
          <span className="mt-4 h-[3px] w-14 bg-amber-700" />
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary"
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
                  className="group flex h-full flex-col border border-[#e8e8e8] bg-white transition-transform duration-300 hover:shadow-md"
                >
                  <div className="relative bg-[#f0f0f0]">
                    <button
                      type="button"
                      aria-label="Yêu thích sản phẩm"
                      className="absolute right-4 top-4 z-10 flex items-center justify-center rounded-full p-1 text-gray-500 transition-colors hover:text-rose-500"
                    >
                      <Heart className="h-5 w-5" strokeWidth={1.5} />
                    </button>

                    <div className="flex h-[250px] items-center justify-center px-4 py-5 md:h-[280px]">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col px-4 py-4 text-left md:px-5">
                    <h3 className="mb-3 font-sans text-base md:text-base font-bold leading-snug !text-black">
                      {product.title}
                    </h3>
                    <button
                      className="group mt-auto inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-amber-700"
                    >
                      <span className="text-white transition-opacity duration-200 group-hover:opacity-0">
                        Đọc Tiếp
                      </span>
                      <ShoppingCart className="absolute h-5 w-5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 flex justify-center md:mt-16">
              <button className="rounded-full border border-[#6b6b6b] px-8 py-3 text-sm font-medium text-[#333333] transition-colors hover:bg-amber-600 hover:!text-white hover:border-amber-600">
                Khám phá thêm
              </button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && products.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              Không có sản phẩm nào được đề xuất. Vui lòng chọn loại hình kinh doanh của bạn.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
