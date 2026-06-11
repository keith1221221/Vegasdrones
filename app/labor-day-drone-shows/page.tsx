import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Labor Day Drone Light Shows in Las Vegas | Vegas Drones",
  description:
    "Book a Labor Day drone light show in Las Vegas. A venue-safe, crowd-winning alternative to fireworks for resorts, festivals, and community celebrations — fully custom and FAA compliant.",
  alternates: {
    canonical: `${SITE_URL}/labor-day-drone-shows`,
  },
  openGraph: {
    title: "Labor Day Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "Labor Day drone light shows in Las Vegas — end-of-summer headline moments for resorts, festivals, and city events. Custom animations and sponsor-ready scenes.",
    url: `${SITE_URL}/labor-day-drone-shows`,
    siteName: "Vegas Drones",
    type: "website",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Drone light show in Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labor Day Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "End-of-summer headline drone shows for resorts, festivals, and community events in Las Vegas — venue-safe and sponsor-ready.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function LaborDayDroneShowsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/labor-day-drone-shows#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Holidays", item: `${SITE_URL}/holidays` },
      { "@type": "ListItem", position: 3, name: "Labor Day", item: `${SITE_URL}/labor-day-drone-shows` },
    ],
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="ld-breadcrumb-labor-day"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-black text-white font-poppins">
        {/* HERO (NO VIDEO) */}
        <section className="relative overflow-hidden">
          <div className="relative h-[72vh] sm:h-[82vh] w-full">
            {/* If you add a Labor Day background image later, place it here */}

            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="font-orbitron font-bold text-4xl sm:text-6xl leading-tight">
                    <span className="text-white">LABOR DAY</span>{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                      }}
                    >
                      DRONE SHOWS
                    </span>
                  </h1>

                  <p className="mt-5 text-lg sm:text-2xl text-gray-100 leading-relaxed">
                    End-of-summer headline moments for resorts, festivals, and community
                    celebrations — a modern, venue-friendly alternative to fireworks with{" "}
                    <strong>100–1000+ drones</strong>.
                  </p>

                  <div className="mt-8">
                    <div className="mx-auto h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                          boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                        }}
                      >
                        Get Labor Day Pricing
                      </Link>

                      <Link
                        href="/holidays"
                        className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
                      >
                        Back to Holidays
                      </Link>
                    </div>

                    <p className="mt-4 text-sm text-gray-300 text-center">
                      No fallout • Venue-safe • Sponsor-ready • FAA Part 107 operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron text-[#FF3B3B]">
              A Bigger, Cleaner Finale for Labor Day Weekend
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Labor Day is peak “last big weekend” energy. Drone light shows let you deliver a
              premium spectacle without smoke, debris, or firework fallout — perfect for
              venues that care about rooftops, signage, pool decks, and guest comfort.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-14">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Venue-Safe</h3>
                <p className="text-gray-300">
                  No ash, no debris, and no burn risk — ideal for resorts, casinos, and
                  properties with tight safety requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Sponsor Value</h3>
                <p className="text-gray-300">
                  Add logos, “presented by” moments, and custom scenes to boost sponsorships
                  and brand partnerships.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-orbitron text-xl text-white mb-2">Social Proof</h3>
                <p className="text-gray-300">
                  Built to be filmed — crisp shapes, readable messaging, and a “hero moment”
                  that guests post immediately.
                </p>
              </div>
            </div>

            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                What a Labor Day Show Can Include
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>“Happy Labor Day” / “Labor Day Weekend” messaging</li>
                <li>Stars, stripes, and end-of-summer celebration icons</li>
                <li>Venue name + custom city callout (Las Vegas, Summerlin, Henderson, etc.)</li>
                <li>Sponsor logos and “presented by” sequences</li>
                <li>Multi-scene shows with a big finale moment</li>
              </ul>
            </section>

            <section className="text-left max-w-4xl mx-auto mb-14">
              <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
                Perfect For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Resorts & casinos",
                  "Hotels & pool parties",
                  "Outdoor festivals & concerts",
                  "City / community celebrations",
                  "Sports venues & fan nights",
                  "Corporate Labor Day events",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-200"
                  >
                    <span className="font-orbitron text-white">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                }}
              >
                Request Labor Day Availability
              </Link>

              <p className="text-gray-400 mt-5 text-sm">
                Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured operations
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
