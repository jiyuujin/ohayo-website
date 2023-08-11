import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    authorTwitter: z.string(),
    category: z.string(),
    title: z.string(),
    explain: z.string(),
    type: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    reaction: z.string(),
  }),
})

export const collections = {
  posts: postsCollection,
}
