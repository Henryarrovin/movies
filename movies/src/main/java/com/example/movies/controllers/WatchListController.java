package com.example.movies.controllers;

import com.example.movies.models.WatchList;
import com.example.movies.services.WatchListService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/watch-lists")
@CrossOrigin(origins = "http://localhost:5173")
public class WatchListController {

    @Autowired
    private WatchListService watchListService;

    @GetMapping
    public ResponseEntity<List<WatchList>> getWatchLists() {
        return new ResponseEntity<>(watchListService.getAllWatchLists(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WatchList> getOneWatchList(@PathVariable ObjectId id) {
        return new ResponseEntity<>(watchListService.getOneWatchList(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createWatchList(@RequestBody WatchList watchList) {
        watchListService.createWatchList(watchList);
        return new ResponseEntity<>("Added!", HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity<String> removeWatchList(@RequestParam ObjectId id) {
        watchListService.removeWatchList(id);
        return new ResponseEntity<>("Removed!", HttpStatus.NO_CONTENT);
    }
}
