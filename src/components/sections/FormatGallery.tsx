import type { LocalProjectImage } from "@/lib/local-projects";

export default function FormatGallery({ images }: { images: LocalProjectImage[] }) {
  const formats = ["Feed", "Story"] as const;

  return (
    <div>
      <nav aria-label="Formatos da campanha" className="mb-12 flex flex-wrap gap-3">
        {formats.map((format) => (
          <a key={format} href={`#formato-${format.toLowerCase()}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-[#ff9f1c]/50 hover:text-[#ff9f1c]">
            {format}
          </a>
        ))}
      </nav>
      <div className="space-y-16 sm:space-y-24">
        {formats.map((format) => {
          const pieces = images.filter((image) => image.format === format);
          if (!pieces.length) return null;
          return (
            <section key={format} id={`formato-${format.toLowerCase()}`} aria-label={`Peças para ${format}`} className="scroll-mt-8">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">Dia das Crianças</p>
                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{format}</h3>
                </div>
                <span className="text-xs text-white/40">{pieces.length} peças · {format === "Feed" ? "1080 × 1350" : "1080 × 1920"}</span>
              </div>
              <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:gap-8">
                {pieces.map((image, index) => (
                  <figure key={image.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]">
                    <img src={image.image_url} alt={image.alt_text} loading="lazy" width={1080} height={format === "Feed" ? 1350 : 1920} className="h-auto w-full" />
                    <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/40">{format} · Arte {String(index + 1).padStart(2, "0")}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
