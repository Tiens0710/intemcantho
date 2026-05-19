"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Search, X } from "lucide-react";
import BrandOutlineButton from "@/components/ui/BrandOutlineButton";
import { apiGet } from "@/lib/apiClient";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
  featured: boolean;
};

type ProductsData = {
  products: Product[];
  total: number;
};

type ProductSearchProps = {
  open: boolean;
  onClose: () => void;
};

const SUGGESTED_KEYWORDS = [
  "Danh thiếp",
  "Bao thư",
  "Catalogue",
  "Standee",
  "Tem nhãn",
  "Backdrop",
];

function formatPrice(price: string) {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);

  if (!Number.isNaN(numericPrice) && numericPrice > 0) {
    return numericPrice.toLocaleString("vi-VN") + "đ";
  }

  return price || "Liên hệ";
}

export default function ProductSearch({ open, onClose }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFeaturedLoading, setIsFeaturedLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    if (!open || featuredProducts.length > 0) return;

    const controller = new AbortController();

    async function loadFeaturedProducts() {
      setIsFeaturedLoading(true);

      try {
        const data = await apiGet<ProductsData>("/api/v1/products", {
          signal: controller.signal,
          skipAuth: true,
        });
        const nextProducts = data?.products ?? [];
        const featured = nextProducts.filter((product) => product.featured).slice(0, 4);

        setFeaturedProducts(featured.length > 0 ? featured : nextProducts.slice(0, 4));
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setFeaturedProducts([]);
      } finally {
        setIsFeaturedLoading(false);
      }
    }

    loadFeaturedProducts();

    return () => controller.abort();
  }, [featuredProducts.length, open]);

  useEffect(() => {
    if (!open) return;

    const cleanQuery = query.trim();
    if (cleanQuery.length < 2) {
      return;
    }

    const controller = new AbortController();
      const timer = window.setTimeout(async () => {
        setIsLoading(true);
        setError(null);

        try {
          const data = await apiGet<ProductsData>(
            `/api/v1/products?q=${encodeURIComponent(cleanQuery)}`,
            { signal: controller.signal, skipAuth: true }
          );

          setProducts(data?.products ?? []);
        } catch (err) {
          if (err instanceof DOMException && err.name === "AbortError") return;
          setError("Không thể tìm kiếm sản phẩm. Vui lòng thử lại.");
          setProducts([]);
        } finally {
          setIsLoading(false);
        }
      }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [open, query]);

  const closeAndReset = () => {
    onClose();
    setQuery("");
    setProducts([]);
    setError(null);
  };

  const applySuggestion = (keyword: string) => {
    setQuery(keyword);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    setQuery(nextQuery);

    if (nextQuery.trim().length < 2) {
      setProducts([]);
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-20 backdrop-blur-sm md:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeAndReset}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Tìm kiếm sản phẩm"
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-[#E6792A]" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={handleQueryChange}
                placeholder="Nhập tên sản phẩm cần tìm..."
                className="h-11 flex-1 border-0 bg-transparent px-0 text-base font-semibold text-gray-900 outline-none placeholder:text-gray-400 focus:border-0 focus:shadow-none focus:ring-0"
              />
              <button
                type="button"
                onClick={closeAndReset}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                aria-label="Đóng tìm kiếm"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {query.trim().length < 2 ? (
                <div className="space-y-6 px-2 py-4">
                  <div className="px-2">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E3C]">
                      Từ khóa gợi ý
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SUGGESTED_KEYWORDS.map((keyword) => (
                        <BrandOutlineButton
                          key={keyword}
                          type="button"
                          onClick={() => applySuggestion(keyword)}
                          className="!px-4 !py-2 !text-sm !normal-case !tracking-normal"
                        >
                          {keyword}
                        </BrandOutlineButton>
                      ))}
                    </div>
                  </div>

                  <div className="px-2">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E3C]">
                        Sản phẩm nổi bật
                      </p>
                      {isFeaturedLoading ? (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          Đang tải
                        </span>
                      ) : null}
                    </div>

                    {featuredProducts.length > 0 ? (
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {featuredProducts.map((product) => (
                          <Link
                            key={product.id}
                            href={`/san-pham/${product.id}`}
                            onClick={closeAndReset}
                            className="group grid grid-cols-[56px_1fr] items-center gap-3 rounded-xl border border-gray-100 bg-white p-2.5 transition-all hover:border-amber-200 hover:bg-amber-50"
                          >
                            <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-gray-100">
                              <Image
                                src={product.image || "/no-image.svg"}
                                alt={product.title}
                                fill
                                sizes="56px"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="line-clamp-1 text-sm font-bold text-gray-900 group-hover:text-[#E6792A]">
                                {product.title}
                              </p>
                              <p className="mt-0.5 text-xs font-extrabold text-[#8B5E3C]">
                                {formatPrice(product.price)}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-xl bg-gray-50 px-4 py-8 text-center">
                        <p className="text-sm font-semibold text-gray-700">Tìm theo tên sản phẩm</p>
                        <p className="mt-1 text-sm text-gray-500">Nhập ít nhất 2 ký tự để bắt đầu.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : isLoading ? (
                <div className="flex items-center justify-center gap-2 px-4 py-10 text-sm text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Đang tìm kiếm...
                </div>
              ) : error ? (
                <div className="px-4 py-10 text-center text-sm text-red-500">{error}</div>
              ) : products.length > 0 ? (
                <div className="space-y-2">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/san-pham/${product.id}`}
                      onClick={closeAndReset}
                      className="group grid grid-cols-[64px_1fr_auto] items-center gap-3 rounded-xl p-3 transition-colors hover:bg-amber-50"
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={product.image || "/no-image.svg"}
                          alt={product.title}
                          fill
                          sizes="64px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="line-clamp-1 text-sm font-bold text-gray-900 group-hover:text-[#E6792A]">
                          {product.title}
                        </p>
                        <p className="line-clamp-1 text-xs text-gray-500">{product.description}</p>
                      </div>
                      <span className="hidden whitespace-nowrap text-sm font-extrabold text-[#8B5E3C] sm:block">
                        {formatPrice(product.price)}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-10 text-center">
                  <p className="text-sm font-semibold text-gray-700">Không tìm thấy sản phẩm</p>
                  <p className="mt-1 text-sm text-gray-500">Thử nhập tên ngắn hơn hoặc từ khóa khác.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
