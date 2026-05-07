'use client';

/**
 * HeroSlider - Cinematic full-screen slider with GSAP animations
 * Elegant layout with split fonts and minimalist elements
 */

import { useRef, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import gsap from 'gsap';

import { slides } from '@/lib/data/slides';
import { animateSlideIn, killSlideAnimation } from '@/lib/animations/heroAnimation';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const playSlide = useCallback((index: number) => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    const slideEl = slideRefs.current[index];
    if (!slideEl) return;

    slideRefs.current.forEach((el) => {
      if (el) killSlideAnimation(el);
    });

    timelineRef.current = animateSlideIn(slideEl);
  }, []);

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      playSlide(swiper.realIndex);
    },
    [playSlide],
  );

  const handleSwiperInit = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      requestAnimationFrame(() => playSlide(0));
    },
    [playSlide],
  );

  useEffect(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
      slideRefs.current.forEach((el) => {
        if (el) killSlideAnimation(el);
      });
    };
  }, []);

  return (
    <section className="hero-slider-wrap" id="hero-slider">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        loop={false}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        allowTouchMove={true}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <div
              ref={(el) => { slideRefs.current[i] = el; }}
              className="hero-slide"
              style={{ '--accent-color': slide.accent } as React.CSSProperties}
            >
              {/* ── Background Layer ── */}
              <div className="hero-slide-bg-wrap">
                <img
                  src={slide.bg}
                  alt=""
                  className="hero-slide-bg"
                  draggable={false}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              </div>

              {/* ── Dark Gradient Overlay ── */}
              <div className="hero-slide-overlay" />

              {/* ── Content Grid ── */}
              <div className="hero-slide-content">
                {/* Left: Text */}
                <div className="hero-slide-text">
                  <h1 className="hero-slide-title">
                    {slide.title.split('\n').map((line, li) => (
                      <span key={li} className="hero-slide-title-line">
                        {line}
                      </span>
                    ))}
                  </h1>

                  <p className="hero-slide-desc">{slide.description}</p>

                  <button className="hero-slide-cta">
                    <span>{slide.cta}</span>
                  </button>
                </div>

                {/* Right: Product */}
                <div className="hero-slide-product-wrap">
                  <img
                    src={slide.product}
                    alt={slide.title.replace('\n', ' ')}
                    className="hero-slide-product"
                    draggable={false}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                  />
                </div>
              </div>

              {/* ── Slide Counter ── */}
              <div className="hero-slide-counter">
                <span className="counter-current">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="counter-total">
                  /{String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Navigation Vertical Text ── */}
      <div className="hero-nav">
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Slide trước"
        >
          TRƯỚC
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Slide sau"
        >
          SAU
        </button>
      </div>

      {/* ── Single Pagination Dot ── */}
      {/* <div className="hero-pagination">
        <div className="hero-dot" />
      </div> */}
    </section>
  );
}
