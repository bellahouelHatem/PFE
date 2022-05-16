package com.thecodeveal.app.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.thecodeveal.app.Port.Port;
import com.thecodeveal.app.entities.Inspector;
import com.thecodeveal.app.entities.User;
import com.thecodeveal.app.repository.InspectorRepository;
import com.thecodeveal.app.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
public class InspectorController {

    @Autowired
    private InspectorRepository inspectorRepository;

    // get all employees
    @GetMapping("/inspectors")
    public List<Inspector> getAllInspectors(){
        return inspectorRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/inspectors")
    public void createInspector(@RequestBody Inspector inspector) {
        inspectorRepository.save(inspector);
    }

    // get employee by id rest api
    @GetMapping("/inspectors/{id}")
    public Inspector getInspectorById(@PathVariable(name = "id") Long id) {
        return inspectorRepository.findById(id).get();
    }

    // update employee rest api

    @PutMapping("/inspectors/{id}")
    public void updateInspector(@PathVariable Long id, @RequestBody Inspector inspectorDetails){
        Inspector inspector = (Inspector) inspectorRepository.findById(id).get();

        inspector.setFirstName(inspectorDetails.getFirstName());
        inspector.setLastName(inspectorDetails.getLastName());
        inspector.setUserName(inspectorDetails.getUsername());
        inspector.setPhoneNumber(inspectorDetails.getPhoneNumber());
        inspector.setUpdatedAt(new Date());
        inspectorRepository.save(inspector);
    }

    // delete employee rest api
    @DeleteMapping("/inspectors/{id}")
    public void deleteInspector(@PathVariable Long id){
        inspectorRepository.deleteById(id);
    }


}

