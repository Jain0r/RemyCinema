package com.delfinoapps.remicinemaapi.rest;

import com.delfinoapps.remicinemaapi.model.Restriction;
import com.delfinoapps.remicinemaapi.service.RestrictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/restriction/")
public class RestrictionRest {

    @Autowired
    private RestrictionService restrictionService;

    @GetMapping
    private ResponseEntity<List<Restriction>> getRestrictions(){
        return ResponseEntity.ok(restrictionService.findAll());
    }


}
