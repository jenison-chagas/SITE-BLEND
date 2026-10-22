
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Identidade Visual",
    category: "BRANDING",
    description:
      "Marcas com personalidade, consistência e uma presença visual que conecta.",
    image:
      "linear-gradient(135deg, #24364a 0%, #0a2540 55%, #ff9f1c 160%)",
  },
  {
    number: "02",
    title: "Social Media",
    category: "CONTEÚDO DIGITAL",
    description:
      "Conteúdo estratégico que transforma ideias em comunicação relevante.",
    image:
      "linear-gradient(135deg, #493023 0%, #a74e21 55%, #ff9f1c 120%)",
  },
  {
    number: "03",
    title: "Web & Digital",
    category: "EXPERIÊNCIAS DIGITAIS",
    description:
      "Sites e landing pages que unem estética, experiência e objetivos de negócio.",
    image:
      "linear-gradient(135deg, #152d3e 0%, #0066ad 65%, #78b8e8 140%)",
  },
  {
    number: "04",
    title: "Design e Campanhas",
    category: "DIREÇÃO CRIATIVA",
    description:
      "Conceitos visuais e campanhas desenvolvidos para destacar sua marca.",
    image:
      "linear-gradient(135deg, #342b24 0%, #6b4b32 60%, #ff9f1c 145%)",
  },
  {
    number: "05",
    title: "Audiovisual",
    category: "IMAGEM EM MOVIMENTO",
    description:
      "Produções visuais que contam histórias e aproximam marcas de pessoas.",
    image:
      "linear-gradient(135deg, #202020 0%, #424242 60%, #a65d24 145%)",
  },
  {
    number: "06",
    title: "Materiais Gráficos",
    category: "DESIGN IMPRESSO",
    description:
      "Materiais impressos e comerciais que levam a identidade da marca ao mundo real.",
    image:
      "linear-gradient(135deg, #242c35 0%, #35495b 60%, #ff9f1c 150%)",
  },
];

export default function BlendServicesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const distance = Math.max(
      0,
      Math.ceil(track.scrollWidth - viewport.clientWidth)
    );

    setScrollDistance((previous) =>
      previous === distance ? previous : distance
    );
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => setReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;

    const measureAfterLayout = () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);

      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(measure);
      });
    };

    measureAfterLayout();

    const observer = new ResizeObserver(measureAfterLayout);

    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    window.addEventListener("resize", measureAfterLayout);
    window.addEventListener("orientationchange", measureAfterLayout);

    document.fonts?.ready.then(measureAfterLayout);

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
      window.removeEventListener("resize", measureAfterLayout);
      window.removeEventListener("orientationchange", measureAfterLayout);
    };
  }, [measure]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion || scrollDistance <= 0) {
      setProgress(0);
      return;
    }

    let frame = 0;

    const updateProgress = () => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        const traveled = window.scrollY - sectionTop;
        const nextProgress = Math.max(
          0,
          Math.min(1, traveled / scrollDistance)
        );

        setProgress((previous) =>
          Math.abs(previous - nextProgress) < 0.001
            ? previous
            : nextProgress
        );
      });
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [reducedMotion, scrollDistance]);

  const horizontalOffset = Math.min(
    scrollDistance,
    progress * scrollDistance
  );

  const backgroundProgress = Math.min(1, progress * 1.7);
  const lightness = 10 + backgroundProgress * 42;
  const backgroundColor = `rgb(${lightness}, ${lightness}, ${lightness})`;

  const activeCard = Math.min(
    6,
    Math.max(1, Math.floor(progress * 6) + 1)
  );

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="blend-services"
      aria-labelledby="blend-services-title"
      style={
        {
          "--services-scroll-distance": `${
            reducedMotion ? 0 : scrollDistance
          }px`,
          "--services-background": backgroundColor,
          "--services-horizontal-offset": `${horizontalOffset}px`,
        } as React.CSSProperties
      }
    >
      <div className="blend-services__sticky">
        <div className="blend-services__intro">
          <span className="blend-services__eyebrow">
            O QUE FAZEMOS
          </span>

          <h2 id="blend-services-title">
            Ideias que ganham forma.
            <br />
            <span>Marcas que deixam presença.</span>
          </h2>

          <p>
            Estratégia, criatividade e design trabalhando juntos
            para construir marcas relevantes.
          </p>

          <div className="blend-services__hint" aria-hidden="true">
            <span>↔</span>
            CONTINUE ROLANDO PARA EXPLORAR
          </div>
        </div>

        <div
          ref={viewportRef}
          className="blend-services__viewport"
          aria-label="Serviços da Blend Creative"
        >
          <div
            ref={trackRef}
            className="blend-services__track"
            style={{
              transform: reducedMotion
                ? "none"
                : `translate3d(-${horizontalOffset}px, 0, 0)`,
            }}
          >
            {services.map((service) => (
              <article
                className="blend-service-card"
                key={service.number}
              >
                <div
                  className="blend-service-card__image"
                  style={{ background: service.image }}
                >
                  <span className="blend-service-card__category">
                    {service.category}
                  </span>
                </div>

                <div className="blend-service-card__content">
                  <span className="blend-service-card__number">
                    / {service.number}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blend-services__footer">
          <span>BLEND CREATIVE DESIGN STUDIO</span>
          <span>{String(activeCard).padStart(2, "0")} / 06</span>
        </div>
      </div>
    </section>
  );
}
