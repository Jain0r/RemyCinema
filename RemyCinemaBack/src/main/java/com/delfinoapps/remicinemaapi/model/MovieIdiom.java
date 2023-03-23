package com.delfinoapps.remicinemaapi.model;

import javax.persistence.*;

@Table(name = "movie_idiom", schema = "public")
@Entity
public class MovieIdiom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_movie_idiom", columnDefinition = "SERIAL")
    private long idMovieIdiom;

    @ManyToOne
    @JoinColumn(name = "id_movie")
    private Movie movieRef;

    @ManyToOne
    @JoinColumn(name = "id_idiom")
    private Idiom idiomRef;

    public MovieIdiom(){}

    public MovieIdiom(long idMovieIdiom, Movie movieRef, Idiom idiomRef) {
        this.idMovieIdiom = idMovieIdiom;
        this.movieRef = movieRef;
        this.idiomRef = idiomRef;
    }

    public long getIdMovieIdiom() {
        return idMovieIdiom;
    }

    public void setIdMovieIdiom(long idMovieIdiom) {
        this.idMovieIdiom = idMovieIdiom;
    }

    public Movie getMovieRef() {
        return movieRef;
    }

    public void setMovieRef(Movie movieRef) {
        this.movieRef = movieRef;
    }

    public Idiom getIdiomRef() {
        return idiomRef;
    }

    public void setIdiomRef(Idiom idiomRef) {
        this.idiomRef = idiomRef;
    }
}
