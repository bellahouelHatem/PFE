package com.example.msformulaire.Service;


import com.example.msformulaire.Model.FormUserData;
import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Repositories.FormUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class FormUseService {
    @Autowired
    private FormUserRepository formUserRepository;
    @GetMapping("/FormUserData")
    public List<FormUserData> getAll(){
        return formUserRepository.findAll();
    }
    @GetMapping("/FormUserData/{id}")
    public FormUserData getForm(@PathVariable(name = "id") Long id){
        return formUserRepository.findById(id).get();
    }
    @PutMapping("/FormUserData/{id}")
    public void updateForm(@PathVariable(name = "id") String id,@RequestBody FormUserData formUserData){
        FormUserData formUserData1 = formUserRepository.findByIdInspection(id);
        formUserData1.setForm(formUserData.getForm());
        formUserRepository.save(formUserData1);
    }

    @PostMapping("/FormUserData")
    public void ajouter(@RequestBody FormUserData form) {
        formUserRepository.save(form);
    }
    @GetMapping("/FormUserDatas/{id}")
    public FormUserData getFormInsp(@PathVariable(name = "id") String id){
        return formUserRepository.findByIdInspection(id);
    }
    @DeleteMapping("/FormUserData/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        formUserRepository.deleteById(id);
    }
    @PutMapping("/FormUserDataEtat/{id}")
    public void updateEtat(@PathVariable(name="id")String id){
        FormUserData formUserData = formUserRepository.findByIdInspection(id);
        formUserData.setStatus("confirmed");
        formUserRepository.save(formUserData);

    }
}
