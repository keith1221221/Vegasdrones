import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/las-vegas-drone-show-cost`;
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "What Does a Drone Show Cost? | Starting at $6,000 | Vegas Drones",
  description:
    "Custom drone shows starting at $6,000. A Vegas-born company with no travel fees for Las Vegas shows. Explore pricing factors and get a tailored event quote.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Drone Shows Starting at $6,000 | Vegas Drones",
    description:
      "Drone shows starting at $6,000, with custom quotes based on show size, creative scope and venue requirements. No travel fees for Las Vegas shows.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}/alienhead1.png`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones pricing guide for Las Vegas drone shows",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function LasVegasDroneShowCostPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Las Vegas Drone Show Cost", item: PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a Vegas Drones show cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vegas Drones shows start at $6,000. The final quote depends on drone count, creative scope, show duration, event date and venue requirements. There are no travel fees for Las Vegas shows.",
        },
      },
      {
        "@type": "Question",
        name: "What affects Las Vegas drone show pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on drone count, creative complexity, show runtime, venue logistics, airspace coordination, rehearsal needs, and whether the production is a one-night show or multi-night run.",
        },
      },
      {
        "@type": "Question",
        name: "Does a bigger drone count always mean a better show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Larger fleets can create more detail and bigger visuals, but the right drone count depends on your venue, audience distance, creative goals, and budget.",
        },
      },
      {
        "@type": "Question",
        name: "Why can Las Vegas airspace affect pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las Vegas venues can involve more complex airspace planning because of nearby airports, Strip-adjacent restrictions, and venue-specific safety coordination. That planning work affects production scope and timing.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white font-poppins">
      <Script
        id="ld-breadcrumbs-drone-show-cost"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-faq-drone-show-cost"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <section className="text-center">
          <h1 className="font-orbitron text-4xl font-bold leading-tight sm:text-5xl">
            What Does a <span className="text-[#FF6A6A]">Drone Show Cost?</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300">Custom drone shows starting at</p>
          <p className="mt-2 font-orbitron text-6xl font-bold sm:text-7xl">$6,000</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            A starting point for planning your event. Your final quote is tailored
            to the show size, creative scope, event date, and venue requirements.
          </p>
          <p className="mt-5 font-semibold text-white">A Vegas-born company. No travel fees for Las Vegas shows.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF3B3B] px-8 py-4 font-bold text-black hover:bg-[#FF6A6A]">Check My Date &amp; Get Pricing</Link>
          <p className="mt-4 text-sm text-gray-400">Share your date, venue, and ideas. We’ll recommend a show that fits.</p>
        </section>

        <section className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="border-t border-white/15 pt-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">Primary Pricing Factors</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
              <li>Drone count and visual detail level</li>
              <li>Custom logos, names, product imagery, and animation complexity</li>
              <li>Show duration and number of scenes</li>
              <li>Venue setup requirements and launch area logistics</li>
              <li>Airspace coordination and scheduling complexity</li>
              <li>Single-night versus multi-night programming</li>
            </ul>
          </div>

          <div className="border-t border-white/15 pt-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">How To Get Accurate Pricing</h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              The fastest path to a useful quote is sharing your date, venue or venue area, estimated
              audience size, and whether you need branding, names, messaging, or a holiday theme.
              That lets Vegas Drones recommend the right fleet size and production scope for the event.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-white/15 pt-8">
          <h2 className="font-orbitron text-2xl font-bold text-white">Why Las Vegas Pricing Can Vary</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Las Vegas is not a generic event market. Strip-adjacent properties, resort venues,
            convention campuses, golf courses, rooftops, and sports-adjacent sites all come with
            different spacing, visibility, guest-flow, and airspace considerations. A professional
            proposal accounts for those real-world production variables up front.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-orbitron font-bold text-black transition hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 25px rgba(255,59,59,0.35)",
            }}
          >
            Get My Custom Quote
          </Link>
          <Link
            href="/see-our-shows"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-orbitron font-bold text-white transition hover:bg-white/10"
          >
            Watch Our Shows
          </Link>
        </div>
      </div>
    </main>
  );
}
