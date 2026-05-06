/**
 * Hero Section Component - Luxury Premium Design
 * Minimalist aesthetic with professional woman image and elegant typography
 */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAppStore } from '@/lib/store';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const { persona } = useAppStore();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Left and Right content entrance
    tl.from('.hero-left-content', { opacity: 0, x: -60, duration: 1, ease: 'power3.out' }, 0)
      .from('.hero-right-content', { opacity: 0, x: 60, duration: 1, ease: 'power3.out' }, 0);

    // Staggered text elements
    tl.from('.stagger-item', { opacity: 0, y: 20, duration: 0.8, stagger: 0.15, ease: 'power2.out' }, 0.2);

    // Decorative line
    tl.from('.dec-line', { width: 0, duration: 0.8, ease: 'power2.out' }, 0.5);

    // Floating card
    tl.from('.floating-card', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' }, 0.8);

    // Continuous animations
    gsap.to('.rotating-circle', { rotation: 360, duration: 30, repeat: -1, ease: 'none' });
    gsap.to('.floating-image', { y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'power1.inOut' });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="hero-left-content flex flex-col justify-center">
            {/* Subtitle */}
            <p className="stagger-item text-sm tracking-widest text-amber-800 uppercase mb-6">
              Premium Printing Solutions
            </p>

            {/* Main Heading */}
            <h1 className="stagger-item text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 leading-tight">
              Duky
              <br />
              <span className="text-amber-800">Printing</span>
            </h1>

            {/* Decorative Line */}
            <div className="dec-line h-1 bg-amber-800 mb-8" style={{ width: 64 }}></div>

            {/* Description */}
            <p className="stagger-item text-lg text-gray-600 mb-8 max-w-md leading-relaxed font-light">
              Elevate your brand with our luxury printing services. From premium business stationery to sophisticated packaging, we deliver excellence in every detail.
            </p>

            {/* CTA Buttons */}
            <div className="stagger-item flex gap-6 flex-wrap">
              <button className="px-8 py-4 bg-amber-800 text-white font-light rounded-sm hover:bg-[#6B5344] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 text-lg tracking-wide">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-amber-800 text-amber-800 font-light rounded-sm hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all duration-300 text-lg tracking-wide">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="stagger-item flex gap-12 mt-16 pt-8 border-t border-gray-200">
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
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="hero-right-content relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Decorative Background Elements */}
            <div className="rotating-circle absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border border-amber-200 opacity-20"></div>
            </div>

            {/* Main Image */}
            <div className="floating-image relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/luxury-hero-main-oXbi9j72FoJoymtv7Q4Fmn.webp"
                alt="Premium Printing Professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="floating-card absolute bottom-12 right-0 bg-white rounded-sm shadow-lg p-6 border border-gray-200 z-20">
              <p className="text-2xl font-light text-amber-800">Premium Quality</p>
              <p className="text-xs text-gray-600 font-light mt-2">Guaranteed Excellence</p>
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-amber-800 opacity-40"></div>
            <div className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-amber-200 opacity-30"></div>
            <div className="absolute top-1/3 right-0 w-2 h-2 rounded-full bg-amber-800 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
