/** Browser-safe public config. Values injected via next.config env block. */
export const clientEnv = {
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ??
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"),
};
