import axiosClient from "../axios-client";

export interface Customer {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  status: string;
  type: string;
}

export interface AuthResponse {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  customer: Customer;
}

export const authService = {
  loginWithGoogle: async (idToken: string) => {
    try {
      return await axiosClient.post<any, AuthResponse>("/customer/auth/google", { idToken });
    } catch (error) {
      console.error("Google login failed:", error);
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      return await axiosClient.post<any, AuthResponse>("/customer/auth/login", { email, password });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  register: async (data: { email: string; password: string; passwordConfirmation: string }) => {
    try {
      return await axiosClient.post<any, AuthResponse>("/customer/auth/register", data);
    } catch (error) {
      console.error("Register failed:", error);
      throw error;
    }
  },

  logout: async (refreshToken: string) => {
    try {
      return await axiosClient.post<any, any>("/customer/auth/logout", { refreshToken });
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
};
