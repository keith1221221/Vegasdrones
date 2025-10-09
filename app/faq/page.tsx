'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How much does a drone light show cost?",
    answer: "Our pricing starts at $5,000 for a standard wedding drone light show, including three custom elements."
  },
  {
    question: "Are drone light shows safe?",
    answer: "Yes! Our drone shows are FAA-approved, and we follow strict safety regulations."
  },
  {
    question: "How far in advance should we book?",
    answer: "Depending on your venue's location, we can schedule a show in as little as 72 hours. If your event is in a densely populated area, we require at least 30 days to secure FAA authorization."
  },
  {
    question: "What happens if there is bad weather?",
    answer: "We have a flexible refund policy in case of weather-related cancellations. Contact us for details."
  },
  {
    question: "How much space do you need for a drone show?",
    answer: "We need about the size of a basketball court for launch, but the full safety radius varies based on location and local airspace regulations."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleFAQ = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black pt-20">
          <div className="text-center z-10 px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Drone Light Shows in Las Vegas
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience breathtaking drone light shows for weddings, corporate events, and festivals.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-8" id="faq-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white pr-4">
                        {item.question}
                      </h3>
                      <i 
                        className={`fas fa-chevron-down text-neon-cyan transition-transform duration-300 ${
                          openItems.has(index) ? 'transform rotate-180' : ''
                        }`}
                      ></i>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.has(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 text-center bg-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Ready to Light Up the Sky?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to plan your custom drone light show in Las Vegas!
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-cyan-400 transition-colors"
          >
            Get Started
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}