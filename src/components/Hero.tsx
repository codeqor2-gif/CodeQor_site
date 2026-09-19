"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#07152b] pt-[64px] lg:pt-[70px]"
      aria-label="Hero Section"
    >
      {/* Video container — complete edge-to-edge video with zero dark blue outline */}
      <div className="relative w-full flex items-center justify-center">
        {/* Desktop: landscape video (hidden on mobile) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-desktop-poster.jpg"
          className="hidden w-full h-auto md:block"
          src="/Heroupdate.mp4"
        />

        {/* Mobile: seamless portrait video (Text upper, laptop nicha, zero dark blue outline) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-mobile-poster.jpg"
          className="block w-full h-auto md:hidden"
          src="/Heroupdate-portrait.mp4"
        />
      </div>

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

