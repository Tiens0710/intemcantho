"use client";

import HeroSlider from "@/components/HeroSlider";
import { standeeSlides } from "@/lib/data/standee-slides";

/**
 * StandeeHeroBanner — Reuses the homepage HeroSlider architecture
 * with WebGL water transitions, dot/arrow navigation, and animated text.
 * Uses standee-specific slide data.
 */
export default function StandeeHeroBanner() {
  return <HeroSlider slides={standeeSlides} sectionId="standee-hero" />;
}