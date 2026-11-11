import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const url = "https://www.vegasdrones.com/california-drone-shows";
const title = "California Drone Light Shows for Events | Vegas Drones";
const description = "Plan a custom California drone light show for a corporate event, brand activation, festival, or wedding. Request venue review, availability, and a tailored quote.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", images: [{ url: "/the-boys/the-boys-logo.jpg", alt: "The Boys logo formed by drones during a Vegas Drones production" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/the-boys/the-boys-logo.jpg"] },
};
const faqs = [
  ["Can I book a drone show for a California event?", "Send your California event city, proposed venue, and date. Our Las Vegas-based team will review travel logistics, site suitability, and availability before confirming a show."],
  ["What does a California drone show cost?", "Our advertised shows start from $8,000. A California quote depends on drone count, creative scope, crew travel, site requirements, and scheduling. The Las Vegas no-travel-fee offer does not apply to California events; request an itemized proposal for your venue."],
  ["What information do you need to review a venue?", "Start with a venue name or address, event date, approximate audience size, and any proposed launch area. We review airspace, launch space, audience separation, and viewing angles. Venue suitability and required approvals must be confirmed before a show can proceed."],
  ["Can you create our logo or event theme?", "Yes. Custom formations can feature logos, messages, and event themes. The level of detail depends on drone count and viewing distance. Share your creative goals so we can recommend the scope."],
  ["How far ahead should we inquire?", "Contact us as early as possible with your proposed date and venue. Scheduling, creative production, site review, and any required approvals affect the timeline. If your date is close, ask us to review feasibility before making plans around a show."],
];
const cta = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF3B3B] px-7 py-4 font-bold text-white hover:bg-[#d92d2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
export default function CaliforniaDroneShows() {
  return <main className="bg-black pb-20 pt-28 text-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "California drone light show planning and production", url, description, provider: { "@type": "Organization", name: "Vegas Drones", url: "https://www.vegasdrones.com" }, areaServed: { "@type": "State", name: "California" } }) }} />
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2">
      <div><p className="text-sm font-semibold uppercase tracking-widest text-[#FF6A6A]">California event inquiries</p>
        <h1 className="mt-4 font-orbitron text-4xl font-bold leading-tight sm:text-5xl">California drone light shows. Your story in the sky.</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">Give your corporate event, brand launch, festival, or wedding a custom aerial finale. Tell our Las Vegas-based team where in California you’re planning, and we’ll review your venue, date, and creative goals.</p>
        <Link href="/contact?market=california&source=california-drone-shows" className={`${cta} mt-8`}>Check My California Event Date</Link>
        <p className="mt-4 text-sm text-gray-400">Custom formations · Venue feasibility review · Travel included in your proposal</p>
      </div>
      <figure><div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/the-boys/the-boys-logo.jpg" alt="Custom The Boys logo formation from our Amazon Prime drone-show production" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><figcaption className="mt-3 text-sm text-gray-400">Our 1,500-drone Amazon Prime production. <Link href="/blog/amazon-prime-the-boys-drone-show" className="text-white underline">Explore the case study</Link>.</figcaption></figure>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12"><h2 className="font-orbitron text-3xl font-bold">Start with your California venue</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">Planning in Los Angeles, Orange County, San Diego, Palm Springs, the Bay Area, Sacramento, or elsewhere in California? Share your exact event location. A city name alone cannot establish whether a drone show is feasible; each site needs its own review.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{[
        ["Corporate events & brand launches", "Build a finale around your product, logo, or campaign. Share your brand assets, audience, and desired show moment.", "/drone-advertising"],
        ["Festivals & community celebrations", "Plan a show around your community or event theme. Include the proposed launch site, crowd layout, and event schedule.", "/holidays"],
        ["Weddings & private events", "Bring names, meaningful imagery, or a personal message into the sky. Start with your venue and preferred date.", "/weddings"],
      ].map(([heading, body, href]) => <article key={heading} className="rounded-2xl border border-white/15 bg-white/5 p-6"><h3 className="text-xl font-bold">{heading}</h3><p className="mt-4 leading-7 text-gray-300">{body}</p><Link href={href} className="mt-5 inline-flex min-h-11 items-center underline underline-offset-4">Explore show ideas →</Link></article>)}</div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-12"><div className="rounded-3xl border border-white/15 p-7 sm:p-10"><h2 className="font-orbitron text-3xl font-bold">A clear plan before you book</h2><ol className="mt-8 grid gap-8 md:grid-cols-3">{[
      ["1. Share your event", "Send your city, venue, date, audience size, and budget range. It’s fine if some details are still being decided."],
      ["2. Review the site & scope", "We assess site requirements and logistics, then recommend the creative approach and drone count for your goals."],
      ["3. Get a tailored proposal", "Review show scope, travel, scheduling, and approval requirements before committing. Availability and feasibility must be confirmed."],
    ].map(([heading, body]) => <li key={heading}><h3 className="text-xl font-bold">{heading}</h3><p className="mt-3 leading-7 text-gray-300">{body}</p></li>)}</ol></div></section>
    <section className="mx-auto max-w-3xl px-6 py-12"><h2 className="font-orbitron text-3xl font-bold">California drone show questions</h2><div className="mt-8 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-white/15 p-5"><summary className="cursor-pointer text-lg font-semibold">{question}</summary><p className="mt-4 leading-7 text-gray-300">{answer}</p></details>)}</div></section>
    <section className="mx-auto max-w-3xl px-6 py-12 text-center"><h2 className="font-orbitron text-3xl font-bold">Let’s review your California event.</h2><p className="mt-5 text-lg leading-8 text-gray-300">Start with a date and a location. We’ll help define the next steps for your venue and show.</p><Link href="/contact?market=california&source=california-drone-shows" className={`${cta} mt-7`}>Request California Pricing & Availability</Link><p className="mt-5 text-gray-300">Or email <a href="mailto:keith@vegasdrones.com?subject=California%20drone%20show%20inquiry" className="text-white underline">keith@vegasdrones.com</a></p></section>
  </main>;
}
