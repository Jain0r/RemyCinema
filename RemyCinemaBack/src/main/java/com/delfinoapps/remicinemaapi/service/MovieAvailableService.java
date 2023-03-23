package com.delfinoapps.remicinemaapi.service;

import com.delfinoapps.remicinemaapi.model.MovieAvailable;
import com.delfinoapps.remicinemaapi.repository.MovieAvailableRepository;
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
public class MovieAvailableService implements MovieAvailableRepository{

    @Autowired
    private MovieAvailableRepository movieAvailableRepository;

    @Override
    public List<MovieAvailable> findAll() {
        return movieAvailableRepository.findAll();
    }

    @Override
    public List<MovieAvailable> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<MovieAvailable> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<MovieAvailable> findAllById(Iterable<Long> longs) {
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
    public void delete(MovieAvailable entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends MovieAvailable> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends MovieAvailable> S save(S entity) {
        return movieAvailableRepository.save(entity);
    }

    @Override
    public <S extends MovieAvailable> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<MovieAvailable> findById(Long aLong) {
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
    public <S extends MovieAvailable> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends MovieAvailable> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<MovieAvailable> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public MovieAvailable getOne(Long aLong) {
        return null;
    }

    @Override
    public MovieAvailable getById(Long aLong) {
        return null;
    }

    @Override
    public MovieAvailable getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends MovieAvailable> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends MovieAvailable> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends MovieAvailable> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends MovieAvailable> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends MovieAvailable> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends MovieAvailable> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends MovieAvailable, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
