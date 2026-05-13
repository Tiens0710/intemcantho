"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

type Props = {
  images: string[];
  alt: string;
};

export default function ProductLayer({ images, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  // Set ref callback
  const setImageRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      imageRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const q = gsap.utils.selector(container);
    const ctx = gsap.context(() => {});

    // ─── Floating Effect (yoyo infinite) ───
    imageRefs.current.forEach((el, i) => {
      if (!el) return;
      const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: i * 0.4 });
      tl.to(el, {
        y: -12 - i * 6,
        duration: 2.5 + i * 0.3,
        ease: "power1.inOut",
      });
      ctx.add(() => tl.kill());
    });

    // ─── Mouse-Tracking Parallax with quickTo ───
    const xSetters = imageRefs.current.map((el) =>
      el ? gsap.quickTo(el, "x", { duration: 0.8, ease: "power2.out" }) : null
    );
    const ySetters = imageRefs.current.map((el) =>
      el ? gsap.quickTo(el, "y", { duration: 0.8, ease: "power2.out" }) : null
    );

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Map to -1..1
      const mx = ((e.clientX - cx) / (rect.width / 2));
      const my = ((e.clientY - cy) / (rect.height / 2));
      mouseRef.current.x = mx;
      mouseRef.current.y = my;

      // Apply parallax — different depth per image
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        const depth = 15 + i * 10;
        // quickTo handles smooth interpolation; we set target, not raw value
        xSetters[i]?.(mx * depth);
        ySetters[i]?.(my * depth);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ─── Initial Reveal ───
    gsap.fromTo(
      container,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.6, ease: "power3.out" }
    );

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      style={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-lg h-[400px] md:h-[500px]">
        {images.map((src, i) => {
          const isFirst = i === 0;
          return (
            <div
              key={src + i}
              ref={setImageRef(i)}
              className={`absolute ${
                isFirst
                  ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[340px] md:h-[340px]"
                  : "right-[5%] bottom-[10%] w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
              }`}
              style={{ willChange: "transform" }}
            >
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden ${
                  isFirst
                    ? "shadow-2xl shadow-amber-900/20"
                    : "shadow-xl shadow-amber-900/10 rotate-3"
                }`}
              >
                {/* Glassmorphism border */}
                <div className="absolute inset-0 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-sm z-10" />
                <img
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}