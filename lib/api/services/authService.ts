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

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  resetToken?: string; // dev mode only
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

  register: async (data: {
    email?: string;
    phone?: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    try {
      return await axiosClient.post<any, AuthResponse>("/customer/auth/register", data);
    } catch (error) {
      console.error("Register failed:", error);
      throw error;
    }
  },

  forgotPassword: async (email: string): Promise<ForgotPasswordResponse> => {
    try {
      return await axiosClient.post<any, ForgotPasswordResponse>(
        "/customer/auth/forgot-password",
        { email }
      );
    } catch (error) {
      console.error("Forgot password failed:", error);
      throw error;
    }
  },

  resetPassword: async (data: {
    token: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    try {
      return await axiosClient.post<any, { success: boolean; message: string }>(
        "/customer/auth/reset-password",
        data
      );
    } catch (error) {
      console.error("Reset password failed:", error);
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
