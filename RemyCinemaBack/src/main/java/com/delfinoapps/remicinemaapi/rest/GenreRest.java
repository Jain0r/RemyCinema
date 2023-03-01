package com.delfinoapps.remicinemaapi.rest;


import com.delfinoapps.remicinemaapi.model.Genre;
import com.delfinoapps.remicinemaapi.service.GenreService;
import io.swagger.models.Response;
import org.aspectj.weaver.bcel.ExceptionRange;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/genre/")
public class GenreRest
{
    @Autowired
    private GenreService genreService;

    @GetMapping
    private ResponseEntity<List<Genre>> getAllGenre(){
        return ResponseEntity.ok(genreService.findAll());
    }


    @GetMapping("{id}")
    private ResponseEntity<Genre> getGenre(@PathVariable("id") Long id){
        Genre genreToSend = genreService.getReferenceById(id);
        genreToSend = (Genre) Hibernate.unproxy(genreToSend);
        return ResponseEntity.ok(genreToSend);
    }

    @PostMapping
    private ResponseEntity<Genre> postMapping(@RequestBody Genre genre){
        Genre genreToSave = genreService.save(genre);
        try{
            return ResponseEntity.created(new URI("/genre/" + genreToSave.getIdGenre())).body(genreToSave);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
