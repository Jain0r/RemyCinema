package com.delfinoapps.remicinemaapi.model;

import org.springframework.data.annotation.TypeAlias;

import javax.persistence.*;

@Entity
@Table(name = "movie_available", schema = "public")
public class MovieAvailable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_movie_available", columnDefinition = "SERIAL")
    private Long idMovieAvailable;

    @ManyToOne
    @JoinColumn(name = "id_movie")
    private Movie movies;

    @ManyToOne
    @JoinColumn(name = "id_available")
    private Available available;

    public MovieAvailable() {}

    public MovieAvailable(Long idMovieAvailable, Movie movies, Available available) {
        this.idMovieAvailable = idMovieAvailable;
        this.movies = movies;
        this.available = available;

    }

    public Long getIdMovieAvailable() {
        return idMovieAvailable;
    }

    public void setIdMovieAvailable(Long idMovieAvailable) {
        this.idMovieAvailable = idMovieAvailable;
    }

    public Movie getMovies() {
        return movies;
    }

    public void setMovies(Movie movies) {
        this.movies = movies;
    }

    public Available getAvailable() {
        return available;
    }

    public void setAvailable(Available available) {
        this.available = available;
    }
}
