import Link from "next/link";

export const metadata = {
  title: "Drone Shows for Conventions & Trade Shows | Vegas Drones",
  description:
    "Turn your Las Vegas convention or trade show into a can't-miss event with a custom drone light show. Perfect for outdoor receptions, product launches, and brand activations.",
  keywords: [
    "Las Vegas convention entertainment",
    "trade show drone show",
    "convention center drone light show",
    "Las Vegas trade show marketing",
    "drone light show for events",
    "Vegas Drones convention",
  ],
  openGraph: {
    title: "Drone Light Shows for Conventions & Trade Shows | Vegas Drones",
    description:
      "Attract crowds, impress sponsors, and own the skyline with custom drone light shows for your Las Vegas convention or trade show.",
    url: "https://www.vegasdrones.com/conventions-trade-shows",
    siteName: "Vegas Drones",
    images: [
      {
        url: "https://www.vegasdrones.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drone light show above a Las Vegas convention event",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vegasdrones.com/conventions-trade-shows",
  },
};

export default function ConventionsTradeShowsPage() {
  return (
    <main className="page-wrapper">
      <section className="hero-section">
        <div className="hero-inner">
          <p className="eyebrow">Las Vegas Convention & Trade Show Entertainment</p>
          <h1>Drone Light Shows for Conventions & Trade Shows</h1>
          <p className="hero-subtitle">
            Draw attendees in from across the Strip, wow sponsors, and give your
            event a signature moment with a fully customized drone light show
            designed for conventions and trade shows in Las Vegas.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">
              Check Date & Availability
            </Link>
            <Link href="/chatbot" className="btn btn-secondary">
              Chat with Our AI Assistant
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner two-column">
          <div>
            <h2>Own the Skyline Outside Your Convention</h2>
            <p>
              Vegas is packed with events every night. A drone light show cuts
              through the noise — literally — by filling the sky with your logo,
              product imagery, and show branding in a way attendees can&apos;t
              miss. Whether you&apos;re hosting a welcome reception, closing
              party, or sponsor activation, a drone show turns your event into
              the one everyone talks about.
            </p>
            <p>
              Vegas Drones is a local, FAA Part&nbsp;107 certified provider
              specializing in convention and trade show work across the Las Vegas
              Strip, Downtown, and greater Clark County.
            </p>
          </div>

          <div>
            <h3>Perfect For:</h3>
            <ul className="bullet-list">
              <li>Opening or closing night receptions</li>
              <li>Outdoor sponsor parties and VIP events</li>
              <li>Product launches and big announcements</li>
              <li>Brand activations tied to booths or exhibits</li>
              <li>Conference themes, mascots, and show logos in the sky</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>How Drone Shows Fit Into Your Convention Schedule</h2>
          <p>
            Most convention drone shows are 8–12 minutes and fit cleanly into an
            evening timeline. We coordinate with your production team, venue,
            and security to handle airspace, FAA requirements, and safety
            planning so you can focus on the experience.
          </p>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Pre-Show Attraction</h3>
              <p>
                Use a short 3–5 minute show to pull attendees outside before a
                headline performance or major announcement.
              </p>
            </article>

            <article className="info-card">
              <h3>Signature Evening Moment</h3>
              <p>
                Make your sponsor reception or party unforgettable with a
                feature drone show synced to music and your brand visuals.
              </p>
            </article>

            <article className="info-card">
              <h3>Content & Social Media Gold</h3>
              <p>
                Attendees film the show from every angle, giving you a wave of
                organic social posts featuring your logo and event hashtag.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner two-column">
          <div>
            <h2>What We Can Highlight in the Sky</h2>
            <ul className="bullet-list">
              <li>Event logo, sponsor logos, and word marks</li>
              <li>Product silhouettes, icons, and key features</li>
              <li>Event or booth hashtags and social handles</li>
              <li>3D-style transitions and animated sequences</li>
              <li>Custom formations themed to your industry</li>
            </ul>
          </div>

          <div>
            <h3>Typical Convention Packages</h3>
            <ul className="bullet-list">
              <li>100–200 drone shows for mid-sized events</li>
              <li>250–400+ drone shows for large conventions</li>
              <li>
                Custom storyboard and formations tailored to your sponsor or
                brand
              </li>
              <li>
                Site planning, FAA notifications/waivers, and safety perimeter
                design handled for you
              </li>
            </ul>
            <p className="small-note">
              Exact pricing depends on drone count, location, timeline, and
              creative scope. Our team can provide a fast estimate once we know
              your dates and venue.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>Why Convention Planners Choose Vegas Drones</h2>
          <ul className="bullet-list">
            <li>Las Vegas–based team familiar with Strip venues and logistics</li>
            <li>FAA Part 107 certified operators and insured flights</li>
            <li>Experience with sponsor-driven, brand-critical events</li>
            <li>Collaborative design process with clear approvals</li>
            <li>On-site show lead to coordinate with your production team</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-inner">
          <h2>Planning a Convention or Trade Show in Las Vegas?</h2>
          <p>
            Tell us your dates, venue, and rough idea of the event, and we&apos;ll
            recommend drone counts, timing, and a show concept that fits your
            goals and budget.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">
              Request a Convention Drone Show Quote
            </Link>
            <Link href="/chatbot" className="btn btn-secondary">
              Ask the AI Assistant About Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
