"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiSend, FiCheck } from "react-icons/fi";
import { footerSolutions, footerCompany } from "@/lib/data";
import Logo from "./Logo";
import Reveal from "./Reveal";

const socials = [
  { icon: <FaFacebookF />, label: "Facebook", href: "https://www.facebook.com/netrootstech" },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/netroots-technologies",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/netroots_technologies",
  },
  {
    icon: <FaYoutube />,
    label: "YouTube",
    href: "https://www.youtube.com/@netrootstechnologies7406",
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-primary-300/20 blur-[100px]" />

      {/* ── Section 1: Company Information ─────────────────────── */}
      <Reveal className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-zinc-600">
              NetRoots Technologies provides IT services, software development, and digital
              marketing solutions that help businesses grow, connect, and thrive in their niche.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const map: Record<string, string> = {
                        "Home": "hero",
                        "About Us": "about",
                        "Services": "solutions",
                        "Contact": "contactus",
                      };
                      scrollTo(map[item] || "hero");
                    }}
                    className="text-sm text-zinc-600 transition-colors hover:text-primary-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
              Contact Info
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-primary-500" size={14} />
                <span className="text-sm text-zinc-600">Easton, Pennsylvania, USA</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-0.5 shrink-0 text-primary-500" size={14} />
                <a href="tel:+13023001742" className="text-sm text-zinc-600 hover:text-primary-600">
                  +1 (302) 300-1742
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5 shrink-0 text-primary-500" size={14} />
                <a
                  href="mailto:business@netrootstech.com"
                  className="text-sm text-zinc-600 hover:text-primary-600"
                >
                  business@netrootstech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-zinc-600">
              Subscribe to receive product updates and industry insights.
            </p>
            <form onSubmit={subscribe} className="mt-5">
              <div className="flex overflow-hidden rounded-full border border-zinc-300 bg-white shadow-sm focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent px-5 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 bg-gradient-to-r from-primary-600 to-accent-600 px-5 text-white transition-all duration-300 hover:brightness-110"
                >
                  {subscribed ? <FiCheck /> : <FiSend />}
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs font-medium text-accent-600">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
      </Reveal>

      {/* ── Section 2: Solutions ───────────────────────────────── */}
      <Reveal className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Solutions</h4>
            <ul className="mt-4 space-y-2.5">
              {footerSolutions.map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("solutions");
                    }}
                    className="text-sm text-zinc-600 transition-colors hover:text-primary-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("about");
                    }}
                    className="text-sm text-zinc-600 transition-colors hover:text-primary-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900">
              Business Hours
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 2:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2 font-medium text-primary-600">
                Emergency support available 24/7
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ── Section 3: Terms & Privacy ────────────────────────── */}
      <Reveal className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 px-6 py-5 sm:flex-row">
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600">
            <a href="/terms" className="font-medium transition-colors hover:text-primary-600">
              Terms & Conditions
            </a>
            <a href="/privacy" className="font-medium transition-colors hover:text-primary-600">
              Privacy Policy
            </a>
          </div>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} NetRoots Technologies. All rights reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
