package com.app.regularity.repositories;

import com.app.regularity.entities.Roster;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface RosterRepository extends JpaRepository<Roster, UUID> {
}
