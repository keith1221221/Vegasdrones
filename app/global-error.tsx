"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <main className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <p className="font-orbitron text-sm uppercase tracking-[0.35em] text-red-500">
              Vegas Drones
            </p>
            <h1 className="mt-4 font-orbitron text-4xl font-bold sm:text-5xl">
              Global app error
            </h1>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Next.js could not recover the app shell locally.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 rounded-full bg-red-500 px-6 py-3 font-semibold text-black transition hover:bg-red-400"
            >
              Reload app
            </button>
            {error?.digest ? (
              <p className="mt-4 text-sm text-white/50">Digest: {error.digest}</p>
            ) : null}
          </div>
        </main>
      </body>
    </html>
  );
}
