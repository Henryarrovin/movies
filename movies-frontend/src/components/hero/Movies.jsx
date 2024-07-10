import React, { useState } from 'react';
import './Movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const Movies = ({ movies }) => {
    const [likedMovies, setLikedMovies] = useState([]);
    const [hoveredMovie, setHoveredMovie] = useState(null);

    const toggleLike = (movieId) => {
        if (likedMovies.includes(movieId)) {
            // Unlike movie
            setLikedMovies(likedMovies.filter(id => id !== movieId));
        } else {
            // Like movie
            setLikedMovies([...likedMovies, movieId]);
        }
    };

    const isMovieLiked = (movieId) => likedMovies.includes(movieId);

    const handleMouseEnter = (movieId) => {
        setHoveredMovie(movieId);
    };

    const handleMouseLeave = () => {
        setHoveredMovie(null);
    };

    return (
        <div className="watchlist-container">
            {movies.map(movie => (
                <div
                    className="movie-card"
                    key={movie.imdbId}
                    onMouseEnter={() => handleMouseEnter(movie.imdbId)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="movie-poster">
                        <img src={movie.poster} alt={movie.title} />
                        {hoveredMovie === movie.imdbId && (
                            <div className="like-button" onClick={() => toggleLike(movie.imdbId)}>
                                <FontAwesomeIcon
                                    icon={isMovieLiked(movie.imdbId) ? faHeartSolid : faHeartRegular}
                                    className={isMovieLiked(movie.imdbId) ? 'liked' : ''}
                                />
                            </div>
                        )}
                    </div>
                    <div className="movie-title">
                        <h4>{movie.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movies;
