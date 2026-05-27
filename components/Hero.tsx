"use client";

/**
 * Hero Section - Cinematic Slider Wrapper
 * Renders the full-screen HeroSlider with GSAP + Swiper
 */

import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('./HeroSlider'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[600px] bg-slate-950 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
    </div>
  )
});

export default function Hero() {
  return <HeroSlider />;
}
