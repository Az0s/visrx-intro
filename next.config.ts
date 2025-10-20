import type { NextConfig } from "next";

// Vercel/Next.js optimizations for static video delivery
// - Adds long-lived immutable caching for files under /public/videos
// - Ensures clients and CDNs can range-request MP4s (enabled by default on Vercel)
// - Keep generated files small and with faststart so playback begins quickly
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          // Cache aggressively in browsers and Vercel’s CDN; files are content-addressed by name
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          // Hint modern browsers we serve media and they can prefetch efficiently
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
};

export default nextConfig;
