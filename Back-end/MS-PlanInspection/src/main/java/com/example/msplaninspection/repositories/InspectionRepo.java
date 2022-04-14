package com.example.msplaninspection.repositories;

import com.example.msplaninspection.Model.Inspection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InspectionRepo extends JpaRepository<Inspection,Long> {

}
