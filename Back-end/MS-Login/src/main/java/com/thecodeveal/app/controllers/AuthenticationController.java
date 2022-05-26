package com.thecodeveal.app.controllers;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

import com.thecodeveal.app.Port.Port;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thecodeveal.app.config.JWTTokenHelper;
import com.thecodeveal.app.entities.User;
import com.thecodeveal.app.requests.AuthenticationRequest;
import com.thecodeveal.app.responses.LoginResponse;
import com.thecodeveal.app.responses.UserInfo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTTokenHelper jWTTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws InvalidKeySpecException, NoSuchAlgorithmException {
		System.out.println(authenticationRequest.getUserName());
		System.out.println(authenticationRequest.getPassword());
		UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(), authenticationRequest.getPassword());
		System.out.println(usernamePasswordAuthenticationToken.isAuthenticated());
		final Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
		System.out.println(authentication);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		User user=(User)authentication.getPrincipal();
		;
		String jwtToken ="";
		try {
			jwtToken=jWTTokenHelper.generateToken(user.getUsername(),user.getClass().getSimpleName());
		}
		catch (Exception e){
			System.out.println(e.getMessage());
		}
		
		LoginResponse response=new LoginResponse();
		response.setToken(jwtToken);
		

		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/auth/userinfo")
	public ResponseEntity<?> getUserInfo(Principal user){
		User userObj=(User) userDetailsService.loadUserByUsername(user.getName());

		UserInfo userInfo=new UserInfo();
//		userInfo.setFirstName(userObj.getFirstName());
//		userInfo.setLastName(userObj.getLastName());
		userInfo.setRoles(userObj.getAuthorities().toArray());
		return ResponseEntity.ok(userInfo);
	}
}
