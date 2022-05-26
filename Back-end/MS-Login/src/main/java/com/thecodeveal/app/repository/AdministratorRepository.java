package com.thecodeveal.app.repository;

import com.thecodeveal.app.entities.Administrator;
import com.thecodeveal.app.entities.Inspector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministratorRepository extends JpaRepository<Administrator,Long> {
}
