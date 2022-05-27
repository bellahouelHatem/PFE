package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GAPAnalysisForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private LocalDate DateCreation;
    @JsonIgnore
    private String idInspection;
    @Column(updatable = true, name="question1", nullable = false, columnDefinition = "text")
    private String question1;
    @Column(updatable = true, name="question2", nullable = false, columnDefinition = "text")
    private String question2;
    @Column(updatable = true, name="question3", nullable = false, columnDefinition = "text")
    private String question3;
    @Column(updatable = true, name="question4", nullable = false, columnDefinition = "text")
    private String question4;
    @Column(updatable = true, name="question5", nullable = false, columnDefinition = "text")
    private String question5;
    @Column(updatable = true, name="question6", nullable = false, columnDefinition = "text")
    private String question6;
    @Column(updatable = true, name="question7", nullable = false, columnDefinition = "text")
    private String question7;
    @Column(updatable = true, name="question8", nullable = false, columnDefinition = "text")
    private String question8;
    @Column(updatable = true, name="question9", nullable = false, columnDefinition = "text")
    private String question9;
    @Column(updatable = true, name="question10", nullable = false, columnDefinition = "text")
    private String question10;
    @Column(updatable = true, name="question11", nullable = false, columnDefinition = "text")
    private String question11;
    @Column(updatable = true, name="question12", nullable = false, columnDefinition = "text")
    private String question12;
    @Column(updatable = true, name="question13", nullable = false, columnDefinition = "text")
    private String question13;
    @Column(updatable = true, name="question14", nullable = false, columnDefinition = "text")
    private String question14;
    @Column(updatable = true, name="question15", nullable = false, columnDefinition = "text")
    private String question15;
    @Column(updatable = true, name="question16", nullable = false, columnDefinition = "text")
    private String question16;
    @Column(updatable = true, name="question17", nullable = false, columnDefinition = "text")
    private String question17;
    @Column(updatable = true, name="question18", nullable = false, columnDefinition = "text")
    private String question18;
    @Column(updatable = true, name="question19", nullable = false, columnDefinition = "text")
    private String question19;
    @Column(updatable = true, name="question20", nullable = false, columnDefinition = "text")
    private String question20;
    @Column(updatable = true, name="question21", nullable = false, columnDefinition = "text")
    private String question21;
    @Column(updatable = true, name="question22", nullable = false, columnDefinition = "text")
    private String question22;
    @Column(updatable = true, name="question23", nullable = false, columnDefinition = "text")
    private String question23;
    @Column(updatable = true, name="question24", nullable = false, columnDefinition = "text")
    private String question24;
    @Column(updatable = true, name="question25", nullable = false, columnDefinition = "text")
    private String question25;
    @Column(updatable = true, name="question26", nullable = false, columnDefinition = "text")
    private String question26;
    @Column(updatable = true, name="question27", nullable = false, columnDefinition = "text")
    private String question27;
    @Column(updatable = true, name="question28", nullable = false, columnDefinition = "text")
    private String question28;
    @Column(updatable = true, name="question29", nullable = false, columnDefinition = "text")
    private String question29;
    @Column(updatable = true, name="question30", nullable = false, columnDefinition = "text")
    private String question30;
    @Column(updatable = true, name="question31", nullable = false, columnDefinition = "text")
    private String question31;
    @Column(updatable = true, name="question32", nullable = false, columnDefinition = "text")
    private String question32;
    @Column(updatable = true, name="question33", nullable = false, columnDefinition = "text")
    private String question33;
    @Column(updatable = true, name="question34", nullable = false, columnDefinition = "text")
    private String question34;
    @Column(updatable = true, name="question35", nullable = false, columnDefinition = "text")
    private String question35;
    @Column(updatable = true, name="question36", nullable = false, columnDefinition = "text")
    private String question36;
    @Column(updatable = true, name="question37", nullable = false, columnDefinition = "text")
    private String question37;
    @Column(updatable = true, name="question38", nullable = false, columnDefinition = "text")
    private String question38;
    @Column(updatable = true, name="question39", nullable = false, columnDefinition = "text")
    private String question39;
    @Column(updatable = true, name="question40", nullable = false, columnDefinition = "text")
    private String question40;
    @Column(updatable = true, name="question41", nullable = false, columnDefinition = "text")
    private String question41;
    @Column(updatable = true, name="question42", nullable = false, columnDefinition = "text")
    private String question42;
    @Column(updatable = true, name="question43", nullable = false, columnDefinition = "text")
    private String question43;
    @Column(updatable = true, name="question44", nullable = false, columnDefinition = "text")
    private String question44;
    @Column(updatable = true, name="question45", nullable = false, columnDefinition = "text")
    private String question45;
    @Column(updatable = true, name="question46", nullable = false, columnDefinition = "text")
    private String question46;
    @Column(updatable = true, name="question47", nullable = false, columnDefinition = "text")
    private String question47;
    @Column(updatable = true, name="question48", nullable = false, columnDefinition = "text")
    private String question48;
    @Column(updatable = true, name="question49", nullable = false, columnDefinition = "text")
    private String question49;
    @Column(updatable = true, name="question50", nullable = false, columnDefinition = "text")
    private String question50;
    @Column(updatable = true, name="question51", nullable = false, columnDefinition = "text")
    private String question51;
}
