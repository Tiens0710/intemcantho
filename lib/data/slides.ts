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
}

export const slides: SlideData[] = [
  {
    id: 1,
    bg: '/bg2.jpeg',
    product: '/obj2.png',
    title: 'Bold\nARTISTRY',
    subtitle: '',
    description:
      'Celebrate your modern romance with bold, artistic cakes that make a statement.',
    cta: 'Discover Modern Styles',
    accent: '#d9cfbd',
  },
  {
    id: 2,
    bg: '/bg3.jpeg',
    product: '/obj3.png',
    title: 'Modern\nROMANCE',
    subtitle: '',
    description:
      'Clean lines, soft tones, and delicate textures crafted for the modern couple.',
    cta: 'Explore Modern Romance',
    accent: '#d4c8b6',
  },
  {
    id: 3,
    bg: '/bg1.jpeg',
    product: '/obj1.png',
    title: 'Timeless\nELEGANCE',
    subtitle: '',
    description:
      'Refined silhouettes and subtle finishes made to feel classic and enduring.',
    cta: 'View Timeless Designs',
    accent: '#cbbba4',
  },
];
