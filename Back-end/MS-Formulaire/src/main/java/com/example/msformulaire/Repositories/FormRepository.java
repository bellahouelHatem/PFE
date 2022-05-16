package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.DynamicForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<DynamicForm,Long> {
}