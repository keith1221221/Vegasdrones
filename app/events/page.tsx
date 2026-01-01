import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Drone Light Shows for Events in Las Vegas | Vegas Drones",
  description:
    "Drone light shows for Las Vegas events — corporate events, weddings, private parties, festivals, and brand activations. Custom logos, names, dates, and cinematic storytelling with 100–1000+ drones.",
  alternates: { canonical: `${SITE_URL}/events` },
  openGraph: {
    title: "Drone Light Shows for Events in Las Vegas | Vegas Drones",
    description:
      "Book event-ready drone light shows in Las Vegas — corporate events, weddings, private events, and brand activations. Venue-safe, fully custom, FAA-compliant.",
    url: `${SITE_URL}/events`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}/alienhead1.png`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones event drone light show",
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

export default function EventsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="relative">
        <HeroVideo
          title={
            <>
              <span className="text-white">LAS VEGAS EVENT</span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                }}
              >
                DRONE SHOWS
              </span>
            </>
          }
          subtitle={
            <>
              Corporate events, weddings, and private celebrations — fully custom drone light
              shows in Las Vegas with <strong>100–1000+ drones</strong>, designed for
              crowd reaction and social sharing.
            </>
          }
          bottomLine={
            <>A Modern, Venue-Friendly Alternative to Fireworks — Built for Las Vegas</>
          }
          primaryCta={{ href: "/contact", label: "Get Event Pricing" }}
        />

        {/* Overlay CTA at bottom of hero (single button) */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-5 sm:pb-7">
            <div className="mb-3 sm:mb-4">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            <div className="pointer-events-auto flex justify-center">
            
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="bg-black text-white px-6 pt-10 sm:pt-12 pb-16 font-poppins -mt-10 sm:-mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron text-[#FF3B3B]">
            Pick Your Event Type
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Start here, then jump into the page that matches your event. Each category is
            built to convert: clear outcomes, venue fit, and what we can put in the sky.
          </p>

          {/* Branch links (create pages next) */}
          <section className="max-w-5xl mx-auto text-left mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
                href="/corporate-events"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">
                  Corporate Events
                </div>
                <p className="text-gray-300">
                  Logos, product reveals, sponsor moments, and conference after-hours
                  activations.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View corporate events →
                </div>
              </Link>

              <Link
                href="/weddings"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">Weddings</div>
                <p className="text-gray-300">
                  Names, date, and a signature romantic finale — elegant, cinematic, and
                  unforgettable.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View weddings →
                </div>
              </Link>

              <Link
                href="/private-events"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">Private Events</div>
                <p className="text-gray-300">
                  Birthdays, proposals, milestone parties, and VIP celebrations with
                  custom icons and messaging.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View private events →
                </div>
              </Link>
            </div>
          </section>

          {/* Why drone shows for events */}
          <section className="mb-14">
            <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5">
              Why Event Planners Choose Drone Shows
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-orbitron text-lg text-white mb-2">Venue-Friendly</h4>
                <p className="text-gray-300">
                  No smoke or fallout. Great for hotels, casinos, rooftops, pool decks,
                  golf courses, and city parks.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-orbitron text-lg text-white mb-2">Fully Custom</h4>
                <p className="text-gray-300">
                  Logos, names, dates, icons, and animated sequences that match your theme
                  and brand.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="font-orbitron text-lg text-white mb-2">Built for Social</h4>
                <p className="text-gray-300">
                  Big “hero moments” designed to be filmed and shared — ideal for sponsor
                  value and marketing.
                </p>
              </div>
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
              Request Event Availability
            </Link>

            <p className="text-gray-400 mt-5 text-sm">
              Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured
              operations
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
