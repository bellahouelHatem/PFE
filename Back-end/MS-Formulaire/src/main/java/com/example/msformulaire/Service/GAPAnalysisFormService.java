package com.example.msformulaire.Service;

import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Repositories.GAPAnalysisFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class GAPAnalysisFormService {

    @Autowired
    private GAPAnalysisFormRepository gapAnalysisFormRepository;

    @GetMapping("/GAPAnalysisForms")
    public List<GAPAnalysisForm> getAll(){
        return gapAnalysisFormRepository.findAll();
    }

    @GetMapping("/GAPAnalysisForm/{id}")
    public GAPAnalysisForm getForm(@PathVariable(name = "id") Long id){
        return gapAnalysisFormRepository.findById(id).get();
    } @GetMapping("/GAPAnalysisFormInsp/{id}")
    public List<GAPAnalysisForm> getFormInsp(@PathVariable(name = "id") Long id){
        return gapAnalysisFormRepository.findByIdInspection(id);
    }

    @PutMapping("/GAPAnalysisForm/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody GAPAnalysisForm formulaire){
        GAPAnalysisForm gapAnalysisForm = gapAnalysisFormRepository.findById(id).get();
        gapAnalysisForm.setQuestion1(formulaire.getQuestion1());
        gapAnalysisForm.setQuestion2(formulaire.getQuestion2());
        gapAnalysisForm.setQuestion3(formulaire.getQuestion3());
        gapAnalysisForm.setQuestion4(formulaire.getQuestion4());
        gapAnalysisForm.setQuestion5(formulaire.getQuestion5());
        gapAnalysisForm.setQuestion6(formulaire.getQuestion6());
        gapAnalysisForm.setQuestion7(formulaire.getQuestion7());
        gapAnalysisForm.setQuestion8(formulaire.getQuestion8());
        gapAnalysisForm.setQuestion9(formulaire.getQuestion9());
        gapAnalysisForm.setQuestion10(formulaire.getQuestion10());
        gapAnalysisForm.setQuestion11(formulaire.getQuestion11());
        gapAnalysisForm.setQuestion12(formulaire.getQuestion12());
        gapAnalysisForm.setQuestion13(formulaire.getQuestion13());
        gapAnalysisForm.setQuestion14(formulaire.getQuestion14());
        gapAnalysisForm.setQuestion15(formulaire.getQuestion15());
        gapAnalysisForm.setQuestion16(formulaire.getQuestion16());
        gapAnalysisForm.setQuestion17(formulaire.getQuestion17());
        gapAnalysisForm.setQuestion18(formulaire.getQuestion18());
        gapAnalysisForm.setQuestion19(formulaire.getQuestion19());
        gapAnalysisForm.setQuestion20(formulaire.getQuestion20());
        gapAnalysisForm.setQuestion21(formulaire.getQuestion21());
        gapAnalysisForm.setQuestion22(formulaire.getQuestion22());
        gapAnalysisForm.setQuestion23(formulaire.getQuestion23());
        gapAnalysisForm.setQuestion24(formulaire.getQuestion24());
        gapAnalysisForm.setQuestion25(formulaire.getQuestion25());
        gapAnalysisForm.setQuestion26(formulaire.getQuestion26());
        gapAnalysisForm.setQuestion27(formulaire.getQuestion27());
        gapAnalysisForm.setQuestion28(formulaire.getQuestion28());
        gapAnalysisForm.setQuestion29(formulaire.getQuestion29());
        gapAnalysisForm.setQuestion30(formulaire.getQuestion30());
        gapAnalysisForm.setQuestion31(formulaire.getQuestion31());
        gapAnalysisForm.setQuestion32(formulaire.getQuestion32());
        gapAnalysisForm.setQuestion33(formulaire.getQuestion33());
        gapAnalysisForm.setQuestion34(formulaire.getQuestion34());
        gapAnalysisForm.setQuestion35(formulaire.getQuestion35());
        gapAnalysisForm.setQuestion36(formulaire.getQuestion36());
        gapAnalysisForm.setQuestion37(formulaire.getQuestion37());
        gapAnalysisForm.setQuestion38(formulaire.getQuestion38());
        gapAnalysisForm.setQuestion39(formulaire.getQuestion39());
        gapAnalysisForm.setQuestion40(formulaire.getQuestion40());
        gapAnalysisForm.setQuestion41(formulaire.getQuestion41());
        gapAnalysisForm.setQuestion42(formulaire.getQuestion42());
        gapAnalysisForm.setQuestion43(formulaire.getQuestion43());
        gapAnalysisForm.setQuestion44(formulaire.getQuestion44());
        gapAnalysisForm.setQuestion45(formulaire.getQuestion45());
        gapAnalysisForm.setQuestion46(formulaire.getQuestion46());
        gapAnalysisForm.setQuestion47(formulaire.getQuestion47());
        gapAnalysisForm.setQuestion48(formulaire.getQuestion48());
        gapAnalysisForm.setQuestion49(formulaire.getQuestion49());
        gapAnalysisForm.setQuestion50(formulaire.getQuestion50());
        gapAnalysisForm.setQuestion51(formulaire.getQuestion51());
        gapAnalysisFormRepository.save(gapAnalysisForm);

    }

    @PostMapping("/GAPAnalysisForm")
    public void ajouter(@RequestBody GAPAnalysisForm form) {
        gapAnalysisFormRepository.save(form);
    }
    @DeleteMapping("/GAPAnalysisForm/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        gapAnalysisFormRepository.deleteById(id);
    }
}
