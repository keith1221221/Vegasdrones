import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

// Vegas brand red
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Las Vegas Convention & Trade Show Drone Shows | Vegas Drones",
  description:
    "Stand out at Las Vegas conventions and trade shows with custom drone light shows. Perfect for brand activations, outdoor displays, and high-impact crowd engagement.",
  keywords: [
    "Las Vegas conventions",
    "trade show drone show",
    "convention entertainment Las Vegas",
    "brand activation drone show",
    "Vegas drone advertising",
    "CES drone show",
    "SHOT Show drone display",
    "Las Vegas expo drone light show",
  ],
  alternates: { canonical: `${SITE_URL}/conventions-trade-shows` },
  openGraph: {
    title: "Las Vegas Convention & Trade Show Drone Shows | Vegas Drones",
    description:
      "Attract crowds and elevate your brand at Las Vegas conventions with stunning custom drone light shows.",
    url: `${SITE_URL}/conventions-trade-shows`,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Vegas Drones Convention Drone Show",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ConventionsPage() {
  // Optional FAQ schema (kept light; you can expand later)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/conventions-trade-shows#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you show our logo or product in the sky?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can animate logos, product icons, messaging, and multi-scene sequences designed for maximum readability and crowd reaction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle venue coordination and FAA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We handle planning, safety, airspace coordination, and venue logistics as part of production.",
        },
      },
    ],
  };

  // ✅ Breadcrumb schema (separate from FAQ)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/conventions-trade-shows#breadcrumb`,
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
        name: "Conventions & Trade Shows",
        item: `${SITE_URL}/conventions-trade-shows`,
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      {/* FAQ Schema (JSON-LD) */}
      <Script
        id="ld-faq-conventions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Schema (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-conventions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-black text-white font-poppins">
        <section className="px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-orbitron text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Las Vegas Convention <span className="text-[#FF6A6A]">Drone Shows</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                Bring your organization’s story into the sky with custom logos,
                messaging, and aerial formations for convention receptions,
                trade shows, and after-hours events.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full px-7 py-4 font-semibold text-black" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})` }}>
                  Request Convention Pricing
                </Link>
                <Link href="/drone-advertising" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-4 font-semibold hover:bg-white/10">
                  Drone Advertising
                </Link>
              </div>
            </div>

            <section className="mb-16 mt-10 grid items-center gap-8 sm:mt-12 md:grid-cols-2 sm:mb-20" aria-labelledby="shot-show-heading">
              <figure>
                <Image src="/shows/conventions/shot-show.jpg" alt="SHOT Show lettering formed by white drones inside green circular formations" width={1920} height={1080} sizes="(max-width: 767px) 100vw, 50vw" className="h-auto w-full rounded-2xl" />
                <figcaption className="mt-3 text-sm leading-6 text-gray-400">Custom SHOT Show lettering in the night sky.</figcaption>
              </figure>
              <div>
                <p className="text-sm text-[#FF6A6A]">Las Vegas · Trade show production</p>
                <h2 id="shot-show-heading" className="mt-3 font-orbitron text-2xl font-bold sm:text-3xl">SHOT Show in the Sky</h2>
                <p className="mt-5 leading-8 text-gray-300">Recognizable event lettering gives a convention show a clear connection to the gathering. This SHOT Show formation combines the event name with circular imagery — an example of how custom designs can carry your identity into the sky.</p>
                <Link href="https://www.youtube.com/watch?v=Ru2m7T49XwU" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Watch the SHOT Show footage →</Link>
              </div>
            </section>

            {/* Real event examples */}
            <section className="mb-16 sm:mb-20" aria-labelledby="event-examples-heading">
              <div className="mx-auto max-w-3xl text-center">
                <h2 id="event-examples-heading" className="font-orbitron text-2xl font-bold sm:text-3xl">
                  Your Message, Brought to Life
                </h2>
                <p className="mt-4 leading-7 text-gray-300">
                  Explore two Las Vegas productions that turned an organization’s
                  identity and message into custom aerial formations.
                </p>
              </div>
              <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-10">
                {[
                  {
                    title: "College of American Pathologists Foundation",
                    count: 150,
                    description: "For the License to Give event, 150 drones formed CAP Foundation lettering and a heart around Pathology — bringing the organization’s identity into the Las Vegas sky.",
                    relevance: "Planning a conference reception? See how custom lettering and imagery can reflect your organization.",
                    href: "/blog/college-of-american-pathologists-drone-show-las-vegas",
                    video: "/shows/college-of-american-pathologists/countdown-heart.mp4",
                    poster: "/shows/college-of-american-pathologists/countdown-heart-poster.jpg",
                  },
                  {
                    title: "Mobilize Recovery: Narcan at Night",
                    count: 155,
                    description: "155 drones displayed Narcan at Night lettering, Recovery Month messaging, and a Breathe formation — translating the event’s recovery theme into a visual story.",
                    relevance: "Hosting an event around a cause? See how a show can carry your message beyond a logo.",
                    href: "/blog/mobilize-recovery-narcan-at-night-drone-show-las-vegas",
                    video: "/shows/mobilize-recovery/breathe.mp4",
                    poster: "/shows/mobilize-recovery/breathe.jpg",
                  },
                ].map((show) => (
                  <article key={show.href} className="min-w-0">
                    <video
                      className="aspect-video w-full rounded-2xl bg-black object-contain"
                      controls playsInline preload="none" poster={show.poster}
                      aria-label={`${show.title} drone show highlight`}
                    >
                      <source src={show.video} type="video/mp4" />
                      Your browser cannot play this video. <a href={show.video}>Watch the highlight</a>.
                    </video>
                    <p className="mt-6 text-sm text-[#FF6A6A]">The INDUSTRIAL · Las Vegas · {show.count} drones</p>
                    <h3 className="mt-2 text-xl font-bold">{show.title}</h3>
                    <p className="mt-4 leading-7 text-gray-300">{show.description}</p>
                    <p className="mt-4 leading-7 text-gray-400">{show.relevance}</p>
                    <Link href={show.href} className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
                      See the full show story<span className="sr-only">: {show.title}</span> →
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Sections */}
            <div className="space-y-12">
              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  The Ultimate Convention Attention-Grabber
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you&apos;re launching a product, hosting a client event,
                  promoting a booth, or activating a sponsorship, a drone light
                  show delivers massive visual impact. We design formations that
                  highlight your brand, logo, colors, and messaging — scheduled
                  for maximum visibility during convention evenings and peak foot
                  traffic.
                </p>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Why Drone Shows Work for Trade Shows
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>Draw crowds from every direction — even outside the venue</li>
                  <li>Promote new products with animated sky graphics</li>
                  <li>Display your company logo, name, or tagline in the sky</li>
                  <li>
                    Perfect for outdoor exhibitor events or after-hours activations
                  </li>
                  <li>Fully customizable to match your brand identity</li>
                  <li>FAA Part 107 certified operations with full safety protocols</li>
                </ul>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Ideal for Major Las Vegas Conventions
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We’ve tailored drone shows for events across Las Vegas, including:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>CES – Consumer Electronics Show</li>
                  <li>SHOT Show</li>
                  <li>SEMA</li>
                  <li>MAGIC / Fashion Market</li>
                  <li>NAB Show</li>
                  <li>Money 20/20</li>
                  <li>World of Concrete</li>
                  <li>IMEX America</li>
                </ul>
              </section>

              <section className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-[#FF3B3B] mb-4 font-orbitron text-center">
                  Fully Custom, Brand-Forward Drone Shows
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We manage the entire production — from creative concept and
                  animation design to FAA coordination and on-site execution. Logo
                  formations, text effects, animated transitions, and 3D motion can
                  all be built into your show. Fleets scale from 50 to 500+ drones
                  based on venue size and visual goals.
                </p>
              </section>
            </div>

            <p className="mt-14 text-center text-gray-300">Shows start at $6,000. <Link href="/las-vegas-drone-show-cost" className="text-white underline underline-offset-4">Explore pricing and what affects your quote →</Link></p>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-black font-semibold text-lg rounded-full transition font-orbitron hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 25px rgba(255,59,59,0.35)",
                }}
              >
                Request Convention Pricing
              </Link>

              <p className="text-gray-400 mt-4 text-sm">
                Tell us your event date, venue, and brand goals — we’ll recommend a
                drone count and a plan that fits.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
