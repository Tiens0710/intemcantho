/**
 * Hero Section Component - Luxury Premium Design
 * Minimalist aesthetic with professional woman image and elegant typography
 */

import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { persona } = useAppStore();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-sm tracking-widest text-amber-800 uppercase mb-6"
            >
              Premium Printing Solutions
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 leading-tight"
            >
              Duky
              <br />
              <span className="text-amber-800">Printing</span>
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-amber-800 mb-8"
            ></motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed font-light"
            >
              Elevate your brand with our luxury printing services. From premium business stationery to sophisticated packaging, we deliver excellence in every detail.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-6 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#6B5344' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-800 text-white font-light rounded-sm hover:bg-amber-900 transition-colors flex items-center gap-2 text-lg tracking-wide"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-800 text-amber-800 font-light rounded-sm hover:bg-amber-50 transition-colors text-lg tracking-wide"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-12 mt-16 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-3xl font-light text-amber-800">15+</p>
                <p className="text-sm text-gray-600 font-light">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-amber-800">1000+</p>
                <p className="text-sm text-gray-600 font-light">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-light text-amber-800">500+</p>
                <p className="text-sm text-gray-600 font-light">Projects Completed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Decorative Background Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border border-amber-200 opacity-20"></div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/luxury-hero-main-oXbi9j72FoJoymtv7Q4Fmn.webp"
                alt="Premium Printing Professional"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-12 right-0 bg-white rounded-sm shadow-lg p-6 border border-gray-200 z-20"
            >
              <p className="text-2xl font-light text-amber-800">Premium Quality</p>
              <p className="text-xs text-gray-600 font-light mt-2">Guaranteed Excellence</p>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-amber-800 opacity-40"></div>
            <div className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-amber-200 opacity-30"></div>
            <div className="absolute top-1/3 right-0 w-2 h-2 rounded-full bg-amber-800 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
