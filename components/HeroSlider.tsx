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

const SLIDE_CUSTOM_CONTENT: Record<number, {
  badge: string;
  title1: string;
  title2_part1: string;
  title2_part2: string;
  listItems: string;
  floatLeftNumber: string;
  floatLeftLabel: string;
  floatRightNumber: string;
  floatRightLabel: string;
}> = {
  1: {
    badge: "DUKY - PRINTING",
    title1: "ẤN PHẨM VĂN PHÒNG",
    title2_part1: "CHỈN CHU - ",
    title2_part2: "CHUYÊN NGHIỆP",
    listItems: "Name card - Bao thư - Folder - Hồ sơ năng lực",
    floatLeftNumber: "800+",
    floatLeftLabel: "đơn/ngày",
    floatRightNumber: "1000+",
    floatRightLabel: "khách hàng hài lòng"
  },
  2: {
    badge: "DUKY - PRINTING",
    title1: "TEM NHÃN DECAL",
    title2_part1: "SẮC NÉT - ",
    title2_part2: "NỔI BẬT",
    listItems: "Decal giấy - Decal nhựa - Tem cuộn - Tem vỡ",
    floatLeftNumber: "10K+",
    floatLeftLabel: "nhãn/ngày",
    floatRightNumber: "100%",
    floatRightLabel: "chất lượng bền màu"
  },
  3: {
    badge: "DUKY - PRINTING",
    title1: "ẤN PHẨM QUẢNG CÁO",
    title2_part1: "ĐỘC ĐÁO - ",
    title2_part2: "THU HÚT",
    listItems: "Tờ rơi - Standee - Băng rôn - Brochure",
    floatLeftNumber: "500+",
    floatLeftLabel: "chiến dịch/năm",
    floatRightNumber: "5★",
    floatRightLabel: "đánh giá chất lượng"
  }
};

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
                <div style={{ position: 'relative', maxWidth: '680px' }}>
                  {(() => {
                    const content = SLIDE_CUSTOM_CONTENT[activeSlide.id] || SLIDE_CUSTOM_CONTENT[1];
                    return (
                      <div className="hero-slide1-content">
                        <style dangerouslySetInnerHTML={{ __html: `
                          .hero-slide1-content {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 16px !important;
                            text-align: left !important;
                            max-width: 680px !important;
                            position: relative !important;
                            z-index: 10 !important;
                            margin-left: -100px !important;
                          }
                          .hero-slide1-badge {
                            display: inline-block !important;
                            background-color: #E27D2F !important;
                            color: #ffffff !important;
                            font-size: clamp(0.75rem, 1.2vw, 0.95rem) !important;
                            font-weight: 800 !important;
                            text-transform: uppercase !important;
                            letter-spacing: 0.1em !important;
                            padding: 6px 20px !important;
                            border-radius: 9999px !important;
                            width: fit-content !important;
                            font-family: 'Nunito', sans-serif !important;
                            box-shadow: 0 4px 12px rgba(226, 125, 47, 0.25) !important;
                            margin-bottom: 4px !important;
                          }
                          .hero-slide1-title1 {
                             font-family: 'Nunito', sans-serif !important;
                             font-style: italic !important;
                             font-size: clamp(2rem, 3.9vw, 3.4rem) !important;
                             font-weight: 900 !important;
                             color: #FFFFFF !important;
                             text-transform: uppercase !important;
                             line-height: 1.2 !important;
                             letter-spacing: 0.01em !important;
                             text-shadow: 
                               -1.8px -1.8px 0 #C66218,  
                                1.8px -1.8px 0 #C66218,
                               -1.8px  1.8px 0 #C66218,
                                1.8px  1.8px 0 #C66218,
                                2.5px  2.5px 0 #C66218,
                                3.5px  3.5px 0 #C66218,
                                4.5px  4.5px 0 #C66218,
                                5.5px  5.5px 0 #C66218 !important;
                             margin: 0 !important;
                             white-space: nowrap !important;
                           }
                           .hero-slide1-title2 {
                             font-family: 'Arial Black', 'Impact', sans-serif !important;
                             font-size: clamp(1.5rem, 2.9vw, 2.6rem) !important;
                             font-weight: 900 !important;
                             text-transform: uppercase !important;
                             line-height: 1.2 !important;
                             letter-spacing: 0.01em !important;
                             margin: 0 !important;
                             white-space: nowrap !important;
                           }
                           .hero-slide1-title2-part1 {
                             color: #E27D2F !important;
                             -webkit-text-stroke: 1px #E27D2F !important;
                             text-shadow: 2px 2px 0px rgba(0,0,0,0.05) !important;
                             paint-order: stroke fill !important;
                           }
                           .hero-slide1-title2-part2 {
                             color: #1E1E1E !important;
                             -webkit-text-stroke: 1px #1E1E1E !important;
                             text-shadow: 2px 2px 0px rgba(255,255,255,0.2) !important;
                             paint-order: stroke fill !important;
                           }
                          .hero-slide1-list {
                            display: flex !important;
                            align-items: center !important;
                            font-family: 'Nunito', sans-serif !important;
                            font-size: clamp(1rem, 1.8vw, 1.35rem) !important;
                            font-weight: 700 !important;
                            font-style: italic !important;
                            color: #1E1E1E !important;
                            margin-top: 4px !important;
                            margin-bottom: 12px !important;
                          }
                          .hero-slide1-grid {
                            display: grid !important;
                            grid-template-columns: repeat(4, 1fr) !important;
                            gap: 12px !important;
                            width: 100% !important;
                            margin-top: 12px !important;
                          }
                          .hero-slide1-card {
                            display: flex !important;
                            align-items: center !important;
                            gap: 12px !important;
                            background-color: #FFFFFF !important;
                            padding: 14px 18px !important;
                            border-radius: 12px !important;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04) !important;
                            border: 1px solid rgba(0, 0, 0, 0.02) !important;
                          }
                          .hero-slide1-card-icon {
                            color: #E27D2F !important;
                            display: flex !important;
                            align-items: center !important;
                            justify-content: center !important;
                            flex-shrink: 0 !important;
                          }
                          .hero-slide1-card-icon svg {
                            width: 26px !important;
                            height: 26px !important;
                          }
                          .hero-slide1-card-text {
                            display: flex !important;
                            flex-direction: column !important;
                            justify-content: center !important;
                            line-height: 1.25 !important;
                            font-family: 'Nunito', sans-serif !important;
                          }
                          .hero-slide1-card-text span {
                            font-size: 0.92rem !important;
                            font-weight: 700 !important;
                            color: #1E1E1E !important;
                            white-space: nowrap !important;
                          }
                          .hero-slide1-float-card {
                            position: absolute !important;
                            display: flex !important;
                            align-items: center !important;
                            gap: 12px !important;
                            background-color: #FFFFFF !important;
                            padding: 12px 18px !important;
                            border-radius: 16px !important;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
                            border: 1.5px solid rgba(226, 125, 47, 0.15) !important;
                            z-index: 3 !important;
                            animation: heroFloatY 4s ease-in-out infinite !important;
                            cursor: default !important;
                            pointer-events: auto !important;
                          }
                          .hero-slide1-float-card.float-left {
                            animation-delay: 0s !important;
                          }
                          .hero-slide1-float-card.float-right {
                            animation-delay: 0.5s !important;
                          }
                          .hero-slide1-float-card-number {
                            font-family: 'Nunito', sans-serif !important;
                            font-size: 1.45rem !important;
                            font-weight: 900 !important;
                            color: #B7510E !important;
                            line-height: 1 !important;
                          }
                          .hero-slide1-float-card-label {
                            font-family: 'Nunito', sans-serif !important;
                            font-size: 0.78rem !important;
                            font-weight: 700 !important;
                            color: #4A4A4A !important;
                            line-height: 1.2 !important;
                            white-space: nowrap !important;
                          }
                          @media (max-width: 1023px) {
                            .hero-slide1-content {
                              align-items: center !important;
                              text-align: center !important;
                              margin: 0 auto !important;
                            }
                            .hero-slide1-list {
                              justify-content: center !important;
                            }
                            .hero-slide1-grid {
                              grid-template-columns: repeat(2, 1fr) !important;
                              max-width: 500px !important;
                            }
                            .hero-slide1-title1 {
                              white-space: normal !important;
                            }
                            .hero-slide1-title2 {
                              white-space: normal !important;
                            }
                          }
                          @media (max-width: 480px) {
                            .hero-slide1-grid {
                              grid-template-columns: 1fr !important;
                              max-width: 100% !important;
                            }
                          }
                        ` }} />
                        
                        {/* Badge */}
                        <div className="hero-slide1-badge">
                          {content.badge}
                        </div>

                        {/* Line 1: Title 1 */}
                        <h1 className="hero-slide1-title1">
                          {content.title1}
                        </h1>

                        {/* Line 2: Title 2 */}
                        <h2 className="hero-slide1-title2">
                          <span className="hero-slide1-title2-part1">{content.title2_part1}</span>
                          <span className="hero-slide1-title2-part2">{content.title2_part2}</span>
                        </h2>

                        {/* Line 3: List items */}
                        <div className="hero-slide1-list">
                          <svg width="36" height="12" viewBox="0 0 36 12" fill="none" style={{ marginRight: '12px', flexShrink: 0 }}>
                            <path d="M2 3H18" stroke="#E27D2F" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M2 8H26" stroke="#E27D2F" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="32" cy="8" r="2.5" fill="#E27D2F" />
                          </svg>
                          <span>{content.listItems}</span>
                        </div>

                        {/* 4 Feature Cards */}
                        <div className="hero-slide1-grid">
                          {/* Card 1 */}
                          <div className="hero-slide1-card">
                            <div className="hero-slide1-card-icon">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                              </svg>
                            </div>
                            <div className="hero-slide1-card-text">
                              <span>Thiết kế</span>
                              <span>đồng bộ</span>
                            </div>
                          </div>

                          {/* Card 2 */}
                          <div className="hero-slide1-card">
                            <div className="hero-slide1-card-icon">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                              </svg>
                            </div>
                            <div className="hero-slide1-card-text">
                              <span>Nâng tầm</span>
                              <span>thương hiệu</span>
                            </div>
                          </div>

                          {/* Card 3 */}
                          <div className="hero-slide1-card">
                            <div className="hero-slide1-card-icon">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                <circle cx="12" cy="12" r="3" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="hero-slide1-card-text">
                              <span>In sắc nét</span>
                            </div>
                          </div>

                          {/* Card 4 */}
                          <div className="hero-slide1-card">
                            <div className="hero-slide1-card-icon">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                              </svg>
                            </div>
                            <div className="hero-slide1-card-text">
                              <span>Tư vấn</span>
                              <span>tận tâm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
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
                {/* Left floating image or custom HTML block */}
                {slides[productAnim.slideIdx].custom?.leftFloat && (() => {
                  const animSlideId = slides[productAnim.slideIdx].id;
                  const content = SLIDE_CUSTOM_CONTENT[animSlideId];
                  if (content) {
                    return (
                      <div
                        className="hero-slide1-float-card float-left"
                        style={{
                          ...slides[productAnim.slideIdx].custom?.floatStyle?.leftPos,
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: '#E27D2F',
                          color: '#FFFFFF',
                          flexShrink: 0,
                        }}>
                          {animSlideId === 1 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="20" x2="18" y2="10" />
                              <line x1="12" y1="20" x2="12" y2="4" />
                              <line x1="6" y1="20" x2="6" y2="14" />
                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                              <polyline points="16 7 22 7 22 13" />
                            </svg>
                          ) : animSlideId === 2 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                              <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 5L6 9H2v6h4l5 4V5z" />
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                            </svg>
                          )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span className="hero-slide1-float-card-number">{content.floatLeftNumber}</span>
                          <span className="hero-slide1-float-card-label">{content.floatLeftLabel}</span>
                        </div>
                      </div>
                    );
                  }
                  return (
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
                  );
                })()}
                {/* Right floating image or custom HTML block */}
                {slides[productAnim.slideIdx].custom?.rightFloat && (() => {
                  const animSlideId = slides[productAnim.slideIdx].id;
                  const content = SLIDE_CUSTOM_CONTENT[animSlideId];
                  if (content) {
                    return (
                      <div
                        className="hero-slide1-float-card float-right"
                        style={{
                          ...slides[productAnim.slideIdx].custom?.floatStyle?.rightPos,
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: '#E27D2F',
                          color: '#FFFFFF',
                          flexShrink: 0,
                        }}>
                          {animSlideId === 1 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          ) : animSlideId === 2 ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                              <polyline points="9 11 11 13 15 9" />
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span className="hero-slide1-float-card-number">{content.floatRightNumber}</span>
                          <span className="hero-slide1-float-card-label">{content.floatRightLabel}</span>
                        </div>
                      </div>
                    );
                  }
                  return (
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
                  );
                })()}
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
