import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).min(1),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url()
        })
      )
      .default([])
  })
});

const profile = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string(),
    telegram: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    artstation: z.string().optional(),
    skills: z.array(z.string()).default([]),
    focus: z.array(z.string()).default([])
  })
});

export const collections = {
  projects,
  profile
};
