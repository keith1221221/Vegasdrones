import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import HeroVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

// Vegas brand red
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Las Vegas Convention & Trade Show Drone Shows | Vegas Drones",
  description:
    "Stand out at Las Vegas conventions and trade shows with custom drone light shows. Perfect for brand activations, outdoor displays, and high-impact crowd engagement.",
  keywords: [
    "Las Vegas conventions",
    "trade show drone show",
    "convention entertainment Las Vegas",
    "brand activation drone show",
    "Vegas drone advertising",
    "CES drone show",
    "SHOT Show drone display",
    "Las Vegas expo drone light show",
  ],
  alternates: { canonical: `${SITE_URL}/conventions-trade-shows` },
  openGraph: {
    title: "Las Vegas Convention & Trade Show Drone Shows | Vegas Drones",
    description:
      "Attract crowds and elevate your brand at Las Vegas conventions with stunning custom drone light shows.",
    url: `${SITE_URL}/conventions-trade-shows`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones Convention Drone Show",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ConventionsPage() {
  // Optional FAQ schema (kept light; you can expand later)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/conventions-trade-shows#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you show our logo or product in the sky?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can animate logos, product icons, messaging, and multi-scene sequences designed for maximum readability and crowd reaction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle venue coordination and FAA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We handle planning, safety, airspace coordination, and venue logistics as part of production.",
        },
      },
    ],
  };

  // ✅ Breadcrumb schema (separate from FAQ)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/conventions-trade-shows#breadcrumb`,
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
        name: "Conventions & Trade Shows",
        item: `${SITE_URL}/conventions-trade-shows`,
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      {/* FAQ Schema (JSON-LD) */}
      <Script
        id="ld-faq-conventions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Schema (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-conventions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO — match the Drone Light Shows page style */}
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
            <span className="text-white"> CONVENTION </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED_LIGHT}, ${BRAND_RED}, ${BRAND_RED_LIGHT})`,
              }}
            >
              DRONE SHOWS
            </span>
          </>
        }
        subtitle={
          <>
            Turn the Las Vegas sky into a branded canvas —{" "}
            <strong>logos</strong>, <strong>messaging</strong>, and{" "}
            <strong>high-impact aerial activations</strong> built for{" "}
            <strong>conventions</strong>, <strong>trade shows</strong>,{" "}
            product launches, and after-hours activations.
          </>
        }
        bottomLine={<>A Billboard in the Sky — Built for Las Vegas Brand Activations</>}
        primaryCta={{ href: "/contact", label: "Request Convention Pricing" }}
        secondaryCta={{ href: "/drone-advertising", label: "Drone Advertising" }}
      />

      {/* CONTENT */}
      <main className="min-h-screen bg-black text-white font-poppins">
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="sr-only">
                Drone Shows for Conventions & Trade Shows in Las Vegas
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Las Vegas hosts more conventions and trade shows than any city on
                earth — and standing out in a sea of exhibitors is a challenge.
                Our custom drone light shows create unforgettable brand moments
                that draw crowds, generate social buzz, and elevate your presence
                at outdoor convention venues, expo centers, and after-hours
                activations.
              </p>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mt-12 mb-16">
              <img
                src="/lions.png"
                alt="Drone show at Las Vegas convention"
                className="w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-800"
                loading="lazy"
              />
            </div>

            {/* Sections */}
            <div className="space-y-12">
              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  The Ultimate Convention Attention-Grabber
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you&apos;re launching a product, hosting a client event,
                  promoting a booth, or activating a sponsorship, a drone light
                  show delivers massive visual impact. We design formations that
                  highlight your brand, logo, colors, and messaging — scheduled
                  for maximum visibility during convention evenings and peak foot
                  traffic.
                </p>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Why Drone Shows Work for Trade Shows
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>Draw crowds from every direction — even outside the venue</li>
                  <li>Promote new products with animated sky graphics</li>
                  <li>Display your company logo, name, or tagline in the sky</li>
                  <li>
                    Perfect for outdoor exhibitor events or after-hours activations
                  </li>
                  <li>Fully customizable to match your brand identity</li>
                  <li>FAA Part 107 certified operations with full safety protocols</li>
                </ul>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Ideal for Major Las Vegas Conventions
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We’ve tailored drone shows for events across Las Vegas, including:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>CES – Consumer Electronics Show</li>
                  <li>SHOT Show</li>
                  <li>SEMA</li>
                  <li>MAGIC / Fashion Market</li>
                  <li>NAB Show</li>
                  <li>Money 20/20</li>
                  <li>World of Concrete</li>
                  <li>IMEX America</li>
                </ul>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Fully Custom, Brand-Forward Drone Shows
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We manage the entire production — from creative concept and
                  animation design to FAA coordination and on-site execution. Logo
                  formations, text effects, animated transitions, and 3D motion can
                  all be built into your show. Fleets scale from 50 to 500+ drones
                  based on venue size and visual goals.
                </p>
              </section>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-black font-semibold text-lg rounded-full transition font-orbitron hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 25px rgba(255,59,59,0.35)",
                }}
              >
                Request Convention Pricing
              </Link>

              <p className="text-gray-400 mt-4 text-sm">
                Tell us your event date, venue, and brand goals — we’ll recommend a
                drone count and a plan that fits.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
