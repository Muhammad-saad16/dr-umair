import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Keep links to the old site's events URL working.
    return [{ source: "/events-&-program", destination: "/events-programs", permanent: true }];
  },
};

export default nextConfig;
