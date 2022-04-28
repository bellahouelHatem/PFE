package Service;

import Model.Action;
import Repositories.ActionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class ServiceAction {
    @Autowired
    private ActionRepo actionRepo;
    @GetMapping("/Inspection")
    public List<Action> getAll(){
        return actionRepo.findAll();
    }
    @GetMapping("/Inspection/{id}")
    public Action getInspection(@PathVariable(name = "id") Long id){
        return actionRepo.findById(id).get();
    }
    @PutMapping("/Inspection/{id}")
    public void updateInspection(@PathVariable(name = "id") Long id,@RequestBody Action action){
        Action action1 = actionRepo.findById(id).get();
        action1.setTitle(action.getTitle());
        action1.setStartDate(action.getStartDate());
        action1.setEndDate(action.getEndDate());
        actionRepo.save(action1);
    }

    @PostMapping("/Inspection")
    public void addInspection(@RequestBody Action action) {
        actionRepo.save(action);
    }
    @DeleteMapping("/Inspection/{id}")
    public void DeleteInspection(@PathVariable(name = "id") Long id){
        actionRepo.deleteById(id);
    }
}
