"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, personalInfo } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, FileText, ArrowUpRight, Phone } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      /**
       * Simple active section detection.
       * This only updates navbar state.
       * It does not scroll the page.
       */
      const sections = navLinks.map((link) =>
        link.href.replace("#", "").trim(),
      );

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);

        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5EDF7] shadow-[0_4px_20px_rgba(5,10,53,0.04)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          {isLoading ? (
            <div className="h-10 sm:h-11 w-32 sm:w-36 rounded-lg bg-[#E7EFF8] animate-shimmer" />
          ) : (
            <Link
              href="#home"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#1677FF] rounded-lg p-1"
              aria-label={`${personalInfo.name} Home`}
            >
              <div className="h-11 sm:h-12 md:h-13 w-auto aspect-[555/377] flex items-center justify-center transition-transform group-hover:scale-105">
                <Logo className="h-full w-auto text-[#1677FF] transition-colors group-hover:text-[#0E5FD8]" />
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#F4FAFF]/80 border border-[#E5EDF7] px-3 py-1.5 rounded-full backdrop-blur-sm min-h-[38px]">
            {isLoading ? (
              <div className="flex items-center gap-2 px-1">
                {[52, 60, 64, 54, 72, 56, 80, 56, 52].map((width, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${width}px` }}
                    className="h-5 rounded-full bg-[#E7EFF8] animate-shimmer"
                  />
                ))}
              </div>
            ) : (
              navLinks.map((link) => {
                const sectionId = link.href.replace("#", "").trim();
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={sectionId}
                    href={`#${sectionId}`}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#1677FF] text-white shadow-sm"
                        : "text-[#5D6C87] hover:text-[#0A1235] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })
            )}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="h-7 w-20 rounded-md bg-[#E7EFF8] animate-shimmer" />
                <div className="h-8 w-24 rounded-lg bg-[#E7EFF8] animate-shimmer" />
              </div>
            ) : (
              <>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5D6C87] hover:text-[#1677FF] transition-colors px-3 py-2 rounded-md hover:bg-[#F4FAFF]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>

                <a href="#contact">
                  <Button
                    variant="cta"
                    size="sm"
                    className="font-semibold shadow-sm"
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-8 w-18 rounded-lg bg-[#E7EFF8] animate-shimmer sm:hidden" />
                <div className="h-9 w-9 rounded-lg bg-[#E7EFF8] animate-shimmer" />
              </div>
            ) : (
              <>
                <a
                  href="#contact"
                  aria-label="Contact"
                  className="sm:hidden"
                >
                  <Button
                    variant="cta"
                    size="sm"
                    className="w-8 px-0"
                    aria-hidden="true"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                  className="p-2 rounded-lg text-[#0A1235] hover:bg-[#F4FAFF] border border-[#E5EDF7] transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-xl border-b border-[#E5EDF7] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "").trim();
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={sectionId}
                  href={`#${sectionId}`}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#1677FF] text-white"
                      : "text-[#0A1235] hover:bg-[#F4FAFF]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#E5EDF7] flex flex-col gap-2">
              <a
                href="#resume"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-[#0A1235] bg-[#F4FAFF] border border-[#E5EDF7] rounded-lg"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>

              <a href="#contact" onClick={closeMobileMenu} className="w-full">
                <Button
                  variant="cta"
                  size="md"
                  className="w-full font-semibold"
                >
                  Let&apos;s Build Something Great
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
