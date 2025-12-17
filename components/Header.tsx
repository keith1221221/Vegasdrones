"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/las-vegas-drone-light-shows", label: "Drone Light Shows" },
    { href: "/drone-advertising", label: "Drone Advertising" },
    { href: "/weddings", label: "Weddings" },
    { href: "/conventions-trade-shows", label: "Conventions" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return [
      "font-orbitron text-sm sm:text-base transition",
      isActive
        ? "text-white border-b-2 border-[#4DFFFF] pb-1"
        : "text-[#4DFFFF] hover:text-white",
    ].join(" ");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="flex items-center">
            <span className="font-orbitron text-[#4DFFFF] text-xl sm:text-2xl font-bold">
              VEGAS DRONES
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-[#4DFFFF] text-3xl leading-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden flex flex-col">
          <div className="h-16" />

          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "font-orbitron text-2xl transition",
                  (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href))
                    ? "text-white"
                    : "text-[#4DFFFF] hover:text-white",
                ].join(" ")}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mb-6 text-center font-orbitron text-sm text-gray-400"
          >
            Tap to close
          </button>
        </div>
      )}
    </>
  );
}
