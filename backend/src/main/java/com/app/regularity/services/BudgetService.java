package com.app.regularity.services;

import com.app.regularity.entities.Budget;
import com.app.regularity.repositories.BudgetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BudgetService implements BaseService<Budget> {
    private final BudgetRepository budgetRepository;

    public List<Budget> findAll() {
        return budgetRepository.findAll();
    }

    public Budget findOne(UUID id) {
        return budgetRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li bütçe bulunamadı", id)));
    }

    public void saveOrUpdate(Budget budget){
        budgetRepository.save(budget);
    }

    public void delete (UUID id){
        var budget =findOne(id);
        budgetRepository.delete(budget);
    }
}
