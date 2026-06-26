"use client";

import { useEffect } from "react";

/**
 * Ports the design's mount script, shared across every page:
 *  - staggered blur/translate reveal of [data-reveal] via IntersectionObserver
 *  - scroll-progress bar driven by [data-progress]
 *  - parallax on [data-parallax] (value = strength), only active where present
 */
export default function ScrollEffects() {
  useEffect(() => {
    const frame = requestAnimationFrame(init);

    let io: IntersectionObserver | null = null;
    let onScroll: (() => void) | null = null;
    let rafId = 0;

    function init() {
      const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
      reveals.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(34px)";
        el.style.filter = "blur(7px)";
        el.style.transition =
          "opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1), filter 1.1s cubic-bezier(.2,.7,.2,1)";
        el.style.willChange = "opacity, transform, filter";
        el.style.transitionDelay = Math.min(i % 4, 3) * 0.08 + "s";
      });

      io = new IntersectionObserver(
        (ents) => {
          ents.forEach((e) => {
            if (e.isIntersecting) {
              const t = e.target as HTMLElement;
              t.style.opacity = "1";
              t.style.transform = "translateY(0)";
              t.style.filter = "blur(0)";
              io?.unobserve(t);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io?.observe(el));

      const px = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
      const bar = document.querySelector<HTMLElement>("[data-progress]");

      const apply = () => {
        const vh = window.innerHeight;
        for (const el of px) {
          const r = el.getBoundingClientRect();
          const off = r.top + r.height / 2 - vh / 2;
          const sp = parseFloat(el.getAttribute("data-parallax") || "0") || 0;
          el.style.transform = `translateY(${(-off * sp).toFixed(1)}px)`;
        }
        if (bar) {
          const doc = document.documentElement;
          const max = doc.scrollHeight - vh || 1;
          const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
          bar.style.width = pct.toFixed(2) + "%";
        }
      };

      onScroll = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          apply();
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      apply();
    }

    return () => {
      cancelAnimationFrame(frame);
      if (rafId) cancelAnimationFrame(rafId);
      io?.disconnect();
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, []);

  return null;
}
