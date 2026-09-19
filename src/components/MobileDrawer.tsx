"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: ServiceChild[];
}

const navItems: NavItem[] = [
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
  { label: "Products", href: "/#solutions" },
  { label: "Industries", href: "/industries" },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background page scrolling while the drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Automatically close the drawer ONLY when pathname actually changes
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    if (href.startsWith("/#") && pathname === "/") {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  const isLinkActive = (href: string) => {
    const clean = href.split("#")[0];
    if (!clean) return false;
    if (clean === "/") return pathname === "/" && !href.includes("#solutions");
    if (clean === "/services" && pathname.startsWith("/services")) return true;
    return pathname === clean;
  };

  const isChildActive = (href: string) => {
    return pathname === href;
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden" aria-labelledby="mobile-nav-title">
          {/* Dark semi-transparent backdrop overlay */}
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {/* White sliding drawer panel from the right */}
          <motion.aside
            key="mobile-drawer-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-y-0 right-0 flex h-full w-[82vw] max-w-[380px] flex-col bg-white shadow-[0_0_50px_rgba(0,0,0,0.25)] overflow-y-auto overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header: Logo and large top-right close button */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 sm:px-8">
              <Link
                href="/#home"
                onClick={() => handleNavClick("/#home")}
                aria-label="CodQor Technologies Home"
                className="shrink-0"
              >
                <Logo />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 cursor-pointer"
              >
                <FiX size={26} className="text-zinc-700" />
              </button>
            </div>

            {/* Navigation items matching the official navbar */}
            <nav className="flex-1 px-6 py-3 sm:px-8" id="mobile-nav-title">
              <ul className="divide-y divide-zinc-100">
                {navItems.map((item) => {
                  const active = isLinkActive(item.href);

                  // Items with dropdown children (e.g. Services)
                  if (item.children) {
                    return (
                      <li key={item.label} className="py-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`flex-1 py-3 text-base sm:text-lg font-medium transition-colors ${
                              active
                                ? "text-primary-600 font-semibold"
                                : "text-zinc-800 hover:text-primary-600 active:text-primary-700"
                            }`}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setServicesExpanded((prev) => !prev)}
                            aria-expanded={servicesExpanded}
                            aria-label={`Toggle ${item.label} submenu`}
                            className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 transition-colors"
                          >
                            <FiChevronDown
                              size={20}
                              className={`transition-transform duration-300 ${
                                servicesExpanded ? "rotate-180 text-primary-600" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* Expandable Services Submenu */}
                        <AnimatePresence>
                          {servicesExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden pl-3 pr-1 pt-1 pb-3"
                            >
                              <div className="flex flex-col gap-1 border-l-2 border-primary-100 pl-3">
                                <Link
                                  href="/services"
                                  onClick={() => handleNavClick("/services")}
                                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                                >
                                  <span>Explore All Services</span>
                                  <FiArrowRight size={13} />
                                </Link>
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => handleNavClick(child.href)}
                                    className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                                      isChildActive(child.href)
                                        ? "bg-primary-50 text-primary-600 font-semibold"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 active:text-primary-600"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  // Standard menu items (Home, About Us, Products, Industries)
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`block py-4 text-base sm:text-lg font-medium transition-colors ${
                          active
                            ? "text-primary-600 font-semibold"
                            : "text-zinc-800 hover:text-primary-600 active:text-primary-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Contact Us Button — Matches the desktop CTA button */}
            <div className="border-t border-zinc-100 px-6 py-6 sm:px-8 bg-zinc-50/50">
              <Link
                href="/contact"
                onClick={() => handleNavClick("/contact")}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,102,204,0.3)] transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
