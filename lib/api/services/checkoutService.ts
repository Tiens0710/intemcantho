import axiosClient from "../axios-client";

export interface CheckoutPayload {
  sessionId?: string;
  customerInfo: {
    name: string;
    phone: string;
    email?: string;
    address: string;
    note?: string;
  };
}

export const checkoutService = {
  createOrder: async (payload: CheckoutPayload) => {
    try {
      return await axiosClient.post<any, any>("/checkout", payload);
    } catch (error) {
      console.error("Failed to create order:", error);
      throw error;
    }
  }
};
