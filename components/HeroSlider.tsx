'use client';

/**
 * HeroSlider - Cinematic full-screen slider with WebGL water/liquid
 * distortion transition between slides.
 *
 * Uses a custom WebGL displacement shader for background image transitions
 * and GSAP for content enter/exit animations.
 */

import { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';

import { slides } from '@/lib/data/slides';
import { WaterTransition } from '@/lib/webgl/WaterTransition';
import {
  animateSlideIn,
  animateSlideOut,
  killSlideAnimation,
} from '@/lib/animations/heroAnimation';

export default function HeroSlider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wglRef = useRef<WaterTransition | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitioningRef = useRef(false);
  const currentIdxRef = useRef(0);

  // ── Show/hide slide content via DOM (no React re-render) ──
  const setSlideVisible = useCallback((idx: number) => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === idx) {
        el.style.visibility = 'visible';
        el.style.pointerEvents = 'auto';
      } else {
        el.style.visibility = 'hidden';
        el.style.pointerEvents = 'none';
      }
    });
  }, []);

  // ── Transition to a slide ──
  const goToSlide = useCallback(
    (nextIdx: number) => {
      const wgl = wglRef.current;
      if (!wgl || transitioningRef.current) return;

      const curIdx = currentIdxRef.current;
      const idx = ((nextIdx % slides.length) + slides.length) % slides.length;
      if (idx === curIdx) return;

      transitioningRef.current = true;

      // Kill any running timelines
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      const currentSlide = slideRefs.current[curIdx];
      const nextSlide = slideRefs.current[idx];

      // 1. Animate current content OUT (blur + fade)
      if (currentSlide) {
        animateSlideOut(currentSlide);
      }

      // 2. Start WebGL water distortion
      wgl.beginTransition(idx);

      // 3. Drive wgl.progress from 0 → 1
      const progressObj = { value: 0 };
      const master = gsap.timeline({
        onComplete: async () => {
          // Wait for WebGL to finish and fade out distortion, then show final slide
          await wgl.completeTransition(idx);
          transitioningRef.current = false;
          currentIdxRef.current = idx;

          // Kill and cleanup only the OLD slide
          if (currentSlide) {
            killSlideAnimation(currentSlide);
          }

          // Show new slide content container
          setSlideVisible(idx);

          // rAF đảm bảo visibility:visible đã apply trước khi GSAP đọc layout
          requestAnimationFrame(() => {
            if (nextSlide) {
              timelineRef.current = animateSlideIn(nextSlide);
            }
            resetAutoplay();
          });
        },
      });

      master.to(progressObj, {
        value: 1,
        duration: 3.2,
        ease: 'power1.inOut',
        onUpdate: () => {
          wgl.progress = progressObj.value;
        },
      });
    },
    [setSlideVisible],
  );

  // ── Navigation helpers ──
  const goNext = useCallback(() => {
    goToSlide(currentIdxRef.current + 1);
  }, [goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentIdxRef.current - 1);
  }, [goToSlide]);

  // ── Autoplay ──
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      goNext();
    }, 8000);
  }, [goNext]);

  // ── Initialize WebGL ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let wgl: WaterTransition;
    try {
      wgl = new WaterTransition(canvas);
      wglRef.current = wgl;
    } catch {
      console.warn('WebGL not supported, falling back to fade');
      return;
    }

    // Load all background images
    const bgUrls = slides.map((s) => s.bg);
    wgl.loadImages(bgUrls).then(() => {
      wgl.showSlide(0);
      setSlideVisible(0);
      // Animate first slide content in — wrap in rAF to ensure DOM is fully rendered
      const firstSlide = slideRefs.current[0];
      if (firstSlide) {
        requestAnimationFrame(() => {
          timelineRef.current = animateSlideIn(firstSlide);
        });
      }
      // Start autoplay
      resetAutoplay();
    });

    // Resize handler
    const onResize = () => wgl.resize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      wgl.destroy();
      wglRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Cleanup ──
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
      {/* WebGL Canvas - renders background transitions */}
      <canvas
        ref={canvasRef}
        className="hero-webgl-canvas"
        aria-hidden="true"
      />

      {/* Content Overlays - one per slide, stacked absolutely */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => { slideRefs.current[i] = el; }}
          className="hero-slide hero-slide--overlay"
          style={{
            '--accent-color': slide.accent,
            visibility: i === 0 ? 'visible' : 'hidden',
            pointerEvents: i === 0 ? 'auto' : 'none',
          } as React.CSSProperties}
        >
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
      ))}

      {/* ── Navigation Vertical Text ── */}
      <div className="hero-nav">
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={goPrev}
          aria-label="Slide trước"
        >
          TRƯỚC
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={goNext}
          aria-label="Slide sau"
        >
          SAU
        </button>
      </div>
    </section>
  );
}
