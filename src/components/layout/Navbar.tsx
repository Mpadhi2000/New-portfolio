"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, personalInfo } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
          {/* Brand Logo - Enlarged cleanly without name text */}
          <Link
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#1677FF] rounded-lg p-1"
            aria-label="Mayank Padhi Home"
          >
            <div className="h-11 sm:h-12 md:h-13 w-auto aspect-[1024/672] flex items-center justify-center transition-transform group-hover:scale-105">
              <Logo className="h-full w-auto text-[#1677FF] transition-colors group-hover:text-[#0E5FD8]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#F4FAFF]/80 border border-[#E5EDF7] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#1677FF] text-white shadow-sm"
                      : "text-[#5D6C87] hover:text-[#0A1235] hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
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
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a href="#contact" className="sm:hidden">
              <Button variant="cta" size="sm">
                Contact
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-[#0A1235] hover:bg-[#F4FAFF] border border-[#E5EDF7] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5EDF7] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
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
