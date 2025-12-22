import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vegasdrones.com";
  const lastModified = new Date();

  const routes = [
    "/",
    "/las-vegas-drone-light-shows",
    "/drone-advertising",
    "/weddings",
    "/conventions-trade-shows",
    "/faq",
    "/contact",
    // add more real routes here as needed
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1.0
        : path === "/las-vegas-drone-light-shows"
        ? 0.9
        : path === "/contact"
        ? 0.6
        : 0.7,
  }));
}
