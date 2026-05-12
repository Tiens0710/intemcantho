"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronDown, Clock } from "lucide-react";
import { useMemo, useState } from "react";
import { materials, laminationOptions, quantityPresets } from "./PricingData";
import { calculatePrice } from "./calculatePrice";

export default function QuickQuote() {
  const [material, setMaterial] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [lamination, setLamination] = useState("khong");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);
  const [sizeError, setSizeError] = useState("");

  const materialOptions = useMemo(() => Object.entries(materials), []);

  const currentTiers = useMemo(() => {
    if (!material || !materials[material]) return null;
    return materials[material].tiers;
  }, [material]);

  // Validate size
  const widthNum = useMemo(() => {
    const n = parseInt(width);
    return isNaN(n) ? 0 : n;
  }, [width]);

  const heightNum = useMemo(() => {
    const n = parseInt(height);
    return isNaN(n) ? 0 : n;
  }, [height]);

  const isSizeValid = widthNum >= 10 && widthNum <= 300 && heightNum >= 10 && heightNum <= 300;

  // Price calculation
  const priceResult = useMemo(() => {
    if (!currentTiers || !quantity || !isSizeValid) return null;
    return calculatePrice(currentTiers, quantity, widthNum, heightNum, lamination);
  }, [currentTiers, quantity, widthNum, heightNum, lamination, isSizeValid]);

  const handleSubmit = async () => {
    if (!isFormValid) return;
    setIsSubmitting(true);
    setSubmitResult(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitResult("success");
      setTimeout(() => setSubmitResult(null), 3000);
    } catch {
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = !!(material && isSizeValid && quantity > 0);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "#EDE8DF" }}>
      {/* ── Floating Animated Circles ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #C4A882 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-12 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #B8956A 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4B896 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
          style={{
            background: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0 4px 24px rgba(92, 61, 30, 0.06), 0 1px 3px rgba(92, 61, 30, 0.04)",
            padding: "40px",
            maxWidth: "1177px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr_auto] gap-10 lg:gap-12 items-center">

            {/* ── Vùng 1: Heading trái + Bullet list ── */}
            <div className="flex flex-col justify-center">
              <h2
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#5C3D1E",
                }}
              >
                Nhận báo giá in ấn<br />chỉ trong 5 phút
              </h2>
              <ul className="space-y-2">
                {[
                  "Không cần đăng ký tài khoản",
                  "Nhận báo giá chính xác, nhanh chóng",
                  "Tư vấn tận tâm — hỗ trợ 24/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#A06830" }} />
                    <span style={{ fontSize: "13px", color: "#6B5744", lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Vùng 2: Form ── */}
            <div className="grid grid-cols-2 gap-3">
              {/* Chất liệu */}
              <div>
                <label className="block mb-1.5" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>
                  Chất liệu
                </label>
                <div className="relative">
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-8 text-sm focus:outline-none transition-colors"
                    style={{ border: "1px solid #E8E0D6", color: "#3D2E1E", fontWeight: 500 }}
                  >
                    <option value="">Chọn chất liệu</option>
                    {materialOptions.map(([key, opt]) => (
                      <option key={key} value={key}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                </div>
              </div>

              {/* Số lượng */}
              <div>
                <label className="block mb-1.5" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>
                  Số lượng
                </label>
                <div className="relative">
                  <select
                    value={quantity || ""}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-8 text-sm focus:outline-none transition-colors"
                    style={{ border: "1px solid #E8E0D6", color: "#3D2E1E", fontWeight: 500 }}
                    disabled={!material}
                  >
                    <option value="">Chọn SL</option>
                    {quantityPresets.map((q) => (
                      <option key={q} value={q}>{q.toLocaleString("vi-VN")}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                </div>
              </div>

              {/* Kích thước - 2 ô nhập */}
              <div className="col-span-2">
                <label className="block mb-1.5" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>
                  Kích thước (mm)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="Ngang"
                    min={10}
                    max={300}
                    className="w-full bg-white rounded-[10px] px-3 py-2.5 text-sm focus:outline-none transition-colors"
                    style={{ border: `1px solid ${width && !isSizeValid ? "#E53E3E" : "#E8E0D6"}`, color: "#3D2E1E", fontWeight: 500 }}
                  />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Cao"
                    min={10}
                    max={300}
                    className="w-full bg-white rounded-[10px] px-3 py-2.5 text-sm focus:outline-none transition-colors"
                    style={{ border: `1px solid ${height && !isSizeValid ? "#E53E3E" : "#E8E0D6"}`, color: "#3D2E1E", fontWeight: 500 }}
                  />
                </div>
                {width && height && !isSizeValid && (
                  <p style={{ fontSize: "10px", color: "#E53E3E", marginTop: "4px" }}>
                    Kích thước từ 10mm đến 300mm
                  </p>
                )}
              </div>

              {/* Cán màng */}
              <div className="col-span-2">
                <label className="block mb-1.5" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>
                  Cán màng
                </label>
                <div className="relative">
                  <select
                    value={lamination}
                    onChange={(e) => setLamination(e.target.value)}
                    className="w-full appearance-none bg-white rounded-[10px] px-3 py-2.5 pr-8 text-sm focus:outline-none transition-colors"
                    style={{ border: "1px solid #E8E0D6", color: "#3D2E1E", fontWeight: 500 }}
                  >
                    {laminationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                </div>
              </div>
            </div>

            {/* ── Vùng 3: CTA ── */}
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={isFormValid ? { scale: 1.02 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="w-full flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed"
                style={{ padding: "16px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: 700, color: "#FFFFFF", background: isFormValid ? "#7A4E2D" : "#C8BFB4", border: "none", cursor: isFormValid ? "pointer" : "not-allowed", whiteSpace: "nowrap" }}
              >
                {isSubmitting ? "Đang gửi..." : submitResult === "success" ? (<><CheckCircle className="w-4 h-4" /> Đã gửi!</>) : (<>Nhận báo giá ngay<span style={{ fontSize: "18px" }}>→</span></>)}
              </motion.button>
              <div className="flex items-start gap-1.5 justify-center">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#A08060" }} />
                <p style={{ fontSize: "11px", lineHeight: 1.4, color: "#9A8472" }}>Chúng tôi sẽ liên hệ<br />với bạn trong vài phút!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══ BẢNG GIÁ THAM KHẢO — NGOÀI CARD (4 cột) ═══ */}
        {priceResult && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto mt-5"
            style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 24px rgba(92, 61, 30, 0.06), 0 1px 3px rgba(92, 61, 30, 0.04)", padding: "24px 40px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
              {/* Đơn giá */}
              <div className="text-center md:border-r md:pr-6" style={{ borderColor: "#E8E0D6" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>Đơn giá</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#3D2E1E", marginTop: "4px" }}>{priceResult.unitPrice.toLocaleString("vi-VN")}đ/sp</p>
              </div>
              {/* Thành tiền */}
              <div className="text-center md:border-r md:px-6" style={{ borderColor: "#E8E0D6" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>Thành tiền</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#3D2E1E", marginTop: "4px" }}>{priceResult.totalPrice.toLocaleString("vi-VN")}đ</p>
              </div>
              {/* VAT 8% */}
              <div className="text-center md:border-r md:px-6" style={{ borderColor: "#E8E0D6" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>VAT 8%</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#3D2E1E", marginTop: "4px" }}>+{priceResult.vatAmount.toLocaleString("vi-VN")}đ</p>
              </div>
              {/* Tổng cộng */}
              <div className="text-center md:pl-6">
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#A06830" }}>Tổng cộng</p>
                <p style={{ fontSize: "22px", fontWeight: 800, color: "#5C3D1E", marginTop: "4px" }}>{priceResult.grandTotal.toLocaleString("vi-VN")}đ</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}