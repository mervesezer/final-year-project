package com.app.regularity.services;

import java.util.List;
import java.util.UUID;

public interface BaseService<T> {
    void saveOrUpdate(T t);
    List<T> findAll();
    T findOne(UUID id);
    void delete(UUID id);
}
