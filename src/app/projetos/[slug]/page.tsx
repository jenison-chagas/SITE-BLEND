import ArtworkGallery from "@/components/sections/ArtworkGallery";
import LandingPageGallery from "@/components/sections/LandingPageGallery";
import IdentityGallery from "@/components/sections/IdentityGallery";
import FormatGallery from "@/components/sections/FormatGallery";
import CampaignGallery from "@/components/sections/CampaignGallery";
import { getLocalProject } from "@/lib/local-projects";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  const project = getLocalProject(slug);
  return project?.published ? project : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: project.short_description,
    openGraph: {
      title: project.title,
      description: project.short_description,
      images: [project.cover_image],
    },
  };
}

export default async function ProjetoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const gallery = project.project_images ?? [];
  const presentation = getLocalProject(slug);

  const whatsappMessage = encodeURIComponent(
    `Olá! Conheci o projeto "${project.title}" no portfólio da Blend Creative Design Studio e gostaria de conversar sobre um projeto.`,
  );

  const whatsappUrl = `https://wa.me/5579998165971?text=${whatsappMessage}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-white">
      {/* Fundo e iluminação */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div
          className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,173,0.16), transparent 70%)",
          }}
        />

        <div
          className="absolute -right-48 top-[600px] h-[480px] w-[480px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,159,28,0.12), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-16">
        {/* Navegação */}
        <nav
          aria-label="Navegação estrutural"
          className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40"
        >
          <Link href="/" className="transition hover:text-[#ff9f1c]">
            Início
          </Link>

          <span aria-hidden="true">/</span>

          <Link
            href="/projetos"
            className="transition hover:text-[#ff9f1c]"
          >
            Projetos
          </Link>

          <span aria-hidden="true">/</span>

          <span className="max-w-[220px] truncate text-white/70">
            {project.title}
          </span>
        </nav>

        {/* Cabeçalho editorial */}
        <header className="mb-10 border-b border-white/[0.09] pb-8 sm:mb-12 sm:pb-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff9f1c] shadow-[0_0_12px_rgba(255,159,28,0.6)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              {project.category || "Projeto criativo"}
            </p>
          </div>

          <h1 className="max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
            {project.title}
            <span className="text-[#ff9f1c]">.</span>
          </h1>

          {project.description && (
            <p className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              {project.description}
            </p>
          )}
        </header>

        {/* Capa principal */}
        {project.cover_image && (
          <section aria-label="Imagem principal do projeto">
            <div className="group relative overflow-hidden rounded-xl border border-white/[0.10] bg-[#0d1016]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <img
                src={project.cover_image}
                alt={`Capa do projeto ${project.title}`}
                fetchPriority="high"
                className="mx-auto max-h-[780px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-[#ff9f1c]/10 blur-[70px]"
              />
            </div>
          </section>
        )}

        {/* Galeria */}
        {gallery.length > 0 && (
          <section className="mt-16 sm:mt-20" aria-label="Galeria do projeto">
            <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">
                  Detalhes do trabalho
                </p>

                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {presentation?.gallery_layout === "landing" ? "Desktop e Mobile" : presentation?.gallery_layout === "identity" ? "Apresentação da identidade" : presentation?.gallery_layout === "formats" ? "Feed e Story" : presentation?.gallery_layout === "campaigns" ? "Campanhas mensais" : "Galeria do projeto"}
                </h2>
              </div>

              <span className="text-xs text-white/35">
                {String(gallery.length).padStart(2, "0")} imagens
              </span>
            </div>

            {presentation?.gallery_layout === "artworks" ? (
              <ArtworkGallery images={presentation.project_images} />
            ) : presentation?.gallery_layout === "landing" ? (
              <LandingPageGallery images={presentation.project_images} />
            ) : presentation?.gallery_layout === "identity" ? (
              <IdentityGallery images={presentation.project_images} />
            ) : presentation?.gallery_layout === "formats" ? (
              <FormatGallery images={presentation.project_images} />
            ) : presentation?.gallery_layout === "campaigns" ? (
              <CampaignGallery images={presentation.project_images} />
            ) : (
            <div className={presentation ? "grid grid-cols-1 gap-6 sm:gap-10" : "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"}>
              {gallery.map((image, index) => (
                <figure
                  key={image.id}
                  className={`group relative overflow-hidden rounded-xl border border-white/[0.09] bg-[#0d1016] transition duration-500 hover:border-[#ff9f1c]/40 ${
                    !presentation && index === 0 && gallery.length > 2
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <img
                    src={image.image_url}
                    alt={
                      image.alt_text ||
                      `${project.title} — imagem ${index + 1}`
                    }
                    loading="lazy"
                    className={`w-full object-contain transition-transform duration-700 group-hover:scale-[1.015] ${
                      presentation ? "h-auto" : index === 0 && gallery.length > 2
                        ? "max-h-[760px]"
                        : "max-h-[560px]"
                    }`}
                  />

                  <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/35">
                    {image.alt_text || `Detalhe ${String(index + 1).padStart(2, "0")}`}
                  </figcaption>
                </figure>
              ))}
            </div>
            )}
          </section>
        )}

        {/* Chamada comercial */}
        <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0b0d11] p-7 sm:mt-24 sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#ff9f1c]/10 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#0066ad]/10 blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">
                Vamos criar algo juntos?
              </p>

              <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                Sua marca pode ser{" "}
                <span className="text-[#ff9f1c]">o próximo projeto.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                Conte sua ideia para a Blend e vamos conversar sobre como
                transformá-la em uma solução visual estratégica.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#ff9f1c] px-6 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#ff9f1c] blend-orange-button"
            >
              Solicitar um projeto
              <span aria-hidden="true" className="text-lg">
                ↗
              </span>
            </a>
          </div>
        </section>

        {/* Navegação inferior */}
        <footer className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 self-start text-sm text-white/55 transition hover:text-[#ff9f1c]"
          >
            <span aria-hidden="true">←</span>
            Voltar para todos os projetos
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start text-xs text-white/35 transition hover:text-[#ff9f1c] sm:self-auto"
          >
            Blend Creative Design Studio
            <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}
