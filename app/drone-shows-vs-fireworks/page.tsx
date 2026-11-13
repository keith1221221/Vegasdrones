import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/drone-shows-vs-fireworks`;
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Drone Shows vs Fireworks | Las Vegas Event Comparison | Vegas Drones",
  description:
    "Comparing drone shows vs fireworks for Las Vegas events? Compare cost, custom visuals, sound, venue space, weather, and planning requirements before choosing your event finale.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Drone Shows vs Fireworks | Vegas Drones",
    description:
      "A practical comparison for Las Vegas planners deciding between a drone show and fireworks.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [
      {
        url: `${SITE_URL}/alienhead1.png`,
        width: 1200,
        height: 630,
        alt: "Drone shows versus fireworks for Las Vegas events",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const comparisonRows = [
  ["Creative control", "Designed formations can depict logos, names, dates, and animated imagery; detail depends on fleet size and viewing distance.", "Emphasizes bursts, color, rhythm, and effects rather than the same type of detailed aerial lettering."],
  ["Sound", "Rotor noise is present. Music and PA sound are separate considerations; a drone show is not silent.", "Explosive reports are part of many displays; ask the provider about the proposed effects and sound profile."],
  ["Smoke & material", "An LED-only drone show does not use pyrotechnic bursts. Batteries, transport, and equipment still have impacts.", "Pyrotechnic effects produce smoke and can leave debris; discuss cleanup and fallout planning."],
  ["Venue space", "Needs an appropriate launch and recovery area, audience separation, and a suitable viewing direction.", "Needs a suitable discharge area and separation based on the display and professional site plan."],
  ["Weather", "Flight depends on conditions and equipment operating limits, including wind and precipitation.", "Display feasibility also depends on weather, site conditions, and the operator’s assessment."],
  ["Cost", "Vegas Drones shows start from $8,000. Scope, creative work, location, and logistics affect the proposal.", "Obtain a site-specific professional quote; there is no reliable like-for-like price without defining the show."],
  ["Planning", "Creative development, site review, scheduling, and any required flight approvals must be considered.", "Display design, site review, scheduling, and applicable permissions must be considered with the provider."],
];
const faqs = [
  ["Are drone shows silent?", "No. Drones produce rotor noise, and event music or PA systems add sound. If sound is a concern for your guests or neighbors, discuss the full production and viewing location with your provider."],
  ["Can drones replace fireworks at any venue?", "No. A venue suitable for fireworks is not automatically suitable for drones, or the reverse. Launch areas, audience separation, airspace, access, and viewing angles need a separate review."],
  ["How far ahead should we book?", "Contact us as early as possible with your date and exact venue. Creative work, site review, crew availability, and any required approvals affect timing. We can assess a close date, but cannot promise feasibility before reviewing the details."],
  ["Can we combine drones and fireworks?", "Discuss a combined production with both providers before booking. It requires a coordinated site plan, timing, and review of operational constraints. Do not assume either show can simply be added to the other."],
  ["Are drone shows always the greener option?", "We do not claim a universal environmental advantage. LED-only drone shows avoid pyrotechnic bursts, but batteries, equipment, electricity, and travel still have impacts. Compare the actual production rather than relying on a blanket claim."],
];

export default function DroneShowsVsFireworksPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white font-poppins">
      <div className="mx-auto max-w-4xl">
        <section className="text-center">
          <h1 className="font-orbitron text-4xl font-bold sm:text-5xl">
            <span className="text-white">DRONE SHOWS VS </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})` }}
            >
              FIREWORKS
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            For Las Vegas event planners, this is rarely a purely visual choice. The better option depends on
            branding needs, venue restrictions, repeatability, guest experience, and what kind of content the
            event needs to generate afterward.
          </p>
        </section>

        <div className="mt-8 text-center"><Link href="/contact?source=drone-shows-vs-fireworks" className="inline-flex min-h-12 items-center rounded-full bg-[#FF3B3B] px-7 py-4 font-bold hover:bg-[#d92d2d]">Review My Venue &amp; Get Pricing</Link></div>

        <section className="mt-14" aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="font-orbitron text-3xl font-bold">Drone shows vs fireworks at a glance</h2>
          <p className="mt-4 leading-7 text-gray-300">Choose around the experience you want to create and what your site can support. Neither format is suitable for every venue or every date.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/15" tabIndex={0} role="region" aria-label="Scrollable drone show and fireworks comparison">
            <table className="w-full min-w-[640px] text-left text-sm leading-6">
              <caption className="sr-only">Planning considerations for professional drone light shows and fireworks displays</caption>
              <thead className="bg-white/10"><tr><th scope="col" className="p-4">Consideration</th><th scope="col" className="p-4">Drone light show</th><th scope="col" className="p-4">Professional fireworks</th></tr></thead>
              <tbody>{comparisonRows.map(([factor, drones, fireworks]) => <tr key={factor} className="border-t border-white/15"><th scope="row" className="p-4 align-top font-semibold">{factor}</th><td className="p-4 align-top text-gray-300">{drones}</td><td className="p-4 align-top text-gray-300">{fireworks}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="cost-heading">
          <h2 id="cost-heading" className="font-orbitron text-3xl font-bold">Are drone shows cheaper than fireworks?</h2>
          <p className="mt-5 leading-8 text-gray-300">There is no universal price winner. Compare written proposals for the same event, venue, and production scope. Our drone shows start from <strong className="text-white">$8,000</strong>; your quote depends on drone count, creative scope, duration, travel, and venue requirements. There are no travel fees for Las Vegas shows. Other locations are quoted individually.</p>
          <p className="mt-4 leading-8 text-gray-300">For a useful comparison, ask each provider to identify crew, setup, site requirements, coordination, music or sound production, and weather or cancellation terms. A short runtime alone does not tell you what a production costs. Request a fireworks proposal from a professional pyrotechnic provider rather than assuming an equivalent price.</p>
          <Link href="/las-vegas-drone-show-cost" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">Explore drone show pricing →</Link>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/15 bg-white/5 p-7"><h2 className="font-orbitron text-2xl font-bold">When a drone show fits</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-gray-300"><li>A brand launch needs a recognizable logo or product story.</li><li>A wedding calls for names, a date, or personal imagery.</li><li>A community celebration wants its identity built into the finale.</li><li>The audience has a suitable viewing angle for planned formations.</li></ul></article>
          <article className="rounded-3xl border border-white/15 bg-white/5 p-7"><h2 className="font-orbitron text-2xl font-bold">When fireworks fit</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-gray-300"><li>The goal is a traditional burst-and-sound finale.</li><li>Detailed logos or readable messages are not central to the brief.</li><li>The venue can accommodate a professional display’s site requirements.</li><li>The organizer has confirmed the production with a qualified provider.</li></ul></article>
        </section>

        <section className="mt-16 rounded-3xl border border-white/15 p-7 sm:p-9"><h2 className="font-orbitron text-3xl font-bold">Start with the venue, especially in Las Vegas</h2><p className="mt-5 leading-8 text-gray-300">A large lawn or an open skyline does not automatically make a site suitable. For a drone show, we review the exact location, launch and recovery space, audience separation, viewing angles, and airspace before confirming feasibility. A venue booking is not flight approval.</p><p className="mt-4 leading-8 text-gray-300">The FAA treats operational waivers and airspace authorizations as separate requirements where applicable. For example, operating multiple drones with one remote pilot requires an appropriate waiver. Requirements depend on the proposed operation.</p><a href="https://www.faa.gov/uas/commercial_operators/part_107_waivers" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">FAA guidance on Part 107 waivers ↗</a><p className="mt-4 leading-8 text-gray-300">For fireworks, have the display provider review the discharge area, spectator separation, fallout considerations, and applicable local requirements. OSHA’s professional-display guidance addresses site planning and separation.</p><a href="https://www.osha.gov/sites/default/files/display_guidelines.pdf" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4">OSHA display-fireworks site guidance (PDF) ↗</a></section>

        <section className="mt-16"><h2 className="font-orbitron text-3xl font-bold">Plan for weather and a decision window</h2><p className="mt-5 leading-8 text-gray-300">Drone shows are weather-dependent. Wind, precipitation, visibility, and equipment operating limits can affect whether a production proceeds. Fireworks also need an operator’s assessment of conditions and site restrictions. Neither option should be sold as weatherproof.</p><p className="mt-4 leading-8 text-gray-300">Before booking, ask who makes the go/no-go decision, when guests and vendors will be notified, whether an alternate show window is possible, and what the contract says about postponement or cancellation. Do not assume the same terms apply to every provider.</p></section>

        <section className="mt-16 grid items-center gap-7 sm:grid-cols-2"><Link href="/blog/amazon-prime-the-boys-drone-show" className="relative block aspect-[4/3] overflow-hidden rounded-2xl"><Image src="/the-boys/the-boys-logo.jpg" alt="Drones form The Boys logo during our Amazon Prime production" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" /></Link><div><p className="text-sm uppercase tracking-widest text-[#FF6A6A]">See the difference in practice</p><h2 className="mt-3 font-orbitron text-2xl font-bold">When the logo is the moment</h2><p className="mt-4 leading-7 text-gray-300">Our 1,500-drone Amazon Prime production shows how a drone formation can carry recognizable brand imagery. Use the actual show photos to discuss the visual detail and scale you want for your own event.</p><Link href="/blog/amazon-prime-the-boys-drone-show" className="mt-4 inline-flex min-h-11 items-center underline underline-offset-4">Explore the production →</Link></div></section>

        <section className="mt-16"><h2 className="font-orbitron text-3xl font-bold">Questions before choosing your finale</h2><div className="mt-7 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-white/15 p-5"><summary className="cursor-pointer text-lg font-semibold">{question}</summary><p className="mt-4 leading-7 text-gray-300">{answer}</p></details>)}</div></section>

        <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-7"><h2 className="font-orbitron text-2xl font-bold">Get a recommendation for your event</h2><p className="mt-4 leading-7 text-gray-300">Send your city, venue address, event date, audience size, budget range, and the moment you want to create. Our Las Vegas-based team travels for events across our service areas. We’ll review the drone-show option and explain the next steps for your site and creative scope.</p><div className="mt-4 flex flex-wrap gap-x-6"><Link href="/see-our-shows" className="inline-flex min-h-11 items-center underline underline-offset-4">Watch our shows</Link><Link href="/weddings" className="inline-flex min-h-11 items-center underline underline-offset-4">Wedding finales</Link><Link href="/corporate-events" className="inline-flex min-h-11 items-center underline underline-offset-4">Corporate events</Link></div></section>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact?source=drone-shows-vs-fireworks"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-orbitron font-bold text-black transition hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
              boxShadow: "0 0 25px rgba(255,59,59,0.35)",
            }}
          >
            Compare Options For Your Event
          </Link>
          <Link
            href="/las-vegas-drone-light-shows"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-orbitron font-bold text-white transition hover:bg-white/10"
          >
            Explore Drone Light Shows
          </Link>
        </div>
      </div>
    </main>
  );
}
