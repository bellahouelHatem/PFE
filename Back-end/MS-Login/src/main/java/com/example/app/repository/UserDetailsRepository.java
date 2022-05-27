package com.example.app.repository;

import com.example.app.entities.User;
import org.springframework.data.repository.CrudRepository;

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
