"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Get Started", href: "#contactus" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/90 py-3 shadow-[0_8px_30px_rgba(139,92,246,0.12)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="shrink-0"
          aria-label="NetRoots Technologies home"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-primary-600"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contactus"
            onClick={(e) => scrollTo(e, "#contactus")}
            className="rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)] transition-all duration-300 hover:shadow-[0_10px_32px_rgba(217,70,239,0.5)] hover:brightness-110"
          >
            Contact Us
          </a>
        </div>

        <button
          className="rounded-lg border border-primary-300/70 p-2 text-primary-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contactus"
                onClick={(e) => scrollTo(e, "#contactus")}
                className="mt-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
