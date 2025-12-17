import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Drone Light Shows & Aerial Advertising",
  description:
    "Vegas Drones creates spectacular custom drone light shows in Las Vegas for weddings, conventions, corporate events, festivals, and brand activations.",
  keywords: [
    "Las Vegas drone light shows",
    "drone light show Las Vegas",
    "Vegas drone shows",
    "wedding drone light show",
    "corporate drone show",
    "convention drone show",
    "drone advertising Las Vegas",
    "aerial light show Vegas",
  ],
  alternates: {
    canonical: "https://www.vegasdrones.com/",
  },
  openGraph: {
    title: "Las Vegas Drone Light Shows & Aerial Advertising | Vegas Drones",
    description:
      "Book custom 100–500+ drone light shows for weddings, conventions, festivals, and brand activations across Las Vegas.",
    url: "https://www.vegasdrones.com/",
    siteName: "Vegas Drones",
    images: [
      {
        url: "/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones aerial light show over Las Vegas",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full pt-24">
        <div className="relative w-full">
          <img
            src="/osmosignalt1.png"
            alt="Las Vegas drone light show over the Strip"
            className="w-full h-auto max-h-[90vh] object-cover"
          />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4">
          <h1
  className="font-orbitron whitespace-nowrap text-white font-bold
  text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center
  drop-shadow-[0_0_12px_rgba(0,255,255,0.55)]"
>
  Las Vegas Drone Shows
</h1>

          </div>
        </div>
      </section>
{/* ================= WAVE DIVIDER ================= */}

<h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold
  text-center text-white mt-6 mb-4
  drop-shadow-[0_0_10px_rgba(0,255,255,0.35)]">
  Drone Light Shows for Weddings, Events & Brand Activations
</h2>


      
      {/* ================= AI CHATBOT CTA ================= */}
            {/* ================= AI ASSISTANT ================= */}
            <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white
            drop-shadow-[0_0_12px_rgba(0,255,255,0.55)]">
            Meet the Vegas Drones AI Assistant
          </h3>

          <p className="text-gray-300 text-lg mb-12">
            Instantly get pricing, availability, drone counts, and custom show ideas for
            your Las Vegas event.
          </p>

          {/* Alien Head */}
          <div className="flex justify-center mb-10">
            <Link href="/chatbot" className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 bg-[#4DFFFF] opacity-30 rounded-full blur-3xl group-hover:opacity-50 transition" />
              <div className="absolute inset-0 scale-125 bg-[#4DFFFF] opacity-20 rounded-full blur-2xl" />

              {/* Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[#4DFFFF] shadow-[0_0_25px_rgba(77,255,255,0.7)] overflow-hidden">
                <img
                  src="/alienhead1.png"
                  alt="Vegas Drones AI Assistant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-[#4DFFFF]/50 animate-spin-slow" />
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/chatbot"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4DFFFF] to-green-400
              text-black font-bold py-4 px-8 rounded-full transition-all duration-300
              shadow-lg hover:shadow-[0_0_25px_rgba(77,255,255,0.6)]
              transform hover:scale-105 font-orbitron"
          >
            <i className="fas fa-robot text-xl" />
            Chat with AI Assistant
          </Link>
        </div>
      </section>

{/* ================= INTERNAL LINKING (SEO CORE) ================= */}
<section className="px-4 sm:px-6 py-10">
        <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
          Vegas Drones specializes in{" "}
          <Link href="/drone-light-shows" className="text-[#4DFFFF] hover:underline">
            Las Vegas drone light shows
          </Link>{" "}
          for weddings, corporate events, conventions, festivals, and high-impact brand
          activations. Explore our{" "}
          <Link href="/weddings" className="text-[#4DFFFF] hover:underline">
            wedding drone light shows
          </Link>{" "}
          for unforgettable celebrations, discover how our{" "}
          <Link href="/drone-advertising" className="text-[#4DFFFF] hover:underline">
            drone advertising
          </Link>{" "}
          elevates brands, or learn more about our{" "}
          <Link href="/conventions-trade-shows" className="text-[#4DFFFF] hover:underline">
            convention & trade show drone shows
          </Link>{" "}
          for CES, IMEX, SHOT Show, and major Las Vegas expos.
        </p>
      </section>
      

      {/* ================= FEATURES ================= */}
      <section className="py-16 px-4 sm:px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-14">
          Why Vegas Drones?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Feature icon="leaf" title="Eco-Friendly">
            Quiet, smokeless drone displays with zero fallout.
          </Feature>
          <Feature icon="brain" title="Fully Custom Shows">
            Logos, names, dates, icons, and animated storytelling.
          </Feature>
          <Feature icon="star" title="High-Impact Visuals">
            Built for crowd reaction and social sharing.
          </Feature>
          <Feature icon="city" title="Vegas-Based Crew">
            100% local operators who know Las Vegas airspace.
          </Feature>
        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16">
          Our Drone Light Shows
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {[
            "yEAZil9cE2U",
            "XvxnQlQjztE",
            "kpqUduaDwK8",
          ].map((id) => (
            <div key={id} className="aspect-video relative">
              <iframe
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title="Vegas Drones light show"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
          Ready to Light Up the Sky?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Contact us today to plan your custom drone light show in Las Vegas.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-[#4DFFFF] text-black font-bold rounded-full hover:bg-white transition font-orbitron"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}

/* ================= FEATURE CARD ================= */
function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-8 bg-gray-900 rounded-3xl border border-gray-800 shadow-lg">
      <i className={`fas fa-${icon} text-4xl text-[#4DFFFF] mb-4`} />
      <h3 className="font-orbitron text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  );
}
