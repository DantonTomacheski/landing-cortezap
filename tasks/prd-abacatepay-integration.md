# PRD: Integração AbacatePay na Landing Page

## Introduction

Substituir os botões de CTA de "Teste grátis" que direcionam ao WhatsApp pelo gateway de pagamento AbacatePay. O objetivo é converter visitantes diretamente para assinatura paga, sem necessitar de interação manual via WhatsApp para esse fluxo de compra.

Os links WhatsApp de suporte, contato e demonstração **permanecem intactos**. Apenas os CTAs de aquisição (pricing, hero, navbar, final CTA) mudam para AbacatePay.

---

## Goals

- Substituir 7 CTAs de aquisição para apontar a links fixos do AbacatePay
- Cada plano (Básico, Profissional, Empresarial) deve ter seu próprio link AbacatePay
- Hero, Navbar e FinalCTA usam um link AbacatePay genérico (ou o do plano padrão)
- Atualizar textos e ícones dos botões para não referenciar WhatsApp onde há mudança
- Não remover links WhatsApp de: suporte, contato, "Falar com consultor", páginas secundárias

---

## User Stories

### US-001: Centralizar links AbacatePay em `src/data/seo.ts`

**Description:** Como desenvolvedor, preciso de constantes centralizadas para os links AbacatePay para que qualquer mudança de URL seja feita em um só lugar.

**Acceptance Criteria:**
- [ ] Adicionar ao `src/data/seo.ts` as constantes:
  ```typescript
  export const ABACATEPAY_LINK_BASICO = "https://pay.abacatepay.com/...";
  export const ABACATEPAY_LINK_PROFISSIONAL = "https://pay.abacatepay.com/...";
  export const ABACATEPAY_LINK_EMPRESARIAL = "https://pay.abacatepay.com/...";
  export const ABACATEPAY_LINK_DEFAULT = ABACATEPAY_LINK_PROFISSIONAL; // link genérico para hero/navbar/finalCTA
  ```
  > **Nota:** Os URLs reais devem ser inseridos pelo dev antes do merge. Use placeholders `"ABACATEPAY_URL_BASICO"` etc. enquanto os links não estão definidos.
- [ ] Typecheck passa (`npm run build`)

---

### US-002: Atualizar cards de pricing (Básico, Profissional, Empresarial)

**Description:** Como usuário visitando a seção de preços, quero clicar em "Assinar agora" e ser levado diretamente para o checkout do meu plano escolhido no AbacatePay.

**Contexto técnico:** Arquivo `src/components/PricingSection.astro`. Os planos têm `ctaHref` e `cta` definidos no array de planos (linhas 5–68).

**Acceptance Criteria:**
- [ ] `ctaHref` de cada plano aponta para a constante AbacatePay correspondente:
  - Plano Básico → `ABACATEPAY_LINK_BASICO`
  - Plano Profissional → `ABACATEPAY_LINK_PROFISSIONAL`
  - Plano Empresarial → `ABACATEPAY_LINK_EMPRESARIAL`
- [ ] Texto do CTA muda de `'Comece grátis'` para `'Assinar agora'` nos 3 planos
- [ ] Links abrem em `target="_blank"` com `rel="noopener noreferrer"`
- [ ] Ícone WhatsApp removido dos botões dos cards (se existir)
- [ ] Botão "Falar com consultor" do plano personalizado **não é alterado** (continua WhatsApp)
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser (dev-browser skill)

---

### US-003: Atualizar botão Hero Section

**Description:** Como visitante na primeira dobra da homepage, quero clicar no CTA principal e ser levado ao checkout AbacatePay.

**Contexto técnico:** Arquivo `src/components/HeroSection.astro`. Botão "Teste grátis no WhatsApp" (linha ~49) usa `whatsappLink`.

**Acceptance Criteria:**
- [ ] `href` muda de `whatsappLink` para `ABACATEPAY_LINK_DEFAULT`
- [ ] Texto do botão muda de `"Teste grátis no WhatsApp"` para `"Começar agora"` (ou similar sem mencionar WhatsApp)
- [ ] Ícone WhatsApp no botão é substituído por ícone neutro (ex: seta →) ou removido
- [ ] Badge `"7 dias grátis em qualquer plano"` pode permanecer se ainda válido, ou ser removido se não se aplicar ao checkout AbacatePay
- [ ] Link abre em `target="_blank"` com `rel="noopener noreferrer"`
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser (dev-browser skill)

---

### US-004: Atualizar botão Navbar (desktop e mobile)

**Description:** Como visitante em qualquer página, quero que o botão fixo no topo me leve ao checkout AbacatePay.

**Contexto técnico:** Arquivo `src/components/Navbar.astro`. Dois botões com `href={whatsappLink}` e texto `"Teste no WhatsApp"` (desktop linha ~44, mobile linha ~84).

**Acceptance Criteria:**
- [ ] Ambos os botões (desktop + mobile) apontam para `ABACATEPAY_LINK_DEFAULT`
- [ ] Texto muda de `"Teste no WhatsApp"` para `"Assinar agora"` (ou `"Começar grátis"`)
- [ ] Links abrem em `target="_blank"` com `rel="noopener noreferrer"`
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser (dev-browser skill)

---

### US-005: Atualizar botão Final CTA

**Description:** Como visitante no fim da homepage, quero que o CTA final me leve ao checkout AbacatePay.

**Contexto técnico:** Arquivo `src/components/FinalCTA.astro`. Botão "Comece grátis pelo WhatsApp" (linha ~37).

**Acceptance Criteria:**
- [ ] `href` muda de `whatsappLink` para `ABACATEPAY_LINK_DEFAULT`
- [ ] Texto muda de `"Comece grátis pelo WhatsApp"` para `"Assinar agora"` (ou similar sem mencionar WhatsApp)
- [ ] Ícone WhatsApp removido e substituído por ícone neutro (ex: seta →) ou removido
- [ ] Link abre em `target="_blank"` com `rel="noopener noreferrer"`
- [ ] Build passa sem erros
- [ ] Verificar visualmente em browser (dev-browser skill)

---

## Functional Requirements

- **FR-1:** Constantes `ABACATEPAY_LINK_BASICO`, `ABACATEPAY_LINK_PROFISSIONAL`, `ABACATEPAY_LINK_EMPRESARIAL` e `ABACATEPAY_LINK_DEFAULT` centralizadas em `src/data/seo.ts`
- **FR-2:** Cards de pricing (3 planos) usam links AbacatePay específicos com texto `"Assinar agora"`
- **FR-3:** Hero, Navbar e FinalCTA usam `ABACATEPAY_LINK_DEFAULT`
- **FR-4:** Textos dos botões alterados não devem mencionar "WhatsApp"
- **FR-5:** Ícones WhatsApp removidos dos botões que foram migrados para AbacatePay
- **FR-6:** Todos os links AbacatePay abrem em nova aba (`target="_blank" rel="noopener noreferrer"`)
- **FR-7:** Links WhatsApp preservados em: botão "Falar com consultor" (plano personalizado), páginas secundárias (`agendamento-whatsapp-barbearia.astro`, `painel-para-barbeiro.astro`, `sistema-para-barbearia.astro`), Footer

---

## Non-Goals

- Não criar páginas intermediárias ou de sucesso/confirmação no site (AbacatePay cuida do checkout)
- Não implementar webhooks ou integração server-side com a API AbacatePay
- Não alterar o visual/design dos botões além de texto e ícone
- Não alterar páginas secundárias (agendamento, painel, sistema) — mantêm fluxo WhatsApp
- Não alterar o Footer ou links de contato

---

## Technical Considerations

- **Astro estático (SSG):** sem chamadas de API em runtime; links são hardcoded nas constantes
- **Ponto único de mudança:** todas as URLs ficam em `src/data/seo.ts` — facilita troca futura
- **Links AbacatePay reais** precisam ser inseridos antes do deploy; usar placeholders durante desenvolvimento
- **Build check:** `npm run build` no diretório `landing-cortezap/` antes de considerar pronto
- **Ícones:** o projeto usa SVGs inline; substituir o SVG do WhatsApp por `<svg>` de seta ou similar do mesmo estilo visual do projeto

---

## Mapa de Alterações por Arquivo

| Arquivo | O que muda |
|---------|------------|
| `src/data/seo.ts` | + 4 constantes AbacatePay |
| `src/components/PricingSection.astro` | `ctaHref` e `cta` dos 3 planos |
| `src/components/HeroSection.astro` | href, texto e ícone do botão principal |
| `src/components/Navbar.astro` | href e texto (desktop + mobile) |
| `src/components/FinalCTA.astro` | href, texto e ícone |

**Arquivos que NÃO mudam:** `Footer.astro`, `agendamento-whatsapp-barbearia.astro`, `painel-para-barbeiro.astro`, `sistema-para-barbearia.astro`, `PricingSection.astro` (bloco plano personalizado)

---

## Success Metrics

- Clicar em qualquer CTA de aquisição direciona ao checkout AbacatePay (não ao WhatsApp)
- "Falar com consultor" e links de suporte continuam abrindo WhatsApp
- `npm run build` passa sem erros de TypeScript
- Nenhum botão migrado contém texto "WhatsApp" ou ícone WhatsApp

---

## Open Questions

- Qual o link AbacatePay para cada plano? (Básico, Profissional, Empresarial) — dev deve inserir antes do deploy
- O badge "7 dias grátis em qualquer plano" no Hero ainda é válido com AbacatePay? (verificar com produto)
- O texto do CTA genérico (Hero/Navbar/FinalCTA) deve ser `"Assinar agora"` ou `"Começar agora"`? (decisão editorial)
