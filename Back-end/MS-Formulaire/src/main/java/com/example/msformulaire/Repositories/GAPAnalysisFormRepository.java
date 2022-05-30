package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.GAPAnalysisForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GAPAnalysisFormRepository extends JpaRepository<GAPAnalysisForm,Long> {
    GAPAnalysisForm findByIdInspection(Long id);
}
