/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.vegasdrones.com",
  
    // Generate these into /public on build
    generateRobotsTxt: true,
    generateIndexSitemap: true,
  
    // Sitemap behavior
    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,
    autoLastmod: true,
  
    // Exclusions (keep bots out of app-only / dynamic endpoints)
    exclude: [
      "/chatbot",
      "/api/*",
      "/_not-found",
      "/404",
      "/500",
    ],
  
    // robots.txt fine-tuning
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api", "/chatbot"],
        },
      ],
      additionalSitemaps: [
        "https://www.vegasdrones.com/sitemap.xml",
      ],
    },
  
    // Optional: add extra URLs that aren't in your Next routes
    // (only use if you truly have these pages live)
    additionalPaths: async (config) => {
      const result = [];
      // Example:
      // result.push(await config.transform(config, "/some-extra-page"));
      return result;
    },
  
    // Optional: customize each URL entry
    transform: async (config, path) => {
      // Default priority/changefreq are set above, but you can tune key pages:
      const isMoneyPage =
        path === "/" ||
        path === "/las-vegas-drone-light-shows" ||
        path === "/drone-advertising" ||
        path === "/weddings" ||
        path === "/conventions-trade-shows" ||
        path === "/contact";
  
      return {
        loc: path,
        changefreq: isMoneyPage ? "weekly" : "monthly",
        priority: isMoneyPage ? 0.9 : 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [],
      };
    },
  };

