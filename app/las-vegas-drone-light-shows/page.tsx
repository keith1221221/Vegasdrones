import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Drone Light Shows | Vegas Drones",
  description:
    "Premium drone light shows in Las Vegas for weddings, corporate events, festivals, and brand activations. Fully custom designs, FAA-compliant operations, and unforgettable aerial entertainment.",
  keywords: [
    "Las Vegas drone light show",
    "drone light show Las Vegas",
    "wedding drone light show",
    "corporate drone show",
    "festival drone show",
    "brand activation drone show",
    "custom drone show",
    "Vegas Drones",
  ],
  alternates: {
    canonical: "https://www.vegasdrones.com/drone-light-shows",
  },
  openGraph: {
    title: "Las Vegas Drone Light Shows | Vegas Drones",
    description:
      "Unforgettable drone light shows in Las Vegas — custom designs for weddings, corporate events, festivals, and brand activations.",
    url: "https://www.vegasdrones.com/drone-light-shows",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Drone Light Show",
      },
    ],
  },
};

export default function DroneLightShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-12 sm:pt-16 pb-16 px-6 font-poppins">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4DFFFF] mb-6 font-orbitron">
          Drone Light Shows in Las Vegas
        </h1>
        <div className="w-full flex justify-center mb-12">
          <img
            src="/flag_400.png"
            alt="Drone light show in Las Vegas"
            className="w-full max-w-3xl rounded-xl shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Turn your event into a true Las Vegas spectacle. Our drone light shows
          deliver breathtaking aerial animations, logos, and custom storytelling —
          synchronized, scalable, and designed to create the kind of “wow moment”
          people record, post, and remember.
        </p>

       
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            High-Impact Entertainment, Fully Customized
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Every show is designed around your event and your audience. From
            elegant wedding moments to high-energy brand activations, we create
            custom formations and animations — names, dates, logos, icons, and
            full sequences — all choreographed into a polished aerial performance.
          </p>
        </section>

        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Perfect For
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Weddings & engagements (names, date, custom finale)</li>
            <li>Corporate events & conferences (logos, messaging, product reveals)</li>
            <li>Festivals, grand openings, and community celebrations</li>
            <li>Sports events and halftime-style entertainment</li>
            <li>Hotel, casino, and nightlife brand activations</li>
            <li>Holiday shows (4th of July, Halloween, Christmas, New Year’s)</li>
          </ul>
        </section>

        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            What You Get With Vegas Drones
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Custom show design from concept → final animation</li>
            <li>FAA Part 107 certified operations with full safety protocols</li>
            <li>Venue coordination, site planning, and operational logistics</li>
            <li>Show scaling options — from intimate displays to massive productions</li>
            <li>On-site professional crew, launch/grid setup, and show execution</li>
            <li>A show built for social sharing (clear shapes, readable text, strong pacing)</li>
          </ul>
        </section>

        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Scalable Shows: 50 to 1000+ Drones
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Need a clean logo moment? A big reveal? A multi-scene story? We can
            scale your drone count to match your venue, budget, and visual goals.
            Larger fleets unlock more detail, smoother motion, and bigger
            “stadium-level” visuals — while smaller shows can still deliver a
            high-end, premium experience.
          </p>
        </section>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#4DFFFF] text-black font-semibold text-lg rounded-full hover:bg-white transition font-orbitron"
          >
            Request Drone Show Pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
