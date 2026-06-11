import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

const CANONICAL =
  "https://www.vegasdrones.com/blog/st-patricks-day-drone-show-las-vegas-strip-recap";

const YOUTUBE_EMBED = "https://www.youtube.com/embed/n6gK3TqB1QM";

export const metadata: Metadata = {
  title:
    "St. Patrick’s Day Drone Show on the Las Vegas Strip | BLVD Las Vegas Recap | Vegas Drones",
  description:
    "Vegas Drones recaps the St. Patrick’s Day drone light show at BLVD Las Vegas on the Las Vegas Strip with highlight video and photos from the event.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title:
      "St. Patrick’s Day Drone Show on the Las Vegas Strip | BLVD Las Vegas Recap",
    description:
      "Event recap from the St. Patrick’s Day drone light show at BLVD Las Vegas on the Las Vegas Strip.",
    url: CANONICAL,
    siteName: "Vegas Drones",
    type: "article",
    images: [
      {
        url: "https://www.vegasdrones.com/st-patricks-day-drone-show-clover.jpg",
        width: 1200,
        height: 630,
        alt: "St Patrick’s Day drone light show at BLVD Las Vegas",
      },
    ],
  },
};

export default function StPatricksDayDroneShowRecapPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "St. Patrick’s Day Drone Show on the Las Vegas Strip | BLVD Las Vegas Recap",
    description:
      "Vegas Drones recap of the St. Patrick’s Day drone light show at BLVD Las Vegas.",
    image: [
      "https://www.vegasdrones.com/st-patricks-day-drone-show-clover.jpg",
    ],
    author: {
      "@type": "Organization",
      name: "Vegas Drones",
    },
    publisher: {
      "@type": "Organization",
      name: "Vegas Drones",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vegasdrones.com/logo.png",
      },
    },
    mainEntityOfPage: CANONICAL,
    datePublished: "2026-03-16",
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "St Patrick’s Day Drone Show Las Vegas Strip",
    description:
      "Highlight video from the St Patrick’s Day drone light show at BLVD Las Vegas on the Las Vegas Strip.",
    thumbnailUrl: [
      "https://www.vegasdrones.com/st-patricks-day-drone-show-clover.jpg",
    ],
    uploadDate: "2026-03-16",
    embedUrl: YOUTUBE_EMBED,
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Script
        id="video-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      <main className="bg-black text-white">
        <article className="mx-auto max-w-5xl px-6 py-16 md:px-8">

          <nav className="mb-6 text-sm text-emerald-300/80">
            <Link href="/" className="hover:text-emerald-300">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-emerald-300">
              Blog
            </Link>{" "}
            /{" "}
            <span className="text-white/80">
              St. Patrick’s Day Drone Show Recap
            </span>
          </nav>

          <header className="mb-10">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Event Recap • Las Vegas Drone Show
            </p>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              St. Patrick’s Day Drone Show on the Las Vegas Strip at BLVD Las Vegas
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              Vegas Drones delivered a St. Patrick’s Day themed drone light show at
              BLVD Las Vegas on the Las Vegas Strip, bringing holiday aerial animation
              to one of the most recognizable entertainment corridors in the world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
              <span>Published March 16, 2026</span>
              <span>•</span>
              <span>Las Vegas, Nevada</span>
              <span>•</span>
              <span>Drone Light Show Recap</span>
            </div>

          </header>

          {/* VIDEO */}

          <section className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 md:p-4">

            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">

              <iframe
                className="h-full w-full"
                src={YOUTUBE_EMBED}
                title="St Patrick’s Day Drone Show Las Vegas Strip"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </section>

          {/* EVENT STATS */}

          <section className="mb-14 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                Event
              </p>
              <p className="mt-2 text-lg font-semibold">
                St Patrick’s Day Celebration
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                Venue
              </p>
              <p className="mt-2 text-lg font-semibold">
                BLVD Las Vegas
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold">
                Las Vegas Strip
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
                Producer
              </p>
              <p className="mt-2 text-lg font-semibold">
                Vegas Drones
              </p>
            </div>

          </section>

          {/* ARTICLE */}

          <section className="prose prose-invert prose-lg max-w-none">

  <h2>Recapping the St. Patrick’s Day Drone Show on the Las Vegas Strip</h2>

  <p>
    Vegas Drones produced a St. Patrick’s Day themed drone light show at
    BLVD Las Vegas, bringing animated aerial visuals to the Las Vegas Strip.
    The Las Vegas drone show featured synchronized formations celebrating the
    holiday above one of the most recognizable entertainment corridors in the world.
  </p>

  <p>
    Drone light shows are increasingly used by venues, cities, sports teams,
    and festivals as an alternative to traditional fireworks. A professionally
    produced drone light show in Las Vegas allows event organizers to create
    animated storytelling in the sky while offering precise control,
    repeatability, and sponsor-friendly branding opportunities that can be
    customized for nearly any celebration or event.
  </p>

  <h2>Why This Show Matters</h2>

  <p>
    Hosting a drone light show on the Las Vegas Strip demonstrates how venues,
    brands, and event organizers can create visually striking entertainment
    experiences that capture attention both in person and across social media.
    This St. Patrick’s Day event represents another example of how a
    Las Vegas drone light show can bring themed aerial entertainment to major
    destinations while providing a memorable centerpiece for holiday
    celebrations, festivals, and special events.
  </p>

</section>

          {/* PHOTOS */}

          <section className="my-14">

            <h2 className="mb-6 text-3xl font-bold">
              Photo Highlights
            </h2>

            <div className="grid gap-4 md:grid-cols-3">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src="/st-patricks-day-drone-show-clover.jpg"
                  alt="Clover drone formation during St Patrick’s Day drone light show in Las Vegas"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src="/st-patricks-day-drone-show-claddagh.jpg"
                  alt="Audience watching the St Patrick’s Day drone show at BLVD Las Vegas"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src="/st-patricks-day-drone-show-leprechaun.jpg"
                  alt="Leprechaun drone formation during St Patrick’s Day drone show"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </section>

          {/* CTA */}

          <section className="my-14 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-white/5 p-8">

            <h2 className="text-3xl font-bold">
              Planning a Drone Show in Las Vegas?
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
              Vegas Drones produces custom drone light shows for festivals,
              sporting events, resorts, corporate activations, and private events
              throughout Las Vegas and across the United States.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
              >
                Request a Quote
              </Link>

              <Link
                href="/drone-light-shows"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Drone Light Shows
              </Link>

            </div>

          </section>

        </article>
      </main>
    </>
  );
}
