"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { AILab } from "@/components/sections/AILab";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { PageSkeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show skeleton initially on refresh/load, then smoothly transition into content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeleton-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <PageSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key="portfolio-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <HowIBuild />
          <AILab />
          <CaseStudies />
          <Achievements />
          <Resume />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
