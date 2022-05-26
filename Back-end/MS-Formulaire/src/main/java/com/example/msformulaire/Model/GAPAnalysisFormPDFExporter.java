package com.example.msformulaire.Model;

import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GAPAnalysisFormPDFExporter {
    private GAPAnalysisForm gapAnalysisForm;

    PdfPCell cell;
    Color color = Color.getHSBColor(255,204,153);
    Color color1 = Color.getHSBColor(255,229,204);

    private List<String> questions =new ArrayList<>(Arrays.asList(
            "\n1. Have all external and internal matters been identified that are important to the organisation's goals and the fulfilment of customer satisfaction and the strategic administration of the company?\n ",
            "\n2. Is your QMS implemented and does it include a description of the required processes and their sequence and interaction?\n ",
            "\n3. Have the criteria been determined to control these processes and their interaction?\n ",
            "\n4. Have the relevant needs and expectations of the parties involved been determined for the QMS?\n ",
            "\n5. Have all the responsibilities, methods, measurement procedures and related performance indicators necessary to ensure effective operation and control been put in place?\n ",
            "\n6. Has the scope of the QMS been defined taking into account all external and internal issues, the needs of the parties involved and the scope of the products and services?\n ",
            "\n1. Have the demands for the QMS been integrated into the business processes and has the management supported process awareness?\n ",
            "\n2. Have the guidelines and objectives for the QMS, which are based on the strategic orientation of the organisation, been defined and communicated?\n ",
            "\n3. Has the company defined and communicated the responsibilities and authorities necessary for the effective operation of the QMS?\n ",
            "\n4. Does management feel responsible for the effectiveness of the QMS?\n ",
            "\n5. Have customer requirements and applicable legal and regulatory requirements been identified, met and communicated throughout the organization?\n ",
            "\n6. Are the risks and opportunities relevant to the QMS known?\n ",
            "\n7. Have the objectives been defined together with the appropriate departmental and personal levels of the company?\n ",
            "\n1. Is there a fixed method for determining the need for modifications to the QMS and checking their implementation?\n ",
            "\n2. Have the hazards and opportunities to be addressed to assure that the QMS can achieve its intended result(s) been identified?\n ",
            "\n3. Has the company planned measures to deal with these risks and opportunities and included them in the system processes?\n ",
            "\n1. Is the monitoring or measurement to demonstrate the conformity of products and services related to specific requirements?\n ",
            "\n2. Has the company identified and provided the necessary resources to establish, implement, maintain and continuously improve the QMS (including human, environmental and infrastructure requirements)?\n ",
            "\n3. Has it been determined which information must be documented to comply with the required standards and which information is necessary for the effective implementation and operation of the QMS?\n ",
            "\n4. Has the company identified the knowledge required to operate its processes and to achieve conformity of products and services and introduced a learning process?\n ",
            "\n5. Has the company ensured that the employees who have an influence on the QMS have appropriate education, training or experience? Have measures been taken to ensure that these employees can acquire the necessary competence?\n ",
            "\n1. Is there a defined process to provide products and services that meet the requirements specified by the customer?\n ",
            "\n2. Are changes planned?\n ",
            "\n3. Are outsourced processes controlled and monitored?\n ",
            "\n4. Do you design and develop products or services?\n ",
            "\n5. Are the changes implemented in a controlled manner and steps are taken to mitigate adverse effects?\n ",
            "\n6. Is there a predefined process for reviewing information about products and services, inquiries, contracts or order processing and communicating with customers?\n ",
            "\n7. Is this verification carried out before the company undertakes to supply products and services?\n ",
            "\n8. Is it ensured that externally provided processes, products and services meet the specified requirements?\n ",
            "\n9. Have criteria been established for the evaluation, selection, monitoring of performance and re-evaluation of external providers?\n ",
            "\n10. Do the provide products and services the existence of documented information describing the characteristics of the products and services?\n ",
            "\n11. Do the provide products and services monitoring and analysis activities at proper stages to verify that the criteria for the control of processes and process outputs and the acceptance criteria for products and services are met?\n ",
            "\n12. Do the provide products and services monitoring and analysis activities at appropriate stages to confirm that standards for control of methods and process results, and approval criteria for products and services, have been reached?\n ",
            "\n13. Do the provide products and services the provision of recorded information defining the activities to be completed and the results to be reached?\n ",
            "\n14. Do the provide products and services the availability of reported information that defines the activities to be performed and the results to be achieved?\n ",
            "\n15. Do the provide products and services information on the competence of the persons performing the tasks?\n ",
            "\n16. Do the provide products and services the people implementing the tasks are qualified?\n ",
            "\n17. Is the property of customers or external suppliers used in the performance of the product or service?\n ",
            "\n18. Does the company have adequate methods to assure traceability during the operational method?\n ",
            "\n19. Is there a demand for handling the products and services after delivery, such as guarantee, sustaining services, recycling or final disposal?\n ",
            "\n20. Are these established and managed?\n ",
            "\n21. Are any nonconforming method outputs arranged so as to avert their unintended use?\n ",
            "\n1. Has it authenticated when the outcomes from observation and measurement shall be investigated and evaluated?\n ",
            "\n2. Have methods of observing customer perceptions of the provision of products and services been set?\n ",
            "\n3. Has an offer to perform management reviews been organised and performed?\n ",
            "\n4. Has the company set a process for an internal inspection of the QMS?\n ",
            "\n5. Has the company defined what needs to be observed and measured and the methods for monitoring, measurement, analysis and evaluation, to assure valid outcomes?\n ",
            "\n6. Has it fixed the demand or opportunities for developments within the QMS and how these will be put into management reviews?\n ",
            "\n1. Does the company operate proper processes for handling nonconformities and the associated improving actions?\n ",
            "\n2. Has the company decided on how it will discuss the necessity to continually develop the suitability, sufficiency, and effectiveness of the QMS?\n ",
            "\n3. Has the company determined and chose opportunities for development and implemented the required actions to meet customer demands and improve customer satisfaction?\n "
    ));

    public GAPAnalysisFormPDFExporter(GAPAnalysisForm gapAnalysisForm) throws IOException {
        this.gapAnalysisForm = gapAnalysisForm;
    }

    private void writeTableHeader(PdfPTable table) {
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(color);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);

        com.lowagie.text.Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(Color.WHITE);

        cell.setPhrase(new Phrase("\nQuestion\n ", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("\nResponse\n ", font));
        table.addCell(cell);
    }

    private void writeTableData(PdfPTable table) {
        Font font=new Font();
        font.setColor(Color.WHITE);
        cell=new PdfPCell(new Phrase("\n\tContext of the Organization\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(0));
        table.addCell("\n"+gapAnalysisForm.getQuestion1());
        table.addCell(questions.get(1));
        table.addCell("\n"+gapAnalysisForm.getQuestion2());
        table.addCell(questions.get(2));
        table.addCell("\n"+gapAnalysisForm.getQuestion3());
        table.addCell(questions.get(3));
        table.addCell("\n"+gapAnalysisForm.getQuestion4());
        table.addCell(questions.get(4));
        table.addCell("\n"+gapAnalysisForm.getQuestion5());
        table.addCell(questions.get(5));
        table.addCell("\n"+gapAnalysisForm.getQuestion6());
        cell=new PdfPCell(new Phrase("\n\tLeadership\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(6));
        table.addCell("\n"+gapAnalysisForm.getQuestion7());
        table.addCell(questions.get(7));
        table.addCell("\n"+gapAnalysisForm.getQuestion8());
        table.addCell(questions.get(8));
        table.addCell("\n"+gapAnalysisForm.getQuestion9());
        table.addCell(questions.get(9));
        table.addCell("\n"+gapAnalysisForm.getQuestion10());
        table.addCell(questions.get(10));
        table.addCell("\n"+gapAnalysisForm.getQuestion11());
        table.addCell(questions.get(11));
        table.addCell("\n"+gapAnalysisForm.getQuestion12());
        table.addCell(questions.get(12));
        table.addCell("\n"+gapAnalysisForm.getQuestion13());
        cell=new PdfPCell(new Phrase("\n\tPlanning\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(13));
        table.addCell("\n"+gapAnalysisForm.getQuestion14());
        table.addCell(questions.get(14));
        table.addCell("\n"+gapAnalysisForm.getQuestion15());
        table.addCell(questions.get(15));
        table.addCell("\n"+gapAnalysisForm.getQuestion16());
        cell=new PdfPCell(new Phrase("\n\tSupport\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(16));
        table.addCell("\n"+gapAnalysisForm.getQuestion17());
        table.addCell(questions.get(17));
        table.addCell("\n"+gapAnalysisForm.getQuestion18());
        table.addCell(questions.get(18));
        table.addCell("\n"+gapAnalysisForm.getQuestion19());
        table.addCell(questions.get(19));
        table.addCell("\n"+gapAnalysisForm.getQuestion20());
        table.addCell(questions.get(20));
        table.addCell("\n"+gapAnalysisForm.getQuestion21());
        cell=new PdfPCell(new Phrase("\n\tOperation\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(21));
        table.addCell("\n"+gapAnalysisForm.getQuestion22());
        table.addCell(questions.get(22));
        table.addCell("\n"+gapAnalysisForm.getQuestion23());
        table.addCell(questions.get(23));
        table.addCell("\n"+gapAnalysisForm.getQuestion24());
        table.addCell(questions.get(24));
        table.addCell("\n"+gapAnalysisForm.getQuestion25());
        table.addCell(questions.get(25));
        table.addCell("\n"+gapAnalysisForm.getQuestion26());
        table.addCell(questions.get(26));
        table.addCell("\n"+gapAnalysisForm.getQuestion27());
        table.addCell(questions.get(27));
        table.addCell("\n"+gapAnalysisForm.getQuestion28());
        table.addCell(questions.get(28));
        table.addCell("\n"+gapAnalysisForm.getQuestion29());
        table.addCell(questions.get(29));
        table.addCell("\n"+gapAnalysisForm.getQuestion30());
        table.addCell(questions.get(30));
        table.addCell("\n"+gapAnalysisForm.getQuestion31());
        table.addCell(questions.get(31));
        table.addCell("\n"+gapAnalysisForm.getQuestion32());
        table.addCell(questions.get(32));
        table.addCell("\n"+gapAnalysisForm.getQuestion33());
        table.addCell(questions.get(33));
        table.addCell("\n"+gapAnalysisForm.getQuestion34());
        table.addCell(questions.get(34));
        table.addCell("\n"+gapAnalysisForm.getQuestion35());
        table.addCell(questions.get(35));
        table.addCell("\n"+gapAnalysisForm.getQuestion36());
        table.addCell(questions.get(36));
        table.addCell("\n"+gapAnalysisForm.getQuestion37());
        table.addCell(questions.get(37));
        table.addCell("\n"+gapAnalysisForm.getQuestion38());
        table.addCell(questions.get(38));
        table.addCell("\n"+gapAnalysisForm.getQuestion39());
        table.addCell(questions.get(39));
        table.addCell("\n"+gapAnalysisForm.getQuestion40());
        table.addCell(questions.get(40));
        table.addCell("\n"+gapAnalysisForm.getQuestion41());
        table.addCell(questions.get(41));
        table.addCell("\n"+gapAnalysisForm.getQuestion42());
        cell=new PdfPCell(new Phrase("\n\tPerformance Evaluation\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(42));
        table.addCell("\n"+gapAnalysisForm.getQuestion43());
        table.addCell(questions.get(43));
        table.addCell("\n"+gapAnalysisForm.getQuestion44());
        table.addCell(questions.get(44));
        table.addCell("\n"+gapAnalysisForm.getQuestion45());
        table.addCell(questions.get(45));
        table.addCell("\n"+gapAnalysisForm.getQuestion46());
        table.addCell(questions.get(46));
        table.addCell("\n"+gapAnalysisForm.getQuestion47());
        table.addCell(questions.get(47));
        table.addCell("\n"+gapAnalysisForm.getQuestion48());
        cell=new PdfPCell(new Phrase("\n\tImprovement\n ",font));
        cell.setColspan(2);
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setBackgroundColor(color1);
        table.addCell(cell);
        table.addCell(questions.get(48));
        table.addCell("\n"+gapAnalysisForm.getQuestion49());
        table.addCell(questions.get(49));
        table.addCell("\n"+gapAnalysisForm.getQuestion50());
        table.addCell(questions.get(50));
        table.addCell("\n"+gapAnalysisForm.getQuestion51());
    }

    public void export(HttpServletResponse response) throws DocumentException, IOException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();

        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Paragraph paragraph = new Paragraph("ISO 9001:2015 GAP Analysis Report", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(paragraph);

        PdfPTable table = new PdfPTable(2);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {4f, 1f});
        table.setSpacingBefore(100);

        writeTableHeader(table);
        writeTableData(table);

        document.add(table);

        document.close();

    }
}
