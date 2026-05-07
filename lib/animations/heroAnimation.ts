/**
 * GSAP Hero Slider Animation Engine
 * Creates cinematic timelines for each slide with staggered reveals
 *
 * FIX: Desktop product transform (translateX 2%, scale 0.98) is now managed
 * entirely inside GSAP to prevent CSS/GSAP transform conflict that caused
 * a visual jump when GSAP overwrote the CSS transform with inline styles.
 */

import gsap from 'gsap';

export function animateSlideIn(slideEl: HTMLElement): gsap.core.Timeline {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const bg = slideEl.querySelector('.hero-slide-bg') as HTMLElement;
  const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
  const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
  const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
  const pagination = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

  if (bg) {
    gsap.set(bg, { scale: reduceMotion ? 1 : 1.06, opacity: 0 });
    tl.to(bg, { scale: 1, opacity: 1, duration: reduceMotion ? 0.45 : 1.1, ease: 'power2.out' }, 0);
  }

  if (overlay) {
    gsap.set(overlay, { opacity: 0 });
    tl.to(overlay, { opacity: 1, duration: reduceMotion ? 0.35 : 0.8, ease: 'power1.out' }, 0);
  }

  if (product) {
    // The CSS media query `transform: translateX(2%) scale(0.98)` was removed
    // from globals.css to avoid GSAP overriding it with inline styles.
    // We replicate that positioning here so desktop layout is preserved.
    const isDesktop = window.innerWidth >= 1024;
    const targetX = isDesktop ? '2%' : '0%';
    const targetScale = isDesktop ? 0.98 : 1;

    gsap.set(product, {
      x: targetX,
      scale: targetScale,
      y: reduceMotion ? 0 : 24,
      opacity: 0,
    });
    tl.to(product, {
      y: 0,
      x: targetX,
      scale: targetScale,
      opacity: 1,
      duration: reduceMotion ? 0.45 : 0.95,
      ease: 'power3.out',
    }, 0.1);
  }

  if (titleLines.length) {
    gsap.set(titleLines, { y: reduceMotion ? 0 : 18, opacity: 0 });
    tl.to(titleLines, {
      y: 0,
      opacity: 1,
      duration: reduceMotion ? 0.35 : 0.7,
      stagger: reduceMotion ? 0 : 0.08,
    }, 0.2);
  }

  if (desc) {
    gsap.set(desc, { y: reduceMotion ? 0 : 12, opacity: 0 });
    tl.to(desc, { y: 0, opacity: 1, duration: reduceMotion ? 0.3 : 0.55 }, 0.35);
  }

  if (cta) {
    gsap.set(cta, { y: reduceMotion ? 0 : 10, opacity: 0 });
    tl.to(cta, {
      y: 0,
      opacity: 1,
      duration: reduceMotion ? 0.3 : 0.45,
    }, 0.45);
  }

  if (pagination) {
    gsap.set(pagination, { x: reduceMotion ? 0 : -10, opacity: 0 });
    tl.to(pagination, { x: 0, opacity: 1, duration: reduceMotion ? 0.25 : 0.45 }, 0.5);
  }

  return tl;
}

export function killSlideAnimation(slideEl: HTMLElement) {
  gsap.killTweensOf(slideEl.querySelectorAll('*'));
  gsap.killTweensOf(slideEl);
}
