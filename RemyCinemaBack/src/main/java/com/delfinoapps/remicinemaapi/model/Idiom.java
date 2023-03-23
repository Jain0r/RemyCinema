package com.delfinoapps.remicinemaapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "idioms", schema = "public")
@Entity
public class Idiom {

    @Id
    @Column(name = "id_idiom")
    private Long idIdiom;

    @Column(name = "name_idiom")
    private String nameIdiom;

    @JsonIgnore
    @ManyToMany
    private List<Movie> movies = new ArrayList<>();

    public Idiom(){}

    public Idiom(Long idIdiom, String nameIdiom, List<Movie> movies) {
        this.idIdiom = idIdiom;
        this.nameIdiom = nameIdiom;
        this.movies = movies;
    }

    public Long getIdIdiom() {
        return idIdiom;
    }

    public void setIdIdiom(Long idIdiom) {
        this.idIdiom = idIdiom;
    }

    public String getNameIdiom() {
        return nameIdiom;
    }

    public void setNameIdiom(String nameIdiom) {
        this.nameIdiom = nameIdiom;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}
