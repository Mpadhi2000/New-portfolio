import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "cta"
    | "outline"
    | "secondary"
    | "ghost"
    | "dark-outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#1677FF] to-[#0E5FD8] text-white shadow-md hover:shadow-lg hover:brightness-105 border border-[#1677FF]/20",
      cta: "bg-gradient-to-r from-[#1677FF] to-[#00CFFF] text-white shadow-md hover:shadow-[0_0_20px_rgba(0,207,255,0.4)] hover:brightness-105 border border-white/20",
      outline:
        "bg-white text-[#0A1235] border border-[#E5EDF7] hover:bg-[#F4FAFF] hover:border-[#1677FF]/40 shadow-sm",
      secondary:
        "bg-[#F4FAFF] text-[#0A1235] hover:bg-[#E5EDF7] border border-[#E5EDF7]",
      ghost:
        "bg-transparent text-[#5D6C87] hover:text-[#0A1235] hover:bg-black/5 border border-transparent",
      "dark-outline":
        "bg-transparent text-white border border-[#00CFFF]/40 hover:bg-[#00CFFF]/10 hover:border-[#00CFFF] shadow-[0_0_15px_rgba(0,207,255,0.15)]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
      md: "text-sm px-4 py-2.5 h-10 gap-2",
      lg: "text-base px-6 py-3 h-12 gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
