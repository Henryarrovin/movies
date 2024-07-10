package com.example.movies.services.impl;

import com.example.movies.models.Movie;
import com.example.movies.repositories.MovieRepository;
import com.example.movies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getOneMovie(String imdbId) {
        return movieRepository.findByImdbId(imdbId).orElse(null);
    }

}
