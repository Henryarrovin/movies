import React, { useEffect, useState } from 'react';
import Movies from '../hero/Movies';

const WatchList = ({ watchList, getMovieData }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviePromises = watchList.map(item => getMovieData(item.imdbId));
            const movieData = await Promise.all(moviePromises);
            setMovies(movieData.filter(movie => movie !== null));
        };

        fetchMovies();
    }, [watchList, getMovieData]);
    
  return (
    <Movies movies={movies}/>
  )
}

export default WatchList;
