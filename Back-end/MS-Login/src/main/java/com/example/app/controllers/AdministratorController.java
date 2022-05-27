package com.example.app.controllers;

import java.util.Date;
import java.util.List;
import com.example.app.entities.Administrator;
import com.example.app.repository.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AdministratorController {

    @Autowired
    private AdministratorRepository administratorRepository;

    // get all administrators
    @GetMapping("/administrators")
    public List<Administrator> getAllInspectors(){
        return administratorRepository.findAll();
    }

    // create administrators rest api
    @PostMapping("/administrators")
    public void createInspector(@RequestBody Administrator administrator) {
        administratorRepository.save(administrator);
    }

    // get administrators by id rest api
    @GetMapping("/administrators/{id}")
    public Administrator getInspectorById(@PathVariable(name = "id") Long id) {
        return administratorRepository.findById(id).get();
    }

    // update administrators rest api

    @PutMapping("/administrators/{id}")
    public void updateInspector(@PathVariable Long id, @RequestBody Administrator administratorDetails){
        Administrator administrator = (Administrator) administratorRepository.findById(id).get();

        administrator.setFirstName(administratorDetails.getFirstName());
        administrator.setLastName(administratorDetails.getLastName());
        administrator.setUserName(administratorDetails.getUsername());
        administrator.setPhoneNumber(administratorDetails.getPhoneNumber());
        administrator.setUpdatedAt(new Date());
        administratorRepository.save(administrator);
    }

    // delete administrators rest api
    @DeleteMapping("/administrators/{id}")
    public void deleteInspector(@PathVariable Long id){
        administratorRepository.deleteById(id);
    }


}

