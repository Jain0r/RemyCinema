package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Movie;
import com.delfinoapps.remicinemaapi.model.MovieAvailable;
import com.delfinoapps.remicinemaapi.service.MovieAvailableService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("movie_available")

public class MovieAvailableRest {

    @Autowired
    private MovieAvailableService movieAvailableService;

    @GetMapping
    private ResponseEntity<List<MovieAvailable>> getAllMovieAvailable(){
        return ResponseEntity.ok(movieAvailableService.findAll());
    }

    @GetMapping("{id}")
    private ResponseEntity<MovieAvailable> getMovie(@PathVariable("id") Long id){
        MovieAvailable movieAvailableToSend = movieAvailableService.getById(id);
        movieAvailableToSend = (MovieAvailable) Hibernate.unproxy(movieAvailableToSend);

        return ResponseEntity.ok(movieAvailableToSend);
    }

    @PostMapping
    private ResponseEntity<MovieAvailable> postMovieAvailable(@RequestBody MovieAvailable movieAvailable){
        MovieAvailable movieAvailableToSave = new MovieAvailable();

        try{
            return ResponseEntity.created(new URI("movie_available" + movieAvailableToSave.getIdMovieAvailable())).body(movieAvailableToSave);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
