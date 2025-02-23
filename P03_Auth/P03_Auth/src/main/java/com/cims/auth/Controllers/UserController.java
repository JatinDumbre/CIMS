package com.cims.auth.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cims.auth.Entities.User;
import com.cims.auth.Services.UserService;

import Classes.RegisterUser;
import Classes.UserLogin;

//@CrossOrigin(origins = "http://localhost:3003")
@RestController
@RequestMapping("/auth")
public class UserController {
	@Autowired
	UserService uservice;
	
	@PostMapping("/login")
	public User login(@RequestBody UserLogin ul) {
		return uservice.getUser(ul.getEmail() , ul.getPassword());
	}
	@GetMapping("/getUser/{userid}")
	public User getUserById(@PathVariable int userid) {
	    return uservice.getUserById(userid);
	    
	    
	}
	@PostMapping("/register")
	public User register(@RequestBody RegisterUser ru) {
		return uservice.register(ru.getFname(),ru.getLname(),ru.getMob_no(),ru.getEmail(),ru.getAddress(),ru.getPassword(),ru.getAcc_id(),ru.getStatus());
	}
	
}
 