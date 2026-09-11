import React from "react";
import { skillGroups } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Layout,
  Server,
  Database,
  Bot,
  Cloud,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    frontend: Layout,
    backend: Server,
    databases: Database,
    "ai-genai": Bot,
    "cloud-devops": Cloud,
    "engineering-practices": Wrench,
    secondary: Layers,
  };

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-[#F4FAFF] relative overflow-hidden border-t border-[#E5EDF7]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Domain-Organized"
          gradientTitle="Engineering Skills"
          description="A systematic breakdown of tools, architectures, and technologies I apply in production across full-stack and AI environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = iconMap[group.id] || Layers;
            const isAI = group.id === "ai-genai";

            return (
              <FadeInView key={group.id} delay={idx * 0.08}>
                <div
                  className={`h-full rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    isAI
                      ? "bg-[#050A35] text-white border-[rgba(0,207,255,0.3)] shadow-[0_10px_30px_rgba(5,10,53,0.3)] hover:border-[#00CFFF]"
                      : "bg-white text-[#0A1235] border-[#E5EDF7] shadow-po-sm hover:shadow-po-md hover:border-[#1677FF]/40"
                  }`}
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
                          isAI
                            ? "bg-gradient-to-br from-[#1677FF] to-[#00CFFF] text-white border-[#00CFFF]/40 shadow-[0_0_15px_rgba(0,207,255,0.25)]"
                            : "bg-[#F4FAFF] text-[#1677FF] border-[#E5EDF7]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {isAI && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#00CFFF] bg-[#0B1554] px-2 py-0.5 rounded border border-[#00CFFF]/30">
                          <Sparkles className="w-3 h-3" />
                          PRIMARY FOCUS
                        </span>
                      )}
                    </div>

                    <h3
                      className={`text-lg font-bold tracking-tight mb-1.5 ${
                        isAI ? "text-white" : "text-[#0A1235]"
                      }`}
                    >
                      {group.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-5 ${
                        isAI ? "text-[#A9B8D8]" : "text-[#5D6C87]"
                      }`}
                    >
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Pill Cloud */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-current/10">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md transition-colors border ${
                          isAI
                            ? "bg-[#0B1554] text-[#E4EDFB] border-white/10 hover:border-[#00CFFF]/50"
                            : "bg-[#F4FAFF] text-[#0A1235] border-[#E5EDF7] hover:border-[#1677FF]/40 hover:bg-white"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
};
