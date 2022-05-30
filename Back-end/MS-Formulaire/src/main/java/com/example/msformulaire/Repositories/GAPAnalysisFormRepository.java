package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.GAPAnalysisForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GAPAnalysisFormRepository extends JpaRepository<GAPAnalysisForm,Long> {
    List<GAPAnalysisForm> findByIdInspection(Long id);
}
