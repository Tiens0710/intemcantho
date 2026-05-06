/**
 * Navbar Component - Luxury Premium Design
 * Fixed transparent glassmorphism navigation that overlays the hero banner
 */

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Link } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { persona } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Ấn phẩm văn phòng', href: '/van-phong' },
    { label: 'Ấn phẩm tiếp thị', href: '/tiep-thi' },
    { label: 'Ấn phẩm bao bì', href: '/bao-bi' },
    { label: 'Kinh nghiệm', href: '/kinh-nghiem' },
    { label: 'Liên hệ', href: '/lien-he' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg py-2'
          : 'bg-transparent backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <Link href="/" className="flex flex-col group cursor-pointer">
              <span className="font-playfair text-2xl tracking-wide text-white group-hover:text-amber-200 transition-colors">
                Marry & Sweet
              </span>
              <span className="font-inter text-[0.55rem] tracking-[0.25em] text-white/50 uppercase mt-1">
                Premium Wedding Cakes
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center flex-1 justify-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors tracking-wide"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons & Persona */}
          <div className="hidden md:flex gap-4 items-center ml-auto">
            {persona && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-white/10 text-white rounded-sm text-xs font-light border border-white/20 backdrop-blur-sm"
              >
                {persona}
              </motion.div>
            )}
            <Link
              href="/dang-nhap"
              className="text-sm font-light text-white/80 hover:text-white transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              href="/dang-ky"
              className="px-5 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 transition-colors rounded-[2px]"
            >
              Đăng ký
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-amber-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-6 space-y-2 border-t border-white/10 pt-4"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-sm font-light text-white/80 hover:text-white hover:bg-white/5 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
              <Link
                href="/dang-nhap"
                className="block px-4 py-2 text-sm font-light text-white/80 hover:text-white hover:bg-white/5 rounded-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
              <Link
                href="/dang-ky"
                className="block px-4 py-3 text-sm font-medium text-black bg-white hover:bg-gray-200 text-center rounded-[2px] transition-all mx-4"
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
