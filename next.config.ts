import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/projetos/otica-e-imagem",
      destination: "/projetos/grupo-alves-barreto",
      permanent: true,
    }];
  },
};

export default nextConfig;
