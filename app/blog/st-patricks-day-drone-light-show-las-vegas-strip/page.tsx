import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

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
        url: "https://www.vegasdrones.com/og-image.jpg",
        width: 1200,
        height: 630,
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
              <span className="text-xs text-gray-400">February 2026 • 3 min read</span>
            </div>

            <h1 className="font-orbitron font-bold text-3xl sm:text-5xl leading-tight">
              St. Patrick’s Day DJ Terrace Party & Drone Light Show on the Las Vegas Strip
            </h1>

            <p className="mt-5 text-gray-200 text-base sm:text-lg leading-relaxed">
              On March 13, a free St. Patrick’s Day celebration is coming to{" "}
              <strong>BLVD Las Vegas</strong> on the <strong>Las Vegas Strip</strong> —
              featuring a DJ on the terrace from <strong>6:00 PM to 8:00 PM</strong>,
              followed by a themed <strong>drone light show</strong> finale in the sky over BLVD.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Event Details</h2>
            <ul>
              <li>
                <strong>Date:</strong> March 13
              </li>
              <li>
                <strong>Location:</strong> BLVD Las Vegas – Las Vegas Strip
              </li>
              <li>
                <strong>DJ Terrace Party:</strong> 6:00 PM – 8:00 PM
              </li>
              <li>
                <strong>Drone Light Show Finale:</strong> Immediately following the DJ set
              </li>
              <li>
                <strong>Admission:</strong> Free and open to the public
              </li>
            </ul>

            <p>
              The terrace DJ will play your favorite Irish bands, dance anthems, and rock hits.
              Specialty pizzas will be available at <strong>How Ya Doughn’</strong>, and the bar
              will be open with a curated selection of <strong>Irish beers</strong> and{" "}
              <strong>handcrafted cocktails</strong>.
            </p>

            <h2>A Las Vegas Drone Light Show Designed for the Strip</h2>
            <p>
              The drone finale is produced by <strong>Vegas Drones</strong>, a Las Vegas-based
              drone light show company specializing in large-scale drone light shows for the
              Las Vegas Strip, resorts, conventions, corporate events, festivals, and private
              celebrations throughout Southern Nevada.
            </p>

            <p>
              Drone light shows deliver high-impact aerial storytelling and are a modern,
              sponsor-ready alternative to fireworks — with clean operations and precise,
              programmable visuals designed for city and venue environments.
            </p>

            <h2>Behind-the-Scenes Media Access Available</h2>
            <p>
              We’re offering behind-the-scenes access for media, including pre-show production
              coverage, launch grid B-roll opportunities, and interviews with our team.
            </p>

            <h2>Learn More</h2>
            <p>
              Want to explore show options in Las Vegas? Visit{" "}
              <Link href="/las-vegas-drone-light-shows">Las Vegas Drone Light Shows</Link> or{" "}
              <Link href="/contact">contact us</Link> to talk dates and concepts.
            </p>
          </article>
        </div>
      </section>

      {/* Event Schema (helps Google + AI connect the event to Vegas Drones + Strip) */}
      <Script
        id="event-jsonld-stpatricks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
    </main>
  );
}