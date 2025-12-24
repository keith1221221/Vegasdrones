import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Christmas Drone Light Shows in Las Vegas | Vegas Drones",
  description:
    "Book a Christmas drone light show in Las Vegas. A venue-safe, family-friendly alternative to fireworks — festive animations, sponsor moments, and fully FAA-compliant production.",
  alternates: {
    canonical: "https://www.vegasdrones.com/christmas-drone-shows",
  },
  openGraph: {
    title: "Christmas Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "Festive Christmas drone light shows in Las Vegas — trees, snowflakes, ornaments, Santa moments, and custom venue/sponsor messaging.",
    url: "https://www.vegasdrones.com/christmas-drone-shows",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/merry_xmas.png",
        width: 1200,
        height: 630,
        alt: "Christmas drone light show in Las Vegas",
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

export default function ChristmasDroneShowsPage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white font-poppins">
        {/* HERO (NO VIDEO) */}
        <section className="relative overflow-hidden">
          <div className="relative h-[72vh] sm:h-[82vh] w-full">
            
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

            <div className="relative z-10 h-full flex items-center justify-center text-center">
  <div className="max-w-6xl mx-auto px-6 w-full flex justify-center">
    <div className="max-w-3xl">

                  <h1 className="font-orbitron font-bold text-4xl sm:text-6xl leading-tight">
                    <span className="text-white">CHRISTMAS</span>{" "}
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
                    Turn your holiday event into a headline moment — trees, ornaments,
                    snowflakes, Santa scenes, and custom venue/sponsor messaging with{" "}
                    <strong>100–1000+ drones</strong>.
                  </p>

                  <div className="mt-8">
                    <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                          boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                        }}
                      >
                        Get Christmas Pricing
                      </Link>

                      <Link
                        href="/holidays"
                        className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
                      >
                        Back to Holidays
                      </Link>
                    </div>

                    <p className="mt-4 text-sm text-gray-300">
                      Family-friendly • No fallout • Venue-safe • FAA Part 107 operations
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
              A Venue-Friendly Holiday Spectacle
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Christmas events need magic — but venues also need control. Drone light shows
              deliver a clean, quiet, high-impact display without smoke, fallout, or
              firework debris. Ideal for resorts, casinos, shopping centers, city events,
              and community celebrations.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">No Fallout</h3>
                <p className="text-gray-300">
                  No ash or debris on rooftops, pool decks, signage, or landscaping —
                  cleaner for venues and safer for guests.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Built for Crowds</h3>
                <p className="text-gray-300">
                  Designed to look incredible on phones — crisp holiday icons and
                  readable messaging that guests will post instantly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Sponsor-Ready</h3>
                <p className="text-gray-300">
                  Add “presented by” moments, logos, and branded scenes to increase
                  sponsor value and event revenue.
                </p>
              </div>
            </div>

            {/* What we can show */}
            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                What We Can Put in the Sky
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Christmas trees, ornaments, snowflakes, candy canes, gifts</li>
                <li>Santa / sleigh moments (stylized for clean readability)</li>
                <li>“Merry Christmas” / “Happy Holidays” messaging</li>
                <li>Venue name, city name, and sponsor logo callouts</li>
                <li>Multi-scene shows for countdowns, parades, and tree lightings</li>
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
                  "Shopping centers & outdoor malls",
                  "City tree lightings",
                  "Holiday parades & festivals",
                  "HOA / community nights",
                  "Hotel holiday activations",
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
                Request Christmas Availability
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
