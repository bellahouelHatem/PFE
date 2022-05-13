package com.example.msformulaire.repositories;

import com.example.msformulaire.Model.FormUserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormUserRepo extends JpaRepository<FormUserData,Long> {

}
