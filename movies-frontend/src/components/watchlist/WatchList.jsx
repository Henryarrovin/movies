import React, { useEffect, useState } from 'react';

const WatchList = ({ watchList, getMovieData }) => {
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     for (let i = 0; i < watchList.length; i++) {
    //         let movie = getMovieData(watchList[i].imdbId);
    //         console.log("------------------------- FROM WATCHLIST -------------------------");
    //         console.log(movie);
    //         setMovies([...movies, movie]);

    //     }
    // }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviePromises = watchList.map(item => getMovieData(item.imdbId));
            const movieData = await Promise.all(moviePromises);
            setMovies(movieData.filter(movie => movie !== null));
        };

        fetchMovies();
    }, [watchList, getMovieData]);
    
  return (
    <div>
        {movies.map(movie => (
            <div key={movie.imdbId}>
                <h2>{movie.title}</h2>
            </div>
        ))}
    </div>
  )
}

export default WatchList;
