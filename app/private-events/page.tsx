import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Las Vegas Private Event Drone Shows | Vegas Drones",
  description:
    "Book a private event drone light show in Las Vegas. Birthdays, engagements, proposals, anniversaries, and VIP celebrations — fully custom, venue-safe, and FAA-compliant production.",
  keywords: [
    "Las Vegas private event drone show",
    "birthday drone light show Las Vegas",
    "proposal drone show",
    "engagement drone show Las Vegas",
    "anniversary drone light show",
    "VIP celebration drone show",
    "Vegas Drones private events",
  ],
  alternates: {
    canonical: "https://www.vegasdrones.com/private-events",
  },
  openGraph: {
    title: "Las Vegas Private Event Drone Shows | Vegas Drones",
    description:
      "Private event drone light shows in Las Vegas — proposals, birthdays, anniversaries, and VIP celebrations with custom names, dates, and icons.",
    url: "https://www.vegasdrones.com/private-events",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones private event drone light show",
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

export default function PrivateEventsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          {/* PAGE TITLE */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-orbitron">
            <span className="text-white">PRIVATE </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              EVENT DRONE SHOWS
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Make your moment unforgettable. We create premium drone light shows for
            private celebrations in Las Vegas — names, dates, icons, and cinematic
            finales designed for the people who matter most.
          </p>

          {/* HERO IMAGE (NO FIREWORKS VIDEO) */}
          <div className="w-full flex justify-center mb-14">
            <img
              src="/flag_400.png"
              alt="Private event drone light show in Las Vegas"
              className="w-full max-w-3xl rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* SECTION 1 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Built for Your Story
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Private events deserve more than a generic show. We tailor your visuals to
              your message — elegant pacing, readable text, and clean animations that
              look incredible in person and on camera.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Perfect For
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Proposals & engagements (rings, hearts, “Will you marry me?”)</li>
              <li>Birthdays & milestone celebrations</li>
              <li>Anniversaries & vow renewals</li>
              <li>Graduations & family reunions</li>
              <li>VIP parties, rooftops, and luxury rentals</li>
              <li>Surprise reveals (names, dates, custom icons)</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              What We Can Put in the Sky
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Names, initials, dates, and short messages</li>
              <li>Hearts, rings, stars, custom icons, and themed visuals</li>
              <li>Multi-scene sequences (intro → message → finale)</li>
              <li>Photo/video-friendly hero moments for social sharing</li>
              <li>Optional “presented by” or surprise dedication moments</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Simple Planning, Professional Execution
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Tell us your date, location area, and what you want to say. We’ll recommend
              drone count, viewing layout, and a sequence plan — then handle safety,
              coordination, and FAA-compliant operations.
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
              Request Private Event Pricing
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
