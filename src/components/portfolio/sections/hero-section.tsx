"use client";

import { useTypewriter } from "@/lib/use-portfolio-hooks";
import { heroRoles, heroMetrics } from "@/lib/portfolio-data";

export function HeroSection() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-400/[0.06] blur-[120px] dark:bg-purple-600/10 sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-300/[0.05] blur-[100px] dark:bg-purple-500/[0.07] sm:h-[400px] sm:w-[400px]" />

      {/* Top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32"
        style={{ background: "linear-gradient(to bottom, var(--bg-base), transparent)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-8 xl:px-10">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] xl:gap-20">

          {/* ── Left: identity + CTAs ── */}
          <div>
            {/* Availability + location */}
            <div
              className="mb-6 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                Available for work
              </span>
              <span className="text-xs text-slate-400 dark:text-zinc-600">
                Edmonton, AB
              </span>
            </div>

            {/* Typewriter role */}
            <div
              className="mb-6 flex animate-fade-up items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-purple-500" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500 sm:text-sm">
                <span className="text-purple-600 dark:text-purple-400">{typed}</span>
                <span className="cursor-blink text-purple-600 dark:text-purple-400">|</span>
              </p>
            </div>

            {/* Name */}
            <h1
              className="animate-fade-up text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-slate-900 dark:text-white"
              style={{ animationDelay: "0.2s" }}
            >
              Arfaa
              <br />
              <span className="text-shimmer">Mumtaz</span>
            </h1>

            {/* Tagline */}
            <p
              className="animate-fade-up mt-8 max-w-xl text-lg font-normal leading-relaxed text-slate-500 dark:text-zinc-400 sm:mt-10 sm:text-xl lg:text-2xl"
              style={{ animationDelay: "0.35s" }}
            >
              Building secure, user-focused applications
              <br className="hidden sm:block" /> with modern full-stack development.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(147,51,234,0.22)] transition-all duration-200 hover:bg-purple-500 hover:shadow-[0_0_36px_rgba(147,51,234,0.32)] active:scale-[0.98] dark:bg-purple-500 dark:hover:bg-purple-400 sm:px-7 sm:py-3.5"
              >
                View Projects
                <span className="text-purple-200">↓</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 sm:px-7 sm:py-3.5"
              >
                About Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-transparent px-6 py-3 text-sm font-medium text-slate-400 transition-all duration-200 hover:border-slate-300 hover:text-slate-800 active:scale-[0.98] dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:text-white sm:px-7 sm:py-3.5"
              >
                Resume
                <span className="text-slate-300 dark:text-zinc-600">↗</span>
              </a>
            </div>

            <p
              className="animate-fade-up mt-12 text-[10px] uppercase tracking-[0.25em] text-slate-300 dark:text-zinc-700 sm:mt-14 sm:text-xs"
              style={{ animationDelay: "0.75s" }}
            >
              Scroll to explore
            </p>
          </div>

          {/* ── Right: flagship project card + metrics ── */}
          <div
            className="animate-fade-up flex flex-col gap-4 self-center"
            style={{ animationDelay: "0.6s" }}
          >
            {/* AB AutoFinder featured card — shown on all breakpoints */}
            <div>
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-zinc-600">
                Flagship Project
              </p>
              <a
                href="https://abautofinder.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_8px_30px_rgba(147,51,234,0.10)] dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-purple-500/30 dark:hover:bg-zinc-900/60 dark:hover:shadow-[0_8px_40px_rgba(168,85,247,0.10)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    Live
                  </span>
                  <span className="text-xs text-slate-400 transition-colors duration-200 group-hover:text-purple-600 dark:text-zinc-600 dark:group-hover:text-purple-400">
                    abautofinder.ca ↗
                  </span>
                </div>

                <h3 className="mt-3 text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-purple-700 dark:text-white dark:group-hover:text-purple-300 sm:text-lg">
                  AB AutoFinder
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-zinc-500 sm:text-sm">
                  Automotive lead-generation platform · Alberta market
                </p>

                {/* Metric chips */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { value: "1,630+", label: "Visitors" },
                    { value: "78",     label: "Leads" },
                    { value: "6 wks",  label: "Build" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 dark:border-zinc-800/50 dark:bg-zinc-900/60"
                    >
                      <p className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-zinc-600">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Expand bar on hover */}
                <div className="mt-4 h-[2px] w-6 rounded-full bg-purple-400/40 transition-all duration-300 group-hover:w-full group-hover:bg-purple-500/60" />
              </a>
            </div>

            {/* Credential metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
              {heroMetrics.map((m) => (
                <div
                  key={m.value}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:border-purple-200 hover:bg-slate-50 dark:border-zinc-800/80 dark:bg-zinc-950/60 dark:hover:border-purple-500/30 dark:hover:bg-zinc-900/60 sm:py-5"
                >
                  <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    <span className="text-shimmer">{m.value}</span>
                  </p>
                  <p className="mt-1.5 text-xs font-medium leading-snug text-slate-600 dark:text-zinc-300 sm:text-sm">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[10px] leading-relaxed text-slate-400 dark:text-zinc-600 sm:text-xs">
                    {m.sub}
                  </p>
                  <div className="mt-3 h-[2px] w-5 rounded-full bg-purple-500/40 transition-all duration-300 group-hover:w-10 group-hover:bg-purple-500" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
