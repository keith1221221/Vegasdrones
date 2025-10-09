'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Handle video autoplay with better browser compatibility
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true)
        // Attempt to play the video
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Talking alien head video autoplay successful')
            })
            .catch(error => {
              console.error('Autoplay failed:', error)
            })
        }
      }

      const handleLoadedData = () => {
        setIsVideoLoaded(true)
        // Try to play when data is loaded
        video.play().catch(error => {
          console.error('Play on load failed:', error)
        })
      }

      const handleError = (e: Event) => {
        console.error('Talking alien head video error:', e)
        setIsVideoLoaded(false)
      }

      // Add event listeners
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('error', handleError)

      // Ensure video properties are set for talking alien head
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.setAttribute('webkit-playsinline', 'true')

      // Cleanup
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  const handleVideoClick = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play().catch(error => console.error('Manual play of talking alien head failed:', error))
      } else {
        // If playing, restart the talking alien head video
        video.currentTime = 0
      }
    }
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 py-20">
          <div className="text-center z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white px-4">
              Illuminate the Night with Vegas Drones
            </h1>
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative cursor-pointer" onClick={handleVideoClick} title="Click to interact with our talking alien host">
                {/* Outer glow ring for alien effect */}
                <div className="absolute inset-0 bg-neon-cyan opacity-20 rounded-full blur-2xl scale-125 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-neon-cyan opacity-30 rounded-full blur-xl scale-110 animate-glow-pulse"></div>
                
                {/* Perfect circle container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-full p-1">
                  {/* Inner circle with border */}
                  <div className="w-full h-full rounded-full border-2 border-neon-cyan shadow-neon overflow-hidden">
                    <video 
                      ref={videoRef}
                      muted 
                      preload="metadata"
                      playsInline 
                      autoPlay 
                      loop
                      controls={false}
                      className="w-full h-full object-cover rounded-full"
                      onLoadStart={() => setIsVideoLoaded(true)}
                      onError={(e) => {
                        console.error('Video error:', e)
                        setIsVideoLoaded(false)
                      }}
                    >
                      <source src="/talking_alien_head.mov" type="video/quicktime" />
                      <source src="/talking_alien_head.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                {/* Rotating border ring */}
                <div className="absolute inset-0 border border-neon-cyan/50 rounded-full animate-spin-slow"></div>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              FAA-Certified Drone Light Shows for Events, Conventions, and Weddings
            </p>
            
            {/* Chatbot Button */}
            <div className="mb-6 sm:mb-8 px-4">
              <Link 
                href="/chatbot"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-neon-cyan to-green-400 hover:from-green-400 hover:to-neon-cyan text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-neon transform hover:scale-105 font-orbitron text-sm sm:text-base"
              >
                <i className="fas fa-robot text-lg sm:text-xl"></i>
                Chat with AI Assistant
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" id="features">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-white">
            Why Vegas Drones?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-leaf text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Eco-Friendly</h3>
              <p className="text-gray-300">Silent, smokeless drone displays that dazzle responsibly.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-brain text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Creative Customization</h3>
              <p className="text-gray-300">Transform your vision into stunning aerial art with logos and shapes.</p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-3xl hover:rounded-[2rem] transition-all duration-300 border border-gray-800 hover:border-neon-cyan/50 shadow-lg hover:shadow-neon">
              <i className="fas fa-star text-4xl text-neon-cyan mb-4 block"></i>
              <h3 className="text-xl font-bold mb-4 text-white">Unforgettable Impact</h3>
              <p className="text-gray-300">Captivate audiences with mesmerizing visuals that elevate your brand.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-8 bg-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Our Spectacular Shows
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative group">
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <iframe 
                src="https://www.youtube.com/embed/bo3z1mTSc0s?rel=0" 
                title="Vegas Drones Show" 
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-[2rem] shadow-2xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
            Ready to Light Up the Sky?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Contact us today to plan your custom drone light show in Las Vegas!
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-cyan-400 hover:rounded-[2rem] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon border-2 border-neon-cyan hover:border-cyan-400 text-sm sm:text-base"
          >
            Get Started
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}