"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import {
  personalProjects,
  researchProjects,
  type Project,
} from "@/lib/portfolio-data";

// ─────────────────────────────────────────────────────────────────────────────
// FLAGSHIP CARD  (AB AutoFinder — full-width, prominent)
// ─────────────────────────────────────────────────────────────────────────────

function FlagshipCard({
  title,
  tagline,
  problem,
  built,
  metrics,
  tags,
  link,
  status,
  period,
}: Project) {
  const isExternal = link.startsWith("http");
  const isLive = status === "Live" && isExternal;

  return (
    <a
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:shadow-[0_12px_48px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:border-purple-500/40 dark:hover:shadow-[0_12px_48px_rgba(168,85,247,0.12)] lg:flex-row"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 opacity-80 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6 pl-8 sm:p-8 sm:pl-10">
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {isLive && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              Live
            </span>
          )}
          <span className="rounded-full border border-purple-300/40 bg-purple-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            Flagship
          </span>
          <span className="ml-auto font-mono text-[11px] text-slate-400 dark:text-zinc-600">
            {period}
          </span>
        </div>

        {/* Title + tagline */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-purple-700 dark:text-white dark:group-hover:text-purple-300 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-zinc-500 sm:text-base">
            {tagline}
          </p>
        </div>

        {/* Case study body */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-600">
              The Problem
            </p>
            <p className="text-sm leading-6 text-slate-500 dark:text-zinc-400">
              {problem}
            </p>
          </div>
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-600">
              What I Built
            </p>
            <p className="text-sm leading-6 text-slate-500 dark:text-zinc-400">
              {built}
            </p>
          </div>
        </div>

        {/* Metrics row */}
        {metrics && metrics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 dark:border-zinc-800/60 dark:bg-zinc-900/60"
              >
                <p className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                  {m.value}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-zinc-600 sm:text-xs">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-zinc-700/50 dark:bg-zinc-900/70 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Arrow */}
      {isExternal && (
        <span className="absolute right-4 top-4 text-sm text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-500 dark:text-zinc-700 dark:group-hover:text-purple-400">
          ↗
        </span>
      )}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RESEARCH CARD  (case study format, standard grid)
// ─────────────────────────────────────────────────────────────────────────────

function ResearchCard({
  title,
  tagline,
  problem,
  built,
  metrics,
  tags,
  link,
  status,
  period,
  org,
}: Project) {
  const isExternal = link.startsWith("http");

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60 sm:p-7">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              status === "Live"
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                : "border-slate-200 bg-slate-100 text-slate-500 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-500"
            }`}
          >
            {status === "Live" ? (
              <>
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                Live
              </>
            ) : (
              "Planned"
            )}
          </span>
          {org && (
            <span className="rounded-full border border-blue-200/60 bg-blue-50/80 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              {org}
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-600">
          {period}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-xl">
        {title}
      </h3>
      {tagline && (
        <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">{tagline}</p>
      )}

      {/* Accent bar */}
      <div className="mt-4 h-[2px] w-8 rounded-full bg-blue-400/50 transition-all duration-300 group-hover:w-14 group-hover:bg-blue-500/70" />

      {/* Case study body */}
      <div className="mt-5 space-y-4">
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-600">
            The Problem
          </p>
          <p className="text-sm leading-6 text-slate-500 dark:text-zinc-400">
            {problem}
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-600">
            What I Built
          </p>
          <p className="text-sm leading-6 text-slate-500 dark:text-zinc-400">
            {built}
          </p>
        </div>
      </div>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 dark:border-zinc-800/60 dark:bg-zinc-900/60"
            >
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {m.value}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-zinc-600">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-zinc-700/50 dark:bg-zinc-900/70 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* External link badge */}
      {isExternal && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 text-sm text-slate-300 transition-colors duration-200 hover:text-purple-500 dark:text-zinc-700 dark:hover:text-purple-400"
          aria-label={`Visit ${title}`}
        >
          ↗
        </a>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBSECTION LABEL
// ─────────────────────────────────────────────────────────────────────────────

function SubsectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-zinc-800" />
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-zinc-500">
        {label}
      </p>
      <span className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent dark:from-zinc-800" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  const personalRef = useReveal();
  const researchRef = useReveal();

  const flagship = personalProjects.find((p) => p.flagship);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Personal Projects */}
      {flagship && (
        <div ref={personalRef} className="reveal">
          <SubsectionLabel label="Personal Projects" />
          <FlagshipCard {...flagship} />
        </div>
      )}

      {/* University Research */}
      <div>
        <SubsectionLabel label="University Research Projects" />
        <div
          ref={researchRef}
          className="reveal-stagger grid gap-5 sm:grid-cols-2"
        >
          {researchProjects.map((p) => (
            <ResearchCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
