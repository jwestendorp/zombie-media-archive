// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string(),
      thumbnail: image().refine((img) => img.width >= 200, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
      tags: z.array(z.string()).optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
