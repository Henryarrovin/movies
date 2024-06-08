package com.example.movies.services;

import com.example.movies.models.Movie;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MovieService {

    public List<Movie> getAllMovies();

    public Movie getOneMovie(String imdbId);

}
