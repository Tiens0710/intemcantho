"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
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
    <section id="featured-products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sản phẩm được đề xuất
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {persona
              ? "Dựa trên loại hình kinh doanh của bạn, chúng tôi gợi ý những sản phẩm phù hợp nhất"
              : "Khám phá các sản phẩm in ấn chất lượng cao của chúng tôi"}
          </p>
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                transition={itemTransition}
                className={`group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                  index % 3 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-secondary">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-neumorph-primary flex items-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Xem chi tiết
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    {product.featured && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                      >
                        ⭐ Nổi bật
                      </motion.span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
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
