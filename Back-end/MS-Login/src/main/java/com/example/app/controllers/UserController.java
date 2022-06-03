package com.example.app.controllers;

import com.example.app.entities.Inspector;
import com.example.app.entities.User;
import com.example.app.repository.UserDetailsRepository;
import com.example.app.requests.AuthenticationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserDetailsRepository userDetailsRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PutMapping("/user/{userName}")
    public void updateInspector(@PathVariable String userName, @RequestBody AuthenticationRequest Password){
        User user =(User) userDetailsRepository.findByUserName(userName).get();
        user.setPassword(passwordEncoder.encode(Password.getPassword()));
        userDetailsRepository.save(user);
    }
    @GetMapping("/user")
    public List<User> GetUsers(){
        return (List<User>) userDetailsRepository.findAll();
    }
    @GetMapping("/user/{userName}")
    public User GetUser(@PathVariable String userName){
        return  userDetailsRepository.findByUserName(userName).get();
    }

}
