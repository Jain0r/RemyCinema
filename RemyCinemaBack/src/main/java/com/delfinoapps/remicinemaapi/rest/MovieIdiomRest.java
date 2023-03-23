package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Idiom;
import com.delfinoapps.remicinemaapi.model.Movie;
import com.delfinoapps.remicinemaapi.model.MovieGenre;
import com.delfinoapps.remicinemaapi.model.MovieIdiom;
import com.delfinoapps.remicinemaapi.service.MovieIdiomService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/movieidiom/")
public class MovieIdiomRest {

    @Autowired
    private MovieIdiomService movieIdiomService;

    @GetMapping
    private ResponseEntity<List<MovieIdiom>> getAllMovieXIdiom(){
        return ResponseEntity.ok(movieIdiomService.findAll());
    }

    @GetMapping("{id}")
    private ResponseEntity<MovieIdiom> getIdiom(@PathVariable("id") Long id){
        MovieIdiom movieIdiomToSend = movieIdiomService.getById(id);
        movieIdiomToSend = (MovieIdiom) Hibernate.unproxy(movieIdiomToSend);
        return ResponseEntity.ok(movieIdiomToSend);

    }

    @PostMapping
    private ResponseEntity<MovieIdiom> postMovieGenre(@RequestBody MovieIdiom movieIdiom){
        MovieIdiom movieIdiomToSave = movieIdiomService.save(movieIdiom);

        try{
            return ResponseEntity.created(new URI("/movieidiom/" + movieIdiomToSave.getIdMovieIdiom())).body(movieIdiomToSave);

        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

}
