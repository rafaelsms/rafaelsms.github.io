import { z, defineCollection, reference } from 'astro:content';

const photoCategories = defineCollection({
	type: 'data',
	schema: ({ image }) => z.object({
		title: z.string(),
		imageDescription: z.string(),
		coverImage: image()
	})
});

const photos = defineCollection({
	type: 'data',
	schema: ({ image }) => z.object({
		pageTitle: z.string(),
		description: z.string(),
		category: reference('photo_categories'),
		rank: z.number(),
		image: image()
	})
});

export const collections = {
	photo_categories: photoCategories,
	photos: photos
};
