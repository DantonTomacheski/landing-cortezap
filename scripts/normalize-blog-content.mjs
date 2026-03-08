import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = "/Users/dantomacheski/dev/repos/cortezap/landing-cortezap";
const blogRoot = path.join(projectRoot, "src/content/blog");
const docsRoot = path.join(projectRoot, "docs");

const clusterMeta = {
  "money-pages": {
    folder: "comercial",
    hubPath: "/blog/paginas-comerciais-barbearia",
  },
  comparativos: {
    folder: "comparativos",
    hubPath: "/blog/comparativos-software-barbearia",
  },
  "operacao-whatsapp": {
    folder: "whatsapp",
    hubPath: "/blog/whatsapp-barbearia",
  },
  "operacao-gestao": {
    folder: "gestao",
    hubPath: "/blog/gestao-barbearia",
  },
  retencao: {
    folder: "retencao",
    hubPath: "/blog/retencao-barbearia",
  },
  autoridade: {
    folder: "guias",
    hubPath: "/blog/guias-sistema-barbearia",
  },
  "seo-local": {
    folder: "seo-local",
    hubPath: "/blog/seo-local-barbearia",
  },
};

const defaultAuthor = "Equipe CorteZap";
const defaultReviewer = "Revisão editorial CorteZap";

const extraPosts = [
  {
    slug: "roteiro-migracao-dados-clientes-barbearia",
    folder: "guias",
    frontmatter: {
      title: "Roteiro de Migração de Dados de Clientes para Barbearia",
      description:
        "Como migrar clientes, histórico, serviços e agenda sem perder contexto nem travar a operação da barbearia.",
      excerpt:
        "Um roteiro direto para migrar dados de clientes, histórico, serviços e agenda sem gerar confusão para equipe nem para a base da barbearia.",
      primaryKeyword: "migração de dados de clientes barbearia",
      keywords: [
        "migração de dados de clientes barbearia",
        "migrar cadastro de clientes barbearia",
        "migrar agenda barbearia",
        "trocar sistema sem perder clientes",
        "migracao de dados software barbearia",
        "exportar clientes trinks",
        "implantar novo sistema barbearia",
      ],
      searchIntent: "commercial",
      funnelStage: "consideration",
      cluster: "autoridade",
      clusterLabel: "Guias e Autoridade",
      hub: "/blog/guias-sistema-barbearia",
      publishedAt: "2026-03-08",
      updatedAt: "2026-03-08",
      reviewedAt: "2026-03-08",
      readingTime: 7,
      ctaTitle: "Migrar sem apagar histórico importante",
      ctaBody:
        "Se a sua troca de sistema trava porque ninguém quer perder dados, o CorteZap pode ser testado em paralelo para validar agenda, clientes e rotina antes da virada.",
      author: defaultAuthor,
      reviewer: defaultReviewer,
      tags: [
        "migração",
        "dados",
        "clientes",
        "implantação",
        "barbearia",
      ],
      faq: [
        {
          question: "O que precisa migrar primeiro?",
          answer:
            "Cadastros de clientes, serviços, profissionais e agenda futura. Histórico antigo ajuda, mas o que protege a operação é o que impacta os próximos dias.",
        },
        {
          question: "Vale mudar tudo de uma vez?",
          answer:
            "Nem sempre. O mais seguro é rodar uma fase paralela curta para validar atendimento novo, agenda e leitura da equipe antes do corte definitivo.",
        },
        {
          question: "Preciso migrar todo o histórico?",
          answer:
            "Só se ele realmente for usado. Muita barbearia carrega dado morto que só atrasa a implantação. Foque no que ajuda agenda, relacionamento e decisão.",
        },
      ],
      internalLinks: [
        "/blog/guias/guia-migrar-sistema-barbearia",
        "/blog/guias/como-implantar-agendamento-online",
        "/blog/comparativos/alternativa-ao-trinks",
      ],
    },
    body: `Migrar dados de clientes parece tarefa de bastidor, mas é uma das partes que mais assusta dono de barbearia quando chega a hora de trocar de sistema. O medo quase sempre é o mesmo: perder histórico, travar a agenda da semana e transformar a equipe em suporte técnico.

Se a migração é feita no improviso, esse medo faz sentido. Quando existe roteiro, critério e teste paralelo, a troca deixa de parecer salto no escuro.

## O problema real

O problema não é só copiar uma planilha de clientes de um lugar para outro. O problema é preservar contexto operacional. Quem é cliente recorrente, qual barbeiro atende melhor cada pessoa, quais serviços estão ativos, o que já está agendado e o que ainda depende de confirmação.

Quando esse contexto se perde, a nova ferramenta pode até funcionar, mas a operação passa uma ou duas semanas tropeçando. E essa fase ruim contamina a percepção da equipe sobre o sistema novo.

## Erro comum

O erro mais comum é tentar migrar tudo por impulso na véspera do dia mais cheio. Outro erro recorrente é exportar uma base enorme sem separar o que realmente precisa continuar vivo.

Tem barbearia que passa anos acumulando clientes duplicados, serviços descontinuados e observações que ninguém consulta. Levar esse peso inteiro para o sistema novo só aumenta ruído.

## O que funciona na prática

O que costuma funcionar melhor é dividir a migração em quatro blocos:

- **Agenda futura:** horários já vendidos, com serviço, barbeiro e status de confirmação.
- **Cadastros ativos:** clientes que voltam, profissionais em operação e serviços realmente vendidos hoje.
- **Regras operacionais:** duração dos serviços, intervalos, comissão e horários por profissional.
- **Mensagens-chave:** lembrete, confirmação, orientação para reagendamento e aviso de mudança.

Se você rodar uma semana paralela com parte da operação no sistema antigo e novos contatos entrando no fluxo novo, consegue validar a mecânica sem colocar o faturamento inteiro em risco.

## Quando isso não resolve

Se a barbearia ainda não sabe exatamente como quer operar, a migração de dados não salva. Sistema novo não compensa processo confuso. Antes de mover cadastro, defina serviço, grade, regras de exceção e quem responde pelo quê.

Também não resolve insistir em puxar histórico inútil. Se o dado não ajuda decisão, agenda ou relacionamento, ele vira peso morto.

## Como medir se melhorou

Depois da migração, acompanhe:

- porcentagem de agendamentos novos entrando sem intervenção manual;
- erros de cadastro ou conflito de horário na primeira semana;
- tempo que a equipe leva para localizar cliente e histórico relevante;
- necessidade de voltar para planilha ou sistema antigo.

Se esses quatro pontos estabilizam rápido, a migração foi boa.

## Onde o CorteZap entra

O CorteZap faz mais sentido quando a barbearia quer migrar para um fluxo em que cliente, agenda e atendimento conversem melhor. A vantagem prática é testar em paralelo o canal que mais pesa hoje, o WhatsApp, sem pedir para o cliente mudar de comportamento.

Se a sua maior dependência está em marketplace ou em módulos muito específicos de outro sistema, vale mapear isso antes da troca. Migração boa é a que reduz atrito real, não a que parece moderna na apresentação.`,
  },
  {
    slug: "checklist-primeira-semana-sistema-barbearia",
    folder: "guias",
    frontmatter: {
      title: "Checklist da Primeira Semana com um Sistema de Barbearia",
      description:
        "O que validar na primeira semana com um novo sistema para barbearia para não descobrir falha no sábado lotado.",
      excerpt:
        "Um checklist prático para a primeira semana com um novo sistema: agenda, equipe, mensagens, fechamento e pontos que quebram cedo.",
      primaryKeyword: "primeira semana sistema barbearia",
      keywords: [
        "primeira semana sistema barbearia",
        "checklist sistema barbearia",
        "validar implantacao barbearia",
        "teste inicial software barbearia",
        "onboarding sistema barbearia",
        "ajuste de agenda barbearia",
      ],
      searchIntent: "informational",
      funnelStage: "consideration",
      cluster: "autoridade",
      clusterLabel: "Guias e Autoridade",
      hub: "/blog/guias-sistema-barbearia",
      publishedAt: "2026-03-08",
      updatedAt: "2026-03-08",
      reviewedAt: "2026-03-08",
      readingTime: 6,
      ctaTitle: "Validar a operação antes de depender 100% do sistema",
      ctaBody:
        "O jeito certo de avaliar o CorteZap é na rotina da primeira semana: cliente novo, reagendamento, lembrete e equipe usando o painel de verdade.",
      author: defaultAuthor,
      reviewer: defaultReviewer,
      tags: [
        "implantação",
        "checklist",
        "primeira semana",
        "sistema",
        "barbearia",
      ],
      faq: [
        {
          question: "A primeira semana precisa ser perfeita?",
          answer:
            "Não. Precisa revelar onde o processo quebra cedo. O objetivo é ajustar rápido, não fingir que está tudo pronto no primeiro dia.",
        },
        {
          question: "Qual ponto costuma falhar primeiro?",
          answer:
            "Configuração de agenda e mensagens. É onde aparece conflito de horário, intervalo mal cadastrado e cliente sem confirmação clara.",
        },
        {
          question: "Vale rodar paralelo com o sistema antigo?",
          answer:
            "Sim, principalmente em operações maiores. Uma transição curta reduz risco e mostra o que ainda depende de ajuste.",
        },
      ],
      internalLinks: [
        "/blog/guias/guia-migrar-sistema-barbearia",
        "/blog/gestao/como-conferir-agenda-diaria",
        "/blog/whatsapp/como-confirmar-agendamento-whatsapp",
      ],
    },
    body: `A primeira semana com sistema novo é onde a teoria perde a pose. É nesse período que aparecem os detalhes que a demo não mostra: barbeiro olhando a agenda errada, serviço com duração torta, lembrete saindo tarde e dono descobrindo que o fluxo depende de exceção demais.

Por isso, a primeira semana não serve só para “usar”. Ela serve para auditar a própria implantação.

## O problema real

O problema da primeira semana é expectativa mal calibrada. Muita gente compra sistema esperando alívio imediato e esquece que os primeiros dias são de ajuste. Quando isso não é combinado com a equipe, qualquer tropeço vira argumento contra a ferramenta.

Se você entra nessa fase com checklist, os erros deixam de ser drama e viram item de correção.

## Erro comum

O erro mais comum é olhar só se o sistema “está funcionando”. Isso é raso demais. O certo é validar se ele funciona nas partes que mais custam dinheiro quando dão errado.

Também é erro deixar a primeira semana sem dono. Se ninguém coleta problema, define prioridade e decide ajuste, a equipe só acumula irritação.

## O que funciona na prática

Na primeira semana, eu validaria estes blocos todos os dias:

- **Agenda:** duração dos serviços, bloqueios, encaixes e conflitos por profissional.
- **Atendimento:** mensagens de confirmação, reagendamento, cancelamento e lembretes.
- **Equipe:** quem consegue ler o painel sem ajuda e quem ainda está perdido.
- **Financeiro:** fechamento básico, comissão e leitura mínima do dia.
- **Exceções:** atraso, cliente sem resposta, horário aberto em cima da hora.

Esse checklist precisa ser curto e repetível. O objetivo não é burocratizar. É descobrir rápido o que está falhando antes que isso escale.

## Quando isso não resolve

Checklist não resolve equipe sem treinamento nenhum. Também não resolve cadastro feito às pressas. Se serviço, preço, duração e grade foram jogados no sistema sem critério, a primeira semana só vai expor isso com mais força.

Checklist também não substitui suporte. Quando o problema é técnico ou estrutural, precisa de correção de produto ou de configuração.

## Como medir se melhorou

Ao fim da primeira semana, olhe:

- quantidade de ajustes críticos que ainda restam;
- quantas ações dependem do dono em vez da equipe;
- tempo médio para confirmar ou reagendar um horário;
- quantos erros de agenda aconteceram de segunda a sábado.

Se esses números caem rápido, a implantação está respirando.

## Onde o CorteZap entra

O CorteZap tende a aparecer bem nesse teste porque a primeira semana gira em torno de um canal que a equipe já conhece: o WhatsApp. Isso encurta a curva do cliente e ajuda a separar o que é ajuste operacional do que seria resistência a uma mudança radical de comportamento.

Se a sua barbearia precisa de uma vitrine marketplace como canal principal, o checklist continua valendo, mas o critério de avaliação muda. A primeira semana precisa refletir o seu modelo de aquisição, não o marketing da ferramenta.`,
  },
  {
    slug: "playbook-implantacao-whatsapp-oficial-barbearia",
    folder: "guias",
    frontmatter: {
      title: "Playbook de Implantação do WhatsApp Oficial na Barbearia",
      description:
        "Um playbook para implantar WhatsApp oficial na barbearia sem travar atendimento, agenda e mensagens da equipe.",
      excerpt:
        "Guia para implantar o WhatsApp oficial na barbearia com menos atrito técnico e mais clareza sobre processo, equipe e agenda.",
      primaryKeyword: "implantação whatsapp oficial barbearia",
      keywords: [
        "implantação whatsapp oficial barbearia",
        "api oficial meta barbearia",
        "whatsapp oficial para barbearia",
        "implantar whatsapp business api barbearia",
        "configurar whatsapp oficial agenda",
        "playbook whatsapp barbearia",
      ],
      searchIntent: "commercial",
      funnelStage: "consideration",
      cluster: "autoridade",
      clusterLabel: "Guias e Autoridade",
      hub: "/blog/guias-sistema-barbearia",
      publishedAt: "2026-03-08",
      updatedAt: "2026-03-08",
      reviewedAt: "2026-03-08",
      readingTime: 7,
      ctaTitle: "Implantar WhatsApp oficial com menos risco operacional",
      ctaBody:
        "Se a sua barbearia quer sair do improviso sem brincar com o número principal, o CorteZap pode ser configurado em um fluxo controlado e validado com a agenda real.",
      author: defaultAuthor,
      reviewer: defaultReviewer,
      tags: [
        "WhatsApp oficial",
        "API oficial",
        "implantação",
        "barbearia",
        "processo",
      ],
      faq: [
        {
          question: "WhatsApp oficial exige mudança grande na rotina?",
          answer:
            "A mudança maior não é técnica, é de processo. O canal continua sendo o mesmo para o cliente, mas a barbearia precisa definir regras claras de agenda, confirmação e exceção.",
        },
        {
          question: "Vale implantar sem revisar atendimento?",
          answer:
            "Não. Implantar API oficial em processo ruim só deixa a bagunça mais rápida. Primeiro ajuste o fluxo, depois automatize.",
        },
        {
          question: "O cliente percebe diferença?",
          answer:
            "Ele percebe quando a conversa fica mais clara, rápida e consistente. O ideal é que a tecnologia suma e a experiência melhore.",
        },
      ],
      internalLinks: [
        "/blog/whatsapp/como-api-oficial-whatsapp-barbearia",
        "/blog/whatsapp/como-evitar-banimento-whatsapp-barbearia",
        "/blog/guias/guia-completo-whatsapp-barbearia",
      ],
    },
    body: `Implantar WhatsApp oficial na barbearia não é só trocar uma peça técnica. É reorganizar o canal que mais pesa na entrada de pedidos, confirmações, dúvidas e reagendamentos. Quando isso é tratado como setup rápido, a implantação vira fonte nova de confusão.

O playbook bom começa no processo e só depois vai para a ferramenta.

## O problema real

O canal de WhatsApp costuma concentrar demanda demais para ser tratado como detalhe. É por ali que cliente pergunta preço, pede encaixe, tenta remarcar e cobra retorno. Se a implantação do canal oficial não respeita essa centralidade, o projeto nasce torto.

O problema real não é “ligar a API”. É garantir que a conversa vire agenda confiável e que a equipe consiga operar exceções sem improvisar a cada caso.

## Erro comum

O erro mais comum é implantar o WhatsApp oficial antes de definir serviço, duração, disponibilidade por barbeiro e mensagem de confirmação. Quando isso acontece, a tecnologia entra em cima de um processo ainda solto.

Outro erro frequente é ignorar quem vai responder o que. Se todo mundo pode tudo, o canal continua caótico mesmo com infraestrutura melhor.

## O que funciona na prática

O playbook mais seguro costuma seguir esta ordem:

- **Mapear os fluxos críticos:** agendar, reagendar, cancelar, confirmar e encaminhar para atendimento humano.
- **Definir regras de agenda:** duração, bloqueio, encaixe, intervalo e prioridade entre barbeiros.
- **Preparar mensagens-base:** boas-vindas, confirmação, lembrete, retorno e transferência para humano.
- **Treinar a equipe em cenário real:** cliente novo, cliente atrasado, cliente insistindo em horário já ocupado.
- **Subir em produção com monitoramento curto:** olhar os primeiros dias com atenção e corrigir cedo.

Com esse roteiro, a implantação deixa de ser uma aposta e vira processo controlado.

## Quando isso não resolve

Se a barbearia ainda quer manter tudo no improviso, o WhatsApp oficial não vai salvar. Também não resolve quando o problema principal está em baixa demanda e não em desorganização operacional.

Ferramenta forte em cima de rotina frouxa só escala ruído.

## Como medir se melhorou

Depois da implantação, vale acompanhar:

- tempo para o cliente sair da primeira mensagem até a confirmação;
- quantidade de respostas manuais que continuaram obrigatórias;
- conflitos de horário ou exceções não tratadas no fluxo;
- percepção da equipe sobre clareza do atendimento.

Se esses pontos melhoram, a implantação cumpriu o papel.

## Onde o CorteZap entra

O CorteZap entra bem quando a barbearia quer usar a base oficial do WhatsApp para organizar o que já acontece no canal, não para empilhar mais uma ferramenta em paralelo. O ganho vem da conexão entre atendimento, agenda e painel.

Se o seu modelo comercial depende principalmente de app, marketplace ou central telefônica, o playbook continua útil, mas talvez o WhatsApp oficial não seja a primeira prioridade. A decisão certa depende do canal que hoje mais trava a operação.`,
  },
];

const frontmatterOrder = [
  "title",
  "description",
  "excerpt",
  "primaryKeyword",
  "keywords",
  "searchIntent",
  "funnelStage",
  "cluster",
  "clusterLabel",
  "hub",
  "publishedAt",
  "updatedAt",
  "reviewedAt",
  "readingTime",
  "ctaTitle",
  "ctaBody",
  "author",
  "reviewer",
  "tags",
  "faq",
  "internalLinks",
];

function escapeString(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Arquivo sem frontmatter válido.");
  }

  const frontmatterText = match[1];
  const body = match[2].trim();
  const lines = frontmatterText.split("\n");
  const data = {};

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!fieldMatch) {
      index += 1;
      continue;
    }

    const [, key, value] = fieldMatch;

    if (value === "") {
      if (key === "faq") {
        const items = [];
        index += 1;
        while (index < lines.length && lines[index].startsWith("  - question:")) {
          const question = unquote(lines[index].replace("  - question:", ""));
          index += 1;
          let answer = "";
          if (index < lines.length && lines[index].startsWith("    answer:")) {
            answer = unquote(lines[index].replace("    answer:", ""));
            index += 1;
          }
          items.push({ question, answer });
        }
        data[key] = items;
        continue;
      }

      const items = [];
      index += 1;
      while (index < lines.length && lines[index].startsWith("  - ")) {
        items.push(unquote(lines[index].replace("  - ", "")));
        index += 1;
      }
      data[key] = items;
      continue;
    }

    if (key === "readingTime") {
      data[key] = Number(value.trim());
    } else {
      data[key] = unquote(value);
    }

    index += 1;
  }

  return { data, body };
}

function stringifyFrontmatter(data) {
  const lines = ["---"];

  for (const key of frontmatterOrder) {
    const value = data[key];
    if (value === undefined) continue;

    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      if (key === "faq") {
        value.forEach((item) => {
          lines.push(`  - question: "${escapeString(item.question)}"`);
          lines.push(`    answer: "${escapeString(item.answer)}"`);
        });
      } else {
        value.forEach((item) => {
          lines.push(`  - "${escapeString(item)}"`);
        });
      }
      continue;
    }

    if (typeof value === "number") {
      lines.push(`${key}: ${value}`);
      continue;
    }

    lines.push(`${key}: "${escapeString(value)}"`);
  }

  lines.push("---");
  return lines.join("\n");
}

async function listMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function getSlugFromFile(filePath) {
  return path.basename(filePath, ".md");
}

function getFirstParagraph(body) {
  return body.split(/\n{2,}/).find((chunk) => !chunk.startsWith("##"))?.replace(/\n/g, " ").trim() ?? "";
}

async function main() {
  const allFiles = await listMarkdownFiles(blogRoot);
  const sourceFiles = allFiles.filter((filePath) => !path.basename(filePath).startsWith("."));

  const parsedPosts = sourceFiles.map((filePath) => {
    const slug = getSlugFromFile(filePath);
    return { filePath, slug };
  });

  const slugToTarget = new Map();

  for (const entry of parsedPosts) {
    const raw = await fs.readFile(entry.filePath, "utf8");
    const { data } = parseFrontmatter(raw);
    const meta = clusterMeta[data.cluster];
    if (!meta) {
      throw new Error(`Cluster desconhecido em ${entry.filePath}: ${data.cluster}`);
    }
    slugToTarget.set(entry.slug, `/blog/${meta.folder}/${entry.slug}`);
  }

  for (const extra of extraPosts) {
    slugToTarget.set(extra.slug, `/blog/${extra.folder}/${extra.slug}`);
  }

  const targetFiles = new Set();

  for (const entry of parsedPosts) {
    const raw = await fs.readFile(entry.filePath, "utf8");
    const { data, body } = parseFrontmatter(raw);
    const meta = clusterMeta[data.cluster];
    const folderPath = path.join(blogRoot, meta.folder);
    const targetPath = path.join(folderPath, `${entry.slug}.md`);

    const internalLinks = (data.internalLinks ?? []).map((link) => {
      const match = link.match(/^\/blog\/([^/]+)$/);
      if (!match) return link;
      return slugToTarget.get(match[1]) ?? link;
    });

    const normalized = {
      ...data,
      excerpt: data.excerpt ?? data.description ?? getFirstParagraph(body),
      hub: meta.hubPath,
      author: data.author ?? defaultAuthor,
      reviewer: data.reviewer ?? defaultReviewer,
      reviewedAt: data.reviewedAt ?? data.updatedAt,
      internalLinks,
    };

    await fs.mkdir(folderPath, { recursive: true });
    await fs.writeFile(
      targetPath,
      `${stringifyFrontmatter(normalized)}\n\n${body.trim()}\n`,
      "utf8"
    );
    targetFiles.add(targetPath);
  }

  for (const extra of extraPosts) {
    const folderPath = path.join(blogRoot, extra.folder);
    const targetPath = path.join(folderPath, `${extra.slug}.md`);
    await fs.mkdir(folderPath, { recursive: true });
    await fs.writeFile(
      targetPath,
      `${stringifyFrontmatter(extra.frontmatter)}\n\n${extra.body.trim()}\n`,
      "utf8"
    );
    targetFiles.add(targetPath);
  }

  for (const filePath of sourceFiles) {
    if (!targetFiles.has(filePath)) {
      await fs.rm(filePath, { force: true });
    }
  }

  const finalFiles = Array.from(targetFiles).sort();
  const inventory = [
    "# Inventário do blog CorteZap",
    "",
    `Total de posts materializados: ${finalFiles.length}`,
    "",
  ];

  for (const [clusterId, meta] of Object.entries(clusterMeta)) {
    const clusterFiles = finalFiles.filter((filePath) =>
      filePath.includes(`${path.sep}${meta.folder}${path.sep}`)
    );
    inventory.push(`## ${meta.folder}`);
    inventory.push("");
    inventory.push(`Cluster original: \`${clusterId}\``);
    inventory.push(`Hub: \`${meta.hubPath}\``);
    inventory.push("");
    clusterFiles.forEach((filePath) => {
      const relative = path.relative(projectRoot, filePath);
      const slug = path.basename(filePath, ".md");
      inventory.push(`- \`${relative}\` -> \`/blog/${meta.folder}/${slug}\``);
    });
    inventory.push("");
  }

  await fs.mkdir(docsRoot, { recursive: true });
  await fs.writeFile(
    path.join(docsRoot, "blog-inventory.md"),
    `${inventory.join("\n")}\n`,
    "utf8"
  );

  console.log(`Normalized ${finalFiles.length} posts.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
