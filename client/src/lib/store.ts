/**
 * Global state management using Zustand
 * Manages user persona and onboarding state
 */

import { create } from 'zustand';
import { PersonaType } from './wordpress';

interface AppState {
  persona: PersonaType;
  hasCompletedOnboarding: boolean;
  setPersona: (persona: PersonaType) => void;
  setOnboardingComplete: (complete: boolean) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  persona: null,
  hasCompletedOnboarding: false,

  setPersona: (persona: PersonaType) => {
    set({ persona });
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('duky_persona', persona || '');
    }
  },

  setOnboardingComplete: (complete: boolean) => {
    set({ hasCompletedOnboarding: complete });
    if (typeof window !== 'undefined') {
      localStorage.setItem('duky_onboarding_complete', String(complete));
    }
  },

  reset: () => {
    set({ persona: null, hasCompletedOnboarding: false });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('duky_persona');
      localStorage.removeItem('duky_onboarding_complete');
    }
  },
}));

// Initialize from localStorage on app load
if (typeof window !== 'undefined') {
  const savedPersona = localStorage.getItem('duky_persona') as PersonaType;
  const savedOnboarding = localStorage.getItem('duky_onboarding_complete') === 'true';

  if (savedPersona || savedOnboarding) {
    useAppStore.setState({
      persona: savedPersona || null,
      hasCompletedOnboarding: savedOnboarding,
    });
  }
}
