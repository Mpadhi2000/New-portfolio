import React from "react";
import {
  SkeletonNavbar,
  SkeletonHero,
  SkeletonSectionHeader,
  SkeletonProjectCard,
  SkeletonCard,
} from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-white text-[#0A1235]"
      aria-busy="true"
      aria-label="Loading page content"
    >
      <SkeletonNavbar />
      <SkeletonHero />

      {/* Featured Projects Section Skeleton */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E5EDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonSectionHeader />
          <div className="space-y-8 max-w-5xl mx-auto">
            <SkeletonProjectCard />
            <SkeletonProjectCard />
          </div>
        </div>
      </section>

      {/* Skills / Tech Stack Section Skeleton */}
      <section className="py-20 md:py-28 bg-[#F4FAFF] border-t border-[#E5EDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonSectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    </div>
  );
}
