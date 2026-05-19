/**
 * Standardized API Response Helper (Server-side)
 * 
 * Response format: { EC: number, EM: string, DT: any }
 *   EC = Error Code (0 = success, non-zero = error)
 *   EM = Error Message (human-readable)
 *   DT = Data (payload, null on error)
 */

import { NextResponse } from "next/server";

export interface ApiResponse<T = any> {
  EC: number;
  EM: string;
  DT: T | null;
}

/** Success response — EC: 0 */
export function success<T>(data: T, message = "OK"): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ EC: 0, EM: message, DT: data });
}

/** Error response — EC: non-zero */
export function error(
  message: string,
  statusCode = 500,
  errorCode?: number
): NextResponse<ApiResponse<null>> {
  const ec = errorCode ?? statusCode;
  return NextResponse.json(
    { EC: ec, EM: message, DT: null },
    { status: statusCode }
  );
}

/** Not Found shortcut */
export function notFound(message = "Resource not found"): NextResponse<ApiResponse<null>> {
  return error(message, 404, 404);
}

/** Bad Request shortcut */
export function badRequest(message = "Bad request"): NextResponse<ApiResponse<null>> {
  return error(message, 400, 400);
}

/** Unauthorized shortcut */
export function unauthorized(message = "Unauthorized"): NextResponse<ApiResponse<null>> {
  return error(message, 401, 401);
}