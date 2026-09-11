"use client";

import React, { useEffect, useState } from "react";
import { caseStudies } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import { useSectionVisibility } from "@/components/providers/SmoothScrollProvider";
import {
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

export const CaseStudies: React.FC = () => {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string>(
    "saas-frontend-architecture"
  );

  const [isPaused, setIsPaused] = useState(false);

  const { ref: sectionRef, isInView } = useSectionVisibility<HTMLElement>();

  /**
   * Auto-switch case studies only when section is visible/near viewport.
   */
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setActiveCaseStudyId((prev) => {
        const currentIndex = caseStudies.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % caseStudies.length;
        return caseStudies[nextIndex].id;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, isInView, activeCaseStudyId, caseStudies]);

  const handleStudySelect = (id: string) => {
    if (id === activeCaseStudyId) return;
    setActiveCaseStudyId(id);
  };

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Architectural Deep Dives"
          title="Engineering"
          gradientTitle="Case Studies"
          description="Detailed breakdowns of system trade-offs, architecture decisions, and measurable production outcomes."
        />

        {/* Tab Selector */}
        <div
          role="tablist"
          aria-label="Engineering Case Studies"
          className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
        >
          {caseStudies.map((study) => {
            const isActive = activeCaseStudyId === study.id;

            return (
              <button
                type="button"
                key={study.id}
                role="tab"
                id={`case-study-tab-${study.id}`}
                aria-selected={isActive}
                aria-controls={`case-study-panel-${study.id}`}
                onClick={() => handleStudySelect(study.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left sm:text-center transition-all duration-200 border cursor-pointer max-w-sm ${
                  isActive
                    ? "bg-[#1677FF] text-white border-[#1677FF] shadow-po-md font-semibold ring-1 ring-[#1677FF]"
                    : "bg-[#F4FAFF] text-[#0A1235] border-[#E5EDF7] hover:bg-white hover:border-[#1677FF]/40 shadow-sm"
                }`}
              >
                <div className="flex items-center sm:justify-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#1677FF]/10 text-[#1677FF]"
                    }`}
                  >
                    CASE STUDY {study.number}
                  </span>
                </div>

                <h3 className="text-xs font-bold leading-snug line-clamp-2">
                  {study.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        {caseStudies.map((study) => {
          if (study.id !== activeCaseStudyId) return null;

          return (
            <FadeInView key={study.id}>
              <div
                role="tabpanel"
                id={`case-study-panel-${study.id}`}
                aria-labelledby={`case-study-tab-${study.id}`}
                className="rounded-2xl bg-[#F4FAFF] border border-[#E5EDF7] p-6 sm:p-8 md:p-10 shadow-po-md"
              >
                {/* Header info */}
                <div className="pb-6 border-b border-[#E5EDF7] mb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#1677FF] bg-[#1677FF]/10 px-2.5 py-1 rounded">
                      CASE STUDY {study.number}
                    </span>

                    <span className="text-xs font-mono text-[#5D6C87] bg-white border border-[#E5EDF7] px-2.5 py-1 rounded">
                      Context: {study.context}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1235] tracking-tight mb-2">
                    {study.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#1677FF] font-medium">
                    {study.tagline}
                  </p>
                </div>

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 rounded-xl bg-white border border-[#E5EDF7] shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-rose-600 font-bold">
                      <AlertCircle className="w-4 h-4" />
                      <span>The Engineering Challenge</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5D6C87] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-[#E5EDF7] shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-emerald-600 font-bold">
                      <Lightbulb className="w-4 h-4" />
                      <span>The Architectural Solution</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5D6C87] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Breakdown & Engineering Decisions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                  <div className="lg:col-span-6 p-6 rounded-xl bg-white border border-[#E5EDF7]">
                    <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A1235] mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#1677FF]" />
                      Architecture Implementation
                    </h4>

                    <div className="space-y-3">
                      {study.architectureBreakdown.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5D6C87]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] mt-2 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 rounded-xl bg-white border border-[#E5EDF7]">
                    <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A1235] mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#1677FF]" />
                      Key Engineering Decisions &amp; Trade-offs
                    </h4>

                    <div className="space-y-3">
                      {study.engineeringDecisions.map((decision, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5D6C87]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                          <span>{decision}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Measurable Results & Learnings */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#050A35] to-[#0B1554] text-white">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#00CFFF] mb-3">
                    Production Outcomes &amp; Key Learnings
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.resultsAndLearnings.map((result, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-[#E4EDFB] leading-relaxed font-mono"
                      >
                        ✓ {result}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-[#00CFFF] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
};