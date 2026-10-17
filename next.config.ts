import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fallback thumbnails for videos added through the CMS without an uploaded image.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async rewrites() {
    // Decap CMS lives in public/admin; serve it at /admin.
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
  async redirects() {
    // Keep links to the old site's events URL working.
    return [{ source: "/events-&-program", destination: "/events-programs", permanent: true }];
  },
};

export default nextConfig;
