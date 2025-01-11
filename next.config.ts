import type { NextConfig } from "next";
import path from "path";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|ts|tsx|jsx)$/,
      exclude: [path.resolve(__dirname, "functions")],
    });
    return config;
  },
};

export default nextConfig;
