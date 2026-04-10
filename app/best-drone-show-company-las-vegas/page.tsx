import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/best-drone-show-company-las-vegas`;
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Best Drone Show Company in Las Vegas | Vegas Drones",
  description:
    "Looking for the best drone show company in Las Vegas? Compare the factors that matter most: local experience, FAA coordination, venue logistics, creative quality, and proof of real event work.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best Drone Show Company in Las Vegas | Vegas Drones",
    description:
      "What event planners should look for when choosing a drone show company in Las Vegas, from airspace knowledge to event execution.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}/alienhead1.png`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones Las Vegas drone show company guide",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function BestDroneShowCompanyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Best Drone Show Company in Las Vegas", item: PAGE_URL },
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white font-poppins">
      <Script
        id="ld-breadcrumbs-best-drone-show-company"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <section className="text-center">
          <h1 className="font-orbitron text-4xl font-bold sm:text-5xl">
            <span className="text-white">BEST DRONE SHOW COMPANY IN </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})` }}
            >
              LAS VEGAS
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            The best drone show company for a Las Vegas event is not just the one with nice renderings.
            It is the team that can handle local airspace, venue constraints, creative clarity, show execution,
            and the kind of client communication that keeps a high-stakes event on track.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">What To Evaluate</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
              <li>Las Vegas venue and airspace familiarity</li>
              <li>FAA Part 107 compliance and event safety planning</li>
              <li>Ability to create readable logos and clean animation</li>
              <li>Experience with conventions, resorts, public events, and private clients</li>
              <li>Proof of real event work, not just concept art</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">Why Local Matters</h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              Las Vegas is a specialized event market. Operators who understand Strip-adjacent logistics,
              convention schedules, guest sightlines, and local production expectations are better equipped
              to recommend a workable show plan and keep execution clean.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-orbitron text-2xl font-bold text-white">Why Event Planners Consider Vegas Drones</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Vegas Drones focuses on Las Vegas drone shows for conventions, corporate events, resorts,
            festivals, weddings, and branded activations. The company operates under Skylight Ads LLC
            and emphasizes local market knowledge, FAA-compliant operations, custom visuals, and real-world
            event execution rather than generic national fly-in production.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/see-our-shows"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-orbitron font-bold text-black transition hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 25px rgba(255,59,59,0.35)",
            }}
          >
            See Real Shows
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-orbitron font-bold text-white transition hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
