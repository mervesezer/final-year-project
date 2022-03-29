package com.app.regularity.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Data
public class Note extends BaseEntity {
    private String title;
    private String body;
}
