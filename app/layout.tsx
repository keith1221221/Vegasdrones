import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-orbitron",
  preload: true, // critical for above-the-fold
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: false, // less critical
});

const GA_MEASUREMENT_ID = "G-1D4607FKY3";
const CLARITY_PROJECT_ID = "uqbi5fbzep";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vegasdrones.com"),
  title: {
    default: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    template: "%s | Vegas Drones",
  },
  description:
    "Vegas Drones creates spectacular custom drone light shows in Las Vegas for weddings, corporate events, festivals, and brand activations. Book a breathtaking aerial experience today.",
  keywords: [
    "drone show",
    "drone shows",
    "Las Vegas drone show",
    "Las Vegas drones",
    "wedding drone show",
    "corporate drone show",
    "drone advertising",
    "Vegas Drones",
    "aerial light show",
    "event entertainment Las Vegas",
  ],
  openGraph: {
    type: "website",
    url: "https://www.vegasdrones.com",
    title: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    description:
      "Custom 100–500+ drone light shows for conventions, corporate events, sports, and festivals in Las Vegas.",
    siteName: "Vegas Drones",
    images: [
      {
        url: "/alienhead1.png",
        width: 1200,
        height: 630,
        alt: "Vegas Drones aerial light show over Las Vegas",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegas Drones | Spectacular Drone Light Shows in Las Vegas",
    description:
      "Breathtaking drone light shows for weddings, events, and brands in Las Vegas.",
    images: ["/alienhead1.png"],
  },
  alternates: { canonical: "https://www.vegasdrones.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vegas Drones",
    url: "https://www.vegasdrones.com",
    logo: "https://www.vegasdrones.com/alienhead1.png",
    image: "https://www.vegasdrones.com/alienhead1.png",
    description:
      "Custom drone light shows in Las Vegas for weddings, corporate events, conventions, festivals, and brand activations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    areaServed: "Las Vegas NV",
    sameAs: [
      "https://www.instagram.com/vegasdrones",
      "https://www.facebook.com/vegasdrones",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${poppins.variable}`}>
      <head>
        {/* ✅ LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* ✅ Font Awesome (NON-BLOCKING) */}
        

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `,
          }}
        />

        {/* GA4 */}
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-16857594392"
  strategy="afterInteractive"
/>

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;

           gtag('consent', 'default', {
  ad_storage: 'granted',
  analytics_storage: 'granted'
});

gtag('js', new Date());

// GA4
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });

// Google Ads (required for reliable conversion detection + audiences)
gtag('config', 'AW-16857594392');


            const fileExtRegex = /\\.(pdf|docx?|xlsx?|pptx?|zip|rar)$/i;

            function isExternalLink(a) {
              try {
                const url = new URL(a.href);
                return url.hostname && url.hostname !== window.location.hostname;
              } catch (e) {
                return false;
              }
            }

            document.addEventListener('click', function(e) {
              const a = e.target && e.target.closest ? e.target.closest('a') : null;
              if (!a || !a.href) return;

              if (fileExtRegex.test(a.href)) {
                window.gtag('event', 'file_download', {
                  file_name: a.href.split('/').pop(),
                  link_url: a.href
                });
                return;
              }

              if (isExternalLink(a)) {
                window.gtag('event', 'click_outbound', {
                  link_url: a.href,
                  link_text: (a.textContent || '').trim().slice(0, 120)
                });
              }
            }, { capture: true });
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="pt-10 md:pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
