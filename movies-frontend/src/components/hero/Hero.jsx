import React from 'react';
import './Hero.css';
import Carousal from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
  return (
    <div className='movie-carousal-container'>
      <Carousal>
        {
            movies.map(movie => (
                <Paper key={movie.id}>
                    <div className='movie-card-container'>
                        <div className="movie-card">
                            <div className="movie-detail">
                                <div className="movie-poster">
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className="movie-title">
                                    <h4>{movie.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            ))
        }
      </Carousal>
    </div>
  )
}

export default Hero;
