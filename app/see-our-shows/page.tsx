import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { featuredShowcaseClip, showcaseGalleryClips, type ShowcaseClip } from "@/lib/showcaseMedia";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "See Our Drone Light Shows | Vegas Drones",
  description:
    "Watch real drone light shows produced by Vegas Drones in Las Vegas and beyond. Proof videos from live events, festivals, and brand activations.",
  alternates: { canonical: `${SITE_URL}/see-our-shows` },
  openGraph: {
    title: "See Our Drone Light Shows | Vegas Drones",
    description:
      "Real footage from live events — festivals, brand activations, and city-scale productions.",
    url: `${SITE_URL}/see-our-shows`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones drone light show",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "See Our Drone Light Shows | Vegas Drones",
    description:
      "Watch real drone light shows produced by Vegas Drones in Las Vegas and beyond.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  robots: { index: true, follow: true },
};

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function SeeOurShowsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/see-our-shows#breadcrumb`,
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
        name: "See Our Shows",
        item: `${SITE_URL}/see-our-shows`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6">
      {/* Breadcrumb Schema */}
      <Script
        id="ld-breadcrumbs-see-our-shows"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* PAGE HEADER */}
        <header className="text-center mb-14">
          <h1 className="font-orbitron font-bold text-4xl sm:text-5xl lg:text-6xl">
            See Our Drone Shows
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Real footage from real events. This page is built as a proof-of-work reel for
            planners, venues, and brand teams who want to watch actual show energy instead
            of static mockups.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center text-black font-bold py-4 px-7 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Get a Quote
            </Link>

            <Link
              href="/chatbot"
              className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
            >
              Chat With Us
            </Link>
          </div>
        </header>

        <section className="mb-14 grid gap-8 lg:grid-cols-[1.35fr_0.75fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${featuredShowcaseClip.src}?rel=0&modestbranding=1&playsinline=1`}
                title={`${featuredShowcaseClip.title} | Vegas Drones`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="text-xs font-orbitron uppercase tracking-[0.25em] text-[#FF6A6A]">
                  {featuredShowcaseClip.badge}
                </div>
                <h2 className="mt-3 font-orbitron text-2xl font-bold text-white sm:text-3xl">
                  {featuredShowcaseClip.title}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-400">
                  {featuredShowcaseClip.location}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                  {featuredShowcaseClip.description}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-black font-bold transition hover:scale-105 font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 22px rgba(255,59,59,0.35)",
                }}
              >
                Build My Show
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Why this matters", "Real footage answers the biggest buyer question immediately: can this company actually produce a show that looks premium live and on camera?"],
              ["Best fit", "Conventions, civic events, resort activations, festivals, weddings, and branded finales."],
              ["What to send us", "Date, venue area, audience size, and whether you need logos, names, sponsor visuals, or a holiday theme."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-xl"
              >
                <h3 className="font-orbitron text-lg text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {showcaseGalleryClips.map((clip) => (
            <ShowcaseGalleryCard key={clip.id} clip={clip} />
          ))}
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 30px rgba(255,59,59,0.45)",
            }}
          >
            Get Pricing for Your Event
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Tell us your date, venue area, and goals — we’ll recommend the right
            drone count.
          </p>
        </div>

        <div className="text-center text-gray-500 text-sm mt-14">
          Operated by Skylight Ads LLC • Las Vegas-based • FAA Part 107 • Insured
          operations
        </div>
      </div>
    </main>
  );
}

function ShowcaseGalleryCard({ clip }: { clip: ShowcaseClip }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-2xl">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
        <VideoFrame clip={clip} />
      </div>

      <div className="mt-5">
        <div className="text-xs font-orbitron uppercase tracking-[0.25em] text-[#FF6A6A]">
          {clip.badge}
        </div>
        <h2 className="mt-3 font-orbitron text-xl font-bold text-white">{clip.title}</h2>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-400">{clip.location}</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-300">{clip.description}</p>
      </div>
    </div>
  );
}

function VideoFrame({ clip }: { clip: ShowcaseClip }) {
  if (clip.type === "youtube") {
    return (
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${clip.src}?rel=0&modestbranding=1&playsinline=1`}
          title={`${clip.title} | Vegas Drones`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="aspect-video">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={clip.poster}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
    </div>
  );
}
