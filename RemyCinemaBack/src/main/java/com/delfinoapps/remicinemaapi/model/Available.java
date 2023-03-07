package com.delfinoapps.remicinemaapi.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "availables", schema = "public")
public class Available {

    @Id
    @Column(name = "id_available")
    private Long idAvailable;

    @Column(name = "format")
    private String format;

    @JsonIgnore
    @ManyToMany
    private List<Movie> movies = new ArrayList<>();

    public Available() {}

    public Available(Long idAvailable, String format, List<Movie> movies) {
        this.idAvailable = idAvailable;
        this.format = format;
        this.movies = movies;
    }

    public Long getIdAvailable() {
        return idAvailable;
    }

    public void setIdAvailable(Long idAvailable) {
        this.idAvailable = idAvailable;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }
}
