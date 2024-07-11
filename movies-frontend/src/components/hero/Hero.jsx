import React from 'react';
import './Hero.css';
import Carousal from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Movies from './Movies';

const Hero = ({ movies, likedMovies, toggleLike }) => {

    const navigate = useNavigate();

    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`);
    }
    
  return (
    <div className='movie-carousal-container'>
        <Carousal>
        {
            movies.map(movie => (
                <Paper key={movie.imdbId}>
                    <div className='movie-card-container'>
                        <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                            <div className="movie-detail">
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className="movie-title">
                                    <h4>{movie.title}</h4>
                                </div>
                                <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            ))
        }
        </Carousal>
        <div className="movie-title">
            <h4>Movies</h4>
        </div>
        <Movies movies={movies} likedMovies={likedMovies} toggleLike={toggleLike}/>
    </div>
  )
}

export default Hero;
