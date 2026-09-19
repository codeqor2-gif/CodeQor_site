"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";

const socials = [
  { icon: <FaFacebookF size={13} />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594209324185" },
  { icon: <FaLinkedinIn size={13} />, label: "LinkedIn", href: "https://www.linkedin.com/in/tayyba-tahir-836972247/" },
  { icon: <FaInstagram size={13} />, label: "Instagram", href: "https://www.instagram.com/codqortechnologiesofficial/" },
  { icon: <FaWhatsapp size={13} />, label: "WhatsApp", href: "https://wa.me/923224544934" },
];

const serviceLinks = [
  "Brand Strategy Development",
  "E-commerce Solutions",
  "Content Marketing",
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contactus" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Deep sky-blue gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #021830 0%, #032d52 25%, #054575 50%, #075d98 75%, #0874b5 100%)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute -left-48 -top-48 h-[550px] w-[550px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #43B2F2, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #0078E7, transparent 65%)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #43B2F2, transparent 70%)" }}
      />

      {/* Top edge glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#43B2F2]/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#43B2F2]/20 to-transparent blur-sm" />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-10 lg:px-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[30%_1fr_1fr_20%] lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-5">
              <Logo light />
            </div>
            <p className="max-w-[300px] text-[13px] leading-[1.9] text-white/80">
              CodQor Technologies is a full-service IT and digital marketing company
              delivering innovative, scalable solutions to businesses worldwide.
            </p>

            <a
              href="mailto:info@codqortechnologies.com"
              className="mt-6 inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <FiMail size={15} />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/50">Email us</span>
                <span className="mt-0.5 block text-[11px] font-semibold text-white">info@codqortechnologies.com</span>
              </span>
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4
              className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#43B2F2" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("solutions");
                    }}
                    className="text-[13px] text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4
              className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#43B2F2" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        const id = item.href.replace("#", "");
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-[13px] text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal + Social */}
          <div>
            <h4
              className="mb-5 text-[13px] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#43B2F2" }}
            >
              Legal
            </h4>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.05] text-white/65 transition-colors duration-300 hover:border-[#43B2F2]/50 hover:bg-[#43B2F2]/15 hover:text-[#43B2F2]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
