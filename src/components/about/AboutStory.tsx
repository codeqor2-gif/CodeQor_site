"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutStory() {
  return (
    <section id="story" className="relative py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-400/20 to-accent-400/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_20px_60px_rgba(0,102,204,0.12)]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="CodeQor team collaboration"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -top-3 rounded-2xl border border-primary-300 bg-white/95 px-3 py-1 text-center shadow-[0_10px_30px_rgba(0,102,204,0.2)] backdrop-blur-md">
                <p className="text-lg font-extrabold text-zinc-900">12+</p>
                <p className="text-[9px] font-medium uppercase tracking-wider text-primary-600">Legacy</p>
              </div>
            </div>
          </Reveal>

          <Reveal x={40}>
            <div>
              <h2 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl lg:text-4xl">
                A Modern Technology Partner for{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Digital Excellence</span>
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                CodeQor Technologies is a full-service software development company
                specializing in custom web applications, mobile apps, cloud solutions,
                and AI-powered products. We partner with startups, SMEs, and enterprises
                to build scalable, innovative technology that drives real business outcomes.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Our team of 80+ skilled engineers, designers, and strategists combines
                deep technical expertise with industry knowledge to deliver solutions
                across healthcare, fintech, e-commerce, logistics, and more.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}