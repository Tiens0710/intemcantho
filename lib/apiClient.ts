/**
 * Centralized API Client (Client-side)
 * 
 * Standardized response format: { EC: number, EM: string, DT: any }
 *   EC = Error Code (0 = success, non-zero = error)
 *   EM = Error Message (human-readable)
 *   DT = Data (payload, null on error)
 *
 * Features:
 *   - Automatic auth token injection from localStorage
 *   - Centralized error handling
 *   - AbortController support
 *   - Generic typed responses
 */

export interface ApiResponse<T = unknown> {
  EC: number;
  EM: string;
  DT: T | null;
}

export class ApiError extends Error {
  EC: number;
  HTTPStatus: number;

  constructor(message: string, ec: number, httpStatus: number) {
    super(message);
    this.name = "ApiError";
    this.EC = ec;
    this.HTTPStatus = httpStatus;
  }
}

interface RequestOptions {
  /** AbortSignal for request cancellation */
  signal?: AbortSignal;
  /** Additional headers */
  headers?: Record<string, string>;
  /** Skip auth token injection (e.g. for public endpoints) */
  skipAuth?: boolean;
}

function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("authToken");
}

/**
 * Low-level fetch wrapper that handles EC/EM/DT response format.
 * Throws ApiError on non-zero EC or non-2xx HTTP status.
 */
async function request<T>(
  url: string,
  options: RequestInit & RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { signal, headers: extraHeaders, skipAuth, ...fetchOptions } = options;

  const mergedHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Merge extra headers if provided
  if (extraHeaders) {
    for (const key of Object.keys(extraHeaders)) {
      mergedHeaders[key] = extraHeaders[key];
    }
  }

  // Auto-inject auth token
  if (!skipAuth) {
    const token = getAuthToken();
    if (token) {
      mergedHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers: mergedHeaders,
    signal,
  });

  // Try to parse response body as ApiResponse<T>
  let body: ApiResponse<T>;
  try {
    body = (await response.json()) as ApiResponse<T>;
  } catch {
    // If response is not valid JSON, throw a generic error
    throw new ApiError(
      `Invalid response from server (HTTP ${response.status})`,
      response.status,
      response.status
    );
  }

  // If HTTP status is not ok OR EC is non-zero, throw ApiError
  if (!response.ok || body.EC !== 0) {
    throw new ApiError(
      body.EM || `Request failed (HTTP ${response.status})`,
      body.EC || response.status,
      response.status
    );
  }

  return body;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** GET request */
export async function apiGet<T>(url: string, options?: RequestOptions): Promise<T> {
  const body = await request<T>(url, { method: "GET", ...options });
  return body.DT as T;
}

/** POST request */
export async function apiPost<T>(
  url: string,
  data?: unknown,
  options?: RequestOptions
): Promise<T> {
  const body = await request<T>(url, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
  return body.DT as T;
}

/** PUT request */
export async function apiPut<T>(
  url: string,
  data?: unknown,
  options?: RequestOptions
): Promise<T> {
  const body = await request<T>(url, {
    method: "PUT",
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
  return body.DT as T;
}

/** PATCH request */
export async function apiPatch<T>(
  url: string,
  data?: unknown,
  options?: RequestOptions
): Promise<T> {
  const body = await request<T>(url, {
    method: "PATCH",
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
  return body.DT as T;
}

/** DELETE request */
export async function apiDelete<T>(url: string, options?: RequestOptions): Promise<T> {
  const body = await request<T>(url, { method: "DELETE", ...options });
  return body.DT as T;
}

// ─── Convenience: raw response access ────────────────────────────────────────

/** GET returning the full ApiResponse (EC/EM/DT) for callers that need EC check */
export async function apiGetRaw<T>(url: string, options?: RequestOptions): Promise<ApiResponse<T>> {
  return request<T>(url, { method: "GET", ...options });
}

/** POST returning the full ApiResponse */
export async function apiPostRaw<T>(
  url: string,
  data?: unknown,
  options?: RequestOptions
): Promise<ApiResponse<T>> {
  return request<T>(url, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
}