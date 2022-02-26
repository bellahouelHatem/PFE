package com.example.msformulaire.Service;

import com.example.msformulaire.Model.Formulaire;
import com.example.msformulaire.repositories.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/api")
public class FormService {
    @Autowired
    private FormRepository formRepository;
    @GetMapping("/Forms")
    public List<Formulaire> getAll(){
        return formRepository.findAll();
    }
   @PostMapping("/Forms")
    public void ajouter(@RequestBody Formulaire e) {
        formRepository.save(e);
    }
}
