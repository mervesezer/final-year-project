package com.app.regularity.controllers;

import com.app.regularity.entities.Budget;
import com.app.regularity.services.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/budgets")
public class BudgetController implements BaseController<Budget>{
    private final BudgetService budgetService;

    @GetMapping
    public List<Budget> findAll(){
        return budgetService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveOrUpdate(@RequestBody Budget budget) {
        budgetService.saveOrUpdate(budget);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        budgetService.delete(id);
    }

    @GetMapping("/{id}")
    public Budget findOne(@PathVariable UUID id) {
        return budgetService.findOne(id);
    }
}
