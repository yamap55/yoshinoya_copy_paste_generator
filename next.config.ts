import type { NextConfig } from "next";
const basePath = process.env.NODE_ENV === "production" ? "/yoshinoya_copy_paste_generator" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

export default nextConfig;
