"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import { skillCategories } from "@/lib/portfolio-data";

// Category accent colours — light / dark both accessible
const categoryColors: Record<string, { dot: string; label: string }> = {
  Frontend:          { dot: "bg-purple-500", label: "text-purple-600 dark:text-purple-400" },
  Backend:           { dot: "bg-blue-500",   label: "text-blue-600 dark:text-blue-400"   },
  Databases:         { dot: "bg-emerald-500",label: "text-emerald-700 dark:text-emerald-400" },
  "Tools & DevOps":  { dot: "bg-amber-500",  label: "text-amber-700 dark:text-amber-400"  },
  "Data & Analysis": { dot: "bg-rose-500",   label: "text-rose-600 dark:text-rose-400"   },
  "Security & Systems":{ dot:"bg-slate-500", label: "text-slate-600 dark:text-slate-400" },
};

export function SkillsSection() {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal-stagger grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      {skillCategories.map((cat) => {
        const color = categoryColors[cat.label] ?? {
          dot: "bg-zinc-500",
          label: "text-zinc-600 dark:text-zinc-400",
        };

        return (
          <div
            key={cat.label}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-zinc-700 sm:p-6"
          >
            {/* Category header */}
            <div className="mb-4 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${color.dot}`} />
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${color.label}`}>
                {cat.label}
              </p>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors duration-150 hover:border-slate-300 hover:text-slate-900 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
