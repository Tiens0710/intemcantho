/**
 * Global state management using Zustand
 * Manages user persona and onboarding state
 */

import { create } from "zustand";
import { PersonaType } from "./wordpress";
import { cartService } from "./api/services/cartService"; // Import new service
import { Customer, AuthResponse } from "./api/services/authService"; // Import auth types

export interface CartItem {
  id: string;
  title: string;
  price: number; // in VND (integer) when available, otherwise 0
  quantity: number;
  image?: string;
  meta?: Record<string, any>;
}

interface AppState {
  persona: PersonaType;
  hasCompletedOnboarding: boolean;
  // Auth state
  customer: Customer | null;
  accessToken: string | null;
  refreshToken: string | null;
  setAuthData: (data: AuthResponse) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  // cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: () => number;
  cartTotal: () => number;
  // buy now
  buyNowItem: CartItem | null;
  setBuyNowItem: (item: CartItem | null) => void;
  setPersona: (persona: PersonaType) => void;
  setOnboardingComplete: (complete: boolean) => void;
  reset: () => void;
}

const API_MODE = process.env.NEXT_PUBLIC_API_MODE || "mock";

export const useAppStore = create<AppState>((set, get) => ({
  persona: null,
  hasCompletedOnboarding: false,
  
  // Auth state
  customer: null,
  accessToken: null,
  refreshToken: null,
  
  setAuthData: (data: AuthResponse) => {
    set({ 
      customer: data.customer, 
      accessToken: data.accessToken, 
      refreshToken: data.refreshToken 
    });
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.customer));
    }
  },
  
  logout: () => {
    set({ customer: null, accessToken: null, refreshToken: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  },
  
  isLoggedIn: () => get().customer !== null,

  // cart state
  cart: [],
  // buy now
  buyNowItem: null,
  
  addToCart: async (item: CartItem) => {
    if (API_MODE === "live") {
      try {
        // Assuming item.id is productId for now. In real app, we need to handle variantId too.
        const cart = await cartService.addToCart(item.id, item.quantity);
        // Update local state with server response to ensure consistency
        // For now, we just optimistic update or rely on re-fetch if needed
      } catch (error) {
        console.error("Failed to add to cart via API:", error);
        return;
      }
    }

    set((state) => {
      const existing = state.cart.find((c) => c.id === item.id);
      let nextCart: CartItem[];
      if (existing) {
        nextCart = state.cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + item.quantity } : c
        );
      } else {
        nextCart = [...state.cart, item];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("duky_cart", JSON.stringify(nextCart));
      }
      return { cart: nextCart } as Partial<AppState> as AppState;
    });
  },
  
  removeFromCart: async (id: string) => {
    if (API_MODE === "live") {
       try {
         // We need the cart item ID (backend ID) not the product ID to remove
         // This highlights a complexity: our local state uses product ID as key, 
         // but backend needs CartItem ID.
         // We should store backend cart item ID in meta or use it as id.
         // For this step, we assume id is the cart item ID or we need to look it up.
         // await cartService.removeCartItem(id); 
       } catch (error) {
         console.error("Failed to remove from cart via API:", error);
         return;
       }
    }

    set((state) => {
      const next = state.cart.filter((c) => c.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("duky_cart", JSON.stringify(next));
      }
      return { cart: next } as Partial<AppState> as AppState;
    });
  },
  
  updateQuantity: async (id: string, quantity: number) => {
     if (API_MODE === "live") {
       try {
         // await cartService.updateCartItem(id, quantity);
       } catch (error) {
         console.error("Failed to update cart via API:", error);
         return;
       }
    }

    set((state) => {
      const next = state.cart.map((c) => (c.id === id ? { ...c, quantity } : c));
      if (typeof window !== "undefined") {
        localStorage.setItem("duky_cart", JSON.stringify(next));
      }
      return { cart: next } as Partial<AppState> as AppState;
    });
  },
  
  clearCart: async () => {
     if (API_MODE === "live") {
       try {
         // await cartService.clearCart();
       } catch (error) {
         console.error("Failed to clear cart via API:", error);
         return;
       }
    }

    set(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("duky_cart");
      }
      return { cart: [] } as Partial<AppState> as AppState;
    });
  },
  
  setBuyNowItem: (item: CartItem | null) => {
    set({ buyNowItem: item } as Partial<AppState> as AppState);
  },
  cartCount: () => get().cart.reduce((s, i) => s + i.quantity, 0),
  cartTotal: () => get().cart.reduce((s, i) => s + (i.price || 0) * i.quantity, 0),

  setPersona: (persona: PersonaType) => {
    set({ persona });
    // Persist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("duky_persona", persona || "");
    }
  },

  setOnboardingComplete: (complete: boolean) => {
    set({ hasCompletedOnboarding: complete });
    if (typeof window !== "undefined") {
      localStorage.setItem("duky_onboarding_complete", String(complete));
    }
  },

  reset: () => {
    set({ persona: null, hasCompletedOnboarding: false, cart: [], buyNowItem: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("duky_persona");
      localStorage.removeItem("duky_onboarding_complete");
      localStorage.removeItem("duky_cart");
    }
  },
}));

// Initialize from localStorage on app load
if (typeof window !== "undefined") {
  const savedPersona = localStorage.getItem("duky_persona") as PersonaType;
  const savedOnboarding = localStorage.getItem("duky_onboarding_complete") === "true";
  const savedCart = localStorage.getItem("duky_cart");
  const savedUser = localStorage.getItem("user");
  const savedAccessToken = localStorage.getItem("authToken");
  const savedRefreshToken = localStorage.getItem("refreshToken");

  const cart = savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
  
  let customer = null;
  if (savedUser) {
    try {
      customer = JSON.parse(savedUser);
    } catch (e) {
      console.error("Failed to parse saved user", e);
    }
  }

  useAppStore.setState({
    persona: savedPersona || null,
    hasCompletedOnboarding: savedOnboarding,
    cart,
    customer,
    accessToken: savedAccessToken,
    refreshToken: savedRefreshToken,
  });
}
