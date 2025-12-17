import Link from "next/link";

export const metadata = {
  title: "Las Vegas Convention & Trade Show Drone Shows | Vegas Drones",
  description:
    "Stand out at Las Vegas conventions and trade shows with custom drone shows. Perfect for brand activations, outdoor displays, and high-impact crowd engagement.",
  keywords: [
    "Las Vegas conventions",
    "trade show drone show",
    "convention entertainment Las Vegas",
    "brand activation drone show",
    "Vegas drone advertising",
    "CES drone show",
    "SHOT Show drone display",
    "Las Vegas expo drone light show",
  ],
  openGraph: {
    title: "Las Vegas Convention & Trade Show Drone Shows",
    description:
      "Attract crowds and elevate your brand at Las Vegas conventions with stunning custom drone light shows.",
    url: "https://www.vegasdrones.com/conventions-trade-shows",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Convention Drone Show",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ConventionsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4DFFFF] mb-6 font-orbitron">
          Drone Shows for Conventions & Trade Shows
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Las Vegas hosts more conventions and trade shows than any city on earth—
          and standing out in a sea of exhibitors is a challenge. Our custom drone
          light shows create unforgettable brand moments that draw crowds, generate
          social media buzz, and elevate your presence at outdoor convention venues,
          expo centers, and brand activations.
        </p>

        {/* Image */}
        <div className="w-full flex justify-center mb-12">
          <img
            src="/lions.png"
            alt="Drone show at Las Vegas convention"
            className="w-full max-w-3xl rounded-xl shadow-lg"
          />
        </div>

        {/* Section 1 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            The Ultimate Convention Attention-Grabber
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you're launching a product, hosting a corporate event,
            promoting a booth, or entertaining clients, a drone show provides a
            massive visual impact. We design formations that highlight your brand,
            logo, colors, and messaging. Shows can be scheduled during convention
            evenings to maximize visibility.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Why Drone Shows Are Perfect for Trade Shows
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Draw huge crowds and attention from every direction</li>
            <li>Promote new products with animated sky graphics</li>
            <li>Feature your company logo, name, or tagline in the sky</li>
            <li>Perfect for outdoor exhibitor events or after-hours activations</li>
            <li>Completely customizable to your brand identity</li>
            <li>FAA-certified operators with full safety protocols</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Ideal for Major Las Vegas Conventions
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We’ve created shows for events across Vegas and can tailor performances for:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>CES – Consumer Electronics Show</li>
            <li>SHOT Show</li>
            <li>SEMA</li>
            <li>Magic / Fashion Market</li>
            <li>NAB Show</li>
            <li>Money 20/20</li>
            <li>World of Concrete</li>
            <li>IMEX America</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Custom Branded Drone Shows
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We handle full show design—from concept to FAA compliance. Brand animations,
            logo formations, text effects, and 3D motion graphics can all be integrated
            into your performance. Our drone fleet scales from 50 to 500 drones
            depending on your visual needs.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#4DFFFF] text-black font-semibold text-lg rounded-full hover:bg-white transition font-orbitron"
          >
            Request Convention Pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
