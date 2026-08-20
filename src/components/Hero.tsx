"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020817]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ willChange: "transform", imageRendering: "auto" }}
        src="/VideoHS.mp4"
      />

      {/* Light gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,23,0.15) 0%, transparent 30%, transparent 70%, rgba(2,8,23,0.25) 100%)",
        }}
      />
    </section>
  );
}
