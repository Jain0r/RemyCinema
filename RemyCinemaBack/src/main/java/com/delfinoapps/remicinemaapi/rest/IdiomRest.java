package com.delfinoapps.remicinemaapi.rest;


import com.delfinoapps.remicinemaapi.model.Idiom;
import com.delfinoapps.remicinemaapi.service.IdiomService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/idiom/")
public class IdiomRest {

    @Autowired
    private IdiomService idiomService;

    @GetMapping
    private ResponseEntity<List<Idiom>> getIdioms(){
        return ResponseEntity.ok(idiomService.findAll());
    }

    @GetMapping("{id}")
    private ResponseEntity<Idiom> getIdiom(@PathVariable("id") Long id){
        Idiom idiomToSend = idiomService.getById(id);
        idiomToSend = (Idiom) Hibernate.unproxy(idiomToSend);
        return ResponseEntity.ok(idiomToSend);
    }

    @PostMapping
    private ResponseEntity<Idiom> postIdiom(@RequestBody Idiom idiom){
        Idiom idiomToSave = idiomService.save(idiom);
        try{
            return ResponseEntity.created(new URI("/idiom/" + idiomToSave.getIdIdiom())).body(idiomToSave);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
