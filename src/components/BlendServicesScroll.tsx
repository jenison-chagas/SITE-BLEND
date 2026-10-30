
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Identidade Visual",
    category: "BRANDING",
    description:
      "Marcas com personalidade, consistência e uma presença visual que conecta.",
    image: "/images/servicos/identidade-visual-1280.webp",
    imageSmall: "/images/servicos/identidade-visual-640.webp",
    imageAlt: "Papelaria e estudos geométricos de identidade visual em azul e laranja",
  },
  {
    number: "02",
    title: "Social Media",
    category: "CONTEÚDO DIGITAL",
    description:
      "Conteúdo estratégico que transforma ideias em comunicação relevante.",
    image: "/images/servicos/social-media-1280.webp",
    imageSmall: "/images/servicos/social-media-640.webp",
    imageAlt: "Composição publicitária com criadora, smartphone e peças para redes sociais",
  },
  {
    number: "03",
    title: "Web & Digital",
    category: "EXPERIÊNCIAS DIGITAIS",
    description:
      "Sites e landing pages que unem estética, experiência e objetivos de negócio.",
    image: "/images/servicos/web-digital-1280.webp",
    imageSmall: "/images/servicos/web-digital-640.webp",
    imageAlt: "Layouts digitais apresentados em monitor e smartphone",
  },
  {
    number: "04",
    title: "Design e Campanhas",
    category: "DIREÇÃO CRIATIVA",
    description:
      "Conceitos visuais e campanhas desenvolvidos para destacar sua marca.",
    image: "/images/servicos/design-campanhas-1280.webp",
    imageSmall: "/images/servicos/design-campanhas-640.webp",
    imageAlt: "Composição de campanha com retrato, peças gráficas, megafone e alvo",
  },
  {
    number: "05",
    title: "Audiovisual",
    category: "IMAGEM EM MOVIMENTO",
    description:
      "Produções visuais que contam histórias e aproximam marcas de pessoas.",
    image: "/images/servicos/audiovisual-1280.webp",
    imageSmall: "/images/servicos/audiovisual-640.webp",
    imageAlt: "Câmera de cinema, claquete e monitor em composição audiovisual",
  },
  {
    number: "06",
    title: "Materiais Gráficos",
    category: "DESIGN IMPRESSO",
    description:
      "Materiais impressos e comerciais que levam a identidade da marca ao mundo real.",
    image: "/images/servicos/materiais-graficos-1280.webp",
    imageSmall: "/images/servicos/materiais-graficos-640.webp",
    imageAlt: "Catálogo, folheto e cartões com composição gráfica em azul e laranja",
  },
];

export default function BlendServicesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [entryDistance, setEntryDistance] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const panel = sectionRef.current?.firstElementChild;
    if (panel && sectionRef.current) {
      sectionRef.current.style.setProperty(
        "--services-panel-height",
        `${Math.ceil(panel.getBoundingClientRect().height)}px`
      );
    }

    const distance = Math.max(
      0,
      Math.ceil(track.scrollWidth - viewport.clientWidth)
    );

    // Tablets até Full HD: apresenta a dobra inteira antes dos cards moverem.
    const waitsForEntry = window.matchMedia(
      "(min-width: 768px) and (max-width: 1920px)"
    ).matches;
    setEntryDistance(
      waitsForEntry ? Math.round(Math.min(140, Math.max(80, window.innerHeight * 0.12))) : 0
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
    if (sectionRef.current?.firstElementChild) observer.observe(sectionRef.current.firstElementChild);

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

        const traveled = window.scrollY - sectionTop - entryDistance;
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
  }, [reducedMotion, scrollDistance, entryDistance]);

  const horizontalOffset = Math.min(
    scrollDistance,
    progress * scrollDistance
  );

  const backgroundProgress = Math.min(1, progress * 1.7);
  const lightness = 10 + backgroundProgress * 42;
  const backgroundColor = `rgb(${lightness}, ${lightness}, ${lightness})`;


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
          "--services-entry-distance": `${reducedMotion ? 0 : entryDistance}px`,
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
                <div className="blend-service-card__image">
                  <img
                    className="blend-service-card__art"
                    src={service.image}
                    srcSet={`${service.imageSmall} 640w, ${service.image} 1280w`}
                    sizes="(max-width: 767px) 82vw, (max-width: 1500px) 34vw, 510px"
                    alt={service.imageAlt}
                    width={1280}
                    height={801}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="blend-service-card__content">

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="blend-services__footer">
          <span>BLEND CREATIVE DESIGN STUDIO</span>
        </div>
      </div>
    </section>
  );
}
