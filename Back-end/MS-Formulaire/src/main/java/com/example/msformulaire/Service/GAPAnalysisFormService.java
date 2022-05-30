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
    public GAPAnalysisForm getFormInsp(@PathVariable(name = "id") Long id){
        return gapAnalysisFormRepository.findByIdInspection(id);
    }
    @PutMapping("/GAPAnalysisFormEtat/{id}")
    public void updateEtat(@PathVariable(name="id")Long id){
        GAPAnalysisForm gapAnalysisForm = gapAnalysisFormRepository.findById(id).get();
        gapAnalysisForm.setEtat("confirmed");
        gapAnalysisFormRepository.save(gapAnalysisForm);

    }

    @PutMapping("/GAPAnalysisForm/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody GAPAnalysisForm formulaire){
        GAPAnalysisForm gapAnalysisForm = gapAnalysisFormRepository.findById(id).get();
        if(formulaire.getQuestion1()!= null){
            gapAnalysisForm.setQuestion1(formulaire.getQuestion1());
        }
        if(formulaire.getQuestion2()!= null) {
            gapAnalysisForm.setQuestion2(formulaire.getQuestion2());
        }
        if(formulaire.getQuestion3()!= null){
            gapAnalysisForm.setQuestion3(formulaire.getQuestion3());
        }
        if(formulaire.getQuestion4()!= null){
            gapAnalysisForm.setQuestion4(formulaire.getQuestion4());
        }
        if(formulaire.getQuestion5()!= null){
            gapAnalysisForm.setQuestion5(formulaire.getQuestion5());
        }
        if(formulaire.getQuestion6()!= null) {
            gapAnalysisForm.setQuestion6(formulaire.getQuestion6());
        }
        if(formulaire.getQuestion7()!= null){
            gapAnalysisForm.setQuestion7(formulaire.getQuestion7());
        }
        if(formulaire.getQuestion8()!= null){
            gapAnalysisForm.setQuestion8(formulaire.getQuestion8());
        }
        if(formulaire.getQuestion9()!= null){
            gapAnalysisForm.setQuestion9(formulaire.getQuestion9());
        }
        if(formulaire.getQuestion10()!= null){
            gapAnalysisForm.setQuestion10(formulaire.getQuestion10());
        }
        if(formulaire.getQuestion11()!= null){
            gapAnalysisForm.setQuestion11(formulaire.getQuestion11());
        }
        if(formulaire.getQuestion12()!= null){
            gapAnalysisForm.setQuestion12(formulaire.getQuestion12());
        }
        if(formulaire.getQuestion13()!= null){
            gapAnalysisForm.setQuestion13(formulaire.getQuestion13());
        }
        if(formulaire.getQuestion14()!= null){
            gapAnalysisForm.setQuestion14(formulaire.getQuestion14());
        }
        if(formulaire.getQuestion15()!= null){
            gapAnalysisForm.setQuestion15(formulaire.getQuestion15());
        }
        if(formulaire.getQuestion16()!= null){
            gapAnalysisForm.setQuestion16(formulaire.getQuestion16());
        }
        if(formulaire.getQuestion17()!= null){
            gapAnalysisForm.setQuestion17(formulaire.getQuestion17());
        }
        if(formulaire.getQuestion18()!= null){
            gapAnalysisForm.setQuestion18(formulaire.getQuestion18());
        }
        if(formulaire.getQuestion19()!= null){
            gapAnalysisForm.setQuestion19(formulaire.getQuestion19());
        }
        if(formulaire.getQuestion20()!= null){
            gapAnalysisForm.setQuestion20(formulaire.getQuestion20());
        }
        if(formulaire.getQuestion21()!= null){
            gapAnalysisForm.setQuestion21(formulaire.getQuestion21());
        }
        if(formulaire.getQuestion22()!= null){
            gapAnalysisForm.setQuestion22(formulaire.getQuestion22());
        }
        if(formulaire.getQuestion23()!= null){
            gapAnalysisForm.setQuestion23(formulaire.getQuestion23());
        }
        if(formulaire.getQuestion24()!= null){
            gapAnalysisForm.setQuestion24(formulaire.getQuestion24());
        }
        if(formulaire.getQuestion25()!= null){
            gapAnalysisForm.setQuestion25(formulaire.getQuestion25());
        }
        if(formulaire.getQuestion26()!= null){
            gapAnalysisForm.setQuestion26(formulaire.getQuestion26());
        }
        if(formulaire.getQuestion27()!= null){
            gapAnalysisForm.setQuestion27(formulaire.getQuestion27());
        }
        if(formulaire.getQuestion28()!= null){
            gapAnalysisForm.setQuestion28(formulaire.getQuestion28());
        }
        if(formulaire.getQuestion29()!= null){
            gapAnalysisForm.setQuestion29(formulaire.getQuestion29());
        }
        if(formulaire.getQuestion30()!= null){
            gapAnalysisForm.setQuestion30(formulaire.getQuestion30());
        }
        if(formulaire.getQuestion31()!= null){
            gapAnalysisForm.setQuestion31(formulaire.getQuestion31());
        }
        if(formulaire.getQuestion32()!= null){
            gapAnalysisForm.setQuestion32(formulaire.getQuestion32());
        }
        if(formulaire.getQuestion33()!= null){
            gapAnalysisForm.setQuestion33(formulaire.getQuestion33());
        }
        if(formulaire.getQuestion34()!= null){
            gapAnalysisForm.setQuestion34(formulaire.getQuestion34());
        }
        if(formulaire.getQuestion35()!= null){
            gapAnalysisForm.setQuestion35(formulaire.getQuestion35());
        }
        if(formulaire.getQuestion36()!= null){
            gapAnalysisForm.setQuestion36(formulaire.getQuestion36());
        }
        if(formulaire.getQuestion37()!= null){
            gapAnalysisForm.setQuestion37(formulaire.getQuestion37());
        }
        if(formulaire.getQuestion38()!= null){
            gapAnalysisForm.setQuestion38(formulaire.getQuestion38());
        }
        if(formulaire.getQuestion39()!= null){
            gapAnalysisForm.setQuestion39(formulaire.getQuestion39());
        }
        if(formulaire.getQuestion40()!= null) {
            gapAnalysisForm.setQuestion40(formulaire.getQuestion40());
        }
        if(formulaire.getQuestion41()!= null){
            gapAnalysisForm.setQuestion41(formulaire.getQuestion41());
        }
        if(formulaire.getQuestion42()!= null){
            gapAnalysisForm.setQuestion42(formulaire.getQuestion42());
        }
        if(formulaire.getQuestion43()!= null) {
            gapAnalysisForm.setQuestion43(formulaire.getQuestion43());
        }
        if(formulaire.getQuestion44()!= null){
            gapAnalysisForm.setQuestion44(formulaire.getQuestion44());
        }
        if(formulaire.getQuestion45()!= null){
            gapAnalysisForm.setQuestion45(formulaire.getQuestion45());
        }
        if(formulaire.getQuestion46()!= null) {
            gapAnalysisForm.setQuestion46(formulaire.getQuestion46());
        }
        if(formulaire.getQuestion47()!= null) {
            gapAnalysisForm.setQuestion47(formulaire.getQuestion47());
        }
        if(formulaire.getQuestion48()!= null){
            gapAnalysisForm.setQuestion48(formulaire.getQuestion48());
        }
        if(formulaire.getQuestion49()!= null) {
            gapAnalysisForm.setQuestion49(formulaire.getQuestion49());
        }
        if(formulaire.getQuestion50()!= null){
            gapAnalysisForm.setQuestion50(formulaire.getQuestion50());
        }
        if(formulaire.getQuestion51()!= null) {
            gapAnalysisForm.setQuestion51(formulaire.getQuestion51());
        }
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
