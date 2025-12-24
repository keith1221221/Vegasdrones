import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Venues Are Choosing Drone Light Shows Over Fireworks | Vegas Drones",
  description:
    "Event venues are replacing fireworks with drone light shows for better safety, faster setup, smaller safety zones, and easier operations.",
};

export default function WhyVenuesDroneShows() {
  return (
    <>
      <Header />

      <main className="bg-black text-white px-6 py-16 font-poppins">
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-orbitron font-bold text-[#FF3B3B] mb-6">
              Why Venues Are Choosing Drone Light Shows Over Fireworks
            </h1>

            <p className="text-gray-300 text-lg">
              Fireworks have long been the traditional finale for major events — but
              across Las Vegas and the U.S., venues are rapidly shifting toward drone
              light shows. The reason is simple: drone shows deliver the same “wow”
              factor with significantly less risk, faster setup, and far easier
              operations.
            </p>
          </header>

          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                Dramatically Safer for Venues and Guests
              </h2>

              <p className="text-gray-300 mb-6">
                Fireworks rely on explosives, hot debris, and large fallout zones. Drone
                light shows remove those hazards entirely. There are no sparks, no
                embers, no smoke, and no debris falling onto rooftops, landscaping, or
                guest areas.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>No explosives or pyrotechnic materials</li>
                <li>No fire risk to buildings, signage, or vegetation</li>
                <li>No post-event fire watch or cleanup</li>
                <li>Ideal for resorts, casinos, golf clubs, and dense urban venues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                Smaller Safety Zones — Only When Drones Are Airborne
              </h2>

              <p className="text-gray-300 mb-6">
                Fireworks require large exclusion and fallout zones that can shut down
                operations for hours. Drone light shows only require a defined safety
                area while the drones are in the air. Once the show ends and drones
                land, the safety zone disappears immediately.
              </p>

              <p className="text-gray-300">
                That means fewer blocked areas, less disruption to guests, and easier
                coordination with security, parking, and staff.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                Faster Setup, Easier Operations
              </h2>

              <p className="text-gray-300 mb-6">
                Drone shows eliminate long load-ins, explosive handling, and hours of
                post-event cleanup. A venue can host a headline-level finale without
                dedicating an entire day to preparation.
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Shorter setup and breakdown windows</li>
                <li>Minimal impact on daily venue operations</li>
                <li>Lower staffing and security burden</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                Built for Branding, Sponsors, and Social Media
              </h2>

              <p className="text-gray-300 mb-6">
                Fireworks look great — but they can’t display a venue name, logo, or
                message. Drone light shows can. Logos, city names, sponsor callouts,
                dates, and themed animations can all be programmed into a show.
              </p>

              <p className="text-gray-300">
                The result is a finale that’s not only visually impressive, but also
                designed to be filmed, shared, and remembered — creating real marketing
                value for venues and sponsors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                A Modern Alternative That Scales
              </h2>

              <p className="text-gray-300 mb-6">
                Drone light shows scale easily to match the size of the event. From
                smaller private celebrations to city-wide holiday shows with hundreds
                of drones, the experience can be tailored without increasing risk.
              </p>

              <p className="text-gray-300">
                That flexibility is why drone light shows are now being chosen for
                holidays, festivals, corporate events, resorts, and municipal
                celebrations nationwide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-orbitron text-[#FF3B3B] mb-4">
                The Future of Event Entertainment
              </h2>

              <p className="text-gray-300">
                For venues looking to reduce risk, save time, simplify operations, and
                still deliver an unforgettable moment, drone light shows are no longer
                the alternative — they’re the upgrade.
              </p>
            </div>
          </section>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #FF3B3B, white, #FF6A6A)",
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Contact Vegas Drones
            </Link>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center py-3 px-8 rounded-full font-orbitron font-bold border border-white/25 text-white hover:bg-white/10 transition"
            >
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
