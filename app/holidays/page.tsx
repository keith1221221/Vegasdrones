import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import HeaderVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Holiday Drone Light Shows in Las Vegas | Vegas Drones",
  description:
    "Celebrate major holidays in Las Vegas with custom drone light shows. July 4th, Memorial Day, Labor Day, and Christmas drone shows — fully custom, venue-safe, and FAA compliant.",
  alternates: { canonical: `${SITE_URL}/holidays` },
  openGraph: {
    title: "Holiday Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "July 4th, Memorial Day, Labor Day & Christmas drone light shows in Las Vegas — a modern, venue-friendly alternative to fireworks.",
    url: `${SITE_URL}/holidays`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones holiday drone light show",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Drone Light Shows in Las Vegas | Vegas Drones",
    description:
      "July 4th, Memorial Day, Labor Day & Christmas drone light shows in Las Vegas — a modern, venue-friendly alternative to fireworks.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  robots: { index: true, follow: true },
};

export default function HolidaysPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/holidays#breadcrumb`,
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
        name: "Holidays",
        item: `${SITE_URL}/holidays`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/holidays#holiday-pages`,
    name: "Holiday Drone Show Pages",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: `${SITE_URL}/july-4th-drone-shows`,
        name: "July 4th Drone Light Shows",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: `${SITE_URL}/memorial-day-drone-shows`,
        name: "Memorial Day Drone Shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: `${SITE_URL}/labor-day-drone-shows`,
        name: "Labor Day Drone Shows",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: `${SITE_URL}/christmas-drone-light-shows`,
        name: "Christmas Drone Light Shows",
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb + ItemList Schema */}
      <Script
        id="ld-breadcrumbs-holidays"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-itemlist-holidays"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO */}
      <div className="relative">
        <HeaderVideo
          title={
            <>
              <span className="text-white">HOLIDAY </span>
              <span
                className="bg-clip-text text-transparent no-underline"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                  textDecoration: "none",
                }}
              >
                DRONE SHOWS
              </span>
            </>
          }
          subtitle={
            <>
              July 4th, Memorial Day, Labor Day &amp; Christmas drone light shows in
              Las Vegas — a modern, venue-friendly alternative to fireworks.
            </>
          }
        />

        {/* SINGLE CTA — moved higher into hero */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-16 sm:bottom-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* modern line */}
            <div className="mb-4">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            {/* CTA */}
            <div className="pointer-events-auto flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                }}
              >
                Get Holiday Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="bg-black text-white px-6 pt-8 pb-16 font-poppins ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron text-[#FF3B3B]">
            A Better Alternative to Fireworks for Holiday Events
          </h2>

          {/* Holiday image */}
          <div className="w-full flex justify-center mb-10">
            <img
              src="/merry_xmas.png"
              alt="Christmas drone light show in Las Vegas"
              className="w-full max-w-3xl rounded-xl shadow-2xl"
              loading="lazy"
            />
          </div>

          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Drone light shows give venues a safer, cleaner, and more controlled way to
            celebrate major holidays. No fallout, no fire risk, and dramatically less
            setup compared to traditional fireworks.
          </p>

          {/* LINKS TO SUB-PAGES (create later) */}
          <section className="max-w-4xl mx-auto text-left mb-14">
            <h3 className="font-orbitron text-2xl text-[#FF3B3B] mb-5 text-center">
              Explore Holiday Show Pages
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Link
                href="/july-4th-drone-shows"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2 group-hover:text-white">
                  July 4th Drone Light Shows
                </div>
                <p className="text-gray-300">
                  Big patriotic finales: flags, stars, eagles, and city-branded moments.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View page →
                </div>
              </Link>

              <Link
                href="/memorial-day-drone-shows"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">
                  Memorial Day Drone Shows
                </div>
                <p className="text-gray-300">
                  Respectful, meaningful tributes for cities, venues, and ceremonies.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View page →
                </div>
              </Link>

              <Link
                href="/labor-day-drone-shows"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">
                  Labor Day Drone Shows
                </div>
                <p className="text-gray-300">
                  End-of-summer headline moments for resorts, festivals, and community events.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View page →
                </div>
              </Link>

              <Link
                href="/christmas-drone-light-shows"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="font-orbitron text-xl text-white mb-2">
                  Christmas Drone Light Shows
                </div>
                <p className="text-gray-300">
                  Trees, ornaments, snowflakes, Santa moments — no fire risk, no fallout.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View page →
                </div>
              </Link>
            </div>
          </section>

          {/* Holiday list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-16">
            <div>
              <h3 className="font-orbitron text-xl text-[#FF3B3B] mb-2">July 4th</h3>
              <p className="text-gray-300">
                Patriotic drone shows with flags, stars, eagles, and custom city messaging.
              </p>
            </div>

            <div>
              <h3 className="font-orbitron text-xl text-[#FF3B3B] mb-2">Memorial Day</h3>
              <p className="text-gray-300">
                Respectful, patriotic displays ideal for city ceremonies and venues.
              </p>
            </div>

            <div>
              <h3 className="font-orbitron text-xl text-[#FF3B3B] mb-2">Labor Day</h3>
              <p className="text-gray-300">
                End-of-summer celebrations for festivals, resorts, and community events.
              </p>
            </div>

            <div>
              <h3 className="font-orbitron text-xl text-[#FF3B3B] mb-2">Christmas &amp; Holidays</h3>
              <p className="text-gray-300">
                Snowflakes, trees, ornaments, and festive animations without fire risk.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-black font-bold rounded-full font-orbitron transition hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 30px rgba(255,59,59,0.4)",
            }}
          >
            Book a Holiday Drone Show
          </Link>
        </div>
      </main>
    </>
  );
}
