import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/drone-shows-vs-fireworks`;
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Drone Shows vs Fireworks | Las Vegas Event Comparison | Vegas Drones",
  description:
    "Comparing drone shows vs fireworks for Las Vegas events? See how they differ in branding, repeatability, sound, venue fit, and social-media value.",
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

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">Why Planners Choose Drone Shows</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
              <li>Custom logos, names, dates, icons, and readable messaging</li>
              <li>Repeatable, programmable sequences with tighter creative control</li>
              <li>Cleaner brand integration for sponsors and activations</li>
              <li>Stronger recap and social-media value for many events</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white">Why Fireworks Still Fit Some Events</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-300">
              <li>Classic emotional impact for traditional celebrations</li>
              <li>Strong fit when branding is less important than spectacle</li>
              <li>Useful when the event already expects a fireworks finale</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-orbitron text-2xl font-bold text-white">The Las Vegas Reality</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Many Las Vegas clients are not choosing between “good” and “bad.” They are choosing the format that best
            fits a resort, convention, corporate event, holiday activation, or branded public experience. Drone shows are
            especially strong when brand visibility, custom storytelling, and shareable hero moments matter.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
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
