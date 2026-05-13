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
  };
}

export const slides: SlideData[] = [
  {
    id: 1,
    bg: '/herobanner/slide1/background.jpeg',
    product: '/herobanner/slide1/nhanvat1.png',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
      logo: '/herobanner/slide1/logo.png',
      header: '/herobanner/slide1/header1.png',
      badges: '/herobanner/slide1/component1.png',
      stats: '/herobanner/slide1/component2.png',
      circle: '/herobanner/slide1/background_nhanvat.png',
    },
  },
  {
    id: 2,
    bg: '/herobanner/slide2/background.jpeg',
    product: '/herobanner/slide2/sanpham.png',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
      logo: '/herobanner/slide2/logo.png',
      header: '/herobanner/slide2/header1.png',
      badges: '/herobanner/slide2/component1.png',
      stats: '/herobanner/slide2/component2.png',
      circle: '/herobanner/slide2/background_sanpham.png',
      variant: 'product',
    },
  },
  {
    id: 3,
    bg: '/herobanner/slide3/background.jpeg',
    product: '/herobanner/slide3/nhanvat.png',
    title: 'In tem Can Tho',
    subtitle: '',
    description: '',
    cta: '',
    accent: '#e9c7a3',
    custom: {
      type: 'imageHero',
      logo: '',
      header: '/herobanner/slide3/header1.png',
      badges: '/herobanner/slide3/component1.png',
      stats: '/herobanner/slide3/component2.png',
      circle: '/herobanner/slide3/background_nhanvat.png',
    },
  },
];
