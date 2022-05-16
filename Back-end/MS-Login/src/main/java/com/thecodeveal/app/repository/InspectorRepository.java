package com.thecodeveal.app.repository;

import com.thecodeveal.app.entities.Inspector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InspectorRepository extends JpaRepository<Inspector,Long> {
}

