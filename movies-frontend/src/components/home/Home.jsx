import React from 'react';
import Hero from '../hero/Hero';

const Home = ({ movies, likedMovies, toggleLike }) => {
  return (
    <Hero movies={movies} likedMovies={likedMovies} toggleLike={toggleLike}/>
  )
}

export default Home;
