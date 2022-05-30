package com.example.msplaninspection.Repository;

import com.example.msplaninspection.Model.Inspection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InspectionRepository extends JpaRepository<Inspection,Long> {
    List<Inspection> findByClientUNAndStatus(String x,String status);
    List<Inspection> findByInspectorUNAndStatus(String x,String status);


}