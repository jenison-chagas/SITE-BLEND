import type { LocalProjectImage } from "@/lib/local-projects";

export default function CampaignGallery({ images }: { images: LocalProjectImage[] }) {
  const brands = [...new Set(images.map((image) => image.brand).filter(Boolean))];
  const anchor = (brand: string) => `empresa-${brand.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      <nav aria-label="Campanhas por empresa" className="mb-12 flex flex-wrap gap-3">
        {brands.map((brand) => (
          <a key={brand} href={`#${anchor(brand!)}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-[#ff9f1c]/50 hover:text-[#ff9f1c]">
            {brand}
          </a>
        ))}
      </nav>
      <div className="space-y-20 sm:space-y-28">
        {brands.map((brand) => {
          const companyImages = images.filter((image) => image.brand === brand);
          return (
            <section key={brand} id={anchor(brand!)} aria-label={`Projetos de ${brand}`} className="scroll-mt-8">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">Campanhas</p>
                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{brand}</h3>
                </div>
                <span className="text-xs text-white/40">{companyImages.length} peças</span>
              </div>
              <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {companyImages.map((image, index) => (
                  <figure key={image.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]">
                    <img src={image.image_url} alt={image.alt_text.replace(/^(Junho|Julho) · /, "")} loading="lazy" className="h-auto w-full" />
                    <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/40">{brand} · Peça {String(index + 1).padStart(2, "0")}</figcaption>
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
