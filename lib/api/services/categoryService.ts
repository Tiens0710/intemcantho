import axiosClient from "../axios-client";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export const categoryService = {
  getCategories: async () => {
    try {
      return await axiosClient.get<any, Category[]>("/categories");
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      throw error;
    }
  },

  getCategoryBySlug: async (slug: string) => {
    try {
      return await axiosClient.get<any, Category>(`/categories/${slug}`);
    } catch (error) {
      console.error(`Failed to fetch category ${slug}:`, error);
      throw error;
    }
  }
};
