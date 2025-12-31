/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  typescript: {
    // TypeScript errors will be shown during development
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
