package com.app.regularity.repositories;

import com.app.regularity.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface NoteRepository extends JpaRepository<Note, UUID> {
}
