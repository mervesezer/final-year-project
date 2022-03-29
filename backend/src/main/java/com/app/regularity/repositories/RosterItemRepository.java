package com.app.regularity.repositories;

import com.app.regularity.entities.RosterItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RosterItemRepository extends JpaRepository<RosterItem, UUID> {
}
