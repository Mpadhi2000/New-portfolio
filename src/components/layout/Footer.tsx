import React from "react";
import Link from "next/link";
import { personalInfo, navLinks } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04082A] text-white border-t border-[rgba(22,119,255,0.2)] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#1677FF]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-7 w-auto aspect-[1024/672] flex items-center justify-center">
                <Logo className="h-full w-auto text-[#00CFFF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-[#00CFFF]">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A9B8D8] leading-relaxed max-w-md mb-5">
              Full-Stack Software Engineer building production-ready SaaS and
              AI-powered products across React, Next.js, Node.js, Python, and
              cloud infrastructure.
            </p>

            {/* Connect / Find me online */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#00CFFF] font-semibold block mb-2">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1677FF] hover:text-white hover:border-[#1677FF] hover:bg-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1677FF] hover:text-white hover:border-[#1677FF] hover:bg-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1677FF] hover:text-white hover:border-[#1677FF] hover:bg-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00CFFF] mb-3 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-[#A9B8D8]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white hover:translate-x-0.5 transition-all py-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Copyright Bar */}
        <div className="pt-6 text-center text-xs text-[#8FA1C4]">
          <p>© {new Date().getFullYear()} Mayank Padhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
