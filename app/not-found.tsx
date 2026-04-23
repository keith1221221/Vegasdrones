import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="font-orbitron text-sm uppercase tracking-[0.35em] text-red-500">
          Vegas Drones
        </p>
        <h1 className="mt-4 font-orbitron text-4xl font-bold sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/75 sm:text-lg">
          The page you requested is not available. Return to the homepage or open the contact page.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-red-500 px-6 py-3 font-semibold text-black transition hover:bg-red-400"
          >
            Back home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
