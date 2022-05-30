package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.GAPAnalysisForm;
import com.example.msformulaire.Model.RiskManagementForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RiskManagementFormRepository extends JpaRepository<RiskManagementForm,Long> {
    RiskManagementForm findByIdInspection(Long id);
}
