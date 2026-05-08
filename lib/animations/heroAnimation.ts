/**
 * GSAP Hero Slider Animation Engine
 * Creates cinematic timelines for each slide with staggered reveals.
 *
 * - animateSlideIn  → entrance: elements fade/slide in
 * - animateSlideOut → exit: elements blur + fade out (used during water transition)
 * - killSlideAnimation → cleanup
 */

import gsap from 'gsap';

export function animateSlideIn(slideEl: HTMLElement): gsap.core.Timeline {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
  const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
  const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
  const pagination = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

  if (overlay) {
    gsap.set(overlay, { opacity: 0 });
    tl.to(overlay, { opacity: 1, duration: reduceMotion ? 0.35 : 0.8, ease: 'power1.out' }, 0);
  }

  if (product) {
    const isDesktop = window.innerWidth >= 1024;
    const targetX = isDesktop ? '2%' : '0%';
    const targetScale = isDesktop ? 0.98 : 1;

    gsap.set(product, {
      x: targetX,
      scale: targetScale,
      y: reduceMotion ? 0 : 24,
      opacity: 0,
      filter: 'blur(0px)',
    });
    tl.to(product, {
      y: 0,
      x: targetX,
      scale: targetScale,
      opacity: 1,
      filter: 'blur(0px)',
      duration: reduceMotion ? 0.45 : 0.95,
      ease: 'power3.out',
    }, 0.15);
  }

  if (titleLines.length) {
    gsap.set(titleLines, { y: reduceMotion ? 0 : 18, opacity: 0 });
    tl.to(titleLines, {
      y: 0,
      opacity: 1,
      duration: reduceMotion ? 0.35 : 0.7,
      stagger: reduceMotion ? 0 : 0.08,
    }, 0.25);
  }

  if (desc) {
    gsap.set(desc, { y: reduceMotion ? 0 : 12, opacity: 0 });
    tl.to(desc, { y: 0, opacity: 1, duration: reduceMotion ? 0.3 : 0.55 }, 0.4);
  }

  if (cta) {
    gsap.set(cta, { y: reduceMotion ? 0 : 10, opacity: 0 });
    tl.to(cta, { y: 0, opacity: 1, duration: reduceMotion ? 0.3 : 0.45 }, 0.5);
  }

  if (pagination) {
    gsap.set(pagination, { x: reduceMotion ? 0 : -10, opacity: 0 });
    tl.to(pagination, { x: 0, opacity: 1, duration: reduceMotion ? 0.25 : 0.45 }, 0.55);
  }

  return tl;
}

/**
 * Animate slide content OUT during the water distortion transition.
 * Elements blur + scale up slightly + fade out.
 */
export function animateSlideOut(slideEl: HTMLElement): gsap.core.Timeline {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = reduceMotion ? 0.3 : 0.55;
  const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });

  const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
  const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
  const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
  const pagination = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

  // Text + CTA blur out fast
  if (titleLines.length) {
    tl.to(titleLines, { opacity: 0, filter: 'blur(8px)', y: -10, duration: dur, stagger: 0.03 }, 0);
  }
  if (desc) {
    tl.to(desc, { opacity: 0, filter: 'blur(6px)', duration: dur * 0.9 }, 0);
  }
  if (cta) {
    tl.to(cta, { opacity: 0, filter: 'blur(6px)', duration: dur * 0.8 }, 0);
  }
  if (pagination) {
    tl.to(pagination, { opacity: 0, duration: dur * 0.7 }, 0);
  }
  // Product scales up + blurs
  if (product) {
    tl.to(product, { opacity: 0, filter: 'blur(12px)', scale: 1.04, duration: dur }, 0);
  }
  if (overlay) {
    tl.to(overlay, { opacity: 0, duration: dur }, 0);
  }

  return tl;
}

export function killSlideAnimation(slideEl: HTMLElement) {
  gsap.killTweensOf(slideEl.querySelectorAll('*'));
  gsap.killTweensOf(slideEl);
}
