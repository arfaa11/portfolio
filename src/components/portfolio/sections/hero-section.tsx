"use client";

import { useTypewriter } from "@/lib/use-portfolio-hooks";
import { heroRoles, heroMetrics } from "@/lib/portfolio-data";

export function HeroSection() {
  const typed = useTypewriter(heroRoles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/[0.07] blur-[100px] sm:h-[400px] sm:w-[400px]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-8 xl:px-10">

        {/* Two-column layout on large screens */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] xl:gap-20">

          {/* ── Left: name + tagline + CTAs ── */}
          <div>
            {/* Eyebrow / typewriter */}
            <div
              className="mb-8 flex animate-fade-up items-center gap-3 sm:mb-10"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-2.5 w-2.5 animate-pulse-glow rounded-full bg-purple-500 sm:h-3 sm:w-3" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
                <span className="text-purple-400">{typed}</span>
                <span className="cursor-blink text-purple-400">|</span>
              </p>
            </div>

            {/* Name */}
            <h1
              className="animate-fade-up text-[clamp(3.5rem,12vw,10.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] sm:tracking-[-0.06em] lg:tracking-[-0.07em]"
              style={{ animationDelay: "0.2s" }}
            >
              Arfaa
              <br />
              <span className="text-shimmer">Mumtaz</span>
            </h1>

            {/* Tagline */}
            <h2
              className="animate-fade-up mt-8 max-w-2xl text-lg font-medium leading-relaxed tracking-[-0.01em] text-zinc-300 sm:mt-10 sm:text-2xl sm:leading-snug lg:text-3xl xl:text-[2.2rem]"
              style={{ animationDelay: "0.35s" }}
            >
              Building secure, user-focused applications
              <br className="hidden sm:block" /> with modern full-stack development.
            </h2>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/20 bg-purple-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.18)] transition-all duration-200 hover:bg-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] active:scale-[0.98] sm:px-7 sm:py-3.5"
              >
                View Projects <span className="text-purple-200">↓</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 active:scale-[0.98] sm:px-7 sm:py-3.5"
              >
                About Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-6 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white active:scale-[0.98] sm:px-7 sm:py-3.5"
              >
                Resume <span className="text-zinc-500">↗</span>
              </a>
            </div>

            {/* Scroll nudge */}
            <p
              className="animate-fade-up mt-12 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:mt-14 sm:text-xs"
              style={{ animationDelay: "0.75s" }}
            >
              Scroll to explore
            </p>
          </div>

          {/* ── Right: metrics panel ── */}
          {/* On mobile this renders below the CTAs; on lg+ it sits in the right column */}
          <div
            className="animate-fade-up grid grid-cols-2 gap-3 self-center sm:gap-4 lg:grid-cols-1 lg:gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            {heroMetrics.map((m) => (
              <div
                key={m.value}
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/60 px-5 py-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-900/60 sm:px-6 sm:py-6"
              >
                {/* Metric value */}
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  <span className="text-shimmer">{m.value}</span>
                </p>
                {/* Label */}
                <p className="mt-2 text-xs font-medium leading-snug text-zinc-300 sm:text-sm">
                  {m.label}
                </p>
                {/* Sub-label */}
                <p className="mt-1 text-[10px] leading-relaxed text-zinc-600 sm:text-xs">
                  {m.sub}
                </p>
                {/* Accent bar */}
                <div className="mt-4 h-[2px] w-6 rounded-full bg-purple-500/50 transition-all duration-300 group-hover:w-10 group-hover:bg-purple-500" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}