package com.app.regularity.entities;

import lombok.Data;

import javax.persistence.Entity;
import java.util.Date;

@Entity
@Data
public class Event extends BaseEntity{
    private String content;
    private Date reminderDate;
}
