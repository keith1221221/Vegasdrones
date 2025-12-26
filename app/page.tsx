import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import HeroImage from "@/components/HeroImage.server";

const SITE_NAME = "Vegas Drones";
const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png"; // swap to a dedicated OG image later if you want

// Brand reds (neon-ish, looks great on black)
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
  description:
    "Vegas Drones produces spectacular custom drone light shows in Las Vegas for weddings, conventions, corporate events, festivals, and brand activations. 100–1000+ drones with cinematic, logo-ready storytelling.",
  keywords: [
    "Las Vegas drone light shows",
    "Las Vegas drone show",
    "drone light show Las Vegas",
    "Vegas drone shows",
    "wedding drone light show Las Vegas",
    "corporate drone show Las Vegas",
    "convention drone show Las Vegas",
    "drone advertising Las Vegas",
    "aerial advertising Las Vegas",
    "CES drone show",
    "IMEX drone show",
    "SHOT Show drone show",
    "brand activation drone show",
    "drone light show near me Las Vegas",
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
    title: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
    description:
      "Book custom 100–1000+ drone light shows in Las Vegas for weddings, conventions, corporate events, festivals, and high-impact brand activations.",
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
      "Custom 100–1000+ drone light shows in Las Vegas for weddings, conventions, and brand activations.",
    images: [OG_IMAGE],
  },
  category: "business",
};

export default function HomePage() {
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vegas Drones",
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    description:
      "Vegas Drones produces custom drone light shows and aerial advertising in Las Vegas for weddings, conventions, corporate events, festivals, and brand activations.",
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "AdministrativeArea", name: "Nevada" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    sameAs: [],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drone Light Shows",
          serviceType: "Drone light show production",
          areaServed: { "@type": "City", name: "Las Vegas" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aerial Advertising",
          serviceType: "Drone advertising / aerial brand activations",
          areaServed: { "@type": "City", name: "Las Vegas" },
        },
      },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Las Vegas Drone Light Shows",
    provider: {
      "@type": "ProfessionalService",
      name: "Vegas Drones",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "Las Vegas" },
    serviceType: "Drone light show production",
    description:
      "Custom drone light shows for weddings, conventions, corporate events, festivals, and brand activations in Las Vegas. 100–1000+ drones, logos, names, dates, and cinematic storytelling.",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a drone light show in Las Vegas cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on drone count, show length, location logistics, and creative complexity. Tell us your date and venue area and we’ll recommend the right drone count and provide a clear quote.",
        },
      },
      {
        "@type": "Question",
        name: "How many drones do I need for my event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drone count depends on venue scale, viewing distance, and design complexity. Most Las Vegas drone shows start around 100 drones and scale up to 1000+ for maximum impact.",
        },
      },
      {
        "@type": "Question",
        name: "Can you animate a logo or custom message?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We create custom formations like logos, names, dates, icons, and animated sequences tailored to your event theme and brand.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a Las Vegas drone show?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The earlier the better—popular dates book out. For best availability and time for custom design approvals, we recommend reserving your date as soon as your venue and timeline are confirmed.",
        },
      },
      {
        "@type": "Question",
        name: "Are drone light shows legal in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—when flown by a certified operator following FAA rules and local venue requirements. Vegas Drones operates FAA Part 107 and handles planning, safety, and flight compliance for your event.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if it’s windy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Safety comes first. We monitor conditions and plan conservative go/no-go thresholds. If weather impacts the flight window, we’ll coordinate the best available options with your venue and schedule.",
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white">
     
      {/* ===== Structured Data (SEO) ===== */}
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

            {/* ================= HERO SECTION ================= */}
            <div className="relative">
        <HeroImage
          title={
            <>
              {/* LINE 1 */}
              <span className="block text-center">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FF3B3B, white, #FF3B3B)",
                  }}
                >
                  LAS VEGAS DRONE
                </span>
              </span>

              {/* LINE 2 */}
              <span
                className="block text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FF6A6A, #FF3B3B, #FF6A6A)",
                }}
              >
                SHOW COMPANY
              </span>
            </>
          }
          subtitle={
            <div className="hidden sm:block">
              Custom <strong>Las Vegas drone light shows</strong> for conventions,
              corporate events, festivals, and brand activations — animated logos,
              names, and dates with <strong>100–1000+ drones</strong>.
            </div>
          }
        />

        {/* TAGLINE OVERLAY — overlaps hero + top of the video */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-10 sm:-bottom-14 z-10 text-center px-4">
          <p className="font-orbitron text-white font-bold text-lg sm:text-2xl md:text-3xl drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]">
            A Modern, Crowd-Winning Alternative to Fireworks — Built for Las Vegas
          </p>
        </div>

        {/* CTA button overlay — stable across iPhone Safari */}
        <div
          className="pointer-events-none absolute left-0 right-0 bottom-40 z-30 flex justify-center"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="pointer-events-auto translate-y-4 sm:-translate-y--0">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                text-black font-bold
                py-4 px-7
                min-w-[220px]
                rounded-full
                shadow-lg
                transform hover:scale-105 transition
                font-orbitron
              "
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>


      {/* ================= INTERNAL LINKING (SEO CORE) ================= */}
      <section className="w-full bg-black">
        <div className="relative w-full bg-black">
          {/* Vimeo video immediately under the hero's bottom line */}
         {/* Vimeo video immediately under the hero's bottom line */}
<div className="w-full flex justify-center pt-2 sm:pt-3 pb-4 sm:pb-6">
  <div className="relative w-full max-w-5xl aspect-video rounded-xl shadow-lg overflow-hidden">
    <iframe
      src="https://player.vimeo.com/video/1147748380?autoplay=1&muted=1&loop=1&background=1&playsinline=1&controls=0"
      className="absolute inset-0 w-full h-full"
      allow="autoplay; fullscreen; picture-in-picture"
      aria-hidden="true"
      loading="lazy"
    />
  </div>
</div>


          {/* text directly under video */}
          <div className="px-4 sm:px-6 pb-10">
            <div className="max-w-4xl mx-auto text-center">
              <p
                className="
                  text-gray-100
                  text-lg sm:text-xl md:text-2xl
                  leading-relaxed sm:leading-loose
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]
                "
              >
                Vegas Drones specializes in{" "}
                <Link
                  href="/drone-light-shows"
                  className="text-white underline decoration-white/40 hover:decoration-white"
                >
                  Las Vegas drone light shows
                </Link>{" "}
                and <span className="font-semibold">Las Vegas drone show</span>{" "}
                productions designed for festivals, corporate events, and
                city-scale experiences. Planning a venue or expo? Explore{" "}
                <Link
                  href="/conventions-trade-shows"
                  className="text-white underline decoration-white/40 hover:decoration-white"
                >
                  convention &amp; trade show drone shows
                </Link>{" "}
                or learn how{" "}
                <Link
                  href="/drone-advertising"
                  className="text-white underline decoration-white/40 hover:decoration-white"
                >
                  drone advertising
                </Link>{" "}
                can power brand activations. For unforgettable celebrations, see{" "}
                <Link
                  href="/weddings"
                  className="text-white underline decoration-white/40 hover:decoration-white"
                >
                  event drone light shows
                </Link>
                .
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/chatbot"
                  className="inline-flex items-center justify-center text-black font-bold py-4 px-8 rounded-full transform hover:scale-105 transition font-orbitron"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                    boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                  }}
                >
                  Chat with us 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Why Vegas Drones?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Feature icon="leaf" title="Eco-Friendly">
            Quiet, smokeless displays with zero fallout — perfect for Vegas venues.
          </Feature>

          <Feature icon="brain" title="Fully Custom Shows">
            Logos, names, dates, icons, and animated sequences built to your theme.
          </Feature>

          <Feature icon="star" title="High-Impact Visuals">
            Designed for crowd reaction, social sharing, and premium brand moments.
          </Feature>

          <Feature icon="city" title="Vegas-Based Crew">
            Local operators who know Las Vegas airspace, venues, and logistics.
          </Feature>
        </div>
      </section>
{/* ================= SHOW PREVIEWS (FAST / NO IFRAME) ================= */}
<section className="py-20 px-6 bg-gray-900">
  <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16">
    Real Drone Light Shows We’ve Produced
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 py-3 rounded-full bg-black/70 text-white font-orbitron text-sm tracking-wide">
            View Show
          </div>
        </div>
      </Link>
    ))}
  </div>

  <div className="text-center mt-14">
    <Link
      href="/see-our-shows"
      className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition font-orbitron"
    >
      See All Drone Shows
    </Link>
  </div>
</section>

     
      {/* ================= CTA ================= */}
      <section className="py-16 text-center px-6">
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
            className="inline-block px-10 py-4 text-black font-bold rounded-full transition font-orbitron hover:bg-white"
            style={{
              backgroundColor: BRAND_RED,
              boxShadow: "0 0 25px rgba(255,59,59,0.35)",
            }}
          >
            Get a Quote
          </Link>

          <Link
            href="/drone-light-shows"
            className="inline-block px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition font-orbitron"
          >
            How it works
          </Link>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          Operated by Skylight Ads LLC • Las Vegas-based • FAA Part 107 • Insured
          operations
        </p>
      </section>
    </div>
  );
}

/* ================= FEATURE CARD ================= */
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
