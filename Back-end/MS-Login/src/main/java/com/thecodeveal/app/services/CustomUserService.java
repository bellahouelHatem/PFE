package com.thecodeveal.app.services;

import com.thecodeveal.app.registration.token.ConfirmationToken;
import com.thecodeveal.app.registration.token.ConfirmationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.thecodeveal.app.config.JWTTokenHelper;

import com.thecodeveal.app.entities.User;
import com.thecodeveal.app.repository.UserDetailsRepository;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.time.LocalDateTime;
import java.util.UUID;


@Service
public class CustomUserService implements UserDetailsService {
	private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	private ConfirmationTokenService confirmationTokenService;
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
			// TODO check of attributes are the same and
			// TODO if email not confirmed send confirmation email.

			throw new IllegalStateException("email already taken");
		}

		String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());


		user.setPassword(encodedPassword);

		userDetailsRepository.save(user);

		//String token = UUID.randomUUID().toString();

		String token = null;
		try {
			token = jwtTokenHelper.generateToken(user.getUsername());
		} catch (Exception e) {
			e.printStackTrace();
		}

		ConfirmationToken confirmationToken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				user
		);

		confirmationTokenService.saveConfirmationToken(confirmationToken);

//        TODO: SEND EMAIL

		return token;
	}

	public void enableUser(String email) {
		User user = userDetailsRepository.findByUserName(email).get();
		user.setEnabled(true);
		userDetailsRepository.save(user);


	}



}
