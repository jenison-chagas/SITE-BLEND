"use client";

import { useEffect } from "react";
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

export default function BlendHeadingMotion() {
  const pathname = usePathname();

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
        headings.forEach((heading) => {
          let element: HTMLElement | null = heading;
          while (element && element.tagName !== "MAIN") {
            if (element.hasAttribute("data-reveal")) owners.add(element);
            element = element.parentElement;
          }
        });
        owners.forEach((element) => element.classList.add("blend-title-owner"));

        const splits: SplitText[] = [];
        const context = gsap.context(() => {
          headings.forEach((heading) => {
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
        });

        const lenis = new Lenis({ autoRaf: false, anchors: true, smoothWheel: true, syncTouch: false });
        const tick = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();

        return () => {
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
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
  }, [pathname]);

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



