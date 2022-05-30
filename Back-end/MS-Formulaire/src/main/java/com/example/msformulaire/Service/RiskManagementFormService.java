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
    public List<RiskManagementForm> getFormInsp(@PathVariable(name = "id") Long id){
        return riskManagementFormRepository.findByIdInspection(id);
    }

    @PutMapping("/RiskManagementForm/{id}")
    public void updateForm(@PathVariable(name = "id") Long id,@RequestBody RiskManagementForm formulaire){
        RiskManagementForm riskManagementForm = riskManagementFormRepository.findById(id).get();
        riskManagementForm.setQuestion1(formulaire.getQuestion1());
        riskManagementForm.setQuestion2(formulaire.getQuestion2());
        riskManagementForm.setQuestion3(formulaire.getQuestion3());
        riskManagementForm.setQuestion4(formulaire.getQuestion4());
        riskManagementForm.setQuestion5(formulaire.getQuestion5());
        riskManagementForm.setQuestion6(formulaire.getQuestion6());
        riskManagementForm.setQuestion7(formulaire.getQuestion7());
        riskManagementForm.setQuestion8(formulaire.getQuestion8());
        riskManagementForm.setQuestion9(formulaire.getQuestion9());
        riskManagementForm.setQuestion10(formulaire.getQuestion10());
        riskManagementForm.setQuestion11(formulaire.getQuestion11());
        riskManagementForm.setQuestion12(formulaire.getQuestion12());
        riskManagementForm.setQuestion13(formulaire.getQuestion13());
        riskManagementForm.setQuestion14(formulaire.getQuestion14());
        riskManagementForm.setQuestion15(formulaire.getQuestion15());
        riskManagementForm.setQuestion16(formulaire.getQuestion16());
        riskManagementForm.setQuestion17(formulaire.getQuestion17());
        riskManagementForm.setQuestion18(formulaire.getQuestion18());
        riskManagementForm.setQuestion19(formulaire.getQuestion19());
        riskManagementForm.setQuestion20(formulaire.getQuestion20());
        riskManagementForm.setQuestion21(formulaire.getQuestion21());
        riskManagementForm.setQuestion22(formulaire.getQuestion22());
        riskManagementForm.setQuestion23(formulaire.getQuestion23());
        riskManagementForm.setQuestion24(formulaire.getQuestion24());
        riskManagementForm.setQuestion25(formulaire.getQuestion25());
        riskManagementForm.setQuestion26(formulaire.getQuestion26());
        riskManagementForm.setQuestion27(formulaire.getQuestion27());
        riskManagementForm.setQuestion28(formulaire.getQuestion28());
        riskManagementForm.setQuestion29(formulaire.getQuestion29());
        riskManagementForm.setQuestion30(formulaire.getQuestion30());
        riskManagementForm.setQuestion31(formulaire.getQuestion31());
        riskManagementForm.setQuestion32(formulaire.getQuestion32());
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