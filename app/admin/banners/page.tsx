"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Image as ImageIcon, 
  Type, 
  DollarSign, 
  CheckSquare, 
  Save, 
  Eye, 
  Code,
  ArrowRight,
  Sparkles,
  FileCheck,
  RotateCcw
} from "lucide-react";
import FileUpload from "@/components/FileUpload";
import type { UploadedFile } from "@/lib/fileService";
import { getBannerConfig, saveBannerConfig, resetBannerConfig, DEFAULT_BANNERS, type BannerConfig } from "@/lib/bannerService";

// List of available customizable marketing categories in the project
const CATEGORIES = [
  { slug: "danh-thiep", label: "Danh thiếp (Namecard)", path: "/dich-vu/danh-thiep" },
  { slug: "menu", label: "Menu nhà hàng", path: "/tiep-thi/menu" },
  { slug: "voucher", label: "Voucher / Thẻ tích điểm", path: "/tiep-thi/voucher" },
  { slug: "hashtag-cam-tay", label: "Hashtag cầm tay", path: "/tiep-thi/hashtag-cam-tay" },
  { slug: "hiflex", label: "Bạt Hiflex", path: "/tiep-thi/hiflex" },
  { slug: "catalogue", label: "Catalogue sản phẩm", path: "/tiep-thi/catalogue" },
  { slug: "bao-thu", label: "Bao thư (Envelopes)", path: "/van-phong/bao-thu" },
];

export default function AdminBannersPage() {
  const [selectedCategory, setSelectedCategory] = useState("danh-thiep");
  const [backgroundSrc, setBackgroundSrc] = useState("");
  const [productSrc, setProductSrc] = useState("");
  
  const [title, setTitle] = useState("");
  const [accentTitle, setAccentTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");

  const [priceLabel, setPriceLabel] = useState("");
  const [priceAmount, setPriceAmount] = useState("");
  const [priceCurrency, setPriceCurrency] = useState("");

  const [highlights, setHighlights] = useState<string[]>([]);
  const [newHighlight, setNewHighlight] = useState("");

  const [isSaved, setIsSaved] = useState(false);
  const [showPreviewJson, setShowPreviewJson] = useState(false);

  // Load configuration from service when category changes
  useEffect(() => {
    const config = getBannerConfig(selectedCategory);
    setBackgroundSrc(config.backgroundSrc);
    setProductSrc(config.productImage?.src || "");
    setTitle(config.title);
    setAccentTitle(config.accentTitle);
    setTagline(config.tagline);
    setDescription(config.description);
    setPriceLabel(config.price.label);
    setPriceAmount(config.price.amount);
    setPriceCurrency(config.price.currency);
    setHighlights(config.highlights);
  }, [selectedCategory]);

  const handleAddHighlight = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHighlight.trim() && !highlights.includes(newHighlight.trim())) {
      setHighlights([...highlights, newHighlight.trim()]);
      setNewHighlight("");
    }
  };

  const handleRemoveHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find matching categories metadata for Alt text default
    const catMeta = CATEGORIES.find(c => c.slug === selectedCategory);
    
    const configData: BannerConfig = {
      categorySlug: selectedCategory,
      backgroundSrc,
      backgroundAlt: catMeta ? `In ${catMeta.label} Cần Thơ` : `In ${selectedCategory} Cần Thơ`,
      ariaLabel: `In ${selectedCategory} Cần Thơ - Chuyên nghiệp, sắc nét, bền đẹp`,
      title,
      accentTitle,
      tagline,
      description,
      price: {
        label: priceLabel,
        amount: priceAmount,
        currency: priceCurrency
      },
      productImage: productSrc ? {
        src: productSrc,
        alt: `${title} - Sản phẩm`,
        // Preserve default style properties if available in default config
        style: DEFAULT_BANNERS[selectedCategory]?.productImage?.style
      } : undefined,
      highlights,
    };

    const success = saveBannerConfig(selectedCategory, configData);
    if (success) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  const handleReset = () => {
    if (confirm(`Bạn có chắc chắn muốn khôi phục cấu hình mặc định cho "${CATEGORIES.find(c => c.slug === selectedCategory)?.label}"?`)) {
      resetBannerConfig(selectedCategory);
      // Reload states
      const config = getBannerConfig(selectedCategory);
      setBackgroundSrc(config.backgroundSrc);
      setProductSrc(config.productImage?.src || "");
      setTitle(config.title);
      setAccentTitle(config.accentTitle);
      setTagline(config.tagline);
      setDescription(config.description);
      setPriceLabel(config.price.label);
      setPriceAmount(config.price.amount);
      setPriceCurrency(config.price.currency);
      setHighlights(config.highlights);
    }
  };

  // Find page path for "Xem trang thực tế" link
  const currentCategoryPath = CATEGORIES.find(c => c.slug === selectedCategory)?.path || "/";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-2 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-amber-800" />
              Banner Editor
            </h1>
            <p className="text-gray-600 font-light">Cấu hình giao diện và hình ảnh cho các trang Hero Banner Tiếp Thị (Lưu LocalStorage)</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowPreviewJson(!showPreviewJson)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white rounded-sm text-sm font-light text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Code className="w-4 h-4" />
              {showPreviewJson ? "Hide JSON" : "View JSON Payload"}
            </button>
            
            <a
              href={currentCategoryPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-sm text-sm font-light text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Xem trang thực tế
            </a>
          </div>
        </motion.div>

        {/* Saved Success Notification */}
        <AnimatePresence>
          {isSaved && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3 text-green-800"
            >
              <FileCheck className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold text-sm">Đã lưu cấu hình thành công!</p>
                <p className="text-xs font-light text-green-700">Cấu hình banner của bạn đã được ghi vào LocalStorage và cập nhật trực tiếp trên trang giao diện tương ứng.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Editor Columns */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Form */}
            <form onSubmit={handleSave} className="space-y-6">
              
              {/* Category Selector Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h2 className="text-lg font-light text-gray-900 mb-4 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-amber-800" />
                  Bước 1: Chọn trang tiếp thị cần cấu hình
                </h2>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Trang sản phẩm</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light bg-white"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.label} (slug: {c.slug})
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              {/* Images Configuration Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h2 className="text-lg font-light text-gray-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-amber-800" />
                  Bước 2: Cấu hình hình ảnh
                </h2>
                
                <div className="space-y-6">
                  {/* Background Image Upload */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">1. Ảnh nền Banner (backgroundSrc)</label>
                    <p className="text-xs text-gray-500 mb-3">Kích thước khuyên dùng: 1920x1080px (Tỷ lệ 16:9), dung lượng nhẹ.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div className="md:col-span-2">
                        <FileUpload 
                          accept="image/jpeg,image/png,image/webp"
                          onUploadComplete={(file: UploadedFile) => {
                            setBackgroundSrc(`/manus-storage/${file.filename}`);
                          }} 
                        />
                      </div>
                      <div className="bg-gray-100 p-3 rounded-sm border border-gray-200 text-center">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Đường dẫn ảnh nền</p>
                        <input
                          type="text"
                          value={backgroundSrc}
                          onChange={(e) => setBackgroundSrc(e.target.value)}
                          className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 text-center"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Cutout Image Upload */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">2. Ảnh sản phẩm nổi bên phải (productSrc)</label>
                    <p className="text-xs text-gray-500 mb-3">Ảnh dạng PNG tách nền trong suốt để tạo hiệu ứng nổi 3D bay bay.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div className="md:col-span-2">
                        <FileUpload 
                          accept="image/png,image/webp"
                          onUploadComplete={(file: UploadedFile) => {
                            setProductSrc(`/manus-storage/${file.filename}`);
                          }} 
                        />
                      </div>
                      <div className="bg-gray-100 p-3 rounded-sm border border-gray-200 text-center">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Đường dẫn ảnh sản phẩm</p>
                        <input
                          type="text"
                          value={productSrc}
                          onChange={(e) => setProductSrc(e.target.value)}
                          className="w-full text-xs px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Typography Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h2 className="text-lg font-light text-gray-900 mb-4 flex items-center gap-2">
                  <Type className="w-5 h-5 text-amber-800" />
                  Bước 3: Biên tập nội dung chữ (Typography)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Tiêu đề chính (title)</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ví dụ: IN DANH THIẾP"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Chữ nhấn mạnh (accentTitle)</label>
                    <input
                      type="text"
                      value={accentTitle}
                      onChange={(e) => setAccentTitle(e.target.value)}
                      placeholder="Ví dụ: CẦN THƠ hoặc NAMECARD"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Dòng tagline ngắn (tagline)</label>
                    <input
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="Ví dụ: Chuyên nghiệp - Đẳng cấp - Ấn tượng"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Mô tả chi tiết (description)</label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Nhập đoạn giới thiệu chi tiết về dịch vụ..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Pricing Configuration Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h2 className="text-lg font-light text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-800" />
                  Bước 4: Cấu hình giá cả hiển thị nhanh
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Nhãn giá (price.label)</label>
                    <input
                      type="text"
                      value={priceLabel}
                      onChange={(e) => setPriceLabel(e.target.value)}
                      placeholder="Ví dụ: Giá từ chỉ"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Số tiền (price.amount)</label>
                    <input
                      type="text"
                      value={priceAmount}
                      onChange={(e) => setPriceAmount(e.target.value)}
                      placeholder="Ví dụ: 120.000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Đơn vị (price.currency)</label>
                    <input
                      type="text"
                      value={priceCurrency}
                      onChange={(e) => setPriceCurrency(e.target.value)}
                      placeholder="Ví dụ: VND hoặc VND / hộp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Highlights Configuration Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-sm border border-gray-200"
              >
                <h2 className="text-lg font-light text-gray-900 mb-4 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-amber-800" />
                  Bước 5: Đặc tính nổi bật (Highlights checklist)
                </h2>
                
                {/* Form to add highlight */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    placeholder="Thêm đặc tính mới (ví dụ: In nhanh lấy liền)..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light text-sm"
                  />
                  <button
                    onClick={handleAddHighlight}
                    className="px-4 py-2 bg-gray-900 text-white rounded-sm text-sm hover:bg-gray-800 transition-colors"
                  >
                    Thêm
                  </button>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  {highlights.length === 0 ? (
                    <p className="text-sm font-light text-gray-500 italic">Chưa có đặc tính nào được thêm.</p>
                  ) : (
                    highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-sm text-sm">
                        <span className="font-light text-gray-800">{hl}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveHighlight(idx)}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors"
                        >
                          Xóa
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>

              {/* Submit Buttons */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex justify-end gap-3"
              >
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-sm text-sm font-semibold hover:bg-gray-350 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Khôi phục mặc định
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-800 text-white rounded-sm text-sm font-semibold hover:bg-amber-900 shadow-md transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Lưu cấu hình (Lưu LocalStorage)
                </button>
              </motion.div>

            </form>
          </div>

          {/* Right Preview Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual preview card */}
            <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-amber-500 uppercase">Live Preview Mockup</span>
                <span className="text-xs text-gray-400 font-light">Tỷ lệ thu nhỏ</span>
              </div>
              
              {/* Outer relative container simulating standard CategoryMarketingHeroBanner view */}
              <div className="relative w-full aspect-[4/3] bg-amber-950 overflow-hidden">
                {/* Background image preview */}
                {backgroundSrc ? (
                  <img
                    src={backgroundSrc}
                    alt="Preview Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-950 to-stone-900" />
                )}
                
                {/* Text overlays simulation */}
                <div className="absolute inset-x-0 top-12 p-4 text-white z-10 select-none pointer-events-none">
                  <div className="text-[7px] font-bold text-amber-400/80 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    Trang chủ <ArrowRight className="w-1.5 h-1.5" /> {selectedCategory}
                  </div>
                  
                  <h3 className="text-lg font-black leading-tight tracking-tight uppercase max-w-[70%]">
                    {title || "TIÊU ĐỀ"} <br />
                    <span className="text-amber-500">{accentTitle}</span>
                  </h3>
                  
                  <p className="text-[8px] font-bold text-amber-200/90 leading-tight mt-1 max-w-[65%]">
                    {tagline || "Tagline khẩu hiệu ở đây..."}
                  </p>
                  
                  <p className="text-[6px] text-stone-300 leading-normal mt-1 max-w-[60%] line-clamp-3">
                    {description || "Mô tả ngắn về dịch vụ hiển thị ở đây..."}
                  </p>

                  {/* Highlights checklist simulation */}
                  <div className="mt-4 flex flex-col gap-0.5">
                    {highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-1 text-[6px] text-stone-200">
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span className="truncate max-w-[120px]">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Product Image preview simulation */}
                {productSrc && (
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-3 top-[45%] -translate-y-1/2 z-20 w-[42%] aspect-square flex items-center justify-center pointer-events-none"
                  >
                    <img
                      src={productSrc}
                      alt="Preview Product"
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                )}

                {/* Bottom CTA overlaps */}
                <div className="absolute bottom-2 inset-x-4 p-1 text-[7px] bg-white/10 backdrop-blur-md rounded-sm border border-white/20 text-white flex justify-between items-center z-20">
                  <span className="font-light">Bấm xem báo giá để chi tiết</span>
                  <div className="px-2 py-0.5 rounded-full bg-amber-500 text-[6px] font-bold text-gray-900">Xem Báo Giá</div>
                </div>
              </div>
            </div>

            {/* JSON Schema Preview Card */}
            <AnimatePresence>
              {showPreviewJson && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-amber-800" />
                    Dữ liệu đầu ra (JSON Payload)
                  </h3>
                  <p className="text-xs text-gray-500 font-light mb-3">Copy payload này để kết nối với cơ sở dữ liệu hoặc API lưu trữ của backend.</p>
                  <pre className="p-3 bg-gray-900 text-amber-500 rounded-sm text-[10px] overflow-x-auto max-h-60 font-mono">
                    {JSON.stringify({
                      categorySlug: selectedCategory,
                      backgroundSrc,
                      productImage: productSrc ? {
                        src: productSrc,
                        alt: `${title} - Sản phẩm`
                      } : undefined,
                      title,
                      accentTitle,
                      tagline,
                      description,
                      price: {
                        label: priceLabel,
                        amount: priceAmount,
                        currency: priceCurrency
                      },
                      highlights,
                    }, null, 2)}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
