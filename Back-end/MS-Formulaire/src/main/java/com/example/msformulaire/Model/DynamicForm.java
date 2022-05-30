package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;


    @Entity @Data @NoArgsConstructor @AllArgsConstructor
    public class DynamicForm {
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Id;
        @Column(updatable = true, name="Form", nullable = false, columnDefinition = "text")
        private String Form;
        private String titre;
        private String type;
        private LocalDate DateCreation;
        @JsonIgnore
        private String inspUN;
    }