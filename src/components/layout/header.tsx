"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skill Stack", href: "#skills" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress bar
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-5 sm:px-10 lg:px-12">

          {/* Logo / Profile */}
          <a
            href="#top"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-700 sm:h-16 sm:w-16 animate-pulse-glow">
              <Image
                src="/profile.png"
                alt="Arfaa Mumtaz"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white sm:block">
              Arfaa Mumtaz
            </span>
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-8 sm:gap-10 lg:gap-14">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative text-base font-medium tracking-[0.1em] transition-colors duration-200 lg:text-lg ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Divider */}
        <div
          className={`absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>
    </>
  );
}