/**
 * Login Page - Luxury Premium Design
 * User authentication with email/password
 */

import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await response.json();
      // Store token and redirect
      localStorage.setItem('authToken', data.token);
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      setLocation('/tai-khoan/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
                Đăng nhập
              </h1>
              <p className="text-lg text-gray-600 font-light mb-12">
                Truy cập tài khoản của bạn để xem đơn hàng và lịch sử mua hàng
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-light text-gray-900 mb-2">
                    Tên tài khoản hoặc địa chỉ email <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light transition-colors"
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-light text-gray-900 mb-2">
                    Mật khẩu <span className="text-amber-800">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-600 hover:text-amber-800 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-sm"
                  >
                    <p className="text-sm text-red-700 font-light">{error}</p>
                  </motion.div>
                )}

                {/* Remember Me & Lost Password */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded-sm accent-amber-800"
                    />
                    <span className="text-sm font-light text-gray-700">Nhớ tôi</span>
                  </label>
                  <a
                    href="/quen-mat-khau"
                    className="text-sm font-light text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    Quên mật khẩu?
                  </a>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-amber-800 text-white rounded-sm hover:bg-amber-900 transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </motion.button>

                {/* Register Link */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm font-light text-gray-600"
                >
                  Chưa có tài khoản?{' '}
                  <a href="/dang-ky" className="text-amber-800 hover:text-amber-900 transition-colors">
                    Đăng ký ngay
                  </a>
                </motion.p>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col justify-center"
          >
            <div className="bg-amber-50 p-8 rounded-sm border border-amber-200">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Lợi ích khi đăng nhập</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber-800 font-light">✓</span>
                  <span className="text-gray-700 font-light">Xem trạng thái đơn hàng của bạn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-800 font-light">✓</span>
                  <span className="text-gray-700 font-light">Quản lý thông tin cá nhân</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-800 font-light">✓</span>
                  <span className="text-gray-700 font-light">Lưu địa chỉ giao hàng</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-800 font-light">✓</span>
                  <span className="text-gray-700 font-light">Tải lại thông tin thanh toán nhanh chóng</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-800 font-light">✓</span>
                  <span className="text-gray-700 font-light">Nhận thông báo về đơn hàng mới</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-sm border border-gray-200">
              <h3 className="text-lg font-light text-gray-900 mb-3">Cần hỗ trợ?</h3>
              <p className="text-sm font-light text-gray-600 mb-4">
                Liên hệ với chúng tôi nếu bạn gặp vấn đề khi đăng nhập
              </p>
              <a
                href="/lien-he"
                className="inline-block px-4 py-2 bg-amber-800 text-white rounded-sm hover:bg-amber-900 transition-colors text-sm font-light"
              >
                Liên hệ ngay
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-sm font-light text-gray-400">
          <p>&copy; 2026 Duky Printing - In Tem Nhãn Cần Thơ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
