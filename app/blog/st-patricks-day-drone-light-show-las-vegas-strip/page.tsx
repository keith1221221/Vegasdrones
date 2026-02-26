import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const CANONICAL =
  "https://www.vegasdrones.com/blog/st-patricks-day-drone-light-show-las-vegas-strip";

export const metadata: Metadata = {
  title: "St. Patrick’s Day Drone Light Show | Las Vegas Strip | Vegas Drones",
  description:
    "Free DJ terrace party and themed drone light show on the Las Vegas Strip at BLVD Las Vegas, produced by Vegas Drones. March 13.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "St. Patrick’s Day Drone Light Show | Las Vegas Strip | Vegas Drones",
    description:
      "Free DJ terrace party (6–8pm) and themed drone light show finale over the Las Vegas Strip at BLVD Las Vegas. March 13.",
    url: CANONICAL,
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/flyer.jpeg",
        width: 1600,
        height: 900,
        alt: "Vegas Drones — St. Patrick’s Day Drone Light Show on the Las Vegas Strip",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function StPatricksDayBlogPostPage() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "St. Patrick’s Day DJ Terrace Party & Drone Light Show",
    description:
      "Free DJ terrace party featuring Irish favorites, dance anthems and rock hits from 6–8pm, followed by a themed drone light show finale over BLVD Las Vegas on the Las Vegas Strip. Specialty pizzas at How Ya Doughn’ and a curated selection of Irish beers and handcrafted cocktails available.",
    startDate: "2026-03-13T18:00:00-08:00",
    endDate: "2026-03-13T20:30:00-08:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    location: {
      "@type": "Place",
      name: "BLVD Las Vegas",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Vegas Drones",
      url: "https://www.vegasdrones.com",
    },
  };

  return (
    <main className="bg-black text-white font-poppins">
      <section className="px-6 pt-14 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-orbitron text-white">
                Events
              </span>
              <span className="text-xs text-gray-400">
                February 2026 • 3 min read
              </span>
            </div>

            <h1 className="font-orbitron font-bold text-3xl sm:text-5xl leading-tight">
              St. Patrick’s Day DJ Terrace Party & Drone Light Show on the Las
              Vegas Strip
            </h1>

            <p className="mt-5 text-gray-200 text-base sm:text-lg leading-relaxed">
              On March 13, a free St. Patrick’s Day celebration is coming to{" "}
              <strong>BLVD Las Vegas</strong> on the{" "}
              <strong>Las Vegas Strip</strong> — featuring a DJ on the terrace
              from <strong>6:00 PM to 8:00 PM</strong>, followed by a themed{" "}
              <strong>drone light show</strong> finale in the sky over BLVD.
            </p>
          </header>

          {/* Event Flyer */}
          <div className="mt-10 mb-12">
            <Image
              src="/flyer.jpg"
              alt="St. Patrick’s Day DJ Terrace Party & Drone Light Show at BLVD Las Vegas"
              width={1600}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            {/* Event Module */}
            <div className="not-prose mt-2 mb-10">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 shadow-2xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  {/* Left: Title + intro */}
                  <div className="min-w-0">
                    <p className="text-xs tracking-wider text-white/55 uppercase">
                      Event Details
                    </p>
                    <h2 className="mt-2 font-orbitron text-2xl sm:text-3xl font-bold leading-tight">
                      St. Patrick’s Day DJ Terrace Party & Drone Light Show
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
                      A free St. Patrick’s Day celebration at{" "}
                      <strong>BLVD Las Vegas</strong> on the{" "}
                      <strong>Las Vegas Strip</strong> — DJ terrace party{" "}
                      <strong>6:00–8:00 PM</strong>, followed by a themed drone
                      light show finale.
                    </p>

                    {/* Quick chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        Free & open to the public
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        DJ 6–8 PM
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        Drone finale after
                      </span>
                    </div>
                  </div>

                  {/* Right: Key facts */}
                  <div className="w-full md:w-[320px] shrink-0">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <ul className="m-0 list-none space-y-3 p-0">
                        <li className="flex items-start justify-between gap-3">
                          <span className="text-sm text-white/60">Date</span>
                          <span className="text-sm font-semibold text-white">
                            March 13
                          </span>
                        </li>
                        <li className="flex items-start justify-between gap-3">
                          <span className="text-sm text-white/60">Location</span>
                          <span className="text-sm font-semibold text-white text-right">
                            BLVD Las Vegas
                            <span className="block text-xs font-normal text-white/60">
                              Las Vegas Strip
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start justify-between gap-3">
                          <span className="text-sm text-white/60">
                            DJ Terrace Party
                          </span>
                          <span className="text-sm font-semibold text-white">
                            6:00–8:00 PM
                          </span>
                        </li>
                        <li className="flex items-start justify-between gap-3">
                          <span className="text-sm text-white/60">Drone Show</span>
                          <span className="text-sm font-semibold text-white text-right">
                            Finale after DJ
                          </span>
                        </li>
                        <li className="flex items-start justify-between gap-3">
                          <span className="text-sm text-white/60">Admission</span>
                          <span className="text-sm font-semibold text-white">
                            Free
                          </span>
                        </li>
                      </ul>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
                        >
                          Get a Quote
                        </Link>
                        <Link
                          href="/las-vegas-drone-light-shows"
                          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="m-0 text-xs uppercase tracking-wider text-white/55">
                      Music
                    </p>
                    <p className="mt-2 mb-0 text-sm text-white/80 leading-relaxed">
                      Irish favorites, dance anthems, and rock hits on the
                      terrace.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="m-0 text-xs uppercase tracking-wider text-white/55">
                      Food & Drinks
                    </p>
                    <p className="mt-2 mb-0 text-sm text-white/80 leading-relaxed">
                      Specialty pizzas at <strong>How Ya Doughn’</strong> + Irish
                      beers and cocktails.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="m-0 text-xs uppercase tracking-wider text-white/55">
                      Finale
                    </p>
                    <p className="mt-2 mb-0 text-sm text-white/80 leading-relaxed">
                      Themed drone light show finale over BLVD Las Vegas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body copy */}
            <h2>What to Expect</h2>
            <p>
              Kick off the evening with a high-energy DJ set on the terrace from{" "}
              <strong>6:00 PM to 8:00 PM</strong>. After the music wraps, look to
              the sky for a{" "}
              <strong>St. Patrick’s Day themed drone light show finale</strong>.
            </p>

            <h2>Food, Drinks & Atmosphere</h2>
            <p>
              Grab specialty pizzas at <strong>How Ya Doughn’</strong>, then head
              to the bar for a curated selection of{" "}
              <strong>Irish beers</strong> and{" "}
              <strong>handcrafted cocktails</strong>.
            </p>

            <h2>Produced by Vegas Drones</h2>
            <p>
              The drone finale is produced by <strong>Vegas Drones</strong>, a Las
              Vegas–based drone light show company specializing in large-scale
              shows for the Strip, resorts, conventions, corporate events,
              festivals, and private celebrations throughout Southern Nevada.
            </p>

            <p>
              Drone light shows deliver high-impact aerial storytelling and are a
              modern, sponsor-ready alternative to fireworks — with clean
              operations and precise, programmable visuals designed for city and
              venue environments.
            </p>

            <h2>Behind-the-Scenes Media Access</h2>
            <p>
              We’re offering behind-the-scenes access for media, including
              pre-show production coverage, launch grid B-roll opportunities, and
              interviews with our team.
            </p>

            <h2>Learn More</h2>
            <p>
              Want to explore show options in Las Vegas? Visit{" "}
              <Link href="/las-vegas-drone-light-shows">
                Las Vegas Drone Light Shows
              </Link>{" "}
              or <Link href="/contact">contact us</Link> to talk dates and
              concepts.
            </p>

            {/* --- Bottom Enhancements (CTA + Event recap + Footer) --- */}
            <div className="mt-14 not-prose">
              {/* Divider / fade */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {/* CTA 1 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-orbitron text-lg font-bold">
                        Book a Drone Show
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        Weddings, conventions, resorts, festivals — get a fast
                        quote and available dates.
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-lg">🚁</span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      href="/las-vegas-drone-light-shows"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>

                {/* CTA 2 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-orbitron text-lg font-bold">
                        Media Access
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        Want B-roll of the launch grid or an interview? We can
                        coordinate access and timing.
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-lg">🎥</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      Request Media Access
                    </Link>
                  </div>

                  <p className="mt-3 text-xs text-white/50">
                    Tip: mention “St. Patrick’s Day BLVD” in your message so we
                    route it fast.
                  </p>
                </div>

                {/* CTA 3 */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-orbitron text-lg font-bold">
                        Explore More
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        See past shows, learn how drone light shows work, and get
                        inspiration for your event.
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-lg">✨</span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <Link
                      href="/see-our-shows"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      View Gallery
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      Read More Posts
                    </Link>
                  </div>
                </div>
              </div>

              {/* Event Recap Panel */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-2xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs tracking-wider text-white/50 uppercase">
                      Event recap
                    </p>
                    <h3 className="mt-2 font-orbitron text-xl font-bold">
                      St. Patrick’s Day DJ Terrace Party & Drone Light Show
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      BLVD Las Vegas • Friday, March 13 • DJ 6–8 PM • Drone finale
                      after
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        Free Admission
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        Las Vegas Strip
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                        Drone Show Finale
                      </span>
                    </div>
                  </div>

                  {/* Add-to-calendar */}
                  <div className="w-full md:w-auto">
                    <a
                      className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
                      target="_blank"
                      rel="noreferrer"
                      href={
                        "https://www.google.com/calendar/render?action=TEMPLATE" +
                        "&text=" +
                        encodeURIComponent(
                          "St. Patrick’s Day DJ Terrace Party & Drone Light Show"
                        ) +
                        "&dates=" +
                        encodeURIComponent("20260314T020000Z/20260314T043000Z") +
                        "&details=" +
                        encodeURIComponent(
                          "Free DJ terrace party 6–8pm followed by a themed drone light show finale over BLVD Las Vegas on the Las Vegas Strip."
                        ) +
                        "&location=" +
                        encodeURIComponent("BLVD Las Vegas, Las Vegas, NV")
                      }
                    >
                      Add to Google Calendar
                    </a>
                    <p className="mt-2 text-xs text-white/45">
                      (Opens a new tab)
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer-ish strip */}
              <div className="mt-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/45">
                    © {new Date().getFullYear()} Vegas Drones • FAA-compliant
                    aerial entertainment
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-white transition"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/las-vegas-drone-light-shows"
                      className="text-white/70 hover:text-white transition"
                    >
                      Drone Light Shows
                    </Link>
                    <Link
                      href="/drone-advertising"
                      className="text-white/70 hover:text-white transition"
                    >
                      Drone Advertising
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-white/70 hover:text-white transition"
                    >
                      Privacy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Event Schema */}
      <Script
        id="event-jsonld-stpatricks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
    </main>
  );
}