package com.example.msformulaire.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormUserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(updatable = true, name="Form", nullable = false, columnDefinition = "text")
    private String Form;
    @JsonIgnore
    private String idInspection;
    private String status;
}