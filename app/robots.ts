import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/chatbot"],
      },
    ],
    sitemap: "https://www.vegasdrones.com/sitemap.xml",
  };
}
