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
      "Full-stack car listings platform for the Alberta market — built and shipped solo in under 6 weeks. Features an animated multi-step lead funnel, real-time search, user auth, and transactional email via Resend. Deployed on Vercel with Cloudflare CDN.",
    tags: ["Next.js", "PostgreSQL", "Vercel", "Cloudflare", "Resend", "GitHub"],
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
      "Cross-platform mobile app (iOS, Android, Windows, macOS) that replaces a process costing Alberta farmers up to $15,000 per season in lab fees. Users photograph a litmus strip with their phone camera — the app runs the RGB value through a regression model to calculate nutrient PPM, then uses Google Gemini 1.5 Flash with Retrieval-Augmented Generation (RAG) to generate crop-specific, geolocated recommendations in real time. Built with AES-256 encryption and Security by Design throughout. Supervised by Dr. Mohammed Elmorsy and Dr. Samuel Mugo, MacEwan University.",
    tags: [".NET MAUI", "C#", "Python", "Google Gemini", "RAG", "SQLite", "GCP", "Figma"],
    link: "#",
    status: "Live",
    period: "Sept 2024 – Dec 2024",
    org: "Funded Capstone · MacEwan University",
  },
  {
    id: "uav",
    title: "UAV-Based Agronomic Sampling System",
    description:
      "USRI-funded autonomous drone platform designed to eliminate agronomist and laboratory costs from the soil sampling process — targeting up to $1,440/year in savings for a typical Alberta farmer. Hardware includes a Holybro X650 frame, Pixhawk 6C flight controller, and Raspberry Pi 4B companion computer integrated via custom MAVLink telemetry. Custom robotic arm and sample-processing units were 3D-modeled from scratch. Conducted multi-session GPS waypoint accuracy tests, altitude stability tests, drill functionality tests, and revolving strip housing tests to verify each subsystem independently. Presented findings at MacEwan Student Research Day. Supervised by Dr. Mohammed Elmorsy and Dr. Samuel Mugo, MacEwan University.",
    tags: ["Python", "C++", "MAVLink", "Pixhawk 6C", "Raspberry Pi 4B", "3D Modeling", "ArduPilot"],
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
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "C#", "C++", "REST APIs"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "SQL", "SQLite"],
  },
  {
    label: "Tools & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Vercel", "Cloudflare", "Resend"],
  },
  {
    label: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    label: "Security & Systems",
    skills: ["AES-256", "BitLocker", "Bitwarden", "OAuth", "MAVLink", "OWASP"],
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
      "GPA 3.40 / 4.00 for final 30 credits",
      "Presented research at MacEwan Student Research Day",
    ],
  },
  {
    id: "agrilo-timeline",
    type: "project",
    period: "Sept 2024 – Dec 2024",
    label: "Agrilo — Agricultural IoT Framework",
    sublabel: "Funded Capstone · MacEwan University",
    bullets: [
      "Cross-platform IoT app targeting up to $15,000/season in lab costs",
      "RGB regression model + Google Gemini 1.5 Flash (RAG) for real-time crop recommendations",
      ".NET MAUI · C# · Python · SQLite · GCP · AES-256 encryption",
    ],
  },
  {
    id: "audit",
    type: "work",
    period: "Sept 2024 – Jan 2025",
    label: "Security Systems Analyst Intern",
    sublabel: "Alternative Legal Services Firm Inc.",
    bullets: [
      "Audited network, hardware, and Microsoft 365 for a legal firm handling sensitive client data",
      "Deployed Bitwarden across all workstations, enforced 2FA, migrated email domain",
      "Delivered incident response plan and staff security guides formally adopted by the firm",
    ],
  },
  {
    id: "ncl",
    type: "achievement",
    period: "Nov 2024",
    label: "National Cyber League",
    sublabel: "Cyber Skyline · Representing MacEwan University",
    bullets: [
      "Individual: 199th out of 8,484 competitors nationwide — top 2%",
      "Team: 72nd out of 4,893 teams — top 1%",
    ],
  },
  {
    id: "uav-timeline",
    type: "project",
    period: "Jan 2025 – June 2025",
    label: "UAV Agronomic Sampling System",
    sublabel: "USRI Funded Research · MacEwan University",
    bullets: [
      "2-person team — led hardware + software lifecycle from design to field testing",
      "Pixhawk 6C + Raspberry Pi 4B via MAVLink · 3D-modeled all custom components",
      "GPS waypoint, altitude stability & drill tests · presented at Student Research Day",
    ],
  },
  {
    id: "autofinder-timeline",
    type: "project",
    period: "Feb 2026 – Mar 2026",
    label: "AB AutoFinder",
    sublabel: "Personal Project · abautofinder.ca",
    bullets: [
      "Built and shipped solo in under 6 weeks",
      "Next.js · PostgreSQL · Vercel · Cloudflare · Resend",
      "Multi-step funnel, user auth, listing management & transactional email",
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
  { label: "GPA (final 30cr)", value: "3.40 / 4.00" },
  { label: "NCL Ranking",      value: "Top 1% — 4,893 teams" },
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
// HERO METRICS (right-side stats panel)
// Order: breadth → speed → credibility
// The $15K card is kept last and filtered out in hero-section.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const heroMetrics = [
  {
    value: "3",
    label: "Shipped & presented projects",
    sub: "1 live product · 2 funded research",
  },
  {
    value: "6 wks",
    label: "Solo build — AB AutoFinder",
    sub: "concept to live deployment",
  },
  {
    value: "Top 1%",
    label: "National Cyber League 2024",
    sub: "72nd of 4,893 teams nationwide",
  },
  {
    // Kept for reference in project cards — filtered out of hero panel
    value: "$15K",
    label: "Cost pain point targeted by Agrilo per season",
    sub: "based on avg. Alberta farm size",
  },
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