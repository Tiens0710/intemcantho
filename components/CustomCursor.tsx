'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isSmallScreen = window.innerWidth < 1024;
    if (prefersReducedMotion || isTouchDevice || isSmallScreen) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Signal CSS to hide native cursor only when custom cursor is confirmed active
    document.body.classList.add('custom-cursor-active');

    // Dot chạy nhanh, bám sát chuột gần như ngay lập tức
    const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power3' });
    const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power3' });

    // Vòng tròn mờ chạy chậm hơn tạo hiệu ứng trễ (lag)
    const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.2, ease: 'power3.out' });
    const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.2, ease: 'power3.out' });

    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        hasMoved = true;
      }
      dotXTo(e.clientX);
      dotYTo(e.clientY);
      ringXTo(e.clientX);
      ringYTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .custom-cursor-wrap {
          position: fixed;
          top: -25px;
          left: -25px;
          z-index: 9998;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
          pointer-events: none;
          opacity: 0;
        }

        .custom-cursor-dot {
          position: fixed;
          top: -2px;
          left: -2px;
          z-index: 9999;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #000;
          pointer-events: none;
          opacity: 0;
        }

        @media (pointer: fine) {
          body.custom-cursor-active,
          body.custom-cursor-active a,
          body.custom-cursor-active button,
          body.custom-cursor-active input,
          body.custom-cursor-active textarea,
          body.custom-cursor-active select,
          body.custom-cursor-active .swiper-slide {
            cursor: none !important;
          }
        }
      `}</style>
      <div ref={ringRef} className="custom-cursor-wrap" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}