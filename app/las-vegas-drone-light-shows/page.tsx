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
            "Drone light show pricing depends on drone count, show length, customization, and venue logistics.",
        },
      },
      {
        "@type": "Question",
        name: "How many drones do I need for a Las Vegas drone light show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The right drone count depends on your venue size and what you want to show. Smaller fleets can deliver clean icons and simple text, while larger fleets enable higher detail, smoother animation, and bigger visuals.",
        },
      },
      {
        "@type": "Question",
        name: "Are drone light shows legal in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Drone light shows are legal when operated by FAA Part 107 certified pilots with appropriate airspace authorization and event coordination.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a drone light show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Booking several weeks to a few months in advance is recommended, especially for holidays and peak event dates.",
        },
      },
      {
        "@type": "Question",
        name: "Can you display names, dates, or logos in the sky?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We create custom formations and animations including names, dates, logos, icons, and multi-scene sequences.",
        },
      },
      {
        "@type": "Question",
        name: "What kinds of events are drone light shows best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drone light shows are popular for weddings, corporate events, festivals, sports events, hotel activations, and major holidays.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vegasdrones.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Drone Light Shows",
        item: "https://www.vegasdrones.com/las-vegas-drone-light-shows",
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      {/* FAQ Schema */}
      <Script
        id="ld-faq-drone-light-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="ld-breadcrumbs-drone-light-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
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
          <section className="text-center">
            <h1 className="sr-only">Drone Light Shows in Las Vegas</h1>

            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              <span style={{ color: BRAND_RED }}>
                Turn your event into a true Las Vegas spectacle.
              </span>{" "}
              We produce drone light shows that deliver breathtaking aerial
              animations, logos, and custom storytelling — synchronized, scalable,
              and built to create unforgettable moments.
            </p>
          </section>

          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Request Drone Show Information
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
