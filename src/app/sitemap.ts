import type { MetadataRoute } from "next";
import { localProjects } from "@/lib/local-projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.blendcreative.com.br";
  return [
    { url: `${origin}/` },
    { url: `${origin}/projetos` },
    ...localProjects
      .filter((project) => project.published)
      .map((project) => ({ url: `${origin}/projetos/${project.slug}` })),
  ];
}
