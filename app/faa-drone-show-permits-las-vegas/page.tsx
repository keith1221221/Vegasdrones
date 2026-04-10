import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/faa-drone-show-permits-las-vegas`;
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "FAA Drone Show Permits in Las Vegas | Airspace Planning | Vegas Drones",
  description:
    "Las Vegas drone show permits and FAA coordination can be complex because of airport proximity and venue-specific airspace. Learn the basics and how Vegas Drones approaches planning.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "FAA Drone Show Permits in Las Vegas | Vegas Drones",
    description:
      "A practical overview of airspace planning, FAA authorization, and venue coordination for drone shows in Las Vegas.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}/alienhead1.png`,
        width: 1200,
        height: 630,
        alt: "Las Vegas drone show permits and FAA planning guide",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function FaaDroneShowPermitsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do drone shows need FAA authorization in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Professional drone shows require the right FAA framework, airspace review, and operational planning before launch.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Las Vegas airspace more complex than some other cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las Vegas events can be close to Harry Reid International Airport, the Strip, and other controlled or sensitive airspace areas, which adds coordination requirements.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white font-poppins">
      <Script
        id="ld-faq-faa-permits"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <section className="text-center">
          <h1 className="font-orbitron text-4xl font-bold sm:text-5xl">
            <span className="text-white">FAA DRONE SHOW PERMITS IN </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})` }}
            >
              LAS VEGAS
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Drone show planning in Las Vegas requires more than creative design. Airspace, venue layout,
            launch area safety, and event timing all need to be reviewed before a show can move forward.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">Why Airspace Matters</h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              Las Vegas has a high concentration of resorts, stadium-adjacent venues, major events, and airspace
              constraints. A drone show operator needs to evaluate location-specific restrictions early so the event
              plan matches reality.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">What Planning Usually Includes</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
              <li>Site review and launch area assessment</li>
              <li>Airspace and timing review</li>
              <li>Safety perimeter and audience placement planning</li>
              <li>Venue coordination and operational timing</li>
              <li>Creative planning that fits the site and audience view</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-orbitron text-2xl font-bold text-white">How Vegas Drones Approaches It</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Vegas Drones plans for the reality of Las Vegas venues rather than treating every show like an open field.
            That includes evaluating site constraints early, aligning creative scope with the venue, and building a show
            plan that can actually be executed safely and professionally.
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
            Talk Through Your Venue
          </Link>
          <Link
            href="/las-vegas-drone-show"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-orbitron font-bold text-white transition hover:bg-white/10"
          >
            Learn More About Las Vegas Drone Shows
          </Link>
        </div>
      </div>
    </main>
  );
}
