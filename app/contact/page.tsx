'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/myzyaqbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black pt-20 px-4 sm:px-6">
          <div className="text-center z-10 px-4 sm:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Contact Vegas Drones
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Let&apos;s Make Your Las Vegas Drone Show Unforgettable
            </p>
            <a 
              href="#contact-form" 
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-cyan-400 transition-colors text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" id="contact-form">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-white">
              Get in Touch
            </h2>
            
            {submitted ? (
              <div className="text-center p-6 sm:p-8 bg-green-900 bg-opacity-50 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">Thank you for your message!</h3>
                <p className="text-sm sm:text-base text-gray-300">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-white mb-2 font-medium text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-cyan focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-white mb-2 font-medium text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-cyan focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-white mb-2 font-medium text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-cyan focus:outline-none resize-vertical text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}