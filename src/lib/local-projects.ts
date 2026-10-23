export type LocalProjectImage = {
  id: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
  screen?: "Desktop" | "Mobile";
  width?: number;
  height?: number;
  background?: string;
  format?: "Feed" | "Story";
  month?: string;
  brand?: string;
};

export type LocalProject = {
  id: string;
  title: string;
  slug: string;
  category: string;
  cover_image: string;
  short_description: string;
  description: string;
  created_at: string;
  published: boolean;
  featured: boolean;
  gallery_layout?: "campaigns" | "formats" | "identity" | "landing" | "artworks";
  project_images: LocalProjectImage[];
};

export const localProjects: LocalProject[] = [
  {
    id: "elaine-carvalho",
    title: "Elaine Carvalho — Psicóloga",
    slug: "elaine-carvalho-psicologa",
    category: "Identidade visual",
    cover_image: "/projects/elaine-carvalho/capa.webp",
    short_description: "Uma identidade que conecta acolhimento, equilíbrio e crescimento.",
    description: "Uma identidade visual para Elaine Carvalho, psicóloga clínica, construída a partir de uma linguagem acolhedora e natural. O símbolo une a árvore à representação da psicologia, acompanhado por uma tipografia de traços elegantes e uma paleta de terracota, tons claros e verdes.\n\nA apresentação reúne a marca, suas versões, tipografia, cores e aplicações em papelaria, materiais digitais e peças de comunicação.",
    created_at: "2026-10-22T12:00:00.000Z",
    published: true,
    featured: true,
    project_images: [
      "Apresentação da identidade visual",
      "Sobre Elaine Carvalho",
      "Versões e combinações da marca",
      "Tipografia e paleta de cores",
      "Papelaria institucional",
      "Aplicação em ecobag e caderno",
      "Aplicação em canecas",
      "Cartões e materiais impressos",
      "Presença digital",
      "Aplicação em mídia externa",
      "Crachá e cordão de identificação",
      "Marca em impressão monocromática",
    ].map((caption, index) => ({
      id: `elaine-prancha-${index + 1}`,
      image_url: `/projects/elaine-carvalho/prancha-${String(index + 1).padStart(2, "0")}.webp`,
      alt_text: `Elaine Carvalho — ${caption}`,
      sort_order: index + 1,
    })),
  },
  {
  "id": "aurora-sftline",
  "title": "Aurora Softline",
  "slug": "aurora-sftline",
  "category": "Design Social Media",
  "cover_image": "/projects/aurora-soft-line/capa.webp",
  "short_description": "Campanhas mensais de junho e julho, com uma linguagem visual própria para cada marca.",
  "description": "Design Social Media desenvolvido em campanhas mensais para Aurora Softline. O projeto reúne as peças das campanhas de junho e julho, organizadas por mês e por marca.\n\nAs artes exploram temas de gestão, tecnologia, educação, segurança do trabalho e saúde mental, com composições, cores e elementos gráficos próprios para AEFETIVA, AETECH, EDUCA.SYS, GESST e SMP. A apresentação reúne todas as 29 peças finalizadas dessas duas campanhas.",
  "created_at": "2026-10-22T13:00:00.000Z",
  "published": true,
  "featured": false,
  "gallery_layout": "campaigns",
  "project_images": [
    {
      "id": "aurora-1",
      "image_url": "/projects/aurora-soft-line/peca-01.webp",
      "alt_text": "Junho · AEFETIVA — Documentos bem elaborados",
      "sort_order": 1,
      "month": "Junho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-2",
      "image_url": "/projects/aurora-soft-line/peca-02.webp",
      "alt_text": "Junho · AEFETIVA — Empresas de alta performance revisam processos",
      "sort_order": 2,
      "month": "Junho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-3",
      "image_url": "/projects/aurora-soft-line/peca-03.webp",
      "alt_text": "Junho · AEFETIVA — PGR atualizado",
      "sort_order": 3,
      "month": "Junho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-4",
      "image_url": "/projects/aurora-soft-line/peca-04.webp",
      "alt_text": "Junho · AEFETIVA — PGR PCMSO e LTCAT ESTAO CONVERSANDO",
      "sort_order": 4,
      "month": "Junho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-5",
      "image_url": "/projects/aurora-soft-line/peca-05.webp",
      "alt_text": "Junho · AETECH — Roda empresa tem desafios",
      "sort_order": 5,
      "month": "Junho",
      "brand": "AETECH"
    },
    {
      "id": "aurora-6",
      "image_url": "/projects/aurora-soft-line/peca-06.webp",
      "alt_text": "Junho · AETECH — Seus colaboradores tem voz",
      "sort_order": 6,
      "month": "Junho",
      "brand": "AETECH"
    },
    {
      "id": "aurora-7",
      "image_url": "/projects/aurora-soft-line/peca-07.webp",
      "alt_text": "Junho · AETECH — Vc conhece o clima da sua empresa",
      "sort_order": 7,
      "month": "Junho",
      "brand": "AETECH"
    },
    {
      "id": "aurora-8",
      "image_url": "/projects/aurora-soft-line/peca-08.webp",
      "alt_text": "Junho · EDUCA.SYS — Assédio nao se combate com regra",
      "sort_order": 8,
      "month": "Junho",
      "brand": "EDUCA.SYS"
    },
    {
      "id": "aurora-9",
      "image_url": "/projects/aurora-soft-line/peca-09.webp",
      "alt_text": "Junho · EDUCA.SYS — Empresas grandes investem em pessoas",
      "sort_order": 9,
      "month": "Junho",
      "brand": "EDUCA.SYS"
    },
    {
      "id": "aurora-10",
      "image_url": "/projects/aurora-soft-line/peca-10.webp",
      "alt_text": "Junho · EDUCA.SYS — Inteligência emocional",
      "sort_order": 10,
      "month": "Junho",
      "brand": "EDUCA.SYS"
    },
    {
      "id": "aurora-11",
      "image_url": "/projects/aurora-soft-line/peca-11.webp",
      "alt_text": "Junho · GESST — A maioria dos acidentes",
      "sort_order": 11,
      "month": "Junho",
      "brand": "GESST"
    },
    {
      "id": "aurora-12",
      "image_url": "/projects/aurora-soft-line/peca-12.webp",
      "alt_text": "Junho · GESST — Acidente não avisa",
      "sort_order": 12,
      "month": "Junho",
      "brand": "GESST"
    },
    {
      "id": "aurora-13",
      "image_url": "/projects/aurora-soft-line/peca-13.webp",
      "alt_text": "Junho · GESST — Se a fiscalização chegasse hoje",
      "sort_order": 13,
      "month": "Junho",
      "brand": "GESST"
    },
    {
      "id": "aurora-14",
      "image_url": "/projects/aurora-soft-line/peca-14.webp",
      "alt_text": "Junho · GESST — Segurança não tira férias",
      "sort_order": 14,
      "month": "Junho",
      "brand": "GESST"
    },
    {
      "id": "aurora-15",
      "image_url": "/projects/aurora-soft-line/peca-15.webp",
      "alt_text": "Junho · GESST — Sua empresa está preparada para os desafios do segundo semestre",
      "sort_order": 15,
      "month": "Junho",
      "brand": "GESST"
    },
    {
      "id": "aurora-16",
      "image_url": "/projects/aurora-soft-line/peca-16.webp",
      "alt_text": "Junho · SMP — O esgotamento não surge",
      "sort_order": 16,
      "month": "Junho",
      "brand": "SMP"
    },
    {
      "id": "aurora-17",
      "image_url": "/projects/aurora-soft-line/peca-17.webp",
      "alt_text": "Junho · SMP — Risco psicosocial não é moda",
      "sort_order": 17,
      "month": "Junho",
      "brand": "SMP"
    },
    {
      "id": "aurora-18",
      "image_url": "/projects/aurora-soft-line/peca-18.webp",
      "alt_text": "Junho · SMP — Saúde mental não e benefício",
      "sort_order": 18,
      "month": "Junho",
      "brand": "SMP"
    },
    {
      "id": "aurora-19",
      "image_url": "/projects/aurora-soft-line/peca-19.webp",
      "alt_text": "Junho · SMP — Sua empresa tem evidencias",
      "sort_order": 19,
      "month": "Junho",
      "brand": "SMP"
    },
    {
      "id": "aurora-20",
      "image_url": "/projects/aurora-soft-line/peca-20.webp",
      "alt_text": "Julho · AEFETIVA — crecimento sem execução vira acumulo de pendencias",
      "sort_order": 20,
      "month": "Julho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-21",
      "image_url": "/projects/aurora-soft-line/peca-21.webp",
      "alt_text": "Julho · AEFETIVA — Não basta saber o que precisa ser feito",
      "sort_order": 21,
      "month": "Julho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-22",
      "image_url": "/projects/aurora-soft-line/peca-22.webp",
      "alt_text": "Julho · AEFETIVA — Pendencia não resolvida vira urgencia",
      "sort_order": 22,
      "month": "Julho",
      "brand": "AEFETIVA"
    },
    {
      "id": "aurora-23",
      "image_url": "/projects/aurora-soft-line/peca-23.webp",
      "alt_text": "Julho · AETECH — Sua empresa ainda erde tempo",
      "sort_order": 23,
      "month": "Julho",
      "brand": "AETECH"
    },
    {
      "id": "aurora-24",
      "image_url": "/projects/aurora-soft-line/peca-24.webp",
      "alt_text": "Julho · AETECH — Sua empresa consegue provaro que foi feito",
      "sort_order": 24,
      "month": "Julho",
      "brand": "AETECH"
    },
    {
      "id": "aurora-25",
      "image_url": "/projects/aurora-soft-line/peca-25.webp",
      "alt_text": "Julho · EDUCA.SYS — Processos so funcionam",
      "sort_order": 25,
      "month": "Julho",
      "brand": "EDUCA.SYS"
    },
    {
      "id": "aurora-26",
      "image_url": "/projects/aurora-soft-line/peca-26.webp",
      "alt_text": "Julho · EDUCA.SYS — Quando a equipe não entende o processo",
      "sort_order": 26,
      "month": "Julho",
      "brand": "EDUCA.SYS"
    },
    {
      "id": "aurora-27",
      "image_url": "/projects/aurora-soft-line/peca-27.webp",
      "alt_text": "Julho · GESST — O risco que sua empresa corre",
      "sort_order": 27,
      "month": "Julho",
      "brand": "GESST"
    },
    {
      "id": "aurora-28",
      "image_url": "/projects/aurora-soft-line/peca-28.webp",
      "alt_text": "Julho · GESST — Sua empresa tem gestão em sst",
      "sort_order": 28,
      "month": "Julho",
      "brand": "GESST"
    },
    {
      "id": "aurora-29",
      "image_url": "/projects/aurora-soft-line/peca-29.webp",
      "alt_text": "Julho · SMP — Nenhum proceswso se sustenta com pessoas adoecidas",
      "sort_order": 29,
      "month": "Julho",
      "brand": "SMP"
    }
  ]
},
  {
  "id": "dia-das-criancas",
  "title": "Dia das Crianças",
  "slug": "dia-das-criancas",
  "category": "Design Social Media",
  "cover_image": "/projects/dia-das-criancas/capa.webp",
  "short_description": "Campanhas de Dia das Crianças com cores vibrantes e peças adaptadas para Feed e Story.",
  "description": "Design Social Media para campanhas de Dia das Crianças, com uma linguagem alegre, colorida e lúdica. Crianças, brinquedos, arco-íris e aviões de papel compõem as peças criadas para celebrar a data.\n\nO projeto reúne quatro artes, cada uma adaptada para Feed e Story. As oito peças estão apresentadas integralmente e separadas por formato, preservando a composição e a leitura em cada proporção.",
  "created_at": "2026-10-22T14:00:00.000Z",
  "published": true,
  "featured": false,
  "gallery_layout": "formats",
  "project_images": [
    {
      "id": "criancas-1",
      "image_url": "/projects/dia-das-criancas/feed-1.webp",
      "alt_text": "Dia das Crianças — arte 1, versão para Feed",
      "sort_order": 1,
      "format": "Feed"
    },
    {
      "id": "criancas-2",
      "image_url": "/projects/dia-das-criancas/story-1.webp",
      "alt_text": "Dia das Crianças — arte 1, versão para Story",
      "sort_order": 2,
      "format": "Story"
    },
    {
      "id": "criancas-3",
      "image_url": "/projects/dia-das-criancas/feed-2.webp",
      "alt_text": "Dia das Crianças — arte 2, versão para Feed",
      "sort_order": 3,
      "format": "Feed"
    },
    {
      "id": "criancas-4",
      "image_url": "/projects/dia-das-criancas/story-2.webp",
      "alt_text": "Dia das Crianças — arte 2, versão para Story",
      "sort_order": 4,
      "format": "Story"
    },
    {
      "id": "criancas-5",
      "image_url": "/projects/dia-das-criancas/feed-3.webp",
      "alt_text": "Dia das Crianças — arte 3, versão para Feed",
      "sort_order": 5,
      "format": "Feed"
    },
    {
      "id": "criancas-6",
      "image_url": "/projects/dia-das-criancas/story-3.webp",
      "alt_text": "Dia das Crianças — arte 3, versão para Story",
      "sort_order": 6,
      "format": "Story"
    },
    {
      "id": "criancas-7",
      "image_url": "/projects/dia-das-criancas/feed-4.webp",
      "alt_text": "Dia das Crianças — arte 4, versão para Feed",
      "sort_order": 7,
      "format": "Feed"
    },
    {
      "id": "criancas-8",
      "image_url": "/projects/dia-das-criancas/story-4.webp",
      "alt_text": "Dia das Crianças — arte 4, versão para Story",
      "sort_order": 8,
      "format": "Story"
    }
  ]
},
  {
  "id": "gleide-mamede",
  "title": "Gleide Mamede Psicologia",
  "slug": "gleide-mamede-psicologia",
  "category": "Identidade Visual",
  "cover_image": "/projects/gleide-mamede/capa.webp",
  "short_description": "Uma identidade acolhedora que une a flor de lótus às iniciais G e M.",
  "description": "Identidade visual desenvolvida para Gleide Mamede Psicologia. O conceito combina a flor de lótus com as iniciais G e M em um símbolo de traços entrelaçados, acompanhado por tipografia serifada e uma paleta de verde profundo, terracota, rosé e tons neutros.\n\nA apresentação reúne o conceito da marca, cores, tipografia e aplicações em papelaria, materiais de comunicação e objetos. Ao final, estão as seis versões do logo para visualização.",
  "created_at": "2026-10-22T15:00:00.000Z",
  "published": true,
  "featured": false,
  "gallery_layout": "identity",
  "project_images": [
    {
      "id": "gleide-apresentacao",
      "image_url": "/projects/gleide-mamede/apresentacao.webp",
      "alt_text": "Apresentação completa da identidade visual de Gleide Mamede: conceito, cores, tipografia e aplicações",
      "sort_order": 0
    },
    {
      "id": "gleide-logo-1",
      "image_url": "/projects/gleide-mamede/logo-01.webp",
      "alt_text": "Gleide Mamede — Marca em rosé e terracota",
      "sort_order": 1,
      "background": "#f3eee7"
    },
    {
      "id": "gleide-logo-2",
      "image_url": "/projects/gleide-mamede/logo-02.webp",
      "alt_text": "Gleide Mamede — Símbolo da identidade",
      "sort_order": 2,
      "background": "#f3eee7"
    },
    {
      "id": "gleide-logo-3",
      "image_url": "/projects/gleide-mamede/logo-03.webp",
      "alt_text": "Gleide Mamede — Marca em verde e terracota",
      "sort_order": 3,
      "background": "#f3eee7"
    },
    {
      "id": "gleide-logo-4",
      "image_url": "/projects/gleide-mamede/logo-04.webp",
      "alt_text": "Gleide Mamede — Versão monocromática",
      "sort_order": 4,
      "background": "#f3eee7"
    },
    {
      "id": "gleide-logo-5",
      "image_url": "/projects/gleide-mamede/logo-05.webp",
      "alt_text": "Gleide Mamede — Versão em branco",
      "sort_order": 5,
      "background": "#153f34"
    },
    {
      "id": "gleide-logo-6",
      "image_url": "/projects/gleide-mamede/logo-06.webp",
      "alt_text": "Gleide Mamede — Assinatura horizontal",
      "sort_order": 6,
      "background": "#f3eee7"
    }
  ]
},
  {
  "id": "otica-e-imagem",
  "title": "Ótica & Imagem",
  "slug": "otica-e-imagem",
  "category": "Landing Page",
  "cover_image": "/projects/otica-e-imagem/capa.webp",
  "short_description": "Landing page em versões desktop e mobile para apresentar serviços ópticos e facilitar o contato pelo WhatsApp.",
  "description": "Landing page desenvolvida para Ótica & Imagem, com uma identidade em azul e ciano e uma comunicação voltada à apresentação dos serviços ópticos. A página reúne os diferenciais do atendimento, os serviços, a história da ótica e chamadas para contato pelo WhatsApp.\n\nO projeto é apresentado integralmente nas versões desktop e mobile, mostrando a organização das informações e a adaptação das seções para cada formato de tela.",
  "created_at": "2026-10-22T16:00:00.000Z",
  "published": true,
  "featured": false,
  "gallery_layout": "landing",
  "project_images": [
    {
      "id": "otica-desktop",
      "image_url": "/projects/otica-e-imagem/desktop.webp",
      "alt_text": "Ótica & Imagem — landing page completa na versão desktop",
      "sort_order": 1,
      "screen": "Desktop",
      "width": 2560,
      "height": 5733
    },
    {
      "id": "otica-mobile",
      "image_url": "/projects/otica-e-imagem/mobile.webp",
      "alt_text": "Ótica & Imagem — landing page completa na versão mobile",
      "sort_order": 2,
      "screen": "Mobile",
      "width": 320,
      "height": 5342
    }
  ]
},
  {
  "id": "mc-advogados-associados",
  "title": "MC Advogados Associados",
  "slug": "mc-advogados-associados",
  "category": "Design Social Media",
  "cover_image": "/projects/mc-advogados-associados/capa.webp",
  "short_description": "Design Social Media com foco em direito trabalhista e uma linguagem visual sóbria e consistente.",
  "description": "Projeto de Design Social Media para MC Advogados Associados, com peças de comunicação sobre direito trabalhista. O conjunto utiliza azul-petróleo, tons claros, tipografia serifada e elementos visuais ligados ao universo jurídico.\n\nA apresentação reúne as seis artes completas, com temas relacionados à relação de trabalho, dúvidas do público e ao processo trabalhista. As composições mantêm uma linguagem visual consistente entre as publicações.",
  "created_at": "2026-10-22T17:00:00.000Z",
  "published": true,
  "featured": false,
  "gallery_layout": "artworks",
  "project_images": [
    {
      "id": "mc-arte-1",
      "image_url": "/projects/mc-advogados-associados/arte-01.webp",
      "alt_text": "MC Advogados Associados — Perguntas ao advogado trabalhista",
      "sort_order": 1,
      "width": 1080,
      "height": 1350
    },
    {
      "id": "mc-arte-2",
      "image_url": "/projects/mc-advogados-associados/arte-02.webp",
      "alt_text": "MC Advogados Associados — Relação entre empregador e empregado",
      "sort_order": 2,
      "width": 1080,
      "height": 1350
    },
    {
      "id": "mc-arte-3",
      "image_url": "/projects/mc-advogados-associados/arte-03.webp",
      "alt_text": "MC Advogados Associados — Gestação e relação de trabalho",
      "sort_order": 3,
      "width": 1080,
      "height": 1350
    },
    {
      "id": "mc-arte-4",
      "image_url": "/projects/mc-advogados-associados/arte-04.webp",
      "alt_text": "MC Advogados Associados — Processo trabalhista",
      "sort_order": 4,
      "width": 1080,
      "height": 1350
    },
    {
      "id": "mc-arte-5",
      "image_url": "/projects/mc-advogados-associados/arte-05.webp",
      "alt_text": "MC Advogados Associados — Tempo de tramitação",
      "sort_order": 5,
      "width": 1080,
      "height": 1350
    },
    {
      "id": "mc-arte-6",
      "image_url": "/projects/mc-advogados-associados/arte-06.webp",
      "alt_text": "MC Advogados Associados — Documentação para o processo",
      "sort_order": 6,
      "width": 1080,
      "height": 1350
    }
  ]
},
];

export function getLocalProject(slug: string) {
  return localProjects.find((project) => project.slug === slug);
}
