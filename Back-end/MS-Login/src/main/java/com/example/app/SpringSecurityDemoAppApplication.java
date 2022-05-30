package com.example.app;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;

import com.example.app.entities.Administrator;
import com.example.app.repository.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.app.entities.Authority;

@SpringBootApplication
public class SpringSecurityDemoAppApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);
	}
	
	

}
