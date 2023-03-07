package com.delfinoapps.remicinemaapi.repository;

import com.delfinoapps.remicinemaapi.model.MovieAvailable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieAvailableRepository extends JpaRepository<MovieAvailable, Long> {
}
