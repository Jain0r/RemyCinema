package com.delfinoapps.remicinemaapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "movie", schema = "public")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="id_movie", columnDefinition = "SERIAL")
    private Long idMovie;

    @Column(name = "title_movie")
    private String titleMovie;

    @Column(name = "duration_movie")
    private Long durationMovie;

    @Column(name = "sinopsis_movie")
    private String sinopsisMovie;

    @Column(name = "restrictions_movie")
    private String restrictionsMovie;

    @Column(name = "directors_movie")
    private String directorsMovie;

    @Column(name = "trailer_movie")
    private String trailerMovie;

    @Column(name = "idioms_movie")
    private String idiomsMovie;

    @Column(name = "available_movie")
    private String availableMovie;

    @Column(name = "poster_movie")
    private String posterMovie;

    @Column(name = "release_date_movie")
    private Date releaseDateMovie;

    @Column(name = "status_movie")
    private String statusMovie;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "movie_genre",
            joinColumns = { @JoinColumn(name = "id_movie") },
            inverseJoinColumns = { @JoinColumn(name = "id_genre") }
    )
    private List<Genre> genre = new ArrayList<>();

    /*@JsonIgnore
    @OneToMany(mappedBy = "movieRef")
    private List<MovieGenre> genrexMovie;
    */
    public Movie() {}

    public Movie(Long idMovie, String titleMovie, Long durationMovie, String sinopsisMovie, String restrictionsMovie, String directorsMovie, String trailerMovie, String idiomsMovie, String availableMovie, String posterMovie, Date releaseDateMovie, String statusMovie, List<Genre> genre) {
        this.idMovie = idMovie;
        this.titleMovie = titleMovie;
        this.durationMovie = durationMovie;
        this.sinopsisMovie = sinopsisMovie;
        this.restrictionsMovie = restrictionsMovie;
        this.directorsMovie = directorsMovie;
        this.trailerMovie = trailerMovie;
        this.idiomsMovie = idiomsMovie;
        this.availableMovie = availableMovie;
        this.posterMovie = posterMovie;
        this.releaseDateMovie = releaseDateMovie;
        this.statusMovie = statusMovie;
        this.genre = genre;
    }

    public Long getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(Long idMovie) {
        this.idMovie = idMovie;
    }

    public String getTitleMovie() {
        return titleMovie;
    }

    public void setTitleMovie(String titleMovie) {
        this.titleMovie = titleMovie;
    }

    public Long getDurationMovie() {
        return durationMovie;
    }

    public void setDurationMovie(Long durationMovie) {
        this.durationMovie = durationMovie;
    }

    public String getSinopsisMovie() {
        return sinopsisMovie;
    }

    public void setSinopsisMovie(String sinopsisMovie) {
        this.sinopsisMovie = sinopsisMovie;
    }

    public String getRestrictionsMovie() {
        return restrictionsMovie;
    }

    public void setRestrictionsMovie(String restrictionsMovie) {
        this.restrictionsMovie = restrictionsMovie;
    }

    public String getDirectorsMovie() {
        return directorsMovie;
    }

    public void setDirectorsMovie(String directorsMovie) {
        this.directorsMovie = directorsMovie;
    }

    public String getTrailerMovie() {
        return trailerMovie;
    }

    public void setTrailerMovie(String trailerMovie) {
        this.trailerMovie = trailerMovie;
    }

    public String getIdiomsMovie() {
        return idiomsMovie;
    }

    public void setIdiomsMovie(String idiomsMovie) {
        this.idiomsMovie = idiomsMovie;
    }

    public String getAvailableMovie() {
        return availableMovie;
    }

    public void setAvailableMovie(String availableMovie) {
        this.availableMovie = availableMovie;
    }

    public String getPosterMovie() {
        return posterMovie;
    }

    public void setPosterMovie(String posterMovie) {
        this.posterMovie = posterMovie;
    }

    public Date getReleaseDateMovie() {
        return releaseDateMovie;
    }

    public void setReleaseDateMovie(Date releaseDateMovie) {
        this.releaseDateMovie = releaseDateMovie;
    }

    public String getStatusMovie() {
        return statusMovie;
    }

    public void setStatusMovie(String statusMovie) {
        this.statusMovie = statusMovie;
    }

    public List<Genre> getGenre() {
        return genre;
    }

    public void setGenre(List<Genre> genre) {
        this.genre = genre;
    }
}
