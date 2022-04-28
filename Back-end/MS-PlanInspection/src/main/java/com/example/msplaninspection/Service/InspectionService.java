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
    public Inspection getInspection(@PathVariable(name = "id") Long id){
        return inspectionRepo.findById(id).get();
    }
    @PutMapping("/Inspection/{id}")
    public void updateInspection(@PathVariable(name = "id") Long id,@RequestBody Inspection inspection){
        Inspection inspection1 = inspectionRepo.findById(id).get();
        inspection1.setTitle(inspection.getTitle());
        inspection1.setStartDate(inspection.getStartDate());
        inspection1.setEndDate(inspection.getEndDate());
        inspectionRepo.save(inspection1);
    }

    @PostMapping("/Inspection")
    public void addInspection(@RequestBody Inspection inspection) {
        inspectionRepo.save(inspection);
    }
    @DeleteMapping("/Inspection/{id}")
    public void DeleteInspection(@PathVariable(name = "id") Long id){
        inspectionRepo.deleteById(id);
    }

}
