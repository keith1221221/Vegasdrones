import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Vegas Drones</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Bringing the future of entertainment to Las Vegas with stunning drone light shows.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/faq" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Connect With Us</h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://facebook.com/61570074433959" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f text-lg sm:text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://instagram.com/vegas_drones" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram text-lg sm:text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://twitter.com/DronesVegas" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter text-lg sm:text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://tiktok.com/@vegas_drones" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok text-lg sm:text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2025 Vegas Drones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}