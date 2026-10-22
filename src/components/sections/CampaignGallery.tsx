import type { LocalProjectImage } from "@/lib/local-projects";

export default function CampaignGallery({ images }: { images: LocalProjectImage[] }) {
  const months = [...new Set(images.map((image) => image.month).filter(Boolean))];

  return (
    <div>
      <nav aria-label="Campanhas por mês" className="mb-12 flex flex-wrap gap-3">
        {months.map((month) => (
          <a key={month} href={`#campanha-${month?.toLowerCase()}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-[#ff9f1c]/50 hover:text-[#ff9f1c]">
            Campanha de {month}
          </a>
        ))}
      </nav>
      <div className="space-y-20 sm:space-y-28">
        {months.map((month) => {
          const monthlyImages = images.filter((image) => image.month === month);
          const brands = [...new Set(monthlyImages.map((image) => image.brand))];
          return (
            <section key={month} id={`campanha-${month?.toLowerCase()}`} aria-label={`Campanha mensal de ${month}`} className="scroll-mt-8">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff9f1c]">Campanhas mensais</p>
                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{month}</h3>
                </div>
                <span className="text-xs text-white/40">{monthlyImages.length} peças</span>
              </div>
              <div className="space-y-12 sm:space-y-16">
                {brands.map((brand) => (
                  <div key={brand}>
                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">{brand}</h4>
                    <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {monthlyImages.filter((image) => image.brand === brand).map((image, index) => (
                        <figure key={image.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]">
                          <img src={image.image_url} alt={image.alt_text} loading="lazy" className="h-auto w-full" />
                          <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/40">{brand} · Peça {String(index + 1).padStart(2, "0")}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
