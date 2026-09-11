"use client";

import React, { useState } from "react";
import { aboutContent } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Code,
  Server,
  Terminal,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export const About: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("saas-ai");

  const stepIcons = [Code, Server, Terminal, Sparkles];

  const activeStep =
    aboutContent.evolutionSteps.find((step) => step.id === activeTabId) ||
    aboutContent.evolutionSteps[3];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#F4FAFF] relative overflow-hidden border-t border-[#E5EDF7]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={aboutContent.eyebrow}
          title="Engineering Mindset &"
          gradientTitle="Technical Progression"
          description="A systematic career evolution from performant web platforms to scalable full-stack SaaS architecture and intelligent autonomous AI systems."
        />

        {/* Vertical Tabs Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Vertical Step Tabs List - tight, balanced spacing */}
          <div
            role="tablist"
            aria-label="Engineering Evolution Phases"
            className="lg:col-span-5 flex flex-col gap-2 sm:gap-2.5"
          >
            {aboutContent.evolutionSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = activeTabId === step.id;

              return (
                <button
                  key={step.id}
                  role="tab"
                  id={`tab-${step.id}`}
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-${step.id}`}
                  onClick={() => setActiveTabId(step.id)}
                  className={`w-full p-3 sm:p-3.5 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#1677FF] text-white border-[#1677FF] shadow-po-md font-semibold"
                      : "bg-white text-[#0A1235] border-[#E5EDF7] hover:bg-[#F4FAFF] hover:border-[#1677FF]/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors border ${
                        isSelected
                          ? "bg-white/15 border-white/30 text-white"
                          : "bg-[#F4FAFF] border-[#E5EDF7] text-[#1677FF] group-hover:bg-[#1677FF] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <span
                        className={`text-[10px] font-mono block leading-none mb-1 ${
                          isSelected ? "text-[#00CFFF]" : "text-[#5D6C87]"
                        }`}
                      >
                        STEP {step.stepNumber}
                      </span>
                      <h4
                        className={`text-xs sm:text-sm md:text-base font-bold tracking-tight leading-tight ${
                          isSelected ? "text-white" : "text-[#0A1235]"
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-white translate-x-1"
                        : "text-[#5D6C87] group-hover:text-[#1677FF] group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Content Panel */}
          <div className="lg:col-span-7">
            <FadeInView key={activeStep.id}>
              <div
                role="tabpanel"
                id={`tabpanel-${activeStep.id}`}
                aria-labelledby={`tab-${activeStep.id}`}
                className="h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#E5EDF7] shadow-po-md flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5EDF7] mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-xs font-mono font-semibold">
                      <span>PHASE {activeStep.stepNumber}</span>
                    </div>

                    <span className="text-xs font-mono text-[#5D6C87]">
                      {activeStep.title}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight mb-1">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#1677FF] mb-4">
                    {activeStep.tagline}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-[#5D6C87] leading-relaxed mb-6">
                    {activeStep.narrative}
                  </p>

                  {/* Core Focus Areas */}
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A1235] mb-3">
                    Architectural Ownership &amp; Key Focus:
                  </h4>

                  <div className="space-y-2.5 mb-6">
                    {activeStep.focusAreas.map((focus, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5D6C87]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Pill Tags */}
                <div className="pt-4 border-t border-[#E5EDF7]">
                  <span className="text-[11px] font-mono text-[#5D6C87] uppercase block mb-2">
                    Primary Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStep.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#F4FAFF] text-[#0A1235] border border-[#E5EDF7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
};
