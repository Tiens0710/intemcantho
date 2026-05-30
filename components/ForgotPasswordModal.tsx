"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgePercent, Eye, EyeOff, KeyRound, MapPin, RefreshCw, X, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { authService } from "@/lib/api/services/authService";

type ForgotPasswordModalProps = {
  open: boolean;
  onClose: () => void;
};

type Step = "request" | "reset";

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

export default function ForgotPasswordModal({ open, onClose }: ForgotPasswordModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();

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

  // Reset state when modal opens, then auto-detect URL token
  useEffect(() => {
    if (open) {
      setStep("request");
      setEmail("");
      setToken("");
      setPassword("");
      setConfirmPassword("");
      setError(null);
      setSuccessMessage(null);

      const urlToken = searchParams.get("token");
      if (urlToken) {
        setToken(urlToken);
        setStep("reset");
      }
    }
  }, [open, searchParams]);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.includes("@")) {
      setError("Email không hợp lệ");
      return;
    }
    setIsLoading(true);
    try {
      const result = await authService.forgotPassword(email);
      setSuccessMessage(result.message);
      if (result.resetToken) {
        setToken(result.resetToken);
        setStep("reset");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }
    setIsLoading(true);
    try {
      await authService.resetPassword({
        token,
        password,
        passwordConfirmation: confirmPassword,
      });
      setSuccessMessage("Đặt lại mật khẩu thành công!");
      setTimeout(() => {
        router.push("/dang-nhap");
        onClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đặt lại mật khẩu thất bại");
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
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-3xl" style={popupStyle}>
                <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#6f5d4b] shadow-sm transition hover:text-[#3b2a1f]"><X className="h-5 w-5" /></button>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
                  {/* Left side — branding */}
                  <div className="relative bg-gradient-to-br from-white/50 via-[#f7f4f0]/80 to-[#ede8e2]/60 backdrop-blur-xl p-6 md:p-8">
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

                  {/* Right side — form */}
                  <div className="bg-gradient-to-tl from-white/80 via-white/60 to-white/50 backdrop-blur-xl p-5 md:p-6 lg:p-8">
                    <div className="w-full">
                      {successMessage && !step.startsWith("reset") ? (
                        <div className="text-center py-8">
                          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Kiểm tra email của bạn</h2>
                          <p className="mt-2 text-xs text-[#8c7a68]">{successMessage}</p>
                          <button onClick={onClose} className="mt-4 text-xs font-semibold text-[#2d1d12] underline">Đóng</button>
                        </div>
                      ) : step === "request" ? (
                        <>
                          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Quên mật khẩu?</h2>
                          <p className="mt-1 text-xs text-[#8c7a68]">Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu</p>
                          <form onSubmit={handleRequestReset} className="mt-4 space-y-3">
                            <div>
                              <label className="sr-only" htmlFor="fpEmail">Email</label>
                              <input
                                id="fpEmail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email đã đăng ký"
                                required
                                className="w-full rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]"
                              />
                            </div>
                            {error && (
                              <div className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-2"><p className="text-xs text-red-700">{error}</p></div>
                            )}
                            <button type="submit" disabled={isLoading} className="w-full rounded-[10px] py-3 text-sm font-semibold transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2" style={buttonStyle}>
                              {isLoading ? "Đang gửi..." : "Gửi liên kết đặt lại"}
                              {!isLoading && <KeyRound className="h-4 w-4 text-white" strokeWidth={2} />}
                            </button>
                          </form>
                        </>
                      ) : (
                        <>
                          <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Đặt lại mật khẩu</h2>
                          <p className="mt-1 text-xs text-[#8c7a68]">Nhập mật khẩu mới cho tài khoản <strong>{email}</strong></p>
                          <form onSubmit={handleResetPassword} className="mt-4 space-y-3">
                            <div>
                              <label className="sr-only" htmlFor="fpToken">Token</label>
                              <input
                                id="fpToken"
                                type="text"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                placeholder="Token xác nhận (tự điền ở chế độ dev)"
                                required
                                className="w-full rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]"
                              />
                              <p className="mt-1 text-[10px] text-[#b1a090]">Ở chế độ production, bạn sẽ nhận token qua email.</p>
                            </div>
                            <div>
                              <label className="sr-only" htmlFor="fpPassword">Mật khẩu mới</label>
                              <div className="relative">
                                <input id="fpPassword" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu mới (ít nhất 8 ký tự)" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white pl-4 pr-12 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1a090] transition hover:text-[#6f5d4b]">
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </div>
                            <div>
                              <label className="sr-only" htmlFor="fpConfirmPassword">Xác nhận mật khẩu</label>
                              <div className="relative">
                                <input id="fpConfirmPassword" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Xác nhận mật khẩu" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white pl-4 pr-12 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1a090] transition hover:text-[#6f5d4b]">
                                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </div>
                            {error && (
                              <div className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-2"><p className="text-xs text-red-700">{error}</p></div>
                            )}
                            {successMessage && (
                              <div className="rounded-[5px] border border-green-200 bg-green-50 px-4 py-2"><p className="text-xs text-green-700">{successMessage}</p></div>
                            )}
                            <button type="submit" disabled={isLoading} className="w-full rounded-[10px] py-3 text-sm font-semibold transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2" style={buttonStyle}>
                              {isLoading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
                              {!isLoading && <ArrowRight className="h-4 w-4 text-white" />}
                            </button>
                          </form>
                        </>
                      )}

                      <div className="mt-4 text-center">
                        <Link href="/dang-nhap" className="text-xs text-[#6f5d4b] hover:text-[#2d1d12]">Quay lại đăng nhập</Link>
                      </div>
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