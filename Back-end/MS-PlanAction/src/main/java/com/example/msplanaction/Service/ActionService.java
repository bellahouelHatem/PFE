package com.example.msplanaction.Service;

import com.example.msplanaction.Model.Action;
import com.example.msplanaction.Repository.ActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class ActionService {
    @Autowired
    private ActionRepository actionRepository;
    @GetMapping("/Inspection")
    public List<Action> getAll(){
        return actionRepository.findAll();
    }
    @GetMapping("/Inspection/{id}")
    public Action getInspection(@PathVariable(name = "id") Long id){
        return actionRepository.findById(id).get();
    }
    @PutMapping("/Inspection/{id}")
    public void updateInspection(@PathVariable(name = "id") Long id,@RequestBody Action action){
        Action action1 = actionRepository.findById(id).get();
        action1.setTitle(action.getTitle());
        action1.setStartDate(action.getStartDate());
        action1.setEndDate(action.getEndDate());
        actionRepository.save(action1);
    }

    @PostMapping("/Inspection")
    public void addInspection(@RequestBody Action action) {
        actionRepository.save(action);
    }
    @DeleteMapping("/Inspection/{id}")
    public void DeleteInspection(@PathVariable(name = "id") Long id){
        actionRepository.deleteById(id);
    }
}