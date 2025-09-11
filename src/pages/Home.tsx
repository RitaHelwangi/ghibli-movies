import { useEffect, useState } from 'react';
import { useMoviesStore } from '../stores/moviesStore';
import { useFavoritesStore } from '../stores/favoritesStore';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import '../styles/App.css'
import '../styles/SearchBar.css'
function Home() {
	const { movies, fetchMovies} = useMoviesStore();
	const { favorites, toggleFavorite } = useFavoritesStore();
	const [searchTerm, setSearchTerm] = useState('');
	
	useEffect(() => {
		if (movies.length === 0) {
			fetchMovies();
		}
	}, [movies, fetchMovies]);
	
	// Sort movies (latest first)
	const sortedMovies = [...movies].sort((a, b) =>
		b.release_date.localeCompare(a.release_date)
);

// Filter by search term
const filteredMovies = sortedMovies.filter((film) =>
	film.title.toLowerCase().includes(searchTerm.toLowerCase())
);



return (
	<>
	<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
	<div className="movie-grid">
	{filteredMovies.map((film) => (
		<MovieCard
		key={film.id}
		film={film}
		isFavorite={favorites.includes(film.id)}
		onToggleFavorite={toggleFavorite}
		/>
	))}
	</div>
	</>
);
}

export default Home;
