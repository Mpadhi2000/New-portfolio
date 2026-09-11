import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "dark";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-md animate-shimmer relative overflow-hidden",
        variant === "dark" ? "bg-white/10" : "bg-[#E5EDF7]/70",
        className,
      )}
      {...props}
    />
  );
};

export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  variant?: "default" | "dark";
}> = ({ lines = 3, className, variant = "default" }) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant={variant}
          className={cn("h-3.5", i === lines - 1 ? "w-4/5" : "w-full")}
        />
      ))}
    </div>
  );
};

export const SkeletonAvatar: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "dark";
}> = ({ size = "md", className, variant = "default" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <Skeleton
      variant={variant}
      className={cn("rounded-full shrink-0", sizeClasses[size], className)}
    />
  );
};

export const SkeletonImage: React.FC<{
  aspectRatio?: string;
  className?: string;
  variant?: "default" | "dark";
}> = ({ aspectRatio = "aspect-video", className, variant = "default" }) => {
  return (
    <Skeleton
      variant={variant}
      className={cn("w-full rounded-xl", aspectRatio, className)}
    />
  );
};

export const SkeletonButton: React.FC<{
  className?: string;
  variant?: "default" | "dark";
}> = ({ className, variant = "default" }) => {
  return (
    <Skeleton
      variant={variant}
      className={cn("h-10 w-28 rounded-lg", className)}
    />
  );
};

export const SkeletonCard: React.FC<{
  className?: string;
  variant?: "default" | "dark";
}> = ({ className, variant = "default" }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 space-y-4",
        variant === "dark"
          ? "bg-[#080E38] border-white/10"
          : "bg-white border-[#E5EDF7]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Skeleton variant={variant} className="w-10 h-10 rounded-xl" />
        <div className="space-y-1.5 flex-1">
          <Skeleton variant={variant} className="h-4 w-1/3" />
          <Skeleton variant={variant} className="h-3 w-1/2" />
        </div>
      </div>
      <SkeletonText variant={variant} lines={3} />
      <div className="flex gap-2 pt-2">
        <Skeleton variant={variant} className="h-6 w-16 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-20 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-14 rounded-md" />
      </div>
    </div>
  );
};

export const SkeletonProjectCard: React.FC<{
  variant?: "default" | "dark";
  className?: string;
}> = ({ variant = "default", className }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 md:p-8 space-y-5 transition-all duration-300",
        variant === "dark"
          ? "bg-[#080E38] border-white/10 text-white"
          : "bg-white border-[#E5EDF7]",
        className,
      )}
    >
      {/* Header Row: Badges & Title */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex gap-2">
            <Skeleton variant={variant} className="h-5 w-20 rounded-full" />
            <Skeleton variant={variant} className="h-5 w-28 rounded-full" />
          </div>
          <Skeleton variant={variant} className="h-8 w-2/3 rounded-lg" />
          <Skeleton variant={variant} className="h-4 w-1/2 rounded" />
        </div>
        <div className="flex gap-2">
          <Skeleton variant={variant} className="w-9 h-9 rounded-lg" />
          <Skeleton variant={variant} className="w-9 h-9 rounded-lg" />
        </div>
      </div>

      {/* Description */}
      <SkeletonText variant={variant} lines={2} />

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        <Skeleton variant={variant} className="h-6 w-16 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-20 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-24 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-16 rounded-md" />
        <Skeleton variant={variant} className="h-6 w-18 rounded-md" />
      </div>

      {/* Problem vs Solution Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={cn(
            "p-4 rounded-xl border space-y-2",
            variant === "dark"
              ? "bg-[#050A35]/80 border-white/10"
              : "bg-[#F4FAFF] border-[#E5EDF7]",
          )}
        >
          <Skeleton variant={variant} className="h-3.5 w-28 rounded" />
          <SkeletonText variant={variant} lines={2} />
        </div>
        <div
          className={cn(
            "p-4 rounded-xl border space-y-2",
            variant === "dark"
              ? "bg-[#050A35]/80 border-white/10"
              : "bg-[#F4FAFF] border-[#E5EDF7]",
          )}
        >
          <Skeleton variant={variant} className="h-3.5 w-32 rounded" />
          <SkeletonText variant={variant} lines={2} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonCaseStudy: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#F4FAFF] border border-[#E5EDF7] p-6 sm:p-8 md:p-10 shadow-po-md space-y-6",
        className,
      )}
    >
      <div className="space-y-3 pb-6 border-b border-[#E5EDF7]">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-28 rounded" />
          <Skeleton className="h-5 w-44 rounded" />
        </div>
        <Skeleton className="h-8 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-white border border-[#E5EDF7] space-y-2">
          <Skeleton className="h-4 w-36 rounded" />
          <SkeletonText lines={3} />
        </div>
        <div className="p-5 rounded-xl bg-white border border-[#E5EDF7] space-y-2">
          <Skeleton className="h-4 w-36 rounded" />
          <SkeletonText lines={3} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 p-6 rounded-xl bg-white border border-[#E5EDF7] space-y-3">
          <Skeleton className="h-4 w-44 rounded" />
          <SkeletonText lines={3} />
        </div>
        <div className="lg:col-span-6 p-6 rounded-xl bg-white border border-[#E5EDF7] space-y-3">
          <Skeleton className="h-4 w-48 rounded" />
          <SkeletonText lines={3} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonAILab: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 md:p-10 rounded-2xl bg-[#080E38] border border-[rgba(0,207,255,0.25)] shadow-2xl space-y-6",
        className,
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="space-y-2 flex-1">
          <Skeleton variant="dark" className="h-5 w-36 rounded" />
          <Skeleton variant="dark" className="h-8 w-2/3 rounded-lg" />
        </div>
        <div className="flex gap-2">
          <Skeleton variant="dark" className="h-6 w-16 rounded" />
          <Skeleton variant="dark" className="h-6 w-20 rounded" />
        </div>
      </div>

      <SkeletonText variant="dark" lines={2} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 p-5 rounded-xl bg-[#050A35] border border-white/10 space-y-3">
          <Skeleton variant="dark" className="h-4 w-44 rounded" />
          <Skeleton variant="dark" className="h-10 w-full rounded-lg" />
          <Skeleton variant="dark" className="h-10 w-full rounded-lg" />
          <Skeleton variant="dark" className="h-10 w-full rounded-lg" />
        </div>
        <div className="lg:col-span-6 p-5 rounded-xl bg-[#050A35] border border-white/10 space-y-3">
          <Skeleton variant="dark" className="h-4 w-40 rounded" />
          <SkeletonText variant="dark" lines={3} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonSectionHeader: React.FC<{
  className?: string;
  variant?: "default" | "dark";
}> = ({ className, variant = "default" }) => {
  return (
    <div
      className={cn("text-center max-w-3xl mx-auto mb-16 space-y-4", className)}
    >
      <div className="flex justify-center">
        <Skeleton variant={variant} className="h-6 w-36 rounded-full" />
      </div>
      <div className="space-y-2 flex flex-col items-center">
        <Skeleton
          variant={variant}
          className="h-9 sm:h-11 w-3/4 sm:w-2/3 rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <Skeleton variant={variant} className="h-4 w-5/6 sm:w-4/5 rounded" />
      </div>
    </div>
  );
};

export const SkeletonNavbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-md border-b border-[#E5EDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Skeleton className="h-9 w-28 rounded-lg" />
        <div className="hidden xl:flex items-center gap-2 bg-[#F4FAFF] border border-[#E5EDF7] px-4 py-2 rounded-full">
          <Skeleton className="h-4 w-12 rounded-full" />
          <Skeleton className="h-4 w-14 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-12 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-24 rounded-lg hidden sm:block" />
          <Skeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>
    </header>
  );
};

export const SkeletonHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F4FAFF] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">
          <div className="flex justify-center">
            <Skeleton className="h-7 w-72 rounded-full" />
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <Skeleton className="h-10 sm:h-14 md:h-16 w-11/12 rounded-xl" />
            <Skeleton className="h-10 sm:h-14 md:h-16 w-3/4 rounded-xl" />
          </div>
          <div className="flex flex-col items-center gap-2 pt-2">
            <Skeleton className="h-4 sm:h-5 w-4/5 max-w-2xl rounded" />
            <Skeleton className="h-4 sm:h-5 w-3/5 max-w-xl rounded" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-36 rounded-xl" />
            <Skeleton className="h-12 w-36 rounded-xl" />
          </div>
        </div>

        {/* Console / Pipeline Card */}
        <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#050A35] border border-[rgba(0,207,255,0.25)] p-5 md:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Skeleton variant="dark" className="h-6 w-48 rounded" />
            <Skeleton variant="dark" className="h-6 w-24 rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Skeleton variant="dark" className="h-20 rounded-xl" />
            <Skeleton variant="dark" className="h-20 rounded-xl" />
            <Skeleton variant="dark" className="h-20 rounded-xl" />
            <Skeleton variant="dark" className="h-20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
