"use client";

import React from "react";
import { personalInfo, experienceData, skillGroups } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Download,
  FileText,
  ExternalLink,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Curriculum Vitae"
          title="Resume &"
          gradientTitle="Career Credentials"
          description="A consolidated summary of professional roles, core engineering competencies, and technical background."
        />

        <div className="max-w-4xl mx-auto">
          {/* Top Download & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0A1235]">
                  Mayank Padhi Resume
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/Mayank_Padhi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button variant="outline" size="sm" className="w-auto">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View PDF</span>
                </Button>
              </a>

              <a
                href="/Mayank_Padhi_Resume.pdf"
                download="Mayank_Padhi_Resume.pdf"
              >
                <Button
                  variant="cta"
                  size="sm"
                  className="font-semibold shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Interactive Resume Sheet View */}
          <FadeInView>
            <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E5EDF7] shadow-po-md print:border-none print:shadow-none print:p-0">
              {/* Header Info */}
              <div className="border-b border-[#E5EDF7] pb-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#0A1235] tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1677FF] mt-1">
                      {personalInfo.tagline}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-[#5D6C87] sm:text-right space-y-1">
                    <p>{personalInfo.location}</p>
                    <p>{personalInfo.email}</p>
                    <p>{personalInfo.phone}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5D6C87] leading-relaxed mt-4">
                  {personalInfo.positioning}
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1677FF] mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Work Experience
                </h4>

                <div className="space-y-6">
                  {experienceData.map((exp) => (
                    <div
                      key={exp.id}
                      className="border-l-2 border-[#1677FF]/30 pl-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h5 className="font-bold text-sm text-[#0A1235]">
                          {exp.role}{" "}
                          <span className="text-[#1677FF]">
                            @ {exp.company}
                          </span>
                        </h5>
                        <span className="text-xs font-mono text-[#5D6C87]">
                          {exp.period} · {exp.location}
                        </span>
                      </div>
                      <ul className="space-y-1.5 my-2">
                        {exp.responsibilities.slice(0, 3).map((r, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#5D6C87] flex items-start gap-2"
                          >
                            <span className="text-[#1677FF] font-bold">›</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technical Domains */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#1677FF] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Core Technical Domains
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5D6C87]">
                  <div className="p-3 rounded-lg bg-[#F4FAFF] border border-[#E5EDF7]">
                    <span className="font-bold text-[#0A1235] block mb-1">
                      Frontend &amp; UI Architecture:
                    </span>
                    <span>
                      React.js, Next.js (App Router), TypeScript, JavaScript
                      (ES6+), Tailwind CSS, SCSS, Web Vitals.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F4FAFF] border border-[#E5EDF7]">
                    <span className="font-bold text-[#0A1235] block mb-1">
                      Backend, APIs &amp; Databases:
                    </span>
                    <span>
                      FastAPI, Python, Node.js, Express.js, REST APIs, JWT,
                      PostgreSQL, pgvector, Redis, MongoDB, MySQL.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F4FAFF] border border-[#E5EDF7]">
                    <span className="font-bold text-[#0A1235] block mb-1">
                      AI &amp; GenAI Engineering:
                    </span>
                    <span>
                      Multi-Agent Systems, RAG Pipelines, AI Gateway, Vector
                      Search, MCP Protocol, Tool Calling, Prompt Tuning.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F4FAFF] border border-[#E5EDF7]">
                    <span className="font-bold text-[#0A1235] block mb-1">
                      DevOps, Cloud &amp; Security:
                    </span>
                    <span>
                      Docker, Docker Compose, Linux, Nginx, SSL, CI/CD
                      Pipelines, Cloudflare WAF, DDoS Mitigation.
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Highlights */}
              <div className="pt-6 border-t border-[#E5EDF7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5D6C87]">
                <span>150+ Production Websites Managed</span>
                <span>15-Day E-Commerce Turnaround</span>
                <span>DDoS Mitigation across 15+ Domains</span>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};
