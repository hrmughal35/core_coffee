/** @type {import('next').NextConfig} */
// For GitHub Pages: build for site root (no basePath) so .../core_coffee/ serves the app directly
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
