"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronDown, Clock } from "lucide-react";
import WarmButton from "@/components/WarmButton";
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
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "#D17515" }}>

      {/* ── Large Gradient Orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(209,117,21,0.6) 0%, rgba(209,117,21,0) 70%)", filter: "blur(2px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(255,200,120,0.25) 0%, transparent 70%)" }}
      />

      {/* ── Wave SVG Bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ opacity: 0.08 }}>
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
        </svg>
      </div>

      {/* ── Wave SVG Top ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 rotate-180">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ opacity: 0.06 }}>
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
        </svg>
      </div>

      {/* ── Floating Animated Dots ── */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[25%] w-2.5 h-2.5 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.2)" }}
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 right-[18%] w-3.5 h-3.5 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.15)" }}
      />
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full pointer-events-none z-0"
        style={{ background: "rgba(255,255,255,0.18)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto relative" style={{ maxWidth: "1320px" }}>
          {/* White outer glow — contrast on orange bg */}
          <div
            className="absolute -inset-1 rounded-[18px] pointer-events-none"
            style={{
              boxShadow: "0 0 30px rgba(255,255,255,0.35), 0 0 60px rgba(255,255,255,0.15)",
            }}
          />

          {/* Golden gradient border ring */}
          <div
            className="absolute -inset-[3px] rounded-[19px] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,220,150,0.95), rgba(230,121,42,0.85) 30%, rgba(255,200,100,0.9) 60%, rgba(230,121,42,0.8) 100%)",
            }}
          />

          {/* Animated glow pulse */}
          <motion.div
            animate={{
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 rounded-[28px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,200,100,0.2) 0%, transparent 70%)",
            }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "40px",
              boxShadow:
                "0 0 20px rgba(255,200,100,0.5), 0 0 50px rgba(230,121,42,0.3), 0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr_auto] gap-10 lg:gap-12 items-center">

            {/* ── Vùng 1: Heading trái + Bullet list ── */}
            <div className="flex flex-col justify-center">
              {/* Accent dot + line */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: "#E6792A" }} />
                <div className="w-8 h-0.5 rounded-full" style={{ background: "linear-gradient(to right, #E6792A, rgba(230,121,42,0.2))" }} />
              </div>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                  fontSize: "clamp(1.6rem, 2.7vw, 2.15rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#3D2008",
                }}
              >
                Báo giá <span className="whitespace-nowrap">Tem Nhãn</span><br />
                <span style={{ color: "#E6792A" }}>chỉ trong vài giây</span>
              </h2>

              <div className="w-10 h-0.5 rounded-full mb-5" style={{ background: "linear-gradient(to right, #E6792A, rgba(230,121,42,0.15))" }} />

              <ul className="space-y-3">
                {[
                  "Không cần đăng ký tài khoản",
                  "Nhận báo giá chính xác, nhanh chóng",
                  "Tư vấn tận tâm — hỗ trợ 24/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(230,121,42,0.1)" }}>
                      <CheckCircle className="w-3 h-3" style={{ color: "#E6792A" }} />
                    </div>
                    <span style={{ fontSize: "14px", color: "#4A3A2A", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Vùng 2: Form ── */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Chất liệu */}
                <div>
                  <label className="block mb-2" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C4A3A" }}>
                    Chất liệu
                  </label>
                  <div className="relative">
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full appearance-none rounded-xl px-4 py-3 pr-9 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-[#E6792A]/30"
                      style={{ background: "#FAFAF8", border: "1.5px solid #DDD5CA", color: "#3D2E1E", fontWeight: 500 }}
                    >
                      <option value="">Chọn chất liệu</option>
                      {materialOptions.map(([key, opt]) => (
                        <option key={key} value={key}>{opt.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                  </div>
                </div>

                {/* Số lượng */}
                <div>
                  <label className="block mb-2" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C4A3A" }}>
                    Số lượng
                  </label>
                  <div className="relative">
                    <select
                      value={quantity || ""}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                      className="w-full appearance-none rounded-xl px-4 py-3 pr-9 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-[#E6792A]/30"
                      style={{ background: "#FAFAF8", border: "1.5px solid #DDD5CA", color: "#3D2E1E", fontWeight: 500 }}
                      disabled={!material}
                    >
                      <option value="">Chọn SL</option>
                      {quantityPresets.map((q) => (
                        <option key={q} value={q}>{q.toLocaleString("vi-VN")}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                  </div>
                </div>
              </div>

              {/* Kích thước */}
              <div>
                <label className="block mb-2" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C4A3A" }}>
                  Kích thước (mm)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full">
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Rộng"
                      min={10}
                      max={300}
                      className="w-full rounded-xl px-4 py-3 pr-14 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-[#E6792A]/30"
                      style={{ background: "#FAFAF8", border: `1.5px solid ${width && !isSizeValid ? "#E53E3E" : "#DDD5CA"}`, color: "#3D2E1E", fontWeight: 500 }}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold pointer-events-none px-1.5 py-0.5 rounded" style={{ color: "#A06830", background: "rgba(230,121,42,0.08)" }}>mm</span>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Cao"
                      min={10}
                      max={300}
                      className="w-full rounded-xl px-4 py-3 pr-14 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-[#E6792A]/30"
                      style={{ background: "#FAFAF8", border: `1.5px solid ${height && !isSizeValid ? "#E53E3E" : "#DDD5CA"}`, color: "#3D2E1E", fontWeight: 500 }}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold pointer-events-none px-1.5 py-0.5 rounded" style={{ color: "#A06830", background: "rgba(230,121,42,0.08)" }}>mm</span>
                  </div>
                </div>
                {width && height && !isSizeValid && (
                  <p style={{ fontSize: "11px", color: "#E53E3E", marginTop: "6px" }}>
                    Kích thước từ 10mm đến 300mm
                  </p>
                )}
              </div>

              {/* Cán màng */}
              <div>
                <label className="block mb-2" style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C4A3A" }}>
                  Cán màng
                </label>
                <div className="relative">
                  <select
                    value={lamination}
                    onChange={(e) => setLamination(e.target.value)}
                    className="w-full appearance-none rounded-xl px-4 py-3 pr-9 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-[#E6792A]/30"
                    style={{ background: "#FAFAF8", border: "1.5px solid #DDD5CA", color: "#3D2E1E", fontWeight: 500 }}
                  >
                    {laminationOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#A06830" }} />
                </div>
              </div>
            </div>

            {/* ── Vùng 3: CTA ── */}
            <div className="flex flex-col gap-3">
              <WarmButton
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                size="md"
                icon={<span style={{ fontSize: "16px" }}>→</span>}
              >
                {isSubmitting ? "Đang gửi..." : submitResult === "success" ? "Đã gửi!" : "Nhận báo giá ngay"}
              </WarmButton>
              <div className="flex items-start gap-1.5 justify-center">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#A08060" }} />
                <p style={{ fontSize: "11px", lineHeight: 1.4, color: "#9A8472" }}>Chúng tôi sẽ liên hệ<br />với bạn trong vài phút!</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        {/* ═══ BẢNG GIÁ THAM KHẢO — NGOÀI CARD (4 cột) ═══ */}
        {priceResult && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto mt-5"
            style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 24px rgba(92, 61, 30, 0.06), 0 1px 3px rgba(92, 61, 30, 0.04)", padding: "24px 40px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
              {/* Đơn giá */}
              <div className="text-center md:border-r md:pr-6" style={{ borderColor: "#E8E0D6" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9A8472" }}>Đơn giá</p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#3D2E1E", marginTop: "4px" }}>{priceResult.unitPrice.toLocaleString("vi-VN")}đ/sp</p>
              </div>
              {/* Thành tiền */}
              <div className="text-center md:pl-6">
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#A06830" }}>Thành tiền</p>
                <p style={{ fontSize: "22px", fontWeight: 800, color: "#5C3D1E", marginTop: "4px" }}>{priceResult.totalPrice.toLocaleString("vi-VN")}đ</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
