import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import HeroVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

const PAGE_URL = `${SITE_URL}/las-vegas-drone-light-shows`;

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
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Las Vegas Drone Light Shows | Vegas Drones",
    description:
      "Unforgettable drone light shows in Las Vegas — custom designs for weddings, corporate events, festivals, and brand activations.",
    url: PAGE_URL,
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
    "@id": `${PAGE_URL}#faq`,
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
    "@id": `${PAGE_URL}#breadcrumb`,
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
        name: "Drone Light Shows",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      <Script
        id="ld-faq-drone-light-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Script
        id="ld-breadcrumbs-drone-light-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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

      <main className="px-6 pb-20 pt-10 sm:pt-14 font-poppins">
        <div className="max-w-5xl mx-auto">
          <section className="text-center">
            <h1 className="sr-only">Drone Light Shows in Las Vegas</h1>

            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              <span style={{ color: BRAND_RED }}>
                Turn your event into a true Las Vegas spectacle.
              </span>{" "}
              We produce drone light shows that deliver breathtaking aerial
              animations, logos, and custom storytelling — synchronized, scalable,
              and built to create unforgettable moments. Looking for a broader
              overview of what a{" "}
              <Link
                href="/las-vegas-drone-show"
                className="underline underline-offset-4 hover:text-white"
              >
                Las Vegas drone show
              </Link>{" "}
              can do for your venue or event?
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

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Looking for a Las Vegas Drone Show?
            </h2>

            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              If you're researching a <strong>Las Vegas drone show</strong> for a hotel,
              festival, corporate event, sports venue, holiday celebration, or private
              activation, visit our main city page for a broader overview of how drone
              shows work in Las Vegas, where they fit best, and recent event examples.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/las-vegas-drone-show"
                className="inline-flex items-center justify-center text-black font-bold py-3.5 px-7 rounded-full transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 22px rgba(255,59,59,0.3)",
                }}
              >
                Explore Las Vegas Drone Shows
              </Link>

              <Link
                href="/blog/st-patricks-day-drone-show-las-vegas-strip-recap"
                className="inline-flex items-center justify-center py-3.5 px-7 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
              >
                View Recent Event Recap
              </Link>
            </div>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-neutral-900">
                <img
                  src="/st-patricks-day-drone-show-clover.jpg"
                  alt="Clover formation from a Las Vegas drone light show by Vegas Drones"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-neutral-900">
                <img
                  src="/st-patricks-day-drone-show-claddagh.jpg"
                  alt="Claddagh formation from a St Patrick's Day drone light show in Las Vegas"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] bg-neutral-900">
                <img
                  src="/st-patricks-day-drone-show-leprechaun.jpg"
                  alt="Leprechaun formation from a Las Vegas drone light show event"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Custom Drone Light Shows for Las Vegas Events
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Las Vegas drone light shows are ideal for hotels, resorts, casinos,
                festivals, conventions, corporate events, sports venues, weddings,
                and branded activations. Because every scene is programmable, visuals
                can be tailored to logos, names, dates, holiday themes, sponsor
                messaging, and multi-scene aerial storytelling.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Why Choose a Drone Light Show Instead of Fireworks?
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                A drone light show offers a modern visual experience with precise
                choreography, repeatable animations, and sponsor-friendly branding.
                For many venues and event planners, drone shows provide a clean,
                premium-looking entertainment option that stands out both in person
                and across social media.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Recent Las Vegas Drone Show Example
            </h2>

            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              See our recent St. Patrick’s Day drone light show recap from BLVD Las Vegas
              on the Las Vegas Strip. This completed event includes video, photos,
              and recap coverage from a real Las Vegas drone light show activation.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/blog/st-patricks-day-drone-show-las-vegas-strip-recap"
                className="inline-flex items-center justify-center text-black font-bold py-3.5 px-7 rounded-full transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                }}
              >
                View Event Recap
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center py-3.5 px-7 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
              >
                Browse More Blog Posts
              </Link>
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  How much does a drone light show cost in Las Vegas?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Pricing depends on drone count, show length, design complexity,
                  venue logistics, and the amount of customization required.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Are drone light shows legal in Las Vegas?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Yes. Drone light shows are legal when operated by FAA Part 107
                  certified pilots with proper airspace authorization and event planning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Can you display logos, names, and dates in the sky?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Yes. We can create custom formations and animated scenes featuring
                  branding, names, dates, icons, and themed visuals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  What kinds of events are drone light shows best for?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Drone light shows are popular for weddings, festivals, hotel
                  activations, corporate events, sports venues, public celebrations,
                  and major holiday events.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Ready to Plan a Drone Light Show?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Tell us about your event date, venue, and vision. We’ll help you
              explore the right drone count, creative direction, and next steps
              for a custom Las Vegas drone light show.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full transform hover:scale-105 transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 25px rgba(255,59,59,0.35)",
                }}
              >
                Get Pricing
              </Link>

              <Link
                href="/las-vegas-drone-show"
                className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
              >
                Explore Las Vegas Drone Shows
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}