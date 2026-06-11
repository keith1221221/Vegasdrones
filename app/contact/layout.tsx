import type { Metadata } from "next";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/alienhead1.png`;

export const metadata: Metadata = {
  title: "Contact Vegas Drones | Drone Show Pricing & Availability",
  description:
    "Contact Vegas Drones for custom drone light show pricing and availability in Las Vegas. Share your event date, venue, audience, and creative goals to start planning.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Vegas Drones | Drone Show Pricing & Availability",
    description:
      "Request pricing and availability for a custom Las Vegas drone light show.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact Vegas Drones for drone light show pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vegas Drones | Drone Show Pricing",
    description:
      "Request pricing and availability for a custom Las Vegas drone light show.",
    images: [OG_IMAGE],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
