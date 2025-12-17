import Link from "next/link";

export const metadata = {
  title: "Las Vegas Drone Advertising | Aerial Brand Activations | Vegas Drones",
  description:
    "Drone advertising in Las Vegas: branded aerial light shows, sky logos, and high-impact activations for product launches, casinos, nightlife, and major events. Fully custom, FAA-compliant operations.",
  keywords: [
    "drone advertising Las Vegas",
    "Las Vegas drone advertising",
    "aerial advertising",
    "sky logo drones",
    "drone brand activation",
    "event marketing Las Vegas",
    "drone light show advertising",
    "Vegas Drones advertising",
  ],
  openGraph: {
    title: "Las Vegas Drone Advertising | Vegas Drones",
    description:
      "High-impact drone advertising and brand activations in Las Vegas — logos, messaging, and unforgettable aerial moments.",
    url: "https://www.vegasdrones.com/drone-advertising",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Drone Advertising",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function DroneAdvertisingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4DFFFF] mb-6 font-orbitron">
          Drone Advertising & Brand Activations
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Want attention that can’t be scrolled past? Drone advertising turns the
          night sky into a massive branded canvas — perfect for product launches,
          casino/nightlife promotions, grand openings, and outdoor brand activations.
          We create custom aerial logos, icons, and messages designed to drive
          crowd engagement and social sharing.
        </p>

        {/* Image */}
        <div className="w-full flex justify-center mb-12">
          <img
            src="/lions.png"
            alt="Drone advertising activation in Las Vegas"
            className="w-full max-w-3xl rounded-xl shadow-lg"
          />
        </div>

        {/* Section 1 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            A Billboard in the Sky
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Drone advertising delivers a jaw-dropping visual moment that people
            stop for — and record. We design sky-ready logos, simple animated
            sequences, and readable messaging that stays crisp at distance while
            still looking premium on camera.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Best Use Cases
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Product launches & big reveals</li>
            <li>Casino, hotel, and nightlife promotions</li>
            <li>Grand openings & ribbon-cutting events</li>
            <li>Sports & arena-adjacent activations</li>
            <li>Trade show after-hours events & sponsor moments</li>
            <li>Festival sponsorships & headline moments</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Branded Content That Performs on Social
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We build sequences with marketing in mind:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Clean logo silhouettes and readable text</li>
            <li>Strong pacing so the “hero moment” hits on camera</li>
            <li>Optional QR-style callouts (venue dependent) and hashtag prompts</li>
            <li>Multi-scene sequences for storytelling and retention</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Full-Service + FAA Compliance
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We handle everything: site planning, safety protocols, airspace/FAA
            coordination as required, and professional on-site execution. Our team
            is built for live events — meaning your activation runs smoothly,
            safely, and on schedule.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#4DFFFF] text-black font-semibold text-lg rounded-full hover:bg-white transition font-orbitron"
          >
            Get an Advertising Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
