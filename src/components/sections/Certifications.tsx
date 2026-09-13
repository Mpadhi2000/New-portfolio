"use client";

import React, { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  Eye,
  X,
} from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certificationsData } from "@/lib/data";

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y border-[#E5EDF7] bg-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F4FAFF] to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#1677FF]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Professional Development"
          title="Licenses &"
          gradientTitle="Certifications"
          description="Verified credentials across full-stack product engineering, generative AI, and agentic workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((certificate, index) => (
            <FadeInView key={certificate.id} delay={index * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5EDF7] bg-white shadow-po-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/40 hover:shadow-po-md">
                <div className="h-1 bg-gradient-to-r from-[#1677FF] via-[#4B9BFF] to-[#7DB8FF]" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      {certificate.logoImage ? (
                        <img
                          src={certificate.logoImage}
                          alt={certificate.issuer}
                          className="h-12 w-12 shrink-0"
                        />
                      ) : (
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${certificate.logoColor} text-lg font-bold text-white shadow-sm`}
                          aria-label={`${certificate.issuer} logo`}
                        >
                          {certificate.logo}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold text-[#0A1235]">{certificate.issuer}</p>
                        <p className="mt-0.5 text-xs text-[#5D6C87]">Credential issuer</p>
                      </div>
                    </div>
                    <Award className="h-5 w-5 shrink-0 text-[#1677FF]" aria-hidden="true" />
                  </div>

                  <h3 className="min-h-[3.5rem] text-base font-bold leading-snug text-[#0A1235]">
                    {certificate.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-700">
                    <BadgeCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Professional credential</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E5EDF7] pt-4 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[#5D6C87]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Issued {certificate.issued}
                    </span>
                    {certificate.certificateImage ? (
                      <button type="button" onClick={() => setSelectedImage(certificate.certificateImage!)} className="inline-flex items-center gap-1.5 font-semibold text-[#1677FF] hover:underline">
                        <Eye className="h-3.5 w-3.5" /> View
                      </button>
                    ) : certificate.credentialUrl ? (
                      <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[#1677FF] hover:underline">
                        Verify <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div role="dialog" aria-modal="true" aria-label="Pesto Fellowship certificate" onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04082A]/80 p-4 backdrop-blur-sm">
          <div onClick={(event) => event.stopPropagation()} className="relative max-h-[92vh] w-full max-w-5xl rounded-2xl bg-white p-3 shadow-2xl sm:p-5">
            <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close certificate" className="absolute right-4 top-4 z-10 rounded-full bg-[#04082A] p-2 text-white hover:bg-[#1677FF]">
              <X className="h-5 w-5" />
            </button>
            <img src={selectedImage} alt="PESTO Fellowship certificate" className="max-h-[82vh] w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};
