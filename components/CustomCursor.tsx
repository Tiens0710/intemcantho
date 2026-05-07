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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-wrap" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
