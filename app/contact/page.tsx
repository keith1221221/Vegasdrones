"use client";

import { useState } from "react";

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myzyaqbw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-poppins pt-28 px-6">
      {/* HERO */}
      <section className="relative max-w-3xl mx-auto text-center pb-10">
        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl leading-tight">
          <span className="text-white">CONTACT </span>
          <span className="text-[#FF3B3B]">VEGAS DRONES</span>
        </h1>

        <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed">
          Fastest way to get pricing: share your date, venue area, and what you want
          to show (logo, names, messaging, holiday theme, etc.).
        </p>

        <div className="mt-8 flex justify-center">
          <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* FORM */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 shadow-2xl">
            <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-center">
              <span className="text-white">GET </span>
              <span className="text-[#FF3B3B]">HOLDS</span>
              <span className="text-white"> + </span>
              <span className="text-[#FF3B3B]">PRICING</span>
            </h2>

            <p className="text-center text-gray-300 mt-3 mb-8">
              Share whatever you know — we’ll fill in the gaps.
            </p>

            {submitted ? (
              <div className="text-center p-8 rounded-2xl border border-white/10 bg-black/30">
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                  Message received ✅
                </h3>
                <p className="text-gray-300">
                  Thanks — we’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white resize-y focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Date, venue area, crowd size, and what you want to show"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transition font-orbitron disabled:opacity-60"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                    boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We’ll reply as soon as possible.
                </p>
              </form>
            )}
          </div>

          <p className="text-center text-gray-500 text-xs mt-10">
            Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 • Insured operations
          </p>
        </div>
      </section>
    </main>
  );
}
