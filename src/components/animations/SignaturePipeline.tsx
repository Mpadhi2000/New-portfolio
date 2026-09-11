"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Bot,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Activity,
} from "lucide-react";

interface NodeData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  techs: string[];
  telemetry: string;
  status: string;
}

const pipelineNodes: NodeData[] = [
  {
    id: "code",
    step: "01",
    title: "Code",
    subtitle: "Frontend Architecture",
    icon: Code2,
    techs: ["Next.js 14", "React", "TypeScript", "Tailwind"],
    telemetry: "SSR / RSC Hydration · Zero Layout Shift",
    status: "READY",
  },
  {
    id: "api",
    step: "02",
    title: "Data / API",
    subtitle: "Async REST & WebSockets",
    icon: Database,
    techs: ["FastAPI", "Node.js", "REST", "JWT Auth"],
    telemetry: "sub-50ms Response · Pydantic Validation",
    status: "ACTIVE",
  },
  {
    id: "system",
    step: "03",
    title: "System",
    subtitle: "Data & Cache Layer",
    icon: Cpu,
    techs: ["PostgreSQL", "pgvector", "Redis", "Docker"],
    telemetry: "Connection Pooling · In-Memory Cache",
    status: "SYNCED",
  },
  {
    id: "ai",
    step: "04",
    title: "AI / Agents",
    subtitle: "LLM Orchestration",
    icon: Bot,
    techs: ["Multi-Agent", "AI Gateway", "RAG", "MCP"],
    telemetry: "Semantic Prompt Cache · Function Calling",
    status: "OPTIMIZED",
  },
  {
    id: "product",
    step: "05",
    title: "Product",
    subtitle: "Production SaaS",
    icon: Rocket,
    techs: ["Linux", "Nginx", "SSL", "CI/CD"],
    telemetry: "99.9% Uptime · Production Hardened",
    status: "DEPLOYED",
  },
];

export const SignaturePipeline: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>("ai");
  const [activePulseIndex, setActivePulseIndex] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSimulateFlow = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      setActivePulseIndex(step);
      setSelectedNode(pipelineNodes[step].id);
      step++;
      if (step >= pipelineNodes.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
        }, 1000);
      }
    }, 700);
  };

  const activeNodeData =
    pipelineNodes.find((n) => n.id === selectedNode) || pipelineNodes[0];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#050A35] border border-[rgba(0,207,255,0.25)] p-5 md:p-8 shadow-[0_20px_60px_rgba(5,10,53,0.5)] relative overflow-hidden text-white">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#1677FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00CFFF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of the interactive console */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-[#00CFFF]">
            <Activity className="w-3.5 h-3.5 animate-pulse text-[#00CFFF]" />
            <span>SYSTEM ARCHITECTURE PIPELINE</span>
          </div>
          <span className="hidden sm:inline text-xs text-[#A9B8D8] font-mono">
            Code → Data/API → System → AI → Product
          </span>
        </div>

        <button
          onClick={handleSimulateFlow}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#1677FF] to-[#00CFFF] text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(0,207,255,0.4)] transition-all disabled:opacity-50 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            {isSimulating ? "Executing Pipeline..." : "Simulate Live Data Flow"}
          </span>
        </button>
      </div>

      {/* Pipeline Node Visualizer */}
      <div className="py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-3 relative items-stretch">
          {pipelineNodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <div key={node.id} className="relative flex flex-col h-full">
                <button
                  onClick={() => {
                    setSelectedNode(node.id);
                    setActivePulseIndex(index);
                  }}
                  className={`w-full h-full min-h-[165px] p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#0B1554] border-[#00CFFF] shadow-[0_0_25px_rgba(0,207,255,0.25)] ring-1 ring-[#00CFFF]"
                      : "bg-[#080E38]/80 border-white/10 hover:border-white/25 hover:bg-[#0B1554]/50"
                  }`}
                >
                  <div>
                    {/* Step & Status */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-mono font-bold text-[#00CFFF]">
                        STEP {node.step}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                          isSelected
                            ? "bg-[#00CFFF]/20 text-[#00CFFF] border-[#00CFFF]/40"
                            : "bg-white/5 text-[#A9B8D8] border-white/10"
                        }`}
                      >
                        {node.status}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-gradient-to-br from-[#1677FF] to-[#00CFFF] text-white shadow-sm"
                            : "bg-white/5 text-[#A9B8D8] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-bold text-sm text-white tracking-tight truncate">
                        {node.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#A9B8D8] line-clamp-1 mb-2">
                      {node.subtitle}
                    </p>
                  </div>

                  {/* Tech stack mini tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {node.techs.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#E4EDFB] border border-white/5 truncate max-w-[85px]"
                      >
                        {t}
                      </span>
                    ))}
                    {node.techs.length > 2 && (
                      <span className="text-[10px] font-mono text-[#A9B8D8]">
                        +{node.techs.length - 2}
                      </span>
                    )}
                  </div>
                </button>

                {/* Arrow connector on desktop */}
                {index < pipelineNodes.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 pointer-events-none text-[#00CFFF]/50">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Telemetry Console */}
      <div className="mt-2 p-4 rounded-xl bg-[#04082A] border border-[rgba(22,119,255,0.3)] relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-start md:items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#00CFFF] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">
                  {activeNodeData.title} Layer Telemetry
                </span>
                <span className="text-xs font-mono text-[#00CFFF]">
                  ({activeNodeData.subtitle})
                </span>
              </div>
              <p className="text-xs font-mono text-[#A9B8D8] mt-0.5">
                {activeNodeData.telemetry}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {activeNodeData.techs.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-1 rounded bg-[#0B1554] text-[#00CFFF] border border-[#00CFFF]/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
