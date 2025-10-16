import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // required because GitHub Pages doesn’t support Next.js image optimization
  },
  output: "export", // makes Next.js build a static version in /out
};

export default nextConfig;
