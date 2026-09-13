"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SignaturePipeline } from "@/components/animations/SignaturePipeline";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F4FAFF] via-white to-white"
    >
      {/* Background Grid and Soft Radial Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#1677FF]/10 via-[#00CFFF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex max-w-full items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4FAFF] border border-[#E5EDF7] shadow-sm text-[11px] sm:text-xs font-mono font-medium text-[#0A1235] mb-6 text-center"
          >
            <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0 animate-pulse" />
            <span className="text-center leading-snug">
              Available for Full-Stack &amp; AI Roles
            </span>
          </motion.div>

          {/* Headline - Responsive on all screen sizes with ample descender padding */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1235] leading-[1.22] sm:leading-[1.18] pb-2 mb-4 max-w-4xl mx-auto"
          >
            Software Engineer building{" "}
            <span className="text-gradient-primary inline-block pb-1">
              Full-Stack &amp; AI-powered
            </span>{" "}
            products.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#5D6C87] leading-relaxed max-w-3xl mx-auto mb-8 font-normal"
          >
            {personalInfo.positioning}
          </motion.p>

          {/* Action Buttons & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects">
              <Button
                variant="cta"
                size="lg"
                className="font-semibold shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="#resume">
              <Button variant="outline" size="lg" className="font-semibold">
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </Button>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-[#E5EDF7]">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg border border-[#E5EDF7] bg-white flex items-center justify-center text-[#1677FF] hover:bg-[#1677FF] hover:text-white hover:border-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg border border-[#E5EDF7] bg-white flex items-center justify-center text-[#1677FF] hover:bg-[#1677FF] hover:text-white hover:border-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-[#E5EDF7] bg-white flex items-center justify-center text-[#1677FF] hover:bg-[#1677FF] hover:text-white hover:border-[#1677FF] focus:outline-none focus:ring-2 focus:ring-[#1677FF] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Signature Full-Stack & AI Pipeline Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <SignaturePipeline />
        </motion.div>

        {/* Verified Technical Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-white border border-[#E5EDF7] shadow-po-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#1677FF] mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>EXPERIENCE</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight">
              4+ Years
            </div>
            <p className="text-xs text-[#5D6C87] mt-0.5">
              Production Engineering
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5EDF7] shadow-po-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#1677FF] mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DELIVERED</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight">
              150+ Sites
            </div>
            <p className="text-xs text-[#5D6C87] mt-0.5">
              Managed &amp; Optimized
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5EDF7] shadow-po-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#00CFFF] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>EXECUTION</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight">
              15 Days
            </div>
            <p className="text-xs text-[#5D6C87] mt-0.5">
              Full E-Commerce Turnaround
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5EDF7] shadow-po-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-600 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>OPTIMIZATION</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight">
              20%+
            </div>
            <p className="text-xs text-[#5D6C87] mt-0.5">
              Speed &amp; Latency Reduction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
