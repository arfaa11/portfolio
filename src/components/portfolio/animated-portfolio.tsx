"use client";

import { useEffect, useRef } from "react";
import { SectionCard } from "@/components/ui/section-card";
import { HeroSection }    from "@/components/portfolio/sections/hero-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { SkillsSection }   from "@/components/portfolio/sections/skills-section";
import { AboutSection }    from "@/components/portfolio/sections/about-section";
import { ContactSection }  from "@/components/portfolio/sections/contact-section";

// ─────────────────────────────────────────────────────────────────────────────
// PAGE SECTIONS CONFIG
// Maps each section id → eyebrow label, heading, and its content component.
// ─────────────────────────────────────────────────────────────────────────────

const pageSections = [
  {
    id:      "projects",
    eyebrow: "Projects",
    title:   "Featured Work",
    content: <ProjectsSection />,
  },
  {
    id:      "skills",
    eyebrow: "Skill Stack",
    title:   "Familiar Technologies",
    content: <SkillsSection />,
  },
  {
    id:      "about",
    eyebrow: "About Me",
    title:   "CS Graduate & Builder",
    content: <AboutSection />,
  },
  {
    id:      "contact",
    eyebrow: "Contact",
    title:   "Let's Connect",
    content: <ContactSection />,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED SECTION WRAPPER
// Fade + slide-up on scroll via IntersectionObserver — no scroll hijacking.
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
        transition: [
          `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.03}s`,
          `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.03}s`,
        ].join(", "),
      }}
    >
      <SectionCard eyebrow={section.eyebrow} title={section.title}>
        {section.content}
      </SectionCard>
    </div>
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

      {/* Hero → sections divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Content sections */}
      <div>
        {pageSections.map((section, i) => (
          <div key={section.id}>
            <AnimatedSection section={section} index={i} />

            {/* Inter-section divider (omit after last section) */}
            {i < pageSections.length - 1 && (
              <div className="mx-auto max-w-[1900px] px-5 sm:px-8 lg:px-8 xl:px-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-900 pb-8 pt-6 text-center sm:mt-16">
        <p className="text-[10px] tracking-widest text-zinc-700 sm:text-xs">
          © {new Date().getFullYear()} Arfaa Mumtaz · Built with Next.js
        </p>
      </footer>
    </div>
  );
}