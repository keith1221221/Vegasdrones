import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "See Our Drone Light Shows | Vegas Drones",
  description:
    "Watch real drone light shows produced by Vegas Drones in Las Vegas and beyond. Proof videos from live events, festivals, and brand activations.",
  alternates: { canonical: `${SITE_URL}/see-our-shows` },
  openGraph: {
    title: "See Our Drone Light Shows | Vegas Drones",
    description:
      "Real footage from live events — festivals, brand activations, and city-scale productions.",
    url: `${SITE_URL}/see-our-shows`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones drone light show",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "See Our Drone Light Shows | Vegas Drones",
    description:
      "Watch real drone light shows produced by Vegas Drones in Las Vegas and beyond.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  robots: { index: true, follow: true },
};

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

const VIDEOS = [
  {
    id: "bo3z1mTSc0s",
    title: "First Friday Drone Show",
    location: "Downtown Las Vegas",
  },
  {
    id: "yEAZil9cE2U",
    title: "Festival Drone Light Show",
    location: "Live Event Production",
  },
  {
    id: "XvxnQlQjztE",
    title: "Custom Brand Animation",
    location: "Corporate Activation",
  },
  {
    id: "kpqUduaDwK8",
    title: "Large-Scale Drone Formation",
    location: "Outdoor Venue",
  },
];

export default function SeeOurShowsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/see-our-shows#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "See Our Shows",
        item: `${SITE_URL}/see-our-shows`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6">
      {/* Breadcrumb Schema */}
      <Script
        id="ld-breadcrumbs-see-our-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* PAGE HEADER */}
        <header className="text-center mb-14">
          <h1 className="font-orbitron font-bold text-4xl sm:text-5xl lg:text-6xl">
            See Our Drone Shows
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Real footage from real events. Below are examples of drone light shows
            produced by Vegas Drones — including festivals, brand activations,
            and city-scale productions.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center text-black font-bold py-4 px-7 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Get a Quote
            </Link>

            <Link
              href="/chatbot"
              className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
            >
              Chat With Us
            </Link>
          </div>
        </header>

        {/* VIDEO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-gray-900/60 border border-gray-800 rounded-3xl p-4 shadow-2xl"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                  title={`${video.title} | Vegas Drones`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 text-center">
                <h2 className="font-orbitron text-lg font-bold">{video.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{video.location}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 30px rgba(255,59,59,0.45)",
            }}
          >
            Get Pricing for Your Event
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Tell us your date, venue area, and goals — we’ll recommend the right
            drone count.
          </p>
        </div>

        <div className="text-center text-gray-500 text-sm mt-14">
          Operated by Skylight Ads LLC • Las Vegas-based • FAA Part 107 • Insured
          operations
        </div>
      </div>
    </main>
  );
}
