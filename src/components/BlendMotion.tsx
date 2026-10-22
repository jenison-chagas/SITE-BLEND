
"use client";

import { useEffect } from "react";

export default function BlendMotion() {
  useEffect(() => {
    // Ativa o CSS das animações antes de observar os elementos.
    document.documentElement.classList.add("blend-motion-ready");

    const allElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const hero = document.querySelector<HTMLElement>("#blend-hero");

    const heroElements = allElements.filter(
      (element) => hero !== null && hero.contains(element)
    );

    const scrollElements = allElements.filter(
      (element) => !hero || !hero.contains(element)
    );

    let heroRevealed = false;
    let firstFrame = 0;
    let secondFrame = 0;

    const revealHero = () => {
      if (heroRevealed) return;
      heroRevealed = true;

      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => {
          heroElements.forEach((element) => {
            element.classList.add("is-revealed");
          });
        });
      });
    };

    // Sincroniza a primeira dobra com o fim do loading.
    const loader = document.querySelector(".cinematic-loader");

    if (loader) {
      window.addEventListener("blend-loader-complete", revealHero, {
        once: true,
      });
    } else {
      revealHero();
    }

    // Mantém as animações das demais dobras ao entrar na tela.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.classList.add("is-revealed");
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    scrollElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("blend-loader-complete", revealHero);
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return null;
}
