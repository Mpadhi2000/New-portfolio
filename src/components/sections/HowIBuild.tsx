"use client";

import React, { useEffect, useState } from "react";
import { buildProcessSteps } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import { useSectionVisibility } from "@/components/providers/SmoothScrollProvider";
import {
  CheckCircle,
  FileCode,
  ArrowRight,
  Workflow,
} from "lucide-react";

export const HowIBuild: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { ref: sectionRef, isInView } = useSectionVisibility<HTMLElement>();

  /**
   * Auto-switch process phases only when section is visible/near viewport.
   */
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % buildProcessSteps.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, isInView, activeStepIndex, buildProcessSteps]);

  const handleStepSelect = (idx: number) => {
    setActiveStepIndex(idx);
  };

  const activeStep = buildProcessSteps[activeStepIndex];

  return (
    <section
      id="how-i-build"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#F4FAFF] relative overflow-hidden border-t border-[#E5EDF7]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Engineering Process"
          title="How I Build"
          gradientTitle="Production Software"
          description="A disciplined, end-to-end engineering methodology from requirement deconstruction to resilient cloud deployment."
        />

        {/* Phase Step Selector Navigation */}
        <div
          role="tablist"
          aria-label="Engineering methodology phases"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 mb-8"
        >
          {buildProcessSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <button
                type="button"
                key={step.step}
                role="tab"
                id={`how-i-build-tab-${step.step}`}
                aria-selected={isActive}
                aria-controls={`how-i-build-panel-${step.step}`}
                onClick={() => handleStepSelect(idx)}
                className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 border cursor-pointer min-h-[68px] sm:min-h-[74px] flex flex-col justify-between ${
                  isActive
                    ? "bg-[#1677FF] text-white border-[#1677FF] shadow-po-md font-semibold ring-1 ring-[#1677FF]"
                    : "bg-white text-[#0A1235] border-[#E5EDF7] hover:bg-[#F4FAFF] hover:border-[#1677FF]/40 shadow-sm"
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-bold block ${
                    isActive ? "text-[#E4EDFB]" : "text-[#5D6C87]"
                  }`}
                >
                  PHASE {step.step}
                </span>

                <span
                  className={`text-[11px] sm:text-xs font-bold block leading-snug 2xl:whitespace-nowrap ${
                    isActive ? "text-white" : "text-[#0A1235]"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <FadeInView key={activeStep.step}>
          <div
            role="tabpanel"
            id={`how-i-build-panel-${activeStep.step}`}
            aria-labelledby={`how-i-build-tab-${activeStep.step}`}
            className="rounded-2xl bg-white border border-[#E5EDF7] p-6 sm:p-8 md:p-10 shadow-po-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stage Info & Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-xs font-mono font-semibold mb-3">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>
                    PHASE {activeStep.step} — {activeStep.title.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1235] tracking-tight mb-2">
                  Phase {activeStep.step} — {activeStep.title}
                </h3>

                <p className="text-sm font-semibold text-[#1677FF] mb-4">
                  {activeStep.subtitle}
                </p>

                <p className="text-sm md:text-base text-[#5D6C87] leading-relaxed mb-6">
                  {activeStep.description}
                </p>

                {/* Checklist of actions */}
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A1235] mb-3">
                  Engineering Activities:
                </h4>

                <div className="space-y-2.5">
                  {activeStep.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5D6C87]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Artifacts & Outputs Box */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7]">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A1235] mb-4 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#1677FF]" />
                  Produced Artifacts &amp; Deliverables
                </h4>

                <div className="space-y-2 mb-6">
                  {activeStep.artifacts.map((artifact, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-2 text-xs font-mono p-2.5 rounded-lg bg-white border border-[#E5EDF7] text-[#0A1235]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                      <span>{artifact}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5EDF7] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5D6C87]">
                    Step {activeStepIndex + 1} of {buildProcessSteps.length}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex(
                        (activeStepIndex + 1) % buildProcessSteps.length
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677FF] hover:underline cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};