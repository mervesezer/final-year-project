package com.app.regularity.controllers;

import com.app.regularity.entities.Roster;
import com.app.regularity.services.RosterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rosters")
public class RosterControler implements BaseController<Roster> {
    private final RosterService rosterService;

    @GetMapping
    public List<Roster> findAll(){
        return rosterService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveOrUpdate(@RequestBody Roster roster) {
        rosterService.saveOrUpdate(roster);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        rosterService.delete(id);
    }

    @GetMapping("/{id}")
    public Roster findOne(@PathVariable UUID id) {
        return rosterService.findOne(id);
    }

}
