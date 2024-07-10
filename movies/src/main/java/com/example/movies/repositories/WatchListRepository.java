package com.example.movies.repositories;

import com.example.movies.models.WatchList;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WatchListRepository extends MongoRepository<WatchList, ObjectId> {
}
