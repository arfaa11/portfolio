"use client";

import { useEffect, useRef, useState } from "react";
import { SectionCard } from "@/components/ui/section-card";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const personalProjects = [
  {
    id: "autofinder",
    title: "AB AutoFinder",
    description:
      "Full-stack car listings platform serving the Alberta market. Animated multi-step funnel, real-time search & filtering, user auth, listing management, and transactional email via Resend. Deployed on Vercel with Cloudflare CDN.",
    tags: ["Next.js", "Supabase", "Vercel", "Cloudflare", "Resend", "GitHub"],
    link: "https://abautofinder.ca",
    status: "Live" as const,
    period: "Feb 2026 – Mar 2026",
  },
  {
    id: "placeholder-1",
    title: "Coming Soon",
    description:
      "Next project in progress. Check back soon — details will be added here once the build is underway.",
    tags: [],
    link: "#",
    status: "Planned" as const,
    period: "TBD",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    title: "Coming Soon",
    description:
      "Another project on the horizon. This card is reserved for an upcoming build.",
    tags: [],
    link: "#",
    status: "Planned" as const,
    period: "TBD",
    placeholder: true,
  },
];

const researchProjects = [
  {
    id: "agrilo",
    title: "Agrilo – Agricultural IoT Framework",
    description:
      "End-to-end IoT platform modernizing agronomic testing. Replaces slow lab processes with real-time, AI-powered soil and water analysis via geolocated farming insights. Built with a Security by Design approach.",
    tags: ["C#", "IoT", "Python", "AI/ML", "SQL", "Security by Design", "Figma"],
    link: "#",
    status: "Live" as const,
    period: "Sept 2024 – Dec 2024",
    org: "Funded Capstone · MacEwan University",
  },
  {
    id: "uav",
    title: "UAV-Based Agronomic Sampling System",
    description:
      "Proof-of-concept autonomous drone platform for automated soil sampling in precision agriculture. Integrated Holybro X650 + Pixhawk 6C + Raspberry Pi 4B via custom MAVLink telemetry scripts. 3D-modeled robotic arm & sample-processing units.",
    tags: ["Python", "C++", "MAVLink", "Raspberry Pi", "3D Modeling", "Bash"],
    link: "#",
    status: "Live" as const,
    period: "Jan 2025 – Jun 2025",
    org: "USRI Funded Research · MacEwan University",
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
    skills: ["PostgreSQL", "Supabase", "MongoDB", "SQL", "Prisma"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Vercel", "Cloudflare", "Resend"],
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

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE DATA
// ─────────────────────────────────────────────────────────────────────────────

type EventType = "education" | "work" | "project" | "achievement";

type TimelineEvent = {
  id: string;
  type: EventType;
  period: string;
  label: string;
  sublabel: string;
  bullets: string[];
};

const timelineEvents: TimelineEvent[] = [
  {
    id: "edu",
    type: "education",
    period: "Sept 2021 – June 2025",
    label: "B.Sc. Computer Science",
    sublabel: "MacEwan University",
    bullets: [
      "Major: Systems & Information Security · Minor: Accounting",
      "CGPA 3.52 / 4.00 for final 30 credits",
      "Presented research at Student Research Day",
    ],
  },
  {
    id: "agrilo-timeline",
    type: "project",
    period: "Sept 2024 – Dec 2024",
    label: "Agrilo — Agricultural IoT Framework",
    sublabel: "Funded Capstone Project · MacEwan University",
    bullets: [
      "End-to-end IoT platform for real-time soil & water analysis",
      "AI-powered geolocated farming insights",
      "C# · Python · SQL · Figma · Security by Design",
    ],
  },
  {
    id: "audit",
    type: "work",
    period: "Sept 2024 – Jan 2025",
    label: "Security Systems Analyst Intern",
    sublabel: "Alternative Legal Services Firm",
    bullets: [
      "Conducted full organizational cybersecurity audit",
      "Deployed BitLocker + Bitwarden, enforced 2FA & privileged access",
      "Documented incident response plan & staff security guides",
    ],
  },
  {
    id: "ncl",
    type: "achievement",
    period: "Nov 2024",
    label: "National Cyber League",
    sublabel: "Cyber Skyline · Representing MacEwan University",
    bullets: [
      "Individual: 199th / 8,484 competitors — top 2%",
      "Team: 72nd / 4,893 teams — top 1%",
    ],
  },
  {
    id: "uav-timeline",
    type: "project",
    period: "Jan 2025 – June 2025",
    label: "UAV Agronomic Sampling System",
    sublabel: "USRI Funded Research · MacEwan University",
    bullets: [
      "Lead developer — autonomous drone soil-sampling platform",
      "Pixhawk 6C + Raspberry Pi 4B integrated via MAVLink telemetry",
      "3D-modeled robotic arm & sample units · Python · C++ · Bash",
    ],
  },
  {
    id: "autofinder-timeline",
    type: "project",
    period: "Feb 2026 – Mar 2026",
    label: "AB AutoFinder",
    sublabel: "Personal Project · abautofinder.ca",
    bullets: [
      "Full-stack car listings platform for the Alberta market",
      "Next.js · Supabase · Vercel · Cloudflare · Resend",
      "Multi-step funnel, auth, listing management & transactional email",
    ],
  },
];

const typeStyles: Record<
  EventType,
  { bar: string; dot: string; badge: string; badgeText: string; label: string }
> = {
  education: {
    bar: "bg-purple-500",
    dot: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]",
    badge: "bg-purple-500/10 border-purple-500/20",
    badgeText: "text-purple-300",
    label: "Education",
  },
  work: {
    bar: "bg-amber-500",
    dot: "bg-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    badge: "bg-amber-500/10 border-amber-500/20",
    badgeText: "text-amber-300",
    label: "Work",
  },
  project: {
    bar: "bg-blue-500",
    dot: "bg-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.7)]",
    badge: "bg-blue-500/10 border-blue-500/20",
    badgeText: "text-blue-300",
    label: "Project",
  },
  achievement: {
    bar: "bg-emerald-500",
    dot: "bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    badge: "bg-emerald-500/10 border-emerald-500/20",
    badgeText: "text-emerald-300",
    label: "Achievement",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function useTypewriter(words: string[], speed = 78, pause = 1900) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDel(true), pause);
        else setCi((c) => c + 1);
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setCi(0); setWi((w) => w + 1); }
        else setCi((c) => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────────────────

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  status: "Live" | "Planned";
  period: string;
  org?: string;
  placeholder?: boolean;
};

function ProjectCard({
  title, description, tags, link, status, period, org, placeholder,
}: ProjectCardProps) {
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

      <h4
        className={`text-lg font-semibold tracking-tight sm:text-xl ${
          placeholder
            ? "text-zinc-600"
            : "text-white transition-colors duration-200 group-hover:text-purple-300"
        }`}
      >
        {title}
      </h4>

      {org && <p className="mt-1 text-xs font-medium text-blue-400/80">{org}</p>}

      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{description}</p>

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

      {!placeholder && (
        <span className="absolute right-4 top-4 text-sm text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400">
          ↗
        </span>
      )}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: PROJECTS
// ─────────────────────────────────────────────────────────────────────────────

function ProjectsContent() {
  const personalRef = useReveal();
  const researchRef = useReveal();

  return (
    <div className="space-y-14 sm:space-y-16">
      {/* Personal Projects */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Personal Projects
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-zinc-800 to-transparent" />
        </div>
        <div ref={personalRef} className="reveal-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {personalProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* University Research Projects */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            University Research Projects
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-zinc-800 to-transparent" />
        </div>
        <div ref={researchRef} className="reveal-stagger grid gap-5 sm:grid-cols-2">
          {researchProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: SKILLS
// ─────────────────────────────────────────────────────────────────────────────

function SkillsContent() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-stagger grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((cat) => (
        <div key={cat.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
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

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE
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
            <div key={event.id} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
              {/* Dot */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                <div className={`h-4 w-4 rounded-full border-2 border-black ${s.dot}`} />
              </div>

              {/* Card */}
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
                  <span className="flex-shrink-0 rounded-full border border-zinc-700/60 bg-zinc-900 px-3 py-1 font-mono text-[10px] text-zinc-500 sm:text-[11px]">
                    {event.period}
                  </span>
                </div>

                {/* Accent bar */}
                <div
                  className={`mt-3 h-[2px] w-8 rounded-full ${s.bar} opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100`}
                />

                <ul className="mt-3 space-y-1.5">
                  {event.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
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
// SECTION: ABOUT
// ─────────────────────────────────────────────────────────────────────────────

function AboutContent() {
  const bioRef = useReveal();
  return (
    <div>
      {/* Bio + quick facts */}
      <div ref={bioRef} className="reveal mb-14 grid gap-8 lg:grid-cols-[1fr_240px]">
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
            <span className="font-medium text-white">professional cybersecurity audit</span> for a
            legal firm, and shipped a{" "}
            <span className="font-medium text-white">live full-stack web product</span> — all while
            finishing my degree with a 3.52 GPA and placing in the{" "}
            <span className="font-medium text-purple-400">top 1–2%</span> nationally in the Cyber
            Skyline NCL competition.
          </p>
          <p>
            Currently seeking{" "}
            <span className="font-medium text-purple-400">new grad opportunities</span> in frontend,
            full-stack, or security-adjacent engineering.
          </p>
        </div>

        {/* Quick facts */}
        <div className="flex flex-col gap-2.5">
          {[
            { label: "Degree",            value: "B.Sc. Computer Science" },
            { label: "Focus",             value: "Systems & Info Security" },
            { label: "Minor",             value: "Accounting" },
            { label: "GPA (final 30cr)",  value: "3.52 / 4.00" },
            { label: "Location",          value: "Edmonton, AB" },
            { label: "Status",            value: "Open to Opportunities" },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 sm:px-5">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">{f.label}</p>
              <p className="mt-0.5 text-xs font-medium text-zinc-200 sm:text-sm">{f.value}</p>
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

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: CONTACT
// ─────────────────────────────────────────────────────────────────────────────

function ContactContent() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
        {/* Left — copy + CTA */}
        <div className="space-y-8">
          <p className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            Whether you have a role in mind, a project to collaborate on, or just
            want to start a conversation — I&apos;m always open. My inbox is
            never closed.
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

          {/* Social links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { label: "GitHub",   href: "https://github.com/" },
              { label: "LinkedIn", href: "https://linkedin.com/in/arfaamumtaz/" },
              { label: "Resume",   href: "/resume.pdf" },
            ].map((l) => (
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

        {/* Right — availability card */}
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center">
          <div className="animate-float rounded-2xl border border-zinc-800 bg-zinc-950/80 p-8 text-center shadow-[0_0_60px_rgba(168,85,247,0.06)]">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            </div>
            <p className="text-sm font-semibold text-white">Available</p>
            <p className="mt-1 text-xs text-zinc-500">Open to new grad roles</p>
            <div className="mt-5 space-y-2 text-left">
              {["Full-Stack Engineering", "Frontend / UI", "Security-Adjacent Eng."].map((r) => (
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

// ─────────────────────────────────────────────────────────────────────────────
// PAGE SECTIONS CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const pageSections = [
  { id: "projects", eyebrow: "Projects",    title: "Selected Work",            content: <ProjectsContent /> },
  { id: "skills",   eyebrow: "Skill Stack", title: "Technologies I Work With", content: <SkillsContent /> },
  { id: "about",    eyebrow: "About Me",    title: "CS Graduate & Builder",    content: <AboutContent /> },
  { id: "contact",  eyebrow: "Contact",     title: "Let's Connect",            content: <ContactContent /> },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED SECTION WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

function AnimatedSection({
  section,
  index,
}: {
  section: (typeof pageSections)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={section.id}
      style={{
        opacity: 0,
        transform: "translateY(48px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.03}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.03}s`,
      }}
    >
      <SectionCard eyebrow={section.eyebrow} title={section.title}>
        {section.content}
      </SectionCard>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

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
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/[0.07] blur-[100px] sm:h-[400px] sm:w-[400px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-8 xl:px-10">
        {/* Eyebrow */}
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
          className="animate-fade-up mt-8 max-w-2xl text-lg font-medium leading-relaxed tracking-[-0.01em] text-zinc-300 sm:mt-10 sm:max-w-3xl sm:text-2xl sm:leading-snug lg:text-3xl xl:text-[2.2rem]"
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
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export function AnimatedPortfolioPage() {
  return (
    <div className="relative bg-black text-white">
      <HeroSection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div>
        {pageSections.map((section, i) => (
          <div key={section.id}>
            <AnimatedSection section={section} index={i} />
            {i < pageSections.length - 1 && (
              <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-8 xl:px-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="mt-12 border-t border-zinc-900 pb-8 pt-6 text-center sm:mt-16">
        <p className="text-[10px] tracking-widest text-zinc-700 sm:text-xs">
          © {new Date().getFullYear()} Arfaa Mumtaz · Built with Next.js
        </p>
      </footer>
    </div>
  );
}