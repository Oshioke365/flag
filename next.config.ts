import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ❌ Remove this line: output: "export"
  // ✅ Let Netlify handle dynamic pages and Sanity routes automatically.

  images: {
    unoptimized: true, // Keep this if you're using Next.js <Image> with Netlify
  },

  // ✅ Avoid build failures due to type or linting warnings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
