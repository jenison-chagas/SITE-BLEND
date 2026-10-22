import type { LocalProjectImage } from "@/lib/local-projects";

export default function LandingPageGallery({ images }: { images: LocalProjectImage[] }) {
  return (
    <div>
      <nav aria-label="Versões da landing page" className="mb-12 flex flex-wrap gap-3">
        {images.map((image) => (
          <a key={image.id} href={`#tela-${image.screen?.toLowerCase()}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-[#ff9f1c]/50 hover:text-[#ff9f1c]">{image.screen}</a>
        ))}
      </nav>
      <div className="space-y-16 sm:space-y-24">
        {images.map((image) => (
          <section key={image.id} id={`tela-${image.screen?.toLowerCase()}`} aria-label={`Landing page completa em ${image.screen}`} className="scroll-mt-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">{image.screen}</h3>
              <p className="text-xs text-white/40">Página completa</p>
            </div>
            <figure className={image.screen === "Mobile" ? "mx-auto w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10 bg-white" : "overflow-hidden rounded-xl border border-white/10 bg-white"}>
              <img src={image.image_url} alt={image.alt_text} width={image.width} height={image.height} loading="lazy" className="h-auto w-full" />
            </figure>
          </section>
        ))}
      </div>
    </div>
  );
}
