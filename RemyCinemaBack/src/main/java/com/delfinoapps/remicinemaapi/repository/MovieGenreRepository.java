package com.delfinoapps.remicinemaapi.repository;

import com.delfinoapps.remicinemaapi.model.MovieGenre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieGenreRepository extends JpaRepository<MovieGenre, Long> {
}

