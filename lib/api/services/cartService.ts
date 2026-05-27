import axiosClient from "../axios-client";

function getSessionId() {
  if (typeof window === "undefined") return "";
  let sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("sessionId", sessionId);
  }
  return sessionId;
}

export const cartService = {
  getCart: async () => {
    const sessionId = getSessionId();
    try {
      return await axiosClient.get<any, any>("/cart", { params: { sessionId } });
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      throw error;
    }
  },

  addToCart: async (productId: string, quantity: number, variantId?: string) => {
    const sessionId = getSessionId();
    try {
      return await axiosClient.post<any, any>("/cart/items", {
        sessionId,
        productId,
        quantity,
        variantId
      });
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  },

  updateCartItem: async (itemId: string, quantity: number) => {
    try {
      return await axiosClient.put<any, any>(`/cart/items/${itemId}`, { quantity });
    } catch (error) {
      console.error("Failed to update cart item:", error);
      throw error;
    }
  },

  removeCartItem: async (itemId: string) => {
    try {
      return await axiosClient.delete<any, any>(`/cart/items/${itemId}`);
    } catch (error) {
      console.error("Failed to remove cart item:", error);
      throw error;
    }
  }
};
