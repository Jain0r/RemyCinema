package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.*;
import com.delfinoapps.remicinemaapi.repository.MovieRepository;
import com.delfinoapps.remicinemaapi.service.*;
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

    @Autowired
    private AvailableService availableService;

    @Autowired
    private IdiomService idiomService;


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
        List<Available> managedAvailables = new ArrayList<>();
        List<Idiom> managedIdioms = new ArrayList<>();

        for(Genre genre : movie.getGenre()){
            Long id = genre.getIdGenre();
            Genre managedGenre = genreService.getReferenceById(id);
            managedGenre = (Genre)Hibernate.unproxy(managedGenre);
            //.orElseThrow(() -> new EntityNotFoundException("Genre not Found"));
            managedGenres.add(managedGenre);
        }
        movie.setGenre(managedGenres);

        for(Available available : movie.getAvailableMovie()){
            Long id = available.getIdAvailable();
            Available managedAvailable = availableService.getReferenceById(id);
            managedAvailable = (Available)Hibernate.unproxy(managedAvailable);
            managedAvailables.add(managedAvailable);
        }
        movie.setAvailableMovie(managedAvailables);

        for(Idiom idiom : movie.getIdiomsMovie()){
            Long id = idiom.getIdIdiom();
            Idiom managedIdiom = idiomService.getReferenceById(id);
            managedIdiom = (Idiom) Hibernate.unproxy(managedIdiom);
            managedIdioms.add(managedIdiom);
        }
        movie.setIdiomsMovie(managedIdioms);

        movieService.save(movie);
        //Movie movieToSave = new Movie();

        try{
            return ResponseEntity.created(new URI("/movie/" + movie.getIdMovie())).body(movie);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
