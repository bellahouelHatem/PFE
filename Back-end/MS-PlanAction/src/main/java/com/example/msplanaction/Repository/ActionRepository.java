package com.example.msplanaction.Repository;

import com.example.msplanaction.Model.Action;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ActionRepository extends JpaRepository<Action,Long> {
}