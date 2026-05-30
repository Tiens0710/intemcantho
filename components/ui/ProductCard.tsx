"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, Eye, Star, CheckCircle2, Heart, X } from "lucide-react";
import { useAppStore, type CartItem } from "@/lib/store";

export interface ProductCardProps {
  id: string | number;
  title: string;
  price?: string | number;
  originalPrice?: string | number;
  image?: string;
  category?: string;
  href?: string;
  rating?: number;
  badge?: string;
  /** Numeric price in VND for cart functionality */
  priceNumber?: number;
  onQuickView?: (id: string | number) => void;
}

function formatPrice(value: number) {
  return value.toLocaleString("vi-VN") + "đ";
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  href,
  rating = 4,
  badge,
  priceNumber,
  onQuickView,
}: ProductCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWished, setIsWished] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || "https://placehold.co/400x300/f5f0eb/9a5b24?text=SP");

  useEffect(() => {
    setImgSrc(image || "https://placehold.co/400x300/f5f0eb/9a5b24?text=SP");
  }, [image]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showLightbox]);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLightbox(false);
    };
    if (showLightbox) {
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }
  }, [showLightbox]);

  const numericPrice =
    priceNumber ??
    (typeof price === "number"
      ? price
      : typeof price === "string"
        ? parseInt(price.replace(/[^0-9]/g, ""), 10) || 0
        : 0);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    useAppStore.getState().addToCart({
      id: String(id),
      title,
      price: numericPrice,
      quantity: 1,
      image,
      meta: category ? { category } : undefined,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);

    // Flying cart animation
    const btn = (e.currentTarget as HTMLElement).closest("button") || (e.target as HTMLElement);
    const btnRect = btn.getBoundingClientRect();
    const cartIcon = document.getElementById("cart-icon");
    if (!cartIcon) return;
    const cartRect = cartIcon.getBoundingClientRect();

    // Create flying image
    const flyImg = document.createElement("div");
    flyImg.style.cssText = `
      position: fixed;
      z-index: 9999;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(230,121,42,0.4);
      pointer-events: none;
      transition: none;
    `;
    const img = document.createElement("img");
    img.src = image || "https://placehold.co/50x50/fde68a/d97706?text=SP";
    img.style.cssText = "width:100%;height:100%;object-fit:cover;";
    img.onerror = () => {
      img.src = "https://placehold.co/50x50/fde68a/d97706?text=SP";
    };
    flyImg.appendChild(img);
    document.body.appendChild(flyImg);

    const startX = btnRect.left + btnRect.width / 2 - 25;
    const startY = btnRect.top + btnRect.height / 2 - 25;
    const endX = cartRect.left + cartRect.width / 2 - 25;
    const endY = cartRect.top + cartRect.height / 2 - 25;

    flyImg.style.left = startX + "px";
    flyImg.style.top = startY + "px";
    flyImg.style.opacity = "1";
    flyImg.style.transform = "scale(1)";

    requestAnimationFrame(() => {
      flyImg.style.transition = "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      flyImg.style.left = endX + "px";
      flyImg.style.top = endY + "px";
      flyImg.style.opacity = "0.4";
      flyImg.style.transform = "scale(0.3)";
    });

    setTimeout(() => {
      flyImg.remove();
      // Pulse the cart icon
      cartIcon.style.transition = "transform 0.2s";
      cartIcon.style.transform = "scale(1.3)";
      setTimeout(() => {
        cartIcon.style.transform = "scale(1)";
      }, 200);
    }, 700);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWished((prev) => !prev);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Open built-in image lightbox
    if (image) {
      setShowLightbox(true);
    } else {
      // If no image, fall back to parent callback (e.g. open ProductModal)
      onQuickView?.(id);
    }
  };

  return (
    <>
    <Link
      href={href || "#"}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E6792A]/42 bg-white shadow-[0_4px_20px_rgba(230,121,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E6792A]/60 hover:shadow-[0_12px_40px_rgba(230,121,42,0.18)]"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {image ? (
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("https://placehold.co/400x300/f5f0eb/9a5b24?text=SP")}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <ShoppingCart className="h-10 w-10 text-gray-300" />
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Badge */}
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#E6792A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#E6792A]/30">
            {badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          type="button"
          onClick={handleWishlist}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-white hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isWished ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>

        {/* Quick action overlay */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 pb-4 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickView}
            title="Xem nhanh"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#E6792A] shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Eye className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleAddToCart}
            title={addedToCart ? "Đã thêm!" : "Thêm vào giỏ"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6792A] text-white shadow-lg shadow-[#E6792A]/30 transition-transform hover:scale-110"
          >
            <AnimatePresence mode="wait">
              {addedToCart ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <ShoppingCart className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category tag */}
        {category && (
          <span className="mb-1.5 inline-block w-fit rounded-full bg-[#E6792A]/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#E6792A]">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-snug text-gray-800 transition-colors group-hover:text-[#9a5b24]">
          {title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating
                  ? "fill-[#f59e0b] text-[#f59e0b]"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="ml-1 text-[10px] font-semibold text-gray-400">
            ({rating}.0)
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-[11px] text-gray-400 line-through">
                {typeof originalPrice === "number"
                  ? formatPrice(originalPrice)
                  : originalPrice}
              </span>
            )}
            <p className="text-base font-black text-[#E6792A]">
              {numericPrice > 0
                ? formatPrice(numericPrice)
                : price || "Liên hệ"}
            </p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6792A]/20 bg-[#E6792A]/5 text-[#E6792A] transition-all duration-300 group-hover:bg-[#E6792A] group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 w-0 bg-gradient-to-r from-[#E6792A] to-[#f59e0b] transition-all duration-500 group-hover:w-full" />
    </Link>

      {/* Image Lightbox — rendered outside Link to avoid overflow-hidden & transform clipping */}
      <AnimatePresence>
        {showLightbox && image && (
          <>
            {/* Backdrop */}
            <motion.div
              key="lb-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setShowLightbox(false);
              }}
            >
              {/* Close button */}
              <motion.button
                key="lb-close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.15 }}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLightbox(false);
                }}
                className="absolute right-4 top-4 z-[10000] flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Image */}
              <motion.div
                key="lb-image"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={image}
                  alt={title}
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://placehold.co/800x600/f5f0eb/9a5b24?text=SP";
                  }}
                />
                {/* Title bar at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
                  <p className="text-center text-sm font-bold text-white drop-shadow-lg">
                    {title}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}