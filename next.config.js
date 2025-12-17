/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // If you're on Next 13/14+ App Router, keep this.
  // Enforces consistent URLs (optional).
  // trailingSlash: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      // Add domains here ONLY if you load remote images with next/image
      // { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  async redirects() {
    return [
      // Pick ONE primary URL for your money page:
      {
        source: "/drone-light-shows",
        destination: "/las-vegas-drone-light-shows",
        permanent: true,
      },

      // Optional: common variations / typos
      {
        source: "/drone-light-show",
        destination: "/las-vegas-drone-light-shows",
        permanent: true,
      },
      {
        source: "/wedding",
        destination: "/weddings",
        permanent: true,
      },

      // If you have an older conventions slug, keep equity:
      {
        source: "/conventions",
        destination: "/conventions-trade-shows",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Cache static assets hard (great for Core Web Vitals)
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|mp4|webm|css|js|map|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // Reasonable security headers (safe for SEO)
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // If you embed iframes (YouTube), don't use a strict CSP here unless you know exactly what to allow.
        ],
      },
    ];
  },
};

module.exports = nextConfig;
