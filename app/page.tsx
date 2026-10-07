// app/page.tsx
// ============================================================
// VEGAS DRONES — Homepage
// Show footage, event services, planning and concise buyer questions.
// ============================================================

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import RecentShows from "@/components/RecentShows";
import HeroImage from "@/components/HeroImage.server";

import type React from "react";

const SITE_NAME = "Vegas Drones";
const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

// ─── SEO Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vegas Drones | Las Vegas Drone Light Show Company",
  description:
    "Vegas Drones is Las Vegas's premier drone light show company. FAA-authorized, locally based, producing 100–1,000+ drone aerial shows for conventions, corporate events, resort activations, weddings, and festivals. Get a quote today.",
  keywords: [
    "Las Vegas drone light show company",
    "drone show Las Vegas",
    "drone light show Las Vegas",
    "best drone show company Las Vegas",
    "Vegas drone show",
    "drone show company near me Las Vegas",
    "convention drone show Las Vegas",
    "corporate drone show Las Vegas",
    "wedding drone show Las Vegas",
    "resort drone show Las Vegas",
    "festival drone show Las Vegas",
    "FAA drone show Las Vegas",
    "drone advertising Las Vegas",
    "aerial advertising Las Vegas",
    "drone show cost Las Vegas",
    "CES drone show",
    "IMEX drone show",
    "SHOT Show drone show",
    "drone shows vs fireworks Las Vegas",
    "Vegas Drones",
    "Skylight Ads LLC Las Vegas",
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Vegas Drones | Las Vegas Drone Light Show Company",
    description:
      "Vegas-born. FAA-authorized. 100–1,000+ drones. Premium drone light shows for conventions, resorts, corporate events, festivals, and weddings in Las Vegas, NV.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Vegas Drones aerial light show over the Las Vegas Strip" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegas Drones | Las Vegas Drone Light Show Company",
    description: "Vegas-born. FAA-authorized. 100–1,000+ drone shows for conventions, resorts, events & weddings in Las Vegas.",
    images: [OG_IMAGE],
  },
  category: "business",
};

const homepageFaqs = [
  { question: "What does a drone show cost?", answer: "Drone shows start from $8,000. Final pricing depends on drone count, custom animation, show length, and venue requirements. Share your date and venue for a tailored quote. There are no travel fees for Las Vegas shows." },
  { question: "Can you create our logo or a custom message?", answer: "Yes. We design formations around logos, names, event themes, and sponsor messages. The detail and scale depend on the drone count and viewing distance." },
  { question: "Can a drone show work at our venue?", answer: "We review the airspace, launch area, audience separation, and viewing angles before confirming a site. Share your venue so we can assess the requirements and approvals." },
  { question: "How do we start planning?", answer: "Send your event date, venue, audience size, and creative ideas. We’ll recommend the show scope, review site requirements, and provide pricing." },
];

// ─── Page ─────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(255,59,59,0.35), transparent 60%), radial-gradient(700px 420px at 15% 15%, rgba(255,106,106,0.18), transparent 55%)",
        }}
      />

      {/* ── Structured Data (JSON-LD) ─────────────────────────── */}
      <Script
        id="ld-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchemaGraph(), null, 0) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="bg-black px-4 pt-6 text-center sm:hidden">
          <h1 className="font-orbitron font-bold leading-none drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]">
            <span
              className="block text-[clamp(1.45rem,6.2vw,2.1rem)] whitespace-nowrap bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})` }}
            >
              LAS VEGAS DRONE SHOWS
            </span>
          </h1>
        </div>

        <div className="bg-black px-4 pb-1 pt-5 sm:hidden">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <div className="h-[52vh] min-h-[420px]">
              <video
                className="h-full w-full object-cover object-top"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/signweb.jpg"
              >
                <source src="/vd-sizzle-mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <HeroImage
            title={
              <span
                className="text-center text-4xl sm:block sm:text-5xl md:text-6xl lg:text-7xl leading-tight bg-clip-text text-transparent font-orbitron"
                style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})` }}
              >
                LAS VEGAS DRONE SHOWS
              </span>
            }
            subtitle={
              <div className="hidden sm:block">
                Las Vegas's premier drone light show company — cinematic,{" "}
                <strong>FAA-authorized</strong>,{" "}
                <strong>100–1,000+ drones</strong> for conventions, resorts, corporate events, and festivals.
              </div>
            }
            imageSrc="/osmosignalt1.webp"
            posterSrc="/osmosignalt1.webp"
            desktopVideoSrc="/vd-desk-hero.mp4"
            heightClassName="h-[40vh] sm:h-[72vh]"
            imageClassName="object-cover object-[center_28%]"
            desktopVideoClassName="object-cover object-[center_28%]"
          />
        </div>
      </section>

      {/* ── CTA + Tagline ────────────────────────────────────────── */}
      <section className="bg-black px-5 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          <h2 className="max-w-3xl font-orbitron text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
            Vegas-Born. Built to Light Up Your Event.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full justify-center">
            <CtaButton href="/contact">Check My Date &amp; Get Pricing</CtaButton>
            <Link href="/see-our-shows" className="rounded-full border border-white/30 px-7 py-4 font-orbitron font-bold hover:bg-white/10">Watch Our Shows</Link>
          </div>

          <p className="mt-8 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-white">
            <span className="block">No travel fees for Las Vegas shows.</span>
            <span className="block">We actually live here.</span>
          </p>

          <p className="max-w-2xl text-gray-300 text-base sm:text-lg leading-8">
            Custom drone light shows for conventions, resorts, brand activations,
            festivals, and weddings. Our Las Vegas crew brings your story to the
            sky with synchronized formations, creative planning, and insured
            operations under FAA Part 107.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <Link href="/las-vegas-drone-show-cost" className="underline underline-offset-4 text-white">Shows starting from $8,000 →</Link>
            <span>Las Vegas-based crew</span>
            <span>FAA Part 107 · Fully insured</span>
            <span>100–1,000+ drones</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20" aria-label="Featured brand production">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Link href="/blog/amazon-prime-the-boys-drone-show" className="relative block aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/the-boys/the-boys-logo.jpg" alt="The Boys logo formed by drones during the Amazon Prime activation" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Link>
          <div>
            <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Featured production · 1,500 drones</p>
            <h2 className="mt-4 font-orbitron text-3xl font-bold leading-tight sm:text-4xl">A brand story on a bigger stage.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">Our Amazon Prime <em>The Boys</em> activation brought branded formations to the sky with 1,500 drones. Explore the show and its custom visuals.</p>
            <Link href="/blog/amazon-prime-the-boys-drone-show" className="mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Explore The Boys show →</Link>
          </div>
        </div>
      </section>

      <RecentShows />

      <section className="px-5 py-14 sm:px-8 sm:py-20" aria-label="Drone show services">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Your event. Your story.</p>
            <h2 className="mt-4 font-orbitron text-3xl font-bold sm:text-4xl">Make the sky part of your event.</h2>
          </div>
          <div className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2 sm:mt-14">
            {[
              { href: "/conventions-trade-shows", title: "Conventions & corporate events", body: "Opening-night moments, sponsor logos, and product reveals designed around your event." },
              { href: "/drone-advertising", title: "Resorts & brand activations", body: "Turn a launch, milestone, or hospitality celebration into a custom aerial display." },
              { href: "/holidays", title: "Festivals & community celebrations", body: "Town names, patriotic formations, and seasonal stories for public celebrations." },
              { href: "/weddings", title: "Weddings & private events", body: "Names, dates, and personal messages for a celebration that feels like yours." },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="group border-t border-white/15 pt-6">
                <h3 className="text-xl font-semibold group-hover:text-[#FF6A6A]">{service.title} <span aria-hidden="true">↗</span></h3>
                <p className="mt-4 max-w-lg leading-7 text-gray-300">{service.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20" aria-label="Planning your drone show">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-orbitron text-3xl font-bold sm:text-4xl">From your first idea to show night.</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12 sm:mt-14">
            {[
              ["Tell us the plan", "Share your date, venue, audience, and ideas. We’ll help choose a show size and scope."],
              ["Design & prepare", "We develop the formations and review the launch area, airspace, approvals, and venue requirements."],
              ["Bring it to life", "Our crew handles setup, preflight checks, and show operations while your guests enjoy the display."],
            ].map(([title, body], index) => (
              <li key={title}>
                <p className="text-sm font-semibold tracking-widest text-[#FF6A6A]">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-gray-300">{body}</p>
              </li>
            ))}
          </ol>
          <Link href="/las-vegas-drone-light-shows" className="mt-8 inline-flex min-h-11 items-center underline underline-offset-4">More about planning a drone show →</Link>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20" aria-label="Drone light show FAQ Las Vegas">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-orbitron text-3xl font-bold sm:text-4xl">A few things before we take flight.</h2>
          <div className="mt-10 border-t border-white/15">
            {homepageFaqs.map((faq) => (
              <details key={faq.question} className="group border-b border-white/15 py-6">
                <summary className="cursor-pointer text-lg font-semibold leading-7 marker:text-[#FF6A6A]">{faq.question}</summary>
                <p className="mt-4 max-w-3xl text-gray-300 leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/faq" className="inline-flex min-h-11 items-center underline underline-offset-4">More questions & answers →</Link>
            <Link href="/las-vegas-drone-show-cost" className="inline-flex min-h-11 items-center underline underline-offset-4">Explore pricing factors →</Link>
          </div>
        </div>
      </section>

      <section className="px-5 pt-14 pb-20 text-center sm:px-8 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-orbitron text-3xl font-bold leading-tight sm:text-4xl">Let’s plan your moment in the sky.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">Start with your date and venue. We’ll help shape the show.</p>
          <div className="mt-8"><CtaButton href="/contact">Check My Date &amp; Get Pricing</CtaButton></div>
          <p className="mt-6 text-sm text-gray-300">Headquartered in Las Vegas. No travel fees for Las Vegas shows.</p>
          <p className="mt-8 text-xs leading-6 text-gray-500">Operated by Skylight Ads LLC · Las Vegas, Nevada · FAA Part 107 · Insured operations</p>
        </div>
      </section>
    </div>
  );
}

// ─── Structured Data ──────────────────────────────────────────
function buildSchemaGraph() {
  const businessId = `${SITE_URL}/#business`;
  const faqId = `${SITE_URL}/#faq`;
  const websiteId = `${SITE_URL}/#website`;
  const webPageId = `${SITE_URL}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-US",
        publisher: { "@id": businessId },

      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: SITE_URL,
        name: "Vegas Drones | Las Vegas Drone Light Show Company",
        description:
          "Vegas Drones is Las Vegas's premier drone light show company. FAA-authorized, locally based, producing 100–1,000+ drone aerial shows for conventions, corporate events, resort activations, weddings, and festivals.",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${OG_IMAGE}`,
        },

      },
      {
        "@type": ["ProfessionalService", "EntertainmentBusiness", "LocalBusiness"],
        "@id": businessId,
        name: "Vegas Drones",
        legalName: "Skylight Ads LLC",
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE}`,
        logo: `${SITE_URL}${OG_IMAGE}`,
        description:
          "Vegas Drones (operated by Skylight Ads LLC) is a Las Vegas-based drone light show company producing FAA-authorized, fully insured drone light shows with 100 to 1,000+ drones for conventions, corporate events, resorts, festivals, and weddings in Las Vegas, Nevada.",
        foundingLocation: { "@type": "Place", name: "Las Vegas, Nevada" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89101",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.1699,
          longitude: -115.1398,
        },
        areaServed: [
          { "@type": "City", name: "Las Vegas", sameAs: "https://en.wikipedia.org/wiki/Las_Vegas" },
          { "@type": "City", name: "Henderson" },
          { "@type": "City", name: "Boulder City" },
          { "@type": "City", name: "Mesquite" },
          { "@type": "City", name: "Laughlin" },
          { "@type": "AdministrativeArea", name: "Nevada" },
        ],
        knowsAbout: [
          "Drone light shows",
          "FAA Part 107",
          "Las Vegas airspace",
          "Drone advertising",
          "Convention entertainment",
          "Brand activations",
          "Aerial displays",
          "Large-scale drone shows",
          "Entertainment marketing activations",
          "Resort event productions",
        ],
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "FAA Part 107 Remote Pilot Certificate" },
        ],
        sameAs: [
          "https://www.facebook.com/61570074433959",
          "https://www.instagram.com/vegas_drones",
          "https://twitter.com/DronesVegas",
          "https://www.linkedin.com/company/vegas-drones",
        ],
        makesOffer: [
          { "@type": "Offer", name: "Las Vegas Drone Light Shows", url: `${SITE_URL}/las-vegas-drone-light-shows`, category: "Drone Light Shows" },
          { "@type": "Offer", name: "Convention & Trade Show Drone Shows", url: `${SITE_URL}/conventions-trade-shows`, category: "Convention Entertainment" },
          { "@type": "Offer", name: "Drone Advertising Las Vegas", url: `${SITE_URL}/drone-advertising`, category: "Aerial Advertising" },
          { "@type": "Offer", name: "Wedding Drone Light Shows", url: `${SITE_URL}/weddings`, category: "Wedding Entertainment" },
          { "@type": "Offer", name: "Corporate Drone Shows Las Vegas", url: `${SITE_URL}/corporate-events`, category: "Corporate Entertainment" },
        ],
        subjectOf: [
          {
            "@type": "Article",
            headline: "1,500-Drone Show for Amazon Prime's The Boys",
            url: `${SITE_URL}/blog/amazon-prime-the-boys-drone-show`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        mainEntity: homepageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

// ─── UI Components ────────────────────────────────────────────
function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden inline-flex items-center justify-center text-black font-bold py-4 px-8 min-w-[220px] rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
      style={{
        backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
        boxShadow: "0 0 28px rgba(255,59,59,0.38)",
      }}
    >
      <span className="pointer-events-none absolute inset-0 opacity-25 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700" />
      <span className="relative">{children}</span>
    </Link>
  );
}
