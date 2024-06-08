/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["tailwindui.com"],
        loader: "default",
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
