"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

type LenisLike = {
  scrollTo: (
    target: number | HTMLElement,
    options?: {
      duration?: number;
      offset?: number;
    }
  ) => void;
};

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const progressCircleRef = useRef<SVGCircleElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const RADIUS = 25;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    const circle = progressCircleRef.current;

    if (circle) {
      circle.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
      circle.style.strokeDashoffset = `${CIRCUMFERENCE}`;
      circle.style.opacity = "0";
    }

    const update = () => {
      rafRef.current = null;

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - viewportHeight,
        0
      );

      const progress =
        scrollableHeight <= 0
          ? 0
          : Math.min(1, Math.max(0, scrollTop / scrollableHeight));

      if (circle) {
        circle.style.strokeDashoffset = `${
          CIRCUMFERENCE * (1 - progress)
        }`;
        circle.style.opacity = progress <= 0 ? "0" : "1";
      }

      const nextVisible = scrollTop > viewportHeight;

      setVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    };

    const schedule = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis =
      typeof window !== "undefined"
        ? (window as unknown as { __lenis?: LenisLike }).__lenis
        : undefined;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, {
        duration: reduceMotion ? 0 : 1.1,
        offset: 0,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 sm:bottom-7 sm:right-7 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        {/* Outer SVG progress ring */}
        <svg
          viewBox="0 0 56 56"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 h-full w-full -rotate-90"
        >
          {/* Track circle */}
          <circle
            cx="28"
            cy="28"
            r="25"
            fill="none"
            stroke="rgba(22, 119, 255, 0.20)"
            strokeWidth="4"
          />

          {/* Active progress circle */}
          <circle
            ref={progressCircleRef}
            cx="28"
            cy="28"
            r="25"
            fill="none"
            stroke="url(#back-to-top-progress-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="back-to-top-progress-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1677FF" />
              <stop offset="100%" stopColor="#00CFFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner blue button */}
        <button
          type="button"
          onClick={scrollToTop}
          tabIndex={visible ? 0 : -1}
          aria-label="Back to top"
          className="absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1677FF] text-white shadow-[0_10px_25px_rgba(22,119,255,0.35)] transition-colors hover:bg-[#0E5FD8] focus:outline-none focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 sm:h-10 sm:w-10"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default BackToTop;