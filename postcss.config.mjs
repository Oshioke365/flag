/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { experimental: { oxide: false } },
    autoprefixer: {},
  },
};

export default config;
