import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

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

      <header className="bg-black px-5 pb-12 pt-10 text-white sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-orbitron text-3xl font-bold leading-tight sm:text-5xl">Holiday <span className="text-[#FF6A6A]">Drone Shows</span></h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">From patriotic summer celebrations to Christmas characters, bring your holiday theme into the sky with custom drone formations.</p>
            <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-4 font-semibold text-black" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})` }}>Get Holiday Pricing</Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 sm:mt-14">
            <figure>
              <Image src="/shows/pioche-labor-day/labor-day-2026.jpg" alt="Drones spelling Labor Day 2026 during the Pioche celebration" width={1920} height={1080} priority sizes="(max-width: 767px) 100vw, 50vw" className="aspect-video w-full rounded-2xl object-contain" />
              <figcaption className="mt-3 text-sm text-gray-400">Pioche Labor Day · 155 drones. <Link href="/blog/pioche-labor-day-2026-drone-show" className="text-white underline underline-offset-4">See the full show →</Link></figcaption>
            </figure>
            <figure>
              <div className="relative aspect-video"><Image src="/merry_xmas.png" alt="Merry Christmas lettering formed by drones in the night sky" fill priority sizes="(max-width: 767px) 100vw, 50vw" className="rounded-2xl object-contain" /></div>
              <figcaption className="mt-3 text-sm text-gray-400">A holiday greeting, written in lights.</figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="bg-black text-white px-6 pt-8 pb-16 font-poppins ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron text-[#FF3B3B]">
            Celebrate the Season with a Custom Show
          </h2>

          <p className="mx-auto mb-12 max-w-3xl leading-8 text-gray-300">Tell a holiday story with recognizable characters, patriotic imagery, and custom greetings. We plan the creative and venue requirements around your celebration.</p>
          <section className="mb-16 grid items-center gap-10 text-left md:grid-cols-[1.3fr_0.7fr]" aria-labelledby="gingerbread-heading">
            <div>
              <h3 id="gingerbread-heading" className="font-orbitron text-2xl font-bold sm:text-3xl">Christmas characters come to life</h3>
              <p className="mt-5 leading-8 text-gray-300">Watch a gingerbread formation bring a festive character into the sky. Custom scenes can combine holiday greetings, themed imagery, and your community or organization’s message.</p>
              <Link href="/christmas-drone-light-shows" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Explore Christmas drone shows →</Link>
            </div>
            <figure className="mx-auto w-full max-w-xs">
              <video controls playsInline preload="none" poster="/shows/drone-light-shows/gingerbread-poster.jpg" aria-label="Gingerbread holiday drone show highlight" className="aspect-[9/16] w-full rounded-2xl bg-black object-contain">
                <source src="/shows/drone-light-shows/gingerbread.mp4" type="video/mp4" />
                Your browser cannot play this video. <a href="/shows/drone-light-shows/gingerbread.mp4">Watch the gingerbread clip</a>.
              </video>
              <figcaption className="mt-3 text-sm leading-6 text-gray-400">A gingerbread formation at a holiday event.</figcaption>
            </figure>
          </section>
          <section className="mb-16 text-left" aria-labelledby="patriotic-heading">
            <h3 id="patriotic-heading" className="font-orbitron text-2xl font-bold sm:text-3xl">Patriotic moments for summer celebrations</h3>
            <div className="mt-8 grid items-start gap-8 md:grid-cols-[0.7fr_1.3fr]">
              <figure className="mx-auto w-full max-w-xs"><Image src="/shows/holidays/firecracker.jpg" alt="Red, white, and blue firecracker-shaped drone formation" width={1728} height={3072} sizes="(max-width: 767px) 100vw, 320px" className="h-auto w-full rounded-2xl" /><figcaption className="mt-3 text-sm text-gray-400">A firecracker shape made from lights.</figcaption></figure>
              <figure><Image src="/shows/holidays/happy-fourth.jpg" alt="Drones spelling Happy 4th of July in red, white, and blue" width={1920} height={1080} sizes="(max-width: 767px) 100vw, 60vw" className="h-auto w-full rounded-2xl" /><figcaption className="mt-3 text-sm text-gray-400">Custom July 4th lettering in the sky.</figcaption><Link href="/july-4th-drone-shows" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Explore July 4th drone shows →</Link></figure>
            </div>
          </section>

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
                  Trees, ornaments, snowflakes, and festive character animations.
                </p>
                <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                  View page →
                </div>
              </Link>
            </div>
          </section>

          <p className="mx-auto mb-12 max-w-3xl text-gray-300">Shows start from $8,000. <Link href="/las-vegas-drone-show-cost" className="text-white underline underline-offset-4">See holiday drone show pricing factors →</Link></p>

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
                Snowflakes, trees, ornaments, and festive animations tailored to your celebration.
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
