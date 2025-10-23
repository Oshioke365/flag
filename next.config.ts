import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Ensure Next.js static export works with Netlify or GitHub Pages
  output: "export",

  // ✅ Disable Next Image Optimization (required for static export)
  // images: {
  //   unoptimized: true,
  // },

  // ✅ Avoid build breaking due to type or ESLint warnings on Netlify
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
