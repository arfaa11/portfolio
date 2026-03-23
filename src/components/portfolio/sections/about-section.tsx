"use client";

import { useReveal } from "@/lib/use-portfolio-hooks";
import {
  timelineEvents,
  typeStyles,
  quickFacts,
  type EventType,
} from "@/lib/portfolio-data";

// ─────────────────────────────────────────────────────────────────────────────
// VERTICAL TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

function VerticalTimeline() {
  const ref = useReveal(0.04);

  return (
    <div ref={ref} className="reveal-stagger relative w-full">
      {/* Spine */}
      <div className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-purple-600/60 via-zinc-700/40 to-zinc-800/20" />

      <div className="space-y-0">
        {timelineEvents.map((event) => {
          const s = typeStyles[event.type];
          return (
            <div
              key={event.id}
              className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6"
            >
              {/* Spine dot */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                <div className={`h-4 w-4 rounded-full border-2 border-black ${s.dot}`} />
              </div>

              {/* Event card */}
              <div className="group flex-1 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 px-4 py-4 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 sm:px-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span
                      className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${s.badge} ${s.badgeText}`}
                    >
                      {s.label}
                    </span>
                    <h4 className="text-sm font-semibold leading-snug text-white sm:text-base">
                      {event.label}
                    </h4>
                    <p className={`mt-0.5 text-xs font-medium sm:text-sm ${s.badgeText}`}>
                      {event.sublabel}
                    </p>
                  </div>

                  {/* Period pill */}
                  <span className="flex-shrink-0 rounded-full border border-zinc-700/60 bg-zinc-900 px-3 py-1 font-mono text-[10px] text-zinc-500 sm:text-[11px]">
                    {event.period}
                  </span>
                </div>

                {/* Accent bar — expands on hover */}
                <div
                  className={`mt-3 h-[2px] w-8 rounded-full ${s.bar} opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100`}
                />

                <ul className="mt-3 space-y-1.5">
                  {event.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400 sm:text-sm"
                    >
                      <span className={`mt-[6px] h-1 w-1 flex-shrink-0 rounded-full ${s.bar}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-4 pl-8 sm:gap-5 sm:pl-10">
        {(["education", "work", "project", "achievement"] as EventType[]).map((t) => {
          const s = typeStyles[t];
          return (
            <div key={t} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${s.bar}`} />
              <span className="text-xs text-zinc-600">{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function AboutSection() {
  const bioRef = useReveal();

  return (
    <div>
      {/* Bio + quick facts */}
      <div
        ref={bioRef}
        className="reveal mb-14 grid gap-8 lg:grid-cols-[1fr_240px]"
      >
        {/* Bio copy */}
        <div className="space-y-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
          <p>
            I&apos;m a{" "}
            <span className="font-medium text-white">
              Computer Science graduate from MacEwan University
            </span>{" "}
            (B.Sc., Systems &amp; Information Security, Minor in Accounting —
            June 2025), with hands-on experience across full-stack development,
            autonomous robotics, and real-world cybersecurity.
          </p>
          <p>
            I&apos;ve led an{" "}
            <span className="font-medium text-white">AI-powered agricultural IoT platform</span>,
            engineered an{" "}
            <span className="font-medium text-white">autonomous drone sampling system</span>,
            conducted a{" "}
            <span className="font-medium text-white">professional cybersecurity audit</span>{" "}
            for a legal firm, and shipped a{" "}
            <span className="font-medium text-white">live full-stack web product</span>{" "}
            — placing in the{" "}
            <span className="font-medium text-purple-400">
              top 1% nationally
            </span>{" "}
            (72nd of 4,893 teams) in the Cyber Skyline NCL competition along the way.
          </p>
          <p>
            Currently seeking{" "}
            <span className="font-medium text-purple-400">new grad opportunities</span>{" "}
            in frontend, full-stack, or data engineering. Available immediately,
            open to AB, BC, or SK based positions.
          </p>
        </div>

        {/* Quick facts sidebar */}
        <div className="flex flex-col gap-2.5">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 sm:px-5"
            >
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">
                {f.label}
              </p>
              <p className="mt-0.5 text-xs font-medium text-zinc-200 sm:text-sm">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline — centrepiece */}
      <div>
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Career &amp; Education Timeline
        </p>
        <VerticalTimeline />
      </div>
    </div>
  );
}