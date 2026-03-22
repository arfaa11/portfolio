"use client";

import { useEffect, useRef, useState } from "react";
import { SectionCard } from "@/components/ui/section-card";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "AutoFinder",
    description:
      "A full-stack car listings platform serving the Alberta market. Features real-time search and filtering, user authentication, listing management, and automated email notifications. Deployed on Vercel with Cloudflare CDN for performance and reliability. Primarily built to serve as a landing page via targeted ad campaigns, significantly increasing conversion rate of prospects to buyers. ",
    tags: ["Next.js", "Supabase", "Vercel", "Cloudflare", "Resend", "GitHub"],
    link: "https://abautofinder.ca",
    status: "Live",
    period: "Feb 2026 – Mar 2026",
  },
  {
    title: "Agrilo – Agricultural IoT Framework",
    description:
      "End-to-end IoT platform modernizing agronomic testing for the agricultural community. Replaces slow lab processes with real-time, AI-powered soil and water analysis via geolocated farming insights. Built with a 'Security by Design' approach — encryption and secure data handling throughout.",
    tags: ["C#", "IoT", "Python", "AI/ML", "SQL", "Security by Design", "Figma"],
    link: "#",
    status: "Live",
    period: "Sept 2024 – Dec 2024",
  },
  {
    title: "UAV Agronomic Sampling System",
    description:
      "Proof-of-concept autonomous drone platform for automated soil sampling in precision agriculture. Integrated Holybro X650 + Pixhawk 6C + Raspberry Pi 4B via custom MAVLink telemetry scripts. 3D-modeled a robotic arm and sample-processing units through a full hardware dev lifecycle.",
    tags: ["Python", "C++", "MAVLink", "Raspberry Pi", "3D Modeling", "Bash"],
    link: "#",
    status: "Live",
    period: "Jan 2025 – Jun 2025",
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
// TIMELINE DATA  (sorted chronologically)
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
    id: "agrilo",
    type: "project",
    period: "Sept 2024 – Dec 2024",
    label: "Agrilo — Agricultural IoT Framework",
    sublabel: "Funded Capstone Project · MacEwan University",
    bullets: [
      "End-to-end IoT platform for real-time soil & water analysis",
      "AI-powered geolocated farming insights",
      "Built with Security by Design — C# · Python · SQL · Figma",
    ],
  },
  {
    id: "audit",
    type: "work",
    period: "Sept 2024 – Jan 2025",
    label: "Security Systems Analyst Intern",
    sublabel: "Alternative Legal Services Firm · Representing MacEwan University",
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
    id: "uav",
    type: "project",
    period: "Jan 2025 – June 2025",
    label: "UAV Agronomic Sampling System",
    sublabel: "Capstone Project · USRI Funded Research · MacEwan University ",
    bullets: [
      "Lead developer — autonomous drone soil-sampling platform",
      "Pixhawk 6C + Raspberry Pi 4B integrated via MAVLink telemetry",
      "3D-modeled robotic arm & sample units · Python · C++ · Bash",
    ],
  },
  {
    id: "autofinder",
    type: "project",
    period: "Feb 2026 – Mar 2026",
    label: "AB AutoFinder",
    sublabel: "Personal Project · abautofinder.ca",
    bullets: [
      "Full-stack car listings platform for the Alberta market",
      "Next.js · Supabase · Vercel · Cloudflare · Resend",
      "Animated multi-step funnel with client-side form orchestration, edge-runtime API routes, Supabase lead persistence & transactional email delivery via Resend",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TYPE → STYLE MAP
// ─────────────────────────────────────────────────────────────────────────────

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

/** Fires .visible on the element when it enters the viewport */
function useReveal(threshold = 0.1) {
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

/** Typewriter cycling through an array of strings */
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
// VERTICAL TIMELINE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

function VerticalTimeline() {
  const ref = useReveal(0.05);

  return (
    <div ref={ref} className="reveal-stagger relative mt-4 w-full">
      {/* Vertical spine */}
      <div className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-purple-600/60 via-zinc-700/40 to-zinc-800/20" />

      <div className="space-y-0">
        {timelineEvents.map((event, i) => {
          const s = typeStyles[event.type];
          return (
            <div key={event.id} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Dot on the spine */}
              <div className="relative z-10 mt-1 flex-shrink-0">
                <div className={`h-4 w-4 rounded-full border-2 border-black ${s.dot}`} />
              </div>

              {/* Card */}
              <div className="group flex-1 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 px-5 py-4 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    {/* Type badge */}
                    <span
                      className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${s.badge} ${s.badgeText}`}
                    >
                      {s.label}
                    </span>
                    <h4 className="text-base font-semibold leading-snug text-white">
                      {event.label}
                    </h4>
                    <p className={`mt-0.5 text-sm font-medium ${s.badgeText}`}>
                      {event.sublabel}
                    </p>
                  </div>

                  {/* Period pill */}
                  <span className="mt-1 flex-shrink-0 rounded-full border border-zinc-700/60 bg-zinc-900 px-3 py-1 font-mono text-[11px] text-zinc-500">
                    {event.period}
                  </span>
                </div>

                {/* Accent bar */}
                <div className={`mt-3 h-[2px] w-10 rounded-full ${s.bar} opacity-60 transition-all duration-300 group-hover:w-20 group-hover:opacity-100`} />

                {/* Bullets */}
                <ul className="mt-3 space-y-1.5">
                  {event.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-400">
                      <span className={`mt-[7px] h-1 w-1 flex-shrink-0 rounded-full ${s.bar}`} />
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
      <div className="mt-8 flex flex-wrap gap-5 pl-10">
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
// SECTION CONTENT COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function ProjectsContent() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-stagger mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.link}
          target={p.link.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(168,85,247,0.12)]"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              ● {p.status}
            </span>
            <span className="font-mono text-[11px] text-zinc-600">{p.period}</span>
          </div>

          <h4 className="text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-purple-300">
            {p.title}
          </h4>

          <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{p.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300">
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

function SkillsContent() {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-stagger mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((cat) => (
        <div key={cat.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
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

function AboutContent() {
  const bioRef = useReveal();

  return (
    <div className="mt-6">
      {/* ── Short bio + quick facts ── */}
      <div ref={bioRef} className="reveal mb-12 grid gap-10 lg:grid-cols-[1fr_260px]">
        <div className="space-y-5 text-lg leading-8 text-zinc-400 lg:text-xl lg:leading-9">
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
            — all while finishing my degree with a 3.52 GPA and placing in the{" "}
            <span className="font-medium text-purple-400">top 1–2%</span> nationally
            in the Cyber Skyline NCL competition.
          </p>
          <p>
            Currently seeking{" "}
            <span className="font-medium text-purple-400">new grad opportunities</span>{" "}
            in frontend, full-stack, or security-adjacent engineering.
          </p>
        </div>

        {/* Quick facts sidebar */}
        <div className="flex flex-col gap-3">
          {[
            { label: "Degree",          value: "B.Sc. Computer Science" },
            { label: "Focus",           value: "Systems & Info Security" },
            { label: "Minor",           value: "Accounting" },
            { label: "GPA (final 30cr)", value: "3.52 / 4.00" },
            { label: "Location",        value: "Edmonton, AB" },
            { label: "Status",          value: "Open to Opportunities" },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-3">
              <p className="text-xs uppercase tracking-widest text-zinc-500">{f.label}</p>
              <p className="mt-0.5 text-sm font-medium text-zinc-200">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-zinc-500">
          Career &amp; Education Timeline
        </p>
        <VerticalTimeline />
      </div>
    </div>
  );
}

function ContactContent() {
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
        Say Hello <span className="text-purple-200">→</span>
      </a>

      <div className="flex flex-wrap gap-4 pt-2">
        {[
          { label: "GitHub",   href: "https://github.com/arfaa11" },
          { label: "LinkedIn", href: "https://linkedin.com/in/arfaamumtaz/" },
          { label: "Resume",   href: "/resume.pdf" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            {l.label} <span className="text-zinc-500">↗</span>
          </a>
        ))}
      </div>

      <p className="text-sm text-zinc-600">780-934-8623 · Edmonton, AB</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE SECTIONS CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const pageSections = [
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Selected Work",
    content: <ProjectsContent />,
  },
  {
    id: "skills",
    eyebrow: "Skill Stack",
    title: "Technologies I Work With",
    content: <SkillsContent />,
  },
  {
    id: "about",
    eyebrow: "About Me",
    title: "CS Graduate & Builder",
    content: <AboutContent />,
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's Connect",
    content: <ContactContent />,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FADE + SLIDE-UP SECTION  (replaces stack-card)
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
      { threshold: 0.07 }
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
        transform: "translateY(52px)",
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 0.04}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 0.04}s`,
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
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.07] blur-[100px]" />
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 pb-24 pt-36 sm:px-6 lg:px-8 xl:px-10">
        {/* Eyebrow / typewriter */}
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

        {/* Name */}
        <h1
          className="animate-fade-up text-6xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-8xl lg:text-[8.75rem] xl:text-[10.5rem]"
          style={{ animationDelay: "0.2s" }}
        >
          Arfaa
          <br />
          <span className="text-shimmer">Mumtaz</span>
        </h1>

        {/* Tagline */}
        <h2
          className="animate-fade-up mt-10 max-w-4xl text-2xl font-medium leading-[1.28] tracking-[-0.03em] text-zinc-300 sm:text-3xl lg:text-4xl xl:text-[2.7rem]"
          style={{ animationDelay: "0.35s" }}
        >
          Building secure, user-focused applications
          <br className="hidden lg:block" /> with modern full-stack development.
        </h2>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-14 flex flex-wrap items-center gap-5"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/20 bg-purple-500 px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.18)] transition-all duration-200 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] active:scale-[0.98]"
          >
            View Projects <span className="text-purple-200">↓</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 px-8 py-4 text-base font-medium text-zinc-200 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 active:scale-[0.98]"
          >
            About Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-8 py-4 text-base font-medium text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white active:scale-[0.98]"
          >
            Resume <span className="text-zinc-500">↗</span>
          </a>
        </div>

        {/* Scroll nudge */}
        <p
          className="animate-fade-up mt-16 text-xs uppercase tracking-[0.25em] text-zinc-600"
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
      {/* Hero */}
      <HeroSection />

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Content sections — normal document flow, fade+slide on scroll */}
      <div className="space-y-0">
        {pageSections.map((section, i) => (
          <div key={section.id}>
            <AnimatedSection section={section} index={i} />
            {i < pageSections.length - 1 && (
              <div className="mx-auto max-w-[1900px] px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-zinc-900 pb-10 pt-8 text-center">
        <p className="text-xs tracking-widest text-zinc-700">
          © {new Date().getFullYear()} Arfaa Mumtaz · Built with Next.js
        </p>
      </footer>
    </div>
  );
}