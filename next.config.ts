import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 ensures Next.js produces a static site
  reactStrictMode: true,
  images: {
    unoptimized: true, // 👈 required for GitHub Pages
  },
  basePath: "/flag", // 👈 replace with your GitHub repo name
  assetPrefix: "/flag/", // 👈 same here
};

export default nextConfig;
