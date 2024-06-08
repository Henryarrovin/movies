package com.example.movies.services;

import com.example.movies.models.Review;

public interface ReviewService {

    public Review createReview(String reviewBody, String imdbId);

}
