'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <>
      <Header />

      <main>
        {/* ================= HERO IMAGE SECTION ================= */}
        <section className="w-full bg-black pt-24">
          <div className="relative w-full">
            <img
              src="/osmosign.jpg"
              alt="Las Vegas drone light show Welcome to Vegas formation"
              className="w-full h-auto max-h-[90vh] object-cover"
            />

            {/* SEO-friendly main H1 at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4">
              <h1
                className="font-orbitron whitespace-nowrap text-white font-bold 
              text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center 
              drop-shadow-[0_0_12px_rgba(0,255,255,0.55)]"
              >
                Las Vegas Drone Shows
              </h1>
            </div>
          </div>
        </section>

                {/* Big wave transition with overlaid H2 */}
                <div className="relative w-full overflow-hidden -mt-1 bg-black">
          {/* Wave itself */}
          <svg
            viewBox="0 0 1440 160"
            className="w-full h-40 fill-gray-900"
            preserveAspectRatio="none"
          >
            <path d="M0,96 C360,160 1080,0 1440,96 L1440,160 L0,160 Z"></path>
          </svg>

          {/* H2 sitting over the wave */}
          <div className="absolute inset-x-0 bottom-20 flex justify-center px-4">
            <h2
              className="font-orbitron whitespace-nowrap font-bold text-white text-center
              text-xl sm:text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
            >
              Drone Light Shows for Events
            </h2>
          </div>
        </div>


        {/* ================= ALIEN AI ASSISTANT SECTION ================= */}
        <section className="relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 py-20">
          <div className="text-center z-10 max-w-4xl mx-auto">
            {/* H2 for alien section */}
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold mb-6 sm:mb-8 text-white px-4 
               drop-shadow-[0_0_12px_rgba(0,255,255,0.55)]
                mt-[-40px] sm:mt-0">
              Illuminate the Night with Vegas Drones
        </h2>


            {/* Alien assistant (HALF SIZE NOW) */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative cursor-pointer" title="Vegas Drones AI Assistant">
                {/* Outer glow */}
                <div className="absolute inset-0 scale-[0.45] sm:scale-[0.55] md:scale-[0.65] bg-neon-cyan opacity-20 rounded-full blur-2xl"></div>
                <div className="absolute inset-0 scale-[0.45] sm:scale-[0.55] md:scale-[0.65] bg-neon-cyan opacity-30 rounded-full blur-xl"></div>

                {/* Circle container */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-full p-1">
                  {/* SEO static image replacing video */}
                  <div className="w-full h-full rounded-full border-2 border-neon-cyan shadow-neon overflow-hidden">
                    <img
                      src="/alienhead1.png"
                      alt="Vegas Drones alien drone formation in the sky"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Rotating ring */}
                <div className="absolute inset-0 scale-[0.7] sm:scale-[0.85] md:scale-[0.95] border border-neon-cyan/50 rounded-full animate-spin-slow"></div>
              </div>
            </div>

            {/* Chatbot Button */}
            <div className="mb-4 sm:mb-5 px-4">
              <Link
                href="/chatbot"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-neon-cyan to-green-400 hover:from-green-400 hover:to-neon-cyan text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-neon transform hover:scale-105 font-orbitron text-sm sm:text-base"
              >
                <i className="fas fa-robot text-lg sm:text-xl"></i>
                Chat with AI Assistant
              </Link>
            </div>

            {/* Assistant description line */}
            <p className="font-orbitron text-sm sm:text-base md:text-lg text-neon-cyan text-center mt-10">
              The Vegas Drones co-pilot can assist with quotes, date availability, or any
              questions you may have.
            </p>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" id="features">
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-white">
            Why Vegas Drones?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Eco-Friendly */}
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-leaf text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-white">Eco-Friendly</h3>
              <p className="text-gray-300">Silent, smokeless drone displays that dazzle responsibly.</p>
            </div>

            {/* Creative Customization */}
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-brain text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-white">Creative Customization</h3>
              <p className="text-gray-300">
                Transform your vision into stunning aerial art with logos and shapes.
              </p>
            </div>

            {/* Unforgettable Impact */}
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-star text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-white">Unforgettable Impact</h3>
              <p className="text-gray-300">
                Captivate audiences with mesmerizing visuals that elevate your brand.
              </p>
            </div>

            {/* Vegas Born */}
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-city text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="font-orbitron text-xl font-bold mb-4 text-white">Vegas Born</h3>
              <p className="text-gray-300">
                Proudly operating with a 100% local flight crew that knows Las Vegas inside and
                out.
              </p>
            </div>
          </div>
        </section>

        {/* ================= GALLERY SECTION ================= */}
        <section className="py-20 px-8 bg-gray-900">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Fabulous Shows
          </h2>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Video 1 */}
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/bo3z1mTSc0s?rel=0"
                title="Vegas Drones Light Show"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              />
            </div>

            {/* Video 2 */}
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/XvxnQlQjztE?rel=0"
                title="Vegas Drones Light Show 2"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
            Ready to Light Up the Sky?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Contact us today to plan your custom drone light show in Las Vegas!
          </p>

          <a
            href="/contact"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-cyan-400 hover:rounded-[2rem] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon border-2 border-neon-cyan hover:border-cyan-400 font-orbitron text-sm sm:text-base"
          >
            Get Started
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
