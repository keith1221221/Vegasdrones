import type { Metadata } from "next";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/faq`;
const OG_IMAGE = `${SITE_URL}/alienhead1.png`;

export const metadata: Metadata = {
  title: "Las Vegas Drone Show FAQ | Cost, Safety & Planning",
  description:
    "Get answers about Las Vegas drone show pricing, FAA authorization, safety areas, booking timelines, weather policies, and custom aerial designs from Vegas Drones.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Las Vegas Drone Show FAQ | Vegas Drones",
    description:
      "Answers about drone show cost, safety, FAA authorization, booking timelines, weather, and venue requirements.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Las Vegas drone light show frequently asked questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Drone Show FAQ | Vegas Drones",
    description:
      "Drone show cost, safety, FAA authorization, booking, weather, and venue questions answered.",
    images: [OG_IMAGE],
  },
};

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
