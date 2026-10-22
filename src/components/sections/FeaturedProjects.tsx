import { getFeaturedProjects } from "@/lib/supabase/projects";

const WHATSAPP_LINK =
  "https://wa.me/5579998164971?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Blend%20Creative%20e%20quero%20conversar%20sobre%20um%20projeto.";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section
      id="projetos"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#080a0e] px-6 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:px-16 lg:pb-28 lg:pt-20"
    >
      {/* FUNDO E ILUMINAÇÃO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -right-40 top-0 h-[380px] w-[380px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,173,0.12) 0%, rgba(0,102,173,0.025) 48%, transparent 72%)",
          }}
        />

        <div
          className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,159,28,0.08) 0%, rgba(255,159,28,0.02) 45%, transparent 72%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* IDENTIFICAÇÃO DA SEÇÃO */}
        <div className="mb-12 flex items-center gap-3 sm:mb-16">
          <span className="h-2 w-2 rounded-full bg-[#ff9f1c] shadow-[0_0_12px_rgba(255,159,28,0.55)]" />

          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
            Projetos selecionados
          </p>

          <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* TÍTULO E CTA DE CONTATO */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-5 text-sm font-medium tracking-wide text-[#ff9f1c]">
              Ideias que ganham forma.
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
              Design que transforma{" "}
              <span className="text-white/35">
                percepção em valor.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:pb-1">
            <h3 className="max-w-xl text-2xl font-medium leading-snug tracking-[-0.035em] sm:text-3xl">
              Criatividade com{" "}
              <span className="text-[#ff9f1c]">intenção.</span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Conheça um pouco do nosso trabalho e descubra como uma
              identidade visual bem construída pode fortalecer sua marca
              e valorizar seu negócio.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#ff9f1c] px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff9f1c] hover:shadow-[0_8px_30px_rgba(255,159,28,0.18)] blend-orange-button"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.09 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.59 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.84 1.49h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.53-8.42ZM12.1 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.89-9.88a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.44 9.87-9.9 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Vamos conversar
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* PROJETOS EM DESTAQUE */}
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-white/[0.09] bg-[#0d1016] px-6 py-16 text-center sm:px-10 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Portfólio
            </p>

            <h3 className="mt-5 text-2xl font-medium leading-snug tracking-[-0.035em] text-white sm:text-3xl">
              Sua marca pode ser nosso próximo projeto.
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
              Entre em contato com a Blend e vamos conversar sobre suas
              ideias e os objetivos do seu negócio.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#ff9f1c] px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff9f1c] blend-orange-button"
            >
              Solicitar um projeto
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
            {projects.slice(0, 4).map((project, index) => (
              <article
                key={project.id}
                className="group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1016] transition-all duration-500 hover:-translate-y-1 hover:border-[#ff9f1c]/40 hover:bg-[#10131a]"
              >
                <a
                  href={`/projetos/${project.slug}`}
                  aria-label={`Conheça o projeto ${project.title}`}
                  className="block"
                >
                  {/* IMAGEM DO PROJETO */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1420]">
                    {project.cover_image ? (
                      <img
                        src={project.cover_image}
                        alt={project.title}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="relative flex h-full items-center justify-center overflow-hidden">
                        <div className="absolute h-48 w-48 rounded-full bg-[#0066ad]/20 blur-[70px]" />

                        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ff9f1c]/10 blur-[70px]" />

                        <span className="relative text-5xl font-black tracking-[-0.06em] text-white/15 sm:text-6xl">
                          BLEND<span className="text-[#ff9f1c]/60">.</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 backdrop-blur-md">
                        Projeto {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-lg text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ff9f1c]/50 group-hover:bg-[#ff9f1c] group-hover:text-[#080a0e]">
                      ↗
                    </div>
                  </div>

                  {/* INFORMAÇÕES DO PROJETO */}
                  <div className="p-6 sm:p-7 lg:p-8">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                        Blend Creative Studio
                      </span>

                      {project.year && (
                        <span className="text-xs font-medium tracking-wide text-white/35">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff9f1c]">
                      {project.title}
                    </h3>

                    {project.short_description && (
                      <p className="mt-3 text-sm leading-7 text-white/50">
                        {project.short_description}
                      </p>
                    )}

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors group-hover:text-white">
                        Ver detalhes do projeto
                      </span>

                      <span className="text-lg text-[#ff9f1c] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}

        {/* CTA FINAL — CONTATO */}
        <div className="mt-12 border-t border-white/[0.08] pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-[#0d1016] p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Seu próximo projeto começa aqui
              </p>

              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-[-0.035em] text-white sm:text-3xl">
                Vamos dar vida à sua ideia?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                Conte para nós o que você precisa. Vamos conversar sobre
                como a Blend pode ajudar sua marca a crescer.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#ff9f1c] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff9f1c] hover:shadow-[0_8px_30px_rgba(255,159,28,0.18)] blend-orange-button"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.09 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.59 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.84 1.49h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.53-8.42ZM12.1 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.89-9.88a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.44 9.87-9.9 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>

              Solicitar um projeto
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}