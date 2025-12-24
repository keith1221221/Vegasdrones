import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Memorial Day Drone Light Shows in Las Vegas | Vegas Drones",
  description:
    "Book a Memorial Day drone light show in Las Vegas. A respectful, venue-safe alternative to fireworks — patriotic tributes, custom city messaging, and fully FAA-compliant production.",
  alternates: {
    canonical: "https://www.vegasdrones.com/memorial-day-drone-shows",
  },
  openGraph: {
    title: "Memorial Day Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "Memorial Day drone light shows in Las Vegas — respectful patriotic tributes for cities, venues, and ceremonies. Custom messaging and venue-safe execution.",
    url: "https://www.vegasdrones.com/memorial-day-drone-shows",
    images: [
      {
        url: "https://www.vegasdrones.com/merry_xmas.png",
        width: 1200,
        height: 630,
        alt: "Memorial Day drone light show in Las Vegas",
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

export default function MemorialDayDroneShowsPage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white font-poppins">
        {/* HERO (NO VIDEO) */}
        <section className="relative overflow-hidden">
          <div className="relative h-[72vh] sm:h-[82vh] w-full">
            {/* Swap this image later if you add a Memorial Day-specific graphic */}
            
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                {/* CENTER HERO BLOCK */}
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="font-orbitron font-bold text-4xl sm:text-6xl leading-tight">
                    <span className="text-white">MEMORIAL DAY</span>{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                      }}
                    >
                      DRONE SHOWS
                    </span>
                  </h1>

                  <p className="mt-5 text-lg sm:text-2xl text-gray-100 leading-relaxed">
                    A respectful, venue-safe alternative to fireworks — patriotic tributes,
                    custom city/venue messaging, and a meaningful finale with{" "}
                    <strong>100–1000+ drones</strong>.
                  </p>

                  <div className="mt-8">
                    <div className="mx-auto h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    {/* CENTER BUTTONS */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                          boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                        }}
                      >
                        Get Memorial Day Pricing
                      </Link>

                      <Link
                        href="/holidays"
                        className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
                      >
                        Back to Holidays
                      </Link>
                    </div>

                    <p className="mt-4 text-sm text-gray-300 text-center">
                      Respectful tributes • Venue-safe • No fallout • FAA Part 107 operations
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
              A Meaningful Memorial Day Tribute — Without Firework Risk
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Memorial Day is about remembrance and respect. Drone light shows allow
              cities, venues, and organizations to deliver a powerful patriotic moment
              without smoke, debris, or fire risk — ideal for parks, resort properties,
              and community spaces.
            </p>

            {/* BENEFITS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Respectful &amp; Controlled</h3>
                <p className="text-gray-300">
                  Precision choreography, clean visuals, and a calm, meaningful pacing
                  that fits ceremonies and tributes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Venue-Safe</h3>
                <p className="text-gray-300">
                  No ash, no debris, and no embers near rooftops, signage, trees, or
                  landscaping — a safer alternative to fireworks.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Community Impact</h3>
                <p className="text-gray-300">
                  A shared “hero moment” for families and guests — designed to be seen
                  clearly and captured on phones.
                </p>
              </div>
            </div>

            {/* WHAT WE CAN SHOW */}
            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                What a Memorial Day Show Can Include
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Flags, stars, eagles, and remembrance icons</li>
                <li>“We Remember” / “Memorial Day” messaging</li>
                <li>City / venue name callouts (Las Vegas, Henderson, Summerlin, etc.)</li>
                <li>Sponsor or partner logos (optional and tasteful)</li>
                <li>Multi-scene sequences that build to a respectful finale</li>
              </ul>
            </section>

            {/* PERFECT FOR */}
            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                Perfect For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Cities & municipalities",
                  "Veterans groups & ceremonies",
                  "Parks & public venues",
                  "Resorts & casinos",
                  "Community events & HOAs",
                  "Stadium-adjacent fan events",
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
                Request Memorial Day Availability
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
