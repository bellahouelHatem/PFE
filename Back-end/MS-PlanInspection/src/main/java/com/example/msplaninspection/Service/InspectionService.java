package com.example.msplaninspection.Service;

import com.example.msplaninspection.Model.Inspection;
import com.example.msplaninspection.repositories.InspectionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class InspectionService {
    @Autowired
    private InspectionRepo inspectionRepo;
    @GetMapping("/Inspection")
    public List<Inspection> getAll(){
        return inspectionRepo.findAll();
    }
    @GetMapping("/Inspection/{id}")
    public Inspection getForm(@PathVariable(name = "id") Long id){
        return inspectionRepo.findById(id).get();
    }
    @PutMapping("/Inspection/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody Inspection inspection){
        inspectionRepo.save(inspection);
    }

    @PostMapping("/Inspection")
    public void ajouter(@RequestBody Inspection form) {
        inspectionRepo.save(form);
    }
    @DeleteMapping("/Inspection/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        inspectionRepo.deleteById(id);
    }

}
