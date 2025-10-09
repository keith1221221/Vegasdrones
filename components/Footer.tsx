import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Vegas Drones</h3>
            <p className="text-gray-400">
              Bringing the future of entertainment to Las Vegas with stunning drone light shows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com/61570074433959" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://instagram.com/vegas_drones" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://twitter.com/DronesVegas" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
              <a href="https://tiktok.com/@vegas_drones" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok text-xl text-gray-400 hover:text-neon-cyan transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Vegas Drones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}