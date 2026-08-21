"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "20+ years leading digital transformation for companies.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    bio: "Distributed systems expert with 15+ years architecting platforms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    bio: "Built high-performing engineering teams across 3 continents.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "David Rodriguez",
    role: "VP of Delivery",
    bio: "Agile leader with 500+ successful project deliveries worldwide.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function AboutTeam() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="absolute inset-0 bg-zinc-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading
            title="Leadership"
            highlight="Team"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} y={30} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(0,102,204,0.06)] transition-all duration-400 hover:border-primary-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.12)]"
                style={{ minHeight: 380 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-600">{member.role}</p>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}