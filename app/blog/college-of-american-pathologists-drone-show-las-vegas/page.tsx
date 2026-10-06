import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "150 Drones Celebrate the College of American Pathologists Foundation in Las Vegas";
const description = "Vegas Drones brought 150 drones to the CAP Foundation’s License to Give event at the INDUSTRIAL in Las Vegas. Explore real photos and two show clips.";
const canonical = "https://www.vegasdrones.com/blog/college-of-american-pathologists-drone-show-las-vegas";
const media = "/shows/college-of-american-pathologists";
export const metadata: Metadata = {
  title: `${title} | Vegas Drones`, description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article", siteName: "Vegas Drones", images: [{ url: `${media}/pathology-heart.jpg`, width: 1920, height: 1080, alt: "Drones form a heart around Pathology above the INDUSTRIAL in Las Vegas" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${media}/pathology-heart.jpg`] },
};
const photos = [
  { file: "cap-foundation.jpg", alt: "Drones spell a CAP Foundation hashtag above the INDUSTRIAL and a CAP Foundation billboard", caption: "CAP Foundation lettering above the event venue." },
  { file: "date-formation.jpg", alt: "Drones form the numbers 9.10.27 over the INDUSTRIAL in Las Vegas", caption: "A custom date formation from the show." },
];
const clips = [
  { file: "countdown-heart", poster: "countdown-heart-poster.jpg", title: "Countdown & heart sequence", caption: "A moving formation from the 150-drone production." },
  { file: "lilly", poster: "lilly-poster.jpg", title: "Lilly sequence", caption: "Custom lettering captured during the show." },
];
export default function CAPRecap() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, description, image: [`https://www.vegasdrones.com${media}/pathology-heart.jpg`], author: { "@type": "Organization", name: "Vegas Drones" }, publisher: { "@type": "Organization", name: "Vegas Drones" }, mainEntityOfPage: canonical };
  return <main className="bg-black text-white font-poppins">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400"><Link href="/blog" className="hover:text-white">Blog</Link><span aria-hidden="true"> / </span><span>College of American Pathologists Foundation</span></nav>
      <header className="max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-[#FF6A6A]">Show recap · October 2, 2026</p>
        <h1 className="mt-4 font-orbitron text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">A heart, a profession, and a purpose in lights. Vegas Drones created a 150-drone show for the College of American Pathologists Foundation at the INDUSTRIAL in Las Vegas.</p>
      </header>
      <figure className="mt-10 overflow-hidden rounded-2xl">
        <Image src={`${media}/pathology-heart.jpg`} alt="150 drones form a heart around the word Pathology above the INDUSTRIAL in Las Vegas" width={1920} height={1080} priority sizes="(max-width: 1200px) 100vw, 1152px" className="h-auto w-full" />
        <figcaption className="pt-4 text-sm text-gray-400">Pathology at the heart of the evening, written in the Las Vegas sky.</figcaption>
      </figure>
      <dl className="my-10 grid gap-6 border-y border-white/15 py-6 sm:grid-cols-3">
        {[["Show size", "150 drones"], ["Venue", "the INDUSTRIAL, Las Vegas"], ["Event", "CAP Foundation · License to Give"]].map(([label,value]) => <div key={label}><dt className="text-sm text-gray-400">{label}</dt><dd className="mt-2 font-semibold">{value}</dd></div>)}
      </dl>
      <div className="max-w-3xl space-y-6 leading-8 text-gray-300">
        <h2 className="font-orbitron text-2xl font-bold text-white">A message made for the occasion</h2>
        <p>The CAP Foundation’s October 2, 2026 License to Give event brought members and supporters together at the INDUSTRIAL during CAP26. Our aerial display carried the event’s identity beyond the venue, with custom lettering and a heart surrounding the word “Pathology.”</p>
        <p>The 150-drone production also included CAP Foundation lettering and a custom date formation. The photos and clips below capture those moments as they appeared during the show.</p>
        <p className="text-sm">Event details: <a href="https://foundation.cap.org/event/cap26-are-you-in/" className="text-[#FF6A6A] underline underline-offset-4">the CAP Foundation’s official event page</a>.</p>
        <h2 className="pt-4 font-orbitron text-2xl font-bold text-white">Watch the show highlights</h2>
      </div>
      <div className="my-8 grid gap-8 md:grid-cols-2">
        {clips.map(clip => <figure key={clip.file}><video controls playsInline preload="none" poster={`${media}/${clip.poster}`} aria-label={clip.title} className="aspect-video w-full rounded-2xl bg-black object-contain"><source src={`${media}/${clip.file}.mp4`} type="video/mp4" /><a href={`${media}/${clip.file}.mp4`}>Watch {clip.title}</a></video><figcaption className="pt-4"><h3 className="font-semibold">{clip.title}</h3><p className="mt-2 text-sm text-gray-400">{clip.caption}</p></figcaption></figure>)}
      </div>
      <h2 className="mt-12 mb-6 font-orbitron text-2xl font-bold">Show photos</h2>
      <div className="grid gap-8 md:grid-cols-2">{photos.map(photo => <figure key={photo.file}><Image src={`${media}/${photo.file}`} alt={photo.alt} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full rounded-2xl" /><figcaption className="pt-4 text-sm text-gray-400">{photo.caption}</figcaption></figure>)}</div>
      <section className="mt-14 max-w-3xl border-t border-white/15 pt-10">
        <h2 className="font-orbitron text-2xl font-bold">Bring your organization’s story to the sky</h2>
        <p className="mt-5 leading-8 text-gray-300">From nonprofit gatherings to conventions and brand activations, custom formations can put your message at the center of the show. Vegas Drones is a Vegas-born company, with no travel fees for Las Vegas shows.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#FF3B3B] px-7 py-4 font-bold text-black hover:bg-[#FF6A6A]">Check My Date &amp; Get Pricing</Link>
      </section>
    </article>
  </main>;
}
