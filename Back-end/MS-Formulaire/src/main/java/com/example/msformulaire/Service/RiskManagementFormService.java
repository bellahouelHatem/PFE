package com.example.msformulaire.Service;

import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Model.RiskManagementForm;
import com.example.msformulaire.Model.RiskManagementFormPDFExporter;
import com.example.msformulaire.Repositories.RiskManagementFormRepository;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class RiskManagementFormService {

    @Autowired
    private RiskManagementFormRepository riskManagementFormRepository;

    @GetMapping("/RiskManagementForms")
    public List<RiskManagementForm> getAll(){
        return riskManagementFormRepository.findAll();
    }

    @GetMapping("/RiskManagementForm/{id}")
    public RiskManagementForm getForm(@PathVariable(name = "id") Long id){
        return riskManagementFormRepository.findById(id).get();
    }@GetMapping("/RiskManagementFormInsp/{id}")
    public RiskManagementForm getFormInsp(@PathVariable(name = "id") Long id){
        return riskManagementFormRepository.findByIdInspection(id);
    }
    @PutMapping("/RiskManagementFormEtat/{id}")
    public void updateEtat(@PathVariable(name="id")Long id){
        RiskManagementForm riskManagementForm = riskManagementFormRepository.findById(id).get();
        riskManagementForm.setEtat("confirmed");
        riskManagementFormRepository.save(riskManagementForm);

    }

    @PutMapping("/RiskManagementForm/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody RiskManagementForm formulaire){
        RiskManagementForm riskManagementForm = riskManagementFormRepository.findById(id).get();
        if(formulaire.getQuestion1()!= null){
        riskManagementForm.setQuestion1(formulaire.getQuestion1());}
        if(formulaire.getQuestion2()!= null){
        riskManagementForm.setQuestion2(formulaire.getQuestion2());}
        if(formulaire.getQuestion3()!= null){
        riskManagementForm.setQuestion3(formulaire.getQuestion3());}
        if(formulaire.getQuestion4()!= null){
        riskManagementForm.setQuestion4(formulaire.getQuestion4());}
        if(formulaire.getQuestion5()!= null){
        riskManagementForm.setQuestion5(formulaire.getQuestion5());}
        if(formulaire.getQuestion6()!= null){
        riskManagementForm.setQuestion6(formulaire.getQuestion6());}
        if(formulaire.getQuestion7()!= null){
        riskManagementForm.setQuestion7(formulaire.getQuestion7());}
        if(formulaire.getQuestion8()!= null){
        riskManagementForm.setQuestion8(formulaire.getQuestion8());}
        if(formulaire.getQuestion9()!= null){
        riskManagementForm.setQuestion9(formulaire.getQuestion9());}
        if(formulaire.getQuestion10()!= null){
        riskManagementForm.setQuestion10(formulaire.getQuestion10());}
        if(formulaire.getQuestion11()!= null){
        riskManagementForm.setQuestion11(formulaire.getQuestion11());}
        if(formulaire.getQuestion12()!= null){
        riskManagementForm.setQuestion12(formulaire.getQuestion12());}
        if(formulaire.getQuestion13()!= null){
        riskManagementForm.setQuestion13(formulaire.getQuestion13());}
        if(formulaire.getQuestion14()!= null){
        riskManagementForm.setQuestion14(formulaire.getQuestion14());}
        if(formulaire.getQuestion15()!= null){
        riskManagementForm.setQuestion15(formulaire.getQuestion15());}
        if(formulaire.getQuestion16()!= null){
        riskManagementForm.setQuestion16(formulaire.getQuestion16());}
        if(formulaire.getQuestion17()!= null){
        riskManagementForm.setQuestion17(formulaire.getQuestion17());}
        if(formulaire.getQuestion18()!= null){
        riskManagementForm.setQuestion18(formulaire.getQuestion18());}
        if(formulaire.getQuestion19()!= null){
        riskManagementForm.setQuestion19(formulaire.getQuestion19());}
        if(formulaire.getQuestion20()!= null){
        riskManagementForm.setQuestion20(formulaire.getQuestion20());}
        if(formulaire.getQuestion21()!= null){
        riskManagementForm.setQuestion21(formulaire.getQuestion21());}
        if(formulaire.getQuestion22()!= null){
        riskManagementForm.setQuestion22(formulaire.getQuestion22());}
        if(formulaire.getQuestion23()!= null){
        riskManagementForm.setQuestion23(formulaire.getQuestion23());}
        if(formulaire.getQuestion24()!= null){
        riskManagementForm.setQuestion24(formulaire.getQuestion24());}
        if(formulaire.getQuestion25()!= null){
        riskManagementForm.setQuestion25(formulaire.getQuestion25());}
        if(formulaire.getQuestion26()!= null){
        riskManagementForm.setQuestion26(formulaire.getQuestion26());}
        if(formulaire.getQuestion27()!= null){
        riskManagementForm.setQuestion27(formulaire.getQuestion27());}
        if(formulaire.getQuestion28()!= null){
        riskManagementForm.setQuestion28(formulaire.getQuestion28());}
        if(formulaire.getQuestion29()!= null){
        riskManagementForm.setQuestion29(formulaire.getQuestion29());}
        if(formulaire.getQuestion30()!= null){
        riskManagementForm.setQuestion30(formulaire.getQuestion30());}
        if(formulaire.getQuestion31()!= null){
        riskManagementForm.setQuestion31(formulaire.getQuestion31());}
        if(formulaire.getQuestion32()!= null){
        riskManagementForm.setQuestion32(formulaire.getQuestion32());}
        riskManagementFormRepository.save(riskManagementForm);
    }

    @PostMapping("/RiskManagementForm")
    public void ajouter(@RequestBody RiskManagementForm form) {
        riskManagementFormRepository.save(form);
    }

    @DeleteMapping("/RiskManagementForm/{id}")
    public void Delete(@PathVariable(name = "id") Long id){
        riskManagementFormRepository.deleteById(id);
    }
}