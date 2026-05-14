"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgePercent, Eye, EyeOff, LogIn, MapPin, RefreshCw, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: { name: string; email: string }) => void;
  onSwitchToRegister?: () => void;
};

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M23.49 12.27c0-.82-.07-1.6-.2-2.36H12v4.47h6.46a5.53 5.53 0 0 1-2.4 3.63v3.02h3.87c2.26-2.08 3.56-5.15 3.56-8.76Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.87-3.02c-1.07.72-2.44 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.98H1.26v3.12A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.25 14.25a7.2 7.2 0 0 1 0-4.5V6.63H1.26a12 12 0 0 0 0 10.74l3.99-3.12Z" />
    <path fill="#EA4335" d="M12 4.77c1.76 0 3.33.61 4.57 1.8l3.42-3.42C17.95 1.17 15.24 0 12 0A12 12 0 0 0 1.26 6.63l3.99 3.12C6.2 6.89 8.86 4.77 12 4.77Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.87v-8.4H7.08V12h3.04V9.4c0-3 1.8-4.66 4.55-4.66 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.88V12h3.35l-.54 3.47h-2.8v8.4A12 12 0 0 0 24 12Z" />
  </svg>
);

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

export default function LoginModal({ open, onClose, onLoginSuccess, onSwitchToRegister }: LoginModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleFacebookLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const fbUser = { name: "Facebook User", email: "fb_user@facebook.com" };
      localStorage.setItem("authToken", "fb_demo_token_" + Date.now());
      localStorage.setItem("user", JSON.stringify(fbUser));
      onLoginSuccess?.(fbUser);
      onClose();
      router.push("/tai-khoan");
      setIsLoading(false);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Login failed");
      }
      const data = await response.json();
      const userName = email.split("@")[0] || "Tai khoan";
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify({ name: userName, email }));
      if (rememberMe) localStorage.setItem("rememberMe", "true");
      onLoginSuccess?.({ name: userName, email });
      onClose();
      router.push("/tai-khoan");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: RefreshCw, label: "Doi size", detail: "3 ngay" },
    { icon: BadgePercent, label: "Uu dai", detail: "thanh vien" },
    { icon: MapPin, label: "Co san", detail: "tai Can Tho" },
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
                  <div className="relative bg-gradient-to-br from-white/50 via-[#f7f4f0]/80 to-[#ede8e2]/60 backdrop-blur-xl p-6 md:p-8">
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
                  <div className="bg-gradient-to-tl from-white/80 via-white/60 to-white/50 backdrop-blur-xl p-5 md:p-6 lg:p-8">
                    <div className="w-full">
                      <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>Đăng nhập</h2>
                      <p className="mt-1 text-xs text-[#8c7a68]">Tiep tuc mua sam cung Duky Store</p>
                      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                        <div>
                          <label className="sr-only" htmlFor="email">Email</label>
                          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="password">Password</label>
                          <div className="relative">
                            <input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mat khau" required className="w-full rounded-[5px] border border-[#ebe1d6] bg-white pl-4 pr-12 py-3 text-sm text-[#3b2a1f] outline-none transition focus:border-[#c8a27c]" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1a090] transition hover:text-[#6f5d4b]">
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        {error && (
                          <div className="rounded-[5px] border border-red-200 bg-red-50 px-4 py-2"><p className="text-xs text-red-700">{error}</p></div>
                        )}
                        <div className="flex items-center justify-between text-sm">
                          <label className="flex items-center gap-2 text-xs text-[#6f5d4b] whitespace-nowrap flex-shrink-0">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 rounded border-[#d9cbbb] accent-[#2d1d12]" />
                            Ghi nho dang nhap
                          </label>
                          <Link href="/quen-mat-khau" className="text-xs text-[#6f5d4b] hover:text-[#2d1d12]">Quen mat khau?</Link>
                        </div>
                        <button type="submit" disabled={isLoading} className="w-full rounded-[10px] py-3 text-sm font-semibold transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2" style={buttonStyle}>
                          <LogIn className="h-4 w-4 text-white" strokeWidth={2} />
                          {isLoading ? "Dang dang nhap..." : "Dang nhap"}
                        </button>
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#b1a090]">
                          <span className="h-px flex-1 bg-[#efe4d8]" />
                          Hoac tiep tuc voi
                          <span className="h-px flex-1 bg-[#efe4d8]" />
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <button type="button" className="flex items-center justify-center gap-2 rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-2.5 text-xs font-semibold text-[#3b2a1f] shadow-sm transition hover:bg-[#f7f4f0]"><GoogleIcon /> Google</button>
                          <button type="button" onClick={handleFacebookLogin} disabled={isLoading} className="flex items-center justify-center gap-2 rounded-[5px] border border-[#ebe1d6] bg-white px-4 py-2.5 text-xs font-semibold text-[#3b2a1f] shadow-sm transition hover:bg-[#f7f4f0] disabled:opacity-50"><FacebookIcon /> Facebook</button>
                        </div>
                        <p className="text-center text-xs text-[#8c7a68]">
                          Chua co tai khoan?{" "}
                          {onSwitchToRegister ? (
                            <button type="button" onClick={onSwitchToRegister} className="font-semibold text-[#2d1d12]">Dang ky ngay</button>
                          ) : (
                            <Link href="/dang-ky" className="font-semibold text-[#2d1d12]">Dang ky ngay</Link>
                          )}
                        </p>
                      </form>
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