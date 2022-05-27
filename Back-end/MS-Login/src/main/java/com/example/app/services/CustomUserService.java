package com.example.app.services;

import com.example.app.config.JWTTokenHelper;
import com.example.app.entities.ServiceProvider;
import com.example.app.entities.User;
import com.example.app.registration.token.ConfirmationToken;
import com.example.app.repository.ServiceProviderRepository;
import com.example.app.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class CustomUserService implements UserDetailsService {
	private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	@Autowired
	private ServiceProviderRepository serviceProviderRepository;
	@Autowired
	private ConfirmationTokenService confirmationTokenService;
	@Autowired
	private JWTTokenHelper jwtTokenHelper;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user=userDetailsRepository.findByUserName(email).get();

		if(null==user) {
			throw new UsernameNotFoundException("User Not Found with email "+email);
		}
		return user;
	}


	public String signUpUser(User user) {
		boolean userExists = userDetailsRepository.findByUserName(user.getUsername()).isPresent();

		if (userExists) {
			throw new IllegalStateException("email already taken");
		}
		serviceProviderRepository.save((ServiceProvider) user);
		String token = "";
		try {
			token = jwtTokenHelper.generateToken(user.getUsername(),user.getClass().getSimpleName());
		} catch (Exception e) {
			System.out.println(e.getMessage());;
		}

		ConfirmationToken confirmationToken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				user
		);

		confirmationTokenService.saveConfirmationToken(confirmationToken);
		return token;
	}

	public void enableUser(String email) {
		User user = userDetailsRepository.findByUserName(email).get();
		user.setEnabled(true);
		userDetailsRepository.save(user);


	}



}
