import type { Metadata } from "next";
import Link from "next/link";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Blog | Vegas Drones",
  description:
    "Insights, guides, event recaps, and venue-ready planning tips for drone light shows in Las Vegas — safety, operations, pricing, and event ideas.",
  alternates: { canonical: "https://www.vegasdrones.com/blog" },
  openGraph: {
    title: "Blog | Vegas Drones",
    description:
      "Insights, event recaps, and guides for venues, planners, and brands exploring drone light shows in Las Vegas.",
    url: "https://www.vegasdrones.com/blog",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Blog",
      },
    ],
  },
  robots: { index: true, follow: true },
};

type Post = {
  title: string;
  description: string;
  href: string;
  dateLabel: string;
  tag: string;
  readingTime: string;
  image: string;
  visualLabel: string;
  visualCaption: string;
};

const posts: Post[] = [
  {
    title: "1,500-Drone Show for Amazon Prime's The Boys",
    description:
      "A Vegas Drones case study covering a 1,500-drone branded entertainment production for Amazon Prime's The Boys and what it signals about large-scale event capability.",
    href: "/blog/amazon-prime-the-boys-drone-show",
    dateLabel: "May 2026",
    tag: "Case Study",
    readingTime: "5 min read",
    image: "/the-boys/the-boys-logo.jpg",
    visualLabel: "Entertainment Brand Activation",
    visualCaption: "Large-scale proof for entertainment, convention, and resort buyers",
  },
  {
    title:
      "St. Patrick’s Day Drone Show on the Las Vegas Strip | BLVD Las Vegas Recap",
    description:
      "A post-event recap of the St. Patrick’s Day drone light show at BLVD Las Vegas, featuring a successful Las Vegas Strip activation, event visuals, and recap coverage from Vegas Drones.",
    href: "/blog/st-patricks-day-drone-show-las-vegas-strip-recap",
    dateLabel: "March 2026",
    tag: "Recap",
    readingTime: "4 min read",
    image: "/st-patricks-day-drone-show-clover.jpg",
    visualLabel: "Las Vegas Strip Event Recap",
    visualCaption: "Real show completed -> recap, photos, and video coverage",
  },
  {
    title:
      "St. Patrick’s Day DJ Terrace Party & Drone Light Show on the Las Vegas Strip",
    description:
      "A free St. Patrick’s Day celebration at BLVD Las Vegas featuring a DJ terrace party (6–8pm) and a themed drone light show finale over the Strip.",
    href: "/blog/st-patricks-day-drone-light-show-las-vegas-strip",
    dateLabel: "February 2026",
    tag: "Events",
    readingTime: "3 min read",
    image: "/st-patricks-day-drone-show-claddagh.jpg",
    visualLabel: "Upcoming Strip Activation",
    visualCaption: "Holiday-themed Las Vegas Strip promotion and event invite",
  },
  {
    title: "Why Venues Are Choosing Drone Light Shows Over Fireworks",
    description:
      "Safety, faster setup, smaller safety zones, cleaner operations, and sponsor-ready branding — why drone shows are the upgrade venues want.",
    href: "/blog/why-venues-are-choosing-drone-light-shows",
    dateLabel: "December 2025",
    tag: "Venues",
    readingTime: "6 min read",
    image: "/osmosignalt1.webp",
    visualLabel: "Venue Strategy",
    visualCaption: "Operational reasons venues are switching from fireworks to drones",
  },
];

export default function BlogIndexPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  const latestGridClass =
    rest.length <= 1
      ? "grid grid-cols-1 gap-6 max-w-3xl mx-auto"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <>
      <main className="bg-black text-white font-poppins">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-14 pb-10">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full blur-3xl opacity-25"
              style={{
                backgroundImage: `radial-gradient(circle at center, ${BRAND_RED} 0%, transparent 60%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="font-orbitron font-bold text-4xl sm:text-6xl leading-tight">
                <span className="text-white">VEGAS DRONES </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
                  }}
                >
                  BLOG
                </span>
              </h1>

              <p className="mt-5 text-gray-200 text-base sm:text-lg leading-relaxed">
                Practical, venue-friendly insights on drone light shows: safety zones,
                operations, branding, scheduling, event strategy, and real Las Vegas
                drone show recaps.
              </p>

              <div className="mt-8">
                <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-black font-bold py-3.5 px-8 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                    boxShadow: "0 0 24px rgba(255,59,59,0.35)",
                  }}
                >
                  Get Pricing
                </Link>

                <Link
                  href="/las-vegas-drone-light-shows"
                  className="inline-flex items-center justify-center py-3.5 px-8 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
                >
                  See Drone Shows
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        {featured && (
          <section className="px-6 pt-6 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left: content */}
                  <div className="lg:col-span-3 p-6 sm:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-orbitron text-white">
                        Featured
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-orbitron text-white">
                        {featured.tag}
                      </span>
                      <span className="text-xs text-gray-400">
                        {featured.dateLabel} • {featured.readingTime}
                      </span>
                    </div>

                    <h2 className="font-orbitron text-2xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                      {featured.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-7">
                      {featured.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={featured.href}
                        className="inline-flex items-center justify-center text-black font-bold py-3.5 px-8 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                          boxShadow: "0 0 24px rgba(255,59,59,0.35)",
                        }}
                      >
                        Read the Post
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center py-3.5 px-8 rounded-full font-orbitron font-bold border border-white/20 text-white hover:bg-white/10 transition"
                      >
                        Book a Show
                      </Link>
                    </div>
                  </div>

                  {/* Right: visual panel with clover image */}
                  <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-full overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                    <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                      <div className="text-xs font-orbitron text-white/75 mb-2">
                        {featured.visualLabel}
                      </div>
                      <div className="text-white font-orbitron text-lg sm:text-xl leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                        {featured.visualCaption}
                      </div>
                      <div className="mt-3 text-sm text-gray-200">
                        {featured.dateLabel}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-px w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${BRAND_RED}, transparent)`,
                    opacity: 0.35,
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* POSTS GRID */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
                Latest Posts
              </h3>
              <div className="hidden sm:block text-sm text-gray-400">
                New posts coming weekly.
              </div>
            </div>

            <div className={latestGridClass}>
              {rest.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-orbitron text-white">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.dateLabel} • {post.readingTime}
                    </span>
                  </div>

                  <div className="font-orbitron text-xl text-white mb-2">
                    {post.title}
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-4 font-orbitron text-sm text-[#FF3B3B]">
                    Read post →
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                  boxShadow: "0 0 26px rgba(255,59,59,0.35)",
                }}
              >
                Ask About Your Event Date
              </Link>
            </div>

            <p className="text-center text-gray-500 text-xs mt-8">
              Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 •
              Insured operations
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
