/**
 * Shared API Types — dùng chung cho toàn bộ dự án
 * 
 * Bao gồm: ApiResponse, Pagination, Media, Product, Category, Cart, Order...
 */

// ═══════════════════════════════════════════════════════════════════════════════
// API RESPONSE (EC/EM/DT)
// ═══════════════════════════════════════════════════════════════════════════════

/** Standard API response envelope — EC/EM/DT format */
export interface ApiResponse<T = unknown> {
  /** Error Code: 0 = success, non-zero = error */
  EC: number;
  /** Error Message: human-readable description */
  EM: string;
  /** Data payload: null on error */
  DT: T | null;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════════════════════════════════════════════

/** Pagination metadata */
export interface PaginationMeta {
  /** Current page number (1-based) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items */
  total: number;
  /** Total number of pages */
  totalPages: number;
}

/** Paginated data wrapper */
export interface PaginatedData<T> {
  items: T[];
  pagination: PaginationMeta;
}

/** Query params for paginated requests */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  q?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// MEDIA
// ═══════════════════════════════════════════════════════════════════════════════

/** Media file (image, document, etc.) */
export interface Media {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  size?: number; // in bytes
  thumbnailUrl?: string;
}

/** Responsive image with multiple sizes */
export interface ResponsiveImage {
  original: string;
  thumbnail?: string;   // ~150px
  small?: string;       // ~400px
  medium?: string;      // ~800px
  large?: string;       // ~1200px
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT
// ═══════════════════════════════════════════════════════════════════════════════

export type PersonaType = "cafe-owner" | "office-worker" | "fashion-lover" | null;

/** Product item */
export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
  personas: PersonaType[];
  featured: boolean;
}

/** Product list response data */
export interface ProductListData {
  products: Product[];
  total: number;
}

/** Single product detail */
export interface ProductDetail extends Product {
  subtitle?: string;
  specs?: ProductSpec[];
  sizes?: ProductSize[];
  purposes?: string[];
  gallery?: string[];
  combos?: ComboItem[];
  deliveryDate?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  hasTooltip?: boolean;
}

export interface ProductSize {
  label: string;
  value: string;
}

export interface ComboItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORY
// ═══════════════════════════════════════════════════════════════════════════════

export interface Category {
  slug: string;
  name: string;
  count: number;
}

export interface CategoryListData {
  categories: Category[];
  total: number;
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOMEPAGE
// ═══════════════════════════════════════════════════════════════════════════════

export interface HomepageData {
  recommendedProducts: Product[];
  featuredProducts: Product[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════════════════════════════

export interface CartItem {
  id: string;
  title: string;
  price: number; // in VND (integer), 0 if contact-based pricing
  quantity: number;
  image?: string;
  meta?: CartItemMeta;
}

export interface CartItemMeta {
  size?: string;
  purpose?: string;
  design?: string;
  [key: string]: unknown;
}

// ═══════════════════════════════════════════════════════════════════════════════
// USER & AUTH
// ═══════════════════════════════════════════════════════════════════════════════

export interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  token: string;
  user?: User;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════════════════════

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  logo: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    zalo?: string;
  };
  features: {
    hasCart: boolean;
    hasCheckout: boolean;
    hasPayment: boolean;
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE UPLOAD
// ═══════════════════════════════════════════════════════════════════════════════

export interface UploadedFile {
  id: number;
  original_name: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  created_at: string;
}