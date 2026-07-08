import type { NextConfig } from "next";
import { env } from "env";

const nextConfig: NextConfig = {
  transpilePackages: ["env"],
  env: {
    NEXT_PUBLIC_API_URL: env.nextPublicApiUrl,
  },
};

export default nextConfig;
