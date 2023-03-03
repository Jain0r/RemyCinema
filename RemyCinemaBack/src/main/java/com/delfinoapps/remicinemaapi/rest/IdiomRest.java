package com.delfinoapps.remicinemaapi.rest;


import com.delfinoapps.remicinemaapi.model.Idiom;
import com.delfinoapps.remicinemaapi.service.IdiomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
