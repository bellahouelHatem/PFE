package com.example.app.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
@Entity
@Data
@AllArgsConstructor
@DiscriminatorValue("Inspector")
public class Inspector extends User{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "inspections_number")
    private int inspectionsNumber;
    public Inspector(){
        super();
    }
}
