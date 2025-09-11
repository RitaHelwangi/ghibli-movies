import { create } from 'zustand';
import { FilmArrayZ, type FilmT } from '../data/filmSchema';

interface MoviesState {
	movies: FilmT[];
	loading: boolean;
	error: string | null;
	fetchMovies: () => Promise<void>;
}

export const useMoviesStore = create<MoviesState>((set) => ({
	movies: [],
	loading: false,
	error: null,
	fetchMovies: async () => {
		set({ loading: true, error: null });
		try {
			const res = await fetch('https://ghibliapi.vercel.app/films');
			const data = await res.json();
			// Validate and parse data using Zod schema
			const parsed = FilmArrayZ.parse(
				data.map((film: any) => ({
					id: film.id,
					title: film.title,
					description: film.description,
					director: film.director,
					release_date: film.release_date,
					image: film.image || 'https://via.placeholder.com/300x400?text=No+Image',
				}))
			);
			
			set({ movies: parsed, loading: false });
		} catch (err: any) {
			console.error('Error fetching movies:', err);
			set({ error: 'Failed to fetch movies', loading: false });
		}
	},
}));
