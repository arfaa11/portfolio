"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import { personalProjects, researchProjects, type Project } from "@/lib/portfolio-data";

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({
  title,
  description,
  tags,
  link,
  status,
  period,
  org,
  placeholder,
}: Project) {
  return (
    <a
      href={placeholder ? undefined : link}
      target={!placeholder && link.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative flex flex-col rounded-2xl border bg-zinc-950/60 p-5 sm:p-6 transition-all duration-300 ${
        placeholder
          ? "cursor-default border-zinc-800/50 opacity-50"
          : "border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(168,85,247,0.1)]"
      }`}
    >
      {/* Status + period row */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-full border px-3 py-0.5 text-xs font-medium ${
            status === "Live"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
              : "border-zinc-700/50 bg-zinc-800/50 text-zinc-500"
          }`}
        >
          {status === "Live" ? "● Live" : "○ Planned"}
        </span>
        <span className="font-mono text-[11px] text-zinc-600">{period}</span>
      </div>

      {/* Title */}
      <h4
        className={`text-lg font-semibold tracking-tight sm:text-xl ${
          placeholder
            ? "text-zinc-600"
            : "text-white transition-colors duration-200 group-hover:text-purple-300"
        }`}
      >
        {title}
      </h4>

      {/* Organisation (research projects) */}
      {org && (
        <p className="mt-1 text-xs font-medium text-blue-400/80">{org}</p>
      )}

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{description}</p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Arrow */}
      {!placeholder && (
        <span className="absolute right-4 top-4 text-sm text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400">
          ↗
        </span>
      )}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBSECTION DIVIDER LABEL
// ─────────────────────────────────────────────────────────────────────────────

function SubsectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>
      <span className="h-px flex-1 bg-gradient-to-l from-zinc-800 to-transparent" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  const personalRef = useReveal();
  const researchRef = useReveal();

  return (
    <div className="space-y-14 sm:space-y-16">
      {/* Personal Projects */}
      <div>
        <SubsectionLabel label="Personal Projects" />
        <div
          ref={personalRef}
          className="reveal-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {personalProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* University Research Projects */}
      <div>
        <SubsectionLabel label="University Research Projects" />
        <div
          ref={researchRef}
          className="reveal-stagger grid gap-5 sm:grid-cols-2"
        >
          {researchProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}