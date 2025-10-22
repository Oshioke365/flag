import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
=======
  output: "export", // 👈 ensures Next.js produces a static site
>>>>>>> parent of efb5cfe (bugs fixed)
  reactStrictMode: true,
  images: {
    unoptimized: true, // 👈 required for GitHub Pages
  },
<<<<<<< HEAD
  experimental: {
    optimizeCss: false, // disable LightningCSS to prevent native binding errors
  },
=======
  basePath: "/flag", // 👈 replace with your GitHub repo name
  assetPrefix: "/flag/", // 👈 same here
>>>>>>> parent of efb5cfe (bugs fixed)
};

export default nextConfig;
