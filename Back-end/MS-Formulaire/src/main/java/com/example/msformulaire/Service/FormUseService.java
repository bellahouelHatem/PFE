package com.example.msformulaire.Service;


import com.example.msformulaire.Model.FormUserData;
import com.example.msformulaire.repositories.FormUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class FormUseService {
    @Autowired
    private FormUserRepo formUserRepo;
    @GetMapping("/FormUserData")
    public List<FormUserData> getAll(){
        return formUserRepo.findAll();
    }
    @GetMapping("/FormUserData/{id}")
    public FormUserData getForm(@PathVariable(name = "id") Long id){
        return formUserRepo.findById(id).get();
    }
    @PutMapping("/FormUserData/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody FormUserData formUserData){
        FormUserData formUserData1 = formUserRepo.findById(id).get();
        formUserData1.setForm(formUserData.getForm());
        formUserRepo.save(formUserData1);
    }

    @PostMapping("/FormUserData")
    public void ajouter(@RequestBody FormUserData form) {
        formUserRepo.save(form);
    }
    @DeleteMapping("/FormUserData/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        formUserRepo.deleteById(id);
    }
}
