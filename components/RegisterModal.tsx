"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgePercent, Eye, EyeOff, MapPin, RefreshCw, X, CheckCircle } from "lucide-react";
import { apiPost } from "@/lib/apiClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
};

const popupStyle = {
  borderColor: "#E69792",
  boxShadow: "0 0 20px rgba(230,151,146,0.4), 0 0 60px rgba(230,151,146,0.2), 0 30px 80px rgba(17,17,17,0.18)",
};

const buttonStyle = {
  color: "#fff",
  background: "linear-gradient(180deg, #c7742c 0%, #a85f20 100%)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.12)",
  border: "2px solid rgba(255,255,255,0.55)",
};

export default function RegisterModal({ open, onClose, onSwitchToLogin }: RegisterModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalOverflow; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validateForm = (): boolean => {
    if (!formData.email.includes("@")) { setError("Email không hợp lệ"); return false; }
    if (formData.password.length < 6) { setError("Mat khau phai co it nhat 6 ky tu"); return false; }
    if (formData.password !== formData.confirmPassword) { setError("Mat khau khong khop"); return false; }
    if (!formData.agreeTerms) { setError("Vui long dong y voi dieu khoan"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await apiPost<unknown>("/api/auth/register", {
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      }, { skipAuth: true });
      setSuccess(true);
      setTimeout(() => { router.push("/dang-nhap"); }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: RefreshCw, label: "Đổi size", detail: "3 ngày" },
    { icon: BadgePercent, label: "Ưu đãi", detail: "thành viên" },
    { icon: MapPin, label: "Có sẵn", detail: "tại Cần Thơ" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }} transition={{ type: "spring", damping: 26, stiffness: 280 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <div className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-3xl max-h-[90vh]" style={popupStyle}>
                <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#6f5d4b] shadow-sm transition hover:text-[#3b2a1f]"><X className="h-5 w-5" /></button>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] max-h-[90vh]">
                  <div className="relative bg-gradient-to-br from-white/50 via-[#f7f4f0]/80 to-[#ede8e2]/60 backdrop-blur-xl p-5 md:p-6">
                    <div className="text-center">
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <img src="/logo_dangnhap.png" alt="Logo" className="max-h-[300px] max-w-[300px] w-full h-full object-contain" />
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {features.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/80 px-3 py-2 text-xs text-[#6f5d4b] shadow-sm">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ecdccc] bg-white flex-shrink-0"><Icon className="h-3.5 w-3.5 text-[#8b6b4f]" /></div>
                            <div className="min-w-0">
                              <p className="font-semibold uppercase tracking-[0.15em] text-[9px] text-[#8b6b4f]">{item.label}</p>
                              <p className="font-medium text-[11px] text-[#4b382a]">{item.detail}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-gradient-to-tl from-white/80 via-white/60 to-white/50 backdrop-blur-xl p-5 md:p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
                    <div className="w-full">
                      {success ? (
                        <div className="text-center py-8">
                          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Đăng ký thành công!</h2>
                          <p className="mt-2 text-xs text-[#8c7a68]">Tài khoản của bạn đã được tạo. Đang chuyển hướng đến trang đăng nhập…</p>
                        </div>
                      ) : (
                        <>
                          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Đăng ký</h2>
                          <p className="mt-1 text-[11px] text-[#8c7a68]">Tạo tài khoản để truy cập đơn hàng và lịch sử mua hàng</p>
                          <form onSubmit={handleSubmit} className="mt-3 space-y-2.5">
                            <div>
                              <label className="sr-only" htmlFor="regEmail">Email</label>
                              <input id="regEmail" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-2 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                            </div>
                            <div>
                              <label className="sr-only" htmlFor="regPhone">Số điện thoại</label>
                              <input id="regPhone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Số điện thoại" className="w-full rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-2 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                            </div>
                            <div>
                              <label className="sr-only" htmlFor="regPassword">Mật khẩu</label>
                              <div className="relative">
                                <input id="regPassword" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Mật khẩu" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white pl-4 pr-12 py-2 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1a090] transition hover:text-[#6f5d4b]">
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="sr-only" htmlFor="regConfirmPassword">Xác nhận mật khẩu</label>
                              <div className="relative">
                                <input id="regConfirmPassword" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Xác nhận mật khẩu" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white pl-4 pr-12 py-2 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1a090] transition hover:text-[#6f5d4b]">
                                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </div>
                            {error && (
                              <div className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-2"><p className="text-xs text-red-700">{error}</p></div>
                            )}
                            <label className="flex items-start gap-2 cursor-pointer">
                              <span className="relative mt-0.5 flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center">
                                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="absolute h-full w-full cursor-pointer opacity-0" />
                                <span className={`flex h-3.5 w-3.5 items-center justify-center rounded border transition ${formData.agreeTerms ? 'border-[#2d1d12] bg-[#2d1d12]' : 'border-[#d9cbbb] bg-white'}`}>
                                  {formData.agreeTerms && <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                                </span>
                              </span>
                              <span className="text-[11px] leading-snug text-[#6f5d4b]">Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật</span>
                            </label>
                            <button type="submit" disabled={isLoading} className="w-full rounded-[10px] py-2.5 text-sm font-semibold transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2" style={buttonStyle}>
                              {isLoading ? "Đang đăng ký..." : "Đăng ký"}
                              {!isLoading && <ArrowRight className="h-4 w-4 text-white" />}
                            </button>
                            <p className="text-center text-xs text-[#8c7a68]">
                              Đã có tài khoản?{" "}
                              {onSwitchToLogin ? (
                                <button type="button" onClick={onSwitchToLogin} className="font-semibold text-[#2d1d12]">Đăng nhập</button>
                              ) : (
                                <Link href="/dang-nhap" className="font-semibold text-[#2d1d12]">Đăng nhập</Link>
                              )}
                            </p>
                          </form>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}