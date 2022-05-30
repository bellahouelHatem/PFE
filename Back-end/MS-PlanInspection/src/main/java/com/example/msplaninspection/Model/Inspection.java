package com.example.msplaninspection.Model;

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
public class Inspection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String title;
    private String type;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
    @JsonIgnore
    private String inspectorUN;
    @JsonIgnore
    private String clientUN;
}