import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Tailwind CSS is small; inlining removes the render-blocking stylesheet request.
    inlineCss: true,
  },
};

export default nextConfig;
