"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import { contactLinks, availabilityRoles } from "@/lib/portfolio-data";

export function ContactSection() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto]">

        {/* ── Left: copy + CTA + links ── */}
        <div className="space-y-8">
          <p className="max-w-xl text-lg leading-8 text-slate-500 dark:text-zinc-400 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            Open to junior roles in full-stack, frontend, or data engineering.
            Feel free to reach out — I strive to respond in a timely manner.
          </p>

          {/* Primary CTA */}
          <div className="btn-orbit-wrapper">
            <div className="btn-orbit-glow" />
            <div className="btn-orbit-ring" />
            <a
              href="mailto:arfaamumtaz@hotmail.com"
              className="relative z-10 inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-purple-500 active:scale-[0.98] dark:bg-purple-500 dark:hover:bg-purple-400 sm:px-10 sm:py-5 sm:text-lg"
            >
              Say Hello
              <span className="text-purple-200">→</span>
            </a>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {l.label}
                <span className="text-slate-300 dark:text-zinc-600">↗</span>
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-400 dark:text-zinc-600">
            780-934-8623 · Edmonton, AB
          </p>
        </div>

        {/* ── Right: availability card (desktop) ── */}
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center">
          <div className="animate-float rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
            {/* Status indicator */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Available
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-zinc-500">
              Open to junior roles
            </p>

            {/* Role list */}
            <div className="mt-5 space-y-2 text-left">
              {availabilityRoles.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-500" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
