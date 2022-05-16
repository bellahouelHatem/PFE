package com.thecodeveal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.thecodeveal.app.entities.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;



@Transactional(readOnly = true)

public interface UserDetailsRepository extends CrudRepository<User, Long> {


	Optional<User> findByUserName(String userName);

	//@Transactional
	//@Modifying
	//@Query("UPDATE PFE.AUTH_USER_DETAILS a SET a.enabled = TRUE WHERE a.USER_NAME = ?1")
	//int enableUser(String userName);

}
