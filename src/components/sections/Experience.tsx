import React from "react";
import { experienceData } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeInView } from "@/components/animations/FadeInView";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Career Timeline"
          title="Production Experience &"
          gradientTitle="Engineering Ownership"
          description="A track record of designing backend logic, architecting frontend platforms, and shipping scalable SaaS products."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Central connecting line for desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1677FF] via-[#00CFFF] to-[#E5EDF7]" />

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <FadeInView key={exp.id} delay={idx * 0.1}>
                <div className="relative flex flex-col md:flex-row items-start gap-6 group">
                  {/* Timeline Icon Node */}
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white border-2 border-[#1677FF] items-center justify-center text-[#1677FF] shadow-po-md shrink-0 relative z-10 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`w-full p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                      exp.isCurrent
                        ? "bg-gradient-to-br from-white to-[#F4FAFF] border-[#1677FF]/40 shadow-po-md"
                        : "bg-white border-[#E5EDF7] shadow-po-sm hover:shadow-po-md hover:border-[#1677FF]/30"
                    }`}
                  >
                    {/* Header: Role, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-[#0A1235] tracking-tight">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <Badge variant="primary" size="sm">
                              CURRENT
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-[#1677FF]">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#5D6C87]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <ul className="space-y-2.5 my-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5D6C87] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5EDF7]">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-[#F4FAFF] text-[#0A1235] border border-[#E5EDF7]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
