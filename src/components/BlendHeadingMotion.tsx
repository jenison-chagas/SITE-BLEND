"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const CARD_CONTAINERS = [
  "article", "figure", ".blend-service-card", ".rounded-2xl", ".rounded-xl",
  '[aria-label="Portfólio completo de projetos"]', "[data-no-title-reveal]",
].join(",");

let activeSmoothScroll: Lenis | null = null;
let projectWasOpened = false;
let historyListenerInstalled = false;

export function scrollToProjectTop() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (activeSmoothScroll) {
    activeSmoothScroll.scrollTo(0, { force: true, duration: 0.9, immediate: reducedMotion });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? "instant" : "smooth" });
  }
}

export default function BlendHeadingMotion() {
  const pathname = usePathname();
  const returningToProjects = useRef(false);

  const restoreProjects = useCallback(() => {
    const card = document.querySelector('[aria-label="Portfólio completo de projetos"]')?.parentElement;
    if (!card) return false;
    const headerBottom = document.querySelector("#blend-hero header")?.getBoundingClientRect().bottom ?? 0;
    const top = Math.max(0, card.getBoundingClientRect().top + window.scrollY - Math.max(0, headerBottom) - 16);
    if (activeSmoothScroll) {
      activeSmoothScroll.resize();
      activeSmoothScroll.scrollTo(top, { immediate: true, force: true });
    } else window.scrollTo({ top, left: 0, behavior: "instant" });
    return true;
  }, []);

  useLayoutEffect(() => {
    if (historyListenerInstalled) return;
    historyListenerInstalled = true;
    const onHistoryNavigation = () => {
      if (window.location.pathname !== "/" || !projectWasOpened) return;
      projectWasOpened = false;
      returningToProjects.current = true;
      let frame = 0;
      let timer = 0;
      let attempts = 0;
      let stopped = false;
      const observer = new ResizeObserver(() => { if (!stopped) restoreProjects(); });
      const finish = () => {
        stopped = true;
        returningToProjects.current = false;
        cancelAnimationFrame(frame);
        window.clearTimeout(timer);
        observer.disconnect();
        window.removeEventListener("wheel", finish);
        window.removeEventListener("touchstart", finish);
        window.removeEventListener("keydown", finish);
      };
      const restoreWhenReady = () => {
        if (stopped || window.location.pathname !== "/") return finish();
        if (!restoreProjects()) {
          if (++attempts < 120) frame = requestAnimationFrame(restoreWhenReady);
          else finish();
          return;
        }
        const main = document.querySelector("main");
        if (main) observer.observe(main);
        frame = requestAnimationFrame(restoreProjects);
        timer = window.setTimeout(finish, 600);
      };
      window.addEventListener("wheel", finish, { once: true, passive: true });
      window.addEventListener("touchstart", finish, { once: true, passive: true });
      window.addEventListener("keydown", finish, { once: true });
      frame = requestAnimationFrame(restoreWhenReady);
    };
    window.addEventListener("popstate", onHistoryNavigation, true);
    // This listener belongs to the app, including cached history entries.
  }, [pathname, restoreProjects]);

  useLayoutEffect(() => {
    if (pathname === "/") {
      const timer = window.setTimeout(() => { projectWasOpened = false; }, 0);
      return () => window.clearTimeout(timer);
    }
    if (pathname.startsWith("/projetos/")) projectWasOpened = true;
    if (!pathname.startsWith("/projetos/") || window.location.hash) return;
    const resetProjectScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    resetProjectScroll();
    const frame = requestAnimationFrame(resetProjectScroll);
    window.addEventListener("blend-loader-complete", resetProjectScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("blend-loader-complete", resetProjectScroll);
    };
  }, [pathname, restoreProjects]);

  useEffect(() => {
    if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      let disposed = false;
      let started = false;
      let frame = 0;
      let secondFrame = 0;
      let release = () => {};

      const mount = () => {
        const headings = Array.from(document.querySelectorAll<HTMLElement>("main h1, main h2, main h3"))
          .filter((heading) => !heading.closest(CARD_CONTAINERS)
            && !heading.classList.contains("sr-only") && heading.getClientRects().length > 0);
        const owners = new Set<HTMLElement>();
        const splits: SplitText[] = [];
        const context = gsap.context(() => {});
        const pending = new Set<HTMLElement>();
        const prepared = new Set<HTMLElement>();
        let prepareFrame = 0;
        const prepare = (heading: HTMLElement) => {
          if (disposed || prepared.has(heading)) return;
          prepared.add(heading);
          let element: HTMLElement | null = heading;
          while (element && element.tagName !== "MAIN") {
            if (element.hasAttribute("data-reveal")) {
              owners.add(element);
              element.classList.add("blend-title-owner");
            }
            element = element.parentElement;
          }
          context.add(() => {
            let played = false;
            const label = heading.innerText.replace(/\s+/g, " ").trim();
            const split = SplitText.create(heading, {
              type: "lines",
              mask: "lines",
              linesClass: "blend-heading-line",
              autoSplit: true,
              aria: "auto",
              onSplit(self) {
                heading.setAttribute("aria-label", label);
                const style = getComputedStyle(heading);
                if (style.backgroundImage !== "none" && style.backgroundClip.includes("text")) {
                  self.lines.forEach((line) => {
                    const ink = line as HTMLElement;
                    ink.style.backgroundImage = style.backgroundImage;
                    ink.style.backgroundClip = "text";
                    ink.style.setProperty("-webkit-background-clip", "text");
                    ink.style.color = "transparent";
                  });
                }
                if (played) {
                  gsap.set(self.lines, { clearProps: "transform", willChange: "auto" });
                  return;
                }
                return gsap.fromTo(self.lines, { yPercent: 110, scale: 1.03 }, {
                  yPercent: 0,
                  scale: 1,
                  transformOrigin: "50% 100%",
                  duration: 1.1,
                  stagger: 0.08,
                  ease: "power4.out",
                  onStart: () => { played = true; },
                  onComplete: () => { gsap.set(self.lines, { clearProps: "transform", willChange: "auto" }); },
                  scrollTrigger: { trigger: heading, start: "top 85%", once: true },
                });
              },
            });
            splits.push(split);
          });
        };
        const prepareNext = () => {
          prepareFrame = 0;
          const heading = pending.values().next().value;
          if (!heading || disposed) return;
          pending.delete(heading);
          prepare(heading);
          if (pending.size) prepareFrame = requestAnimationFrame(prepareNext);
        };
        const headingObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            headingObserver.unobserve(entry.target);
            pending.add(entry.target as HTMLElement);
          });
          if (pending.size && !prepareFrame) prepareFrame = requestAnimationFrame(prepareNext);
        }, { rootMargin: "0px 0px 20% 0px" });
        headings.forEach((heading) => headingObserver.observe(heading));

        const lenis = new Lenis({ autoRaf: false, anchors: true, smoothWheel: true, syncTouch: false });
        activeSmoothScroll = lenis;
        const tick = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();
        if (pathname.startsWith("/projetos/") && !window.location.hash) {
          lenis.scrollTo(0, { immediate: true, force: true });
        }
        if (returningToProjects.current) restoreProjects();

        return () => {
          headingObserver.disconnect();
          cancelAnimationFrame(prepareFrame);
          pending.clear();
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
          if (activeSmoothScroll === lenis) activeSmoothScroll = null;
          context.revert();
          splits.forEach((split) => split.revert());
          owners.forEach((element) => element.classList.remove("blend-title-owner"));
          gsap.ticker.lagSmoothing(1000, 33);
        };
      };

      const begin = () => {
        if (started) return;
        started = true;
        void document.fonts.ready.then(() => {
          if (disposed) return;
          frame = requestAnimationFrame(() => {
            secondFrame = requestAnimationFrame(() => {
              if (!disposed) release = mount();
            });
          });
        });
      };
      if (document.querySelector(".cinematic-loader")) {
        window.addEventListener("blend-loader-complete", begin, { once: true });
      } else begin();

      return () => {
        disposed = true;
        window.removeEventListener("blend-loader-complete", begin);
        cancelAnimationFrame(frame);
        cancelAnimationFrame(secondFrame);
        release();
      };
    });
    return () => media.revert();
  }, [pathname, restoreProjects]);

  return <style>{`
    html.blend-motion-ready [data-reveal].blend-title-owner {
      opacity: 1;
      transform: none;
      transition: none;
      will-change: auto;
    }
    .blend-heading-line-mask {
      overflow: clip !important;
      overflow-clip-margin: 0.18em;

    }
    #blend-hero h1 .blend-heading-line > span.bg-clip-text {
      display: inline-block;
      padding: 0.08em 0.06em 0.14em;
      margin: -0.08em -0.06em -0.14em;
      line-height: 1.12;
      vertical-align: baseline;
    }
    .blend-heading-line { will-change: transform; }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto !important; }
    }
  `}</style>;
}





export function ProjectBackToTop() {
  return (
    <button
      type="button"
      onClick={scrollToProjectTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ff9f1c]/70 bg-transparent text-[#ff9f1c] transition duration-300 hover:-translate-y-1 hover:border-[#ff9f1c] hover:shadow-[0_0_24px_rgba(255,159,28,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9f1c] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
