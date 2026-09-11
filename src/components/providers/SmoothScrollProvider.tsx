"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

/**
 * Used by auto-switching sections.
 * Auto-switching should only happen when the section is near the viewport.
 * This prevents offscreen content height changes from causing page jumps.
 */
export function useSectionVisibility<T extends HTMLElement>(
  rootMargin = "160px 0px"
) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return { ref, isInView };
}

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(instance);

    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = instance;
    }

    let rafId: number;

    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      /**
       * Only allow real user clicks.
       * This blocks programmatic/synthetic anchor clicks from scrolling the page.
       */
      if (!event.isTrusted) return;

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a");
      if (!anchor) return;

      /**
       * Escape hatch:
       * Any anchor inside an element with data-no-smooth-scroll
       * will not be intercepted.
       */
      if (anchor.closest("[data-no-smooth-scroll]")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const normalizedHref = href.trim();

      if (!normalizedHref.startsWith("#") || normalizedHref.length <= 1) {
        return;
      }

      let id = normalizedHref.slice(1);

      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep raw id if decoding fails.
      }

      id = id.trim();

      const element = document.getElementById(id);
      if (!element) return;

      event.preventDefault();

      instance.scrollTo(element, { offset: -70 });

      if (typeof window !== "undefined") {
        /**
         * replaceState avoids creating extra history entries,
         * which can reduce unwanted back-button scroll behavior.
         */
        window.history.replaceState(null, "", `#${encodeURIComponent(id)}`);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      instance.destroy();

      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};