package com.delfinoapps.remicinemaapi.model;

import javax.persistence.*;

@Entity
@Table(name = "movie_genre", schema = "public")
public class MovieGenre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_movie_genre", columnDefinition = "SERIAL")
    private Long idMovieGenre;

    @ManyToOne
    @JoinColumn(name = "id_movie")
    private Movie movieRef;

    @ManyToOne
    @JoinColumn(name = "id_genre")
    private Genre genreRef;

    public MovieGenre() {
    }

    public MovieGenre(Long idMovieGenre, Movie movieRef, Genre genreRef) {
        this.idMovieGenre = idMovieGenre;
        this.movieRef = movieRef;
        this.genreRef = genreRef;
    }

    public Long getIdMovieGenre() {
        return idMovieGenre;
    }

    public void setIdMovieGenre(Long idMovieGenre) {
        this.idMovieGenre = idMovieGenre;
    }

    public Movie getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(Movie movieRef) {
        this.movieRef = movieRef;
    }

    public Genre getGenreRef() {
        return genreRef;
    }

    public void setGenreRef(Genre genreRef) {
        this.genreRef = genreRef;
    }
}
