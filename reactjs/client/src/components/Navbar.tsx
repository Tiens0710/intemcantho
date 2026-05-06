/**
 * Navbar Component - Luxury Premium Design
 * Sticky navigation with full menu and category links
 */

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Link } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { persona } = useAppStore();

  const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Ấn phẩm văn phòng', href: '/van-phong' },
    { label: 'Ấn phẩm tiếp thị', href: '/tiep-thi' },
    { label: 'Ấn phẩm bao bì', href: '/bao-bi' },
    { label: 'Kinh nghiệm', href: '/kinh-nghiem' },
    { label: 'Liên hệ', href: '/lien-he' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-light text-amber-800 hover:text-amber-900 transition-colors">
              DUKY
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center flex-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-light text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-sm transition-all"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons & Persona */}
          <div className="hidden md:flex gap-3 items-center ml-auto">
            {persona && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-amber-50 text-amber-800 rounded-sm text-xs font-light border border-amber-200"
              >
                {persona}
              </motion.div>
            )}
            <Link
              href="/dang-nhap"
              className="px-4 py-2 text-sm font-light text-gray-700 hover:text-amber-800 transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              href="/dang-ky"
              className="px-4 py-2 text-sm font-light text-white bg-amber-800 hover:bg-amber-900 rounded-sm transition-colors"
            >
              Đăng ký
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-sm transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 space-y-2 border-t border-gray-200 pt-4"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-sm font-light text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
              <Link
                href="/dang-nhap"
                className="block px-4 py-2 text-sm font-light text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
              <Link
                href="/dang-ky"
                className="block px-4 py-2 text-sm font-light text-white bg-amber-800 hover:bg-amber-900 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
