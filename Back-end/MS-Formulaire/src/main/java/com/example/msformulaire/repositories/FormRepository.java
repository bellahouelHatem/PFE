package com.example.msformulaire.repositories;

import com.example.msformulaire.Model.Formulaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Formulaire,Long> {
}
