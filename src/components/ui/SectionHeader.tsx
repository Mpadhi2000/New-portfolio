import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  gradientTitle,
  description,
  align = "center",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-4 border transition-colors",
            isDark
              ? "bg-[#0B1554]/70 text-[#00CFFF] border-[#00CFFF]/30 shadow-[0_0_15px_rgba(0,207,255,0.15)]"
              : "bg-[#F4FAFF] text-[#1677FF] border-[#E5EDF7]",
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.25] sm:leading-[1.2] pb-1",
          isDark ? "text-white" : "text-[#0A1235]",
        )}
      >
        {title}{" "}
        {gradientTitle && (
          <span className="text-gradient-primary inline-block pb-1.5 pt-0.5">
            {gradientTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed font-normal",
            isDark ? "text-[#A9B8D8]" : "text-[#5D6C87]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
