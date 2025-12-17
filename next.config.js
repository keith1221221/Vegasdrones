/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

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
      // ✅ OLD HTML URLs (from Google Search Console) → NEW Next.js pages
      {
        source: "/contact-las-vegas-drone-shows.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/faq-las-vegas-drone-show.html",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/drone-advertising-las-vegas.html",
        destination: "/drone-advertising",
        permanent: true,
      },

      // ✅ Current / preferred slugs
      {
        source: "/drone-light-shows",
        destination: "/las-vegas-drone-light-shows",
        permanent: true,
      },
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
        source:
          "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|mp4|webm|css|js|map|woff|woff2)",
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
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
