'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top header bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-orbitron text-[#4DFFFF] text-xl sm:text-2xl font-bold">
              VEGAS DRONES
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/faq"
              className="font-orbitron text-[#4DFFFF] hover:text-white transition"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="font-orbitron px-4 py-1 border border-[#4DFFFF] text-[#4DFFFF] rounded-full hover:bg-[#4DFFFF] hover:text-black transition"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden text-[#4DFFFF] text-3xl leading-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden flex flex-col">
          {/* keep header height so overlay starts below it */}
          <div className="h-16" />

          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <Link
              href="/faq"
              className="font-orbitron text-2xl text-[#4DFFFF] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="font-orbitron px-6 py-2 border border-[#4DFFFF] text-[#4DFFFF] rounded-full hover:bg-[#4DFFFF] hover:text-black transition text-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Close text at bottom (optional) */}
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
  )
}
