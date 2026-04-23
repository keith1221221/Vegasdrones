import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Cta = {
  href: string;
  label: string;
};

type HeroImageProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  bottomLine?: ReactNode;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  imageSrc?: string;
  posterSrc?: string;
  mobileVideoSrc?: string;
  desktopVideoSrc?: string;
  heightClassName?: string;
  imageClassName?: string;
  mobileVideoClassName?: string;
  desktopVideoClassName?: string;
};

const BRAND_RED = "#FF3B3B";
const BRAND_RED_LIGHT = "#FF6A6A";

export default function HeroImage({
  title,
  subtitle,
  bottomLine,
  primaryCta,
  secondaryCta,
  imageSrc = "/osmosignalt1.webp",
  posterSrc,
  mobileVideoSrc,
  desktopVideoSrc,
  heightClassName = "h-[40vh] sm:h-[85vh]",
  imageClassName = "object-cover",
  mobileVideoClassName = "object-cover",
  desktopVideoClassName = "object-cover",
}: HeroImageProps) {
  const imageVisibilityClass = mobileVideoSrc
    ? desktopVideoSrc
      ? "hidden"
      : "hidden sm:block"
    : desktopVideoSrc
      ? "block sm:hidden"
      : "block";

  return (
    <section className="w-full">
      <div className="relative w-full bg-black">
        <div
          className={[
            "w-full bg-black",
            heightClassName,
            "relative overflow-hidden",
          ].join(" ")}
        >
          {/* HERO MEDIA */}
          <Image
            src={imageSrc}
            alt="Las Vegas Drone Light Show Company"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            quality={75}
            className={`${imageVisibilityClass} ${imageClassName}`}
          />

          {mobileVideoSrc ? (
            <video
              className={`absolute inset-0 h-full w-full sm:hidden ${mobileVideoClassName}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={posterSrc || imageSrc}
            >
              <source src={mobileVideoSrc} type="video/mp4" />
            </video>
          ) : null}

          {desktopVideoSrc ? (
            <video
              className={`absolute inset-0 hidden h-full w-full sm:block ${desktopVideoClassName}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={posterSrc || imageSrc}
            >
              <source src={desktopVideoSrc} type="video/mp4" />
            </video>
          ) : null}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* CONTENT */}
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col">
            <div className="pt-6 sm:pt-14 text-center">
              <h1 className="font-orbitron font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight text-center drop-shadow-[0_0_14px_rgba(0,0,0,0.85)] px-3">
                {title}
              </h1>
            </div>

            {subtitle ? (
              <div className="hidden sm:flex flex-1 items-end justify-center px-4 pb-4">
                <div className="text-gray-100 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl leading-relaxed text-center drop-shadow-[0_0_14px_rgba(0,0,0,0.85)]">
                  {subtitle}
                </div>
              </div>
            ) : (
              <div className="flex-1" />
            )}

            {bottomLine ? (
              <div className="mt-auto pb-6 sm:pb-10 text-center">
                <p className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_14px_rgba(0,0,0,0.9)] px-2">
                  {bottomLine}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {(primaryCta || secondaryCta) && (
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex justify-center pt-4 sm:pt-6 pb-8 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex justify-center items-center text-black font-bold py-4 px-7 rounded-full shadow-lg transform hover:scale-105 transition font-orbitron"
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
                  className="inline-flex justify-center items-center border border-white/30 text-white font-bold py-4 px-7 rounded-full hover:bg-white/10 transition font-orbitron"
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
