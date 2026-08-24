"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-night-950"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full"
        style={{
          objectFit: "cover",
          objectPosition: "center center",
          filter: "brightness(1.1) contrast(1.05) saturate(1.15)",
        }}
        src="/VideoHS.mp4"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(2,8,23,0.3) 100%)",
        }}
      />
    </section>
  );
}
