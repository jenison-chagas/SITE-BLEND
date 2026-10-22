import BlendServicesScroll from "@/components/BlendServicesScroll";
import BlendMotion from "@/components/BlendMotion";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#05070a] text-white">
      <BlendMotion />

      {/* =====================================================
          PRIMEIRA DOBRA — HERO
      ====================================================== */}

      <section
        id="blend-hero"
        className="relative min-h-[100svh] overflow-hidden"
      >
        {/* Grid de fundo */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        {/* Luz azul — iluminação ambiente responsiva */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-[clamp(260px,42vw,500px)] w-[min(115vw,850px)] -translate-x-1/2 rounded-full blur-[clamp(80px,12vw,150px)]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,102,173,0.20) 0%, rgba(0,102,173,0.07) 38%, transparent 72%)",
          }}
        />

        {/* Horizonte de luz */}
        <div className="pointer-events-none absolute bottom-[-360px] left-1/2 z-0 h-[520px] w-[180vw] -translate-x-1/2">
          <div
            className="absolute left-1/2 top-0 h-[430px] w-[75%] -translate-x-1/2 rounded-[50%] blur-[110px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,159,28,0.30) 0%, rgba(255,159,28,0.14) 30%, rgba(255,159,28,0.03) 55%, transparent 75%)",
            }}
          />

          <div
            className="absolute left-1/2 top-[75px] h-[300px] w-[68%] -translate-x-1/2 rounded-[50%] blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,102,173,0.16) 0%, rgba(0,102,173,0.04) 45%, transparent 75%)",
            }}
          />

          <div
            className="absolute left-1/2 top-[65px] h-[440px] w-[82%] -translate-x-1/2 rounded-[50%]"
            style={{
              borderTop: "2px solid rgba(255,159,28,0.60)",
              boxShadow: `
                0 -2px 8px rgba(255,159,28,0.35),
                0 -8px 25px rgba(255,159,28,0.18),
                0 -20px 60px rgba(255,159,28,0.08)
              `,
            }}
          />

          <div
            className="absolute left-1/2 top-[79px] h-[400px] w-[74%] -translate-x-1/2 rounded-[50%]"
            style={{
              borderTop: "1px solid rgba(255,159,28,0.16)",
              filter: "blur(1px)",
            }}
          />
        </div>

        {/* Vinheta */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.20) 65%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Cabeçalho */}
        <header className="relative z-30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">
            <a>
              <img
                src="/images/logo.png"
                alt="Blend Creative Design Studio"
                className="h-10 w-auto object-contain"
              />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="/projetos"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Projetos
              </a>

              <a
                href="#servicos"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Serviços
              </a>

              <a
                href="#sobre"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Sobre
              </a>

              <a
                href="#contato"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Contato
              </a>

              <a
                href="#contato"
                className="blend-shimmer rounded-full bg-[#ff9f1c] px-6 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,159,28,0.18)] transition duration-300 hover:scale-[1.03] hover:bg-[#ff9f1c] blend-orange-button"
              >
                Vamos conversar
              </a>
            </nav>

            <a
              href="#contato"
              className="rounded-full bg-[#ff9f1c] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black md:hidden blend-orange-button"
            >
              Contato
            </a>
          </div>
        </header>

        {/* Conteúdo principal do Hero */}
        <div className="relative z-30 mx-auto flex min-h-[calc(100svh-90px)] max-w-7xl flex-col items-center px-6 pb-40 pt-8 text-center md:px-10 md:pt-10 lg:px-16 lg:pt-12">
          {/* Identificação */}
          <div
            data-reveal="up"
            className="relative mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <span className="absolute left-3 h-5 w-5 rounded-full bg-[#ff9f1c]/20 blur-md" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-[#ff9f1c] shadow-[0_0_10px_3px_rgba(255,159,28,0.45)]" />

            <span className="text-xs font-medium tracking-wide text-white/55">
              BLEND Creative Design Studio
            </span>
          </div>

          {/* Título */}
          <h1
            data-reveal="up"
            className="relative z-30 max-w-6xl text-5xl font-medium leading-[0.95] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6.9rem]"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            <span className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[220px] w-[750px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

            <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
              Transformamos
            </span>

            <br />

            <span className="bg-gradient-to-b from-white/95 via-white/75 to-white/45 bg-clip-text text-transparent">
              ideias em
            </span>{" "}

            <span
              className="bg-gradient-to-b from-[#ff9f1c] via-[#ff9f1c] to-[#ff9f1c] bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 0 28px rgba(255,159,28,0.18))",
              }}
            >
              percepção.
            </span>
          </h1>

          {/* Descrição */}
          <p
            data-reveal="up"
            className="relative z-30 mx-auto mt-7 max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7 md:text-lg"
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            Estratégia, branding e design para marcas que querem
            construir presença, gerar conexão e ocupar um espaço maior.
          </p>

          {/* Botões e prova social */}
          <div
            data-reveal="up"
            className="relative z-40 isolate mt-7 flex flex-col items-center gap-3 sm:flex-row"
            style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
          >
            {/* Brilho preso ao grupo do CTA: acompanha a posição real do botão */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[190px] w-[min(110vw,650px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,159,28,0.30) 0%, rgba(0,102,173,0.16) 38%, rgba(255,159,28,0.08) 55%, transparent 76%)",
              }}
            />
            <a
                href="https://wa.me/5579998165971"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com a Blend Creative pelo WhatsApp"
                className="blend-shimmer group relative z-10 mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ff9f1c] px-5 py-3 text-xs font-bold text-black shadow-[0_8px_30px_rgba(255,159,28,0.15)] transition duration-300 hover:scale-[1.03] hover:bg-[#ff9f1c] hover:shadow-[0_8px_40px_rgba(255,159,28,0.28)] sm:mt-7 blend-orange-button"
            > 
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

              <span className="relative">Fale com a Blend</span>

              <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black/20">
                →
              </span>
            </a>

            <div className="blend-social-proof relative z-10">
              <div className="blend-social-proof__avatars">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80"
                  alt="Retrato de cliente"
                  referrerPolicy="no-referrer"
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Retrato de cliente"
                  referrerPolicy="no-referrer"
                />

                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Retrato de cliente"
                  referrerPolicy="no-referrer"
                />

                <span className="blend-social-proof__count">10+</span>
              </div>

              <div className="blend-social-proof__info">
                <div
                  className="blend-social-proof__stars"
                  aria-label="5 estrelas"
                >
                  ★★★★★
                </div>

                <p>+600 Clientes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acabamento inferior do Hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(5,6,7,0.35) 55%, #050607 100%)",
          }}
        />
      </section>

      {/* =====================================================
          SEGUNDA DOBRA — ESSÊNCIA DA BLEND
      ====================================================== */}

      <section
        id="sobre"
        className="relative isolate overflow-hidden bg-[#050607] pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8"
      >
        {/* Textura editorial */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />

        {/* Luz ambiente azul */}
        <div
          className="pointer-events-none absolute -right-32 top-10 -z-10 h-[360px] w-[360px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,173,0.12) 0%, rgba(0,102,173,0.025) 48%, transparent 72%)",
          }}
        />

        {/* Luz ambiente laranja */}
        <div
          className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,159,28,0.09) 0%, rgba(255,159,28,0.02) 45%, transparent 72%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          {/* Identificação discreta */}
          <div
            data-reveal="up"
            className="mb-12 flex items-center gap-3 sm:mb-16"
          >
            <span className="h-2 w-2 rounded-full bg-[#ff9f1c] shadow-[0_0_12px_rgba(255,159,28,0.55)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
              A essência da Blend
            </p>

            <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          {/* Composição editorial */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Título principal */}
            <div data-reveal="left">
              <p className="mb-5 text-sm font-medium tracking-wide text-[#ff9f1c]">
                Design com intenção.
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Marcas fortes não nascem{" "}
                <span className="text-white/35">por acaso.</span>
              </h2>

              <div className="mt-7 flex items-center gap-4">
                <div className="h-px w-14 bg-gradient-to-r from-[#ff9f1c] to-[#ff9f1c]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                  Estratégia antes da estética
                </span>
              </div>
            </div>

            {/* Texto de posicionamento */}
            <div
              data-reveal="right"
              className="flex flex-col justify-end lg:pb-1"
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <h3 className="max-w-xl text-2xl font-medium leading-snug tracking-[-0.035em] sm:text-3xl">
                São construídas{" "}
                <span className="text-[#ff9f1c]">com intenção.</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Uma marca vai muito além daquilo que se vê. Ela precisa de
                direção, personalidade e consistência. Unimos estratégia e
                criatividade para transformar ideias em experiências visuais
                que fortalecem a percepção e geram conexão com as pessoas.
              </p>
            </div>
          </div>

          {/* Cards comerciais premium */}
          <div className="mt-14 grid gap-4 sm:mt-20 md:grid-cols-3 lg:gap-5">
            {/* CARD 01 — ESTRATÉGIA */}
            <article
              data-reveal="up"
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
              className="blend-service-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1016] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff9f1c]/40 hover:bg-[#10131a] sm:p-7 lg:p-8"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "rgba(255,159,28,0.18)" }}
              />

              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                  01 / DIREÇÃO
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff9f1c]/20 bg-[#ff9f1c]/[0.08] text-[#ff9f1c] transition-all duration-300 group-hover:border-[#ff9f1c]/45 group-hover:bg-[#ff9f1c]/[0.14]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" />
                  </svg>
                </div>
              </div>

              <h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">
                Estratégia
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Clareza de posicionamento, propósito e direção para sua marca
                crescer com consistência.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                  Pensamento estratégico
                </span>

                <span className="text-lg text-[#ff9f1c] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </article>

            {/* CARD 02 — IDENTIDADE */}
            <article
              data-reveal="up"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              className="blend-service-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1016] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff9f1c]/40 hover:bg-[#10131a] sm:p-7 lg:p-8"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "rgba(255,159,28,0.18)" }}
              />

              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                  02 / EXPRESSÃO
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff9f1c]/20 bg-[#ff9f1c]/[0.08] text-[#ff9f1c] transition-all duration-300 group-hover:border-[#ff9f1c]/45 group-hover:bg-[#ff9f1c]/[0.14]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.25-3.1 1.8 1.8 0 0 1 1.27-3.07H17A4 4 0 0 0 21 10.8C21 6.5 17 3 12 3Z" />
                    <circle cx="7.5" cy="10" r="1" />
                    <circle cx="10" cy="7" r="1" />
                    <circle cx="14.5" cy="7.5" r="1" />
                  </svg>
                </div>
              </div>

              <h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">
                Identidade
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Sistemas visuais com personalidade para tornar sua marca
                reconhecível em cada ponto de contato.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                  Linguagem visual
                </span>

                <span className="text-lg text-[#ff9f1c] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </article>

            {/* CARD 03 — PRESENÇA */}
            <article
              data-reveal="up"
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
              className="blend-service-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1016] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff9f1c]/40 hover:bg-[#10131a] sm:p-7 lg:p-8"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full opacity-0 blur-[75px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "rgba(0,102,173,0.22)" }}
              />

              <div className="flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                  03 / CONEXÃO
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0066ad]/25 bg-[#0066ad]/[0.10] text-[#6bbcff] transition-all duration-300 group-hover:border-[#0066ad]/50 group-hover:bg-[#0066ad]/[0.18]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 17l6-6 4 4 8-9" />
                    <path d="M15 6h6v6" />
                    <path d="M3 21h18" />
                  </svg>
                </div>
              </div>

              <h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">
                Presença
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Comunicação consistente para aproximar sua marca do público
                e fortalecer sua percepção no mercado.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                  Relevância de marca
                </span>

                <span className="text-lg text-[#ff9f1c] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERCEIRA DOBRA — SERVIÇOS DA BLEND
          Mantida sem alterações para preservar o scroll horizontal
      ====================================================== */}

      <BlendServicesScroll />

      {/* =====================================================
          QUARTA DOBRA — FAIXA DE POSICIONAMENTO
      ====================================================== */}

      <section id="posicionamento" className="blend-positioning">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <p data-reveal="up" className="blend-positioning__label">
            DESIGN COM INTENÇÃO.
          </p>

          <h2 data-reveal="up">
            Sua marca não precisa parecer com todas as outras.
            <br />
            <span>Precisa ser impossível de confundir.</span>
          </h2>

          <p
            data-reveal="up"
            className="blend-positioning__description"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            Estratégia, criatividade e design para construir marcas relevantes.
          </p>
        </div>
      </section>

      {/* =====================================================
          QUINTA DOBRA — PROJETOS BLEND
      ====================================================== */}

      <section
        id="projetos"
        className="relative isolate overflow-hidden bg-[#050607] py-20 sm:py-28 lg:py-36"
      >
        {/* Textura editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Iluminação Blend */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[700px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,159,28,0.13) 0%, rgba(255,159,28,0.09) 35%, rgba(255,159,28,0.035) 58%, transparent 75%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          {/* Identificação */}
          <div
            data-reveal="up"
            className="mb-12 flex items-center gap-3 sm:mb-16"
          >
            <span className="h-2 w-2 rounded-full bg-[#ff9f1c] shadow-[0_0_12px_rgba(255,159,28,0.55)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
              Projetos selecionados
            </p>

            <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          {/* Composição editorial */}
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div data-reveal="left">
              <p className="mb-5 text-sm font-medium tracking-wide text-[#ff9f1c]">
                Ideias que ganham forma.
              </p>

              <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Cada projeto tem{" "}
                <span className="text-white/35">uma história.</span>
              </h2>
            </div>

            <div
              data-reveal="right"
              className="lg:pb-2"
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Estratégia, identidade e criatividade reunidas em projetos
                que traduzem ideias em experiências visuais com personalidade.
                Explore o universo criativo da Blend.
              </p>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#ff9f1c]/50 via-[#ff9f1c]/20 to-transparent" />
            </div>
          </div>

          {/* Faixa visual de destaque */}
          <div
            data-reveal="up"
            className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0d11] sm:mt-16"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,159,28,0.10) 0%, transparent 38%, rgba(0,102,173,0.09) 100%)",
              }}
            />

            <div className="relative flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center md:justify-between md:p-12 lg:p-14">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c] sm:text-xs">
                  BLEND CREATIVE DESIGN STUDIO
                </span>

                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
                  Design pensado para deixar marcas.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                  Conheça os projetos, descubra as soluções e veja como
                  transformamos conceitos em comunicação visual.
                </p>
              </div>

              <a
                href="/projetos"
                className="blend-shimmer group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#ff9f1c] px-6 py-4 text-sm font-bold text-black shadow-[0_8px_30px_rgba(255,159,28,0.18)] transition-all duration-300 hover:bg-[#ff9f1c] md:self-center blend-orange-button"
              >
                Explorar nossos projetos

                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      
      
      {/* =====================================================
          SEXTA DOBRA — CONTATO E CONVERSÃO
      ====================================================== */}

      <section
        id="contato"
        className="relative isolate overflow-hidden bg-[#050607] pb-16 pt-2 text-white sm:pb-20 sm:pt-4 lg:pb-24 lg:pt-6"
      >
        {/* Iluminação discreta no padrão visual da Blend */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#0066ad]/10 blur-[120px]"
        />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          {/* Linha superior — continuidade com a dobra anterior */}
          <div
            data-reveal="up"
            className="mb-8 h-px bg-gradient-to-r from-[#ff9f1c]/50 via-white/10 to-transparent sm:mb-10"
          />

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Título */}
            <div data-reveal="left">
              <p className="mb-4 text-sm font-medium tracking-wide text-[#ff9f1c]">
                Vamos conversar?
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Sua próxima ideia começa{" "}
                <span className="text-white/35">aqui.</span>
              </h2>
            </div>

            {/* Texto e CTA */}
            <div
              data-reveal="right"
              className="lg:pb-2"
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Vamos construir uma presença de marca que
                <br /> 
                traduza o valor do seu negócio e conecte sua
                <br /> 
                empresa às oportunidades certas.
              </p>

              <a
                href="https://wa.me/5579998165971"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com a Blend Creative pelo WhatsApp"
                className="blend-shimmer group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#ff9f1c] px-5 py-3 text-xs font-bold text-black shadow-[0_8px_30px_rgba(255,159,28,0.15)] transition duration-300 hover:scale-[1.03] hover:bg-[#ff9f1c] hover:shadow-[0_8px_40px_rgba(255,159,28,0.28)] sm:mt-7 blend-orange-button"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />

                <span className="relative">Chamar no WhatsApp</span>

                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black/20">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Fechamento discreto */}
          <div
            data-reveal="up"
            className="mt-10 border-t border-white/[0.10] pt-2 sm:mt-12"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 sm:text-xs">
              @2026 BLEND CRATIVE DESIGN STUDIO - Todos os direitos reservados
            </p>
          </div>
        </div>
      </section>



    </main>
  );
}