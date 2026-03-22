"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import { contactLinks, availabilityRoles } from "@/lib/portfolio-data";

export function ContactSection() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto]">

        {/* ── Left: copy + CTA + social links ── */}
        <div className="space-y-8">
          <p className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            Whether you have a role in mind, a project to collaborate on, or
            just want to start a conversation — I&apos;m always open. My inbox
            is never closed.
          </p>

          {/* Revolving glow button */}
          <div className="btn-orbit-wrapper">
            <div className="btn-orbit-glow" />
            <div className="btn-orbit-ring" />
            <a
              href="mailto:arfaamumtaz@hotmail.com"
              className="relative z-10 inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-purple-400 active:scale-[0.98] sm:px-10 sm:py-5 sm:text-lg"
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
              >
                {l.label} <span className="text-zinc-500">↗</span>
              </a>
            ))}
          </div>

          <p className="text-sm text-zinc-600">780-934-8623 · Edmonton, AB</p>
        </div>

        {/* ── Right: floating availability card (desktop only) ── */}
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center">
          <div className="animate-float rounded-2xl border border-zinc-800 bg-zinc-950/80 p-8 text-center shadow-[0_0_60px_rgba(168,85,247,0.06)]">
            {/* Status indicator */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            </div>
            <p className="text-sm font-semibold text-white">Available</p>
            <p className="mt-1 text-xs text-zinc-500">Open to new grad roles</p>

            {/* Role list */}
            <div className="mt-5 space-y-2 text-left">
              {availabilityRoles.map((r) => (
                <div key={r} className="flex items-center gap-2 text-xs text-zinc-400">
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