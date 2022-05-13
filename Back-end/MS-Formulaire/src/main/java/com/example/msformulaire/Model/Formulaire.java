package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDate;


@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Formulaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(updatable = true, name="Form", nullable = false, columnDefinition = "text")
    private String Form;
    private String Titre;
    private String Type;
    private LocalDate DateCreation;
}