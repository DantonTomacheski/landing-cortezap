# Auditoria do blog CorteZap

Data de referência: 8 de março de 2026

## Fonte de verdade

O arquivo `src/data/blog.ts` deixou de ser tratado como fonte editorial final.

A fonte atual do blog passa a ser:

- `src/content/blog/`
- `src/content.config.ts`
- `src/data/blogTaxonomy.ts`
- `docs/blog-inventory.md`

## Critério editorial usado

Esta auditoria foi guiada por três princípios:

1. intenção de busca clara;
2. valor editorial distinto por URL;
3. risco controlado de conteúdo escalado, doorway e canibalização.

Referências oficiais usadas como base:

- [Google Search Central: spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google Search Central: creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

## Veredito sobre o lote anterior

O lote derivado do motor antigo tinha três problemas centrais:

1. estrutura repetida demais para consultas diferentes;
2. excesso de páginas locais e comparativas com risco de parecer template farm;
3. falta de materialização editorial revisável por arquivo.

Ele serviu como rascunho de cobertura semântica. Não servia como lote confiável de publicação sem auditoria.

## Matriz por cluster

| Cluster atual | Volume final | Valor comercial | Risco atual | Ação | Observação |
| --- | ---: | --- | --- | --- | --- |
| `money-pages` | 30 | alto | médio | reescrever | continua sendo o coração do blog; precisa revisão manual das páginas mais valiosas |
| `comparativos` | 30 | alto | alto | reescrever | comparativo sem benchmark honesto vira propaganda disfarçada |
| `operacao-whatsapp` | 30 | alto | médio | manter | bom cluster para capturar busca com dor operacional real |
| `operacao-gestao` | 30 | médio-alto | médio | manter | resolve dores concretas e tende a ter menos risco de thin content |
| `retencao` | 30 | médio-alto | médio | manter | bom para recorrência e no-show, desde que mantenha exemplos práticos |
| `autoridade` | 30 | médio | baixo | manter | ajuda lastro semântico e implantação; cortei páginas genéricas demais |
| `seo-local` | 20 | médio | alto | reescrever | manter só cidades relevantes e sempre com contexto local real |

## Decisões tomadas

### Mantidos com prioridade alta

- money pages
- operação via WhatsApp
- gestão operacional
- comparativos com intenção forte

### Reescritos ou endurecidos

- cluster comercial
- cluster de comparativos
- cluster local

### Cortados

Para trazer o lote para 200 posts fortes e reduzir sobra genérica, três páginas de baixa prioridade foram removidas do cluster de autoridade:

- `guias/futuro-tecnologia-barbearias.md`
- `guias/como-montar-equipe-barbearia-sistema.md`
- `guias/playbook-retencao-barbearias.md`

O motivo foi simples: intenção menos clara, sobreposição com clusters melhores e pouco ganho editorial para o momento.

## Riscos restantes

### Comparativos

Os comparativos continuam sendo o ponto de maior sensibilidade. Eles só devem ser publicados com revisão manual final dos principais players.

### SEO local

As 20 páginas locais existem, mas continuam exigindo revisão humana para reforço de contexto da praça, linguagem regional e oportunidade comercial real.

### Canibalização comercial

O cluster `money-pages` precisa ser revisto como conjunto, não só URL a URL. As páginas são boas candidatas a ranquear, mas também são as mais expostas a competir entre si se o linking interno ficar frouxo.

## Resultado da auditoria

O blog saiu de uma lógica de geração em memória para uma base editorial materializada, com taxonomia explícita, hubs, arquivos revisáveis e inventário fechado.

Status atual:

- 200 posts materializados
- 7 hubs editoriais
- 1 inventário completo de slugs
- 1 collection do Astro como fonte canônica
