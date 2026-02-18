"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Opera } from "@/types/opera";
import WorksSection from "./WorksSection";
import PresentationSection from "./PresentationSection";
import BiographySection from "./BiographySection";

export default function LandingPageClient({ opere }: { opere: Opera[] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Forma sinuosa arancione a sinistra */}

      {/* SEZIONE 1: Presentazione Artista */}
      <PresentationSection scrollYProgress={scrollYProgress} />

      {/* SEZIONE 1.5: Biografia Artista */}
      <BiographySection scrollYProgress={scrollYProgress} />

      {/* SEZIONE 2: Opere */}
      <WorksSection scrollYProgress={scrollYProgress} opere={opere} />

      {/* SEZIONE 3: Eventi */}
      {/* <EventsSection scrollYProgress={scrollYProgress} /> */}
    </div>
  );
}
