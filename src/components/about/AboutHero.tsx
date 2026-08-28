"use client";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-night-950">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ filter: "brightness(1.08) contrast(1.04) saturate(1.12)" }}
        src="/abouthero2.mp4"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night-950/60 via-night-950/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(2,8,23,0.35) 100%)" }}
      />
    </section>
  );
}
