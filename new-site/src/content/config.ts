import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    language: z.enum(['english', 'japanese']).default('english'),
    thumbnail: z.object({
      url: z.string(),
      dimensions: z.tuple([z.number(), z.number()]).optional(),
    }).optional(),
    categories: z.array(z.string()).default(['project']),
    draft: z.boolean().default(false),
    galleries: z.record(z.array(z.object({
      url: z.string(),
      alt: z.string().optional(),
    }))).optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    authors: z.array(z.string()).optional(),
    firstAuthor: z.boolean().default(false),
    venue: z.string().optional(),
    year: z.number().optional(),
    pdfUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    interactive: z.boolean().default(true),
    externalUrl: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const photography = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    location: z.string().optional(),
    images: z.array(z.object({
      url: z.string(), // R2 URL
      alt: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    })),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  research,
  experiments,
  photography,
};
