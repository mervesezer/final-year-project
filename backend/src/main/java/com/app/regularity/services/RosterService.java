package com.app.regularity.services;

import com.app.regularity.entities.Roster;
import com.app.regularity.repositories.RosterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RosterService implements BaseService<Roster> {
    private final RosterRepository rosterRepository;

    public List<Roster> findAll() {
        return rosterRepository.findAll();
    }

    public Roster findOne(UUID id) {
        return rosterRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li liste bulunamadı", id)));
    }
    public void saveOrUpdate(Roster roster){
        rosterRepository.save(roster);
    }

    public void delete (UUID id){
        var roster =findOne(id);
        rosterRepository.delete(roster);
    }
}
