"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "#solutions",
    children: [
      { label: "Web Development", href: "#solutions" },
      { label: "Mobile App Development", href: "#solutions" },
      { label: "UI/UX Design", href: "#solutions" },
      { label: "Cloud Solutions", href: "#solutions" },
      { label: "Digital Marketing", href: "#solutions" },
      { label: "SEO Services", href: "#solutions" },
    ],
  },
  {
    label: "Products",
    href: "#solutions",
    children: [
      { label: "CapoBrain", href: "#solutions" },
      { label: "CapoBiz", href: "#solutions" },
    ],
  },
  { label: "Industries", href: "#solutions" },
  { label: "Contact Us", href: "#contactus" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setActiveDropdown(null);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo — left */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="shrink-0"
          aria-label="CodeQor Technologies home"
        >
          <Logo />
        </a>

        {/* Nav items — right */}
        <div className="hidden items-center gap-1 lg:flex">
          <nav className="flex items-center gap-1">
            {navItems.map((navItem) => (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() => navItem.children && handleDropdownEnter(navItem.label)}
                onMouseLeave={navItem.children ? handleDropdownLeave : undefined}
              >
                <a
                  href={navItem.href}
                  onClick={(e) => {
                    if (!navItem.children) scrollTo(e, navItem.href);
                  }}
                  className="group relative flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium text-zinc-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 cursor-pointer"
                >
                  {navItem.label}
                  {navItem.children && (
                    <FiChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === navItem.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {navItem.children && activeDropdown === navItem.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 top-full z-50 mt-1 w-56 overflow-hidden rounded-xl border border-zinc-100 bg-white py-2 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                      onMouseEnter={() => handleDropdownEnter(navItem.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {navItem.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => scrollTo(e, child.href)}
                          className="block px-4 py-2.5 text-[13px] font-medium text-zinc-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Login */}
          <div className="ml-3 border-l border-zinc-100 pl-3">
            <a
              href="#contactus"
              onClick={(e) => scrollTo(e, "#contactus")}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,102,204,0.3)] transition-all duration-300 hover:brightness-110 cursor-pointer"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="cursor-pointer rounded-lg border border-zinc-200 p-2 text-zinc-600 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-100 lg:hidden"
            style={{ background: "rgba(255,255,255,0.99)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((navItem) => (
                <div key={navItem.label}>
                  <a
                    href={navItem.href}
                    onClick={(e) => {
                      if (!navItem.children) scrollTo(e, navItem.href);
                    }}
                    className={`cursor-pointer rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      navItem.children
                        ? "text-zinc-900 font-semibold"
                        : "text-zinc-600 hover:bg-primary-50 hover:text-primary-600"
                    }`}
                  >
                    {navItem.label}
                  </a>
                  {navItem.children && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {navItem.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => scrollTo(e, child.href)}
                          className="cursor-pointer rounded-lg px-3 py-2 text-[13px] text-zinc-500 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contactus"
                onClick={(e) => scrollTo(e, "#contactus")}
                className="mt-2 inline-block rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
