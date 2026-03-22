"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionCard } from "@/components/ui/section-card";

const sections = [
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Featured Projects",
    description: "Projects section placeholder.",
  },
  {
    id: "skills",
    eyebrow: "Skill Stack",
    title: "",
    description: "Skill stack section placeholder.",
  },
  {
    id: "about",
    eyebrow: "About Me",
    title: "Full-Stack Developer",
    description: "About section placeholder.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Let’s Connect",
    description: "Contact section placeholder.",
  },
];

function SlidingSection({
  section,
  index,
}: {
  section: (typeof sections)[number];
  index: number;
}) {
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ["start start", "end end"],
  });

  const start = (index + 1) / (sections.length + 1);
  const end = (index + 2) / (sections.length + 1);

  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

  return (
    <motion.div
      id={section.id}
      style={{ y, zIndex: index + 2 }}
      className="pointer-events-auto absolute inset-0"
    >
      <SectionCard
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
    </motion.div>
  );
}

export function AnimatedPortfolioPage() {
  return (
    <div id="top" className="relative bg-black text-white">
      {/* HERO */}
      <div className="relative h-screen">
        <section className="flex h-screen w-full items-center overflow-hidden bg-black">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

          <div className="mx-auto grid h-full w-full max-w-[1900px] items-center gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 xl:px-10">
            <div className="max-w-5xl">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-purple-500" />
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 sm:text-base">
                  Full-Stack Developer
                </p>
              </div>

              <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-8xl lg:text-[8.75rem] xl:text-[10.5rem]">
                Arfaa
                <br />
                Mumtaz
              </h1>

              <h2 className="mt-10 max-w-4xl text-2xl font-medium leading-[1.28] tracking-[-0.03em] text-zinc-300 sm:text-3xl lg:text-4xl xl:text-[2.7rem]">
                Building secure, user-focused applications with modern full-stack
                development.
              </h2>

              <div className="mt-14 flex flex-wrap items-center gap-5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-purple-400/20 bg-purple-500 px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-200 hover:bg-purple-400 active:scale-[0.98]"
                >
                  View Projects
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-8 py-4 text-base font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 active:scale-[0.98]"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SCROLL DRIVER + OVERLAID PANELS */}
      <div className="relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <SectionCard
              eyebrow="Projects"
              title="Selected Work"
              description="Projects section placeholder."
            />
          </div>

          {sections.slice(1).map((section, index) => (
            <SlidingSection
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}