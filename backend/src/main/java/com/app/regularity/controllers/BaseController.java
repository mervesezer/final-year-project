package com.app.regularity.controllers;

import java.util.List;
import java.util.UUID;

public interface BaseController<T> {
    void saveOrUpdate(T t);

    List<T> findAll();

    T findOne(UUID id);

    void delete(UUID id);
}
