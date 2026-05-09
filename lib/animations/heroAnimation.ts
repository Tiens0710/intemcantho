/**
 * GSAP Hero Slider Animation Engine
 * Creates cinematic timelines for each slide with staggered reveals.
 *
 * **CRITICAL PATTERN**: Use gsap.fromTo() to explicitly define both START and END states.
 * Never use gsap.from() or rely on CSS values — they cause invisible elements when clearProps resets to CSS defaults.
 */

import gsap from 'gsap';

const SEL = '.hero-slide-overlay, .hero-slide-product, .hero-slide-title-line, .hero-slide-desc, .hero-slide-cta, .hero-slide-counter';

export function animateSlideIn(slideEl: HTMLElement): gsap.core.Timeline {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Kill tweens cũ và force visible trước
  const allEls = slideEl.querySelectorAll(SEL);
  gsap.killTweensOf(allEls);
  // Force tất cả về visible — override mọi CSS/inline style còn sót
  gsap.set(allEls, { opacity: 1, x: 0, y: 0, scale: 1, filter: 'none', visibility: 'visible' });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const overlay = slideEl.querySelector('.hero-slide-overlay') as HTMLElement;
  const product = slideEl.querySelector('.hero-slide-product') as HTMLElement;
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc') as HTMLElement;
  const cta = slideEl.querySelector('.hero-slide-cta') as HTMLElement;
  const pagination = slideEl.querySelector('.hero-slide-counter') as HTMLElement;

  // fromTo: khai báo tường minh start → end, không phụ thuộc CSS
  if (overlay) {
    tl.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: reduceMotion ? 0.35 : 0.8, ease: 'power1.out' },
      0
    );
  }

  if (product) {
    const isDesktop = window.innerWidth >= 1024;
    tl.fromTo(
      product,
      { opacity: 0, y: reduceMotion ? 0 : 24, scale: isDesktop ? 0.98 : 1 },
      { opacity: 1, y: 0, scale: isDesktop ? 0.98 : 1, duration: reduceMotion ? 0.45 : 0.95 },
      0.15
    );
  }

  if (titleLines.length) {
    tl.fromTo(
      titleLines,
      { opacity: 0, y: reduceMotion ? 0 : 18 },
      { opacity: 1, y: 0, duration: reduceMotion ? 0.35 : 0.7, stagger: reduceMotion ? 0 : 0.08 },
      0.25
    );
  }

  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: reduceMotion ? 0 : 12 },
      { opacity: 1, y: 0, duration: reduceMotion ? 0.3 : 0.55 },
      0.4
    );
  }

  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, y: reduceMotion ? 0 : 10 },
      { opacity: 1, y: 0, duration: reduceMotion ? 0.3 : 0.45 },
      0.5
    );
  }

  if (pagination) {
    tl.fromTo(
      pagination,
      { opacity: 0, x: reduceMotion ? 0 : -10 },
      { opacity: 1, x: 0, duration: reduceMotion ? 0.25 : 0.45 },
      0.55
    );
  }

  return tl;
}

/**
 * Animate slide content OUT during transition.
 * Only use opacity + transform; NO filter to avoid inline style pollution.
 */
export function animateSlideOut(slideEl: HTMLElement): gsap.core.Timeline {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = reduceMotion ? 0.3 : 0.45;
  const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });

  const overlay = slideEl.querySelector('.hero-slide-overlay');
  const product = slideEl.querySelector('.hero-slide-product');
  const titleLines = slideEl.querySelectorAll('.hero-slide-title-line');
  const desc = slideEl.querySelector('.hero-slide-desc');
  const cta = slideEl.querySelector('.hero-slide-cta');
  const pagination = slideEl.querySelector('.hero-slide-counter');

  if (titleLines.length) tl.to(titleLines, { opacity: 0, y: -8, duration: dur, stagger: 0.02 }, 0);
  if (desc) tl.to(desc, { opacity: 0, duration: dur * 0.9 }, 0);
  if (cta) tl.to(cta, { opacity: 0, duration: dur * 0.8 }, 0);
  if (pagination) tl.to(pagination, { opacity: 0, duration: dur * 0.7 }, 0);
  if (product) tl.to(product, { opacity: 0, scale: 1.03, duration: dur }, 0);
  if (overlay) tl.to(overlay, { opacity: 0, duration: dur }, 0);

  return tl;
}

export function killSlideAnimation(slideEl: HTMLElement) {
  const els = slideEl.querySelectorAll(SEL);
  gsap.killTweensOf(els);
  // Reset về visible — slide cũ ẩn đi bởi setSlideVisible (visibility:hidden)
  gsap.set(els, { clearProps: 'all' });
}
