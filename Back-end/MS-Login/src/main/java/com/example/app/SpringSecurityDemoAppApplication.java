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
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AdministratorRepository administratorRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);
	}
	
	@PostConstruct
	protected void init() {
		
		List<Authority> authorityList=new ArrayList<>();
		authorityList.add(createAuthority("INSPECTOR","Inspector role"));
		authorityList.add(createAuthority("SERVICEPROVIDER","Service provider role"));
		authorityList.add(createAuthority("ADMIN","Admin role"));
		Administrator user =new Administrator();
		user.setUserName("override");
		user.setPassword(passwordEncoder.encode("override"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);
		administratorRepository.save(user);
	}
	
	
	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}
	
	

}
