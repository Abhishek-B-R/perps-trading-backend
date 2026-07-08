import type { NextConfig } from "next";

// ponytail: no imports here — Next transpiles this file standalone, and pulling
// in workspace packages (dotenv etc.) breaks module resolution. The web app
// needs no server env: API_URL is resolved in src/lib/api.ts.
const nextConfig: NextConfig = {};

export default nextConfig;
