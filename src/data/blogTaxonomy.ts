export interface BlogClusterMeta {
  id:
    | "money-pages"
    | "comparativos"
    | "operacao-whatsapp"
    | "operacao-gestao"
    | "retencao"
    | "autoridade"
    | "seo-local";
  folder:
    | "comercial"
    | "comparativos"
    | "whatsapp"
    | "gestao"
    | "retencao"
    | "guias"
    | "seo-local";
  label: string;
  shortLabel: string;
  hubSlug: string;
  hubPath: string;
  hubTitle: string;
  hubDescription: string;
  heroTitle: string;
  heroDescription: string;
  bestFor: string[];
  auditAction: "manter" | "reescrever" | "fundir" | "deletar" | "transformar em hub";
  auditRisk: "baixo" | "medio" | "alto";
  publishPriority: "alta" | "media" | "baixa";
}

export const BLOG_CLUSTERS: BlogClusterMeta[] = [
  {
    id: "money-pages",
    folder: "comercial",
    label: "Páginas Comerciais",
    shortLabel: "Comercial",
    hubSlug: "paginas-comerciais-barbearia",
    hubPath: "/blog/paginas-comerciais-barbearia",
    hubTitle: "Páginas comerciais para sistema, agenda e WhatsApp de barbearia",
    hubDescription:
      "Cluster de alta intenção comercial com posts para quem já está avaliando software, agenda online, bot de WhatsApp e retorno do investimento.",
    heroTitle: "Páginas comerciais para quem já quer resolver agenda, WhatsApp e gestão",
    heroDescription:
      "Aqui entram as buscas em que o dono da barbearia já percebeu o problema e está comparando formatos de solução, preço, aderência e retorno.",
    bestFor: [
      "buscas de sistema para barbearia",
      "comparação entre agenda online e WhatsApp manual",
      "decisão comercial de fundo de funil",
    ],
    auditAction: "reescrever",
    auditRisk: "medio",
    publishPriority: "alta",
  },
  {
    id: "comparativos",
    folder: "comparativos",
    label: "Comparativos",
    shortLabel: "Comparativos",
    hubSlug: "comparativos-software-barbearia",
    hubPath: "/blog/comparativos-software-barbearia",
    hubTitle: "Comparativos de software para barbearia e alternativas de mercado",
    hubDescription:
      "Cluster voltado para buscas de marca, trocas de plataforma e comparações honestas com critérios públicos e foco na rotina da barbearia.",
    heroTitle: "Comparativos para escolher sistema sem cair em marketing",
    heroDescription:
      "Esses posts servem para quem já conhece players do mercado e precisa entender onde cada solução ganha, perde e em que cenário faz sentido migrar.",
    bestFor: [
      "alternativa a concorrente conhecido",
      "comparações CorteZap vs player do mercado",
      "migração orientada por gargalo real",
    ],
    auditAction: "reescrever",
    auditRisk: "alto",
    publishPriority: "alta",
  },
  {
    id: "operacao-whatsapp",
    folder: "whatsapp",
    label: "WhatsApp e Automação",
    shortLabel: "WhatsApp",
    hubSlug: "whatsapp-barbearia",
    hubPath: "/blog/whatsapp-barbearia",
    hubTitle: "WhatsApp para barbearia: automação, API oficial e operação",
    hubDescription:
      "Guias para atendimento, confirmação, lembretes, reagendamento e uso da API oficial sem transformar a rotina da barbearia em bagunça.",
    heroTitle: "WhatsApp para barbearia sem improviso e sem gambiarra",
    heroDescription:
      "Este hub concentra conteúdo para quem quer usar o canal que já gera a demanda da barbearia, mas com processo, regra e integração com agenda real.",
    bestFor: [
      "automação de atendimento",
      "agendamento pelo WhatsApp",
      "uso da API oficial da Meta",
    ],
    auditAction: "manter",
    auditRisk: "medio",
    publishPriority: "alta",
  },
  {
    id: "operacao-gestao",
    folder: "gestao",
    label: "Gestão e Processo",
    shortLabel: "Gestão",
    hubSlug: "gestao-barbearia",
    hubPath: "/blog/gestao-barbearia",
    hubTitle: "Gestão de barbearia: processo, equipe, financeiro e agenda",
    hubDescription:
      "Conteúdo para dono e equipe resolverem rotina operacional: comissão, caixa, agenda compartilhada, serviços, atrasos e fechamento.",
    heroTitle: "Gestão de barbearia para sair do improviso operacional",
    heroDescription:
      "O objetivo deste hub é atacar as dores que fazem a agenda quebrar, o caixa perder visibilidade e o dono virar gargalo do próprio negócio.",
    bestFor: [
      "processos internos da barbearia",
      "financeiro, comissão e fechamento",
      "regras operacionais da equipe",
    ],
    auditAction: "manter",
    auditRisk: "medio",
    publishPriority: "alta",
  },
  {
    id: "retencao",
    folder: "retencao",
    label: "Crescimento e Retenção",
    shortLabel: "Retenção",
    hubSlug: "retencao-barbearia",
    hubPath: "/blog/retencao-barbearia",
    hubTitle: "Retenção, recorrência e crescimento para barbearias",
    hubDescription:
      "Cluster de no-show, reativação, recorrência, agenda cheia, ticket médio e uso do WhatsApp para manter cliente voltando.",
    heroTitle: "Retenção e crescimento com agenda saudável e menos cadeira ociosa",
    heroDescription:
      "Aqui entram os posts para quem quer crescer sem bagunçar a operação: fidelização, recuperação de horário e campanhas úteis para base atual.",
    bestFor: [
      "reduzir faltas e cancelamentos",
      "aumentar recorrência e ticket",
      "preencher agenda com menos desperdício",
    ],
    auditAction: "manter",
    auditRisk: "medio",
    publishPriority: "media",
  },
  {
    id: "autoridade",
    folder: "guias",
    label: "Guias e Autoridade",
    shortLabel: "Guias",
    hubSlug: "guias-sistema-barbearia",
    hubPath: "/blog/guias-sistema-barbearia",
    hubTitle: "Guias de implementação, compra e autoridade para software de barbearia",
    hubDescription:
      "Posts para reforçar lastro semântico com análise, implementação, ROI, onboarding, avaliação de software e uso de dados na operação.",
    heroTitle: "Guias para implementar software de barbearia sem comprar no escuro",
    heroDescription:
      "Este hub amarra conteúdo de avaliação, implantação, mudança de processo e uso de dados, ajudando o site a parecer menos commodity e mais especialista.",
    bestFor: [
      "avaliação e implantação de software",
      "ROI, onboarding e treinamento",
      "conteúdo de profundidade e autoridade",
    ],
    auditAction: "manter",
    auditRisk: "baixo",
    publishPriority: "media",
  },
  {
    id: "seo-local",
    folder: "seo-local",
    label: "SEO Local",
    shortLabel: "SEO Local",
    hubSlug: "seo-local-barbearia",
    hubPath: "/blog/seo-local-barbearia",
    hubTitle: "SEO local para barbearia com Google, mapa e WhatsApp",
    hubDescription:
      "Conteúdo por cidade com foco em busca local, Google Business Profile, demanda regional e conversão do clique em conversa no WhatsApp.",
    heroTitle: "SEO local para barbearia sem doorway page disfarçada",
    heroDescription:
      "O recorte local só vale quando a página ajuda uma barbearia real a aparecer melhor na busca da cidade e a converter essa descoberta em horário confirmado.",
    bestFor: [
      "captação local via Google",
      "páginas por cidade com contexto comercial",
      "Google Business Profile e WhatsApp no mesmo fluxo",
    ],
    auditAction: "reescrever",
    auditRisk: "alto",
    publishPriority: "media",
  },
];

const clusterById = new Map(BLOG_CLUSTERS.map((cluster) => [cluster.id, cluster]));
const clusterByFolder = new Map(BLOG_CLUSTERS.map((cluster) => [cluster.folder, cluster]));
const clusterByHubSlug = new Map(BLOG_CLUSTERS.map((cluster) => [cluster.hubSlug, cluster]));

export function getBlogClusterById(clusterId: string) {
  return clusterById.get(clusterId);
}

export function getBlogClusterByFolder(folder: string) {
  return clusterByFolder.get(folder);
}

export function getBlogClusterByHubSlug(hubSlug: string) {
  return clusterByHubSlug.get(hubSlug);
}
