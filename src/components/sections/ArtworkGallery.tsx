import type { LocalProjectImage } from "@/lib/local-projects";

export default function ArtworkGallery({ images }: { images: LocalProjectImage[] }) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:gap-8">
      {images.map((image, index) => (
        <figure key={image.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]">
          <img src={image.image_url} alt={image.alt_text} width={image.width} height={image.height} loading="lazy" className="h-auto w-full" />
          <figcaption className="border-t border-white/[0.07] px-4 py-3 text-xs text-white/45">Arte {String(index + 1).padStart(2, "0")}</figcaption>
        </figure>
      ))}
    </div>
  );
}
