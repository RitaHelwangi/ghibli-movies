import React from 'react';
import type { FilmT } from '../data/filmSchema';
import '../styles/MovieCard.css';


type MovieCardProps = {
    film: FilmT;
    onToggleFavorite?: (id: string) => void;
    isFavorite?: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({ film, onToggleFavorite, isFavorite }) => {
    return (
        <div className="movie-card">
            <img
                src={film.image || 'https://via.placeholder.com/300x400?text=No+Image'}
                alt={film.title}
                className="movie-card__image"
            />
            <div className="movie-card__content">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__director"><strong>Director:</strong> {film.director}</p>
                <p className="movie-card__release-date"><strong>Release Date:</strong> {film.release_date}</p>
                <p className="movie-card__description">{film.description}</p>
                {onToggleFavorite && (
                    <button
                        className={`movie-card__favorite ${isFavorite ? 'favorite' : ''}`}
                        onClick={() => onToggleFavorite(film.id)}
                    >
                        {isFavorite ? '★ Favorited' : '🍿 Add to Favorites'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default MovieCard