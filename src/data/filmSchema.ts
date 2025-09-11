import * as z from 'zod';

export const FilmZ = z.object({
	id: z.string(),
	title: z.string(),           
	description: z.string(),
	director: z.string(),
	release_date: z.string(),    
	image: z.string(), 
});

export type FilmT = z.infer<typeof FilmZ>;
export const FilmArrayZ = z.array(FilmZ);
