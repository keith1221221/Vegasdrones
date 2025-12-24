"use client";

import Link from "next/link";
import Image from "next/image";

type HeroImageProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bottomLine?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageSrc?: string;
  heightClassName?: string;
};

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function HeroImage({
  title,
  subtitle,
  bottomLine,
  primaryCta,
  secondaryCta,
  imageSrc = "/osmosignalt1.png",
  heightClassName = "h-[40vh] sm:h-[85vh]",
}: HeroImageProps) {
  return (
    <section className="w-full">
      <div className="relative w-full bg-black">
      <div
  className={[
    "w-full bg-black",
    heightClassName,
    "relative overflow-hidden",
    "ring-4 ring-green-500", // ✅ PROOF WRAPPER
  ].join(" ")}
>

          <Image
  src={imageSrc}
  alt=""
  fill
  priority
  sizes="100vw"
  className="object-contain sm:object-cover"
  style={{
    filter: "brightness(1.1) contrast(1.1) saturate(1.1)",
  }}
/>


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Content */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            {/* TOP */}
            <div className="pt-4 sm:pt-8 text-center">
              <h1
                className="
                  font-orbitron font-bold
                  text-3xl sm:text-5xl lg:text-6xl
                  leading-tight
                  drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                  flex flex-wrap justify-center gap-x-3
                  px-3
                "
              >
                {title}
              </h1>

              {subtitle ? (
                <p
                  className="
                    text-gray-100
                    mt-3 sm:mt-4
                    max-w-3xl mx-auto
                    text-base sm:text-xl md:text-2xl
                    leading-relaxed
                    drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]
                    px-3
                  "
                >
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex-1" />

            {/* BOTTOM LINE */}
            {bottomLine ? (
              <div className="pb-3 sm:pb-6 text-center">
                <h2
                  className="
                    font-orbitron
                    text-lg sm:text-2xl md:text-3xl
                    font-bold
                    text-white
                    drop-shadow-[0_0_14px_rgba(0,0,0,0.9)]
                    px-2
                  "
                >
                  {bottomLine}
                </h2>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* CTA BAR */}
      {(primaryCta || secondaryCta) && (
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="
                    inline-flex justify-center items-center
                    text-black font-bold py-4 px-7 rounded-full
                    shadow-lg
                    transform hover:scale-105 transition font-orbitron
                  "
                  style={{
                    backgroundImage: `linear-gradient(to right, ${BRAND_RED}, white, ${BRAND_RED_LIGHT})`,
                    boxShadow: "0 0 25px rgba(255,59,59,0.35)",
                  }}
                >
                  {primaryCta.label}
                </Link>
              ) : null}

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="
                    inline-flex justify-center items-center
                    border border-white/30 text-white font-bold py-4 px-7 rounded-full
                    hover:bg-white/10 transition font-orbitron
                  "
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
