package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.DynamicForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FormRepository extends JpaRepository<DynamicForm,Long> {

    List<DynamicForm> findByType(String type);
}