package com.delfinoapps.remicinemaapi.rest;


import com.delfinoapps.remicinemaapi.model.Available;
import com.delfinoapps.remicinemaapi.service.AvailableService;
import io.swagger.models.Response;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/available/")
public class AvailableRest {

    @Autowired
    private AvailableService availableService;


    @GetMapping
    private ResponseEntity<List<Available>> getAvailables(){
        return ResponseEntity.ok(availableService.findAll());
    }

    @GetMapping("{id}")
    private ResponseEntity<Available> getAvailable(@PathVariable("id") Long id){
        Available availableToSend = availableService.getById(id);
        availableToSend = (Available) Hibernate.unproxy(availableToSend);
        return ResponseEntity.ok(availableToSend);
    }

    @PostMapping
    private ResponseEntity<Available> postAvailable(@RequestBody Available available){
        Available availableToSend = availableService.save(available);

        try{
            return ResponseEntity.created(new URI("available" + availableToSend.getIdAvailable())).body(availableToSend);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
