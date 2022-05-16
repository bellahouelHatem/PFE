package com.example.msplaninspection.Repository;

import com.example.msplaninspection.Model.Inspection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InspectionRepository extends JpaRepository<Inspection,Long> {

}