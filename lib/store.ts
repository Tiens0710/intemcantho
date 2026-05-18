/**
 * Global state management using Zustand
 * Manages user persona and onboarding state
 */

import { create } from "zustand";
import { PersonaType } from "./wordpress";

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

export const useAppStore = create<AppState>((set, get) => ({
  persona: null,
  hasCompletedOnboarding: false,

  // cart state
  cart: [],
  // buy now
  buyNowItem: null,
  addToCart: (item: CartItem) => {
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
  removeFromCart: (id: string) => {
    set((state) => {
      const next = state.cart.filter((c) => c.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("duky_cart", JSON.stringify(next));
      }
      return { cart: next } as Partial<AppState> as AppState;
    });
  },
  updateQuantity: (id: string, quantity: number) => {
    set((state) => {
      const next = state.cart.map((c) => (c.id === id ? { ...c, quantity } : c));
      if (typeof window !== "undefined") {
        localStorage.setItem("duky_cart", JSON.stringify(next));
      }
      return { cart: next } as Partial<AppState> as AppState;
    });
  },
  clearCart: () => {
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
// Initialize from localStorage on app load
if (typeof window !== "undefined") {
  const savedPersona = localStorage.getItem("duky_persona") as PersonaType;
  const savedOnboarding = localStorage.getItem("duky_onboarding_complete") === "true";
  const savedCart = localStorage.getItem("duky_cart");

  const cart = savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];

  if (savedPersona || savedOnboarding || cart.length) {
    useAppStore.setState({
      persona: savedPersona || null,
      hasCompletedOnboarding: savedOnboarding,
      cart,
    });
  }
}
