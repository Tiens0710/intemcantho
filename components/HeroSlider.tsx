'use client';

/**
 * HeroSlider — Completely rebuilt from scratch.
 * Keeps only the WebGL water transition for backgrounds.
 * Content (text + product images) uses simple React state + CSS transitions.
 */

import { useRef, useCallback, useEffect, useState } from 'react';
import { slides } from '@/lib/data/slides';
import { WaterTransition } from '@/lib/webgl/WaterTransition';

export default function HeroSlider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wglRef = useRef<WaterTransition | null>(null);
  const activeIdxRef = useRef(0);
  const transitioningRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, forceRender] = useState(0);

  // ── Go to specific slide ──
  const goTo = useCallback((targetIdx: number) => {
    const wgl = wglRef.current;
    if (!wgl || transitioningRef.current) return;

    const idx = ((targetIdx % slides.length) + slides.length) % slides.length;
    if (idx === activeIdxRef.current) return;

    transitioningRef.current = true;

    // Start WebGL water transition on background
    wgl.beginTransition(idx);

    // Drive progress 0 → 1
    const startTime = performance.now();
    const duration = 3200; // ms

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // ease in-out
      const p = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      wgl.progress = p;

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        // Transition complete
        wgl.completeTransition(idx);
        activeIdxRef.current = idx;
        transitioningRef.current = false;
        forceRender((n) => n + 1); // trigger React re-render
        // Reset autoplay
        if (autoplayRef.current) clearTimeout(autoplayRef.current);
        autoplayRef.current = setTimeout(() => {
          goTo(activeIdxRef.current + 1);
        }, 8000);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  const goNext = useCallback(() => goTo(activeIdxRef.current + 1), [goTo]);
  const goPrev = useCallback(() => goTo(activeIdxRef.current - 1), [goTo]);

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

    const bgUrls = slides.map((s) => s.bg);
    wgl.loadImages(bgUrls).then(() => {
      wgl.showSlide(0);
      // Start autoplay
      autoplayRef.current = setTimeout(() => {
        goTo(1);
      }, 8000);
    });

    const onResize = () => wgl.resize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      wgl.destroy();
      wglRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goTo]);

  return (
    <section className="hero-slider-wrap" id="hero-slider">
      {/* WebGL Canvas — renders background transitions */}
      <canvas ref={canvasRef} className="hero-webgl-canvas" aria-hidden="true" />

      {/* Content Overlays — one per slide */}
      {slides.map((slide, i) => {
        const isActive = i === activeIdxRef.current;
        return (
          <div
            key={slide.id}
            className="hero-slide-content-wrap"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: isActive ? 5 : 1,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.8s ease',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {/* Dark gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background: 'linear-gradient(90deg, rgba(34,30,26,0.55) 0%, rgba(34,30,26,0.3) 35%, rgba(34,30,26,0.12) 65%, rgba(34,30,26,0) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Content Grid */}
            <div
              style={{
                position: 'relative',
                zIndex: 5,
                display: 'grid',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 6rem',
                height: '100%',
                gap: '3rem',
              }}
              className="hero-grid-responsive"
            >
              {/* Left: Text */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0', paddingLeft: '2rem' }} className="hero-text-responsive">
                {/* Title */}
                <div style={{ margin: '0 0 1.5rem 0' }}>
                  {slide.title.split('\n').map((line, li) => (
                    <div
                      key={li}
                      style={{
                        fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                        fontSize: li === 0 ? 'clamp(3.7rem, 7.5vw, 6.6rem)' : 'clamp(3.2rem, 7.3vw, 6.1rem)',
                        fontWeight: 400,
                        color: li === 0 ? '#efe7d8' : '#e3dac8',
                        lineHeight: li === 0 ? 0.85 : 1,
                        textTransform: li === 1 ? 'uppercase' : 'none',
                        letterSpacing: li === 1 ? '0.06em' : 'normal',
                        textShadow: '0 10px 24px rgba(0,0,0,0.25)',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(233,226,214,0.85)',
                  maxWidth: '480px',
                  marginBottom: '2.5rem',
                }}>
                  {slide.description}
                </p>

                {/* CTA Button */}
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 40px',
                    border: '1px solid rgba(233,226,214,0.5)',
                    borderRadius: '999px',
                    color: '#f7f2e9',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(217,207,189,0.08))',
                    boxShadow: '0 14px 34px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    width: 'fit-content',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(247,242,233,0.78)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(233,226,214,0.5)';
                  }}
                >
                  {slide.cta}
                </button>
              </div>

              {/* Right: Product Image */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                height: '100%',
                paddingRight: '40px',
              }} className="hero-product-responsive">
                <img
                  src={slide.product}
                  alt={slide.title.replace('\n', ' ')}
                  style={{
                    width: 'auto',
                    maxWidth: '600px',
                    height: 'auto',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  }}
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Slide Counter */}
            <div style={{
              position: 'absolute',
              bottom: '3rem',
              left: '5.5rem',
              zIndex: 10,
              display: 'flex',
              alignItems: 'baseline',
            }} className="hero-counter-responsive">
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3.8rem',
                color: '#e0d6c5',
                fontWeight: 400,
                lineHeight: 1,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1.35rem',
                color: 'rgba(233,226,214,0.6)',
                marginLeft: '4px',
              }}>
                /{String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        );
      })}

      {/* Navigation */}
      <div className="hero-nav">
        <button className="hero-nav-btn hero-nav-prev" onClick={goPrev} aria-label="Slide trước">TRƯỚC</button>
        <button className="hero-nav-btn hero-nav-next" onClick={goNext} aria-label="Slide sau">SAU</button>
      </div>

    </section>
  );
}