import Link from "next/link";

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
  openGraph: {
    title: "Las Vegas Wedding Drone Light Shows | Vegas Drones",
    description:
      "Custom wedding drone light shows in Las Vegas — names, date, and a stunning finale your guests will never forget.",
    url: "https://www.vegasdrones.com/weddings",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
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

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16 px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4DFFFF] mb-6 font-orbitron">
          Wedding Drone Light Shows
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Give your guests a moment they’ll talk about forever. Our wedding drone
          light shows create a stunning, romantic finale — featuring your names,
          your wedding date, and a custom signature sequence designed just for you.
          It’s elegant, cinematic, and 100% unforgettable.
        </p>

        {/* Image */}
        <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl mb-16">
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


        {/* Section 1 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            A Signature Wedding Moment
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether it’s a first dance under the stars or a grand send-off,
            a drone show delivers a breathtaking “finale moment” without smoke,
            noise, or fallout. We can create hearts, rings, custom icons, and
            animations that match your style — classic, modern, playful, or bold.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Your names in the sky</li>
            <li>Your wedding date</li>
            <li>One specialty custom sequence (your choice)</li>
            <li>Professional show design + on-site execution</li>
            <li>FAA-certified operations with full safety protocols</li>
            <li>Coordination with your venue and timeline</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Popular Wedding Add-Ons
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Custom monogram / initials animation</li>
            <li>Multiple “scenes” (love story sequence)</li>
            <li>Venue-specific skyline or landmark moments</li>
            <li>Extra custom elements (more names/icons)</li>
            <li>Holiday theme overlays (NYE, Christmas weddings, etc.)</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12 text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4DFFFF] mb-3 font-orbitron text-center">
            Simple Booking Process
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’ll confirm venue feasibility, timing, and design goals — then we
            build your custom show and handle the logistics. If you already have
            a date and venue, we can move quickly to lock everything in.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#4DFFFF] text-black font-semibold text-lg rounded-full hover:bg-white transition font-orbitron"
          >
            Request Wedding Pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
