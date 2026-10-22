import Link from "next/link";
import { localProjects } from "@/lib/local-projects";

export default function ProjectHighlights() {
  return (
    <div className="mt-12 grid gap-6 sm:mt-16">
      {localProjects.filter((project) => project.featured).map((project) => (
        <Link
          key={project.id}
          href={`/projetos/${project.slug}`}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d11] transition-colors hover:border-[#ff9f1c]/50"
          aria-label={`Ver projeto completo: ${project.title}`}
        >
          <div className="aspect-[16/10] overflow-hidden bg-[#e9e2d8] sm:aspect-[16/9]">
            <img src={project.cover_image} alt="Identidade visual de Elaine Carvalho aplicada em papelaria terracota e materiais naturais" loading="lazy" width={1586} height={992} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
          </div>
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff9f1c]">{project.category}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">{project.short_description}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white/80">Ver projeto completo <span aria-hidden="true" className="text-[#ff9f1c]">↗</span></span>
          </div>
        </Link>
      ))}
    </div>
  );
}