package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;


@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class RiskManagementForm {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String etat;
    @JsonIgnore
    private Long idInspection;
    private LocalDate DateCreation;
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
}