import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Las Vegas Corporate Event Drone Shows | Vegas Drones",
  description:
    "Book a corporate event drone light show in Las Vegas. Logos, messaging, product reveals, and cinematic finales — fully custom, venue-safe, and FAA-compliant production.",
  keywords: [
    "Las Vegas corporate drone show",
    "corporate event drone light show",
    "brand activation drone show Las Vegas",
    "product launch drone show",
    "conference entertainment Las Vegas",
    "trade show after party drone show",
    "Vegas Drones corporate events",
  ],
  alternates: {
    canonical: "https://www.vegasdrones.com/corporate-events",
  },
  openGraph: {
    title: "Las Vegas Corporate Event Drone Shows | Vegas Drones",
    description:
      "High-impact drone light shows for corporate events in Las Vegas — logos, messaging, and brand activations with 100–1000+ drones.",
    url: "https://www.vegasdrones.com/corporate-events",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones corporate event drone light show",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function CorporateEventsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          {/* PAGE TITLE */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-orbitron">
            <span className="text-white">CORPORATE </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              DRONE SHOWS
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Turn your event into a headline moment. We produce premium drone light
            shows for corporate events, conferences, and brand activations in Las Vegas —
            featuring logos, messaging, product reveals, and cinematic finales with{" "}
            <strong>100–1000+ drones</strong>.
          </p>

          {/* HERO IMAGE (NO FIREWORKS VIDEO) */}
          <div className="w-full flex justify-center mb-14">
            <img
              src="/lions.png"
              alt="Corporate drone light show in Las Vegas"
              className="w-full max-w-3xl rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* SECTION 1 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Built for Brand Moments
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Drone shows create a “stop-and-film” experience that’s impossible to ignore.
              We design sky-ready logos, readable short messaging, and cinematic pacing so
              the hero moment hits on camera — perfect for marketing, sponsors, and PR.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Perfect For
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Corporate events, conferences, and leadership retreats</li>
              <li>Trade show after-parties and client entertainment</li>
              <li>Brand activations and sponsor moments</li>
              <li>Product launches and big reveals</li>
              <li>Grand openings and venue promotions</li>
              <li>Sports and stadium-adjacent fan events</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              What We Can Put in the Sky
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Company logos, icons, and sponsor marks</li>
              <li>Readable text (short phrases, dates, hashtags)</li>
              <li>Multi-scene storytelling sequences</li>
              <li>Product silhouettes and reveal moments</li>
              <li>City/venue callouts (great for Las Vegas activations)</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Full-Service Production + FAA Compliance
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We handle planning, safety protocols, site coordination, and operational
              logistics. Our team works with your venue and timeline so your show runs
              smoothly, safely, and on schedule — with professional execution from start
              to finish.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 30px rgba(255,59,59,0.45)",
              }}
            >
              Request Corporate Event Pricing
            </Link>

            <div className="mt-5 flex justify-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center py-3 px-8 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
              >
                Back to Events
              </Link>
            </div>

            <p className="text-gray-400 mt-6 text-sm">
              Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured operations
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
