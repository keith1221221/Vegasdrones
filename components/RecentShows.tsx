import Link from "next/link";

const shows = [
  {
    title: "Mobilize Recovery: Narcan at Night",
    location: "The INDUSTRIAL · Las Vegas, Nevada",
    description: "155 drones brought recovery messages, custom lettering, and a sunrise formation to the Las Vegas sky.",
    href: "/blog/mobilize-recovery-narcan-at-night-drone-show-las-vegas",
    video: "/shows/mobilize-recovery/breathe.mp4",
    poster: "/shows/mobilize-recovery/breathe.jpg",
  },
  {
    title: "Pioche Labor Day 2026",
    location: "Pioche, Nevada",
    description: "155 drones celebrated Pioche with town lettering, an eagle, and red, white, and blue formations.",
    href: "/blog/pioche-labor-day-2026-drone-show",
    video: "/shows/pioche-labor-day/1776.mp4",
    poster: "/shows/pioche-labor-day/1776-poster.jpg",
  },
];

export default function RecentShows() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20" aria-label="Recent Vegas Drones shows">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-orbitron text-2xl font-bold sm:text-4xl">Recent Shows, Real Moments</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">Watch highlights from our 155-drone productions and explore the full show stories.</p>
        <div className="mt-10 sm:mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {shows.map((show) => (
            <article key={show.href} className="min-w-0">
              <video className="aspect-video w-full rounded-2xl bg-black object-contain" controls playsInline preload="none" poster={show.poster} aria-label={`${show.title} show highlight`}>
                <source src={show.video} type="video/mp4" />
                Your browser cannot play this video. <a href={show.video}>Watch the highlight</a>.
              </video>
              <div className="px-1 pt-6 sm:pt-8">
                <p className="text-sm text-[#FF6A6A]">{show.location} · 155 drones</p>
                <h3 className="mt-2 text-xl font-bold">{show.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-gray-300">{show.description}</p>
                <Link href={show.href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4">See photos &amp; the full recap<span className="sr-only">: {show.title}</span> →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
