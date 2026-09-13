import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const lightBase = "animate-shimmer rounded-lg bg-[#E7EFF8]";
const darkBase = "animate-shimmer rounded-lg bg-white/10";

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cx(lightBase, className)} />;
};

export const SkeletonDark: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <div className={cx(darkBase, className)} />;
};

export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  lineClassName?: string;
  darkMode?: boolean;
}> = ({ lines = 3, className, lineClassName, darkMode = false }) => {
  const Component = darkMode ? SkeletonDark : Skeleton;

  return (
    <div className={cx("space-y-2.5", className)}>
      {Array.from({ length: lines }, (_, index) => (
        <Component
          key={index}
          className={cx(
            "h-3.5",
            index === lines - 1 ? "w-2/3" : "w-full",
            lineClassName,
          )}
        />
      ))}
    </div>
  );
};

export const SkeletonImage: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Skeleton className={cx("aspect-video w-full rounded-xl", className)} />
  );
};

export const SkeletonButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <Skeleton className={cx("h-10 w-36 rounded-lg", className)} />;
};

export const SectionHeaderSkeleton: React.FC<{ darkMode?: boolean }> = ({
  darkMode = false,
}) => {
  const Component = darkMode ? SkeletonDark : Skeleton;

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Component className="mx-auto mb-4 h-6 w-40 rounded-full" />
      <Component className="mx-auto mb-3 h-10 w-4/5 max-w-xl md:h-12" />
      <Component className="mx-auto h-4 w-full max-w-2xl" />
    </div>
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cx(
        "rounded-2xl border border-[#E5EDF7] bg-white p-6 shadow-sm",
        className,
      )}
    >
      <SkeletonImage className="mb-5" />

      <Skeleton className="mb-2 h-6 w-3/4" />

      <SkeletonText lines={3} className="mb-4" />

      <div className="mb-5 flex flex-wrap gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <Skeleton key={index} className="h-6 w-20 rounded-md" />
        ))}
      </div>

      <SkeletonButton />
    </div>
  );
};

export const SkeletonProjectCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#E5EDF7] bg-white p-6 shadow-sm md:p-8">
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="w-full space-y-3">
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-5 w-32 rounded-full" />
            <Skeleton className="h-5 w-36 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>

          <Skeleton className="h-8 w-3/4 max-w-xl" />
          <Skeleton className="h-4 w-44" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-lg" />
          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>
      </div>

      <Skeleton className="mb-2 h-4 w-full max-w-3xl" />
      <Skeleton className="mb-6 h-4 w-5/6 max-w-2xl" />

      <div className="mb-6 flex flex-wrap gap-2">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-6 w-24 rounded-md" />
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[#E5EDF7] bg-[#F4FAFF] p-4">
          <Skeleton className="mb-3 h-3.5 w-32" />
          <SkeletonText lines={3} />
        </div>

        <div className="rounded-xl border border-[#E5EDF7] bg-[#F4FAFF] p-4">
          <Skeleton className="mb-3 h-3.5 w-40" />
          <SkeletonText lines={3} />
        </div>
      </div>

      <Skeleton className="h-4 w-72 max-w-full" />
    </div>
  );
};

export const SkeletonCaseStudy: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton
            key={index}
            className="h-[84px] w-full rounded-xl sm:w-64"
          />
        ))}
      </div>

      <div className="rounded-2xl border border-[#E5EDF7] bg-[#F4FAFF] p-6 shadow-sm sm:p-8 md:p-10">
        <div className="mb-8 border-b border-[#E5EDF7] pb-6">
          <div className="mb-3 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-32 rounded" />
            <Skeleton className="h-6 w-44 rounded" />
          </div>

          <Skeleton className="mb-2 h-9 w-4/5 max-w-2xl" />
          <Skeleton className="h-4 w-64 max-w-full" />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#E5EDF7] bg-white p-5">
            <Skeleton className="mb-3 h-4 w-48" />
            <SkeletonText lines={4} />
          </div>

          <div className="rounded-xl border border-[#E5EDF7] bg-white p-5">
            <Skeleton className="mb-3 h-4 w-48" />
            <SkeletonText lines={4} />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-[#E5EDF7] bg-white p-6">
            <Skeleton className="mb-4 h-4 w-56" />

            <div className="space-y-3">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-4 w-full" />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#E5EDF7] bg-white p-6">
            <Skeleton className="mb-4 h-4 w-64" />

            <div className="space-y-3">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#050A35] to-[#0B1554] p-6">
          <SkeletonDark className="mb-4 h-4 w-64" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonDark key={index} className="h-20 rounded-lg" />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
            {Array.from({ length: 5 }, (_, index) => (
              <SkeletonDark key={index} className="h-6 w-20 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonAILab: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-[#080E38]/80 p-5"
          >
            <SkeletonDark className="mb-3 h-5 w-24 rounded" />
            <SkeletonDark className="mb-2 h-4 w-full" />
            <SkeletonDark className="h-3 w-4/5" />
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-[rgba(0,207,255,0.25)] bg-[#080E38] p-6 sm:p-8 md:p-10">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
          <div className="space-y-3">
            <SkeletonDark className="h-5 w-40 rounded" />
            <SkeletonDark className="h-8 w-72 max-w-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <SkeletonDark key={index} className="h-7 w-24 rounded" />
            ))}
          </div>
        </div>

        <SkeletonDark className="my-6 h-4 w-full max-w-3xl" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-[#050A35] p-5">
            <SkeletonDark className="mb-4 h-4 w-64" />

            <div className="space-y-2">
              {Array.from({ length: 5 }, (_, index) => (
                <SkeletonDark key={index} className="h-10 w-full rounded-lg" />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#050A35] p-5">
            <SkeletonDark className="mb-4 h-4 w-64" />

            <div className="space-y-3">
              {Array.from({ length: 5 }, (_, index) => (
                <SkeletonDark key={index} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PageSkeleton: React.FC = () => {
  return (
    <div
      aria-busy="true"
      className="min-h-screen bg-white pt-28 pb-20 overflow-hidden"
    >
      {/* Hero section skeleton */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#F4FAFF] via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Hero Header */}
          <div className="mx-auto mb-14 max-w-4xl text-center space-y-5">
            {/* Availability status badge */}
            <Skeleton className="mx-auto h-7 w-64 rounded-full" />

            {/* Headline */}
            <div className="space-y-3 pt-2">
              <Skeleton className="mx-auto h-10 sm:h-12 md:h-14 w-11/12 max-w-3xl rounded-xl" />
              <Skeleton className="mx-auto h-10 sm:h-12 md:h-14 w-3/4 max-w-2xl rounded-xl" />
            </div>

            {/* Supporting paragraph */}
            <div className="space-y-2 pt-2 max-w-2xl mx-auto">
              <Skeleton className="mx-auto h-4 w-full rounded-md" />
              <Skeleton className="mx-auto h-4 w-4/5 rounded-md" />
            </div>

            {/* Action buttons & Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Skeleton className="h-12 w-44 rounded-lg" />
              <Skeleton className="h-12 w-36 rounded-lg" />
              <Skeleton className="h-12 w-32 rounded-lg" />
            </div>

            {/* Quick social icon links */}
            <div className="flex items-center justify-center gap-3 pt-2">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-9 w-9 rounded-full" />
              ))}
            </div>
          </div>

          {/* Right-side / Center interactive pipeline placeholder */}
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#050A35] p-6 shadow-2xl md:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <SkeletonDark className="h-4 w-4 rounded-full" />
                <SkeletonDark className="h-5 w-56 rounded-md" />
              </div>
              <SkeletonDark className="h-8 w-44 rounded-lg" />
            </div>

            {/* Pipeline nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 py-6">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="h-36 rounded-xl border border-white/10 bg-[#080E38]/80 p-4 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <SkeletonDark className="h-4 w-12 rounded" />
                    <SkeletonDark className="h-4 w-14 rounded" />
                  </div>
                  <SkeletonDark className="h-5 w-4/5 rounded" />
                  <SkeletonDark className="h-3.5 w-full rounded" />
                </div>
              ))}
            </div>

            {/* Bottom detail console */}
            <div className="rounded-xl border border-white/10 bg-[#080E38] p-5">
              <SkeletonDark className="mb-3 h-4 w-48 rounded" />
              <div className="space-y-2">
                <SkeletonDark className="h-3.5 w-full rounded" />
                <SkeletonDark className="h-3.5 w-4/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section skeleton */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeaderSkeleton />

          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: 4 }, (_, index) => (
              <Skeleton key={index} className="h-9 w-32 rounded-full" />
            ))}
          </div>

          <div className="space-y-8">
            <SkeletonProjectCard />
            <SkeletonProjectCard />
          </div>
        </div>
      </section>

      {/* AI Lab skeleton */}
      <section className="bg-[#050A35] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeaderSkeleton darkMode />
          <SkeletonAILab />
        </div>
      </section>

      {/* Layout footer skeleton */}
      <footer className="bg-[#04082A] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <SkeletonDark className="h-12 w-[72px] rounded-lg" />
                <div className="space-y-2"><SkeletonDark className="h-5 w-36" /><SkeletonDark className="h-3 w-56" /></div>
              </div>
              <SkeletonDark className="h-4 w-full max-w-md mb-2" />
              <SkeletonDark className="h-4 w-4/5 max-w-md mb-5" />
              <div className="flex gap-2.5">{Array.from({ length: 3 }, (_, index) => <SkeletonDark key={index} className="h-9 w-9 rounded-lg" />)}</div>
            </div>
            <div className="md:col-span-6"><SkeletonDark className="h-4 w-24 mb-4" /><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{Array.from({ length: 11 }, (_, index) => <SkeletonDark key={index} className="h-4 w-20" />)}</div></div>
          </div>
          <SkeletonDark className="h-3 w-60 mx-auto mt-6" />
        </div>
      </footer>
    </div>
  );
};

export default Skeleton;
