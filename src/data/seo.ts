export const SITE_URL = "https://cortezap.app.br";
export const SITE_NAME = "CorteZap";

export const DEFAULT_TITLE =
  "CorteZap | Agendamento pelo WhatsApp e Painel para Barbearia";
export const DEFAULT_DESCRIPTION =
  "Sistema para barbearia com bot de WhatsApp, painel do barbeiro, agenda online, financeiro, clientes e equipe. Teste grátis por 7 dias.";

export const WHATSAPP_NUMBER = "5542999689501";
export const WHATSAPP_BASE_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ABACATEPAY_LINK_BASICO =
  "https://app.abacatepay.com/pay/bill_Fy31qcpNnDZmkLhQWLaXAcgR";
export const ABACATEPAY_LINK_PROFISSIONAL =
  "https://app.abacatepay.com/pay/bill_DbKXYHRzqAxyFYcMJP0EA6ya";
export const ABACATEPAY_LINK_EMPRESARIAL =
  "https://app.abacatepay.com/pay/bill_a3MaetaJETqYZmstKxD2MBzy";
export const ABACATEPAY_LINK_DEFAULT = ABACATEPAY_LINK_PROFISSIONAL;

export const PAINEL_URL = "https://painel.cortezap.app.br";

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const CORE_KEYWORDS = [
  // Termos de marca e sistema
  "agendamento whatsapp barbearia",
  "sistema para barbearia",
  "painel para barbeiro",
  "bot whatsapp para barbearia",
  "agenda online barbearia",
  "software de barbearia",
  "gestao de barbearia",
  "controle de agendamentos barbearia",
  "financeiro para barbearia",
  "crm para barbearia",
  // Gaps identificados nos concorrentes (EiBarber, Trinks, AppBarber, BarberBot, Gendo)
  "aplicativo para barbearia",
  "agendamento online barbearia",
  "lembrete automatico barbearia",
  "lembrete whatsapp barbearia",
  "confirmacao automatica barbearia",
  "reduzir no-show barbearia",
  "controle de comissao barbeiro",
  "fidelizar clientes barbearia",
  "notificacao whatsapp barbearia",
  "agenda digital barbearia",
  "relatorio para barbearia",
  "automatizar agendamento barbearia",
  "agendamento 24h barbearia",
  "app para barbearia",
  "programa de agendamento barbearia",
];

export const HOME_FAQ_ENTRIES: FaqEntry[] = [
  // Objeções de compra primeiro (mais impacto na conversão)
  {
    question: "Como funciona o período de teste?",
    answer: "Você testa por 7 dias sem compromisso e sem cartão de crédito.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Você pode cancelar sem burocracia, de acordo com as regras do seu plano.",
  },
  {
    question: "O agendamento funciona 24 horas por dia?",
    answer:
      "Sim. O bot atende e agenda horários 24h por dia, 7 dias por semana — inclusive fora do horário comercial.",
  },
  // Funcionalidades e entendimento do produto
  {
    question: "O bot realmente entende linguagem natural?",
    answer:
      'Sim. O CorteZap interpreta mensagens como "quero cortar amanhã de manhã", entende datas relativas e confirma o melhor horário disponível.',
  },
  {
    question: "Preciso de um número de WhatsApp separado?",
    answer:
      "Sim, o bot funciona com um número dedicado para a barbearia. O pareamento é feito por QR code em poucos minutos.",
  },
  {
    question: "Funciona com mais de um barbeiro?",
    answer:
      "Sim. Você configura disponibilidade por profissional e o sistema respeita horários e regras da equipe.",
  },
  {
    question: "E se o cliente quiser falar com uma pessoa?",
    answer:
      "Quando necessário, você pode assumir a conversa e concluir o atendimento manualmente no painel.",
  },
  {
    question: "O sistema envia lembrete automático para reduzir no-show?",
    answer:
      "Sim. O CorteZap envia lembretes automáticos via WhatsApp antes do horário agendado, ajudando a reduzir faltas e cancelamentos de última hora.",
  },
  {
    question: "O sistema tem painel para barbeiro e para administrador?",
    answer:
      "Sim. O painel possui perfis de acesso para admin e barbeiro, com permissões específicas para agenda, clientes, serviços e operação diária.",
  },
  {
    question: "Consigo acompanhar financeiro e desempenho da equipe?",
    answer:
      "Sim. O painel mostra faturamento, ticket médio, top serviços, top clientes e produtividade dos profissionais em tempo real.",
  },
  {
    question: "O CorteZap envia notificações e lembretes?",
    answer:
      "Sim. O sistema envia eventos em tempo real no painel e lembretes automáticos para clientes via WhatsApp.",
  },
  {
    question: "O sistema faz controle de comissão dos barbeiros?",
    answer:
      "Sim. O painel acompanha a produtividade de cada profissional com dados de faturamento e serviços realizados, facilitando o cálculo de comissões sem planilha.",
  },
];

export function createWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_LINK}?text=${encodeURIComponent(message)}`;
}

export function toAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function createFaqSchema(entries: FaqEntry[]) {
  return {
    "@type": "FAQPage",
    mainEntity: entries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: toAbsoluteUrl("/apple-touch-icon.png"),
    width: 180,
    height: 180,
  },
  description:
    "Plataforma de agendamento inteligente pelo WhatsApp com painel de gestão para barbearias. Bot com IA, agenda online, financeiro e equipe.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Portuguese",
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
};

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "pt-BR",
};

export const SOFTWARE_APPLICATION_SCHEMA = {
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  inLanguage: "pt-BR",
  description:
    "Sistema para barbearia com bot de WhatsApp com IA, painel para barbeiro e administrador, agenda online, base de clientes, relatórios financeiros, notificações web push e gestão de equipe.",
  url: SITE_URL,
  featureList: [
    "Bot WhatsApp com inteligência artificial",
    "Agendamento automático 24 horas por dia",
    "Painel para barbeiro e administrador",
    "Agenda por profissional com disponibilidade",
    "Lembretes automáticos via WhatsApp",
    "Relatórios financeiros com exportação PDF",
    "Base de clientes com histórico",
    "Notificações web push em tempo real",
    "Múltiplas instâncias WhatsApp por profissional",
    "Branding personalizado com logo e cor",
    "Perfis de acesso admin e barbeiro",
    "Reagendamento e cancelamento automático",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "79.90",
    highPrice: "199.90",
    offerCount: 3,
  },
};
