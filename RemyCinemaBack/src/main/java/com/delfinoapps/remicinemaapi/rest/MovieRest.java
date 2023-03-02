package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Movie;
import com.delfinoapps.remicinemaapi.repository.MovieRepository;
import com.delfinoapps.remicinemaapi.service.MovieService;
import io.swagger.models.Response;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("movie")
public class MovieRest {

    @Autowired
    private MovieService movieService;


    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping
    private ResponseEntity<List<Movie>> getAllMovies(){
        List<Movie> moviesToSend = movieService.findAll();
        return ResponseEntity.ok(moviesToSend);
    }

    @GetMapping("{id}")
    private ResponseEntity<Movie> getMovie(@PathVariable("id") Long id){
        Movie movieToSend = movieService.getReferenceById(id);
        movieToSend = (Movie) Hibernate.unproxy(movieToSend);

        return ResponseEntity.ok(movieToSend);

    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping
    private ResponseEntity<Movie> postMovie(@RequestBody Movie movie){
        Movie movieToSave = movieService.save(movie);

        try{
            return ResponseEntity.created(new URI("/movie/" + movieToSave.getIdMovie())).body(movieToSave);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
