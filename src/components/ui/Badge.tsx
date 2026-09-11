import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "cyan" | "dark" | "outline" | "secondary" | "success";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "outline",
  size = "md",
  ...props
}) => {
  const variantStyles = {
    primary: "bg-[#1677FF]/10 text-[#1677FF] border-[#1677FF]/30",
    cyan: "bg-[#00CFFF]/15 text-[#00CFFF] border-[#00CFFF]/40",
    dark: "bg-[#0B1554] text-[#E4EDFB] border-[rgba(22,119,255,0.3)]",
    outline: "bg-white text-[#5D6C87] border-[#E5EDF7]",
    secondary: "bg-[#F4FAFF] text-[#0A1235] border-[#E5EDF7]",
    success:
      "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs font-mono px-2.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-medium border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
