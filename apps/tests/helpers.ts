import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { describe as bunDescribe } from "bun:test";

const BACKEND =
  process.env.BACKEND_URL ??
  `http://localhost:${process.env.PORT ?? "3000"}`;

/** Skips entire suite when backend is not up (see setup.ts). */
export const describeIntegration =
  (globalThis as { __PERPS_TEST_READY__?: boolean }).__PERPS_TEST_READY__ === true
    ? bunDescribe
    : bunDescribe.skip;

/** Axios client — never throws on HTTP error status; assert status yourself. */
export const client = axios.create({
  baseURL: BACKEND,
  validateStatus: () => true,
  timeout: 35_000,
});

export function authHeaders(token: string): AxiosRequestConfig {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function adminHeaders(): AxiosRequestConfig {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) throw new Error("ADMIN_SECRET required in root .env for tests");
  return { headers: { token: secret } };
}

export function uniqueId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function signupUser(username: string, password: string) {
  return client.post("/signup", { username, password });
}

export async function signinUser(username: string, password: string) {
  return client.post("/signin", { username, password });
}

export function expectStatus(res: AxiosResponse, status: number) {
  if (res.status !== status) {
    throw new Error(
      `expected HTTP ${status}, got ${res.status}: ${JSON.stringify(res.data)}`,
    );
  }
}
