package com.example.msformulaire.Repositories;

import com.example.msformulaire.Model.FormUserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormUserRepository extends JpaRepository<FormUserData,Long> {

}