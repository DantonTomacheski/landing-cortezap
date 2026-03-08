import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    primaryKeyword: z.string(),
    keywords: z.array(z.string()),
    searchIntent: z.string(),
    funnelStage: z.string(),
    cluster: z.string(),
    clusterLabel: z.string(),
    hub: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    readingTime: z.number(),
    ctaTitle: z.string(),
    ctaBody: z.string(),
    author: z.string(),
    reviewer: z.string(),
    reviewedAt: z.string(),
    tags: z.array(z.string()),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    internalLinks: z.array(z.string()),
  }),
});

export const collections = { blog };
