package com.example.msformulaire.Controllers;

import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Model.GAPAnalysisFormPDFExporter;
import com.example.msformulaire.Service.GAPAnalysisFormService;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "/api")
public class GAPAnalysisFormController {
    @Autowired
    private GAPAnalysisFormService service;

    @GetMapping("/GAPAnalysisForm/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");

//        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
//        String currentDateTime = dateFormatter.format(new Date());
//        String headerKey = "Content-Disposition";
//        String headerValue = "attachment; filename=forms_" + currentDateTime + ".pdf";
//        response.setHeader(headerKey, headerValue);

        GAPAnalysisForm gapAnalysisForm =service.getForm((long)1);

        GAPAnalysisFormPDFExporter exporter = new GAPAnalysisFormPDFExporter(gapAnalysisForm);
        exporter.export(response);
}
}
