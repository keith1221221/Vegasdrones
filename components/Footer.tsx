import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* BRAND */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
              Vegas Drones
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Bringing the future of entertainment to Las Vegas with stunning drone light shows.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
<div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
    Connect With Us
  </h3>

  <div className="flex gap-4 justify-center sm:justify-start">
    <a
      href="https://www.facebook.com/61570074433959"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.5 3h-2.1v7A10 10 0 0 0 22 12Z" />
      </svg>
    </a>

    <a
      href="https://www.instagram.com/vegas_drones"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.8 6.2a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/company/vegas-drones"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M6.9 6.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 21h3.4V9H3.2v12ZM10 9h3.2v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H10V9Z" />
      </svg>
    </a>

    <a
      href="https://www.youtube.com/@vegas_drones"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.8-.8-2.2-.9C15.4 4 12 4 12 4h0s-3.4 0-6.6.2c-.4 0-1.4.1-2.2.9-.6.6-.8 2.1-.8 2.1S2 8.9 2 10.6v1.6c0 1.7.4 3.4.4 3.4s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.4.2 6.4.2s3.4 0 6.6-.2c.4 0 1.4-.1 2.2-.9.6-.6.8-2.1.8-2.1s.4-1.7.4-3.4v-1.6c0-1.7-.4-3.4-.4-3.4ZM10 14.8V9.2l5.2 2.8L10 14.8Z" />
      </svg>
    </a>
  </div>
</div>
</div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 Vegas Drones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
