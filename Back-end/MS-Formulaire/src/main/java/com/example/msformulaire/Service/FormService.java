package com.example.msformulaire.Service;

import com.example.msformulaire.Model.Formulaire;
import com.example.msformulaire.repositories.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class FormService {
    @Autowired
    private FormRepository formRepository;
    @GetMapping("/Forms")
    public List<Formulaire> getAll(){
        return formRepository.findAll();
    }
    @GetMapping("/Forms/{id}")
    public Formulaire getForm(@PathVariable(name = "id") Long id){
        return formRepository.findById(id).get();
    }
    @PutMapping("/Forms/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody Formulaire formulaire){
        Formulaire formulaire1 = formRepository.findById(id).get();
        formulaire1.setForm(formulaire.getForm());
        formulaire1.setTitre(formulaire.getTitre());
        formulaire1.setType(formulaire.getType());
        formRepository.save(formulaire1);
    }

    @PostMapping("/Forms")
    public void ajouter(@RequestBody Formulaire form) {
        formRepository.save(form);
    }
    @DeleteMapping("/Forms/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        formRepository.deleteById(id);
    }
}