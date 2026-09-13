"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

export const BackToTop: React.FC = () => {
  const lenis = useLenis();

  const [visible, setVisible] = useState(false);

  const progressCircleRef = useRef<SVGCircleElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const RADIUS = 21;
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
        0,
      );

      const progress =
        scrollableHeight <= 0
          ? 0
          : Math.min(1, Math.max(0, scrollTop / scrollableHeight));

      if (circle) {
        circle.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - progress)}`;

        circle.style.opacity = progress <= 0 ? "0" : "1";
      }

      /**
       * Hide on first fold.
       * Show only after user scrolls beyond approximately one viewport.
       */
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
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-[0_8px_25px_rgba(22,119,255,0.4)]">
        {/* SVG circular background with embedded progress ring */}
        <svg
          viewBox="0 0 56 56"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 h-full w-full -rotate-90 rounded-full"
        >
          {/* Sky / light blue circular background */}
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="#1677FF"
            className="transition-colors duration-200"
          />

          {/* Semi-transparent backside static base ring */}
          <circle
            cx="28"
            cy="28"
            r="21"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="3.5"
          />

          {/* Active progressive ring (Solid White) following scroll progress */}
          <circle
            ref={progressCircleRef}
            cx="28"
            cy="28"
            r="21"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Back-to-Top trigger button */}
        <button
          type="button"
          onClick={scrollToTop}
          tabIndex={visible ? 0 : -1}
          aria-label="Back to top"
          className="group absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-full text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5] text-white drop-shadow transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
