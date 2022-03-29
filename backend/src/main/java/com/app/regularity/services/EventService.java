package com.app.regularity.services;

import com.app.regularity.entities.Event;
import com.app.regularity.repositories.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EventService implements BaseService<Event> {
    private final EventRepository eventRepository;
    @Override
    public void saveOrUpdate(Event event) {
        eventRepository.save(event);

    }

    @Override
    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    @Override
    public Event findOne(UUID id) {
        return eventRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li etkinlik bulunamadı", id)));
    }

    @Override
    public void delete(UUID id) {
        var event =findOne(id);
        eventRepository.delete(event);

    }
}
