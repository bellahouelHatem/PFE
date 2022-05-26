package com.thecodeveal.app.repository;

import com.thecodeveal.app.entities.Inspector;
import com.thecodeveal.app.entities.ServiceProvider;
import com.thecodeveal.app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider,Long>{
    User findByUserName(String userName);
}
