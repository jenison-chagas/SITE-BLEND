import type { LocalProjectImage } from "@/lib/local-projects";

export default function IdentityGallery({ images }: { images: LocalProjectImage[] }) {
  const [presentation, ...logos] = images;

  return (
    <div>
      {presentation && (
        <figure className="overflow-hidden rounded-xl border border-white/10 bg-white">
          <div
            className={presentation.id === "gleide-apresentacao" ? "relative overflow-hidden" : undefined}
            style={presentation.id === "gleide-apresentacao" ? { aspectRatio: "1600 / 7980" } : undefined}
          >
            <img src={presentation.image_url} alt={presentation.alt_text} loading="lazy" width={1600} height={8188} className={presentation.id === "gleide-apresentacao" ? "absolute inset-x-0 top-0 h-auto w-full" : "h-auto w-full"} />
          </div>
        </figure>
      )}
      {logos.length > 0 && (
        <section className="mt-14 sm:mt-20" aria-label="Versões do logo">
          <div className="mb-8 border-b border-white/10 pb-5">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">Sistema de identidade</p>
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">Versões do logo</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {logos.map((image) => (
              <figure key={image.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]">
                <div className="flex aspect-[4/3] items-center justify-center p-8 sm:p-10" style={{backgroundColor:image.background ?? "#f3eee7"}}>
                  <img src={image.image_url} alt={image.alt_text} loading="lazy" className="max-h-full w-full object-contain" />
                </div>
                <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/45">{image.alt_text}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
