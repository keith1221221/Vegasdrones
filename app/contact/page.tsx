"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

// ✅ Google Ads conversion "send_to" (AW + Label)
// NOTE: Label is case-sensitive. Use exactly what Google Ads shows.
const ADS_SEND_TO = "AW-16857594392/bGgeCMm73OYbEJj0qeY-";

// Safe GA helper (won't crash if gtag isn't loaded yet)
function track(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

// ✅ Fire Google Ads conversion (guards against double-fire on re-render)
function trackAdsConversion(sendTo: string) {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") return;

  const key = `ads_conv_fired:${sendTo}`;
  try {
    if (sessionStorage.getItem(key) === "1") return;
    gtag("event", "conversion", { send_to: sendTo });
    sessionStorage.setItem(key, "1");
  } catch {
    // If sessionStorage is blocked, still attempt to fire once.
    gtag("event", "conversion", { send_to: sendTo });
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gclid: "",
    gbraid: "",
    wbraid: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Breadcrumb schema (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: PAGE_URL,
      },
    ],
  };

  // Capture Google Ads click ids (offline conversion tracking)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    setFormData((prev) => ({
      ...prev,
      gclid: params.get("gclid") || "",
      gbraid: params.get("gbraid") || "",
      wbraid: params.get("wbraid") || "",
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");

    // Track submit attempt (covers clicks + Enter key submissions)
    track("contact_submit_attempt", {
      form_name: "contact",
      has_name: !!formData.name?.trim(),
      has_email: !!formData.email?.trim(),
      message_length: (formData.message || "").length,
      has_gclid: !!formData.gclid,
      has_gbraid: !!formData.gbraid,
      has_wbraid: !!formData.wbraid,
    });

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch("https://formspree.io/f/myzyaqbw", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "website_contact_form",
        }),
      });

      // Treat any 2xx response as success (Formspree often returns 202)
      if (response.status >= 200 && response.status < 300) {
        console.log("Formspree success status:", response.status);

        // ✅ Google Ads lead conversion (fires only on successful submit)
        trackAdsConversion(ADS_SEND_TO);

        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          gclid: formData.gclid,
          gbraid: formData.gbraid,
          wbraid: formData.wbraid,
        });

        // GA4 lead conversion
        track("generate_lead", {
          method: "formspree",
          form_name: "contact",
          response_status: response.status,
          has_gclid: !!formData.gclid,
          has_gbraid: !!formData.gbraid,
          has_wbraid: !!formData.wbraid,
        });

        // Optional debugging signal
        track("lead_with_click_id", {
          has_gclid: !!formData.gclid,
          has_gbraid: !!formData.gbraid,
          has_wbraid: !!formData.wbraid,
        });
      } else {
        setSubmitError("Your inquiry could not be sent. Your details are still here. Please try again.");
        // Non-success response
        track("contact_submit_error", {
          form_name: "contact",
          status: response.status,
          status_text: response.statusText,
          has_gclid: !!formData.gclid,
          has_gbraid: !!formData.gbraid,
          has_wbraid: !!formData.wbraid,
        });
      }
    } catch (error: any) {
      setSubmitError("We couldn’t confirm your inquiry was sent. Your details are still here. Please try again or email us below.");

      track("contact_submit_error", {
        form_name: "contact",
        error_message: error?.message || "unknown_error",
        has_gclid: !!formData.gclid,
        has_gbraid: !!formData.gbraid,
        has_wbraid: !!formData.wbraid,
      });
    } finally {
      clearTimeout(timeout);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-poppins pt-28 px-6">
      {/* ✅ Breadcrumb Schema */}
      <Script
        id="ld-breadcrumbs-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="relative max-w-3xl mx-auto text-center pb-10">
        <h1 className="font-orbitron font-bold text-4xl sm:text-5xl leading-tight">
          <span className="text-white">CONTACT </span>
          <span className="text-[#FF3B3B]">VEGAS DRONES</span>
        </h1>

        <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed">
          Tell us your event date, venue, and creative ideas. We’ll help you plan
          a drone show and provide pricing tailored to your event.
        </p>

        <p className="mt-4 font-semibold text-white">
          Headquartered in Las Vegas. No travel fees for Las Vegas shows.
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
              CHECK MY DATE &amp; GET PRICING
            </h2>

            <p className="text-center text-gray-300 mt-3 mb-8">
              Share whatever you know — we’ll fill in the gaps.
            </p>

            {submitted ? (
              <div role="status" className="text-center p-8 rounded-2xl border border-white/10 bg-black/30">
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">
                  Message received ✅
                </h3>
                <p className="text-gray-300">
                  Thanks for contacting Vegas Drones. We’ll review your event details
                  and follow up at the email address you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-busy={isSubmitting} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-white mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-white mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white resize-y focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Date, venue area, crowd size, and what you want to show"
                  />
                </div>

                {submitError && (
                  <p role="alert" className="rounded-xl border border-red-400/50 bg-red-950/40 p-4 text-red-100">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center text-black font-bold py-4 px-10 rounded-full shadow-lg transition font-orbitron disabled:opacity-60"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                    boxShadow: "0 0 30px rgba(255,59,59,0.45)",
                  }}
                >
                  {isSubmitting ? "Sending inquiry…" : "Request Pricing & Availability"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We’ll reply as soon as possible.
                </p>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-gray-300">
            Prefer email? <a className="text-white underline underline-offset-4" href="mailto:keith@vegasdrones.com">keith@vegasdrones.com</a>
          </p>

          <p className="text-center text-gray-500 text-xs mt-10">
            Operated by Skylight Ads LLC • Las Vegas-based crew • FAA Part 107 •
            Insured operations
          </p>
        </div>
      </section>
    </main>
  );
}
