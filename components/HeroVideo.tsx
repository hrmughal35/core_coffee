"use client";

import { useState } from "react";

const HERO_IMG = "/images/hero.svg";
const HERO_VIDEO = "/videos/hero.mp4";

export default function HeroVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="absolute inset-0 z-0">
      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-coffee-950/92 via-coffee-950/75 to-coffee-950/95"
        aria-hidden
      />
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      {videoError ? (
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hero-image-zoom"
          aria-hidden
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMG}
          className="absolute inset-0 w-full h-full object-cover hero-video-zoom"
          onError={() => setVideoError(true)}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
