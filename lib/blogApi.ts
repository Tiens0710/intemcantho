/**
 * Blog API Client — Kết nối frontend với backend NestJS blog endpoints
 * 
 * Backend: GET /api/v1/blog → Danh sách bài viết published
 * Backend: GET /api/v1/blog/:slug → Chi tiết bài viết
 * Backend: GET /api/v1/blog/categories → Danh mục blog
 */

import { apiGet } from "./apiClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

// ─── Types từ Backend ────────────────────────────────────────────────────────

export interface BlogPostFromAPI {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string | null;
  coverMediaId: string | null;
  coverMedia: {
    id: string;
    url: string;
    secureUrl?: string;
    fileName?: string;
    altText?: string;
    title?: string;
  } | null;
  status: string;
  authorId: string | null;
  author: {
    id: string;
    fullName: string;
    email: string;
  } | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  categories: {
    id: string;
    name: string;
    slug: string;
    status: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
    type: string;
  }[];
  seo?: unknown;
}

export interface BlogListResponse {
  data: BlogPostFromAPI[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface BlogCategoryFromAPI {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

// ─── API Functions ────────────────────────────────────────────────────────────

/**
 * Lấy danh sách bài viết blog (public, chỉ PUBLISHED)
 */
export async function fetchBlogPosts(params?: {
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  search?: string;
}): Promise<BlogListResponse> {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.categorySlug) searchParams.set("categorySlug", params.categorySlug);
  if (params?.tagSlug) searchParams.set("tagSlug", params.tagSlug);
  if (params?.search) searchParams.set("search", params.search);

  const qs = searchParams.toString();
  const url = `${API_BASE}/blog${qs ? `?${qs}` : ""}`;
  return apiGet<BlogListResponse>(url, { skipAuth: true });
}

/**
 * Lấy chi tiết bài viết theo slug (public)
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostFromAPI> {
  const url = `${API_BASE}/blog/${slug}`;
  return apiGet<BlogPostFromAPI>(url, { skipAuth: true });
}

/**
 * Lấy danh mục blog (public)
 */
export async function fetchBlogCategories(): Promise<BlogCategoryFromAPI[]> {
  const url = `${API_BASE}/blog/categories`;
  return apiGet<BlogCategoryFromAPI[]>(url, { skipAuth: true });
}