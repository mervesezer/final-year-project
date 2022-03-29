package com.app.regularity.controllers;

import com.app.regularity.entities.Event;
import com.app.regularity.services.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/events")
public class EventController implements BaseController<Event>{
    private final EventService eventService;

    @Override
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveOrUpdate(@RequestBody Event event) {
        eventService.saveOrUpdate(event);

    }

    @Override
    @GetMapping
    public List<Event> findAll() {
        return eventService.findAll();
    }

    @Override
    @GetMapping("/{id}")
    public Event findOne(@PathVariable UUID id) {
        return eventService.findOne(id);
    }

    @Override
    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        eventService.delete(id);

    }
}
