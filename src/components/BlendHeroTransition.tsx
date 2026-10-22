
"use client";

import { useEffect, useState } from "react";

const STRIPS = Array.from({ length: 14 }, (_, index) => index);

export default function BlendHeroTransition() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("blend-hero");
    const sobre = document.getElementById("sobre");

    if (!hero || !sobre) return;

    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect();
        const sobreRect = sobre.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // A transição começa quando a segunda dobra
        // se aproxima da parte inferior da tela.
        const start = viewportHeight * 0.92;
        const end = viewportHeight * 0.12;

        const distance = start - end;
        const value = Math.max(
          0,
          Math.min(1, (start - sobreRect.top) / distance)
        );

        setProgress(value);
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  if (progress <= 0 || progress >= 1) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {STRIPS.map((strip) => {
        // As listras surgem de baixo para cima,
        // com um pequeno atraso entre cada faixa.
        const stagger = strip / STRIPS.length;
        const localProgress = Math.max(
          0,
          Math.min(1, progress * 1.35 - stagger * 0.35)
        );

        const height = 100 / STRIPS.length + 0.2;
        const bottom = (strip / STRIPS.length) * 100;
        const translateY = (1 - localProgress) * 110;

        return (
          <div
            key={strip}
            className="absolute left-0 w-full bg-[#050607]"
            style={{
              bottom: `${bottom}%`,
              height: `${height}%`,
              transform: `translateY(${translateY}%)`,
              opacity: localProgress,
              willChange: "transform, opacity",
            }}
          />
        );
      })}
    </div>
  );
}
