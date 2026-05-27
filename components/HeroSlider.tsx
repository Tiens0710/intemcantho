'use client';

/**
 * HeroSlider — Rebuilt with guaranteed no-flash architecture.
 *
 * Key insight: only the ACTIVE slide renders product content.
 * A single "animator" div handles the entering image overlay,
 * positioned absolutely and animated with CSS transitions.
 * This eliminates all stale-image-flash bugs by design.
 */

import { useRef, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { slides as defaultSlides } from '@/lib/data/slides';
import type { SlideData } from '@/lib/data/slides';
import { WaterTransition } from '@/lib/webgl/WaterTransition';

/** Progress value where wave edge is at screen center.
 *  edge = 1.1 - p * 1.4  →  edge = 0.5  →  p = 0.4286 */
const WAVE_MIDPOINT_P = 0.4286;

interface HeroSliderProps {
  slides?: SlideData[];
  /** ID for the hero section (for anchor linking) */
  sectionId?: string;
}

export default function HeroSlider({ slides: slidesProp, sectionId }: HeroSliderProps) {
  const slides = slidesProp ?? defaultSlides;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wglRef = useRef<WaterTransition | null>(null);
  const activeIdxRef = useRef(0);
  const transitioningRef = useRef(false);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, forceRender] = useState(0);

  // Product image animator state
  const [productAnim, setProductAnim] = useState<{
    mode: 'idle' | 'exiting' | 'entering-offscreen' | 'entering';
    slideIdx: number;  // which slide's image to show during entering
  }>({ mode: 'idle', slideIdx: 0 });

  // Track active text slide visibility for slide-up/fade transitions
  // 'visible' = settled at center
  // 'fading-out' = sliding up + fading out (old text)
  // 'entering-offscreen' = positioned below, invisible (new text, no transition)
  // 'entering' = sliding up from below + fading in (new text)
  const [textFade, setTextFade] = useState<'visible' | 'fading-out' | 'entering-offscreen' | 'entering'>('visible');

  // ── Advance entering-offscreen → entering on next frame ──
  useEffect(() => {
    if (productAnim.mode !== 'entering-offscreen') return;
    const raf = requestAnimationFrame(() => {
      setProductAnim(prev => prev.mode === 'entering-offscreen'
        ? { ...prev, mode: 'entering' }
        : prev
      );
    });
    return () => cancelAnimationFrame(raf);
  }, [productAnim.mode]);

  // ── Advance text entering-offscreen → entering on next frame ──
  useEffect(() => {
    if (textFade !== 'entering-offscreen') return;
    const raf = requestAnimationFrame(() => {
      setTextFade(prev => prev === 'entering-offscreen' ? 'entering' : prev);
    });
    return () => cancelAnimationFrame(raf);
  }, [textFade]);

  // ── Go to specific slide ──
  const goTo = useCallback((targetIdx: number) => {
    const wgl = wglRef.current;
    if (!wgl || transitioningRef.current) return;

    const idx = ((targetIdx % slides.length) + slides.length) % slides.length;
    if (idx === activeIdxRef.current) return;

    transitioningRef.current = true;
    const oldIdx = activeIdxRef.current;

    // Start WebGL water transition on background
    wgl.beginTransition(idx);

    // Start text exit: slide up + fade out
    setTextFade('fading-out');

    // Start product image exit animation
    setProductAnim({ mode: 'exiting', slideIdx: oldIdx });

    // Drive progress 0 → 1 for WebGL
    const startTime = performance.now();
    const duration = 1800; // ms — faster transition

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const p = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2;

      wgl.progress = p;

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        // WebGL transition complete — now trigger BOTH image + text enter together
        wgl.completeTransition(idx);
        activeIdxRef.current = idx;
        transitioningRef.current = false;

        // Position both image and text offscreen (no transition), then animate in
        setProductAnim({ mode: 'entering-offscreen', slideIdx: idx });
        setTextFade('entering-offscreen');

        forceRender((n) => n + 1);

        // After entering animation completes, reset to idle
        setTimeout(() => {
          setProductAnim({ mode: 'idle', slideIdx: idx });
          setTextFade('visible');
        }, 800);

        // Reset autoplay
        if (autoplayRef.current) clearTimeout(autoplayRef.current);
        autoplayRef.current = setTimeout(() => {
          goTo(activeIdxRef.current + 1);
        }, 5000);
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
      }, 5000);
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

  // Current active slide
  const activeSlide = slides[activeIdxRef.current];
  const isCustomImageHero = activeSlide.custom?.type === 'imageHero';
  const isProductVariant = activeSlide.custom?.variant === 'product';

  // Product image styles based on anim state
  const getProductImgStyle = (mode: typeof productAnim.mode): React.CSSProperties => {
    switch (mode) {
      case 'exiting':
        return {
          transform: 'translateX(-150px) scale(0.95)',
          opacity: 0,
          transition: 'transform 0.8s cubic-bezier(0.55, 0, 1, 0.45), opacity 0.5s ease',
        };
      case 'entering-offscreen':
        // Instant jump to off-screen right, no transition
        return {
          transform: 'translateX(150px) scale(0.95)',
          opacity: 0,
          transition: 'none',
        };
      case 'entering':
        // Smooth slide-in from right to center
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
        };
      case 'idle':
      default:
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: 'none',
        };
    }
  };

  // Text animation styles based on fade state
  const getTextAnimStyle = (): React.CSSProperties => {
    switch (textFade) {
      case 'fading-out':
        // Old text: slide up + fade out, clipped by overflow:hidden
        return {
          transform: 'translateY(-60px)',
          opacity: 0,
          transition: 'transform 0.7s cubic-bezier(0.55, 0, 1, 0.45), opacity 0.5s ease',
        };
      case 'entering-offscreen':
        // New text: position below, invisible, no transition (instant jump)
        return {
          transform: 'translateY(60px)',
          opacity: 0,
          transition: 'none',
        };
      case 'entering':
        // New text: slide up from below into view
        return {
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
        };
      case 'visible':
      default:
        return {
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'none',
        };
    }
  };

  return (
    <section className="hero-slider-wrap" id={sectionId || "hero-slider"}>
      {/* WebGL Canvas — renders background transitions */}
      <canvas ref={canvasRef} className="hero-webgl-canvas" aria-hidden="true" />

      {/* Content Overlay — single instance, always shows active slide */}
      <div
        className="hero-slide-content-wrap"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          pointerEvents: 'auto',
        }}
      >
        {/* Dark gradient overlay — only for non-imageHero slides */}
        {!isCustomImageHero && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(90deg, rgba(34,30,26,0.55) 0%, rgba(34,30,26,0.3) 35%, rgba(34,30,26,0.12) 65%, rgba(34,30,26,0) 100%)',
              pointerEvents: 'none',
            }}
          />
        )}

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
            height: '100%',
          }}
          className="hero-grid-responsive"
        >
          {/* Left: Text — always shows active slide, with slide-up/fade animation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0',
              overflow: 'visible',
            }}
            className="hero-text-responsive"
          >
            <div style={getTextAnimStyle()}>
              {activeSlide.custom?.type === 'imageHero' ? (
                <div style={{ position: 'relative', maxWidth: '640px' }}>
                  {activeSlide.custom.logo && (
                    <img
                      src={activeSlide.custom.logo}
                      alt="Intem logo"
                      className="hero-custom-logo"
                      style={{ zIndex: 2 }}
                      draggable={false} loading="lazy" decoding="async"
                    />
                  )}
                  {activeSlide.custom.header && (
                    <img
                      src={activeSlide.custom.header}
                      alt="In tem Can Tho"
                      className="hero-custom-header"
                      style={{ display: 'block' }}
                      draggable={false} loading="lazy" decoding="async"
                    />
                  )}
                  {activeSlide.custom.badges && (
                    <img
                      src={activeSlide.custom.badges}
                      alt="" aria-hidden="true"
                      className="hero-custom-badges"
                      style={{ display: 'block', animation: 'heroFloatBadges 5s ease-in-out infinite' }}
                      draggable={false} loading="lazy" decoding="async"
                    />
                  )}
                  {activeSlide.custom.stats && (
                    <img
                      src={activeSlide.custom.stats}
                      alt="" aria-hidden="true"
                      className="hero-custom-stats"
                      style={{ display: 'block' }}
                      draggable={false} loading="lazy" decoding="async"
                    />
                  )}
                </div>
              ) : (
                <>
                  {/* Subtitle tag */}
                  {activeSlide.subtitle && (
                    <div style={{
                      display: 'inline-block',
                      fontSize: '0.68rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#E8C06A',
                      fontWeight: 500,
                      fontFamily: "'Nunito', sans-serif",
                      border: '1px solid rgba(201,150,58,.4)',
                      padding: '0.35em 1em',
                      marginBottom: '1.2rem',
                      width: 'fit-content',
                    }}>
                      {activeSlide.subtitle}
                    </div>
                  )}
                  {/* Title */}
                  <div style={{ margin: '0 0 1.5rem 0' }}>
                    {activeSlide.title.split('\n').map((line, li) => (
                      <div key={li} style={{
                        fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
                        fontSize: li === 0 ? 'clamp(2rem, 7.5vw, 6.6rem)' : 'clamp(1.7rem, 7.3vw, 6.1rem)',
                        fontWeight: li === 0 ? 700 : 400, color: li === 0 ? '#fff' : '#efe7d8',
                        lineHeight: li === 0 ? 0.95 : 1, textTransform: li === 1 ? 'uppercase' : 'none',
                        letterSpacing: li === 1 ? '0.06em' : 'normal', textShadow: '0 4px 30px rgba(0,0,0,.4)',
                      }}>
                        {line}
                      </div>
                    ))}
                  </div>
                  {/* Description */}
                  {activeSlide.description && (
                    <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,.75)', maxWidth: '580px', marginBottom: '2rem' }}>
                      {activeSlide.description}
                    </p>
                  )}
                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    {activeSlide.cta && (
                      <Link href={activeSlide.ctaHref || '/van-phong'} style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        padding: '16px 40px', border: '1px solid rgba(233,226,214,0.5)', borderRadius: '999px',
                        color: '#f7f2e9', fontFamily: "'Nunito', sans-serif", fontSize: '1rem', fontWeight: 500,
                        letterSpacing: '0.04em', cursor: 'pointer',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(217,207,189,0.08))',
                        boxShadow: '0 14px 34px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', width: 'fit-content',
                        transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                      }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(247,242,233,0.78)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(233,226,214,0.5)'; }}>
                        {activeSlide.cta}
                      </Link>
                    )}
                    {activeSlide.cta2 && (
                      <Link href={activeSlide.cta2Href || '#'} style={{
                        color: 'rgba(255,255,255,.75)', fontSize: '0.9rem', fontWeight: 500,
                        letterSpacing: '0.05em', textDecoration: 'underline', textUnderlineOffset: '4px',
                        fontFamily: "'Nunito', sans-serif",
                        transition: 'color 0.2s ease',
                      }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.75)'; }}>
                        {activeSlide.cta2}
                      </Link>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: Product Image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'relative',
            height: '100%',
            overflow: 'visible',
          }} className="hero-product-responsive">
            {activeSlide.custom?.type === 'imageHero' ? (
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', ...getProductImgStyle(productAnim.mode) }}>
                {/* Background circle */}
                <div 
                  className="hero-bg-circle"
                  style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    aspectRatio: '1 / 1', borderRadius: '999px',
                    backgroundImage: activeSlide.custom.circle ? `url(${activeSlide.custom.circle})` : 'radial-gradient(circle at 50% 45%, #f9d2a8 0%, #f1b877 60%, #e79d58 100%)',
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', zIndex: 0,
                  }} 
                />
                {/* Left floating image — vị trí lấy từ slide data */}
                {slides[productAnim.slideIdx].custom?.leftFloat && (
                  <img
                    src={slides[productAnim.slideIdx].custom?.leftFloat}
                    alt=""
                    aria-hidden="true"
                    className="hero-float-img-left"
                    style={{
                      position: 'absolute', transform: 'translateY(-50%)',
                      width: 'clamp(120px, 18vw, 240px)', height: 'auto', objectFit: 'contain',
                      zIndex: 3, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
                      animation: 'heroFloatY 4s ease-in-out infinite',
                      ...slides[productAnim.slideIdx].custom?.floatStyle?.leftPos,
                    }}
                    draggable={false} loading="lazy" decoding="async"
                  />
                )}
                {/* Right floating image — vị trí lấy từ slide data */}
                {slides[productAnim.slideIdx].custom?.rightFloat && (
                  <img
                    src={slides[productAnim.slideIdx].custom?.rightFloat}
                    alt=""
                    aria-hidden="true"
                    className="hero-float-img-right"
                    style={{
                      position: 'absolute', transform: 'translateY(-50%)',
                      width: 'clamp(120px, 18vw, 240px)', height: 'auto', objectFit: 'contain',
                      zIndex: 3, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
                      animation: 'heroFloatY 4s ease-in-out infinite 0.5s',
                      ...slides[productAnim.slideIdx].custom?.floatStyle?.rightPos,
                    }}
                    draggable={false} loading="lazy" decoding="async"
                  />
                )}
                {/* Product/Character image */}
                <img
                  key={productAnim.slideIdx}
                  src={slides[productAnim.slideIdx].product}
                  alt={activeSlide.title.replace('\n', ' ')}
                  className={`hero-main-product-img ${isProductVariant ? 'is-product-variant' : ''}`}
                  style={{
                    position: 'relative', zIndex: 2, width: 'auto',
                    objectFit: 'contain', filter: 'drop-shadow(0 18px 36px rgba(0,0,0,0.18))',
                    transform: isProductVariant ? 'scale(1.1)' : undefined,
                  }}
                  draggable={false} loading="lazy" decoding="async"
                />
              </div>
            ) : (
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', ...getProductImgStyle(productAnim.mode) }}>
                {/* Glow behind product */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: 'clamp(280px, 40vw, 520px)', aspectRatio: '1 / 1', borderRadius: '999px',
                  background: 'radial-gradient(circle at 50% 45%, rgba(201,150,58,0.25) 0%, rgba(201,150,58,0.08) 50%, transparent 70%)',
                  filter: 'blur(30px)', zIndex: 0,
                }} />
                {/* Product image */}
                <img
                  key={productAnim.slideIdx}
                  src={slides[productAnim.slideIdx].product}
                  alt={activeSlide.title.replace('\n', ' ')}
                  className="hero-main-product-img"
                  style={{
                    position: 'relative', zIndex: 2,
                    width: 'auto', maxWidth: 'clamp(320px, 42vw, 580px)',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.35))',
                  }}
                  draggable={false} loading="lazy" decoding="async"
                />
              </div>
            )}
          </div>
        </div>

        {/* Slide Counter */}
        <div style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          alignItems: 'baseline',
        }} className="hero-counter-responsive">
          <span style={{
            fontFamily: "'Nunito', Arial, Helvetica, sans-serif",
            fontSize: '3.8rem',
            color: '#e0d6c5',
            fontWeight: 400,
            lineHeight: 1,
          }}>
            {String(activeIdxRef.current + 1).padStart(2, '0')}
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

      {/* Dot Navigation — frosted glass effect */}
      <div
        className="hero-dots"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 20px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1.5px solid rgba(154,91,36,0.4)',
          boxShadow: '0 4px 16px rgba(154,91,36,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        {slides.map((_, i) => {
          const isActive = i === activeIdxRef.current;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: isActive ? '28px' : '10px',
                height: '10px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: isActive
                  ? '#9A5B24'
                  : 'rgba(154,91,36,0.25)',
                transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease',
                padding: 0,
                outline: 'none',
              }}
            />
          );
        })}
      </div>

      {/* Arrow Navigation — left/right */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="hero-arrow-btn hero-arrow-left"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="hero-arrow-btn hero-arrow-right"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

    </section>
  );
}
