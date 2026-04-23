"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="font-orbitron text-sm uppercase tracking-[0.35em] text-red-500">
          Vegas Drones
        </p>
        <h1 className="mt-4 font-orbitron text-4xl font-bold sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-white/75 sm:text-lg">
          The page hit a local render error. Retry once, and if it repeats restart the dev server.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-red-500 px-6 py-3 font-semibold text-black transition hover:bg-red-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
