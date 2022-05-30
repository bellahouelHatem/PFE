package com.example.app.repository;

import com.example.app.entities.Inspector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InspectorRepository extends JpaRepository<Inspector,Long> {
    Inspector findByUserName(String s);
}

