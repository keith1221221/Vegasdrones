import Link from "next/link";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";

export const metadata = {
  title: "Las Vegas Drone Advertising | Aerial Brand Activations | Vegas Drones",
  description:
    "Drone advertising in Las Vegas: branded aerial light shows, sky logos, and high-impact activations for product launches, casinos, nightlife, and major events. Fully custom, FAA-compliant operations.",
  keywords: [
    "drone advertising Las Vegas",
    "Las Vegas drone advertising",
    "aerial advertising",
    "sky logo drones",
    "drone brand activation",
    "event marketing Las Vegas",
    "drone light show advertising",
    "Vegas Drones advertising",
  ],
  openGraph: {
    title: "Las Vegas Drone Advertising | Vegas Drones",
    description:
      "High-impact drone advertising and brand activations in Las Vegas — logos, messaging, and unforgettable aerial moments.",
    url: "https://www.vegasdrones.com/drone-advertising",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Drone Advertising",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Vegas brand reds
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function DroneAdvertisingPage() {
  return (
    <>
      <Header />

      <HeroVideo
        title={
          <>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              DRONE
            </span>{" "}
            <span className="text-white">ADVERTISING</span>
          </>
        }
        subtitle={
          <>
            Turn the Las Vegas sky into a branded canvas — logos, messaging, and
            high-impact aerial activations built for product launches, casinos,
            nightlife, and major events.
          </>
        }
        bottomLine={
          <>A Billboard in the Sky — Built for Las Vegas Brand Activations</>
        }
        primaryCta={{ href: "/contact", label: "Get an Advertising Quote" }}
      />

      <main className="min-h-screen bg-black text-white pt-12 sm:pt-16 pb-16 px-6 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          {/* Intro Paragraph */}
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Want attention that can’t be scrolled past? Drone advertising turns
            the night sky into a massive branded canvas — perfect for product
            launches, casino/nightlife promotions, grand openings, and outdoor
            brand activations. We create custom aerial logos, icons, and messages
            designed to drive crowd engagement and social sharing.
          </p>

          {/* Section 1 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              A Billboard in the Sky
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Drone advertising delivers a jaw-dropping visual moment that people
              stop for — and record. We design sky-ready logos, simple animated
              sequences, and readable messaging that stays crisp at distance while
              still looking premium on camera.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Best Use Cases
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Product launches & big reveals</li>
              <li>Casino, hotel, and nightlife promotions</li>
              <li>Grand openings & ribbon-cutting events</li>
              <li>Sports & arena-adjacent activations</li>
              <li>Trade show after-hours events & sponsor moments</li>
              <li>Festival sponsorships & headline moments</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Branded Content That Performs on Social
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We build sequences with marketing in mind:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Clean logo silhouettes and readable text</li>
              <li>Strong pacing so the “hero moment” hits on camera</li>
              <li>Optional QR-style callouts (venue dependent) and hashtag prompts</li>
              <li>Multi-scene sequences for storytelling and retention</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Full-Service + FAA Compliance
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We handle everything: site planning, safety protocols, airspace/FAA
              coordination as required, and professional on-site execution. Our
              team is built for live events — meaning your activation runs
              smoothly, safely, and on schedule.
            </p>
          </section>

          {/* Lower image (like your other pages) */}
          <div className="w-full flex justify-center mt-10 mb-12">
            <img
              src="/lions.png"
              alt="Drone advertising activation in Las Vegas"
              className="w-full max-w-3xl rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-black font-semibold text-lg rounded-full transition font-orbitron hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Get an Advertising Quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
