package com.app.regularity.services;

import com.app.regularity.entities.Note;
import com.app.regularity.repositories.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class NoteService implements BaseService<Note> {
    private final NoteRepository noteRepository;

    public List<Note> findAll() {
        return noteRepository.findAll();
    }

    public Note findOne(UUID id) {
        return noteRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                String.format("%s id li not bulunamadı", id)));
    }
    public void saveOrUpdate(Note note){
        noteRepository.save(note);
    }

    public void delete (UUID id){
        var note =findOne(id);
        noteRepository.delete(note);
    }
}
