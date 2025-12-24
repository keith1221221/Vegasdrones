/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [],
  },

  async redirects() {
    return [
      // 🔴 LEGACY HTML CLEANUP (SEO)
      { source: "/index.html", destination: "/", permanent: true },
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

      // Catch-all safety net: ANY .html → same path without .html
      { source: "/:path*.html", destination: "/:path*", permanent: true },

      // 🟢 PREFERRED SLUG CONSOLIDATION
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
      { source: "/wedding", destination: "/weddings", permanent: true },
      {
        source: "/conventions",
        destination: "/conventions-trade-shows",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // ⚡ AGGRESSIVE STATIC CACHING
      {
        source:
          "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|mp4|webm|css|js|map|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // 🔐 SAFE SECURITY HEADERS
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

