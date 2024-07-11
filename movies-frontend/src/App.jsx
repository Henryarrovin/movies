import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import WatchList from './components/watchlist/WatchList';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/movies');
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  }

  const getMovie = async (movieId) => {
    try {
        const response = await api.get(`/movies/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null;
    }
}


  const getWatchList = async () => {
    try {
      const response = await api.get('/watch-lists');
      setWatchList(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const toggleLike = async (movieId) => {
    try {
        if (likedMovies.includes(movieId)) {
            await api.delete(`/watch-lists?imdbId=${movieId}`);
            setLikedMovies(currentLikedMovies =>
                currentLikedMovies.filter(id => id !== movieId)
            );
        } else {
            await api.post('/watch-lists', { imdbId: movieId });
            setLikedMovies(currentLikedMovies => [...currentLikedMovies, movieId]);
        }
    } catch (error) {
        console.error('Error toggling like:', error);
    }
  };

  useEffect(() => {
    getMovies();
    getWatchList();

    const fetchWatchList = async () => {
      try {
          const response = await api.get('/watch-lists');
          setLikedMovies(response.data.map(item => item.imdbId));
      } catch (error) {
          console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchList();
  }, []);
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} likedMovies={likedMovies} toggleLike={toggleLike}/>} />
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}/>
          <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />} />
          <Route path='/watchList' element = {<WatchList watchList={watchList} getMovieData={getMovie} toggleLike={toggleLike} likedMovies={likedMovies}/>} />
          <Route path="*" element = {<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;