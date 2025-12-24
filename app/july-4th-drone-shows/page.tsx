import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "July 4th Drone Light Shows in Las Vegas | Vegas Drones",
  description:
    "Book a July 4th drone light show in Las Vegas. A venue-safe, crowd-winning alternative to fireworks — patriotic animations, custom city messaging, and fully FAA-compliant production.",
  alternates: {
    canonical: "https://www.vegasdrones.com/july-4th-drone-shows",
  },
  openGraph: {
    title: "July 4th Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "A modern alternative to fireworks for July 4th events in Las Vegas — patriotic drone animations, custom messaging, and venue-safe execution.",
    url: "https://www.vegasdrones.com/july-4th-drone-shows",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "July 4th drone light show in Las Vegas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function July4thDroneShowsPage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white font-poppins">
        {/* HERO (NO VIDEO) */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div className="relative h-[72vh] sm:h-[82vh] w-full">
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />
            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

            {/* Hero content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center">
  <div className="max-w-6xl mx-auto px-6 w-full flex justify-center">
    <div className="max-w-3xl">

                  <h1 className="font-orbitron font-bold text-4xl sm:text-6xl leading-tight">
                    <span className="text-white">JULY 4TH</span>{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                      }}
                    >
                      DRONE LIGHT SHOWS
                    </span>
                  </h1>

                  <p className="mt-5 text-lg sm:text-2xl text-gray-100 leading-relaxed">
                    A modern, venue-friendly alternative to fireworks in Las Vegas —
                    patriotic sky animations, custom city messaging, and a crowd-winning
                    finale with <strong>100–1000+ drones</strong>.
                  </p>

                  {/* Modern line + CTA */}
<div className="mt-8">
  <div className="mx-auto h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />

  {/* Center buttons */}
  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
    <Link
      href="/contact"
      className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
      style={{
        backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
        boxShadow: "0 0 30px rgba(255,59,59,0.45)",
      }}
    >
      Get July 4th Pricing
    </Link>

    <Link
      href="/holidays"
      className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
    >
      Back to Holidays
    </Link>
  </div>

  <p className="mt-4 text-sm text-gray-300 text-center">
    Venue-safe • No fallout • Low staff burden • FAA Part 107 operations
  </p>
</div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron text-[#FF3B3B]">
              Built for Venues: Less Prep, Less Risk, More “Wow”
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              July 4th crowds expect something big — but venues want something controlled.
              Drone shows deliver a high-impact patriotic experience with dramatically less
              cleanup and less building-risk than traditional fireworks. No smoke, no debris,
              and fewer moving parts for your event staff.
            </p>

            {/* 3-up benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">
                  Less Prep for Staff
                </h3>
                <p className="text-gray-300">
                  No explosive staging, fallout zones, or extensive cleanup plans. We handle
                  the production, coordination, and show execution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">
                  Less Venue Risk
                </h3>
                <p className="text-gray-300">
                  No ash, no embers, and no firework debris near rooftops, signage, or
                  landscaping. Ideal for hotels, casinos, golf clubs, and resorts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">
                  More Shareable Moments
                </h3>
                <p className="text-gray-300">
                  Clean shapes and readable patriotic icons that look incredible on phones —
                  perfect for social buzz and sponsor value.
                </p>
              </div>
            </div>

            {/* What you can show */}
            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                What We Can Put in the Sky
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Flags, stars, eagles, liberty icons, and patriotic finales</li>
                <li>“Happy 4th of July” messaging and city/venue name callouts</li>
                <li>Sponsor logos and “presented by” moments (great for festivals)</li>
                <li>Multi-scene story pacing: warm-up → headliners → finale</li>
              </ul>
            </section>

            {/* Perfect for */}
            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                Perfect For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Casinos & resorts",
                  "Cities & municipalities",
                  "Golf clubs & country clubs",
                  "Stadium-adjacent fan events",
                  "Festivals & fairgrounds",
                  "HOA / community celebrations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-200"
                  >
                    <span className="font-orbitron text-white">{item}</span>
                  </div>
                ))}
              </div>
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
                Request July 4th Availability
              </Link>

              <p className="text-gray-400 mt-5 text-sm">
                Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured operations
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
