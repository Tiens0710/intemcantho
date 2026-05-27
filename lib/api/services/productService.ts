import axiosClient from "../axios-client";
import { Product } from "@/lib/wordpress"; // Reuse existing mock types for now

export const productService = {
  getProducts: async (params?: Record<string, string>) => {
    try {
      return await axiosClient.get<any, { products: Product[] }>("/products", { params });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },

  getProductById: async (id: string) => {
    try {
      return await axiosClient.get<any, Product>(`/products/${id}`);
    } catch (error) {
      console.error(`Failed to fetch product ${id}:`, error);
      throw error;
    }
  }
};
