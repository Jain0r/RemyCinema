package com.delfinoapps.remicinemaapi.repository;

import com.delfinoapps.remicinemaapi.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
