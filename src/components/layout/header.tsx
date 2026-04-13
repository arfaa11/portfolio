"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills",   href: "#skills"   },
  { name: "About",    href: "#about"    },
  { name: "Contact",  href: "#contact"  },
];

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6"  y2="6"  />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync with initial theme set by the inline script in layout.tsx
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      );
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl dark:bg-black/90"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-12">
          {/* Wordmark */}
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.12em] text-slate-700 transition-colors duration-200 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white sm:text-base"
          >
            Arfaa Mumtaz
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-5 sm:flex sm:gap-7 lg:gap-10"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={`group relative text-xs font-medium tracking-[0.1em] transition-colors duration-200 sm:text-sm ${
                    active
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
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

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-200 hover:border-slate-300 hover:text-slate-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-zinc-700 dark:text-zinc-400"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="border-t border-slate-100 bg-white/95 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/95 sm:hidden"
          >
            <div className="flex flex-col px-5 py-2">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const active = activeSection === id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "location" : undefined}
                    className={`border-b border-slate-50 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 last:border-0 dark:border-zinc-900 ${
                      active
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </nav>
        )}

        {/* Bottom border — visible after scroll */}
        <div
          className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent transition-opacity duration-300 dark:via-zinc-700/50 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>
    </>
  );
}
