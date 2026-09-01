"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI & Intelligent Automation", href: "/services/ai-intelligent-automation" },
      { label: "Data Analytics & BI", href: "/services/data-analytics-business-intelligence" },
      { label: "Cloud Solutions & Infrastructure", href: "/services/cloud-solutions-digital-infrastructure" },
      { label: "Technology Talent & Team Expansion", href: "/services/technology-talent-team-expansion" },
      { label: "Product Development & MVP", href: "/services/product-development-mvp-solutions" },
      { label: "Digital Growth & Performance Marketing", href: "/services/digital-growth-performance-marketing" },
      { label: "Digital Products & Experiences", href: "/services/digital-products-immersive-experiences" },
      { label: "DevOps & Software Delivery", href: "/services/devops-software-delivery" },
    ],
  },
  {
    label: "Products",
    href: "/#solutions",
    children: [
      { label: "CapoBrain", href: "/#solutions" },
      { label: "CapoBiz", href: "/#solutions" },
    ],
  },
  { label: "Industries", href: "/industries" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => {
    const clean = href.split("#")[0];
    if (!clean) return false;
    // On the home route, only "Home" is the page-level active item.
    // Section-scroll links like Products (/#solutions) have no route and stay inactive.
    if (clean === "/") return pathname === "/" && !href.includes("#solutions");
    // For services, child routes (/services/xyz) keep "Services" active.
    if (clean === "/services" && pathname.startsWith("/services")) return true;
    return pathname === clean;
  };

  // Style for dropdown child links: active when on that exact service route.
  const childActive = (href: string) => {
    const clean = href.split("#")[0];
    if (!clean) return false;
    if (href.includes("#solutions")) return false;
    if (clean === "/services" && pathname === "/services") return false;
    return pathname === clean;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link
          href="/#home"
          className="shrink-0 transition-transform duration-300 ease-out hover:scale-[1.05] active:scale-100"
          aria-label="CodeQor Technologies home"
        >
          <Logo />
        </Link>

        {/* Nav items — center */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <nav className="flex items-center gap-1">
            {navItems.map((navItem) => (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() => navItem.children && handleDropdownEnter(navItem.label)}
                onMouseLeave={navItem.children ? handleDropdownLeave : undefined}
              >
                <Link
                  href={navItem.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveDropdown(null);
                  }}
                  className={`group relative flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive(navItem.href)
                      ? "bg-primary-50 text-primary-600 font-semibold"
                      : "text-zinc-600 hover:bg-primary-50 hover:text-primary-600"
                  }`}
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
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {navItem.children && activeDropdown === navItem.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className={`absolute top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-zinc-100 bg-white py-2 shadow-[0_12px_40px_rgba(0,0,0,0.1)] ${
                        navItem.label === "Services" ? "right-0" : "left-0"
                      }`}
                      onMouseEnter={() => handleDropdownEnter(navItem.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {navItem.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => {
                            setOpen(false);
                            setActiveDropdown(null);
                          }}
                          className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                            childActive(child.href)
                              ? "bg-primary-50 text-primary-600 font-semibold"
                              : "text-zinc-600 hover:bg-primary-50 hover:text-primary-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* Contact button — right */}
        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(0,102,204,0.3)] transition-all duration-300 hover:brightness-110 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="cursor-pointer rounded-lg border border-zinc-200 p-2 text-zinc-600 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
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
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-zinc-100 lg:hidden"
            style={{ background: "rgba(255,255,255,0.99)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((navItem) => (
                <div key={navItem.label}>
<Link
                      href={navItem.href}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`block w-full cursor-pointer rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                        navItem.children
                          ? isActive(navItem.href)
                            ? "text-primary-600 font-semibold"
                            : "text-zinc-900 font-semibold"
                          : isActive(navItem.href)
                          ? "bg-primary-50 text-primary-600 font-semibold"
                          : "text-zinc-600 hover:bg-primary-50 hover:text-primary-600"
                      }`}
                    >
                    {navItem.label}
                  </Link>
                  {navItem.children && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {navItem.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`cursor-pointer rounded-lg px-3 py-2 text-[13px] transition-colors ${
                            childActive(child.href)
                              ? "bg-primary-50 text-primary-600 font-semibold"
                              : "text-zinc-500 hover:bg-primary-50 hover:text-primary-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
