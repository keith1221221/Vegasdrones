import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/las-vegas-drone-light-shows`;
const MEDIA = "/shows/drone-light-shows";

export const metadata: Metadata = {
  title: "Las Vegas Drone Light Shows | Custom Shows & Event Planning",
  description: "See real drone show footage and behind-the-scenes photos from Vegas Drones. Learn about custom formations, venue planning, production, and pricing starting at $6,000.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Las Vegas Drone Light Shows | Vegas Drones",
    description: "From the launch grid to your message in the sky: explore custom drone shows and how to plan one for your event.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    images: [{ url: `${SITE_URL}${MEDIA}/butcher-audience.jpg`, width: 1920, height: 1280, alt: "Guests filming the Billy Butcher drone formation during The Boys show" }],
  },
};

const faqs = [
  { question: "How much does a drone light show cost?", answer: "Shows start at $6,000. Your final quote depends on drone count, creative complexity, show length, event date, and venue requirements. There are no travel fees for Las Vegas shows." },
  { question: "How many drones does my show need?", answer: "The right count depends on the detail in your designs, the scale of the display, and the viewing distance. Simple icons and lettering need a different approach from detailed portraits. Share your ideas and venue so we can recommend a suitable scope." },
  { question: "Can you create our logo, a name, or a custom animation?", answer: "Yes. We design custom lettering, logos, icons, themed scenes, and animated sequences. We review the artwork and adapt it to a drone formation that reads clearly from the audience’s viewing area." },
  { question: "Can a drone show work at any venue?", answer: "Every site needs a review. Airspace, available launch and landing space, audience separation, obstacles, and viewing angles all affect feasibility. Send the venue address before committing to a show location." },
  { question: "What happens if the weather changes?", answer: "Weather can affect whether a show can fly safely. We discuss weather considerations and contingency arrangements during planning, and the operations team assesses conditions before flight." },
  { question: "When should I start planning?", answer: "Contact us as soon as you have a proposed date and venue. Creative development, site review, coordination, and any required approvals need time. We’ll review your timeline before confirming availability and scope." },
];

function QuoteButton() {
  return <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#FF3B3B] via-white to-[#FF6A6A] px-7 py-4 font-semibold text-black transition hover:brightness-110">Check My Date &amp; Get Pricing</Link>;
}

function Photo({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return <figure><Image src={`${MEDIA}/${file}`} alt={alt} width={1920} height={1280} sizes="(max-width: 767px) 100vw, 50vw" className="h-auto w-full rounded-2xl" /><figcaption className="mt-3 text-sm leading-6 text-gray-400">{caption}</figcaption></figure>;
}

export default function DroneLightShowsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Drone Light Shows", item: PAGE_URL }] },
    ],
  };
  return (
    <main className="bg-black text-white font-poppins">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6A6A]">Custom aerial entertainment · Las Vegas</p>
          <h1 className="mt-5 font-orbitron text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">Las Vegas <span className="text-[#FF6A6A]">Drone Light Shows</span></h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">Your logo. Your story. Your moment in the sky. We create custom drone shows for conventions, resorts, festivals, celebrations, and brand activations.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row"><QuoteButton /><Link href="#how-it-works" className="inline-flex min-h-12 items-center px-5 font-semibold underline underline-offset-4">See how a show comes together ↓</Link></div>
          <p className="mt-5 text-sm text-gray-300">No travel fees for Las Vegas shows. We actually live here.</p>
        </div>
        <figure className="mt-10 sm:mt-14">
          <Image src={`${MEDIA}/butcher-audience.jpg`} alt="Guests filming a Billy Butcher drone portrait and One Last Go lettering during The Boys production" width={1920} height={1280} priority sizes="(max-width: 1200px) 100vw, 1152px" className="h-auto w-full rounded-2xl" />
          <figcaption className="mt-3 text-sm text-gray-400">A custom character formation from The Boys production, captured with guests filming the moment.</figcaption>
        </figure>
      </header>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <section id="how-it-works" className="scroll-mt-28 grid items-center gap-10 py-12 md:grid-cols-2 sm:py-16">
          <div><h2 className="font-orbitron text-2xl font-bold sm:text-3xl">What is a drone light show?</h2><p className="mt-5 leading-8 text-gray-300">A drone light show uses a fleet of aircraft fitted with lights to create coordinated images and movement in the sky. Each drone becomes a point of light in a larger formation. Positions, colors, and transitions work together to turn those points into lettering, logos, shapes, and animated scenes.</p><p className="mt-4 leading-8 text-gray-300">The experience is designed around your audience’s viewing area. A recognizable logo, a short message, or a sequence of themed scenes can tell a story that fits your event.</p></div>
          <Photo file="oi-lettering.jpg" alt="Drones spelling Oi, Listen Up in bright lettering above the mountains" caption="Custom lettering from The Boys show: individual lights combine into a readable message." />
        </section>

        <section className="py-12 sm:py-16">
          <h2 className="font-orbitron text-2xl font-bold sm:text-3xl">From an idea to a coordinated flight</h2>
          <p className="mt-5 max-w-3xl leading-8 text-gray-300">The visible show is the result of creative design and practical site planning. Here’s how we work through a production with you.</p>
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Start with the event", "We discuss your date, location, audience, budget, and the message you want people to remember. A venue review helps establish what is feasible before the creative scope is confirmed."],
              ["02", "Shape the story", "We develop the visual direction around your branding or theme. Drone count, viewing distance, and scene complexity help determine which designs will read clearly in the sky."],
              ["03", "Prepare and produce", "We coordinate the production plan, site logistics, and applicable flight requirements. On site, the crew prepares the fleet, checks conditions, and manages the launch and landing area."],
            ].map(([number, title, text]) => <div key={number} className="border-t border-white/20 pt-6"><p className="text-sm text-[#FF6A6A]">{number}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-gray-300">{text}</p></div>)}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Photo file="crew-preparation.jpg" alt="Crew members wearing headsets preparing drones arranged in rows before The Boys show" caption="Behind the scenes: the crew prepares the fleet before the audience sees the aerial display." />
            <Photo file="launch-grid.jpg" alt="A large grid of green-lit drones with a crew member holding a light wand beside the launch area" caption="The launch grid is part of the production site and needs space separate from the audience." />
          </div>
          <figure className="mt-10"><video controls playsInline preload="none" poster={`${MEDIA}/the-boys-launch-poster.jpg`} className="aspect-video w-full rounded-2xl bg-black" aria-label="The Boys drone show launch grid footage"><source src={`${MEDIA}/the-boys-launch.mp4`} type="video/mp4" />Your browser cannot play this video. <a href={`${MEDIA}/the-boys-launch.mp4`}>Watch the launch grid clip</a>.</video><figcaption className="mt-3 text-sm leading-6 text-gray-400">Watch the illuminated launch grid from The Boys production before the aerial formations.</figcaption></figure>
          <Link href="/blog/amazon-prime-the-boys-drone-show" className="mt-6 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Explore The Boys show story →</Link>
        </section>

        <section className="grid items-center gap-10 py-12 md:grid-cols-[1.3fr_0.7fr] sm:py-16">
          <div><h2 className="font-orbitron text-2xl font-bold sm:text-3xl">What can we create in the sky?</h2><p className="mt-5 leading-8 text-gray-300">Think beyond a single logo. A show can move through brand colors, recognizable icons, names, dates, characters, and a closing message. The goal is a sequence that feels connected to your event.</p><p className="mt-4 leading-8 text-gray-300">More drones give us more points to work with, but the right design matters just as much. We help match the level of detail to the fleet and viewing area rather than treating every image as equally suitable.</p><p className="mt-4 leading-8 text-gray-300">This gingerbread clip shows how a simple seasonal character can become an animated moment for a holiday audience.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3"><Link href="/conventions-trade-shows" className="underline underline-offset-4">Convention shows →</Link><Link href="/holidays" className="underline underline-offset-4">Holiday shows →</Link><Link href="/events" className="underline underline-offset-4">Event shows →</Link></div></div>
          <figure className="mx-auto w-full max-w-xs"><video controls playsInline preload="none" poster={`${MEDIA}/gingerbread-poster.jpg`} className="aspect-[9/16] w-full rounded-2xl bg-black object-contain" aria-label="Animated gingerbread drone formation at a holiday event"><source src={`${MEDIA}/gingerbread.mp4`} type="video/mp4" />Your browser cannot play this video. <a href={`${MEDIA}/gingerbread.mp4`}>Watch the gingerbread clip</a>.</video><figcaption className="mt-3 text-sm leading-6 text-gray-400">A gingerbread formation brings a holiday theme to life.</figcaption></figure>
        </section>

        <section className="grid gap-10 border-y border-white/15 py-12 md:grid-cols-2 sm:py-16">
          <div><h2 className="font-orbitron text-2xl font-bold sm:text-3xl">What does your venue need?</h2><p className="mt-5 leading-8 text-gray-300">Start with an address and a proposed viewing area. We assess the airspace, launch and landing space, obstacles, audience separation, and sightlines. A venue that looks ideal in photos still needs a site review.</p><p className="mt-4 leading-8 text-gray-300">Weather and operating conditions also affect the production. We discuss coordination and contingency arrangements while planning your event.</p><Link href="/contact" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Ask us to review your venue →</Link></div>
          <div><h2 className="font-orbitron text-2xl font-bold sm:text-3xl">How much does a show cost?</h2><p className="mt-5 text-3xl font-bold text-[#FF6A6A]">Starting at $6,000</p><p className="mt-4 leading-8 text-gray-300">Your quote is tailored to the drone count, creative scope, show length, date, and venue requirements. The large production shown here illustrates what is possible; it is not an example of the starting-price package.</p><p className="mt-4 leading-8 text-gray-300">No travel fees for Las Vegas shows. Send your event details and we’ll recommend a scope that fits your goals.</p><Link href="/las-vegas-drone-show-cost" className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Explore drone show pricing →</Link></div>
        </section>

        <section id="faq" className="py-12 sm:py-16"><h2 className="font-orbitron text-2xl font-bold sm:text-3xl">Planning questions, answered</h2><div className="mt-8">{faqs.map(({question,answer}) => <details key={question} className="border-b border-white/15 py-5"><summary className="cursor-pointer pr-4 text-lg font-semibold">{question}</summary><p className="mt-4 max-w-3xl leading-8 text-gray-300">{answer}</p></details>)}</div></section>
        <section className="pt-8 text-center"><h2 className="font-orbitron text-2xl font-bold sm:text-4xl">Let’s build a show around your event.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">Share your date, venue, and creative ideas. We’ll help you understand the options and the next steps.</p><div className="mt-7"><QuoteButton /></div><Link href="/see-our-shows" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">See more completed shows →</Link></section>
      </div>
    </main>
  );
}
