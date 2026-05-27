/**
 * Slide data for HeroSlider
 * Each slide defines background, product image, text content and accent color
 */

export interface SlideData {
  id: number;
  bg: string;
  product: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  /** Link destination for CTA button. Defaults to /van-phong if not set. */
  ctaHref?: string;
  /** Secondary CTA text (e.g. "Báo giá miễn phí") */
  cta2?: string;
  /** Link destination for secondary CTA button */
  cta2Href?: string;
  accent: string;
  custom?: {
    type: 'imageHero';
    logo: string;
    header: string;
    badges: string;
    stats: string;
    circle: string;
    /** 'character' = nhân vật, 'product' = sản phẩm (hiển thị lớn hơn) */
    variant?: 'character' | 'product';
    /** Ảnh nổi bên trái nhân vật */
    leftFloat?: string;
    /** Ảnh nổi bên phải nhân vật */
    rightFloat?: string;
    /** Style riêng cho ảnh floating của từng slide */
    floatStyle?: {
      leftPos?: Record<string, string>;
      rightPos?: Record<string, string>;
    };
  };
}

export const slides: SlideData[] = [
  {
    id: 1,
    bg: '/herobanner/slide1/background.webp',
    product: '/herobanner/slide1/nhanvatchinh.webp',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
        logo: '/herobanner/slide1/logo.webp',
        header: '/herobanner/slide1/header1.webp',
        badges: '/herobanner/slide1/component1.webp',
        stats: '',
        circle: '/herobanner/slide1/background_nhanvat.png',
        leftFloat: '/herobanner/slide1/component2_1.webp',
        rightFloat: '/herobanner/slide1/component2_2.webp',
      floatStyle: {
        leftPos: { left: '-50%', top: '30%' },
        rightPos: { right: '-50%', top: '70%' },
      },
    },
  },
  {
    id: 2,
    bg: '/herobanner/slide2/background.webp',
    product: '/herobanner/slide2/sanpham.webp',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
      logo: '',
        header: '/herobanner/slide2/header1.webp',
        badges: '/herobanner/slide2/component1.webp',
        stats: '',
        circle: '/herobanner/slide2/background_sanpham.png',
        variant: 'product',
        leftFloat: '/herobanner/slide2/component2_1.webp',
        rightFloat: '/herobanner/slide2/component2_2.webp',
      floatStyle: {
        leftPos: { left: '-35%', top: '30%' },
        rightPos: { right: '-30%', top: '70%' },
      },
    },
  },
  {
    id: 3,
    bg: '/herobanner/slide3/background.webp',
    product: '/herobanner/slide3/nhanvat.webp',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
      logo: '',
        header: '/herobanner/slide3/header1.webp',
        badges: '/herobanner/slide3/component1.webp',
        stats: '',
        circle: '/herobanner/slide3/background_nhanvat.png',
        leftFloat: '/herobanner/slide3/component2_1.webp',
        rightFloat: '/herobanner/slide3/component2_2.webp',
      floatStyle: {
        leftPos: { left: '-20%', top: '30%' },
        rightPos: { right: '-20%', top: '80%' },
      },
    },
  },
];
