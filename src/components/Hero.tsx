"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#07152b]"
      style={{ minHeight: "100dvh" }}
      aria-label="Hero Section"
    >
      {/* Desktop: landscape video strictly limited to hero boundaries */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-desktop-poster.jpg"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src="/Heroupdate.mp4"
      />

      {/* Mobile: portrait video strictly limited to hero boundaries */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-mobile-poster.jpg"
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
        src="/Heroupdate-portrait.mp4"
      />

      {/* Accessible semantic heading for SEO and screen readers */}
      <div className="sr-only">
        <h2>INNOVATIVE IT SOLUTIONS</h2>
        <h1>Transform Your Ideas Into Digital Solutions</h1>
        <p>
          We build innovative websites, mobile applications, software solutions and digital products
          that help businesses grow, automate and succeed.
        </p>
      </div>
    </section>
  );
}

