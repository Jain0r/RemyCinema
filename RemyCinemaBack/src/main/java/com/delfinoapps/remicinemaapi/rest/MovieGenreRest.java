package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Movie;
import com.delfinoapps.remicinemaapi.model.MovieGenre;
import com.delfinoapps.remicinemaapi.service.MovieGenreService;
import io.swagger.models.Response;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("moviegenres")
public class MovieGenreRest {

    @Autowired
    private MovieGenreService movieGenreService;

    @GetMapping
    private ResponseEntity<List<MovieGenre>> getAllMoviegenres(){
        return ResponseEntity.ok(movieGenreService.findAll());
    }

    @GetMapping("{id}")
    private ResponseEntity<MovieGenre> getMovieGenre(@PathVariable("id") Long id){
        MovieGenre movieGenreToSend = movieGenreService.getReferenceById(id);
        movieGenreToSend = (MovieGenre) Hibernate.unproxy(movieGenreToSend);
        return ResponseEntity.ok(movieGenreToSend);
    }

    @PostMapping
    private ResponseEntity<MovieGenre> postMovieGenre(@RequestBody MovieGenre movieGenre){
        MovieGenre movieGenreToSave = movieGenreService.save(movieGenre);

        try{
            return ResponseEntity.created(new URI("/moviegenres/" + movieGenreToSave.getIdMovieGenre())).body(movieGenreToSave);

        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
