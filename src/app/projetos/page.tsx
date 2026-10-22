
import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Projetos | Blend Creative Design Studio",
  description:
    "Conheça os projetos de branding, identidade visual, design gráfico, campanhas e experiências digitais da Blend Creative Design Studio.",
};

export const revalidate = 60;

type Project = {
  id: string | number;
  title: string;
  slug: string;
  cover_image: string | null;
  category: string | null;
  description: string | null;
  created_at: string;
};

export default async function ProjetosPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao carregar projetos:", error.message);
  }

  const projects = (data ?? []) as Project[];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-white">
      {/* Identidade visual: grid e iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        <div
          className="absolute -left-48 top-24 h-[440px] w-[440px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,173,0.16), transparent 70%)",
          }}
        />

        <div
          className="absolute -right-48 top-[480px] h-[480px] w-[480px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,44,0.12), transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-[-300px] left-1/2 h-[420px] w-[130%] -translate-x-1/2 rounded-[50%] blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,107,44,0.13), transparent 70%)",
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-28 sm:px-8 sm:pt-32 md:pb-28 lg:px-16">
        {/* Cabeçalho editorial */}
        <header className="relative border-b border-white/[0.09] pb-10 sm:pb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff6b2c] shadow-[0_0_12px_rgba(255,107,44,0.6)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
              Blend Creative Design Studio
            </p>

            <span className="h-px max-w-24 flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                Ideias que ganham{" "}
                <span
                  className="bg-gradient-to-r from-[#ffc27c] via-[#ff7a32] to-[#ff9f1c] bg-clip-text text-transparent"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(255,107,44,0.12))",
                  }}
                >
                  forma e presença.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                Uma seleção de projetos que transforma estratégia, identidade
                visual e criatividade em experiências de marca.
              </p>
            </div>

            <div className="flex items-end gap-4 md:gap-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Portfólio
                </p>

                <p className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
                  {String(projects.length).padStart(2, "0")}
                </p>
              </div>

              <p className="mb-1 max-w-24 text-xs leading-5 text-white/40">
                projetos publicados
              </p>
            </div>
          </div>
        </header>

        {/* Introdução ao catálogo */}
        <div className="flex flex-col gap-3 border-b border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#ff9f1c]" />

            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              Projetos selecionados
            </h2>
          </div>

          <p className="text-xs text-white/35">
            Explore nosso universo criativo
          </p>
        </div>

        {/* Grade completa de projetos */}
        {projects.length > 0 ? (
          <section
            aria-label="Portfólio completo de projetos"
            className="pt-8 sm:pt-10"
          >
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
              {projects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projetos/${project.slug}`}
                  className="group min-w-0"
                >
                  {/* Capa */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.10] bg-[#0d1016] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#ff6b2c]/55 group-hover:shadow-[0_18px_55px_rgba(255,107,44,0.08)]">
                    {project.cover_image ? (
                      <img
                        src={project.cover_image}
                        alt={`Projeto ${project.title}`}
                        loading={index < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-4"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a2540] via-[#101116] to-[#21120c]">
                        <span className="text-5xl font-black tracking-[-0.06em] text-white/[0.12]">
                          BLEND<span className="text-[#ff9f1c]/30">.</span>
                        </span>
                      </div>
                    )}

                    {/* Tratamento de luz */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-16 left-1/2 h-28 w-3/4 -translate-x-1/2 rounded-full bg-[#ff6b2c]/0 blur-[55px] transition-colors duration-500 group-hover:bg-[#ff6b2c]/20"
                    />

                    <span className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-black/45 px-2 text-[10px] font-medium text-white/80 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/40 text-lg text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:border-[#ff9f1c]/60 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  {/* Informações */}
                  <div className="flex items-start justify-between gap-4 pt-4">
                    <div className="min-w-0">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff9f1c]">
                        {project.category || "Projeto criativo"}
                      </p>

                      <h3 className="text-lg font-medium leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#ff9f1c] sm:text-xl">
                        {project.title}
                      </h3>

                      {project.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/45">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-5 shrink-0 text-lg text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff9f1c]"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <section className="relative py-24 text-center sm:py-32">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066ad]/10 blur-[100px]"
            />

            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff9f1c]/20 bg-[#ff9f1c]/[0.07] text-2xl text-[#ff9f1c]">
                ✳
              </span>

              <h2 className="mt-6 text-2xl font-medium tracking-tight sm:text-3xl">
                Novos projetos estão a caminho.
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
                Estamos preparando novos trabalhos para apresentar por aqui.
                Volte em breve para conhecer nosso portfólio.
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/75 transition hover:border-[#ff9f1c]/50 hover:text-[#ff9f1c]"
              >
                Voltar para a página inicial
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        )}

        {/* Encerramento discreto */}
        <footer className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/35">
            Estratégia, criatividade e design trabalhando na mesma direção.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start text-xs text-white/55 transition hover:text-[#ff9f1c] sm:self-auto"
          >
            Voltar para a Blend
            <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
