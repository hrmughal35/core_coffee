"use client";

const YOUTUBE_VIDEO_ID = "YxK7me1EsUg"; // Coffee pour video - loop in background
const HERO_IMG = "/images/hero.svg";

const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&showinfo=0&playsinline=1&modestbranding=1`;

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      {/* YouTube video - full cover, loop, muted, autoplay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src={YOUTUBE_EMBED_URL}
          title="Coffee background"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Dark gradient overlay - text clearly readable */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-coffee-950/94 via-coffee-950/85 to-coffee-950/95"
        aria-hidden
      />
      {/* Subtle grain */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </div>
  );
}
