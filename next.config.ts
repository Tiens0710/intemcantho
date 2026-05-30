import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO: 301 redirects for duplicate/legacy URLs → canonical URLs
  async redirects() {
    return [
      {
        source: "/standee",
        destination: "/dich-vu/standee",
        permanent: true, // 301
      },
      {
        source: "/brochure",
        destination: "/danh-muc/to-gap",
        permanent: true, // 301
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "intemcantho.vn",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
