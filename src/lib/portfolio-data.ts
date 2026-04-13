// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "Live" | "Planned";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  built: string;
  metrics: ProjectMetric[];
  tags: string[];
  link: string;
  status: ProjectStatus;
  period: string;
  org?: string;
  flagship?: boolean;
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
    tagline: "Full-stack automotive lead-generation platform for the Alberta market",
    problem:
      "Alberta car buyers and sellers had no dedicated local platform — just broad national marketplaces with no seller dashboard, lead tracking, or Alberta-specific search.",
    built:
      "Built and shipped solo in under 6 weeks: animated multi-step seller lead funnel, real-time listing search, user auth, listing management, and transactional email via Resend. Deployed on Vercel with Cloudflare CDN.",
    metrics: [
      { value: "1,630+", label: "Unique visitors" },
      { value: "78",     label: "Seller leads captured" },
      { value: "6 wks",  label: "Concept to live deployment" },
    ],
    tags: ["Next.js", "PostgreSQL", "Supabase", "Cloudflare", "Resend", "Vercel"],
    link: "https://abautofinder.ca",
    status: "Live",
    period: "Feb 2026 – Mar 2026",
    flagship: true,
  },
];

export const researchProjects: Project[] = [
  {
    id: "agrilo",
    title: "Agrilo – Agricultural IoT Framework",
    tagline: "AI-powered soil analysis replacing $15K/season lab testing",
    problem:
      "Alberta farmers spend up to $15,000 per season on slow, expensive soil lab testing with no real-time crop recommendations — a recurring cost for a typical Alberta farm.",
    built:
      "Cross-platform mobile app (iOS, Android, Windows, macOS) that analyzes a litmus strip photo via phone camera. RGB values feed a regression model to calculate nutrient PPM, then Google Gemini 1.5 Flash with RAG delivers geolocated, crop-specific recommendations in real time. Built with AES-256 encryption and Security by Design throughout.",
    metrics: [
      { value: "$15K",     label: "Lab cost pain point per season" },
      { value: "RAG + AI", label: "Gemini 1.5 Flash recommendations" },
    ],
    tags: [".NET MAUI", "C#", "Python", "Google Gemini", "RAG", "SQLite", "GCP", "AES-256"],
    link: "#",
    status: "Live",
    period: "Sept 2024 – Dec 2024",
    org: "Funded Capstone · MacEwan University",
  },
  {
    id: "uav",
    title: "UAV-Based Agronomic Sampling System",
    tagline: "USRI-funded autonomous drone for physical soil sampling",
    problem:
      "No substantial prior research existed on autonomous drones performing physical soil sampling — an identified gap in academic literature. Agronomist and lab visits cost a typical Alberta farmer up to $1,440/year.",
    built:
      "Proof-of-concept autonomous drone on a Holybro X650 frame with Pixhawk 6C flight controller and Raspberry Pi 4B companion computer integrated via custom MAVLink telemetry. Custom 3D-modeled and printed robotic arm for soil collection, soil processing funnel with mixing and filtering, and camera-based sample analysis box. GPS waypoint missions via ArduPilot, controlled by custom Python scripts over MAVLink. Co-authored with Allan Lam, supervised by Dr. Mohammed Elmorsy and Dr. Samuel Mugo.",
    metrics: [
      { value: "USRI",      label: "University research funded" },
      { value: "Novel",     label: "Research gap addressed in literature" },
      { value: "Presented", label: "MacEwan Student Research Day" },
    ],
    tags: ["Python", "ArduPilot", "MAVLink", "Pixhawk 6C", "Raspberry Pi 4B", "Autodesk Fusion", "3D Printing"],
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
    badgeText: "text-purple-600 dark:text-purple-300",
    label: "Education",
  },
  work: {
    bar: "bg-amber-500",
    dot: "bg-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    badge: "bg-amber-500/10 border-amber-500/20",
    badgeText: "text-amber-700 dark:text-amber-300",
    label: "Work",
  },
  project: {
    bar: "bg-blue-500",
    dot: "bg-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.7)]",
    badge: "bg-blue-500/10 border-blue-500/20",
    badgeText: "text-blue-700 dark:text-blue-300",
    label: "Project",
  },
  achievement: {
    bar: "bg-emerald-500",
    dot: "bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    badge: "bg-emerald-500/10 border-emerald-500/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
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
// HERO METRICS
// ─────────────────────────────────────────────────────────────────────────────

export const heroMetrics = [
  {
    value: "3",
    label: "Shipped & presented projects",
    sub: "1 live product · 2 funded research",
  },
  {
    value: "6 weeks",
    label: "Solo build — AB AutoFinder",
    sub: "concept to live deployment",
  },
  {
    value: "Top 1%",
    label: "National Cyber League 2024",
    sub: "72nd of 4,893 teams nationwide",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT LINKS
// ─────────────────────────────────────────────────────────────────────────────

export const contactLinks = [
  { label: "GitHub",   href: "https://github.com/arfaa11" },
  { label: "LinkedIn", href: "https://linkedin.com/in/arfaamumtaz" },
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
