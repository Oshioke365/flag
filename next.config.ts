/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // ❌ do NOT include output: "export"
  // ❌ do NOT include basePath or assetPrefix for localhost
};

module.exports = nextConfig;
