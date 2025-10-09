'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-transparent z-50">
      <nav className="flex justify-between items-center px-12 py-5 max-w-6xl mx-auto">
        <div className="logo">
          <Link href="/">
            <span className="font-orbitron text-2xl text-neon-cyan cursor-pointer">VEGAS DRONES</span>
          </Link>
        </div>
        <ul className="flex gap-5 list-none">
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
      </nav>
    </header>
  )
}