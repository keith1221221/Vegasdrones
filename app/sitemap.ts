import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vegasdrones.com";
  const now = new Date();

  const routes = [
    "/",
    "/las-vegas-drone-light-shows",
    "/las-vegas-drone-show",
    "/las-vegas-drone-show-cost",
    "/best-drone-show-company-las-vegas",
    "/faa-drone-show-permits-las-vegas",
    "/drone-shows-vs-fireworks",
    "/drone-advertising",
    "/events",
    "/corporate-events",
    "/private-events",
    "/weddings",
    "/conventions-trade-shows",
    "/see-our-shows",
    "/holidays",
    "/july-4th-drone-shows",
    "/memorial-day-drone-shows",
    "/labor-day-drone-shows",
    "/christmas-drone-light-shows",
    "/blog",
    "/blog/amazon-prime-the-boys-drone-show",
    "/blog/why-venues-are-choosing-drone-light-shows",
    "/blog/st-patricks-day-drone-light-show-las-vegas-strip",
    "/blog/st-patricks-day-drone-show-las-vegas-strip-recap",
    "/contact",
    "/faq",
    "/privacy",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : [
              "/las-vegas-drone-light-shows",
              "/las-vegas-drone-show",
              "/corporate-events",
              "/contact",
            ].includes(path)
          ? 0.9
          : 0.7,
  }));
}
