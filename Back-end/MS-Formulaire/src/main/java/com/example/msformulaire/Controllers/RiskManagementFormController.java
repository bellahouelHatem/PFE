package com.example.msformulaire.Controllers;

import com.example.msformulaire.Model.RiskManagementForm;
import com.example.msformulaire.Model.RiskManagementFormPDFExporter;
import com.example.msformulaire.Service.RiskManagementFormService;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/RiskManagementForm/export/pdf/{id}")
    public void exportToPDF(HttpServletResponse response, @PathVariable Long id) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        RiskManagementForm riskManagementForm =service.getFormInsp(id);
        RiskManagementFormPDFExporter exporter = new RiskManagementFormPDFExporter(riskManagementForm);
        exporter.export(response);

    }
}
