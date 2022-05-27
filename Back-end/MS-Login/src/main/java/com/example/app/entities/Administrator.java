package com.example.app.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("Administrator")
public class Administrator extends User{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;
}