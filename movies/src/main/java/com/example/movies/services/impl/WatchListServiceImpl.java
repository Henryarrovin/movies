package com.example.movies.services.impl;

import com.example.movies.models.WatchList;
import com.example.movies.repositories.MovieRepository;
import com.example.movies.repositories.WatchListRepository;
import com.example.movies.services.WatchListService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchListServiceImpl implements WatchListService {

    @Autowired
    private WatchListRepository watchListRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<WatchList> getAllWatchLists() {
        return watchListRepository.findAll();
    }

    @Override
    public WatchList getOneWatchList(ObjectId id) {
        return watchListRepository.findById(id).orElse(null);
    }

    @Override
    public WatchList createWatchList(WatchList watchList) {

        if (watchListRepository.findById(watchList.getId()).isPresent()) {
            return watchListRepository.findById(watchList.getId()).get();
        }

        return watchListRepository.save(watchList);

    }

    @Override
    public void removeWatchList(ObjectId id) {
        watchListRepository.deleteById(id);
    }
}
