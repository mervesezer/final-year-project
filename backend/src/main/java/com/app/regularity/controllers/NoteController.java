package com.app.regularity.controllers;

import com.app.regularity.entities.Note;
import com.app.regularity.services.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notes")
public class NoteController implements BaseController<Note> {
    private final NoteService noteService;

    @GetMapping
    public List<Note> findAll(){
        return noteService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveOrUpdate(@RequestBody Note note) {
        noteService.saveOrUpdate(note);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        noteService.delete(id);
    }

    @GetMapping("/{id}")
    public Note findOne(@PathVariable UUID id) {
        return noteService.findOne(id);
    }
}
