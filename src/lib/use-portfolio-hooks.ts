"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to a div ref and adds the "visible"
 * class when the element enters the viewport. Used for scroll-reveal
 * animations driven by CSS (.reveal, .reveal-stagger in globals.css).
 */
export function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Cycles through an array of strings with a typewriter effect —
 * typing forward then deleting before moving to the next word.
 */
export function useTypewriter(
  words: string[],
  speed = 78,
  pause = 1900
): string {
  const [display, setDisplay] = useState("");
  const [wi, setWi]           = useState(0);
  const [ci, setCi]           = useState(0);
  const [del, setDel]         = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDel(true), pause);
        else setCi((c) => c + 1);
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDel(false);
          setCi(0);
          setWi((w) => w + 1);
        } else {
          setCi((c) => c - 1);
        }
      }
    }, del ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}