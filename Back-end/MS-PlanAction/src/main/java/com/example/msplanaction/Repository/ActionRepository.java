package com.example.msplanaction.Repository;

import com.example.msplanaction.Model.Action;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ActionRepository extends JpaRepository<Action,Long> {

    List<Action> findByClientUN(String clientUN);
}