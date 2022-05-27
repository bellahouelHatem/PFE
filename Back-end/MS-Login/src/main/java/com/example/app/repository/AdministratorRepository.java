package com.example.app.repository;

import com.example.app.entities.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministratorRepository extends JpaRepository<Administrator,Long> {
}
