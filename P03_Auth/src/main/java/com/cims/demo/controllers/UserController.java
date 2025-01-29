package com.cims.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cims.demo.entities.User;
import com.cims.demo.services.UserService;

import Classes.RegisterUser;
import Classes.UserLogin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {
	@Autowired
	UserService uservice;
	
	@PostMapping("/login")
	public User login(@RequestBody UserLogin ul) {
		return uservice.getUser(ul.getEmail() , ul.getPassword());
	}
	
	@PostMapping("/register")
	public User register(@RequestBody RegisterUser ru) {
		return uservice.register(ru.getFname(),ru.getLname(),ru.getMob_no(),ru.getEmail(),ru.getAddress(),ru.getPassword(),ru.getAcc_id());
	}
	
}
