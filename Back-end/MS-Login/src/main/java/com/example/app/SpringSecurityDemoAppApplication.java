package com.example.app;

import com.example.app.entities.Administrator;
import com.example.app.entities.User;
import com.example.app.repository.AdministratorRepository;
import com.example.app.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class SpringSecurityDemoAppApplication {



	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	@PostConstruct
	public  void init() {
		try {
			User user = userDetailsRepository.findByUserName("dogguimohamedhabib@gmail.com").get() ;
		}catch (Exception e){
			if(true){
				User user1 = new Administrator() ;
				user1.setUserName("dogguimohamedhabib@gmail.com");
				user1.setPassword(passwordEncoder.encode("test1234"));
				user1.setCreatedAt(new Date());
				user1.setPhoneNumber("23345395");
				user1.setEnabled(true);
				userDetailsRepository.save(user1);
			}

		}



	}

	public static void main(String[] args) {


		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);

	}




}
