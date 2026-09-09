"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const team = [
  {
    name: "Tahir Shahbaz",
    role: "CEO and Founder",
    bio: "Chief Executive setting the company strategy and leading long-term growth.",
    image: "/images/thair5.jpeg",
  },
   {
    name: "Tayyba Tahir",
    role: "Co-Founder",
    bio: "Co-founder helping shape the company vision and drive its growth from day one.",
    image: "/images/Tyba5.jpeg",
  },
    {
    name: "Hassan Jamal",
    role: "CTO & Technology Executive",
    bio: "Chief Technology Officer guiding architecture, innovation, and technical direction.",
    image: "/images/hassan-jamal.jpg",
  },
  {
    name: "Umer Waseem",
    role: "Full Stack Developer",
    bio: "Versatile engineer building complete web solutions from frontend to backend.",
    image: "/images/Umer5.jpeg",
    filter: "brightness(0.92) contrast(0.92) saturate(1.05)",
  },
  {
    name: "Ayesha Tahir",
    role: "Full Stack Developer",
    bio: "Full-stack specialist delivering end-to-end features with clean, scalable code.",
    image: "/images/ayesha-tahir.jpeg",
  },
  {
    name: "Esha Tahir",
    role: "HR Manager",
    bio: "Managing human resources with a focus on employee engagement and organizational growth.",
    image: "/images/esha-tahir.jpg",
  },
  {
    name: "M. Hamza Khan",
    role: "Frontend Developer",
    bio: "Crafts responsive, interactive interfaces focused on performance and usability.",
    image: "/images/hamza-khan.jpg",
  },
  {
    name: "Samar Rashid",
    role: "Frontend Developer",
    bio: "Builds modern, user-friendly frontends with attention to detail and consistency.",
    image: "/images/samar-rashid.jpg",
  },
 
];

const socialLinks = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/923224544934", bg: "bg-[#25D366]/20 border-[#25D366]/30 text-[#25D366]", hover: "hover:bg-[#25D366]/35 hover:border-[#25D366]/50" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/codqortechnologiesofficial/", bg: "bg-[#E4405F]/20 border-[#E4405F]/30 text-[#E4405F]", hover: "hover:bg-[#E4405F]/35 hover:border-[#E4405F]/50" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594209324185", bg: "bg-[#1877F2]/20 border-[#1877F2]/30 text-[#1877F2]", hover: "hover:bg-[#1877F2]/35 hover:border-[#1877F2]/50" },
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
                    style={member.filter ? { filter: member.filter } : undefined}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark overlay (always on mobile, on hover at desktop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300" />

                  {/* Name + Social — always visible on mobile, revealed on hover at desktop */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-4 pb-5 pt-10 lg:translate-y-3 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:ease-out">
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
