import { create } from 'zustand';

interface FavoritesState {
	favorites: string[];
	toggleFavorite: (id: string) => void;
	setFavorites: (ids: string[]) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
	favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
	seen: JSON.parse(localStorage.getItem('seen') || '[]'),
	
	toggleFavorite: (id) =>
		set((state) => {
		const next = state.favorites.includes(id)
		? state.favorites.filter((favId) => favId !== id)
		: [...state.favorites, id];
		localStorage.setItem('favorites', JSON.stringify(next));
		return { favorites: next };
	}),
	

	setFavorites: (ids) => {
		localStorage.setItem('favorites', JSON.stringify(ids));
		set({ favorites: ids });
	},
}));
