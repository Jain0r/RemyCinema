package com.delfinoapps.remicinemaapi.service;

import com.delfinoapps.remicinemaapi.model.MovieGenre;
import com.delfinoapps.remicinemaapi.repository.MovieGenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class MovieGenreService implements MovieGenreRepository {

    @Autowired
    private MovieGenreRepository movieGenreRepository;


    @Override
    public List<MovieGenre> findAll() {
        return movieGenreRepository.findAll();
    }

    @Override
    public List<MovieGenre> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<MovieGenre> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<MovieGenre> findAllById(Iterable<Long> longs) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public void delete(MovieGenre entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends MovieGenre> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends MovieGenre> S save(S entity) {
        return movieGenreRepository.save(entity);
    }

    @Override
    public <S extends MovieGenre> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<MovieGenre> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long aLong) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends MovieGenre> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends MovieGenre> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<MovieGenre> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public MovieGenre getOne(Long aLong) {
        return null;
    }

    @Override
    public MovieGenre getById(Long aLong) {
        return null;
    }

    @Override
    public MovieGenre getReferenceById(Long aLong) {
        return movieGenreRepository.getReferenceById(aLong);
    }

    @Override
    public <S extends MovieGenre> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends MovieGenre> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends MovieGenre> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends MovieGenre> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends MovieGenre> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends MovieGenre> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends MovieGenre, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
