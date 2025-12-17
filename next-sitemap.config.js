/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.vegasdrones.com",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,
    exclude: ["/chatbot", "/api/*"],
    robotsTxtOptions: {
      policies: [{ userAgent: "*", allow: "/" }],
    },
  };
  