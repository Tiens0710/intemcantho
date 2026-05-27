/**
 * Type declarations for environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_MODE?: 'mock' | 'live';
    NEXT_PUBLIC_API_URL?: string;
  }
}
