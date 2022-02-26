package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Formulaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String Form;
}
