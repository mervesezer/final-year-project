package com.app.regularity.entities;

import lombok.Data;
import javax.persistence.Entity;

@Entity
@Data
public class Budget extends BaseEntity {
    private int expenditure;
    private int income;
}
