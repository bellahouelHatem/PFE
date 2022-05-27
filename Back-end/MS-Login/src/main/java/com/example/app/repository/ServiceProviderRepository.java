package com.example.app.repository;

import com.example.app.entities.User;
import com.example.app.entities.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider,Long>{
    User findByUserName(String userName);
}
