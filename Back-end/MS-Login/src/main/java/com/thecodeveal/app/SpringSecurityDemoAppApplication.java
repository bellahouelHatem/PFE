package com.thecodeveal.app;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;

import com.thecodeveal.app.entities.Administrator;
import com.thecodeveal.app.entities.Inspector;
import com.thecodeveal.app.repository.AdministratorRepository;
import com.thecodeveal.app.repository.InspectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.thecodeveal.app.entities.Authority;
import com.thecodeveal.app.entities.User;
import com.thecodeveal.app.repository.UserDetailsRepository;

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
