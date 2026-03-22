"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import { skillCategories } from "@/lib/portfolio-data";

export function SkillsSection() {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {skillCategories.map((cat) => (
        <div
          key={cat.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            {cat.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors duration-150 hover:border-purple-500/50 hover:text-white sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}