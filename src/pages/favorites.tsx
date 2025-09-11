import { useEffect } from 'react';
import { useMoviesStore } from '../stores/moviesStore';
import { useFavoritesStore } from '../stores/favoritesStore';
import MovieCard from '../components/MovieCard';
import '../styles/App.css'

function Favorites() {
	const { movies, fetchMovies } = useMoviesStore();
	const { favorites, toggleFavorite } = useFavoritesStore();
	
	useEffect(() => {
		if (movies.length === 0) {
			fetchMovies();
		}
	}, [movies, fetchMovies]);
	
	const favoriteMovies = movies.filter((film) => favorites.includes(film.id));
	
	
	return (
		<div className="movie-grid">
		{favoriteMovies.length > 0 ? (
			favoriteMovies.map((film) => (
				<MovieCard
				key={film.id}
				film={film}
				isFavorite={true}
				onToggleFavorite={toggleFavorite}
				/>
			))
		) : (
			<p>No favorites yet. Add some from the Movies page!</p>
		)}
		</div>
	);
}

export default Favorites;
