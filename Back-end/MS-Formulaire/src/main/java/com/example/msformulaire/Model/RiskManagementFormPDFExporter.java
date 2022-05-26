package com.example.msformulaire.Model;


import java.awt.Color;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

public class RiskManagementFormPDFExporter {
    private RiskManagementForm riskManagementForm;

    PdfPCell cell;
    Color color = Color.getHSBColor(255,204,153);
    Color color1 = Color.getHSBColor(255,229,204);

    private List<String> questions =new ArrayList<>(Arrays.asList(
            "\n1. Mandate and Commitment Have you: \n(a) defined and endorsed a risk management policy \n(b) determined risk performance indicators \n(c) aligned risk objectives and indicators to organizational objectives and indicators \n(d) ensured legal and regulatory compliance\n ",
            "\n2. Organization and its context in designing your risk framework have you: \n(a) evaluated external context \n(b) evaluated internal context\n ",
            "\n3. Does your policy include: \n(a) rationale for managing risk \n(b) accountabilities \n(c) how conflict of interest is dealt with \n(d) links between organizations objectives and risk policy \n(e) commitment to resource risk management \n(f) how risk performance managed, measured and reported \n(g) commitment to review and improve the policy\n ",
            "\n4. Have you established accountability, authority and competence for managing risk?\n ",
            "\n5. Do you: \n(a) identify risk owners \n(b) identify responsibility for your framework \n(c) identify risk responsibilities \n(d) establish performance measures and reporting and escalation processes \n(e) ensure appropriate levels of recognition\n ",
            "\n6. Is risk management embedded into your practices and processes in a way that is relevant, effective and efficient?\n ",
            "\n7. Have you allocated appropriate resources for risk management?\n ",
            "\n8. Including a consideration of: \n(a) people \n(b) organizational processes, methods and tools \n(c) documented processes and procedures \n(d) information and knowledge management systems \n(e) training\n ",
            "\n9. Reporting Have you established internal communication and reporting mechanisms for risk management?\n ",
            "\n10. Reporting Have you determined and implemented how you will communicate with external stakeholders?\n ",
            "\n11. In implementing your framework can you show you have: \n(a) applied risk management policy to organizational processes \n(b) complied with legal and regulatory requirements \n(c) ensured decision making is aligned with risk management processes \n(d) held information and training sessions \n(e) communicated and consulted with stakeholders\n ",
            "\n12. Do you: \n(a) measure risk management performance against indicators \n(b) measure progress against risk management plans \n(c) review whether the framework and policy are still appropriate \n(d) report on risk \n(e) review the effectiveness of the framework Do you continually improve the risk policy, framework, plans?\n ",
            "\n1. General Is the risk management process: \n(a) an integral part of management \n(b) embedded in culture and practices \n(c) tailored to your organisation\n ",
            "\n2. Can you demonstrate communication and consultation with external and internal stakeholders at all stages of the risk management process?\n ",
            "\n3. Can you demonstrate you have considered internal and external context, factors and how they relate to the scope of the particular risk management process?\n ",
            "\n4. Have you defined the criteria to be used to evaluate the significance of risk?\n ",
            "\n5. Have you identified sources of risk, areas of impact and their causes and potential consequences?\n ",
            "\n6. Have you applied risk identification tools and techniques?\n ",
            "\n7. Do you use people with appropriate knowledge for risk identification?\n ",
            "\n8. Do you have processes to consider causes and sources of risks, their consequences and the likelihood of the consequences to occur?\n ",
            "\n9. Do you compare the level of risk found during analysis process to your risk criteria to determine the need for treatment or further analysis?\n ",
            "\n10. Options Do you have processes for selecting treatment options that consider stakeholders, legal, regulatory and context?\n ",
            "\n11. Do you have processes to identify new risks introduced through treatment?\n ",
            "\n12. Does the treatment plan identify priority order for risk treatments?\n ",
            "\n13. Plans Do you document how your risk treatment will be implemented?\n ",
            "\n14. Do you include: \n(a) reasons for selection and expected benefits \n(b) responsibilities \n(c) proposed actions \n(d) resource requirements \n(e) performance measures \n(f) reporting and monitoring requirements \n(g) timing\n ",
            "\n15. Have you included regular checks or surveillance in your risk processes at all levels?\n ",
            "\n16. Have you defined responsibilities for monitoring and review?\n ",
            "\n17. Do you check progress of risk treatment plans?\n ",
            "\n18. Do you report results of monitor and review?\n ",
            "\n19. Are your processes traceable?\n ",
            "\n20. Have you retained suitable records?\n "
    ));

    public RiskManagementFormPDFExporter(RiskManagementForm riskManagementForm) throws IOException {
        this.riskManagementForm = riskManagementForm;
    }

    private void writeTableHeader(PdfPTable table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(color);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);

        Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(Color.WHITE);

        cell.setPhrase(new Phrase("\nQuestion\n ", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("\nResponse\n ", font));
        table.addCell(cell);
    }

    private void writeTableData(PdfPTable table) {
        Font font=new Font();
        font.setColor(Color.WHITE);
        cell=new PdfPCell(new Phrase("\n\tFramework\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(0));
        table.addCell("\n"+riskManagementForm.getQuestion1());
        table.addCell(questions.get(1));
        table.addCell("\n"+riskManagementForm.getQuestion2());
        table.addCell(questions.get(2));
        table.addCell("\n"+riskManagementForm.getQuestion3());
        table.addCell(questions.get(3));
        table.addCell("\n"+riskManagementForm.getQuestion4());
        table.addCell(questions.get(4));
        table.addCell("\n"+riskManagementForm.getQuestion5());
        table.addCell(questions.get(5));
        table.addCell("\n"+riskManagementForm.getQuestion6());
        table.addCell(questions.get(6));
        table.addCell("\n"+riskManagementForm.getQuestion7());
        table.addCell(questions.get(7));
        table.addCell("\n"+riskManagementForm.getQuestion8());
        table.addCell(questions.get(8));
        table.addCell("\n"+riskManagementForm.getQuestion9());
        table.addCell(questions.get(9));
        table.addCell("\n"+riskManagementForm.getQuestion10());
        table.addCell(questions.get(10));
        table.addCell("\n"+riskManagementForm.getQuestion11());
        table.addCell(questions.get(11));
        table.addCell("\n"+riskManagementForm.getQuestion12());
        cell=new PdfPCell(new Phrase("\n\tProcess\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(12));
        table.addCell("\n"+riskManagementForm.getQuestion13());
        table.addCell(questions.get(13));
        table.addCell("\n"+riskManagementForm.getQuestion14());
        table.addCell(questions.get(14));
        table.addCell("\n"+riskManagementForm.getQuestion15());
        table.addCell(questions.get(15));
        table.addCell("\n"+riskManagementForm.getQuestion16());
        table.addCell(questions.get(16));
        table.addCell("\n"+riskManagementForm.getQuestion17());
        table.addCell(questions.get(17));
        table.addCell("\n"+riskManagementForm.getQuestion18());
        table.addCell(questions.get(18));
        table.addCell("\n"+riskManagementForm.getQuestion19());
        table.addCell(questions.get(19));
        table.addCell("\n"+riskManagementForm.getQuestion20());
        table.addCell(questions.get(20));
        table.addCell("\n"+riskManagementForm.getQuestion21());
        table.addCell(questions.get(21));
        table.addCell("\n"+riskManagementForm.getQuestion22());
        table.addCell(questions.get(22));
        table.addCell("\n"+riskManagementForm.getQuestion23());
        table.addCell(questions.get(23));
        table.addCell("\n"+riskManagementForm.getQuestion24());
        table.addCell(questions.get(24));
        table.addCell("\n"+riskManagementForm.getQuestion25());
        table.addCell(questions.get(25));
        table.addCell("\n"+riskManagementForm.getQuestion26());
        table.addCell(questions.get(26));
        table.addCell("\n"+riskManagementForm.getQuestion27());
        table.addCell(questions.get(27));
        table.addCell("\n"+riskManagementForm.getQuestion28());
        table.addCell(questions.get(28));
        table.addCell("\n"+riskManagementForm.getQuestion29());
        table.addCell(questions.get(29));
        table.addCell("\n"+riskManagementForm.getQuestion30());
        table.addCell(questions.get(30));
        table.addCell("\n"+riskManagementForm.getQuestion31());
        table.addCell(questions.get(31));
        table.addCell("\n"+riskManagementForm.getQuestion32());

    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();

        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Paragraph paragraph = new Paragraph("Iso 31000 Risk Management Report", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(paragraph);

        PdfPTable table = new PdfPTable(2);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {4f, 1f});
        table.setSpacingBefore(100);



        //insertCell(table, "", Element.ALIGN_LEFT, 4, bfBold12);

        writeTableHeader(table);
        writeTableData(table);

        document.add(table);

        document.close();

    }
}
