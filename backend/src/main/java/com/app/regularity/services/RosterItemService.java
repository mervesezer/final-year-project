package com.app.regularity.services;

import com.app.regularity.entities.RosterItem;
import com.app.regularity.repositories.RosterItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RosterItemService implements BaseService<RosterItem> {

    private final RosterItemRepository rosterItemRepository;
    @Override
    public void saveOrUpdate(RosterItem rosterItem) {
        rosterItemRepository.save(rosterItem);
    }

    @Override
    public List<RosterItem> findAll() {
        return rosterItemRepository.findAll();
    }

    @Override
    public RosterItem findOne(UUID id) {
        return rosterItemRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li liste itemi bulunamadı", id)));
    }

    @Override
    public void delete(UUID id) {
        var rosterItem =findOne(id);
        rosterItemRepository.delete(rosterItem);
    }
}
