"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: "light" | "dark";
  glowColor?: string;
}

export const InteractiveGlowCard: React.FC<InteractiveGlowCardProps> = ({
  children,
  className,
  theme = "light",
  glowColor = "rgba(22, 119, 255, 0.15)",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-xl transition-all duration-300 overflow-hidden",
        isDark
          ? "bg-[#080E38] border border-[rgba(0,207,255,0.18)] hover:border-[rgba(0,207,255,0.45)] text-white shadow-[0_4px_20px_rgba(5,10,53,0.3)]"
          : "bg-white border border-[#E5EDF7] hover:border-[#1677FF]/40 text-[#0A1235] shadow-po-sm hover:shadow-po-md",
        className,
      )}
      {...props}
    >
      {/* Dynamic Cursor Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark ? "rgba(0, 207, 255, 0.12)" : glowColor
          }, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
