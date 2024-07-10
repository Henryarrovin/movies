package com.example.movies.services;

import com.example.movies.models.WatchList;
import org.bson.types.ObjectId;

import java.util.List;

public interface WatchListService {

    public List<WatchList> getAllWatchLists();

    public WatchList getOneWatchList(String imdbId);

    public WatchList createWatchList(WatchList watchList);

    public void removeWatchList(String imdbId);

}
