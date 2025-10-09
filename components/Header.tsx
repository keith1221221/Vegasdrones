'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-5 max-w-6xl mx-auto">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            <span className="font-orbitron text-xl sm:text-2xl text-neon-cyan cursor-pointer">VEGAS DRONES</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 list-none items-center">
          <li>
            <Link 
              href="/faq" 
              className={`text-white hover:text-neon-cyan transition-colors ${
                pathname === '/faq' ? 'text-neon-cyan' : ''
              }`}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`text-white hover:text-neon-cyan transition-colors px-6 py-2 border border-neon-cyan rounded-full ${
                pathname === '/contact' ? 'bg-neon-cyan text-black' : ''
              }`}
            >
              Contact
            </Link>
          </li>
          {pathname !== '/' && (
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-neon-cyan transition-colors"
              >
                Home
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden text-neon-cyan text-2xl focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-6 list-none pt-20 px-8">
            <li>
              <Link 
                href="/faq" 
                onClick={closeMenu}
                className={`text-white hover:text-neon-cyan transition-colors text-lg ${
                  pathname === '/faq' ? 'text-neon-cyan' : ''
                }`}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className={`text-white hover:text-neon-cyan transition-colors px-6 py-2 border border-neon-cyan rounded-full inline-block text-center text-lg ${
                  pathname === '/contact' ? 'bg-neon-cyan text-black' : ''
                }`}
              >
                Contact
              </Link>
            </li>
            {pathname !== '/' && (
              <li>
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="text-white hover:text-neon-cyan transition-colors text-lg"
                >
                  Home
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={closeMenu}
            style={{ zIndex: -1 }}
          />
        )}
      </nav>
    </header>
  )
}