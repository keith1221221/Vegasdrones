import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import HeroVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

// Brand reds
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Las Vegas Drone Light Shows | Vegas Drones",
  description:
    "Premium drone light shows in Las Vegas for holidays, corporate events, festivals, and brand activations. Fully custom designs, FAA-compliant operations, and unforgettable aerial entertainment.",
  keywords: [
    "Las Vegas drone light show",
    "Las Vegas drone light show company",
    "drone light show Las Vegas",
    "wedding drone light show",
    "corporate drone show",
    "festival drone show",
    "brand activation drone show",
    "custom drone show",
    "Vegas Drones",
  ],
  alternates: { canonical: `${SITE_URL}/drone-light-shows` },
  openGraph: {
    title: "Las Vegas Drone Light Shows | Vegas Drones",
    description:
      "Unforgettable drone light shows in Las Vegas — custom designs for weddings, corporate events, festivals, and brand activations.",
    url: `${SITE_URL}/drone-light-shows`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones Drone Light Show",
      },
    ],
  },
};

export default function DroneLightShowsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a drone light show cost in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drone light show pricing depends on drone count, show length, customization, and venue logistics. As a baseline, pricing often starts around $90 per drone, then scales based on complexity and production needs.",
        },
      },
      {
        "@type": "Question",
        name: "How many drones do I need for a Las Vegas drone light show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The right drone count depends on your venue size and what you want to show. Smaller fleets can deliver clean icons and simple text, while larger fleets enable higher detail, smoother animation, and bigger visuals. Shows commonly range from 50 to 1000+ drones.",
        },
      },
      {
        "@type": "Question",
        name: "Are drone light shows legal in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Drone light shows are legal when operated by FAA Part 107 certified pilots with appropriate airspace authorization and event/venue coordination. We handle planning and compliance as part of the production process.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a drone light show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For the best availability—especially during holidays and peak event weekends—booking several weeks to a few months in advance is recommended. Larger custom productions may require additional lead time for design and coordination.",
        },
      },
      {
        "@type": "Question",
        name: "Can you display names, dates, or logos in the sky?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We create custom formations and animations including names, dates, sponsor logos, icons, and multi-scene sequences. We can tailor the show to weddings, corporate events, festivals, and brand activations.",
        },
      },
      {
        "@type": "Question",
        name: "What kinds of events are drone light shows best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drone light shows are popular for weddings and engagements, corporate events and conferences, festivals, sports events, hotel/casino activations, and major holidays like July 4th, Halloween, Christmas, and New Year’s.",
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      {/* FAQ Schema (JSON-LD) */}
      <Script
        id="ld-faq-drone-light-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO (same setup as home) */}
      <HeroVideo
        title={
          <>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              LAS VEGAS 
            </span>
            <span className="text-white"> DRONE </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED_LIGHT}, ${BRAND_RED}, ${BRAND_RED_LIGHT})`,
              }}
            >
              LIGHT SHOWS
            </span>
          </>
        }
        subtitle={
          <>
            Premium, fully custom drone light shows for holidays, corporate events,
            festivals, and brand activations — designed for clean logos, readable
            text, and big crowd reaction.
          </>
        }
        bottomLine={<>A High-Impact Alternative to Fireworks — Built for Las Vegas</>}
        primaryCta={{ href: "/contact", label: "Get Pricing" }}
      />

      <main className="px-6 pb-16 pt-10 sm:pt-14 font-poppins">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <section className="text-center">
            <h1 className="sr-only">Drone Light Shows in Las Vegas</h1>

            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              <span style={{ color: BRAND_RED }}>
                Turn your event into a true Las Vegas spectacle.
              </span>{" "}
              We produce drone light shows that deliver breathtaking aerial
              animations, logos, and custom storytelling — synchronized, scalable,
              and built to create the kind of “wow moment” people record, post, and
              remember.
            </p>
          </section>

          {/* Cards */}
          <section className="mt-12 grid grid-cols-1 gap-8">
            <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-lg">
              <h2
                className="text-2xl sm:text-3xl font-bold font-orbitron text-center"
                style={{ color: BRAND_RED }}
              >
                High-Impact Entertainment, Fully Customized
              </h2>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Every show is designed around your event and your audience. From
                elegant wedding moments to high-energy brand activations, we create
                custom formations and animations — names, dates, logos, icons, and
                full sequences — all choreographed into a polished aerial
                performance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-lg">
              <h2
                className="text-2xl sm:text-3xl font-bold font-orbitron text-center"
                style={{ color: BRAND_RED }}
              >
                Perfect For
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-3 text-gray-200">
                <li>Weddings & engagements (names, date, custom finale)</li>
                <li>Corporate events & conferences (logos, messaging, reveals)</li>
                <li>Festivals, grand openings, and community celebrations</li>
                <li>Sports events and halftime-style entertainment</li>
                <li>Hotel, casino, and nightlife brand activations</li>
                <li>Holiday shows (July 4th, Halloween, Christmas, New Year’s)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-lg">
              <h2
                className="text-2xl sm:text-3xl font-bold font-orbitron text-center"
                style={{ color: BRAND_RED }}
              >
                What You Get With Vegas Drones
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-3 text-gray-200">
                <li>Custom show design from concept → final animation</li>
                <li>FAA Part 107 certified operations with safety protocols</li>
                <li>Venue coordination, site planning, and logistics</li>
                <li>Show scaling options — intimate displays to massive productions</li>
                <li>On-site pro crew, launch/grid setup, and execution</li>
                <li>Built for social sharing (readable text, strong pacing)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-lg">
              <h2
                className="text-2xl sm:text-3xl font-bold font-orbitron text-center"
                style={{ color: BRAND_RED }}
              >
                Scalable Shows: 50 to 1000+ Drones
              </h2>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Need a clean logo moment? A big reveal? A multi-scene story? We can
                scale your drone count to match your venue, budget, and visual
                goals. Larger fleets unlock more detail, smoother motion, and
                bigger visuals — while smaller shows can still deliver a premium
                experience.
              </p>
            </div>
          </section>

          {/* Flag photo moved to lower section */}
          <section className="mt-14">
            <div className="w-full flex justify-center">
              <img
                src="/flag_400.png"
                alt="Drone light show American flag"
                className="w-full max-w-4xl rounded-2xl shadow-2xl object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2
              className="text-3xl font-bold font-orbitron text-center"
              style={{ color: BRAND_RED }}
            >
              Drone Light Show FAQs
            </h2>

            <div className="mt-8 space-y-7 text-gray-200">
              {[
                {
                  q: "How much does a drone light show cost in Las Vegas?",
                  a: "Drone light show pricing depends on drone count, show length, customization, and venue logistics. As a baseline, pricing often starts around $90 per drone, then scales based on complexity and production needs.",
                },
                {
                  q: "How many drones do I need for a Las Vegas drone light show?",
                  a: "The right drone count depends on your venue size and what you want to show. Smaller fleets can deliver clean icons and simple text, while larger fleets enable higher detail, smoother animation, and bigger visuals. Shows commonly range from 50 to 1000+ drones.",
                },
                {
                  q: "Are drone light shows legal in Las Vegas?",
                  a: "Yes. Drone light shows are legal when operated by FAA Part 107 certified pilots with appropriate airspace authorization and event/venue coordination. We handle planning and compliance as part of the production process.",
                },
                {
                  q: "How far in advance should I book a drone light show?",
                  a: "For the best availability—especially during holidays and peak event weekends—booking several weeks to a few months in advance is recommended. Larger custom productions may require additional lead time for design and coordination.",
                },
                {
                  q: "Can you display names, dates, or logos in the sky?",
                  a: "Yes. We create custom formations and animations including names, dates, sponsor logos, icons, and multi-scene sequences. We can tailor the show to weddings, corporate events, festivals, and brand activations.",
                },
                {
                  q: "What kinds of events are drone light shows best for?",
                  a: "Drone light shows are popular for weddings and engagements, corporate events and conferences, festivals, sports events, hotel/casino activations, and major holidays like July 4th, Halloween, Christmas, and New Year’s.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-gray-900 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Request Drone Show Pricing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
