package com.delfinoapps.remicinemaapi.service;


import com.delfinoapps.remicinemaapi.model.Restriction;
import com.delfinoapps.remicinemaapi.repository.RestrictionRepository;
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
public class RestrictionService implements RestrictionRepository{

    @Autowired
    private RestrictionRepository restrictionRepository;


    @Override
    public List<Restriction> findAll() {
        return restrictionRepository.findAll();
    }

    @Override
    public List<Restriction> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Restriction> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<Restriction> findAllById(Iterable<Long> longs) {
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
    public void delete(Restriction entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> longs) {

    }

    @Override
    public void deleteAll(Iterable<? extends Restriction> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends Restriction> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Restriction> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Restriction> findById(Long aLong) {
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
    public <S extends Restriction> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Restriction> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Restriction> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Restriction getOne(Long aLong) {
        return null;
    }

    @Override
    public Restriction getById(Long aLong) {
        return null;
    }

    @Override
    public Restriction getReferenceById(Long aLong) {
        return null;
    }

    @Override
    public <S extends Restriction> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Restriction> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Restriction> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Restriction> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Restriction> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Restriction> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Restriction, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
