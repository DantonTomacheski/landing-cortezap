# CLAUDE.md — landing-cortezap

[STACK] Astro 5 + Tailwind v4 + @astrojs/sitemap + @astrojs/vercel.
[FEATURES] Páginas em src/pages, seções em src/components, SEO base em src/layouts/BaseLayout.astro e src/data/seo.ts.
[PRIORIDADE] SEO técnico + clareza de copy + conversão; preservar semântica e performance.
[HEURÍSTICA] Menor diff; manter padrão visual/editorial do projeto; sem invenção de arquitetura.
[ESCOPO] Resolver pedido sem expandir para redesign/refactor amplo.
[CONVENÇÕES] pt-BR; reaproveitar layout/tokens globais; componentes .astro coesos.
[EVITAR] Introduzir SPA/React sem necessidade; degradar heading hierarchy/metadados indexáveis.
[COMANDOS] npm run dev | npm run build | npm run preview
[PRONTO] Build ok + checagem de páginas/metadata/canonical/OG da área alterada.
[RESPOSTA] Alteração -> arquivos -> validação -> impacto em SEO/perf.
