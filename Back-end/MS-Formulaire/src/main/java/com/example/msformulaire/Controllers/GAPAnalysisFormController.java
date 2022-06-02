package com.example.msformulaire.Controllers;

import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Model.GAPAnalysisFormPDFExporter;
import com.example.msformulaire.Service.GAPAnalysisFormService;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "/api")
public class GAPAnalysisFormController {
    @Autowired
    private GAPAnalysisFormService service;

    @GetMapping("/GAPAnalysisForm/export/pdf/{id}")
    public void exportToPDF(HttpServletResponse response, @PathVariable Long id) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        GAPAnalysisForm gapAnalysisForm =service.getFormInsp(id);
        GAPAnalysisFormPDFExporter exporter = new GAPAnalysisFormPDFExporter(gapAnalysisForm);
        exporter.export(response);
}
}
