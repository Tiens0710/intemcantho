/**
 * GSAP Hero Slider Animation Engine
 * Creates cinematic timelines for each slide with staggered reveals
 */

import gsap from 'gsap';

export function animateSlideIn(slideEl: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const bg = slideEl.querySelector('.hero-slide-bg') as HTMLElement;
  const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
  const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
  const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
  const pagination = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

  if (bg) {
    gsap.set(bg, { scale: 1.15, opacity: 0 });
    tl.to(bg, { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }, 0);
  }

  if (overlay) {
    gsap.set(overlay, { opacity: 0 });
    tl.to(overlay, { opacity: 1, duration: 1.5, ease: 'power1.out' }, 0);
  }

  if (product) {
    gsap.set(product, { y: 60, opacity: 0 });
    tl.to(product, {
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: 'power3.out',
    }, 0.2);
  }

  if (titleLines.length) {
    gsap.set(titleLines, { y: 40, opacity: 0 });
    tl.to(titleLines, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
    }, 0.4);
  }

  if (desc) {
    gsap.set(desc, { y: 20, opacity: 0 });
    tl.to(desc, { y: 0, opacity: 1, duration: 1 }, 0.8);
  }

  if (cta) {
    gsap.set(cta, { y: 20, opacity: 0 });
    tl.to(cta, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, 1);
  }

  if (pagination) {
    gsap.set(pagination, { x: -20, opacity: 0 });
    tl.to(pagination, { x: 0, opacity: 1, duration: 0.8 }, 1.2);
  }

  return tl;
}

export function killSlideAnimation(slideEl: HTMLElement) {
  gsap.killTweensOf(slideEl.querySelectorAll('*'));
  gsap.killTweensOf(slideEl);
}
