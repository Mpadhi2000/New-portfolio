import React from "react";
import { achievementsData } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/animations/FadeInView";
import { CheckCircle, ShieldCheck, Zap, Award } from "lucide-react";

export const Achievements: React.FC = () => {
  const iconList = [Award, ShieldCheck, Zap, CheckCircle];

  return (
    <section className="py-20 md:py-28 bg-[#F4FAFF] relative overflow-hidden border-t border-[#E5EDF7]">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Verified Track Record"
          title="Measurable"
          gradientTitle="Engineering Outcomes"
          description="Factual, verified achievements delivered across production web applications, SaaS platforms, and security initiatives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = iconList[idx] || Award;

            return (
              <FadeInView key={item.id} delay={idx * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#E5EDF7] shadow-po-sm hover:shadow-po-md hover:border-[#1677FF]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7] text-[#1677FF] group-hover:bg-[#1677FF] group-hover:text-white group-hover:border-[#1677FF] transition-all flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0A1235] tracking-tight mb-2 group-hover:text-[#1677FF] transition-colors">
                      {item.metric}
                    </div>

                    <h4 className="text-sm font-bold text-[#0A1235] mb-2 leading-snug">
                      {item.label}
                    </h4>

                    <p className="text-xs text-[#5D6C87] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5EDF7] flex items-center gap-1.5 text-[11px] font-mono text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Verified Production Outcome</span>
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
