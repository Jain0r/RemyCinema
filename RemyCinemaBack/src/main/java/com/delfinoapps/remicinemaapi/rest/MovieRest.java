package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Genre;
import com.delfinoapps.remicinemaapi.model.Movie;
import com.delfinoapps.remicinemaapi.model.MovieGenre;
import com.delfinoapps.remicinemaapi.repository.MovieRepository;
import com.delfinoapps.remicinemaapi.service.GenreService;
import com.delfinoapps.remicinemaapi.service.MovieGenreService;
import com.delfinoapps.remicinemaapi.service.MovieService;
import io.swagger.models.Response;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie/")
public class MovieRest {

    @Autowired
    private MovieService movieService;

    @Autowired
    private MovieGenreService movieGenreService;

    @Autowired
    private GenreService genreService;


    //@CrossOrigin(origins = "http://localhost:8080")
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

    //@CrossOrigin(origins = "http://localhost:8080")
    //@PostMapping
    @PostMapping
    private ResponseEntity<Movie> postMovie(@RequestBody Movie movie){
        //retrieve Genre's entities for the persistence context
        List<Genre> managedGenres = new ArrayList<>();



        for(Genre genre : movie.getGenre()){
            Long id = genre.getIdGenre();
            Genre managedGenre = genreService.getReferenceById(id);
            managedGenre = (Genre)Hibernate.unproxy(managedGenre);
            //.orElseThrow(() -> new EntityNotFoundException("Genre not Found"));
            managedGenres.add(managedGenre);
        }
        movie.setGenre(managedGenres);
        movieService.save(movie);
        //Movie movieToSave = new Movie();

        try{
            return ResponseEntity.created(new URI("/movie/" + movie.getIdMovie())).body(movie);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
