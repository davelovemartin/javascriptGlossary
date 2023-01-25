import { z, defineCollection } from 'astro:content';

const termsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        isDraft: z.boolean().optional(),
    }),
})

export const collections = {
    'terms': termsCollection,
};