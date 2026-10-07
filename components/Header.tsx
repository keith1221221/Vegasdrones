"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Brand reds (same as page)
  const BRAND_RED = "#FF3B3B";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/see-our-shows", label: "Shows" },
    { href: "/las-vegas-drone-light-shows", label: "Drone Light Shows" },
    { href: "/holidays", label: "Holidays" },
    { href: "/events", label: "Events" },
    { href: "/conventions-trade-shows", label: "Conventions" },
    { href: "/las-vegas-drone-show-cost", label: "Pricing" },
    { href: "/contact", label: "Get a Quote" },
    { href: "/blog", label: "Blog" },
  ];

  const linkClass = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return [
      "font-orbitron text-sm transition",
      isActive
        ? "text-white border-b-2 pb-1"
        : "hover:text-white",
    ].join(" ");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href="/" className="flex items-center">
            <span
              className="font-orbitron text-base sm:text-2xl font-bold"
              style={{ color: BRAND_RED }}
            >
              VEGAS DRONES
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-4">
            {navLinks.map((l) => {
              const isActive =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={linkClass(l.href)}
                  style={{
                    color: isActive ? "white" : BRAND_RED,
                    borderBottomColor: isActive ? BRAND_RED : "transparent",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 xl:hidden">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-full bg-[#FF3B3B] px-3 py-2 text-xs font-bold text-black">Get Pricing</Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="xl:hidden text-3xl leading-none"
            style={{ color: BRAND_RED }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✕" : "☰"}
          </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 xl:hidden flex flex-col">
          <div className="h-16" />

          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-4 py-4">
            {navLinks.map((l) => {
              const isActive =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-orbitron text-xl transition hover:text-white"
                  style={{ color: isActive ? "white" : BRAND_RED }}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
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
