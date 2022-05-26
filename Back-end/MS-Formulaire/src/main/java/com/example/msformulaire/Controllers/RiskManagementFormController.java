package com.example.msformulaire.Controllers;

import com.example.msformulaire.Model.RiskManagementForm;
import com.example.msformulaire.Model.RiskManagementFormPDFExporter;
import com.example.msformulaire.Service.RiskManagementFormService;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping(value = "/api")
public class RiskManagementFormController {

    @Autowired
    private RiskManagementFormService service;

    @GetMapping("/RiskManagementForm/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");

//        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
//        String currentDateTime = dateFormatter.format(new Date());
//        String headerKey = "Content-Disposition";
//        String headerValue = "attachment; filename=forms_" + currentDateTime + ".pdf";
//        response.setHeader(headerKey, headerValue);

        RiskManagementForm riskManagementForm =service.getForm((long)1);

        RiskManagementFormPDFExporter exporter = new RiskManagementFormPDFExporter(riskManagementForm);
        exporter.export(response);

    }
}
