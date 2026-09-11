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
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
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
      <BackToTop />
    </>
  );
}