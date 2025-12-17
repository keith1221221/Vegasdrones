import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vegasdrones.com"),
  title: {
    default: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    template: "%s | Vegas Drones",
  },
  description:
    "Vegas Drones creates spectacular custom drone light shows in Las Vegas for weddings, corporate events, festivals, and brand activations. Book a breathtaking aerial experience today.",
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
  openGraph: {
    type: "website",
    url: "https://www.vegasdrones.com",
    title: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    description:
      "Custom 100–500+ drone light shows for weddings, corporate events, sports, and festivals in Las Vegas.",
    siteName: "Vegas Drones",
    images: [
      {
        url: "/alienhead1.png",
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
    images: ["/alienhead1.png"],
  },
  alternates: { canonical: "https://www.vegasdrones.com" },
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
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vegas Drones",
    url: "https://www.vegasdrones.com",
    logo: "https://www.vegasdrones.com/alienhead1.png",
    image: "https://www.vegasdrones.com/alienhead1.png",
    description:
      "Custom drone light shows in Las Vegas for weddings, corporate events, conventions, festivals, and brand activations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    areaServed: "Las Vegas NV",
    sameAs: [
      "https://www.instagram.com/vegasdrones",
      "https://www.facebook.com/vegasdrones",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="pt-10 md:pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
