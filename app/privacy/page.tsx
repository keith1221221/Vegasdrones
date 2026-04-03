import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://www.vegasdrones.com";
const PAGE_URL = `${SITE_URL}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy | Vegas Drones",
  description:
    "Privacy Policy for Vegas Drones and the OpenClaw Facebook publishing workflow, including data use, permissions, retention, and deletion requests.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Privacy Policy | Vegas Drones",
    description:
      "Privacy Policy for Vegas Drones and the OpenClaw Facebook publishing workflow.",
    url: PAGE_URL,
    siteName: "Vegas Drones",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
        name: "Privacy Policy",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-28 text-white">
      <Script
        id="ld-breadcrumbs-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="font-orbitron text-sm uppercase tracking-[0.35em] text-[#FF6A6A]">
            Vegas Drones
          </div>
          <h1 className="mt-4 font-orbitron text-4xl font-bold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: April 3, 2026</p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="space-y-8 text-base leading-8 text-gray-300">
            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">Overview</h2>
              <p className="mt-3">
                Vegas Drones, operated by Skylight Ads LLC, uses OpenClaw to help manage and
                publish approved social media content. This Privacy Policy explains what data we
                access, how we use it, and how to request deletion of connected Facebook app data.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">What OpenClaw Does</h2>
              <p className="mt-3">
                OpenClaw is an internal publishing workflow used to schedule and automatically post
                approved content to connected Facebook Pages. It is used for business social media
                operations, including preparing captions, attaching approved media, and publishing
                posts to authorized Page destinations.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Information We May Access
              </h2>
              <p className="mt-3">When a Facebook Page is connected for publishing, OpenClaw may access:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Page identity details such as Page name, Page ID, and linked business assets.</li>
                <li>Publishing permissions needed to create, schedule, and manage Page posts.</li>
                <li>Approved post content, including captions, links, images, and videos selected for publishing.</li>
                <li>Basic operational metadata such as publish status, timestamps, and error responses from Meta.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                How We Use This Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>To publish and manage authorized Facebook Page posts.</li>
                <li>To troubleshoot failed or rejected posts and confirm delivery status.</li>
                <li>To maintain internal records of scheduled and published social content.</li>
                <li>To improve reliability and administration of our social media workflow.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                What We Do Not Do
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>We do not sell Facebook data or Page data to third parties.</li>
                <li>We do not use connected Page data for unrelated advertising resale or data brokerage.</li>
                <li>We do not request personal profile data beyond what is needed to authorize Page publishing access.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Data Retention and Security
              </h2>
              <p className="mt-3">
                We retain operational publishing data only as long as needed for business records,
                troubleshooting, compliance, and content management. Access is limited to authorized
                administrators and service providers supporting the publishing workflow.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Facebook Data Deletion Requests
              </h2>
              <p className="mt-3">
                If you want data associated with the OpenClaw Facebook integration deleted, contact
                us and include the Facebook Page name, Page ID if available, and the email address
                associated with your request. We will review the request and remove applicable
                connected data within a commercially reasonable timeframe, subject to any legal or
                recordkeeping requirements.
              </p>
              <p className="mt-3">
                To submit a request, use our <Link href="/contact" className="underline underline-offset-4">contact page</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Third-Party Services
              </h2>
              <p className="mt-3">
                Our publishing workflow may rely on third-party platforms and infrastructure,
                including Meta Platforms technologies used for Facebook Page publishing. Use of
                those platforms remains subject to their own terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-2xl font-bold text-white">Contact</h2>
              <p className="mt-3">
                Questions about this Privacy Policy or the OpenClaw Facebook publishing workflow
                can be sent through our <Link href="/contact" className="underline underline-offset-4">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
