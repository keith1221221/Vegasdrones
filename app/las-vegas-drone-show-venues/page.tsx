import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Las Vegas Event Venues for Drone Show Planning | Vegas Drones",
  description: "Explore venues where Vegas Drones has performed and start a venue-specific review for your wedding, corporate event, or celebration.",
  alternates: { canonical: "https://www.vegasdrones.com/las-vegas-drone-show-venues" },
  robots: { index: false, follow: false },
};
const cta = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF3B3B] px-6 py-3 font-semibold text-white transition hover:bg-[#d92d2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
export default function VenueGuide() {
  return <main className="bg-black pb-20 pt-28 text-white">
    <div className="mx-auto max-w-6xl px-6">
      <section className="max-w-4xl py-12 sm:py-16">
        <Link href="/events" className="text-sm text-gray-300 underline underline-offset-4">Events / Venue guide</Link>
        <p className="mt-7 text-sm uppercase tracking-[0.2em] text-[#FF6A6A]">Find the setting. Create the moment.</p>
        <h1 className="mt-4 font-orbitron text-4xl font-bold leading-tight sm:text-5xl">A Las Vegas venue.<br />A finale made for you.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">Bring your celebration to the sky at a venue we know. With shows already performed at these locations and long-term airspace authorizations in place, our Las Vegas team can help you plan a custom finale around your venue, your guests, and your story.</p>
        <Link href="/contact?source=venue-guide" className={`${cta} mt-7`}>Help Me Plan My Venue &amp; Show</Link>
      </section>
      <section className="mb-12 rounded-3xl border border-white/15 bg-white/[0.04] p-7 sm:p-10">
        <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Local experience. Planning already in place.</p>
        <h2 className="mt-4 font-orbitron text-2xl font-bold sm:text-3xl">Established locations. Experienced local production.</h2>
        <p className="mt-5 max-w-4xl leading-8 text-gray-300">We have long-term airspace authorizations in place for the INDUSTRIAL, Secret Garden, and numerous locations along the Las Vegas Strip and throughout the valley. Contact us to discuss your venue and event date.</p>
        <p className="mt-4 text-sm leading-6 text-gray-400">Each show is planned within the applicable authorization, venue requirements, and operating conditions.</p>
      </section>
      <section className="mt-16 grid gap-10 lg:grid-cols-2" aria-labelledby="area-heading">
        <div><p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Planning somewhere else?</p><h2 id="area-heading" className="mt-4 font-orbitron text-3xl font-bold">Start with your event area.</h2><p className="mt-5 leading-8 text-gray-300">With long-term airspace authorizations at numerous Strip and valley locations, we have an established foundation for planning beyond these featured venues. Share your venue and date so we can discuss the options for your event.</p><Link href="/contact?source=venue-guide-area" className={`${cta} mt-6`}>Ask About My Location</Link></div>
        <figure className="rounded-3xl border border-white/15 bg-white/[0.04] p-6"><figcaption className="text-sm font-semibold uppercase tracking-widest text-gray-400">Las Vegas event areas</figcaption><div className="mt-6 grid grid-cols-[1fr_1fr] gap-4"><div className="space-y-3 border-l-2 border-[#FF3B3B] pl-4">{["North Strip", "Central Strip", "South Strip"].map(area => <div key={area} className="rounded-xl border border-white/10 bg-black/40 px-4 py-5 font-semibold">{area}</div>)}</div><div className="flex items-center justify-center rounded-xl border border-dashed border-white/25 p-5 text-center"><span className="font-semibold">Off-Strip<br /><span className="mt-2 block text-sm font-normal text-gray-400">Share your venue</span></span></div></div><p className="mt-5 text-sm leading-6 text-gray-400">Share your venue and date to explore a custom drone show.</p></figure>
      </section>
      <section aria-label="Featured event venues" className="mt-16 space-y-12">
        <article id="the-industrial" className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04]">
          <div className="grid lg:grid-cols-2">
            <figure className="relative min-h-[300px] lg:min-h-[420px]"><Image src="/shows/college-of-american-pathologists/pathology-heart.jpg" alt="A drone heart surrounds Pathology lettering during our CAP Foundation show at the INDUSTRIAL in Las Vegas" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></figure>
            <div className="p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A6A]">Corporate gatherings · Brand events · Private celebrations</p><h2 className="mt-4 font-orbitron text-3xl font-bold">the INDUSTRIAL</h2><p className="mt-5 leading-7 text-gray-300">An off-Strip event space for corporate events, private parties, weddings, and production shows. We’ve brought custom aerial imagery to events here, including the College of American Pathologists Foundation’s License to Give celebration.</p><p className="mt-4 leading-7 text-gray-300">We have long-term airspace authorization in place at this location. For the CAP Foundation event, 150 drones formed CAP Foundation lettering and a heart around “Pathology.” Explore the actual production as a starting point for your own event brief.</p><div className="mt-5 flex flex-wrap gap-x-6"><Link href="/blog/college-of-american-pathologists-drone-show-las-vegas" className="inline-flex min-h-11 items-center underline underline-offset-4">See our show here →</Link><a href="https://www.theindustrialvegas.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">Visit the venue ↗</a></div><Link href="/contact?source=venue-guide-industrial" className={`${cta} mt-5`}>Plan a Show at the INDUSTRIAL</Link></div>
          </div>
        </article>
        <article id="secret-garden" className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04]">
          <div className="grid lg:grid-cols-2">
            <figure className="flex flex-col bg-black">
              <video controls playsInline preload="metadata" aria-label="A couple embraces during a Vegas Drones wedding show at Secret Garden in Las Vegas" className="h-[420px] w-full bg-black object-contain sm:h-[480px]">
                <source src="/weddingclip2.mp4" type="video/mp4" />
                Your browser does not support embedded video. <a href="/weddingclip2.mp4">Watch the Secret Garden wedding show video</a>.
              </video>
              <figcaption className="px-6 py-4 text-sm leading-6 text-gray-400">A couple shares a moment during our wedding drone show at Secret Garden, Las Vegas.</figcaption>
            </figure>
            <div className="p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A6A]">Weddings · Receptions · Private celebrations</p><h2 className="mt-4 font-orbitron text-3xl font-bold">Secret Garden</h2><p className="mt-5 leading-7 text-gray-300">A Las Vegas wedding and event venue with garden settings and indoor and outdoor celebration options. We’ve performed drone shows here and can discuss how a personalized aerial finale could fit your event.</p><p className="mt-4 leading-7 text-gray-300">Bring us your date, guest count, and ideas—names, a meaningful image, or a custom message. With long-term airspace authorization in place here, we’ll review your event layout and production requirements to shape the show plan.</p><div className="mt-5 flex flex-wrap gap-x-6"><Link href="/weddings" className="inline-flex min-h-11 items-center underline underline-offset-4">Explore wedding shows →</Link><a href="https://secretgardenweddinglv.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">Visit the venue ↗</a></div><Link href="/contact?source=venue-guide-secret-garden" className={`${cta} mt-5`}>Plan a Show at Secret Garden</Link></div>
          </div>
        </article>
      </section>
      <section className="mt-16 border-t border-white/15 pt-12 text-center"><h2 className="font-orbitron text-3xl font-bold">Let’s connect the venue and the vision.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">Share your preferred venue, date, audience size, and budget range. We’ll help define the next steps for your drone show.</p><Link href="/contact?source=venue-guide-bottom" className={`${cta} mt-6`}>Check My Date &amp; Get Pricing</Link></section>
    </div>
  </main>;
}
