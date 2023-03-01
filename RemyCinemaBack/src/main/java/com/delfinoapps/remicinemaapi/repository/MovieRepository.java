package com.delfinoapps.remicinemaapi.repository;

import com.delfinoapps.remicinemaapi.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
