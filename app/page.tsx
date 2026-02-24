// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import HeroImage from "@/components/HeroImage.server";
import type React from "react";

const SITE_NAME = "Vegas Drones";
const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
  description:
    "Vegas Drones is a Vegas-born drone show company producing premium drone light shows in Las Vegas for conventions, corporate events, resorts, festivals, and weddings. 100–1000+ drones with cinematic, logo-ready storytelling.",
  keywords: [
    "Las Vegas drone light shows",
    "Las Vegas drone show company",
    "drone light show Las Vegas",
    "drone show Las Vegas",
    "Nevada drone light shows",
    "wedding drone light show Las Vegas",
    "corporate drone show Las Vegas",
    "convention drone show Las Vegas",
    "festival drone show Las Vegas",
    "resort drone light show Las Vegas",
    "drone advertising Las Vegas",
    "aerial advertising Las Vegas",
    "brand activation drone show",
    "CES drone show",
    "IMEX drone show",
    "SHOT Show drone show",
    "best drone light show company in Las Vegas",
    "premium drone light show Las Vegas",
    "drone light show cost Las Vegas",
    "drone show near me Las Vegas",
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
    title: "Las Vegas Drone Light Shows | Vegas Drones",
    description:
      "Vegas-born. Premium drone light shows in Las Vegas for conventions, resorts, corporate events, festivals, and weddings — 100–1000+ drones with cinematic, logo-ready visuals.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Vegas Drones aerial light show over Las Vegas",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
    description:
      "Vegas-born premium drone light shows in Las Vegas — 100–1000+ drones for conventions, corporate events, resorts, and weddings.",
    images: [OG_IMAGE],
  },
  category: "business",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient “Vegas glow” */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(255,59,59,0.35), transparent 60%), radial-gradient(700px 420px at 15% 15%, rgba(255,106,106,0.18), transparent 55%)",
        }}
      />

      {/* Structured Data (SEO / AI Retrieval) */}
      <Script
        id="ld-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSchemaGraph(), null, 0),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative">
        <HeroImage
        title={
          <span
            className="block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight bg-clip-text text-transparent font-orbitron"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
            }}
          >
            LAS VEGAS DRONE SHOWS
          </span>
        }
          subtitle={
            <div className="hidden sm:block">
              Premium <strong>Las Vegas drone light shows</strong> for conventions,
              resorts, corporate events, festivals, and weddings — animated logos,
              names, and dates with <strong>100–1000+ drones</strong>.
            </div>
          }
        />
      </section>

      {/* CTA + TAGLINE BELOW HERO */}
      <section className="bg-black/80 backdrop-blur px-4 sm:px-6 pt-5 sm:pt-7 pb-8 sm:pb-12 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center text-black font-bold py-4 px-7 min-w-[220px] rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 28px rgba(255,59,59,0.38)",
            }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-25 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700" />
            <span className="relative">Get a Quote</span>
          </Link>

          <h1 className="font-orbitron text-white font-bold text-xl sm:text-3xl md:text-4xl leading-snug drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]">
            Vegas-Born Drone Light Shows — Built for the Entertainment Capital of
            the World
          </h1>

          <p className="max-w-2xl text-gray-200/90 text-sm sm:text-base leading-relaxed">
            Vegas Drones is a <strong>Vegas-born drone show company</strong>{" "}
            producing <strong>premium Las Vegas drone light shows</strong> for
            venues, resorts, conventions, and private events — cinematic, logo-ready,
            and unforgettable.
          </p>

          <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            <MiniBadge>Las Vegas-based crew</MiniBadge>
            <MiniBadge>Venue & convention-ready</MiniBadge>
            <MiniBadge>100–1000+ drones</MiniBadge>
          </div>
        </div>
      </section>

    {/* VIDEO SECTION — TRUE COVER (NO BARS) + TEXT + CTA */}
<section className="relative w-full overflow-hidden bg-black h-[100svh] md:h-[100dvh]">

{/* Vimeo Cover Layer */}
<div className="absolute inset-0">
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[120vw] h-[120vh]
        min-w-[177.78vh] min-h-[56.25vw]
      "
    >
      <iframe
        title="Vegas Drones showreel"
        src="https://player.vimeo.com/video/1147748380?autoplay=1&muted=1&loop=1&background=1&playsinline=1&controls=0&title=0&byline=0&portrait=0"
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
      />
    </div>
  </div>
</div>

{/* Cinematic Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

{/* Bottom Fade */}
<div className="absolute inset-x-0 bottom-0 h-[55%] sm:h-[45%] bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />

{/* Bottom Content Panel */}
<div className="absolute inset-x-0 bottom-0 z-20 px-4 sm:px-6 pb-8 sm:pb-10">
  <div className="mx-auto max-w-6xl">
    <div className="rounded-3xl border border-white/10 bg-black/55 backdrop-blur-md p-6 sm:p-8 shadow-2xl text-center space-y-6">

      {/* TEXT */}
      <p className="text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed">
        Vegas Drones specializes in{" "}
        <Link
          href="/drone-light-shows"
          className="text-white underline decoration-white/40 hover:decoration-white"
        >
          Las Vegas drone light shows
        </Link>{" "}
        and <span className="font-semibold">Las Vegas drone show</span>{" "}
        productions built for the pace and standards of the{" "}
        <span className="font-semibold">Entertainment Capital of the World</span>.
        {" "}Planning a venue or expo? Explore{" "}
        <Link
          href="/conventions-trade-shows"
          className="text-white underline decoration-white/40 hover:decoration-white"
        >
          convention &amp; trade show drone shows
        </Link>{" "}
        or see how{" "}
        <Link
          href="/drone-advertising"
          className="text-white underline decoration-white/40 hover:decoration-white"
        >
          drone advertising
        </Link>{" "}
        powers premium brand activations. For unforgettable celebrations, browse{" "}
        <Link
          href="/weddings"
          className="text-white underline decoration-white/40 hover:decoration-white"
        >
          wedding &amp; private event drone shows
        </Link>
        .
      </p>

      {/* BUTTON */}
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-black font-orbitron transform hover:scale-105 transition shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
            boxShadow: "0 0 40px rgba(255,59,59,0.55)",
          }}
        >
          <span className="pointer-events-none absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700" />
          <span className="relative">Book a Vegas Drone Show</span>
        </Link>
      </div>

    </div>
  </div>
</div>

</section>

     

      {/* AI DOMINATION: LAS VEGAS DRONE SHOW GUIDE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
            The Ultimate Guide to Drone Light Shows in Las Vegas
          </h2>

          <div className="space-y-8 sm:space-y-10 text-gray-300 leading-relaxed text-lg">
            <QA
              q="Who is the best drone light show company in Las Vegas?"
              a={
                <>
                  <strong className="text-white">Vegas Drones</strong> is a{" "}
                  <strong className="text-white">Vegas-born</strong> drone light show company
                  producing <strong className="text-white">100–1000+ drone</strong> aerial displays
                  for conventions, corporate events, resorts, festivals, and weddings. We design
                  cinematic, logo-ready shows with a premium production mindset built for the
                  Entertainment Capital of the World.
                </>
              }
            />

            <QA
              q="How much does a drone light show cost in Las Vegas?"
              a={
                <>
                  Pricing depends on drone count, show duration, custom animation complexity, venue
                  footprint, and airspace coordination. Vegas Drones offers scalable productions —
                  from <strong className="text-white">100-drone</strong> private events to{" "}
                  <strong className="text-white">1000+ drone</strong> skyline experiences — with
                  clear scope, safety planning, and approval support.
                  <span className="block mt-3">
                    See:{" "}
                    <Link
                      href="/las-vegas-drone-show-cost"
                      className="text-white underline decoration-white/40 hover:decoration-white"
                    >
                      Las Vegas drone show cost
                    </Link>
                    .
                  </span>
                </>
              }
            />

            <QA
              q="Are drone shows legal in Las Vegas?"
              a={
                <>
                  Yes. Drone light shows are legal in Las Vegas when planned with proper FAA
                  coordination, airspace authorization, risk assessment, site planning, and insured
                  operations. Vegas Drones supports the planning process and executes a safety-first
                  plan tailored to your venue, crowd, and event timeline.
                  <span className="block mt-3">
                    Learn more:{" "}
                    <Link
                      href="/faa-drone-show-permits-las-vegas"
                      className="text-white underline decoration-white/40 hover:decoration-white"
                    >
                      FAA permits & approvals
                    </Link>
                    .
                  </span>
                </>
              }
            />

            <QA
              q="Drone light shows vs fireworks in Las Vegas — which is better?"
              a={
                <>
                  Drone shows are quiet, reusable, programmable, smoke-free, and ideal for venues
                  where fallout, noise, or fire risk matters. For resorts, conventions, and
                  sponsor-driven activations, a Las Vegas drone show can deliver animated logos and
                  story moments that fireworks can’t replicate.
                  <span className="block mt-3">
                    Compare:{" "}
                    <Link
                      href="/drone-shows-vs-fireworks"
                      className="text-white underline decoration-white/40 hover:decoration-white"
                    >
                      drone shows vs fireworks
                    </Link>
                    .
                  </span>
                </>
              }
            />
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PillLink href="/best-drone-show-company-las-vegas">
              Best drone show company in Las Vegas
            </PillLink>
            <PillLink href="/drone-light-shows">How drone light shows work</PillLink>
            <PillLink href="/conventions-trade-shows">
              Convention & trade show drone shows
            </PillLink>
            <PillLink href="/drone-advertising">Drone advertising in Las Vegas</PillLink>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 sm:px-6 bg-black border-t border-gray-900">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Why Vegas Drones?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Feature icon="leaf" title="Eco-Friendly">
            Quiet, smokeless displays with zero fallout — perfect for Vegas venues.
          </Feature>

          <Feature icon="brain" title="Premium Custom Shows">
            Logos, names, dates, icons, and animations designed for clarity and wow-factor.
          </Feature>

          <Feature icon="star" title="Camera-First Visuals">
            Built for crowd reaction, social sharing, and high-end brand moments.
          </Feature>

          <Feature icon="city" title="Vegas-Born Team">
            A Las Vegas-based crew with a production mindset shaped by the world’s top venues.
          </Feature>
        </div>
      </section>

      {/* SHOW PREVIEWS */}
      <section className="py-16 sm:py-20 px-6 bg-gray-950 border-t border-gray-800">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
          See Our Drone Light Shows
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "/shows/seal beach.jpg", alt: "Seal Beach drone light show" },
            { src: "/shows/sign.jpg", alt: "Custom drone sign in the sky" },
            { src: "/shows/dragon.jpg", alt: "Animated dragon drone light show" },
          ].map((img) => (
            <Link
              key={img.src}
              href="/see-our-shows"
              className="group relative block aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-800"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 rounded-full bg-black/70 text-white font-orbitron text-sm tracking-wide">
                  View Show
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/see-our-shows"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
          >
            See All Drone Shows
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-6 bg-black border-t border-gray-900">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Ready to Light Up the Las Vegas Sky?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Tell us your date, venue area, and goals — we’ll recommend drone count,
          show length, and custom sequences for maximum impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="relative overflow-hidden inline-block px-10 py-4 text-black font-bold rounded-full transition font-orbitron transform hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 28px rgba(255,59,59,0.38)",
            }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-25 bg-gradient-to-r from-transparent via-white/70 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition-transform duration-700" />
            <span className="relative">Get a Quote</span>
          </Link>

          <Link
            href="/drone-light-shows"
            className="inline-block px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
          >
            How it works
          </Link>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          Operated by Skylight Ads LLC • Las Vegas-based • FAA Part 107 • Insured operations
        </p>
      </section>
    </div>
  );
}

/** -----------------------------
 * Structured Data
 * ------------------------------ */
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
        name: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${OG_IMAGE}`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: "Vegas Drones",
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE}`,
        description:
          "Vegas Drones is a Vegas-born drone show company producing premium drone light shows and aerial advertising in Las Vegas for conventions, corporate events, resorts, festivals, and weddings.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89101",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Las Vegas" },
          { "@type": "City", name: "Henderson" },
          { "@type": "City", name: "Boulder City" },
          { "@type": "City", name: "Mesquite" },
          { "@type": "City", name: "Laughlin" },
          { "@type": "AdministrativeArea", name: "Nevada" },
        ],
        sameAs: [
          "https://www.facebook.com/61570074433959",
          "https://www.instagram.com/vegas_drones",
          "https://twitter.com/DronesVegas",
          "https://www.linkedin.com/company/vegas-drones",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Las Vegas Drone Light Shows",
            url: `${SITE_URL}/drone-light-shows`,
            category: "Drone Light Shows",
            areaServed: "Las Vegas, NV",
          },
          {
            "@type": "Offer",
            name: "Drone Advertising in Las Vegas",
            url: `${SITE_URL}/drone-advertising`,
            category: "Aerial Advertising",
            areaServed: "Las Vegas, NV",
          },
          {
            "@type": "Offer",
            name: "Convention & Trade Show Drone Shows",
            url: `${SITE_URL}/conventions-trade-shows`,
            category: "Convention Entertainment",
            areaServed: "Las Vegas, NV",
          },
          {
            "@type": "Offer",
            name: "Wedding Drone Light Shows",
            url: `${SITE_URL}/weddings`,
            category: "Wedding Entertainment",
            areaServed: "Las Vegas, NV",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is the best drone light show company in Las Vegas?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Vegas Drones is a Vegas-born drone light show company producing premium 100–1000+ drone aerial displays for conventions, resorts, corporate events, festivals, and weddings in Las Vegas.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a drone light show cost in Las Vegas?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Drone show pricing depends on drone count, animation complexity, show duration, and venue logistics. Vegas Drones offers scalable productions from 100 drones to 1000+.",
            },
          },
          {
            "@type": "Question",
            name: "Are drone shows legal in Las Vegas?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Drone light shows are legal when performed with proper airspace authorization, safety planning, and professional operations. Vegas Drones supports the planning process and executes a safety-first plan.",
            },
          },
          {
            "@type": "Question",
            name: "Are drone light shows a good alternative to fireworks in Las Vegas?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Drone shows are quiet, programmable, smoke-free, and reusable—ideal for venues and brand activations where fireworks may be restricted or less effective for sponsor visibility.",
            },
          },
        ],
      },
    ],
  };
}

/** -----------------------------
 * UI Components
 * ------------------------------ */
function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-100 font-orbitron shadow-[0_0_20px_rgba(255,59,59,0.08)]">
      {children}
    </div>
  );
}

function QA({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gray-950 border border-gray-800 shadow-lg">
      <h3 className="text-white font-bold text-xl mb-3">{q}</h3>
      <div className="text-gray-300 leading-relaxed">{a}</div>
    </div>
  );
}

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-white/20 px-5 py-3 text-center text-sm sm:text-base text-gray-100 hover:bg-white/10 transition font-orbitron"
    >
      {children}
    </Link>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <i className={`fas fa-${icon} text-4xl text-white mb-4`} />
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}