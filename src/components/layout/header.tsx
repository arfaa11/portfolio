"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills",   href: "#skills"   },
  { name: "About",    href: "#about"    },
  { name: "Contact",  href: "#contact"  },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
      setScrolled(window.scrollY > 40);

      const ids = navItems.map((i) => i.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
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
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-12">

          {/* Wordmark — just the name as text, no image */}
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.12em] text-zinc-300 transition-colors duration-200 hover:text-white sm:text-base"
          >
            AM
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-5 sm:gap-7 lg:gap-10">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative text-xs font-medium tracking-[0.1em] transition-colors duration-200 sm:text-sm lg:text-base ${
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom border — visible after scroll */}
        <div
          className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>
    </>
  );
}