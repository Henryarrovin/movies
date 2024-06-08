package com.example.movies.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "reviews")
public class Review {

    @Id
    private ObjectId id;
    private String body;


    public Review(String reviewBody) {
        this.body = reviewBody;
    }
}
