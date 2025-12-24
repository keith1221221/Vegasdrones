import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export const metadata: Metadata = {
  title: "Blog | Vegas Drones",
  description:
    "Insights, guides, and venue-ready planning tips for drone light shows in Las Vegas — safety, operations, pricing, and event ideas.",
  alternates: {
    canonical: "https://www.vegasdrones.com/blog",
  },
  openGraph: {
    title: "Blog | Vegas Drones",
    description:
      "Insights and guides for venues, planners, and brands exploring drone light shows in Las Vegas.",
    url: "https://www.vegasdrones.com/blog",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
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
};

const posts: Post[] = [
  {
    title: "Why Venues Are Choosing Drone Light Shows Over Fireworks",
    description:
      "Safety, faster setup, smaller safety zones, cleaner operations, and sponsor-ready branding — why drone shows are the upgrade venues want.",
    href: "/blog/why-venues-are-choosing-drone-light-shows",
    dateLabel: "December 2025",
    tag: "Venues",
    readingTime: "6 min read",
  },
  // Add more posts here as you publish:
  // {
  //   title: "How Much Does a Drone Light Show Cost in Las Vegas?",
  //   description: "A practical pricing guide for venues, planners, and brands.",
  //   href: "/blog/drone-light-show-cost-las-vegas",
  //   dateLabel: "January 2026",
  //   tag: "Pricing",
  //   readingTime: "7 min read",
  // },
];

export default function BlogIndexPage() {
  const featured = posts[0];

  return (
    <>
      <Header />

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
                operations, branding, scheduling, and planning tips for Las Vegas events.
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
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

                    <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-3">
                      {featured.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {featured.description}
                    </p>

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
                  </div>

                  {/* Optional right-side block */}
                  <div className="w-full lg:w-[22rem] rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="font-orbitron text-sm text-[#FF3B3B] mb-2">
                      What you’ll find here
                    </div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Venue safety + operations</li>
                      <li>• Holiday & city event planning</li>
                      <li>• Sponsor-ready show ideas</li>
                      <li>• Simple pricing guidance</li>
                      <li>• Tips for faster approvals</li>
                    </ul>
                  </div>
                </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
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
              Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured operations
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
