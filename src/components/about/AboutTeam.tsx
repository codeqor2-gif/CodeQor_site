"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
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

const socialLinks = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "#", bg: "bg-[#25D366]/20 border-[#25D366]/30 text-[#25D366]", hover: "hover:bg-[#25D366]/35 hover:border-[#25D366]/50" },
  { icon: FaInstagram, label: "Instagram", href: "#", bg: "bg-[#E4405F]/20 border-[#E4405F]/30 text-[#E4405F]", hover: "hover:bg-[#E4405F]/35 hover:border-[#E4405F]/50" },
  { icon: FaFacebookF, label: "Facebook", href: "#", bg: "bg-[#1877F2]/20 border-[#1877F2]/30 text-[#1877F2]", hover: "hover:bg-[#1877F2]/35 hover:border-[#1877F2]/50" },
];

export default function AboutTeam() {
  return (
    <section className="relative py-4 lg:py-8">
      <div className="absolute inset-0 bg-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-6">
          <SectionHeading title="Leadership" highlight="Team" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} y={30} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_30px_rgba(102,172,204,0.06)] transition-all duration-400 hover:border-primary-300 hover:shadow-[0_20px_50px_rgba(0,102,204,0.12)]">
                {/* Image — slightly taller than square */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Name + Social — hidden by default, shown on hover */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-4 pb-5 pt-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <h3 className="text-base font-bold text-white text-center">{member.name}</h3>
                    <div className="flex items-center gap-2.5">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 ease-out hover:scale-125 ${social.bg} ${social.hover}`}
                        >
                          <social.icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text content — role + bio always visible */}
                <div className="p-5">
                  <p className="text-sm font-medium text-primary-600">{member.role}</p>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
