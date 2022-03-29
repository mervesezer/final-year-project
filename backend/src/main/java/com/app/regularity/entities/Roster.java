package com.app.regularity.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Roster extends BaseEntity{
    private String title;
    private String content;
    @OneToMany
    private List<RosterItem> items;
}
