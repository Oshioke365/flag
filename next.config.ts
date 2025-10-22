import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false, // disable LightningCSS to prevent native binding errors
  },
};

export default nextConfig;
