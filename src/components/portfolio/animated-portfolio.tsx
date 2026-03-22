"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionCard } from "@/components/ui/section-card";

// ─── DATA ───────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Agrilo – Agricultural IoT Framework",
    description:
      "End-to-end IoT platform modernizing agronomic testing. Replaces slow, costly lab processes with real-time, AI-powered soil and water analysis via geolocated farming insights. Built with a 'Security by Design' approach — robust encryption and secure data handling throughout.",
    tags: ["IoT", "Python", "AI/ML", "SQL", "Security by Design", "Figma"],
    link: "#",
    status: "Live",
  },
  {
    title: "UAV Agronomic Sampling System",
    description:
      "Proof-of-concept autonomous drone platform for automated soil sampling in precision agriculture. Integrated Holybro X650 + Pixhawk 6C + Raspberry Pi 4B via custom MAVLink telemetry scripts. Designed & 3D-modeled a robotic arm and sample-processing units through a full hardware dev lifecycle.",
    tags: ["Python", "C++", "MAVLink", "Raspberry Pi", "3D Modeling", "Bash"],
    link: "#",
    status: "Live",
  },
  {
    title: "Security Audit – Legal Services Firm",
    description:
      "Comprehensive cybersecurity audit for a legal organization: network architecture discovery, privileged access management, Google Workspace 2FA enforcement, BitLocker & Bitwarden deployment, Windows Defender hardening, and a documented incident response plan.",
    tags: ["Cybersecurity", "Microsoft 365", "BitLocker", "Bitwarden", "OWASP"],
    link: "#",
    status: "Live",
  },
];

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "C#", "C++", "FastAPI", "REST APIs"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Prisma", "Redis"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "Docker", "Bash", "GitHub Actions", "Vercel", "AWS S3"],
  },
  {
    label: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Excel"],
  },
  {
    label: "Security & Systems",
    skills: ["AES Encryption", "BitLocker", "Bitwarden", "OAuth 2.0", "MAVLink", "OWASP"],
  },
];

// ─── TIMELINE DATA ───────────────────────────────────────────────────────────

type TimelineEvent = {
  id: string;
  date: string;
  displayDate: string;
  endDate: string | null;
  displayEndDate: string | null;
  label: string;
  sublabel: string;
  type: "education" | "achievement" | "project" | "work";
  color: "purple" | "emerald" | "blue" | "amber";
  details: string[];
};

const timelineEvents: TimelineEvent[] = [
  {
    id: "edu",
    date: "2021-09",
    displayDate: "Sept 2021",
    endDate: "2025-06",
    displayEndDate: "June 2025",
    label: "B.Sc. Computer Science",
    sublabel: "MacEwan University",
    type: "education",
    color: "purple",
    details: [
      "Major: Systems & Information Security",
      "Minor: Accounting",
      "CGPA 3.52 / 4.00 for final 30 credits",
      "Presented research at Student Research Day",
    ],
  },
  {
    id: "nccdc",
    date: "2023-10",
    displayDate: "Oct 2023",
    endDate: null,
    displayEndDate: null,
    label: "National Cyber League",
    sublabel: "Cyber Skyline Competition",
    type: "achievement",
    color: "emerald",
    details: [
      "Represented MacEwan University",
      "Individual: 199th / 8,484 — top 2%",
      "Team: 72nd / 4,893 teams — top 1%",
    ],
  },
  {
    id: "agrilo",
    date: "2024-01",
    displayDate: "Jan 2024",
    endDate: null,
    displayEndDate: null,
    label: "Agrilo — IoT Framework",
    sublabel: "Capstone Project",
    type: "project",
    color: "blue",
    details: [
      "End-to-end IoT platform for real-time soil & water analysis",
      "AI-powered, geolocated farming insights",
      "Security by Design architecture",
      "Python · SQL · Figma · ML",
    ],
  },
  {
    id: "security",
    date: "2024-09",
    displayDate: "Sept 2024",
    endDate: "2025-01",
    displayEndDate: "Jan 2025",
    label: "Security Systems Analyst",
    sublabel: "Alternative Legal Services Firm",
    type: "work",
    color: "amber",
    details: [
      "Full organizational cybersecurity audit",
      "Privileged access management & 2FA rollout",
      "BitLocker + Bitwarden endpoint security",
      "Documented incident response plan",
    ],
  },
  {
    id: "uav",
    date: "2025-03",
    displayDate: "Mar 2025",
    endDate: "2025-06",
    displayEndDate: "June 2025",
    label: "UAV Sampling System",
    sublabel: "Research Assistant · MacEwan",
    type: "project",
    color: "blue",
    details: [
      "Lead developer for autonomous drone platform",
      "Pixhawk 6C + Raspberry Pi 4B via MAVLink",
      "3D-modeled robotic arm & sample units",
      "Python · C++ · Bash",
    ],
  },
];

// ─── COLOR MAP ───────────────────────────────────────────────────────────────

const colorMap: Record<
  string,
  { dot: string; border: string; badge: string; text: string; glow: string }
> = {
  purple: {
    dot: "bg-purple-500",
    border: "border-purple-500/50",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    text: "text-purple-300",
    glow: "shadow-[0_0_14px_rgba(168,85,247,0.7)]",
  },
  emerald: {
    dot: "bg-emerald-500",
    border: "border-emerald-500/50",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    text: "text-emerald-300",
    glow: "shadow-[0_0_14px_rgba(52,211,153,0.7)]",
  },
  blue: {
    dot: "bg-blue-500",
    border: "border-blue-500/50",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    text: "text-blue-300",
    glow: "shadow-[0_0_14px_rgba(96,165,250,0.7)]",
  },
  amber: {
    dot: "bg-amber-500",
    border: "border-amber-500/50",
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    text: "text-amber-300",
    glow: "shadow-[0_0_14px_rgba(251,191,36,0.7)]",
  },
};

const typeLabel: Record<string, string> = {
  education: "Education",
  achievement: "Achievement",
  project: "Project",
  work: "Work",
};

// ─── DATE UTILS ──────────────────────────────────────────────────────────────

function dateToMonths(dateStr: string): number {
  const [y, m] = dateStr.split("-").map(Number);
  return y * 12 + m;
}

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setCharIndex(0);
            setWordIndex((w) => w + 1);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

// ─── HORIZONTAL TIMELINE ─────────────────────────────────────────────────────

function HorizontalTimeline() {
  const [hovered, setHovered] = useState<string | null>(null);

  const minMonth = dateToMonths("2021-09");
  const maxMonth = dateToMonths("2025-06");
  const totalSpan = maxMonth - minMonth;

  const pct = (dateStr: string) =>
    ((dateToMonths(dateStr) - minMonth) / totalSpan) * 100;

  const years = [2022, 2023, 2024, 2025];

  return (
    <div className="mt-14 w-full select-none">
      {/* Year ruler */}
      <div className="relative mb-3 h-5">
        {years.map((yr) => {
          const pos = pct(`${yr}-01`);
          if (pos < 0 || pos > 100) return null;
          return (
            <span
              key={yr}
              className="absolute -translate-x-1/2 text-[11px] font-mono tracking-widest text-zinc-600"
              style={{ left: `${pos}%` }}
            >
              {yr}
            </span>
          );
        })}
      </div>

      {/* Track */}
      <div className="relative h-[2px] w-full rounded-full bg-zinc-800">
        {/* Gradient fill */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700/30 via-purple-500/20 to-purple-400/10" />

        {/* Duration spans */}
        {timelineEvents
          .filter((e) => e.endDate)
          .map((e) => {
            const left = pct(e.date);
            const right = pct(e.endDate!);
            const c = colorMap[e.color];
            return (
              <div
                key={`span-${e.id}`}
                className={`absolute top-1/2 -translate-y-1/2 h-[3px] rounded-full opacity-50 ${c.dot}`}
                style={{ left: `${left}%`, width: `${right - left}%` }}
              />
            );
          })}

        {/* Nodes */}
        {timelineEvents.map((event) => {
          const left = pct(event.date);
          const c = colorMap[event.color];
          const isHovered = hovered === event.id;

          // Clamp tooltip so it doesn't overflow edges
          const tooltipStyle: React.CSSProperties =
            left > 72
              ? { right: 0, left: "auto", transform: "none" }
              : left < 15
              ? { left: 0, transform: "none" }
              : { left: "50%", transform: "translateX(-50%)" };

          return (
            <div
              key={event.id}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%` }}
              onMouseEnter={() => setHovered(event.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pulse ring */}
              <div
                className={`absolute rounded-full transition-all duration-300 ${c.dot} ${
                  isHovered ? "opacity-20" : "opacity-0"
                }`}
                style={{
                  width: 28,
                  height: 28,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Dot */}
              <div
                className={`relative z-10 h-3 w-3 cursor-pointer rounded-full border-2 border-black transition-all duration-200 ${c.dot} ${
                  isHovered ? `scale-150 ${c.glow}` : "scale-100"
                }`}
              />

              {/* Tooltip */}
              <div
                className={`absolute bottom-7 z-50 w-60 rounded-2xl border bg-zinc-950 p-4 shadow-2xl transition-all duration-200 ${c.border} ${
                  isHovered
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                style={tooltipStyle}
              >
                <span
                  className={`mb-2 inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${c.badge}`}
                >
                  {typeLabel[event.type]}
                </span>

                <p className="text-sm font-semibold leading-snug text-white">
                  {event.label}
                </p>
                <p className={`mt-0.5 text-xs font-medium ${c.text}`}>
                  {event.sublabel}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {event.displayDate}
                  {event.displayEndDate ? ` → ${event.displayEndDate}` : ""}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {event.details.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-xs leading-relaxed text-zinc-400"
                    >
                      <span
                        className={`mt-[5px] h-1 w-1 flex-shrink-0 rounded-full ${c.dot}`}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Date label below */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className="text-[9px] font-mono tracking-wide text-zinc-600">
                  {event.displayDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap items-center gap-5">
        {(["education", "work", "project", "achievement"] as const).map((t) => {
          const sample = timelineEvents.find((e) => e.type === t)!;
          const c = colorMap[sample.color];
          return (
            <div key={t} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${c.dot}`} />
              <span className="text-xs text-zinc-500">{typeLabel[t]}</span>
            </div>
          );
        })}
        <span className="text-xs italic text-zinc-700">— hover nodes to explore</span>
      </div>
    </div>
  );
}

// ─── SECTION COMPONENTS ──────────────────────────────────────────────────────

function ProjectsSection() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)]"
        >
          <span
            className={`mb-4 self-start rounded-full px-3 py-1 text-xs font-medium tracking-wide ${
              project.status === "Live"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
            }`}
          >
            {project.status === "Live" ? "● Live" : "◐ In Progress"}
          </span>

          <h4 className="text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-purple-300">
            {project.title}
          </h4>

          <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="absolute right-5 top-5 text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

function SkillsSection() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {skillCategories.map((cat) => (
        <div
          key={cat.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            {cat.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-150 hover:border-purple-500/50 hover:text-white"
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

function AboutSection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal mt-10">
      {/* Bio + quick facts */}
      <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl space-y-5 text-lg leading-8 text-zinc-400 lg:text-xl lg:leading-9">
          <p>
            I&apos;m a{" "}
            <span className="font-medium text-white">
              Computer Science graduate from MacEwan University
            </span>{" "}
            (B.Sc., Systems &amp; Information Security, Minor in Accounting —
            June 2025), with hands-on experience spanning full-stack
            development, autonomous robotics, and real-world cybersecurity.
          </p>
          <p>
            I&apos;ve led the development of an{" "}
            <span className="font-medium text-white">
              AI-powered agricultural IoT platform
            </span>
            , engineered an{" "}
            <span className="font-medium text-white">
              autonomous drone system
            </span>{" "}
            bridging MAVLink telemetry with precision agriculture, and conducted
            a{" "}
            <span className="font-medium text-white">
              professional cybersecurity audit
            </span>{" "}
            for a legal organization — all while maintaining a 3.52 GPA and
            placing in the{" "}
            <span className="font-medium text-purple-400">top 1–2%</span>{" "}
            nationally in the Cyber Skyline NCL competition.
          </p>
          <p>
            Currently seeking{" "}
            <span className="font-medium text-purple-400">
              new grad opportunities
            </span>{" "}
            in frontend, full-stack, or security-adjacent engineering roles.
          </p>
        </div>

        {/* Quick facts */}
        <div className="flex flex-col gap-3 lg:min-w-[230px]">
          {[
            { label: "Degree", value: "B.Sc. Computer Science" },
            { label: "Focus", value: "Systems & Info Security" },
            { label: "Minor", value: "Accounting" },
            { label: "GPA (final 30cr)", value: "3.52 / 4.00" },
            { label: "Location", value: "Edmonton, AB" },
            { label: "Status", value: "Open to Opportunities" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-3"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                {fact.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-200">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive timeline */}
      <div className="mt-14">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Career &amp; Education Timeline
        </p>
        <HorizontalTimeline />
      </div>
    </div>
  );
}

function ContactSection() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal mt-10 max-w-2xl space-y-8">
      <p className="text-xl leading-8 text-zinc-400">
        I&apos;m always open to interesting conversations, collaborations, or
        opportunities. Whether you have a role in mind or just want to connect
        — my inbox is open.
      </p>

      <a
        href="mailto:arfaamumtaz@hotmail.com"
        className="inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500 px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-200 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] active:scale-[0.98]"
      >
        <span>Say Hello</span>
        <span className="text-purple-200">→</span>
      </a>

      <div className="flex flex-wrap gap-4 pt-2">
        {[
          { label: "GitHub", href: "https://github.com/" },
          { label: "LinkedIn", href: "https://linkedin.com/in/arfaamumtaz/" },
          { label: "Resume", href: "/ARFAA_RESUME_03_26.pdf" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            {link.label}
            <span className="text-zinc-500">↗</span>
          </a>
        ))}
      </div>

      <p className="text-sm text-zinc-600">780-934-8623 · Edmonton, AB</p>
    </div>
  );
}

// ─── SLIDING SECTION WRAPPER ──────────────────────────────────────────────────

const slidingSections = [
  {
    id: "skills",
    eyebrow: "Skill Stack",
    title: "Technologies I Work With",
    content: <SkillsSection />,
  },
  {
    id: "about",
    eyebrow: "About Me",
    title: "CS Graduate & Builder",
    content: <AboutSection />,
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's Connect",
    content: <ContactSection />,
  },
];

function SlidingSection({
  section,
  index,
  total,
}: {
  section: (typeof slidingSections)[number];
  index: number;
  total: number;
}) {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const start = (index + 1) / (total + 1);
  const end = (index + 2) / (total + 1);
  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

  return (
    <motion.div
      id={section.id}
      style={{ y, zIndex: index + 2 }}
      className="pointer-events-auto absolute inset-0"
    >
      <SectionCard eyebrow={section.eyebrow} title={section.title}>
        {section.content}
      </SectionCard>
    </motion.div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const roles = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Security-Focused Builder",
    "Data Analyst",
    "CS Graduate — June 2025",
  ];
  const typed = useTypewriter(roles);

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      <div className="mx-auto grid h-full w-full max-w-[1900px] items-center gap-10 px-4 pt-28 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 xl:px-10">
        <div className="max-w-5xl">
          <div
            className="mb-10 flex animate-fade-up items-center gap-3"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-3 w-3 animate-pulse-glow rounded-full bg-purple-500" />
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500 sm:text-base">
              <span className="text-purple-400">{typed}</span>
              <span className="cursor-blink text-purple-400">|</span>
            </p>
          </div>

          <h1
            className="animate-fade-up text-6xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-8xl lg:text-[8.75rem] xl:text-[10.5rem]"
            style={{ animationDelay: "0.2s" }}
          >
            Arfaa
            <br />
            <span className="text-shimmer">Mumtaz</span>
          </h1>

          <h2
            className="animate-fade-up mt-10 max-w-4xl text-2xl font-medium leading-[1.28] tracking-[-0.03em] text-zinc-300 sm:text-3xl lg:text-4xl xl:text-[2.7rem]"
            style={{ animationDelay: "0.35s" }}
          >
            Building secure, user-focused applications
            <br className="hidden lg:block" /> with modern full-stack
            development.
          </h2>

          <div
            className="animate-fade-up mt-14 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/20 bg-purple-500 px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-200 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] active:scale-[0.98]"
            >
              View Projects
              <span className="text-purple-200">↓</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-8 py-4 text-base font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 active:scale-[0.98]"
            >
              About Me
            </a>

            <a
              href="/ARFAA_RESUME_03_26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-8 py-4 text-base font-medium text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white active:scale-[0.98]"
            >
              Resume
              <span className="text-zinc-500">↗</span>
            </a>
          </div>

          <p
            className="animate-fade-up mt-16 text-xs uppercase tracking-[0.25em] text-zinc-600"
            style={{ animationDelay: "0.75s" }}
          >
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────

export function AnimatedPortfolioPage() {
  return (
    <div id="top" className="relative bg-black text-white">
      <div className="relative h-screen">
        <HeroSection />
      </div>

      <div className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 z-0" id="projects">
            <SectionCard eyebrow="Projects" title="Selected Work">
              <ProjectsSection />
            </SectionCard>
          </div>

          {slidingSections.map((section, index) => (
            <SlidingSection
              key={section.id}
              section={section}
              index={index}
              total={slidingSections.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}