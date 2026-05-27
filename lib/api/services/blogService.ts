import axiosClient from "../axios-client";
import { Category } from "./categoryService";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  image?: string;
  publishedAt?: string;
  category?: string;
}

export const blogService = {
  getPosts: async (params?: Record<string, string>) => {
    try {
      return await axiosClient.get<any, { data: BlogPost[] }>("/blog", { params });
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      throw error;
    }
  },

  getPostBySlug: async (slug: string) => {
    try {
      return await axiosClient.get<any, BlogPost>(`/blog/${slug}`);
    } catch (error) {
      console.error(`Failed to fetch blog post ${slug}:`, error);
      throw error;
    }
  }
};
