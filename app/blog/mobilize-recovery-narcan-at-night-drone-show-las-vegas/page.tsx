import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "155 Drones Light Up Mobilize Recovery’s Narcan at Night in Las Vegas";
const description = "Vegas Drones brought 155 drones to Mobilize Recovery’s September 12, 2026 celebration at the INDUSTRIAL in Las Vegas. See real show photos and clips.";
const canonical = "https://www.vegasdrones.com/blog/mobilize-recovery-narcan-at-night-drone-show-las-vegas";
const media = "/shows/mobilize-recovery";
export const metadata: Metadata = {
  title: `${title} | Vegas Drones`, description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article", siteName: "Vegas Drones", images: [{ url: `${media}/narcan-at-night.jpg`, width: 1920, height: 1080, alt: "155 drones spell Narcan at Night above Las Vegas" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${media}/narcan-at-night.jpg`] },
};
const photos = [
  { file: "recovery-month.jpg", alt: "Drones spell Happy Recovery Month in blue, green and red above the Las Vegas skyline", caption: "A Recovery Month message above Las Vegas." },
  { file: "breathe.jpg", alt: "Drones spell breathe inside a green circle over Las Vegas", caption: "A simple message, given space in the night sky: breathe." },
  { file: "recovery-symbol.jpg", alt: "Yellow drones form a triangle surrounded by a blue circle over Las Vegas", caption: "A circle-and-triangle recovery symbol in blue and gold." },
];
export default function MobilizeRecoveryRecap() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image: [`https://www.vegasdrones.com${media}/narcan-at-night.jpg`], author: { "@type": "Organization", name: "Vegas Drones" }, publisher: { "@type": "Organization", name: "Vegas Drones" }, mainEntityOfPage: canonical };
  return <main className="bg-black text-white font-poppins">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
    <article className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400"><Link href="/blog" className="hover:text-white">Blog</Link><span aria-hidden="true"> / </span><span>Mobilize Recovery</span></nav>
      <header className="max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Show recap · September 12, 2026</p>
        <h1 className="mt-4 font-orbitron text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">A night devoted to recovery, connection, and community ended with a message in lights. Vegas Drones brought 155 drones to Mobilize Recovery’s Narcan at Night celebration in Las Vegas.</p>
      </header>
      <figure className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        <Image src={`${media}/narcan-at-night.jpg`} alt="155 drones spell Narcan at Night above the Las Vegas skyline" width={1920} height={1080} priority className="h-auto w-full" sizes="(max-width: 1200px) 100vw, 1152px" />
        <figcaption className="p-4 text-sm text-gray-400">Narcan at Night, written in light above Las Vegas.</figcaption>
      </figure>
      <dl className="my-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
        {[ ["Fleet", "155 drones"], ["Venue", "the INDUSTRIAL, Las Vegas"], ["Occasion", "Recovery Night Lights"] ].map(([label, value]) => <div key={label}><dt className="text-sm text-gray-400">{label}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
      </dl>
      <div className="max-w-3xl space-y-6 text-gray-300 leading-relaxed">
        <h2 className="font-orbitron text-2xl font-bold text-white">A celebration with purpose</h2>
        <p>On September 12, 2026, the INDUSTRIAL hosted Recovery Night Lights, the closing celebration of Mobilize Recovery’s Narcan at Night programming. After an evening of community outreach, volunteers and supporters gathered to celebrate recovery together.</p>
        <p>Our show carried that purpose into the sky. The formations included Narcan at Night lettering, a Recovery Month greeting, the word “breathe,” and a circle-and-triangle recovery symbol. Each image connected the aerial display to the people and message at the center of the evening.</p>
        <h2 className="font-orbitron text-2xl font-bold text-white">Watch two moments from the show</h2>
        <p>These short clips show the breathing and sunrise sequences from the 155-drone production. Alongside the event lettering, they gave the show room for quieter, reflective imagery.</p>
      </div>
      <div className="my-8 grid gap-6 md:grid-cols-2">
        {[{ file: "breathe", poster: "breathe.jpg", name: "Breathe sequence", caption: "The breathe formation in motion. Silent clip." }, { file: "sunrise", poster: "sunrise-poster.jpg", name: "Sunrise sequence", caption: "A sunrise sequence from the show. Silent clip." }].map(clip => <figure key={clip.file} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"><video controls playsInline preload="none" poster={`${media}/${clip.poster}`} aria-label={clip.name} className="aspect-video w-full"><source src={`${media}/${clip.file}.mp4`} type="video/mp4" /><a href={`${media}/${clip.file}.mp4`}>Download {clip.name}</a></video><figcaption className="p-4"><h3 className="font-semibold">{clip.name}</h3><p className="mt-1 text-sm text-gray-400">{clip.caption}</p></figcaption></figure>)}
      </div>
      <h2 className="mb-6 font-orbitron text-2xl font-bold">Show photos</h2>
      <div className="grid gap-6 md:grid-cols-2">{photos.map(photo => <figure key={photo.file} className="overflow-hidden rounded-2xl border border-white/10"><Image src={`${media}/${photo.file}`} alt={photo.alt} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full" /><figcaption className="p-4 text-sm text-gray-400">{photo.caption}</figcaption></figure>)}</div>
      <div className="mt-10 max-w-3xl space-y-6 text-gray-300 leading-relaxed">
        <h2 className="font-orbitron text-2xl font-bold text-white">Custom storytelling from a Las Vegas team</h2>
        <p>For this show, the creative brief was rooted in recovery and community. Custom lettering, recognizable symbols, and moving formations gave the event its own visual identity.</p>
        <p>Vegas Drones is headquartered in Las Vegas. We create custom drone light shows for nonprofit events, conventions, resort celebrations, and brand activations. We never charge travel fees for Las Vegas shows.</p>
        <p className="text-sm">Learn more about the evening in <a className="text-[#FF6A6A] underline underline-offset-4" href="https://www.mobilizerecovery.org/recovery_in_action_a_powerful_weekend_in_las_vegas">Mobilize Recovery’s organizer recap</a>.</p>
      </div>
      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="font-orbitron text-2xl font-bold">Bring your message to the Las Vegas sky</h2>
        <p className="mt-3 max-w-2xl text-gray-300">Tell us your event date, venue, and the story you want to tell. We’ll explore a custom show that fits your occasion.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#FF3B3B] px-7 py-3 font-bold text-white hover:bg-[#FF6A6A]">Plan your drone show</Link>
      </section>
    </article>
  </main>;
}
