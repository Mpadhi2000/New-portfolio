"use client";

import React, { useEffect, useState } from "react";
import { aiLabProjects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import { useSectionVisibility } from "@/components/providers/SmoothScrollProvider";
import { ShieldCheck, CheckCircle2, Terminal } from "lucide-react";

export const AILab: React.FC = () => {
  const [selectedAIId, setSelectedAIId] = useState<string>("ai-gateway");
  const [isPaused, setIsPaused] = useState(false);

  const { ref: sectionRef, isInView } = useSectionVisibility<HTMLElement>();

  /**
   * Auto-switch AI Lab tabs only when section is visible/near viewport.
   * This prevents offscreen content height changes from moving the page.
   */
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setSelectedAIId((prev) => {
        const currentIndex = aiLabProjects.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % aiLabProjects.length;
        return aiLabProjects[nextIndex].id;
      });
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, isInView, selectedAIId, aiLabProjects]);

  const handleSelect = (id: string) => {
    if (id === selectedAIId) return;
    setSelectedAIId(id);
  };

  const selectedProject =
    aiLabProjects.find((p) => p.id === selectedAIId) || aiLabProjects[0];

  return (
    <section
      id="ai-lab"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#050A35] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradients and technical grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#1677FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#00CFFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          theme="dark"
          eyebrow="AI / GenAI Engineering Lab"
          title="Applied AI Systems &"
          gradientTitle="Agent Architectures"
          description="A dedicated exploration of production multi-agent systems, hybrid RAG retrieval pipelines, enterprise AI gateways, and MCP tool protocols."
        />

        {/* Project Selector Cards */}
        <div
          role="tablist"
          aria-label="Applied AI Systems Projects"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {aiLabProjects.map((item) => {
            const isSelected = selectedAIId === item.id;

            return (
              <button
                type="button"
                key={item.id}
                role="tab"
                id={`ai-tab-${item.id}`}
                aria-selected={isSelected}
                aria-controls={`ai-panel-${item.id}`}
                onClick={() => handleSelect(item.id)}
                className={`p-5 rounded-xl text-left transition-all duration-200 border cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0B1554] border-[#00CFFF] shadow-[0_0_25px_rgba(0,207,255,0.25)] scale-102"
                    : "bg-[#080E38]/80 border-white/10 hover:border-white/20 hover:bg-[#0B1554]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#1677ff] text-[#ffffff] border border-[#1677ff] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white tracking-tight leading-snug line-clamp-2 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A9B8D8] line-clamp-2">
                  {item.description}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1677FF] to-[#00CFFF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Console */}
        <FadeInView key={selectedProject.id}>
          <div
            role="tabpanel"
            id={`ai-panel-${selectedProject.id}`}
            aria-labelledby={`ai-tab-${selectedProject.id}`}
            className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#080E38] border border-[rgba(0,207,255,0.25)] shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00CFFF] animate-pulse" />

                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#1677ff] text-[#ffffff] border border-[#1677ff] shadow-sm">
                    {selectedProject.badge.toUpperCase()} ARCHITECTURE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B1554] text-[#E4EDFB] border border-[#00CFFF]/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-[#A9B8D8] leading-relaxed my-6">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Architecture Data Flow Box */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#050A35] border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#00CFFF] font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>Execution &amp; Data Pipeline Topology</span>
                </div>

                <div className="space-y-2">
                  {selectedProject.architecture.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white"
                    >
                      <span className="w-5 h-5 rounded bg-[#1677FF]/30 text-[#00CFFF] flex items-center justify-center font-bold text-[11px] shrink-0">
                        {idx + 1}
                      </span>

                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="lg:col-span-6 p-5 rounded-xl bg-[#050A35] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Key Engineering Capabilities</span>
                  </div>

                  <div className="space-y-3">
                    {selectedProject.keyCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A9B8D8] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00CFFF] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A9B8D8]">
                  <span>Deterministic Tool-Calling &amp; Validation</span>
                  <span className="text-[#00CFFF]">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};