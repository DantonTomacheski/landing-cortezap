import { CORE_KEYWORDS, SITE_NAME, SITE_URL, type FaqEntry } from "./seo";

export type BlogCluster =
  | "comparativos"
  | "alternativas"
  | "whatsapp"
  | "gestao"
  | "crescimento"
  | "compra"
  | "operacao"
  | "local";

export interface CompetitorResearch {
  slug: string;
  name: string;
  site: string;
  market: string;
  positioning: string;
  mainStrength: string;
  mainGap: string;
  alternativeFit: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  cluster: BlogCluster;
  clusterLabel: string;
  heroEyebrow: string;
  primaryKeyword: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  intro: string[];
  takeaways: string[];
  sections: BlogSection[];
  faqEntries: FaqEntry[];
  ctaTitle: string;
  ctaBody: string;
  tags: string[];
  sourceCompetitor?: CompetitorResearch;
}

interface KeywordSeed {
  keyword: string;
  focus: string;
}

interface LocalSeed {
  city: string;
  state: string;
  focus: string;
}

const BLOG_AUTHOR = `Equipe ${SITE_NAME}`;
const BLOG_BASE_PATH = "/blog";
const BLOG_REFERENCE_DATE = new Date("2026-03-08T09:00:00-03:00");

const clusterLabels: Record<BlogCluster, string> = {
  comparativos: "Comparativos",
  alternativas: "Alternativas",
  whatsapp: "WhatsApp",
  gestao: "Gestão",
  crescimento: "Crescimento",
  compra: "Compra",
  operacao: "Operação",
  local: "SEO Local",
};

const clusterEyebrows: Record<BlogCluster, string> = {
  comparativos: "Pesquisa de concorrentes",
  alternativas: "Troca de plataforma",
  whatsapp: "Automação no WhatsApp",
  gestao: "Operação da barbearia",
  crescimento: "Receita e retenção",
  compra: "Decisão de compra",
  operacao: "Processo interno",
  local: "Captação local",
};

const directOpeners = [
  "Vamos direto ao ponto:",
  "Sem enfeite:",
  "A real é simples:",
  "No balcão da barbearia isso aparece rápido:",
  "Quem vive a rotina da agenda percebe cedo:",
  "Na prática, o problema costuma ser menos glamouroso do que a demo promete:",
  "Se você já tentou resolver isso no improviso, sabe onde pega:",
  "O erro mais comum aqui não é falta de vontade. É processo ruim mesmo:",
];

const realityChecks = [
  "Quando o atendimento depende de memória, a agenda começa a falhar antes do faturamento cair no relatório.",
  "A maior parte das barbearias não perde cliente por falta de talento. Perde por atraso de resposta, conflito de horário e operação manual demais.",
  "Quase toda busca desse tipo nasce no mesmo lugar: dono sobrecarregado, barbeiro sem visão da agenda e cliente querendo resposta na hora.",
  "Ferramenta bonita ajuda pouco se ela exige mais trabalho do que a rotina já suporta.",
  "Se o sistema não encaixa na rotina do balcão, do WhatsApp e do fechamento de caixa, ele vira mais uma aba aberta e nada além disso.",
  "O que pesa aqui não é tecnologia pela tecnologia. É tempo, cadeira vazia, no-show e comissão fechada às pressas.",
];

const proofFrames = [
  "Nas páginas públicas dos concorrentes aparece sempre o mesmo núcleo: agenda online, lembrete, cliente, caixa e algum nível de automação.",
  "Quando você compara os players do nicho, o padrão se repete: quem resolve agenda sem resolver conversa no WhatsApp ainda deixa um pedaço importante da operação manual.",
  "O mercado já entendeu que o barbeiro não quer dez sistemas. Ele quer uma agenda confiável, mensagens automáticas e visão clara do dinheiro entrando.",
  "Boa parte das soluções fala de agendamento. Menos delas fala com a mesma clareza sobre API oficial do WhatsApp, risco de bloqueio e rotina real da barbearia brasileira.",
];

const buyerQuestions = [
  "O cliente consegue marcar sem depender de você estar olhando o celular?",
  "A equipe entende o sistema em poucos dias ou você vai virar suporte interno?",
  "O lembrete sai mesmo, com status claro, ou fica só na promessa da landing page?",
  "Comissão, fechamento e histórico do cliente ficam acessíveis sem exportar planilha?",
  "Se dois barbeiros disputarem horário, o sistema se protege sozinho?",
  "Quando alguém cancelar em cima da hora, existe fluxo para recuperar esse espaço?",
];

const comparisonAngles = [
  "Menos vai e volta no chat",
  "Agenda que não depende do dono",
  "Mais clareza para equipe e caixa",
  "Processo mais limpo no dia a dia",
  "Menos risco operacional",
  "Mais aderência ao atendimento via WhatsApp",
];

const ctaTitles = [
  "Ver o CorteZap funcionando na operação real",
  "Testar o fluxo no WhatsApp da barbearia",
  "Entender se o CorteZap encaixa na sua rotina",
  "Avaliar a migração sem parar a agenda",
];

const ctaBodies = [
  "Se a sua dúvida é operacional, a melhor forma de responder é olhar o fluxo completo: cliente chamando no WhatsApp, agenda sincronizada, equipe vendo tudo no painel e fechamento sem planilha paralela.",
  "Quando a decisão trava na comparação de features, vale olhar a rotina inteira. O CorteZap foi desenhado para a barbearia que usa WhatsApp como canal principal e quer menos retrabalho entre conversa, agenda e gestão.",
  "Se você está comparando ferramentas, teste com um cenário real: horário concorrido, cliente pedindo reagendamento e barbeiro precisando enxergar a agenda sem depender do dono.",
  "A troca de sistema só compensa quando reduz atrito de verdade. O CorteZap faz mais sentido para quem quer juntar atendimento, agendamento e visão operacional no mesmo fluxo.",
];

const competitors: CompetitorResearch[] = [
  {
    slug: "trinks",
    name: "Trinks",
    site: "https://www.trinks.com/",
    market: "Brasil",
    positioning: "agenda online, financeiro e pagamentos para negócios de beleza e bem-estar",
    mainStrength: "presença forte no mercado brasileiro e operação ampla de agenda",
    mainGap: "não se posiciona com foco principal em automação conversacional no WhatsApp para barbearias",
    alternativeFit: "barbearias que dependem de WhatsApp como canal de entrada e querem menos troca manual de mensagens",
  },
  {
    slug: "barberify",
    name: "Barberify",
    site: "https://barberify.com.br/",
    market: "Brasil",
    positioning: "agendamento online, faturamento e comissões para barbearias",
    mainStrength: "foco específico em barbearia e operação financeira do dia a dia",
    mainGap: "a proposta pública gira mais em torno de agenda e faturamento do que atendimento automatizado por WhatsApp",
    alternativeFit: "barbearias que querem unir agenda, conversa e confirmação no mesmo fluxo",
  },
  {
    slug: "belasis",
    name: "Belasis",
    site: "https://www.belasis.com.br/app-agendamento-barbearia/",
    market: "Brasil",
    positioning: "app de agendamento e gestão para barbearias com pagamentos, estoque e marketing",
    mainStrength: "amplitude de módulos para operação de beleza",
    mainGap: "é mais abrangente para salão e beleza em geral do que centrado na rotina do WhatsApp da barbearia",
    alternativeFit: "barbearias que querem menos módulos dispersos e mais foco no canal que traz o agendamento",
  },
  {
    slug: "ebarsa",
    name: "eBarsa",
    site: "https://www.ebarsa.com/",
    market: "Portugal",
    positioning: "plataforma web e app para gestão e agendamento de barbearias e salões",
    mainStrength: "abordagem multi-plataforma com app para clientes e gestão",
    mainGap: "menos aderência pública ao mercado brasileiro e à operação via WhatsApp",
    alternativeFit: "barbearias do Brasil que querem reduzir atrito entre atendimento no chat e agenda interna",
  },
  {
    slug: "agendaja",
    name: "AgendaJá!",
    site: "https://empresas.agendaja.app/",
    market: "Brasil",
    positioning: "agenda online para salões e barbearias com lembrete via WhatsApp",
    mainStrength: "mensagem clara sobre link de agendamento 24h e confirmação automática",
    mainGap: "a proposta pública enfatiza link de agenda e painel, não um atendimento inteligente de ponta a ponta no WhatsApp",
    alternativeFit: "barbearias que querem o cliente resolvendo mais coisa dentro do próprio chat",
  },
  {
    slug: "barberos",
    name: "Barberos",
    site: "https://barberos.com.br/",
    market: "Brasil",
    positioning: "agenda online simples para barbearias, salões e profissionais autônomos",
    mainStrength: "simplicidade de uso e comunicação direta com o público do barbeiro",
    mainGap: "escopo mais enxuto, com menos apelo público para automação, IA e gestão ampliada",
    alternativeFit: "operações que já passaram da fase da agenda básica e precisam reduzir trabalho manual no atendimento",
  },
  {
    slug: "resultbarber",
    name: "ResultBarber",
    site: "https://www.resultbarber.com/",
    market: "Portugal",
    positioning: "software para barbearia com foco em agenda, comissões e relatórios",
    mainStrength: "mensagem bem alinhada a dor do barbeiro: comissão, cliente e faturamento",
    mainGap: "o próprio site ainda comunica partes do agendamento como recurso em evolução",
    alternativeFit: "barbearias que querem uma operação mais madura no WhatsApp e agenda disponível agora",
  },
  {
    slug: "barberagenda-online",
    name: "BarberAgenda Online",
    site: "https://barberagendaonline.com.br/",
    market: "Brasil",
    positioning: "agendamento online com área do barbeiro e portal de horários",
    mainStrength: "foco explícito em reserva online e visão do barbeiro",
    mainGap: "menos clareza pública sobre financeiro, CRM e automação conversacional",
    alternativeFit: "equipes que querem sair do agendamento puro e conectar atendimento com gestão",
  },
  {
    slug: "barbercloud",
    name: "BarberCloud",
    site: "https://barbercloud.com.br/",
    market: "Brasil",
    positioning: "site e agenda para barbearias com presença online",
    mainStrength: "combinação entre presença digital e página pública",
    mainGap: "a página pública deixa menos claro o nível de profundidade da gestão operacional",
    alternativeFit: "barbearias que já entendem o valor da presença online, mas precisam de mais controle de agenda e atendimento",
  },
  {
    slug: "barbercode",
    name: "Barbercode",
    site: "https://app.barbercode.com.br/",
    market: "Brasil",
    positioning: "plataforma de gestão para barbearias com caixa, agendamento e comissões",
    mainStrength: "forte discurso operacional para o dono da barbearia",
    mainGap: "menos ênfase pública em API oficial da Meta e automação conversacional",
    alternativeFit: "barbearias que valorizam controle operacional, mas querem o WhatsApp menos manual",
  },
  {
    slug: "facilite-link",
    name: "Facilite Link",
    site: "https://facilitelink.com.br/",
    market: "Brasil",
    positioning: "gestão de agendamento online e financeiro para negócios de serviços",
    mainStrength: "agenda online com foco em organização e automação de avisos",
    mainGap: "proposta mais horizontal, menos específica para barbearia com atendimento via chat",
    alternativeFit: "barbearias que precisam de algo mais aderente ao fluxo do balcão e do WhatsApp",
  },
  {
    slug: "orkestra",
    name: "Orkestra",
    site: "https://orkestaerp.com/",
    market: "Brasil",
    positioning: "ERP com agendamento, dashboards e gestão financeira para empresas de serviço",
    mainStrength: "camada forte de métricas e gestão empresarial",
    mainGap: "posicionamento mais amplo, menos focado na conversa do cliente até o horário confirmado",
    alternativeFit: "barbearias que querem evitar um ERP pesado demais para uma operação que nasce no WhatsApp",
  },
  {
    slug: "booksy",
    name: "Booksy",
    site: "https://biz.booksy.com/en-us",
    market: "Global",
    positioning: "plataforma de booking com marketplace, pagamentos e marketing para beleza",
    mainStrength: "escala global e conjunto de recursos maduro para agendamento",
    mainGap: "menos adaptação pública ao contexto brasileiro de WhatsApp como principal canal",
    alternativeFit: "barbearias brasileiras que precisam de atendimento mais natural no chat e menos dependência de app",
  },
  {
    slug: "fresha",
    name: "Fresha",
    site: "https://www.fresha.com/business",
    market: "Global",
    positioning: "sistema de booking e gestão para beleza com grande marketplace",
    mainStrength: "marca conhecida, alcance e ecossistema amplo",
    mainGap: "menos foco público em barbearia brasileira e operação centrada em WhatsApp",
    alternativeFit: "negócios que preferem uma operação mais local e conectada ao comportamento do cliente brasileiro",
  },
  {
    slug: "vagaro",
    name: "Vagaro",
    site: "https://www.vagaro.com/pro",
    market: "Global",
    positioning: "software all-in-one para beleza, wellness e fitness",
    mainStrength: "repertório grande de funcionalidades, pagamentos e app",
    mainGap: "pode ser amplo demais para quem quer resolver rápido a operação da barbearia",
    alternativeFit: "barbearias que precisam de fluxo mais enxuto e menos curva de adaptação",
  },
  {
    slug: "setmore",
    name: "Setmore",
    site: "https://www.setmore.com/industries/barber-shops",
    market: "Global",
    positioning: "booking page com lembretes, pagamentos e integração com redes sociais",
    mainStrength: "facilidade de criar uma página pública de agendamento",
    mainGap: "mais forte em agenda do que em gestão fina da rotina do barbeiro brasileiro",
    alternativeFit: "barbearias que querem sair da página de booking e avançar para operação completa",
  },
  {
    slug: "bookeo",
    name: "Bookeo",
    site: "https://www.bookeo.com/appointments/barber-scheduling-system/",
    market: "Global",
    positioning: "barber scheduling software com pagamentos, lembretes e widget de site",
    mainStrength: "bookings 24/7 com integração em site próprio",
    mainGap: "menos contexto público para WhatsApp, comissões e rotina brasileira",
    alternativeFit: "barbearias que preferem centralizar agenda e conversa no canal já usado pelo cliente",
  },
  {
    slug: "square-appointments",
    name: "Square Appointments",
    site: "https://squareup.com/us/en/beauty/barbershop",
    market: "Estados Unidos",
    positioning: "agenda, pagamentos e customer management integrados ao ecossistema Square",
    mainStrength: "forte integração entre booking e checkout",
    mainGap: "menos aderente ao mercado brasileiro e ao padrão de compra que começa no WhatsApp",
    alternativeFit: "barbearias no Brasil que priorizam conversa, lembrete e agenda no mesmo fluxo",
  },
  {
    slug: "simplybookme",
    name: "SimplyBook.me",
    site: "https://simplybook.me/",
    market: "Global",
    positioning: "plataforma de booking para serviços com widgets, site e automações",
    mainStrength: "flexibilidade para montar experiência de agendamento",
    mainGap: "proposta genérica para serviços, sem foco público na rotina de barbearia via WhatsApp",
    alternativeFit: "barbearias que querem um sistema mais orientado ao nicho e ao comportamento local do cliente",
  },
  {
    slug: "reservio",
    name: "Reservio",
    site: "https://www.reservio.com/",
    market: "Global",
    positioning: "booking software para serviços com calendário, reservas e páginas públicas",
    mainStrength: "entrada simples para digitalizar agenda",
    mainGap: "menos profundidade pública em gestão de equipe, comissão e atendimento pelo chat",
    alternativeFit: "barbearias que já passaram da agenda básica e agora precisam de operação mais conectada",
  },
];

const whatsappKeywords: KeywordSeed[] = [
  { keyword: "agendamento whatsapp para barbearia", focus: "tirar a confirmação de horário da mão do dono" },
  { keyword: "bot whatsapp para barbearia", focus: "atender mais rápido sem parecer robótico" },
  { keyword: "whatsapp api oficial para barbearia", focus: "operar sem flertar com bloqueio" },
  { keyword: "lembrete automatico whatsapp barbearia", focus: "reduzir falta antes de o horário morrer" },
  { keyword: "confirmacao de agendamento whatsapp barbearia", focus: "deixar o cliente ciente do horário e do barbeiro" },
  { keyword: "reagendamento pelo whatsapp barbearia", focus: "mover horários sem bagunçar o restante do dia" },
  { keyword: "cancelamento de horario pelo whatsapp", focus: "liberar cadeira rápido e recuperar encaixe" },
  { keyword: "whatsapp para mais de um barbeiro", focus: "distribuir horários sem confusão entre profissionais" },
  { keyword: "chatbot para barbearia", focus: "responder o básico e liberar a equipe para atender" },
  { keyword: "agenda 24h para barbearia", focus: "captar pedido fora do expediente" },
  { keyword: "atendimento automatico no whatsapp para barbearia", focus: "não deixar o cliente esperando resposta" },
  { keyword: "whatsapp business para barbearia", focus: "organizar o canal que já gera demanda" },
  { keyword: "migrar do whatsapp manual para sistema", focus: "sair do improviso sem travar a operação" },
  { keyword: "link de agendamento para barbearia no whatsapp", focus: "encurtar o caminho entre interesse e marcação" },
  { keyword: "ia para responder clientes da barbearia", focus: "ganhar velocidade sem perder contexto" },
  { keyword: "mensagens automáticas para barbearia", focus: "padronizar confirmações, lembretes e pós-atendimento" },
  { keyword: "whatsapp com agenda sincronizada", focus: "evitar horário prometido e já ocupado" },
  { keyword: "distribuicao de horarios por barbeiro no whatsapp", focus: "impedir disputa manual por agenda" },
  { keyword: "recuperacao de horario cancelado no whatsapp", focus: "voltar a vender a cadeira vazia" },
  { keyword: "confirmacao de presenca no whatsapp", focus: "chegar no dia com menos surpresa" },
  { keyword: "fila de espera via whatsapp para barbearia", focus: "transformar cancelamento em nova venda" },
  { keyword: "cobranca de sinal pelo whatsapp para barbearia", focus: "proteger a agenda sem constranger o cliente" },
  { keyword: "whatsapp com lembrete de no-show", focus: "diminuir ausência recorrente" },
  { keyword: "assistente virtual para barbearia", focus: "lidar com perguntas repetidas sem travar a equipe" },
  { keyword: "automacao de atendimento para barbearia", focus: "dar escala ao atendimento sem aumentar o caos" },
  { keyword: "fluxo de agendamento pelo chat", focus: "padronizar o caminho entre primeira mensagem e horário fechado" },
  { keyword: "como vender horario vago pelo whatsapp", focus: "encher buraco de agenda com rapidez" },
  { keyword: "agenda via whatsapp sem aplicativo", focus: "reduzir atrito para o cliente marcar" },
  { keyword: "agendamento pelo whatsapp sem risco de banimento", focus: "crescer no canal principal sem medo de perder o número" },
  { keyword: "whatsapp integrado ao painel da barbearia", focus: "fazer a conversa virar operação registrada" },
  { keyword: "script de atendimento whatsapp para barbearia", focus: "organizar o que a equipe fala e quando fala" },
  { keyword: "atendimento fora do horario comercial na barbearia", focus: "captar demanda enquanto a equipe descansa" },
  { keyword: "whatsapp para barbearia com multiplas unidades", focus: "distribuir atendimento sem virar bagunça" },
  { keyword: "mensagens de pos-atendimento no whatsapp", focus: "estimular retorno sem parecer cobrança" },
];

const managementKeywords: KeywordSeed[] = [
  { keyword: "sistema para barbearia", focus: "tirar a operação do modo improviso" },
  { keyword: "software para barbearia", focus: "centralizar agenda, cliente e caixa" },
  { keyword: "app para barbearia", focus: "dar mobilidade sem perder controle" },
  { keyword: "agenda online para barbearia", focus: "abrir horários sem depender de ligação" },
  { keyword: "painel para barbeiro", focus: "fazer cada profissional enxergar o próprio dia" },
  { keyword: "sistema de gestao para barbearia", focus: "organizar a casa antes de crescer" },
  { keyword: "controle financeiro barbearia", focus: "parar de descobrir faturamento no susto" },
  { keyword: "controle de comissao barbeiro", focus: "fechar pagamento sem planilha paralela" },
  { keyword: "crm para barbearia", focus: "lembrar quem volta, quem sumiu e quem vale reativar" },
  { keyword: "ficha do cliente barbearia", focus: "guardar histórico que ajuda no próximo atendimento" },
  { keyword: "relatorio financeiro barbearia", focus: "decidir com número e não com sensação" },
  { keyword: "fluxo de caixa barbearia", focus: "visualizar entrada e saída sem buraco de informação" },
  { keyword: "dashboard para barbearia", focus: "enxergar resultado sem garimpar dado" },
  { keyword: "sistema para barbearia pequena", focus: "começar enxuto sem ficar amarrado" },
  { keyword: "sistema para barbearia com 2 barbeiros", focus: "evitar conflito de agenda em equipe enxuta" },
  { keyword: "sistema para barbearia com equipe grande", focus: "manter padrão quando o time cresce" },
  { keyword: "gestao multiunidade barbearia", focus: "controlar várias agendas sem virar central de guerra" },
  { keyword: "comanda digital para barbearia", focus: "registrar serviço e venda sem papel" },
  { keyword: "controle de caixa barbearia", focus: "fechar o dia com menos retrabalho" },
  { keyword: "controle de estoque barbearia", focus: "não descobrir falta de produto tarde demais" },
  { keyword: "sistema de fidelidade para barbearia", focus: "reter sem depender só de desconto" },
  { keyword: "historico de atendimento do cliente", focus: "dar continuidade ao relacionamento" },
  { keyword: "produtividade por barbeiro", focus: "acompanhar desempenho com critério" },
  { keyword: "agenda compartilhada entre barbeiros", focus: "visualizar disponibilidade sem sobreposição" },
  { keyword: "sistema para salao e barbearia", focus: "atender operação híbrida sem gambiarra" },
  { keyword: "software de vendas para barbearia", focus: "ligar serviço, produto e caixa no mesmo fluxo" },
  { keyword: "gestao de servicos da barbearia", focus: "padronizar catálogo e preço" },
  { keyword: "preco e comissao por profissional", focus: "dar regra clara para a equipe" },
  { keyword: "gestao de metas da barbearia", focus: "tirar objetivo do discurso e levar para o painel" },
  { keyword: "controle de clientes recorrentes", focus: "proteger receita que já foi conquistada" },
  { keyword: "sistema de permissoes para barbeiro e admin", focus: "cada um ver o que precisa sem expor tudo" },
  { keyword: "relatorios por servico na barbearia", focus: "entender o que vende e o que só ocupa espaço" },
  { keyword: "organizacao da agenda da barbearia", focus: "fazer a rotina parar de depender de memória" },
  { keyword: "sistema para fechar caixa da barbearia", focus: "reduzir erro na última hora do dia" },
];

const growthKeywords: KeywordSeed[] = [
  { keyword: "reduzir no-show barbearia", focus: "proteger a cadeira que já estava vendida" },
  { keyword: "aumentar agendamentos da barbearia", focus: "transformar interesse em horário confirmado" },
  { keyword: "fidelizar clientes da barbearia", focus: "fazer o cliente voltar sem insistência vazia" },
  { keyword: "recuperar clientes parados da barbearia", focus: "reativar quem já conhece o serviço" },
  { keyword: "aumentar ticket medio da barbearia", focus: "crescer receita sem lotar mais a agenda" },
  { keyword: "vender mais horarios na barbearia", focus: "diminuir cadeira ociosa" },
  { keyword: "lotar a agenda da barbearia", focus: "usar melhor a demanda que já existe" },
  { keyword: "reduzir cancelamentos de ultima hora", focus: "parar de perder o dia por remarcação mal gerida" },
  { keyword: "marketing para barbearia no whatsapp", focus: "usar o canal certo sem parecer spam" },
  { keyword: "retencao de clientes na barbearia", focus: "fazer o primeiro corte virar hábito" },
  { keyword: "primeira consulta do cliente na barbearia", focus: "causar boa impressão e preparar retorno" },
  { keyword: "pos-atendimento na barbearia", focus: "não deixar a relação morrer depois do serviço" },
  { keyword: "programa de indicacao para barbearia", focus: "crescer com cliente satisfeito trazendo cliente novo" },
  { keyword: "reativacao de clientes por whatsapp", focus: "voltar a conversar com quem esfriou" },
  { keyword: "experiencia do cliente na barbearia", focus: "fazer o processo parecer organizado do começo ao fim" },
  { keyword: "fila de espera para barbearia", focus: "reaproveitar demanda quando abre vaga" },
  { keyword: "vender pacotes na barbearia", focus: "melhorar recorrência com previsibilidade" },
  { keyword: "cobranca de sinal para evitar faltas", focus: "filtrar reserva pouco comprometida" },
  { keyword: "calendario promocional da barbearia", focus: "planejar picos em vez de reagir ao mês ruim" },
  { keyword: "campanha de retorno da barbearia", focus: "reativar base sem queimar marca" },
  { keyword: "aumentar recorrencia na barbearia", focus: "encurtar o intervalo entre visitas" },
  { keyword: "lotar agenda no sabado da barbearia", focus: "aproveitar o dia mais disputado com regra clara" },
  { keyword: "preencher horarios vagos na barbearia", focus: "usar encaixe com inteligência" },
  { keyword: "melhorar avaliacao da barbearia no google", focus: "transformar experiência boa em prova pública" },
  { keyword: "google business profile para barbearia", focus: "ganhar visibilidade local onde o cliente procura" },
  { keyword: "captar clientes perto de mim para barbearia", focus: "aparecer na decisão local de última hora" },
  { keyword: "seo local para barbearia", focus: "ligar presença no Google a agenda real" },
  { keyword: "link na bio para agendar na barbearia", focus: "tirar fricção entre Instagram e reserva" },
  { keyword: "oferta de barba e cabelo com agenda organizada", focus: "vender pacote sem bagunçar tempo de cadeira" },
  { keyword: "campanha de aniversario para clientes da barbearia", focus: "aumentar retorno com comunicação que faz sentido" },
  { keyword: "remarketing para clientes da barbearia", focus: "falar de novo com quem já mostrou intenção" },
  { keyword: "fidelizacao sem desconto permanente na barbearia", focus: "reter cliente sem corroer margem" },
];

const buyingKeywords: KeywordSeed[] = [
  { keyword: "melhor sistema para barbearia", focus: "comparar solução de verdade e não só marketing" },
  { keyword: "melhor agenda online para barbearia", focus: "entender o que precisa existir além do calendário" },
  { keyword: "melhor app para barbeiro", focus: "dar autonomia para o profissional sem perder gestão" },
  { keyword: "melhor software para barbearia pequena", focus: "começar certo sem comprar peso morto" },
  { keyword: "melhor sistema para barbearia com equipe", focus: "garantir processo antes de aumentar o time" },
  { keyword: "quanto custa um sistema para barbearia", focus: "olhar custo total e não só mensalidade" },
  { keyword: "sistema para barbearia vale a pena", focus: "medir retorno com números simples" },
  { keyword: "como escolher software para barbearia", focus: "fugir da decisão por impulso" },
  { keyword: "checklist para contratar sistema de barbearia", focus: "não esquecer o que realmente impacta a rotina" },
  { keyword: "migrar planilha para sistema de barbearia", focus: "mudar sem travar a agenda da semana" },
  { keyword: "sair do caderno e organizar a barbearia", focus: "profissionalizar sem complicar tudo" },
  { keyword: "quando trocar de sistema para barbearia", focus: "identificar o momento certo antes do caos" },
  { keyword: "como implantar agendamento online na barbearia", focus: "fazer a equipe adotar o processo" },
  { keyword: "quanto cobrar para cobrir no-show na barbearia", focus: "definir regra sem espantar cliente bom" },
  { keyword: "sistema para barbearia sem fidelidade contratual", focus: "avaliar flexibilidade com cuidado" },
  { keyword: "teste gratis de sistema para barbearia", focus: "usar a demonstração para encontrar gargalo real" },
  { keyword: "duvidas antes de contratar um sistema para barbearia", focus: "perguntar o que quase ninguém pergunta" },
  { keyword: "sistema para barbearia com suporte humanizado", focus: "não ficar sozinho quando der problema" },
  { keyword: "sistema para barbearia sem aplicativo para cliente", focus: "reduzir barreira de adoção" },
  { keyword: "sistema para barbearia com whatsapp oficial", focus: "evitar risco desnecessário no número principal" },
  { keyword: "sistema para barbearia com pagamento recorrente", focus: "entender cobrança e previsibilidade" },
  { keyword: "sistema para barbearia com onboarding rapido", focus: "ganhar tração sem projeto interminável" },
  { keyword: "implementacao de agenda online para equipe de barbeiros", focus: "fazer o time inteiro trabalhar no mesmo padrão" },
  { keyword: "como treinar a equipe para usar sistema de barbearia", focus: "evitar abandono depois da primeira semana" },
  { keyword: "roi de um sistema para barbearia", focus: "ligar investimento a agenda, no-show e produtividade" },
  { keyword: "sinais de que sua barbearia precisa de automacao", focus: "perceber antes que a operação estoure" },
  { keyword: "como comparar demos de software para barbearia", focus: "testar cenário real e não só tela bonita" },
  { keyword: "erros ao contratar sistema para barbearia", focus: "escapar de armadilhas comuns" },
  { keyword: "sistema para barbearia versus planilha", focus: "entender o custo escondido da gambiarra" },
  { keyword: "sistema para barbearia versus agenda no papel", focus: "enxergar o preço da falta de histórico" },
];

const operationsKeywords: KeywordSeed[] = [
  { keyword: "escala de barbeiros na agenda", focus: "fazer a agenda respeitar a realidade do time" },
  { keyword: "bloqueio de horarios na barbearia", focus: "proteger pausas, folgas e encaixes especiais" },
  { keyword: "intervalo entre atendimentos da barbearia", focus: "evitar agenda colada que estoura o atraso" },
  { keyword: "agenda por servico e por profissional", focus: "respeitar o tempo real de cada atendimento" },
  { keyword: "comissao por corte e por barba", focus: "fechar regra sem discussão mensal" },
  { keyword: "permissao de acesso para barbeiros", focus: "dar autonomia com controle" },
  { keyword: "historico de faltas do cliente", focus: "tomar decisão melhor sobre confirmação e sinal" },
  { keyword: "retorno automatico apos o corte", focus: "plantar a próxima visita sem esforço extra" },
  { keyword: "padronizacao do atendimento da barbearia", focus: "fazer a experiência ser boa mesmo em equipe" },
  { keyword: "cadastro de servicos da barbearia", focus: "tirar ambiguidade de preço e duração" },
  { keyword: "gestao de barbeiro parceiro", focus: "organizar repasse e autonomia" },
  { keyword: "gestao de barbeiro clt e comissao", focus: "misturar formatos sem bagunça operacional" },
  { keyword: "fechamento semanal da barbearia", focus: "ganhar ritmo de análise sem esperar o mês acabar" },
  { keyword: "conferencia diaria da agenda", focus: "chegar no primeiro horário sem surpresa" },
  { keyword: "indicadores de desempenho da barbearia", focus: "acompanhar a operação com disciplina" },
  { keyword: "clientes vip da barbearia", focus: "identificar quem merece atenção especial" },
  { keyword: "precificacao de servicos da barbearia", focus: "subir margem sem desorganizar catálogo" },
  { keyword: "controle de atrasos na barbearia", focus: "reduzir efeito dominó na agenda" },
  { keyword: "agenda com encaixe inteligente", focus: "preencher espaço sem estourar o fluxo" },
  { keyword: "fluxo de abertura e fechamento da barbearia", focus: "fazer o dia começar e terminar com menos ruído" },
];

const localKeywords: LocalSeed[] = [
  { city: "Sao Paulo", state: "SP", focus: "competir em uma busca local muito disputada" },
  { city: "Rio de Janeiro", state: "RJ", focus: "juntar Google, Instagram e WhatsApp sem perder agendamento" },
  { city: "Belo Horizonte", state: "MG", focus: "captar busca local e responder rápido" },
  { city: "Curitiba", state: "PR", focus: "aparecer bem e transformar clique em horário real" },
  { city: "Porto Alegre", state: "RS", focus: "organizar demanda local com agenda confiável" },
  { city: "Brasilia", state: "DF", focus: "fazer a agenda digital acompanhar a rotina da equipe" },
  { city: "Goiania", state: "GO", focus: "dar resposta rápida para a procura local" },
  { city: "Campinas", state: "SP", focus: "aproveitar busca regional sem depender de resposta manual" },
  { city: "Recife", state: "PE", focus: "usar SEO local e WhatsApp no mesmo fluxo" },
  { city: "Salvador", state: "BA", focus: "preencher horários com presença forte no Google" },
  { city: "Fortaleza", state: "CE", focus: "captar pedido local e reduzir ausência" },
  { city: "Florianopolis", state: "SC", focus: "ligar reputação online a agenda organizada" },
  { city: "Joinville", state: "SC", focus: "fazer a busca local render operação estável" },
  { city: "Londrina", state: "PR", focus: "transformar descoberta online em cliente recorrente" },
  { city: "Ribeirao Preto", state: "SP", focus: "vender melhor a agenda em uma praça competitiva" },
  { city: "Sao Jose dos Campos", state: "SP", focus: "captar agenda perto de mim com menos atrito" },
  { city: "Vitoria", state: "ES", focus: "responder procura local sem sobrecarregar o balcão" },
  { city: "Manaus", state: "AM", focus: "centralizar busca local, chat e horário confirmado" },
  { city: "Belem", state: "PA", focus: "ganhar visibilidade e manter processo redondo" },
  { city: "Cuiaba", state: "MT", focus: "usar o Google como porta de entrada da agenda" },
];

function hash(input: string): number {
  return Array.from(input).reduce((acc, char, index) => acc + char.charCodeAt(0) * (index + 17), 0);
}

function pick<T>(items: T[], seed: number): T {
  return items[Math.abs(seed) % items.length];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(text: string): string {
  return text
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function prettifyKeyword(keyword: string): string {
  const replacements: Array<[RegExp, string]> = [
    [/\bwhatsapp\b/gi, "WhatsApp"],
    [/\bapi\b/gi, "API"],
    [/\bia\b/gi, "IA"],
    [/\bcrm\b/gi, "CRM"],
    [/\broi\b/gi, "ROI"],
    [/\bmeta\b/gi, "Meta"],
    [/\bgoogle\b/gi, "Google"],
    [/\bclt\b/gi, "CLT"],
    [/\bvip\b/gi, "VIP"],
  ];

  let result = keyword;
  replacements.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });

  result = result.replace(/\bpos-/gi, "pós-");
  result = result.replace(/\bultima\b/gi, "última");
  result = result.replace(/\bautomatico\b/gi, "automático");
  result = result.replace(/\bconfirmacao\b/gi, "confirmação");
  result = result.replace(/\bcomissao\b/gi, "comissão");
  result = result.replace(/\bbarbeiro\b/gi, "barbeiro");
  result = result.replace(/\bmultiplas\b/gi, "múltiplas");
  result = result.replace(/\bdistribuicao\b/gi, "distribuição");
  result = result.replace(/\bgestao\b/gi, "gestão");
  result = result.replace(/\borganizacao\b/gi, "organização");
  result = result.replace(/\bavaliacao\b/gi, "avaliação");
  result = result.replace(/\bprecificacao\b/gi, "precificação");
  result = result.replace(/\bconferencia\b/gi, "conferência");
  result = result.replace(/\brecorrencia\b/gi, "recorrência");
  result = result.replace(/\broteiro\b/gi, "roteiro");
  result = result.replace(/\bgratis\b/gi, "grátis");
  result = result.replace(/\bultimas\b/gi, "últimas");
  result = result.replace(/\bsao\b/gi, "São");
  result = result.replace(/\bgoiania\b/gi, "Goiânia");
  result = result.replace(/\bflorianopolis\b/gi, "Florianópolis");
  result = result.replace(/\bribeirao\b/gi, "Ribeirão");
  result = result.replace(/\bjos[eé]\b/gi, "José");
  result = result.replace(/\bvitoria\b/gi, "Vitória");
  result = result.replace(/\bbelem\b/gi, "Belém");
  result = result.replace(/\bcuiaba\b/gi, "Cuiabá");
  result = result.replace(/\bautomaticao\b/gi, "automação");

  return result.charAt(0).toUpperCase() + result.slice(1);
}

function buildTitle(keyword: string, cluster: BlogCluster, seed: number): string {
  const display = prettifyKeyword(keyword);

  const templates: Record<Exclude<BlogCluster, "comparativos" | "alternativas" | "local">, string[]> = {
    whatsapp: [
      `${display}: como organizar a agenda sem responder tudo na mão`,
      `${display}: o que precisa funcionar para não virar bagunça`,
      `${display}: guia prático para barbearias que querem agenda 24h`,
      `${display}: quando vale automatizar e quando vira enfeite`,
      `${display}: como comparar solução boa com atalho frágil`,
      `${display}: o que muda no dia a dia da barbearia`,
    ],
    gestao: [
      `${display}: como profissionalizar a operação sem complicar a rotina`,
      `${display}: o que olhar antes de contratar um sistema`,
      `${display}: como sair da planilha sem criar outro problema`,
      `${display}: sinais de que a barbearia precisa disso agora`,
      `${display}: onde a operação costuma travar e como destravar`,
      `${display}: guia direto para donos de barbearia`,
    ],
    crescimento: [
      `${display}: como crescer sem bagunçar a agenda`,
      `${display}: o que realmente move esse número na barbearia`,
      `${display}: estratégias que funcionam melhor quando a operação está redonda`,
      `${display}: como atacar o problema sem depender de sorte`,
      `${display}: o que fazer primeiro para ver resultado`,
      `${display}: um plano realista para a rotina da barbearia`,
    ],
    compra: [
      `${display}: como decidir sem cair em demo bonita`,
      `${display}: o que comparar antes de assinar qualquer plataforma`,
      `${display}: guia de compra para barbearias`,
      `${display}: perguntas que você precisa fazer antes de contratar`,
      `${display}: como calcular se a troca faz sentido`,
      `${display}: quando essa decisão melhora a operação de verdade`,
    ],
    operacao: [
      `${display}: como deixar o processo mais limpo no dia a dia`,
      `${display}: o que muda quando a equipe trabalha no mesmo padrão`,
      `${display}: como organizar isso sem virar microgestão`,
      `${display}: guia prático para uma barbearia menos improvisada`,
      `${display}: onde esse processo quebra e como corrigir`,
      `${display}: o que olhar para ganhar consistência`,
    ],
  };

  return pick(templates[cluster], seed);
}

function buildDescription(keyword: string, cluster: BlogCluster, focus: string, seed: number): string {
  const display = prettifyKeyword(keyword);
  const templates: Record<Exclude<BlogCluster, "comparativos" | "alternativas" | "local">, string[]> = {
    whatsapp: [
      `Entenda como ${display.toLowerCase()} pode ajudar a ${focus} sem transformar o atendimento em um robô sem contexto.`,
      `Veja o que realmente importa em ${display.toLowerCase()} para barbearias que dependem do WhatsApp para vender horário.`,
      `Um guia direto para avaliar ${display.toLowerCase()} com foco em agenda, equipe e menos retrabalho no chat.`,
    ],
    gestao: [
      `Descubra como ${display.toLowerCase()} ajuda a ${focus} e o que separar entre recurso útil e promessa vazia.`,
      `Guia prático sobre ${display.toLowerCase()} para quem precisa organizar agenda, clientes, equipe e caixa.`,
      `Veja quando ${display.toLowerCase()} faz sentido para a barbearia e quais sinais indicam que o processo atual travou.`,
    ],
    crescimento: [
      `Aprenda a trabalhar ${display.toLowerCase()} com foco em ${focus}, agenda mais saudável e operação que aguenta crescer.`,
      `Um plano direto para melhorar ${display.toLowerCase()} sem apelar para desconto eterno nem bagunçar a rotina.`,
      `Entenda como ${display.toLowerCase()} conversa com agenda, retenção, no-show e retorno do cliente.`,
    ],
    compra: [
      `Use este guia para avaliar ${display.toLowerCase()} com critério operacional, não só pelo brilho da apresentação comercial.`,
      `Saiba como comparar ${display.toLowerCase()} olhando implantação, suporte, WhatsApp, equipe e retorno esperado.`,
      `Um checklist objetivo para decidir sobre ${display.toLowerCase()} antes de assinar qualquer ferramenta.`,
    ],
    operacao: [
      `Veja como ${display.toLowerCase()} ajuda a ${focus} e por que esse ajuste costuma mexer no resultado mais do que parece.`,
      `Guia prático para organizar ${display.toLowerCase()} com menos improviso e mais clareza para dono e equipe.`,
      `Entenda o papel de ${display.toLowerCase()} em uma barbearia que quer processo estável, agenda confiável e menos ruído interno.`,
    ],
  };

  return pick(templates[cluster], seed);
}

function isoDate(daysAgo: number): string {
  const date = new Date(BLOG_REFERENCE_DATE);
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
}

function readingTimeFromContent(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(4, Math.round(words / 210));
}

function uniqueKeywords(primaryKeyword: string, cluster: BlogCluster): string[] {
  const extraByCluster: Record<Exclude<BlogCluster, "comparativos" | "alternativas" | "local">, string[]> = {
    whatsapp: [
      "agendamento automático barbearia",
      "whatsapp para barbeiro",
      "agenda 24h barbearia",
      "api oficial da meta barbearia",
    ],
    gestao: [
      "software de barbearia",
      "agenda digital barbearia",
      "controle de agendamentos barbearia",
      "painel para barbeiro",
    ],
    crescimento: [
      "reduzir faltas barbearia",
      "fidelizar clientes barbearia",
      "google business profile barbearia",
      "lotar agenda barbearia",
    ],
    compra: [
      "melhor sistema para barbearia",
      "comparar software para barbearia",
      "teste gratis sistema barbearia",
      "roi barbearia",
    ],
    operacao: [
      "comissão barbeiro",
      "relatórios barbearia",
      "gestão de equipe barbearia",
      "rotina da barbearia",
    ],
  };

  const clusterExtras =
    cluster === "comparativos" || cluster === "alternativas" || cluster === "local"
      ? []
      : extraByCluster[cluster];

  return Array.from(new Set([...CORE_KEYWORDS, primaryKeyword, ...clusterExtras])).slice(0, 18);
}

function keywordTags(primaryKeyword: string, cluster: BlogCluster): string[] {
  const genericTags = ["barbearia", "agenda online", "cortezap"];
  const clusterTags: Record<BlogCluster, string[]> = {
    comparativos: ["concorrentes", "alternativas", "comparativo"],
    alternativas: ["troca de sistema", "alternativas", "software"],
    whatsapp: ["whatsapp", "automação", "agendamento"],
    gestao: ["gestão", "financeiro", "painel"],
    crescimento: ["marketing", "retenção", "crescimento"],
    compra: ["decisão de compra", "software", "checklist"],
    operacao: ["processo", "equipe", "rotina"],
    local: ["seo local", "google business profile", "captação local"],
  };

  return Array.from(new Set([primaryKeyword, ...genericTags, ...clusterTags[cluster]])).slice(0, 10);
}

function buildGenericIntro(keyword: string, cluster: BlogCluster, focus: string, seed: number): string[] {
  const display = prettifyKeyword(keyword).toLowerCase();

  const paragraphOne = `${pick(directOpeners, seed)} quando alguém pesquisa por "${display}", quase sempre está tentando ${focus}.`;
  const paragraphTwo = `${pick(realityChecks, seed + 7)} ${pick(proofFrames, seed + 11)}`;
  const paragraphThree =
    cluster === "compra"
      ? "Essa decisão melhora muito quando você testa cenário real: cliente pedindo reagendamento, barbeiro precisando enxergar a agenda e dono querendo fechar caixa sem retrabalho."
      : "Se a rotina continua quebrada entre conversa, agenda e gestão, o problema não é falta de recurso. É falta de conexão entre as partes que realmente movem o dia da barbearia.";

  return [paragraphOne, paragraphTwo, paragraphThree];
}

function buildTakeaways(keyword: string, cluster: BlogCluster, focus: string, seed: number): string[] {
  const display = prettifyKeyword(keyword);
  const first = `${display} só ajuda de verdade quando resolve ${focus}.`;
  const second = pick(
    [
      "Agenda boa não vive isolada. Ela precisa conversar com cliente, equipe e fechamento.",
      "Se o processo continua manual no ponto crítico, o ganho de software evapora rápido.",
      "A barbearia cresce melhor quando cada etapa tem dono, regra e visibilidade.",
      "Ferramenta boa é a que some no dia a dia e deixa a operação rodando com menos ruído.",
    ],
    seed
  );
  const third = `Na hora de comparar, use perguntas simples e específicas como ${pick(buyerQuestions, seed + 5).toLowerCase()}`;

  return [first, second, third];
}

function buildGenericSections(keyword: string, cluster: BlogCluster, focus: string, seed: number): BlogSection[] {
  const display = prettifyKeyword(keyword);
  const sampleCompetitors = [
    competitors[seed % competitors.length].name,
    competitors[(seed + 3) % competitors.length].name,
    competitors[(seed + 7) % competitors.length].name,
  ];

  const clusterSections: Record<Exclude<BlogCluster, "comparativos" | "alternativas" | "local">, BlogSection[]> = {
    whatsapp: [
      {
        heading: `Por que ${display.toLowerCase()} costuma virar urgência`,
        paragraphs: [
          `${pick(realityChecks, seed + 13)} Quando a barbearia cresce, o gargalo costuma aparecer no mesmo lugar: mensagem chegando enquanto alguém está cortando, cliente querendo resposta na hora e agenda mudando ao vivo.`,
          `Se a busca por ${display.toLowerCase()} apareceu agora, provavelmente você já sentiu que responder manualmente não escala. A dor não é só tempo perdido. É horário prometido errado, lembrete que não sai e cancelamento tratado tarde demais.`,
        ],
        bullets: [
          "Mais demanda entrando pelo chat do que a equipe consegue responder.",
          "Horários sendo combinados sem visão única da agenda.",
          "Cliente sumindo porque ninguém respondeu no timing certo.",
        ],
      },
      {
        heading: "O que um fluxo bom precisa entregar",
        paragraphs: [
          `Não adianta automatizar metade. Para ${display.toLowerCase()} funcionar, o fluxo precisa começar no chat, validar disponibilidade real, registrar o horário e avisar quem precisa saber.`,
          `Os concorrentes mapeados, como ${sampleCompetitors.join(", ")}, mostram que agenda e automação são tema central do mercado. O ponto que separa solução útil de solução meia-boca é o quanto ela reduz ida e volta manual no canal principal da barbearia.`,
        ],
        bullets: [
          "Confirmação clara de serviço, horário e profissional.",
          "Reagendamento e cancelamento sem bagunçar a agenda.",
          "Visão do que aconteceu no painel do barbeiro e do admin.",
        ],
      },
      {
        heading: "Como comparar sem cair em atalhos frágeis",
        paragraphs: [
          "Vale desconfiar de qualquer solução que fale só em resposta automática, mas não mostre como a agenda fica sincronizada em tempo real. Esse é o tipo de detalhe que parece pequeno na demo e enorme na operação.",
          "Também vale observar a camada de risco. Se o WhatsApp é o principal canal comercial da barbearia, usar uma estrutura oficial pesa mais do que muita gente admite no começo.",
        ],
        bullets: [
          pick(buyerQuestions, seed + 1),
          pick(buyerQuestions, seed + 2),
          pick(buyerQuestions, seed + 3),
        ],
      },
      {
        heading: "Quando o CorteZap tende a fazer mais sentido",
        paragraphs: [
          `O CorteZap costuma encaixar melhor para barbearias que querem ${focus}, mas sem obrigar o cliente a baixar aplicativo nem jogar a equipe em outra rotina paralela.`,
          `A aposta aqui é bem direta: usar o WhatsApp como canal real de venda, agenda e lembrete, enquanto o painel organiza o lado interno. Para muita barbearia, essa junção resolve mais do que empilhar módulos soltos.`,
        ],
        bullets: [
          pick(comparisonAngles, seed + 4),
          "Painel para barbeiro e administrador com leitura rápida do dia.",
          "Base mais clara para reduzir no-show e recuperar horários vagos.",
        ],
      },
    ],
    gestao: [
      {
        heading: `O problema por trás da busca por ${display.toLowerCase()}`,
        paragraphs: [
          `${pick(realityChecks, seed + 2)} Quem começa a procurar ${display.toLowerCase()} normalmente já percebeu que a operação ficou grande demais para ser tocada no improviso.`,
          "O ponto não é ter software só para dizer que digitalizou a barbearia. O ponto é ter uma camada mínima de ordem para agenda, cliente, comissão e caixa pararem de competir pela sua atenção o dia inteiro.",
        ],
        bullets: [
          "Processo espalhado entre caderno, chat, memória e planilha.",
          "Falta de visibilidade sobre resultado por barbeiro, serviço e dia.",
          "Excesso de dependência do dono para decisões operacionais básicas.",
        ],
      },
      {
        heading: "O que separar entre recurso útil e enfeite",
        paragraphs: [
          "Recurso útil é o que reduz tempo, erro e retrabalho. O resto é detalhe de apresentação. Em gestão de barbearia, isso costuma aparecer em agenda confiável, histórico do cliente, regra de comissão e fechamento organizado.",
          `Os concorrentes pesquisados deixam claro que o mercado inteiro fala de gestão. O que varia mesmo é profundidade e aderência. Uma solução pode parecer completa e ainda assim deixar um pedaço crítico fora da rotina principal.`,
        ],
        bullets: [
          "Agenda conectada ao atendimento e não isolada.",
          "Permissões claras entre barbeiro e administração.",
          "Indicadores que o dono realmente usa para decidir.",
        ],
      },
      {
        heading: "Perguntas que evitam arrependimento",
        paragraphs: [
          "Se você fizer poucas perguntas, faça as incômodas. É nelas que aparecem custo escondido, curva de adaptação e limite operacional.",
          "A melhor demonstração é sempre com um cenário que dói hoje. A pior é a que mostra um mundo perfeito que nunca acontece no sábado lotado.",
        ],
        bullets: [
          pick(buyerQuestions, seed + 7),
          pick(buyerQuestions, seed + 8),
          pick(buyerQuestions, seed + 9),
        ],
      },
      {
        heading: "Onde o CorteZap entra melhor",
        paragraphs: [
          `O CorteZap não tenta ser um ERP genérico. Ele tende a funcionar melhor quando a barbearia quer ${focus} e enxerga o WhatsApp como porta principal da agenda.`,
          "Esse recorte importa porque muita perda operacional acontece antes do serviço começar. Se a entrada do cliente já chega organizada, o resto do processo respira melhor.",
        ],
        bullets: [
          "Fluxo conectado entre conversa, agenda e painel.",
          "Menos dependência de planilha para operação do dia.",
          "Mais leitura operacional para dono e equipe sem excesso de camadas.",
        ],
      },
    ],
    crescimento: [
      {
        heading: `Onde ${display.toLowerCase()} costuma emperrar`,
        paragraphs: [
          `${pick(realityChecks, seed + 4)} Crescimento em barbearia raramente morre por falta de procura pura. Ele morre mais por atraso de resposta, recorrência baixa, horário mal reaproveitado e pouca consistência no pós-atendimento.`,
          `Por isso, trabalhar ${display.toLowerCase()} quase sempre exige mais do que marketing. Exige uma operação que consiga receber, confirmar, lembrar e puxar o próximo atendimento sem virar esforço artesanal.`,
        ],
        bullets: [
          "Cliente novo entra e ninguém conduz bem a volta.",
          "Horário cancelado abre e ninguém reaproveita a vaga.",
          "A comunicação acontece sem regra e perde timing.",
        ],
      },
      {
        heading: "O que costuma dar mais resultado",
        paragraphs: [
          "Em geral, o melhor resultado vem da combinação entre agenda confiável, lembrete que sai no momento certo e histórico que ajuda a fazer contato relevante. Parece básico. E é mesmo. Só que muita barbearia ainda faz tudo pela metade.",
          `Boa parte dos concorrentes enfatiza agendamento e lembrete. A diferença está em como isso conversa com a retenção. Crescer melhor não é só trazer mais gente. É aumentar a frequência de quem já conhece o serviço.`,
        ],
        bullets: [
          "Mensagens de confirmação e retorno com regra clara.",
          "Segmentação simples de clientes recorrentes, parados e VIP.",
          "Uso do WhatsApp para preencher vaga sem virar spam.",
        ],
      },
      {
        heading: "Como medir se a estratégia está funcionando",
        paragraphs: [
          "Se você não mede retorno, no-show, taxa de reaproveitamento de horário e produtividade por barbeiro, a sensação manda mais que o dado. E sensação boa em semana cheia pode esconder problema no mês.",
          "Métrica útil é a que ajuda a agir. O ideal é olhar poucos números de forma recorrente. Não um painel infinito que ninguém abre depois da segunda semana.",
        ],
        bullets: [
          "Taxa de comparecimento por período.",
          "Retorno do cliente por janela de tempo.",
          "Horários vagos reaproveitados após cancelamento.",
        ],
      },
      {
        heading: "Quando o CorteZap ajuda mais",
        paragraphs: [
          `O CorteZap tende a destravar mais resultado quando o crescimento depende de ${focus} e a equipe já entendeu que atender bem começa antes do cliente sentar na cadeira.`,
          "Ao conectar WhatsApp, agenda e painel, fica mais fácil usar mensagens úteis, reaproveitar espaço da agenda e manter o cliente perto sem precisar reinventar campanha toda semana.",
        ],
        bullets: [
          "Mais controle sobre recorrência e confirmação.",
          "Base organizada para campanhas simples e específicas.",
          "Operação mais pronta para crescer sem perder ritmo.",
        ],
      },
    ],
    compra: [
      {
        heading: `O que a busca por ${display.toLowerCase()} realmente quer resolver`,
        paragraphs: [
          "Quase ninguém está procurando software por paixão a software. A busca normalmente aparece quando a rotina já está custando dinheiro, paciência ou reputação.",
          `Se o seu tema é ${display.toLowerCase()}, o melhor filtro é simples: a ferramenta ajuda a ${focus} e some na rotina, ou ela exige outro projeto para funcionar?`,
        ],
        bullets: [
          "Tempo de implantação compatível com a operação real.",
          "Adoção da equipe sem treinamento infinito.",
          "Impacto claro em agenda, faltas ou visibilidade de caixa.",
        ],
      },
      {
        heading: "Como fazer uma avaliação menos ingênua",
        paragraphs: [
          "A forma mais segura de comparar é levar um cenário feio para a demo. Cliente que atrasou, outro pedindo remarcação, barbeiro com intervalo, dono querendo comissão fechada e mais um contato chegando no WhatsApp.",
          "Quando a plataforma aguenta esse teste, o resto costuma fluir. Quando não aguenta, a demo ainda pode parecer linda. Só que você descobre tarde.",
        ],
        bullets: [
          pick(buyerQuestions, seed + 10),
          pick(buyerQuestions, seed + 11),
          pick(buyerQuestions, seed + 12),
        ],
      },
      {
        heading: "Custo barato e custo caro são coisas diferentes",
        paragraphs: [
          "Mensalidade baixa não significa custo baixo. Se a ferramenta gera retrabalho, falha de adoção ou te prende a rotina manual, o barato vira caro muito rápido.",
          "Da mesma forma, preço um pouco maior pode se pagar cedo quando corta no-show, organiza a agenda e libera tempo do dono. O cálculo precisa olhar operação, não só boleto.",
        ],
        bullets: [
          "Quanto tempo manual o sistema elimina por semana.",
          "Quanto de no-show ou horário perdido ele ajuda a recuperar.",
          "Quanto de clareza operacional ele adiciona para a equipe.",
        ],
      },
      {
        heading: "Perfil de barbearia em que o CorteZap costuma ganhar",
        paragraphs: [
          `O CorteZap faz mais sentido para quem quer ${focus}, mas considera o WhatsApp parte central da compra. Esse recorte muda bastante o tipo de software ideal.`,
          "Se o cliente já chama no chat e espera resolver ali, unir atendimento, agendamento e visão operacional costuma trazer resultado mais rápido do que empilhar app, planilha e agenda avulsa.",
        ],
        bullets: [
          "Boa aderência para barbearias que vendem muito pelo WhatsApp.",
          "Entrada mais natural para equipes que precisam de painel simples.",
          "Menos espaço para ruído entre conversa, agenda e gestão.",
        ],
      },
    ],
    operacao: [
      {
        heading: `Por que ${display.toLowerCase()} mexe tanto com o resultado`,
        paragraphs: [
          `${pick(realityChecks, seed + 6)} Em barbearia, detalhe operacional vira dinheiro rápido. Um intervalo mal configurado vira atraso. Uma comissão pouco clara vira desgaste com a equipe. Um fechamento frouxo vira dado ruim no mês inteiro.`,
          `Por isso, trabalhar ${display.toLowerCase()} não é microgerenciamento. É dar regra ao que hoje depende de cada pessoa lembrar, interpretar ou improvisar.`,
        ],
        bullets: [
          "Menos decisão no grito durante o expediente.",
          "Mais previsibilidade para a equipe.",
          "Mais consistência no atendimento percebido pelo cliente.",
        ],
      },
      {
        heading: "Como transformar regra em rotina",
        paragraphs: [
          "Regra boa é a que cabe no dia corrido. Se o processo exige dez cliques ou interpretação demais, ele morre. A melhor configuração é a que a equipe entende rápido e repete sem sofrimento.",
          `Esse é um ponto em que muita plataforma escorrega: promete flexibilidade total, mas entrega trabalho demais. Para ${display.toLowerCase()}, o ideal costuma ser clareza com o menor número possível de etapas.`,
        ],
        bullets: [
          "Padrão simples para agenda, confirmação e exceções.",
          "Responsabilidade clara entre admin e barbeiros.",
          "Visão rápida do que precisa de atenção naquele dia.",
        ],
      },
      {
        heading: "Indicadores que valem acompanhar",
        paragraphs: [
          "Operação sem indicador vira opinião. E opinião muda conforme o humor da semana. O básico bem acompanhado costuma render mais do que um painel cheio que ninguém lê.",
          "Escolha números ligados à sua dor principal. Se o gargalo é atraso, acompanhe atraso. Se é comissão, acompanhe fechamento. Se é recorrência, acompanhe retorno.",
        ],
        bullets: [
          "Tempo ocioso e encaixes do dia.",
          "Cumprimento de horário por profissional.",
          "Fechamento e comissão sem ajuste de última hora.",
        ],
      },
      {
        heading: "Onde o CorteZap costuma ajudar",
        paragraphs: [
          `O CorteZap tende a funcionar bem quando você quer ${focus} sem transformar a equipe em operadora de sistema. A ideia é reduzir ruído entre o que acontece no chat, na agenda e no painel.`,
          "Quando a entrada do cliente já chega organizada, fica mais fácil sustentar padrão interno. Isso não resolve tudo sozinho, claro. Mas elimina um pedaço importante do caos diário.",
        ],
        bullets: [
          "Painel enxuto para leitura rápida.",
          "Agenda ligada ao canal que mais gera contato.",
          "Base mais sólida para rotina da equipe.",
        ],
      },
    ],
  };

  return clusterSections[cluster];
}

function buildGenericFaq(keyword: string, cluster: BlogCluster, focus: string): FaqEntry[] {
  const display = prettifyKeyword(keyword);
  const answerBase =
    cluster === "compra"
      ? "Depende da rotina atual e de como a equipe recebe a mudança, mas a avaliação correta acontece quando você testa cenário real e mede impacto em agenda, faltas e organização."
      : "Sim, desde que o processo esteja ligado à rotina real da barbearia e não fique isolado em outra ferramenta que ninguém usa direito.";

  return [
    {
      question: `${display} funciona melhor para barbearia pequena ou equipe maior?`,
      answer:
        "Funciona para os dois cenários, mas a prioridade muda. Operação pequena costuma buscar simplicidade e menos dependência do dono. Equipe maior precisa de regra, visibilidade e menos conflito de agenda.",
    },
    {
      question: `Qual é o maior erro ao implementar ${display.toLowerCase()}?`,
      answer:
        "Querer implantar tecnologia sem revisar processo. Se horário, confirmação, exceção e responsabilidade continuam confusos, o software só digitaliza a bagunça.",
    },
    {
      question: `${display} ajuda a ${focus}?`,
      answer: answerBase,
    },
    {
      question: "Como saber se chegou a hora de mudar a operação?",
      answer:
        "Quando o dono vira gargalo da agenda, o cliente espera resposta demais, a equipe trabalha no escuro ou o fechamento depende de planilha extra. Esses sinais costumam aparecer antes da queda de faturamento ficar óbvia.",
    },
  ];
}

function buildKeywordPost(seedData: KeywordSeed, cluster: Exclude<BlogCluster, "comparativos" | "alternativas" | "local">, index: number): BlogPost {
  const seed = hash(`${seedData.keyword}-${cluster}-${index}`);
  const title = buildTitle(seedData.keyword, cluster, seed);
  const description = buildDescription(seedData.keyword, cluster, seedData.focus, seed);
  const intro = buildGenericIntro(seedData.keyword, cluster, seedData.focus, seed);
  const sections = buildGenericSections(seedData.keyword, cluster, seedData.focus, seed);
  const takeaways = buildTakeaways(seedData.keyword, cluster, seedData.focus, seed);
  const faqEntries = buildGenericFaq(seedData.keyword, cluster, seedData.focus);
  const allContent = [
    title,
    description,
    ...intro,
    ...takeaways,
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...faqEntries.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  return {
    slug: slugify(seedData.keyword),
    title,
    description,
    cluster,
    clusterLabel: clusterLabels[cluster],
    heroEyebrow: clusterEyebrows[cluster],
    primaryKeyword: prettifyKeyword(seedData.keyword),
    keywords: uniqueKeywords(prettifyKeyword(seedData.keyword), cluster),
    publishedAt: isoDate(index + 5),
    updatedAt: isoDate(Math.max(0, index - 1)),
    readingTime: readingTimeFromContent(allContent),
    intro,
    takeaways,
    sections,
    faqEntries,
    ctaTitle: pick(ctaTitles, seed),
    ctaBody: pick(ctaBodies, seed + 2),
    tags: keywordTags(prettifyKeyword(seedData.keyword), cluster),
  };
}

function buildCompetitorComparisonPost(competitor: CompetitorResearch, index: number): BlogPost {
  const seed = hash(`${competitor.slug}-comparison`);
  const titleTemplates = [
    `CorteZap vs ${competitor.name}: qual faz mais sentido para barbearias em 2026`,
    `${competitor.name} ou CorteZap: como escolher sem cair no discurso comercial`,
    `CorteZap ou ${competitor.name}: comparação direta para quem vive de agenda`,
    `${competitor.name} vs CorteZap: onde cada plataforma costuma ganhar`,
  ];
  const descriptionTemplates = [
    `Comparativo direto entre CorteZap e ${competitor.name} com foco em agenda, WhatsApp, equipe e rotina real de barbearia.`,
    `Veja onde ${competitor.name} costuma ir bem e em que cenário o CorteZap tende a encaixar melhor para barbearias.`,
    `Um comparativo honesto entre CorteZap e ${competitor.name} para quem precisa decidir olhando operação, não só landing page.`,
  ];

  const intro = [
    `${pick(directOpeners, seed)} comparar CorteZap com ${competitor.name} só faz sentido quando você parte da rotina real da barbearia, não da lista de recursos isolada.`,
    `Pela página pública do ${competitor.name}, o foco está em ${competitor.positioning}. Isso diz bastante sobre o tipo de operação em que a ferramenta tende a funcionar bem.`,
    `${pick(realityChecks, seed + 4)} O ponto central aqui é entender se a sua barbearia precisa de amplitude genérica ou de aderência mais forte ao fluxo do WhatsApp, da agenda e do painel.`,
  ];

  const sections: BlogSection[] = [
    {
      heading: `Onde o ${competitor.name} costuma entrar bem`,
      paragraphs: [
        `${competitor.name} faz sentido para negócios que valorizam ${competitor.mainStrength}. Isso pode pesar bastante se o que está faltando é só uma camada mais organizada de agenda ou operação.`,
        `Além disso, o posicionamento público do ${competitor.name} conversa com ${competitor.market.toLowerCase()} e com uma leitura específica do problema. Isso sempre conta na decisão.`,
      ],
      bullets: [
        competitor.mainStrength,
        competitor.positioning,
        "Boa aderência quando a principal dor está alinhada ao foco público da plataforma",
      ],
    },
    {
      heading: "Onde o CorteZap tende a ganhar",
      paragraphs: [
        `O CorteZap costuma ganhar quando a barbearia entende que o canal comercial principal é o WhatsApp e quer menos trabalho manual entre conversa, horário confirmado e visão de agenda.`,
        `No caso do ${competitor.name}, o ponto de atenção público está em ${competitor.mainGap}. Se isso encosta exatamente na sua dor, a comparação muda de figura.`,
      ],
      bullets: [
        "Mais aderência ao atendimento conversacional da barbearia brasileira.",
        "Painel pensado para dono e barbeiro lerem a operação com rapidez.",
        "Fluxo mais unido entre WhatsApp, agenda e gestão diária.",
      ],
    },
    {
      heading: "Perguntas que eu faria antes de decidir",
      paragraphs: [
        "A melhor comparação é bem menos sofisticada do que parece. Coloque um cenário real na mesa e veja o que cada plataforma faz com ele.",
        "Se a resposta depende de gambiarra, exportação ou processo paralelo, anote isso como custo operacional e não como detalhe.",
      ],
      bullets: [
        pick(buyerQuestions, seed + 2),
        pick(buyerQuestions, seed + 3),
        pick(buyerQuestions, seed + 4),
      ],
    },
    {
      heading: "Veredito rápido",
      paragraphs: [
        `Eu olharia para o ${competitor.name} quando a prioridade principal fosse ${competitor.mainStrength}. Eu puxaria para o CorteZap quando a barbearia precisasse de ${competitor.alternativeFit}.`,
        "Não existe vencedor universal. Existe a ferramenta que corta mais fricção no seu gargalo atual. Esse é o critério que mais evita arrependimento.",
      ],
      bullets: [
        `Melhor cenário para ${competitor.name}: ${competitor.mainStrength}.`,
        `Melhor cenário para CorteZap: ${competitor.alternativeFit}.`,
        "Decisão boa nasce de processo real, não de tela bonita.",
      ],
    },
  ];

  const faqEntries: FaqEntry[] = [
    {
      question: `O ${competitor.name} é ruim?`,
      answer:
        `Não. A pergunta certa não é se o ${competitor.name} é ruim, e sim se o foco público dele bate com o que trava sua rotina hoje.`,
    },
    {
      question: "Quando o CorteZap tende a ser a melhor escolha?",
      answer:
        "Quando o WhatsApp é o principal canal de entrada, a agenda precisa conversar com a operação real e o dono quer menos retrabalho entre atendimento, equipe e fechamento.",
    },
    {
      question: "Vale migrar de plataforma mesmo com a agenda rodando?",
      answer:
        "Vale quando a plataforma atual te obriga a operar no improviso em pontos críticos. A troca faz sentido se diminuir conflito, no-show, atraso de resposta ou dependência do dono.",
    },
    {
      question: "Qual teste prático comparar primeiro?",
      answer:
        "Pegue um cenário com cliente novo pedindo horário, outro querendo reagendar e barbeiro precisando enxergar a agenda. A plataforma que lida melhor com isso costuma mostrar logo se vai encaixar na rotina.",
    },
  ];

  const content = [
    titleTemplates[0],
    ...intro,
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...faqEntries.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  const title = pick(titleTemplates, seed);
  const description = pick(descriptionTemplates, seed + 5);

  return {
    slug: `cortezap-vs-${competitor.slug}`,
    title,
    description,
    cluster: "comparativos",
    clusterLabel: clusterLabels.comparativos,
    heroEyebrow: clusterEyebrows.comparativos,
    primaryKeyword: `${competitor.name} vs CorteZap`,
    keywords: Array.from(
      new Set([
        ...CORE_KEYWORDS,
        `${competitor.name} vs CorteZap`,
        `alternativa ao ${competitor.name}`,
        `comparar ${competitor.name} e CorteZap`,
        "melhor sistema para barbearia",
      ])
    ).slice(0, 18),
    publishedAt: isoDate(index + 1),
    updatedAt: isoDate(index),
    readingTime: readingTimeFromContent(content),
    intro,
    takeaways: [
      `${competitor.name} tem espaço quando o foco principal bate com ${competitor.mainStrength}.`,
      `O CorteZap tende a ganhar quando a prioridade é ${competitor.alternativeFit}.`,
      "Comparativo bom parte do seu gargalo, não da lista de features.",
    ],
    sections,
    faqEntries,
    ctaTitle: "Comparar com o fluxo real da sua barbearia",
    ctaBody: `Se a sua dúvida está entre CorteZap e ${competitor.name}, a melhor próxima etapa é simular um dia real da sua operação: cliente novo, reagendamento, lembrete e visão da equipe no painel.`,
    tags: [`${competitor.name}`, "comparativo", "concorrentes", "barbearia", "cortezap"],
    sourceCompetitor: competitor,
  };
}

function buildAlternativePost(competitor: CompetitorResearch, index: number): BlogPost {
  const seed = hash(`${competitor.slug}-alternative`);
  const titleTemplates = [
    `Alternativas ao ${competitor.name} para barbearias que vivem no WhatsApp`,
    `${competitor.name}: 5 sinais de que você precisa procurar uma alternativa`,
    `Melhor alternativa ao ${competitor.name} para barbearias que querem mais controle`,
    `Quando procurar uma alternativa ao ${competitor.name} na sua barbearia`,
  ];

  const descriptionTemplates = [
    `Guia para quem está procurando alternativa ao ${competitor.name} com foco em WhatsApp, agenda, equipe e operação real.`,
    `Veja em que cenário faz sentido buscar alternativa ao ${competitor.name} e por que o CorteZap entra nessa conversa.`,
    `Um comparativo prático para avaliar se o ${competitor.name} ainda atende sua barbearia ou se é hora de trocar.`,
  ];

  const intro = [
    `Quem procura alternativa ao ${competitor.name} geralmente não está atrás de moda. Está tentando resolver um limite que já começou a custar tempo, paciência ou venda perdida.`,
    `No material público do ${competitor.name}, a proposta gira em torno de ${competitor.positioning}. Isso serve bem para vários cenários, mas também desenha onde a ferramenta pode deixar lacunas.`,
    `Se a sua barbearia sente que precisa de ${competitor.alternativeFit}, a busca por alternativa deixa de ser curiosidade e vira ajuste operacional.`,
  ];

  const sections: BlogSection[] = [
    {
      heading: `Por que alguém começa a procurar alternativa ao ${competitor.name}`,
      paragraphs: [
        "Normalmente a troca começa quando a rotina ficou maior do que o desenho original da ferramenta. O sistema continua funcionando, mas obriga a equipe a compensar no braço.",
        `No caso do ${competitor.name}, esse gatilho costuma aparecer quando a barbearia bate de frente com ${competitor.mainGap}.`,
      ],
      bullets: [
        "A operação precisa de menos ida e volta manual.",
        "O dono quer mais visibilidade sem virar operador do sistema.",
        "O cliente espera resolver mais coisa no próprio chat.",
      ],
    },
    {
      heading: "O que não pode faltar na troca",
      paragraphs: [
        "Trocar de plataforma para continuar fazendo gambiarra não compensa. A alternativa boa precisa cortar atrito em pontos que doem todo dia.",
        "Isso inclui implantação decente, regra clara de agenda, visão da equipe e uma camada de atendimento que combine com o comportamento real do cliente.",
      ],
      bullets: [
        "Migração sem derrubar a agenda da semana.",
        "Equipe entendendo rápido onde olha e o que faz.",
        "Histórico e agenda centralizados sem voltar para planilha.",
      ],
    },
    {
      heading: "Por que o CorteZap costuma entrar nessa lista",
      paragraphs: [
        `O CorteZap entra como alternativa ao ${competitor.name} principalmente para barbearias que querem ${competitor.alternativeFit}.`,
        "Na prática, isso significa dar mais peso ao WhatsApp como canal real de vendas, reduzir retrabalho entre agenda e conversa e oferecer painel enxuto para quem toca a operação.",
      ],
      bullets: [
        "Menos dependência de solução paralela para o chat.",
        "Mais aderência à rotina brasileira de agendamento pelo WhatsApp.",
        "Leitura rápida da operação para dono e barbeiro.",
      ],
    },
    {
      heading: "Plano de troca sem trauma",
      paragraphs: [
        "A migração boa é simples: mapear o que não pode quebrar, testar cenário real, subir a equipe por etapas e acompanhar a primeira semana de uso com mais atenção.",
        "Se você troca só porque cansou do sistema atual, pode repetir o erro em outro lugar. Troque porque sabe exatamente qual gargalo quer eliminar.",
      ],
      bullets: [
        "Defina o processo crítico antes da migração.",
        "Teste confirmação, reagendamento e visibilidade da equipe.",
        "Acompanhe no-show, tempo de resposta e clareza de agenda após a troca.",
      ],
    },
  ];

  const faqEntries: FaqEntry[] = [
    {
      question: `Quando faz sentido trocar o ${competitor.name}?`,
      answer:
        "Quando a plataforma atual começou a exigir compensação manual demais em pontos que afetam cliente, agenda ou equipe. A troca precisa ter objetivo operacional claro.",
    },
    {
      question: "Toda barbearia precisa de uma alternativa?",
      answer:
        "Não. Se o sistema atual encaixa bem no processo da sua equipe e no canal de entrada do cliente, talvez não. A busca por alternativa faz sentido quando o atrito virou rotina.",
    },
    {
      question: "O CorteZap é indicado em que caso?",
      answer:
        `Principalmente quando a dor central está em ${competitor.alternativeFit} e o WhatsApp já é a principal porta de entrada dos agendamentos.`,
    },
    {
      question: "Como comparar sem se arrepender depois?",
      answer:
        "Teste a semana real, não o mundo ideal. Coloque cancelamento, atraso, barbeiro vendo agenda e cliente pedindo remarcação no roteiro da avaliação.",
    },
  ];

  const title = pick(titleTemplates, seed);
  const description = pick(descriptionTemplates, seed + 2);
  const content = [
    title,
    description,
    ...intro,
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...faqEntries.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  return {
    slug: `alternativa-ao-${competitor.slug}`,
    title,
    description,
    cluster: "alternativas",
    clusterLabel: clusterLabels.alternativas,
    heroEyebrow: clusterEyebrows.alternativas,
    primaryKeyword: `alternativa ao ${competitor.name}`,
    keywords: Array.from(
      new Set([
        ...CORE_KEYWORDS,
        `alternativa ao ${competitor.name}`,
        `${competitor.name} concorrente`,
        `${competitor.name} para barbearia`,
        "trocar sistema de barbearia",
      ])
    ).slice(0, 18),
    publishedAt: isoDate(index + 35),
    updatedAt: isoDate(index + 34),
    readingTime: readingTimeFromContent(content),
    intro,
    takeaways: [
      `A troca do ${competitor.name} só faz sentido quando a barbearia quer eliminar um gargalo real.`,
      `O CorteZap entra melhor quando a dor está em ${competitor.alternativeFit}.`,
      "Migração boa começa por processo crítico, não por entusiasmo com feature.",
    ],
    sections,
    faqEntries,
    ctaTitle: "Avaliar a troca com um cenário real",
    ctaBody: `Se você está pensando em sair do ${competitor.name}, compare com o que acontece no seu WhatsApp e na sua agenda hoje. É esse teste que mostra se o CorteZap reduz atrito de verdade.`,
    tags: [`${competitor.name}`, "alternativas", "troca de sistema", "barbearia", "cortezap"],
    sourceCompetitor: competitor,
  };
}

function buildLocalPost(seedData: LocalSeed, index: number): BlogPost {
  const keyword = `sistema para barbearia em ${seedData.city}`;
  const displayKeyword = prettifyKeyword(keyword);
  const cityLabel = prettifyKeyword(seedData.city);
  const seed = hash(`${seedData.city}-${seedData.state}`);
  const titleTemplates = [
    `${displayKeyword}: como captar mais horários pelo Google e WhatsApp`,
    `${displayKeyword}: guia para aparecer melhor e organizar a agenda`,
    `${displayKeyword}: o que muda quando a operação local fica redonda`,
    `${displayKeyword}: como transformar busca local em cliente recorrente`,
  ];
  const descriptionTemplates = [
    `Entenda como estruturar ${displayKeyword.toLowerCase()} com foco em Google, WhatsApp, agenda real e operação local.`,
    `Guia prático para barbearias de ${cityLabel} que querem aparecer melhor na busca local e transformar interesse em horário confirmado.`,
    `Veja como ligar SEO local, Google Business Profile, WhatsApp e painel para uma barbearia em ${cityLabel}.`,
  ];

  const intro = [
    `${pick(directOpeners, seed)} quem busca por ${displayKeyword.toLowerCase()} normalmente quer duas coisas ao mesmo tempo: aparecer para quem está por perto e não perder o contato quando ele chega.`,
    `Em ${cityLabel}, a competição local raramente se resolve só com Instagram bonito. A agenda precisa responder bem quando a busca acontece, e isso passa por Google, WhatsApp e operação alinhada.`,
    `${pick(realityChecks, seed + 3)} Quando a presença local está boa, mas a resposta continua lenta ou a agenda segue confusa, o resultado fica abaixo do potencial.`,
  ];

  const sections: BlogSection[] = [
    {
      heading: `O que o cliente local espera em ${cityLabel}`,
      paragraphs: [
        "Quem pesquisa uma barbearia perto de casa ou do trabalho quer encontrar rápido, confiar no que viu e resolver a marcação sem atrito. Esse é o jogo inteiro.",
        `Por isso, trabalhar ${displayKeyword.toLowerCase()} exige mais do que aparecer. Exige ${seedData.focus} e dar uma saída clara para o cliente avançar.`,
      ],
      bullets: [
        "Informação clara de serviço, horário e contato.",
        "Caminho curto entre a busca e o agendamento.",
        "Resposta rápida quando o cliente decide agir.",
      ],
    },
    {
      heading: "Como ligar Google, Instagram e WhatsApp sem quebrar a agenda",
      paragraphs: [
        "O erro comum é tratar cada canal como um mundo separado. Na prática, o cliente descobre no Google, confirma confiança no Instagram e decide pelo WhatsApp.",
        "Se a agenda não acompanha esse fluxo, você gera cliques sem gerar horário fechado. A presença digital precisa conversar com a operação.",
      ],
      bullets: [
        "Google Business Profile atualizado e com CTA claro.",
        "Link direto para o canal que fecha a conversa.",
        "Agenda sincronizada para não vender horário inexistente.",
      ],
    },
    {
      heading: "O que avaliar em um sistema localmente competitivo",
      paragraphs: [
        "Para uma barbearia de bairro ou de região disputada, o sistema precisa fazer o básico muito bem: responder, confirmar, lembrar e organizar a equipe.",
        "Também ajuda quando o painel mostra de onde vem a demanda, quais horários ficam vagos e quais clientes voltam com mais frequência.",
      ],
      bullets: [
        pick(buyerQuestions, seed + 5),
        "O sistema ajuda a recuperar vaga aberta no mesmo dia?",
        "Existe histórico para reativar cliente local que esfriou?",
      ],
    },
    {
      heading: "Onde o CorteZap pode ajudar",
      paragraphs: [
        `O CorteZap encaixa bem em ${cityLabel} quando a barbearia quer usar o WhatsApp como ponte real entre descoberta local e horário confirmado.`,
        "A combinação entre atendimento automatizado, agenda conectada e painel claro tende a funcionar bem para quem quer melhorar captação sem perder controle interno.",
      ],
      bullets: [
        "Menos atrito entre busca local e marcação.",
        "Mais velocidade para responder demanda da região.",
        "Base melhor para recorrência e reputação local.",
      ],
    },
  ];

  const faqEntries: FaqEntry[] = [
    {
      question: `SEO local sozinho resolve para uma barbearia em ${cityLabel}?`,
      answer:
        "Não. Ele ajuda a atrair demanda, mas a conversão depende de resposta rápida, agenda confiável e experiência consistente até o comparecimento.",
    },
    {
      question: "Vale priorizar Google ou WhatsApp?",
      answer:
        "Os dois cumprem papéis diferentes. O Google costuma gerar descoberta e confiança inicial. O WhatsApp costuma fechar a conversa. O ideal é conectar os dois sem atrito.",
    },
    {
      question: "Como saber se a presença local está funcionando?",
      answer:
        "Olhe cliques em rotas, mensagens recebidas, horários fechados e recorrência dos clientes da região. Visibilidade sem agenda preenchida é só vaidade.",
    },
    {
      question: "O CorteZap ajuda no fluxo local?",
      answer:
        "Ajuda quando o principal gargalo está entre a descoberta do cliente e o fechamento do horário. Nesse cenário, usar o WhatsApp como canal central costuma fazer diferença.",
    },
  ];

  const title = pick(titleTemplates, seed);
  const description = pick(descriptionTemplates, seed + 8);
  const content = [
    title,
    description,
    ...intro,
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...faqEntries.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");

  return {
    slug: slugify(keyword),
    title,
    description,
    cluster: "local",
    clusterLabel: clusterLabels.local,
    heroEyebrow: clusterEyebrows.local,
    primaryKeyword: displayKeyword,
    keywords: Array.from(
      new Set([
        ...CORE_KEYWORDS,
        displayKeyword,
        `agendamento whatsapp barbearia ${cityLabel}`,
        `seo local para barbearia ${cityLabel}`,
        `google business profile barbearia ${cityLabel}`,
      ])
    ).slice(0, 18),
    publishedAt: isoDate(index + 90),
    updatedAt: isoDate(index + 88),
    readingTime: readingTimeFromContent(content),
    intro,
    takeaways: [
      `${displayKeyword} funciona melhor quando descoberta e agenda estão conectadas.`,
      "Presença local sem resposta rápida desperdiça procura qualificada.",
      "Google, Instagram e WhatsApp precisam servir à mesma operação.",
    ],
    sections,
    faqEntries,
    ctaTitle: "Ver o fluxo local rodando no WhatsApp",
    ctaBody: `Se a sua barbearia em ${cityLabel} quer transformar mais busca local em horário confirmado, vale testar um fluxo em que Google, WhatsApp e agenda deixam de ser coisas separadas.`,
    tags: [cityLabel, seedData.state, "seo local", "barbearia", "google", "whatsapp"],
  };
}

const keywordPosts = [
  ...whatsappKeywords.map((item, index) => buildKeywordPost(item, "whatsapp", index)),
  ...managementKeywords.map((item, index) => buildKeywordPost(item, "gestao", index + whatsappKeywords.length)),
  ...growthKeywords.map((item, index) =>
    buildKeywordPost(item, "crescimento", index + whatsappKeywords.length + managementKeywords.length)
  ),
  ...buyingKeywords.map((item, index) =>
    buildKeywordPost(
      item,
      "compra",
      index + whatsappKeywords.length + managementKeywords.length + growthKeywords.length
    )
  ),
  ...operationsKeywords.map((item, index) =>
    buildKeywordPost(
      item,
      "operacao",
      index +
        whatsappKeywords.length +
        managementKeywords.length +
        growthKeywords.length +
        buyingKeywords.length
    )
  ),
];

const competitorPosts = competitors.map((competitor, index) => buildCompetitorComparisonPost(competitor, index));
const alternativePosts = competitors.map((competitor, index) => buildAlternativePost(competitor, index));
const localPosts = localKeywords.map((seedData, index) => buildLocalPost(seedData, index));

export const blogPosts: BlogPost[] = [...competitorPosts, ...alternativePosts, ...keywordPosts, ...localPosts].sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
);

export const featuredBlogPosts = blogPosts.slice(0, 12);
export const competitorResearch = competitors;

const postsBySlug = new Map(blogPosts.map((post) => [post.slug, post]));

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return postsBySlug.get(slug);
}

export function getRelatedBlogPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  const ranked = blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag)).length;
      const clusterBonus = post.cluster === currentPost.cluster ? 3 : 0;
      const competitorBonus =
        currentPost.sourceCompetitor && post.sourceCompetitor?.slug === currentPost.sourceCompetitor.slug ? 4 : 0;

      return {
        post,
        score: sharedTags + clusterBonus + competitorBonus,
      };
    })
    .sort((left, right) => right.score - left.score);

  return ranked.slice(0, limit).map((entry) => entry.post);
}

export function getPostsByCluster(cluster: BlogCluster): BlogPost[] {
  return blogPosts.filter((post) => post.cluster === cluster);
}

export function getBlogPostUrl(slug: string): string {
  return `${BLOG_BASE_PATH}/${slug}`;
}

export const blogStats = {
  totalPosts: blogPosts.length,
  totalCompetitors: competitors.length,
  totalClusters: Object.keys(clusterLabels).length,
  blogAuthor: BLOG_AUTHOR,
  siteUrl: SITE_URL,
  blogBasePath: BLOG_BASE_PATH,
};

export const clusterSummaries = [
  {
    cluster: "comparativos" as const,
    title: "Comparativos diretos",
    description: "Posts para capturar buscas de marca, comparação e troca de ferramenta.",
  },
  {
    cluster: "alternativas" as const,
    title: "Alternativas",
    description: "Conteúdo para quem já está insatisfeito com um player conhecido e quer migrar.",
  },
  {
    cluster: "whatsapp" as const,
    title: "WhatsApp e Automação",
    description: "Termos comerciais ligados ao principal canal de atendimento das barbearias.",
  },
  {
    cluster: "gestao" as const,
    title: "Gestão e Painel",
    description: "Páginas para quem procura sistema, software, financeiro e agenda unificada.",
  },
  {
    cluster: "crescimento" as const,
    title: "Crescimento e Retenção",
    description: "Conteúdo para no-show, retorno de cliente, SEO local e recorrência.",
  },
  {
    cluster: "compra" as const,
    title: "Compra e Implementação",
    description: "Guias para quem está avaliando preço, ROI, teste grátis e implantação.",
  },
  {
    cluster: "operacao" as const,
    title: "Operação e Equipe",
    description: "Temas internos que ajudam a fechar processo, comissão, escalas e indicadores.",
  },
  {
    cluster: "local" as const,
    title: "SEO Local",
    description: "Páginas voltadas a cidades relevantes para captar buscas locais com intenção comercial.",
  },
];

export function createBlogPostingSchema(post: BlogPost) {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    inLanguage: "pt-BR",
    author: {
      "@type": "Organization",
      name: BLOG_AUTHOR,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: new URL(getBlogPostUrl(post.slug), SITE_URL).toString(),
  };
}
