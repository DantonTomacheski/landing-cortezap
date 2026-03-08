# Arquitetura editorial do blog CorteZap

## Estrutura final

O blog foi organizado em hubs e clusters, com arquivos reais em `src/content/blog/`:

- `comercial/` -> money pages
- `comparativos/` -> comparativos e alternativas
- `whatsapp/` -> operação, automação e API oficial
- `gestao/` -> equipe, agenda, caixa, comissão e processo
- `retencao/` -> recorrência, no-show, agenda vazia e crescimento
- `guias/` -> implantação, avaliação, ROI, onboarding e autoridade
- `seo-local/` -> páginas locais por cidade

## Distribuição de volume

- 30 posts comerciais
- 30 comparativos
- 30 posts de operação no WhatsApp
- 30 posts de gestão operacional
- 30 posts de retenção e crescimento
- 30 posts de autoridade e implementação
- 20 posts de SEO local

Total: 200 posts

## Hubs

| Hub | URL | Papel |
| --- | --- | --- |
| Páginas comerciais | `/blog/paginas-comerciais-barbearia` | centraliza buscas de sistema, software, preço e decisão |
| Comparativos | `/blog/comparativos-software-barbearia` | organiza buscas de marca, alternativa e troca de plataforma |
| WhatsApp | `/blog/whatsapp-barbearia` | consolida atendimento, automação, API oficial e agendamento |
| Gestão | `/blog/gestao-barbearia` | agrupa rotina operacional, agenda, equipe e fechamento |
| Retenção | `/blog/retencao-barbearia` | cobre recorrência, no-show, campanhas e agenda saudável |
| Guias | `/blog/guias-sistema-barbearia` | dá profundidade para avaliação, implementação e ROI |
| SEO local | `/blog/seo-local-barbearia` | concentra conteúdo local com intenção comercial |

## Regras editoriais adotadas

Cada post precisa ter:

1. intenção principal única;
2. descrição e excerpt próprios;
3. hub definido;
4. links internos sugeridos;
5. bloco de FAQ enxuto;
6. autor, revisão e data de revisão visíveis.

## Roteiro de publicação

### O que deve ir primeiro

- 30 money pages
- comparativos com maior busca de marca
- posts de WhatsApp com dor operacional clara

### O que entra depois

- gestão operacional de baixa concorrência
- retenção e recorrência
- SEO local com reforço manual

### O que exige mais capricho humano

- comparativos `CorteZap vs X`
- alternativas `ao concorrente`
- páginas locais por cidade
- páginas de preço e ROI

## Arquivos de apoio

- Auditoria: `docs/blog-audit.md`
- Inventário completo dos 200 slugs: `docs/blog-inventory.md`
- Taxonomia do site: `src/data/blogTaxonomy.ts`
- Collection do Astro: `src/content.config.ts`
