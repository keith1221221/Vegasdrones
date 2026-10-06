import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "Pioche Labor Day 2026: A 155-Drone Celebration";
const description = "Vegas Drones celebrates Pioche Labor Day 2026 with 155 drones, custom town lettering, patriotic formations, real show photos, and two highlight clips.";
const canonical = "https://www.vegasdrones.com/blog/pioche-labor-day-2026-drone-show";
const media = "/shows/pioche-labor-day";
export const metadata: Metadata = {
  title: `${title} | Vegas Drones`, description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article", siteName: "Vegas Drones", images: [{ url: `${media}/pioche.jpg`, width: 1920, height: 1080, alt: "155 drones spell Pioche during the town’s Labor Day celebration" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${media}/pioche.jpg`] },
};
const photos = [
  { file: "labor-day-2026.jpg", alt: "Drones spell Labor Day 2026 in turquoise and purple above Pioche", caption: "Labor Day 2026, written in light." },
  { file: "eagle.jpg", alt: "Drones form an eagle in red, white and blue above Pioche", caption: "A patriotic eagle formation from the 155-drone show." },
  { file: "american-flag.jpg", alt: "Drones form the American flag above Pioche at night", caption: "Old Glory in red, white and blue." },
  { file: "rocket.jpg", alt: "Drones form a rocket with red, white and blue lights", caption: "A rocket formation from Pioche’s Labor Day show." },
];
export default function PiocheLaborDayRecap() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image: [`https://www.vegasdrones.com${media}/pioche.jpg`], author: { "@type": "Organization", name: "Vegas Drones" }, publisher: { "@type": "Organization", name: "Vegas Drones" }, mainEntityOfPage: canonical };
  return <main className="bg-black text-white font-poppins">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }} />
    <article className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400"><Link href="/blog" className="hover:text-white">Blog</Link><span aria-hidden="true"> / </span><span>Pioche Labor Day</span></nav>
      <header className="max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Show recap · September 2026</p>
        <h1 className="mt-4 font-orbitron text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">Pioche’s Labor Day tradition took to the night sky with 155 drones. Vegas Drones created a show combining the town’s name, Labor Day lettering, and patriotic imagery for the Nevada community’s 2026 celebration.</p>
      </header>
      <figure className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        <Image src={`${media}/pioche.jpg`} alt="155 drones spell Pioche during the town’s Labor Day celebration" width={1920} height={1080} priority className="h-auto w-full" sizes="(max-width: 1200px) 100vw, 1152px" />
        <figcaption className="p-4 text-sm text-gray-400">Pioche’s name becomes part of the show.</figcaption>
      </figure>
      <dl className="my-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
        {[ ["Fleet", "155 drones"], ["Location", "Pioche, Nevada"], ["Occasion", "Labor Day 2026"] ].map(([label, value]) => <div key={label}><dt className="text-sm text-gray-400">{label}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
      </dl>
      <div className="max-w-3xl space-y-6 text-gray-300 leading-relaxed">
        <h2 className="font-orbitron text-2xl font-bold text-white">A hometown celebration in the sky</h2>
        <p>Pioche’s 2026 Labor Day festival ran September 4–7, bringing the community together for a long weekend of local tradition. Our 155-drone production added custom aerial imagery to the celebration.</p>
        <p>The show put Pioche itself in the spotlight. Town lettering and a Labor Day 2026 formation joined an American flag, a patriotic eagle, and a rocket. Together, the formations gave the community celebration a visual identity of its own.</p>
        <h2 className="font-orbitron text-2xl font-bold text-white">Watch two moments from the show</h2>
        <p>Watch the welcome sequence and the 1776 sequence from the Pioche show. These vertical clips preserve the original framing and audio, with playback controls so you can watch at your own pace.</p>
      </div>
      <div className="my-8 grid gap-6 md:grid-cols-2">
        {[{ file: "welcome-to-pioche", poster: "welcome-to-pioche-poster.jpg", name: "Welcome to Pioche", caption: "Custom town lettering in motion." }, { file: "1776", poster: "1776-poster.jpg", name: "1776 sequence", caption: "A patriotic sequence from the Labor Day show." }].map(clip => <figure key={clip.file} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"><video controls playsInline preload="none" poster={`${media}/${clip.poster}`} aria-label={clip.name} className="mx-auto aspect-[9/16] max-h-[640px] w-full bg-black object-contain"><source src={`${media}/${clip.file}.mp4`} type="video/mp4" /><a href={`${media}/${clip.file}.mp4`}>Download {clip.name}</a></video><figcaption className="p-4"><h3 className="font-semibold">{clip.name}</h3><p className="mt-1 text-sm text-gray-400">{clip.caption}</p></figcaption></figure>)}
      </div>
      <h2 className="mb-6 font-orbitron text-2xl font-bold">Show photos</h2>
      <div className="grid gap-6 md:grid-cols-2">{photos.map(photo => <figure key={photo.file} className="overflow-hidden rounded-2xl border border-white/10"><Image src={`${media}/${photo.file}`} alt={photo.alt} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full" /><figcaption className="p-4 text-sm text-gray-400">{photo.caption}</figcaption></figure>)}</div>
      <div className="mt-10 max-w-3xl space-y-6 text-gray-300 leading-relaxed">
        <h2 className="font-orbitron text-2xl font-bold text-white">Custom drone shows for Nevada communities</h2>
        <p>A town name in the sky makes a show personal to the people gathered below. For Pioche, custom lettering and familiar patriotic imagery tied the production to the community and its Labor Day weekend.</p>
        <p>Vegas Drones is headquartered in Las Vegas. We create custom drone light shows for festivals, community celebrations, conventions, and private events throughout Nevada and beyond.</p>
        <p className="text-sm">Explore the celebration on <a className="text-[#FF6A6A] underline underline-offset-4" href="https://piochenevada.com/event/2026-pioche-labor-day-festival/">the Pioche Chamber of Commerce’s festival page</a>.</p>
      </div>
      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h2 className="font-orbitron text-2xl font-bold">Make your community part of the show</h2>
        <p className="mt-3 max-w-2xl text-gray-300">Tell us your event date, venue, and the story you want to tell. We’ll explore a custom show that fits your occasion.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#FF3B3B] px-7 py-3 font-bold text-white hover:bg-[#FF6A6A]">Plan your drone show</Link>
      </section>
    </article>
  </main>;
}
