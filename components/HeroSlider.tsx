'use client';

/**
 * HeroSlider - Cinematic full-screen slider with WebGL water/liquid
 * distortion transition between slides.
 *
 * Simplified architecture: each slide's content is always in the DOM
 * and rendered. We use opacity + z-index for visibility instead of
 * visibility:hidden which causes browser rendering issues.
 */

import { useRef, useCallback, useEffect, useState } from 'react';
import gsap from 'gsap';

import { slides } from '@/lib/data/slides';
import { WaterTransition } from '@/lib/webgl/WaterTransition';

export default function HeroSlider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wglRef = useRef<WaterTransition | null>(null);
  const slideElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitioningRef = useRef(false);
  const currentIdxRef = useRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  // ── Show a slide (hide all others) ──
  const showSlide = useCallback((idx: number) => {
    slideElsRef.current.forEach((el, i) => {
      if (!el) return;
      if (i === idx) {
        el.style.opacity = '1';
        el.style.zIndex = '2';
        el.style.pointerEvents = 'auto';
      } else {
        el.style.opacity = '0';
        el.style.zIndex = '1';
        el.style.pointerEvents = 'none';
      }
    });
  }, []);

  // ── Animate slide content in ──
  const animateIn = useCallback((slideEl: HTMLElement) => {
    const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
    const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
    const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
    const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
    const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
    const counter = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (overlay) {
      gsap.set(overlay, { opacity: 0 });
      tl.to(overlay, { opacity: 1, duration: 0.8 }, 0);
    }

    if (product) {
      const isDesktop = window.innerWidth >= 1024;
      gsap.set(product, { opacity: 0, y: 24 });
      tl.to(product, { opacity: 1, y: 0, scale: isDesktop ? 0.98 : 1, duration: 0.95 }, 0.15);
    }

    if (titleLines.length) {
      gsap.set(titleLines, { opacity: 0, y: 18 });
      tl.to(titleLines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.25);
    }

    if (desc) {
      gsap.set(desc, { opacity: 0, y: 12 });
      tl.to(desc, { opacity: 1, y: 0, duration: 0.55 }, 0.4);
    }

    if (cta) {
      gsap.set(cta, { opacity: 0, y: 10 });
      tl.to(cta, { opacity: 1, y: 0, duration: 0.45 }, 0.5);
    }

    if (counter) {
      gsap.set(counter, { opacity: 0, x: -10 });
      tl.to(counter, { opacity: 1, x: 0, duration: 0.45 }, 0.55);
    }

    return tl;
  }, []);

  // ── Animate slide content out ──
  const animateOut = useCallback((slideEl: HTMLElement) => {
    const overlay = slideEl.querySelector('.hero-slide-overlay');
    const product = slideEl.querySelector('.hero-slide-product');
    const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
    const desc = slideEl.querySelector('.hero-slide-desc');
    const cta = slideEl.querySelector('.hero-slide-cta');
    const counter = slideEl.querySelector('.hero-slide-counter');

    const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });

    if (titleLines.length) tl.to(titleLines, { opacity: 0, y: -8, duration: 0.45, stagger: 0.02 }, 0);
    if (desc) tl.to(desc, { opacity: 0, duration: 0.4 }, 0);
    if (cta) tl.to(cta, { opacity: 0, duration: 0.36 }, 0);
    if (counter) tl.to(counter, { opacity: 0, duration: 0.3 }, 0);
    if (product) tl.to(product, { opacity: 0, scale: 1.03, duration: 0.45 }, 0);
    if (overlay) tl.to(overlay, { opacity: 0, duration: 0.45 }, 0);

    return tl;
  }, []);

  // ── Reset autoplay timer ──
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      goToSlide(currentIdxRef.current + 1);
    }, 8000);
  }, []);

  // ── Transition to a slide ──
  const goToSlide = useCallback((nextIdx: number) => {
    const wgl = wglRef.current;
    if (!wgl || transitioningRef.current) return;

    const curIdx = currentIdxRef.current;
    const idx = ((nextIdx % slides.length) + slides.length) % slides.length;
    if (idx === curIdx) return;

    transitioningRef.current = true;

    const currentSlide = slideElsRef.current[curIdx];
    const nextSlide = slideElsRef.current[idx];

    // 1. Animate current content OUT
    if (currentSlide) {
      animateOut(currentSlide);
    }

    // 2. Start WebGL water distortion
    wgl.beginTransition(idx);

    // 3. Drive wgl.progress from 0 → 1
    const progressObj = { value: 0 };
    const master = gsap.timeline({
      onComplete: async () => {
        // Finalize WebGL
        await wgl.completeTransition(idx);
        transitioningRef.current = false;
        currentIdxRef.current = idx;
        setCurrentIdx(idx);

        // Show new slide (CSS opacity + z-index)
        showSlide(idx);

        // Animate new slide content in
        requestAnimationFrame(() => {
          if (nextSlide) {
            animateIn(nextSlide);
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
  }, [animateOut, animateIn, showSlide, resetAutoplay]);

  // ── Navigation ──
  const goNext = useCallback(() => {
    goToSlide(currentIdxRef.current + 1);
  }, [goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentIdxRef.current - 1);
  }, [goToSlide]);

  // ── Initialize WebGL ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let wgl: WaterTransition;
    try {
      wgl = new WaterTransition(canvas);
      wglRef.current = wgl;
    } catch {
      console.warn('WebGL not supported');
      return;
    }

    // Load all background images
    const bgUrls = slides.map((s) => s.bg);
    wgl.loadImages(bgUrls).then(() => {
      wgl.showSlide(0);
      showSlide(0);

      // Animate first slide content in
      const firstSlide = slideElsRef.current[0];
      if (firstSlide) {
        requestAnimationFrame(() => {
          animateIn(firstSlide);
        });
      }

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

  return (
    <section className="hero-slider-wrap" id="hero-slider">
      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="hero-webgl-canvas"
        aria-hidden="true"
      />

      {/* Content Overlays */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => { slideElsRef.current[i] = el; }}
          className="hero-slide hero-slide--overlay"
          style={{
            '--accent-color': slide.accent,
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 2 : 1,
            pointerEvents: i === 0 ? 'auto' : 'none',
          } as React.CSSProperties}
        >
          <div className="hero-slide-overlay" style={{ opacity: 1 }} />

          <div className="hero-slide-content">
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

            <div className="hero-slide-product-wrap">
              <img
                src={slide.product}
                alt={slide.title.replace('\n', ' ')}
                className="hero-slide-product"
                draggable={false}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

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

      {/* Navigation */}
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