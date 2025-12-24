import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vegasdrones.com";

  const routes = [
    "/",
    "/las-vegas-drone-light-shows",
    "/drone-advertising",
    "/drone-light-shows",
    "/events",
    "/corporate-events",
    "/private-events",
    "/conventions-trade-shows",

    // Holidays hub + holiday pages
    "/holidays",
    "/july-4th-drone-shows",
    "/memorial-day-drone-shows",
    "/labor-day-drone-shows",
    "/christmas-drone-light-shows",

    // Blog
    "/blog",
    "/blog/why-venues-are-choosing-drone-light-shows",

    // Utility
    "/contact",
    "/faq",
    "/chatbot",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    // optional but fine:
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
