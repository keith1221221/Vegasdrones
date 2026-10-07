import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import HeroVideo from "@/components/HeroImage.server";

const SITE_URL = "https://www.vegasdrones.com";
const OG_IMAGE = "/alienhead1.png";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

const PAGE_URL = `${SITE_URL}/las-vegas-drone-show`;

export const metadata: Metadata = {
  title: "Book a Las Vegas Drone Show | Starting from $8,000 | Vegas Drones",
  description:
    "Book a custom Las Vegas drone show starting from $8,000. See real productions, review venue planning and booking steps, and request a quote. No travel fees for Las Vegas shows.",
  keywords: [
    "Las Vegas drone show",
    "drone show Las Vegas",
    "Las Vegas drone light show",
    "Las Vegas Strip drone show",
    "corporate drone show Las Vegas",
    "festival drone show Las Vegas",
    "hotel drone show Las Vegas",
    "Vegas Drones",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Book a Las Vegas Drone Show | Starting from $8,000 | Vegas Drones",
    description:
      "Custom Las Vegas drone shows for hotels, festivals, corporate events, sports venues, and public celebrations.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Las Vegas drone show by Vegas Drones",
      },
    ],
  },
};

export default function LasVegasDroneShowPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Las Vegas drone show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A Las Vegas drone show is a coordinated aerial light performance using programmed drones to create shapes, logos, text, and animated scenes in the night sky for events, venues, and celebrations.",
        },
      },
      {
        "@type": "Question",
        name: "What kinds of events use drone shows in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Drone shows in Las Vegas are used for festivals, hotel activations, corporate events, sports venues, holiday celebrations, public events, brand launches, and select private events.",
        },
      },
      {
        "@type": "Question",
        name: "Are drone shows allowed in Las Vegas?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Drone shows can be performed in Las Vegas when operated by FAA Part 107 certified pilots with proper airspace authorization, safety planning, and event coordination.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a Las Vegas drone show?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Booking several weeks to a few months in advance is recommended, especially around holidays, major conventions, and peak event weekends in Las Vegas.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I learn more about custom drone light show options?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For more detail on custom visuals, branded scenes, logos, names, dates, and event-specific design options, visit our dedicated Las Vegas drone light shows page.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
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
        name: "Las Vegas Drone Show",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div className="bg-black text-white">
      <Script
        id="ld-faq-las-vegas-drone-show"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ld-breadcrumb-las-vegas-drone-show"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroVideo
        title={
          <>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              LAS VEGAS
            </span>
            <span className="text-white"> DRONE </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED_LIGHT}, ${BRAND_RED}, ${BRAND_RED_LIGHT})`,
              }}
            >
              SHOW
            </span>
          </>
        }
        subtitle={
          <>
            Book a custom drone show for your convention, resort, festival, or
            celebration. Share your date, venue, and ideas — we’ll help shape the show.
          </>
        }
        bottomLine={
          <>Shows starting from $8,000 · No travel fees for Las Vegas shows</>
        }
        imageSrc="/osmosignalt1.webp"
        posterSrc="/osmosignalt1.webp"
        mobileVideoSrc="/vd-sizzle-mobile.mp4"
        desktopVideoSrc="/vd-desk-hero.mp4"
        desktopVideoClassName="object-cover object-[center_28%]"
        heightClassName="h-[50vh] sm:h-[75vh]"
        primaryCta={{ href: "/contact", label: "Check My Date & Get a Quote" }}
        secondaryCta={{ href: "/las-vegas-drone-show-cost", label: "Explore Pricing" }}
      />

      <main className="px-6 pb-20 pt-10 sm:pt-14 font-poppins">
        <div className="max-w-5xl mx-auto">
          <section className="text-center">


            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              <span style={{ color: BRAND_RED }}>A Las Vegas drone show</span> can
              turn a standard event into a city-worthy visual experience. Vegas
              Drones works with venues, brands, festivals, and event organizers
              looking for high-impact aerial entertainment in Las Vegas and beyond.
            </p>
          </section>

          <section className="mt-14 grid gap-10 border-y border-white/15 py-10 md:grid-cols-2">
            <div><h2 className="font-orbitron text-2xl font-bold">What does it cost to hire a drone show?</h2><p className="mt-5 text-3xl font-bold text-[#FF6A6A]">Starting from $8,000</p><p className="mt-4 leading-8 text-gray-300">Your quote reflects the drone count, custom designs, show length, event date, and venue requirements. We recommend the scope after reviewing what you want to create and where your audience will watch.</p><Link href="/las-vegas-drone-show-cost" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">See drone show pricing factors →</Link></div>
            <div><h2 className="font-orbitron text-2xl font-bold">A local crew, a show built around you</h2><p className="mt-5 leading-8 text-gray-300">No travel fees for Las Vegas shows. We actually live here. Our work brings custom lettering, branded formations, and themed scenes to events of different sizes.</p><p className="mt-4 leading-8 text-gray-300">The completed productions below demonstrate different creative approaches. Their drone counts do not define what is included in the starting price.</p></div>
          </section>
          <section className="mt-16" aria-labelledby="booking-heading">
            <h2 id="booking-heading" className="font-orbitron text-2xl font-bold sm:text-3xl">How to book your Las Vegas drone show</h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                ["1. Send your event details", "Tell us your date, venue address, audience size, budget, and any logos or ideas you want to feature."],
                ["2. Review the venue and creative scope", "We assess the site and discuss designs, fleet size, coordination, and the proposed timeline before confirming a production plan."],
                ["3. Confirm your tailored quote", "We outline the proposed scope and arrangements so you can review what you’re booking and the next steps for production."],
              ].map(([title, text]) => <li key={title} className="border-t border-white/20 pt-5"><h3 className="text-lg font-bold">{title}</h3><p className="mt-4 leading-7 text-gray-300">{text}</p></li>)}
            </ol>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Send your date and venue →</Link>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border-t border-white/15 pt-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Las Vegas Drone Shows for Events and Venues
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Drone shows in Las Vegas are used for hotel activations, public
                celebrations, festivals, sports venues, corporate events, holiday
                programs, and destination-driven entertainment. Because the show is
                programmed in advance, the sky can be used for themed visuals, logos,
                icons, text, and audience-facing animated scenes.
              </p>
            </div>

            <div className="border-t border-white/15 pt-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Why Las Vegas Is a Strong Market for Drone Shows
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Las Vegas is built around tourism, spectacle, nightlife, conventions,
                hospitality, and live events. That makes it a natural fit for drone
                shows that create strong visual moments both in person and across
                social media, recap content, and event marketing campaigns.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="completed-heading">
            <h2 id="completed-heading" className="font-orbitron text-2xl font-bold sm:text-3xl">Completed shows. Different stories.</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {[
                {title:"CAP Foundation", count:"150 drones", image:"/shows/college-of-american-pathologists/pathology-heart.jpg", alt:"Pathology lettering inside a heart-shaped drone formation", text:"Custom foundation lettering and a heart around Pathology for the License to Give event in Las Vegas.", href:"/blog/college-of-american-pathologists-drone-show-las-vegas"},
                {title:"Mobilize Recovery", count:"155 drones", image:"/shows/mobilize-recovery/breathe.jpg", alt:"Breathe lettering surrounded by a circular drone formation", text:"Recovery messaging and themed formations for Narcan at Night in Las Vegas.", href:"/blog/mobilize-recovery-narcan-at-night-drone-show-las-vegas"},
                {title:"Pioche Labor Day", count:"155 drones", image:"/shows/pioche-labor-day/labor-day-2026.jpg", alt:"Drones spelling Labor Day 2026 at the Pioche celebration", text:"Town lettering and patriotic imagery for a Nevada community celebration.", href:"/blog/pioche-labor-day-2026-drone-show"},
              ].map(show => <article key={show.href}><Image src={show.image} alt={show.alt} width={1920} height={1080} sizes="(max-width: 767px) 100vw, 33vw" className="aspect-video w-full rounded-2xl object-contain" /><p className="mt-5 text-sm text-[#FF6A6A]">{show.count}</p><h3 className="mt-2 text-xl font-bold">{show.title}</h3><p className="mt-4 leading-7 text-gray-300">{show.text}</p><Link href={show.href} className="mt-4 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">See the show story<span className="sr-only">: {show.title}</span> →</Link></article>)}
            </div>
          </section>
          <section className="mt-16 border-t border-white/15 pt-10">
            <h2 className="font-orbitron text-2xl font-bold sm:text-3xl">Check your venue before committing</h2>
            <p className="mt-5 max-w-3xl leading-8 text-gray-300">A clear audience view is only one part of the site review. We also assess the airspace, launch and landing area, obstacles, and audience separation. Space requirements depend on the fleet and site; send your address and any site plans so we can review your location.</p>
            <p className="mt-4 max-w-3xl leading-8 text-gray-300">Start planning as soon as you have a proposed date. Creative development, coordination, and applicable approvals take time. We discuss weather considerations and contingency arrangements during planning.</p>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border-t border-white/15 pt-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Drone Shows vs Fireworks in Las Vegas
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                For many events, a drone show offers advantages over fireworks:
                programmable scenes, repeatable performances, cleaner branding
                opportunities, and a polished visual style that can be customized for
                a venue, audience, or campaign theme.
              </p>
            </div>

            <div className="border-t border-white/15 pt-8">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                How Drone Shows Work
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Drone shows use fleets of LED-equipped drones programmed to fly
                coordinated paths in the sky. Each drone acts like a lighted pixel,
                allowing producers to create logos, symbols, text, and animated
                sequences that audiences can view from the ground.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-white/15 pt-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Need More Detail on Custom Drone Light Shows?
            </h2>

            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              This page is the broader overview for a <strong>Las Vegas drone show</strong>.
              If you want more service-specific detail on branded visuals, logos,
              names, dates, custom storytelling, and event-focused design options,
              visit our dedicated{" "}
              <Link
                href="/las-vegas-drone-light-shows"
                className="underline underline-offset-4 hover:text-white"
              >
                Las Vegas drone light shows
              </Link>{" "}
              page.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/las-vegas-drone-light-shows"
                className="inline-flex items-center justify-center text-black font-bold py-3.5 px-7 rounded-full transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 22px rgba(255,59,59,0.3)",
                }}
              >
                Explore Drone Light Shows
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center py-3.5 px-7 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
              >
                Ask About Your Event
              </Link>
            </div>
          </section>

          <section className="mt-16 border-t border-white/15 pt-8">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  What is a Las Vegas drone show?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  A Las Vegas drone show is a coordinated aerial light performance
                  using programmed drones to create shapes, logos, text, and animated
                  scenes for events and venues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  What events use drone shows in Las Vegas?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Drone shows are used for hotels, festivals, corporate events,
                  public celebrations, sports venues, holiday programs, and select
                  private events.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Are drone shows allowed in Las Vegas?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Yes. They can be performed legally with FAA-compliant operations,
                  proper airspace authorization, and event planning.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Where can I learn more about custom design options?
                </h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Visit our{" "}
                  <Link
                    href="/las-vegas-drone-light-shows"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Las Vegas drone light shows
                  </Link>{" "}
                  page for more detail on custom visuals, branding, names, dates,
                  and aerial storytelling.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
              Ready to Plan a Las Vegas Drone Show?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Tell us about your event date, venue, and goals. We’ll help you
              explore the right direction for a custom Las Vegas drone show and walk
              you through the next steps.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full transform hover:scale-105 transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 25px rgba(255,59,59,0.35)",
                }}
              >
                Get Pricing
              </Link>

              <Link
                href="/las-vegas-drone-light-shows"
                className="inline-flex items-center justify-center py-4 px-10 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
              >
                Explore Drone Light Shows
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}