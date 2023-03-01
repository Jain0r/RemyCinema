package com.delfinoapps.remicinemaapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "genre", schema = "public")
@Entity
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_genre", columnDefinition = "SERIAL")
    private long idGenre;

    @Column(name = "descr_genre")
    private String descrGenre;

    @JsonIgnore
    @ManyToMany
    private List<Movie> movies = new ArrayList<>();

    public Genre() {
    }

    public Genre(long idGenre, String descrGenre, List<Movie> movies) {
        this.idGenre = idGenre;
        this.descrGenre = descrGenre;
        this.movies = movies;
    }

    public Genre(long idGenre, String descrGenre) {
        this.idGenre = idGenre;
        this.descrGenre = descrGenre;
    }

    public long getIdGenre() {
        return idGenre;
    }

    public void setIdGenre(long idGenre) {
        this.idGenre = idGenre;
    }

    public String getDescrGenre() {
        return descrGenre;
    }

    public void setDescrGenre(String descrGenre) {
        this.descrGenre = descrGenre;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}

