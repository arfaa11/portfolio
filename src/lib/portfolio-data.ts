// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "Live" | "Planned";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  status: ProjectStatus;
  period: string;
  org?: string;
  placeholder?: boolean;
};

export type EventType = "education" | "work" | "project" | "achievement";

export type TimelineEvent = {
  id: string;
  type: EventType;
  period: string;
  label: string;
  sublabel: string;
  bullets: string[];
};

export type SkillCategory = {
  label: string;
  skills: string[];
};

export type TypeStyle = {
  bar: string;
  dot: string;
  badge: string;
  badgeText: string;
  label: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────

export const personalProjects: Project[] = [
  {
    id: "autofinder",
    title: "AB AutoFinder",
    description:
      "Full-stack car listings platform serving the Alberta market. Animated multi-step funnel, real-time search & filtering, user auth, listing management, and transactional email via Resend. Deployed on Vercel with Cloudflare CDN.",
    tags: ["Next.js", "Supabase", "Vercel", "Cloudflare", "Resend", "GitHub"],
    link: "https://abautofinder.ca",
    status: "Live",
    period: "Feb 2026 – Mar 2026",
  },
  {
    id: "placeholder-1",
    title: "Coming Soon",
    description:
      "Next project in progress. Check back soon — details will be added here once the build is underway.",
    tags: [],
    link: "#",
    status: "Planned",
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
    status: "Planned",
    period: "TBD",
    placeholder: true,
  },
];

export const researchProjects: Project[] = [
  {
    id: "agrilo",
    title: "Agrilo – Agricultural IoT Framework",
    description:
      "End-to-end IoT platform modernizing agronomic testing. Replaces slow lab processes with real-time, AI-powered soil and water analysis via geolocated farming insights. Built with a Security by Design approach.",
    tags: ["C#", "IoT", "Python", "AI/ML", "SQL", "Security by Design", "Figma"],
    link: "#",
    status: "Live",
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
    status: "Live",
    period: "Jan 2025 – Jun 2025",
    org: "USRI Funded Research · MacEwan University",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
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
// TIMELINE
// ─────────────────────────────────────────────────────────────────────────────

export const timelineEvents: TimelineEvent[] = [
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

// ─────────────────────────────────────────────────────────────────────────────
// TYPE STYLES
// ─────────────────────────────────────────────────────────────────────────────

export const typeStyles: Record<EventType, TypeStyle> = {
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
// QUICK FACTS (About section sidebar)
// ─────────────────────────────────────────────────────────────────────────────

export const quickFacts = [
  { label: "Degree",           value: "B.Sc. Computer Science" },
  { label: "Focus",            value: "Systems & Info Security" },
  { label: "Minor",            value: "Accounting" },
  { label: "GPA (final 30cr)", value: "3.52 / 4.00" },
  { label: "Location",         value: "Edmonton, AB" },
  { label: "Status",           value: "Open to Opportunities" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO ROLES (typewriter)
// ─────────────────────────────────────────────────────────────────────────────

export const heroRoles = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "Security-Focused Builder",
  "Data Analyst",
  "CS Graduate — June 2025",
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT LINKS
// ─────────────────────────────────────────────────────────────────────────────

export const contactLinks = [
  { label: "GitHub",   href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arfaamumtaz/" },
  { label: "Resume",   href: "/resume.pdf" },
];

// ─────────────────────────────────────────────────────────────────────────────
// AVAILABILITY ROLES (Contact card)
// ─────────────────────────────────────────────────────────────────────────────

export const availabilityRoles = [
  "Full-Stack Engineering",
  "Frontend / UI",
  "Data Analysis",
];