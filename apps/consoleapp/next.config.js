/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@nearbyevcharging.com/api",
    "@nearbyevcharging.com/auth",
    "@nearbyevcharging.com/db",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  images: {
    domains: ["tailwindui.com"],
    loader: "default",
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  distDir: "build",
};

module.exports = nextConfig;
