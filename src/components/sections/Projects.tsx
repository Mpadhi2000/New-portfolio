"use client";

import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/data";
import { ProjectCategory } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeInView } from "@/components/animations/FadeInView";
import { useSectionVisibility } from "@/components/providers/SmoothScrollProvider";
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Server,
  Cpu,
  CheckCircle,
} from "lucide-react";

const categories: ProjectCategory[] = [
  "All",
  "AI & GenAI",
  "Full-Stack SaaS",
  "Web & Platform",
];

const rotatingCategories: ProjectCategory[] = [
  "AI & GenAI",
  "Full-Stack SaaS",
  "Web & Platform",
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("AI & GenAI");

  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null
  );

  const [isPaused, setIsPaused] = useState(false);

  const { ref: sectionRef, isInView } = useSectionVisibility<HTMLElement>();

  /**
   * Auto-switch project category only when:
   * 1. User is not hovering/focusing the section.
   * 2. Section is near the viewport.
   * 3. User has not selected "All".
   *
   * This preserves automatic tab switching while preventing
   * offscreen height changes from moving the main page.
   */
  useEffect(() => {
    if (isPaused || !isInView || selectedCategory === "All") return;

    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIdx = rotatingCategories.indexOf(prev);
        const nextIdx =
          currentIdx === -1
            ? 0
            : (currentIdx + 1) % rotatingCategories.length;

        return rotatingCategories[nextIdx];
      });
    }, 5500);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, isInView, selectedCategory, rotatingCategories]);

  const handleCategorySelect = (cat: ProjectCategory) => {
    if (cat === selectedCategory) return;
    setSelectedCategory(cat);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Engineered for"
          gradientTitle="Performance & Scale"
          description="A selection of production-grade SaaS and AI applications demonstrating complete architectural ownership from API design to cloud deployment."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#1677FF] text-white shadow-sm font-semibold scale-105"
                  : "bg-[#F4FAFF] text-[#5D6C87] border border-[#E5EDF7] hover:bg-white hover:text-[#0A1235]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid / Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            const isAI = project.category === "AI & GenAI";

            return (
              <FadeInView key={project.id} delay={idx * 0.1}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isAI
                      ? "bg-gradient-to-b from-[#080E38] to-[#050A35] text-white border-[rgba(0,207,255,0.25)] shadow-[0_15px_40px_rgba(5,10,53,0.3)]"
                      : "bg-white text-[#0A1235] border-[#E5EDF7] shadow-po-sm hover:shadow-po-md hover:border-[#1677FF]/40"
                  }`}
                >
                  <div className="p-6 md:p-8">
                    {/* Header Row: Category Badge, Title, Links */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant={isAI ? "cyan" : "primary"} size="sm">
                            {project.category}
                          </Badge>

                          {project.featured && (
                            <Badge
                              variant={isAI ? "dark" : "secondary"}
                              size="sm"
                              className="font-mono"
                            >
                              <Sparkles className="w-3 h-3 text-[#1677FF] dark:text-[#00CFFF]" />
                              FEATURED SYSTEM
                            </Badge>
                          )}

                          {project.deliveryTime && (
                            <Badge
                              variant="success"
                              size="sm"
                              className="font-mono"
                            >
                              {project.deliveryTime}
                            </Badge>
                          )}
                        </div>

                        <h3
                          className={`text-2xl md:text-3xl font-bold tracking-tight ${
                            isAI ? "text-white" : "text-[#0A1235]"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p
                          className={`text-sm font-mono mt-1 ${
                            isAI ? "text-[#00CFFF]" : "text-[#1677FF]"
                          }`}
                        >
                          {project.subtitle}
                        </p>
                      </div>

                      {/* External Action Links */}
                      <div className="flex items-center gap-2 self-start">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border transition-colors ${
                              isAI
                                ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#00CFFF]"
                                : "bg-[#F4FAFF] border-[#E5EDF7] text-[#5D6C87] hover:text-[#0A1235] hover:bg-white"
                            }`}
                            aria-label="View Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border transition-colors ${
                              isAI
                                ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#00CFFF]"
                                : "bg-[#F4FAFF] border-[#E5EDF7] text-[#5D6C87] hover:text-[#0A1235] hover:bg-white"
                            }`}
                            aria-label="View Live Project"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm md:text-base leading-relaxed mb-6 ${
                        isAI ? "text-[#A9B8D8]" : "text-[#5D6C87]"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                            isAI
                              ? "bg-[#0B1554] text-[#E4EDFB] border-white/10"
                              : "bg-[#F4FAFF] text-[#0A1235] border-[#E5EDF7]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Problem vs Solution Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div
                        className={`p-4 rounded-xl border ${
                          isAI
                            ? "bg-[#050A35]/80 border-white/10"
                            : "bg-[#F4FAFF] border-[#E5EDF7]"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1.5 ${
                            isAI ? "text-[#00CFFF]" : "text-[#1677FF]"
                          }`}
                        >
                          Problem &amp; Context
                        </span>

                        <p
                          className={`text-xs md:text-sm leading-relaxed ${
                            isAI ? "text-[#A9B8D8]" : "text-[#5D6C87]"
                          }`}
                        >
                          {project.problem}
                        </p>
                      </div>

                      <div
                        className={`p-4 rounded-xl border ${
                          isAI
                            ? "bg-[#050A35]/80 border-white/10"
                            : "bg-[#F4FAFF] border-[#E5EDF7]"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1.5 ${
                            isAI ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        >
                          Architectural Solution
                        </span>

                        <p
                          className={`text-xs md:text-sm leading-relaxed ${
                            isAI ? "text-[#A9B8D8]" : "text-[#5D6C87]"
                          }`}
                        >
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Architecture & Engineering Details */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors cursor-pointer ${
                        isAI
                          ? "text-[#00CFFF] hover:underline"
                          : "text-[#1677FF] hover:underline"
                      }`}
                    >
                      <span>
                        {isExpanded
                          ? "Hide Technical Breakdown"
                          : "Inspect System Architecture & Highlights"}
                      </span>

                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Expanded Technical Breakdown */}
                    {isExpanded && (
                      <div
                        className={`mt-6 pt-6 border-t animate-in fade-in-50 duration-200 ${
                          isAI ? "border-white/10" : "border-[#E5EDF7]"
                        }`}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* System Architecture Flow */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Server
                                className={`w-4 h-4 ${
                                  isAI ? "text-[#00CFFF]" : "text-[#1677FF]"
                                }`}
                              />

                              <h4
                                className={`text-xs font-mono uppercase tracking-wider font-bold ${
                                  isAI ? "text-white" : "text-[#0A1235]"
                                }`}
                              >
                                Architecture Topology
                              </h4>
                            </div>

                            <div className="space-y-2">
                              {project.architecture.map((item, aIdx) => (
                                <div
                                  key={aIdx}
                                  className={`flex items-center gap-2 text-xs font-mono p-2 rounded-lg border ${
                                    isAI
                                      ? "bg-[#04082A] text-[#E4EDFB] border-white/5"
                                      : "bg-[#F4FAFF] text-[#0A1235] border-[#E5EDF7]"
                                  }`}
                                >
                                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] shrink-0 font-mono">
                                    {aIdx + 1}
                                  </span>

                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Engineering Highlights */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Cpu
                                className={`w-4 h-4 ${
                                  isAI ? "text-[#00CFFF]" : "text-[#1677FF]"
                                }`}
                              />

                              <h4
                                className={`text-xs font-mono uppercase tracking-wider font-bold ${
                                  isAI ? "text-white" : "text-[#0A1235]"
                                }`}
                              >
                                Engineering Ownership
                              </h4>
                            </div>

                            <ul className="space-y-2">
                              {project.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className={`flex items-start gap-2 text-xs md:text-sm leading-relaxed ${
                                    isAI ? "text-[#A9B8D8]" : "text-[#5D6C87]"
                                  }`}
                                >
                                  <CheckCircle
                                    className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                      isAI
                                        ? "text-[#00CFFF]"
                                        : "text-[#1677FF]"
                                    }`}
                                  />

                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
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