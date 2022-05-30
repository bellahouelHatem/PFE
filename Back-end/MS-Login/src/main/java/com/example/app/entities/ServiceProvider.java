package com.example.app.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Data
@AllArgsConstructor
@DiscriminatorValue("ServiceProvider")
public class ServiceProvider extends User{

    @Column(name = "name")
    private String name;

    @Column(name = "localion")
    private String location;

    @Column(name = "locked")
    private Boolean locked = false;


    public   ServiceProvider(){
        super();
    }
}