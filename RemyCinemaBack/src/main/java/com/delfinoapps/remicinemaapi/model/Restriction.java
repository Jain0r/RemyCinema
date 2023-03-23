package com.delfinoapps.remicinemaapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "restrictions", schema = "public")
public class Restriction {

    @Id
    @Column(name = "id_restriction_movie")
    private Long idRestrictionMovie;

    @Column(name = "value_restriction")
    private String valueRestriction;

    @Column(name = "description_restriction")
    private String descriptionRestriction;

    @JsonIgnore
    @OneToMany(mappedBy = "restrictionRef")
    private List<Movie> movies;

    public Restriction(){}

    public Restriction(Long idRestrictionMovie, String valueRestriction, String descriptionRestriction, List<Movie> movies) {
        this.idRestrictionMovie = idRestrictionMovie;
        this.valueRestriction = valueRestriction;
        this.descriptionRestriction = descriptionRestriction;
        this.movies = movies;
    }

    public Long getIdRestrictionMovie() {
        return idRestrictionMovie;
    }

    public void setIdRestrictionMovie(Long idRestrictionMovie) {
        this.idRestrictionMovie = idRestrictionMovie;
    }

    public String getValueRestriction() {
        return valueRestriction;
    }

    public void setValueRestriction(String valueRestriction) {
        this.valueRestriction = valueRestriction;
    }

    public String getDescriptionRestriction() {
        return descriptionRestriction;
    }

    public void setDescriptionRestriction(String descriptionRestriction) {
        this.descriptionRestriction = descriptionRestriction;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}
