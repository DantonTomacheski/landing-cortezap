# PRD: Páginas Pós-Checkout + Revisão de Conversão da Landing Page

## Introduction

Duas frentes de trabalho complementares:

1. **Páginas de checkout:** Criar página de sucesso (pós-pagamento) e página de recuperação (quando o cliente desiste do checkout). A página de sucesso direciona o cliente ao WhatsApp de suporte com próximos passos claros. A página de recuperação usa copy persuasivo para reconverter o visitante.

2. **Revisão de conversão da landing page:** Otimizar todos os componentes da `index.astro` (Hero, SocialProof, SeoIntentSection, FeaturesGrid, HowItWorks, ProductRealitySection, DashboardPreview, PricingSection, FAQ, FinalCTA) com foco em conversão, UX mobile-first e hierarquia de informação orientada a venda.

Ambas as frentes devem usar a skill `interface-design` para todas as decisões de UI/UX.

---

## Goals

- Criar `/sucesso` — página pós-pagamento com confirmação, próximos passos e CTA para WhatsApp de onboarding
- Criar `/voltar` — página de recuperação de checkout abandonado com copy persuasivo, prova social, FAQ rápido e CTA de retorno ao checkout
- Revisar cada seção da landing page para maximizar conversão mobile-first
- Manter performance (Astro SSG, sem JS desnecessário)
- Manter SEO existente intacto ou melhorar

---

## User Stories

### US-001: Criar página de sucesso pós-pagamento (`/sucesso`)

**Description:** Como cliente que acabou de pagar, quero ver uma confirmação clara e saber exatamente os próximos passos para começar a usar o CorteZap.

**Contexto técnico:** Criar `src/pages/sucesso.astro`. Usa `BaseLayout.astro`, `Navbar.astro` e `Footer.astro`. A página é estática (SSG) — não recebe dados do pagamento via URL params.

**Acceptance Criteria:**
- [ ] Criar `src/pages/sucesso.astro`
- [ ] Exibir confirmação visual clara (ícone de sucesso, headline celebrativa)
- [ ] Mostrar bloco de "Próximos passos" com 3 etapas numeradas:
  1. "Acesse o painel" (com link placeholder para o painel)
  2. "Conecte seu WhatsApp" (instrução breve sobre QR code)
  3. "Configure seus serviços e horários"
- [ ] CTA principal: botão para WhatsApp de suporte com mensagem pré-preenchida ("Olá! Acabei de assinar o CorteZap e preciso de ajuda para configurar")
- [ ] CTA secundário: link para o painel (placeholder URL)
- [ ] Design mobile-first, responsivo
- [ ] Usar skill `interface-design` para validar layout e hierarquia
- [ ] `noindex` na meta (não deve ser indexada por buscadores)
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-002: Criar página de recuperação de checkout abandonado (`/voltar`)

**Description:** Como visitante que desistiu do pagamento, quero uma página que me lembre do valor do CorteZap e me dê um caminho fácil para voltar ao checkout.

**Contexto técnico:** Criar `src/pages/voltar.astro`. Usa `BaseLayout.astro`, `Navbar.astro` e `Footer.astro`. Página estática focada em reconversão.

**Acceptance Criteria:**
- [ ] Criar `src/pages/voltar.astro`
- [ ] Headline empática (não agressiva) — ex: "Sem pressa — a gente te espera"
- [ ] Bloco de objeções resolvidas (3-4 itens curtos):
  - "Teste 7 dias sem compromisso"
  - "Cancele quando quiser"
  - "Suporte humano no WhatsApp"
  - "Setup em menos de 10 minutos"
- [ ] Mini bloco de prova social (1-2 métricas ou depoimento curto)
- [ ] FAQ rápido (3 perguntas mais comuns sobre pagamento/confiança)
- [ ] CTA principal: botão "Voltar ao checkout" apontando para `ABACATEPAY_LINK_DEFAULT` (de `seo.ts`)
- [ ] CTA secundário: link para WhatsApp de suporte ("Prefere tirar dúvidas antes?")
- [ ] Design mobile-first, responsivo
- [ ] Usar skill `interface-design` para validar layout e hierarquia
- [ ] `noindex` na meta (não deve ser indexada por buscadores)
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-003: Revisar HeroSection para conversão

**Description:** Como visitante na primeira dobra, quero entender imediatamente o que o CorteZap faz e sentir confiança para clicar no CTA.

**Contexto técnico:** `src/components/HeroSection.astro` (~144 linhas). Contém headline, subheadline, CTA principal ("Começar agora"), CTA secundário ("Veja como funciona") e mockup de WhatsApp.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar e propor melhorias no Hero
- [ ] Revisar hierarquia: headline → subheadline → CTA devem guiar o olho em mobile
- [ ] Avaliar se o badge "7 dias grátis" está posicionado para máximo impacto
- [ ] Verificar contraste e legibilidade do CTA em mobile
- [ ] Garantir que o mockup do WhatsApp não empurra o CTA para fora da viewport em mobile
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser (mobile e desktop)

---

### US-004: Revisar SocialProof para conversão

**Description:** Como visitante, quero ver números de credibilidade que me convençam que o produto é real e confiável.

**Contexto técnico:** `src/components/SocialProof.astro` (~22 linhas). Exibe 4 métricas: 5.000+ agendamentos, 1.200+ clientes, 50.000+ mensagens, 99.8% uptime.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar posicionamento e impacto visual
- [ ] Avaliar se os números atuais são convincentes e bem formatados em mobile
- [ ] Avaliar se a seção precisa de contexto adicional (ex: "em menos de X meses")
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-005: Revisar SeoIntentSection para conversão

**Description:** Como visitante, quero entender rapidamente os pilares do produto sem parecer que estou lendo texto de SEO.

**Contexto técnico:** `src/components/SeoIntentSection.astro` (~57 linhas). 3 pilares: agendamento WhatsApp, painel do barbeiro, sistema escalável.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar se a seção agrega valor de conversão ou é apenas SEO filler
- [ ] Propor melhorias de copy e layout para que funcione como seção de valor real
- [ ] Avaliar se deve ser movida de posição na hierarquia da página
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-006: Revisar FeaturesGrid para conversão

**Description:** Como visitante, quero entender rapidamente as funcionalidades do CorteZap com destaque para o que diferencia o produto.

**Contexto técnico:** `src/components/FeaturesGrid.astro` (~65 linhas). Grid de 6 features com FeatureCard.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar layout, copy e hierarquia das features
- [ ] Avaliar se as 6 features estão na ordem de importância certa para conversão
- [ ] Verificar responsividade do grid em mobile (deve ser 1 coluna legível)
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-007: Revisar HowItWorks para conversão

**Description:** Como visitante, quero entender em 3 passos simples como o CorteZap funciona antes de decidir assinar.

**Contexto técnico:** `src/components/HowItWorks.astro` (~60 linhas). 3 passos: mensagem → agendamento IA → painel.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar clareza e impacto visual dos 3 passos
- [ ] Verificar se a progressão visual (1→2→3) funciona em mobile
- [ ] Avaliar se o copy de cada passo é claro e orientado ao benefício
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-008: Revisar ProductRealitySection para conversão

**Description:** Como visitante, quero ver o que o produto realmente faz, com evidência concreta.

**Contexto técnico:** `src/components/ProductRealitySection.astro` (~61 linhas). Grid de 6 módulos mostrando capacidades reais do produto.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar se a seção gera confiança e diferencia o produto
- [ ] Avaliar se há sobreposição com FeaturesGrid e se devem ser fundidas ou diferenciadas
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-009: Revisar DashboardPreview para conversão

**Description:** Como visitante, quero ver como o painel realmente é para ter confiança de que o produto é profissional.

**Contexto técnico:** `src/components/DashboardPreview.astro` (~99 linhas). Mockup de browser com cards de estatísticas e tabela de agenda.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar se o mockup gera confiança em mobile
- [ ] Verificar se o mockup é legível em telas pequenas ou se precisa de approach diferente em mobile
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-010: Revisar PricingSection para conversão

**Description:** Como visitante na seção de preços, quero entender rapidamente qual plano é ideal para mim e sentir segurança para assinar.

**Contexto técnico:** `src/components/PricingSection.astro` (~182 linhas) + `PricingCard.astro` (~84 linhas). 3 planos + toggle mensal/semestral/anual + plano personalizado.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar hierarquia de preços e destaque do plano recomendado
- [ ] Avaliar se o toggle de billing é claro e funcional em mobile
- [ ] Avaliar se o texto das features dos planos é diferenciador ou repetitivo
- [ ] Verificar se "Assinar agora" como CTA é o melhor texto para conversão
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-011: Revisar FAQ para conversão

**Description:** Como visitante com dúvidas, quero encontrar respostas rápidas que eliminem objeções de compra.

**Contexto técnico:** `src/components/FAQ.astro` (~45 linhas). Accordion com perguntas de `HOME_FAQ_ENTRIES` em `seo.ts`.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar se as perguntas atuais atacam as objeções certas
- [ ] Avaliar se a ordem das perguntas é otimizada (objeções de compra primeiro)
- [ ] Verificar usabilidade do accordion em mobile
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-012: Revisar FinalCTA para conversão

**Description:** Como visitante no final da página, quero um último empurrão claro e convincente para assinar.

**Contexto técnico:** `src/components/FinalCTA.astro` (~45 linhas). Banner com headline, CTA "Assinar agora" e texto de garantia.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar impacto e urgência do CTA final
- [ ] Avaliar se o copy e visual criam senso de urgência sem ser agressivo
- [ ] Aplicar melhorias aprovadas pela skill
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

### US-013: Revisar ordem dos componentes na index

**Description:** Como desenvolvedor, preciso que a ordem das seções na index maximize o funil de conversão.

**Contexto técnico:** `src/pages/index.astro`. Ordem atual: Hero → SocialProof → SeoIntentSection → FeaturesGrid → HowItWorks → ProductRealitySection → DashboardPreview → PricingSection → FAQ → FinalCTA.

**Acceptance Criteria:**
- [ ] Usar skill `interface-design` para avaliar a ordem das seções como funil de conversão
- [ ] Propor reordenação se necessário (ex: HowItWorks pode vir antes de Features para contexto)
- [ ] Avaliar se há seções redundantes que podem ser fundidas
- [ ] Aplicar reordenação aprovada
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser

---

## Functional Requirements

- **FR-1:** Página `/sucesso` exibe confirmação de compra, 3 próximos passos e CTA para WhatsApp de suporte
- **FR-2:** Página `/voltar` exibe copy de recuperação, objeções resolvidas, prova social compacta, FAQ rápido e CTA para retornar ao checkout AbacatePay
- **FR-3:** Ambas as páginas usam `BaseLayout`, `Navbar` e `Footer` existentes
- **FR-4:** Ambas as páginas são `noindex` (não indexáveis por buscadores)
- **FR-5:** Todos os links AbacatePay usam constantes de `src/data/seo.ts`
- **FR-6:** Todas as melhorias de conversão são mobile-first
- **FR-7:** Nenhuma seção da landing usa JS client-side desnecessário (manter SSG performance)
- **FR-8:** Revisão de cada seção da landing usa skill `interface-design` para decisões de UI/UX

---

## Non-Goals

- Não implementar webhooks ou integração server-side com AbacatePay
- Não capturar dados do pagamento na URL (a página de sucesso é genérica)
- Não criar sistema de tracking/analytics de conversão (além do Google Analytics existente)
- Não alterar páginas secundárias (agendamento, painel, sistema)
- Não alterar Footer (exceto se a skill `interface-design` identificar problema grave)
- Não criar animações pesadas ou adicionar frameworks JS

---

## Design Considerations

- **Mobile-first:** Todo design começa pelo mobile e escala para desktop
- **Skill `interface-design`:** Usar em TODAS as decisões de layout, copy de botão, hierarquia e posicionamento
- **Padrão visual existente:** Manter tokens de cor (brand-500, bg-[#050505], etc.), Tailwind v4, glassmorphism, gradientes existentes
- **Ícones:** SVGs inline, mesmo estilo do projeto (stroke-based, 24x24)
- **Copy:** pt-BR, direto, sem jargão técnico, orientado a benefício

---

## Technical Considerations

- **Astro 5 SSG:** Páginas novas são estáticas, sem server-side rendering
- **Novo import em seo.ts:** Páginas de sucesso e retorno podem precisar de constantes adicionais (ex: `WHATSAPP_ONBOARDING_MESSAGE`)
- **BaseLayout:** Suporta `noindex` via prop? Se não, adicionar suporte
- **Fonts/assets:** Não adicionar novos assets pesados; reutilizar o que existe
- **Build check:** `npm run build` após cada US antes de considerar pronto

---

## Success Metrics

- Página `/sucesso` carrega com confirmação clara e CTA para WhatsApp visível em 1 scroll em mobile
- Página `/voltar` oferece caminho de volta ao checkout em 1 click, com objeções resolvidas acima do fold em mobile
- Toda a landing page revisada mantém ou melhora o tempo de build atual
- Nenhuma seção contém texto "WhatsApp" em CTAs de aquisição (mantido apenas em suporte/contato)
- Build sem erros (`npm run build`)

---

## Open Questions

- O BaseLayout suporta `noindex` via prop ou precisamos adicionar essa funcionalidade?
- Qual a URL real do painel do cliente para o bloco de "Próximos passos" na página de sucesso?
- O texto do FinalCTA deve mencionar alguma oferta específica (ex: "7 dias grátis") ou o AbacatePay já lida com trial?
- Há depoimentos reais de clientes para usar na página de recuperação e na prova social?
