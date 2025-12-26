import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Las Vegas Wedding Drone Light Shows | Vegas Drones",
  description:
    "Make your wedding unforgettable with a custom drone light show in Las Vegas. Names, wedding date, and a signature finale — fully customized and FAA-compliant.",
  keywords: [
    "Las Vegas wedding drone show",
    "wedding drone light show",
    "drone show wedding Las Vegas",
    "wedding entertainment Las Vegas",
    "custom drone light show",
    "Vegas Drones wedding",
  ],
  alternates: {
    canonical: "https://www.vegasdrones.com/weddings",
  },
  openGraph: {
    title: "Las Vegas Wedding Drone Light Shows | Vegas Drones",
    description:
      "Custom wedding drone light shows in Las Vegas — names, date, and a stunning finale your guests will never forget.",
    url: "https://www.vegasdrones.com/weddings",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones Wedding Drone Light Show",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Brand reds
const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function WeddingsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          {/* PAGE TITLE */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-orbitron">
            <span className="text-white">LAS VEGAS WEDDING </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED})`,
              }}
            >
              DRONE SHOWS
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Romantic, personalized wedding finales in Las Vegas — names, date, and
            a signature sequence designed for the moment everyone remembers.
          </p>

          {/* WEDDING VIDEO HERO */}
          <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl mb-6">
            {/* Blurred background video */}
            <video
              src="/weddingclip2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-50"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Foreground portrait video */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <video
                src="/weddingclip2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full max-h-[65vh] rounded-xl shadow-2xl object-contain"
              />
            </div>
          </div>

          {/* VIDEO SUPPORTING COPY (SEO) */}
          <p className="text-gray-300 leading-relaxed mb-14 max-w-3xl mx-auto">
            Watch a real <strong>Las Vegas wedding drone light show</strong> moment —
            a romantic sky finale designed for guest reactions, photo/video capture,
            and a clean, smoke-free celebration.
          </p>

          {/* QUICK INTERNAL LINKS (SEO + UX) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/drone-light-shows"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition font-orbitron"
            >
              How drone shows work
            </Link>
            <Link
              href="/see-our-shows"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition font-orbitron"
            >
              See more shows
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition font-orbitron"
            >
              FAQ
            </Link>
          </div>

          {/* SECTION 1 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Las Vegas Wedding Drone Light Shows
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Whether it’s a first dance under the stars or a grand send-off, a drone
              show delivers a breathtaking finale without smoke, noise, or fallout.
              We create hearts, rings, custom icons, and animations tailored to your
              style.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              What’s Included
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Your names in the sky</li>
              <li>Your wedding date</li>
              <li>One specialty custom sequence</li>
              <li>Professional show design + on-site execution</li>
              <li>FAA-certified operations with full safety protocols</li>
              <li>Venue coordination and timeline planning</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-3 font-orbitron text-center">
              Popular Wedding Add-Ons
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Custom monogram / initials animation</li>
              <li>Multi-scene love story sequence</li>
              <li>Venue-specific skyline or landmark moments</li>
              <li>Extra custom elements</li>
              <li>Holiday overlays (NYE, Christmas weddings)</li>
            </ul>
          </section>

          {/* OPTIONAL MINI-FAQ (HIGH ROI FOR SEO) */}
          <section className="mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#FF3B3B] mb-6 font-orbitron text-center">
              Wedding Drone Show FAQ
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                  How much does a wedding drone show cost in Las Vegas?
                </h3>
                <p className="leading-relaxed">
                  Pricing depends on drone count, show length, location logistics, and
                  creative complexity. Share your date and venue area and we’ll recommend
                  the right drone count and provide a clear quote.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                  Can you put our names and wedding date in the sky?
                </h3>
                <p className="leading-relaxed">
                  Yes — names and date are the most popular wedding elements. We can also
                  create hearts, rings, monograms, and custom icons that match your theme.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                  Is it safe and legal to fly a wedding drone show in Las Vegas?
                </h3>
                <p className="leading-relaxed">
                  Yes, when handled by a certified operator following FAA rules and venue
                  requirements. We operate under FAA Part 107 and coordinate planning and
                  safety for your event.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-black font-semibold text-lg rounded-full transition font-orbitron hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                boxShadow: "0 0 25px rgba(255,59,59,0.35)",
              }}
            >
              Request Wedding Pricing
            </Link>

            <p className="text-gray-400 mt-5 text-sm">
              Operated by Skylight Ads LLC • Las Vegas-based • FAA Part 107 • Insured
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
