package com.app.regularity.entities;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
@Data
public class RosterItem extends BaseEntity {
    private String content;
    private boolean isCompleted;
    @ManyToOne
    private Roster roster;
}
