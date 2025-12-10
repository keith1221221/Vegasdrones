import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Base URL for building absolute URLs in OpenGraph/canonical, etc.
  metadataBase: new URL("https://www.vegasdrones.com"),

  // Title with template for child pages
  title: {
    default: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    template: "%s | Vegas Drones",
  },

  description:
    "Vegas Drones creates spectacular custom drone light shows in Las Vegas for weddings, corporate events, festivals, and brand activations. Book a breathtaking aerial experience today.",

  // Helpful but not magic; still used by some search engines
  keywords: [
    "drone show",
    "drone shows",
    "Las Vegas drone show",
    "Las Vegas drones",
    "wedding drone show",
    "corporate drone show",
    "drone advertising",
    "Vegas Drones",
    "aerial light show",
    "event entertainment Las Vegas",
  ],

  // Controls SERP + social previews
  openGraph: {
    type: "website",
    url: "https://www.vegasdrones.com",
    title: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    description:
      "Custom 100–500+ drone light shows for weddings, corporate events, sports, and festivals in Las Vegas.",
    siteName: "Vegas Drones",
    images: [
      {
        url: "/alienhead1.png", // make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Vegas Drones aerial light show over Las Vegas",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    description:
      "Breathtaking drone light shows for weddings, events, and brands in Las Vegas.",
    images: ["/og-image.jpg"], // same image as OG is fine
  },

  // Canonical URL for the root; child pages can override in their own metadata
  alternates: {
    canonical: "https://www.vegasdrones.com",
  },

  // Make sure search engines can index/follow
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Viewport (no need to duplicate in <head>)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Favicons / icons (put these files in /public)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Optional but nice for theme / browser UI
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Next will inject SEO/meta tags from `metadata` into <head> */}
      <head>
        {/* Keep your font + icon CSS here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

